'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//* Creating Classes For Refactoring Code.
//* Concept of OOP
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      //* the _loadMap is treated as regular function.
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Couldn't get the Location ):");
        }
      );
    }
  }

  _loadMap(position) {
    {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(this);

      console.log('Latitude', latitude);
      console.log('Longitude', longitude);

      console.log(`https://www.google.com/maps/@${longitude},${latitude}`);

      const coords = [latitude, longitude];

      this.#map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.#map);

      //* adding event on map leaflet object
      this.#map.on('click', this._showForm.bind(this));
    }
  }

  _showForm(mapE) {
    //* We don't need this mapE event here in this function, but we need it outside it(form event listener).
    //* We copy it to a global variable(mapEvent) to access it outside the scope.
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const { lat, lng } = this.#mapEvent.latlng;

    //* Clearing all the fields, when the form submit.
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 250,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();
