## README for Mapty: Workout Mapping Application

### Overview
**Mapty** is a web-based application that helps users track their workouts on a map. The app allows users to log their running or cycling activities, track the duration, distance, and other related metrics, and visualize their routes on an interactive map. Built with modern web technologies, Mapty provides a simple, intuitive interface for fitness enthusiasts who want to keep track of their physical activities.

### Features
- **Interactive Map Integration:** Users can visualize their workouts on a map powered by Leaflet.js.
- **Workout Types:** Supports both running and cycling activities.
- **Form Input:** Users can input workout details such as distance, duration, cadence (for running), and elevation gain (for cycling).
- **Persistent Storage:** Workouts are stored in the browser's local storage, allowing data to persist across sessions.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.
- **Dynamic Rendering:** Workouts are dynamically rendered on the map and listed in the sidebar with relevant details.

### Project Structure
- **HTML** (`index.html`): Defines the structure of the application, including the sidebar, form inputs, and map container.
- **CSS** (`style.css`): Handles the styling of the application, including responsive design adjustments, form layout, and workout list styles.
- **JavaScript** (`script.js`): Contains the core functionality of the application, including handling user interactions, managing workouts, interacting with the map, and storing data locally.

### Technologies Used
- **HTML5**: For structuring the web page content.
- **CSS3**: For styling the user interface and ensuring responsiveness.
- **JavaScript (ES6+)**: For application logic, including object-oriented programming principles.
- **Leaflet.js**: An open-source library for rendering interactive maps.
- **Google Fonts**: Used for custom font styles (Manrope).
- **LocalStorage**: For storing workout data persistently in the user's browser.

### How to Use
1. **Open the Application**: Load the `index.html` file in your browser.
2. **Allow Location Access**: Upon loading, the app will request access to your location to center the map on your current position.
3. **Log a Workout**:
   - Click on the map to select a location for your workout.
   - Choose the type of workout (Running or Cycling).
   - Fill in the details (Distance, Duration, etc.).
   - Submit the form to log the workout.
4. **View Workouts**: Logged workouts will appear in the sidebar and as markers on the map.
5. **Persist Data**: Close and reopen the app, and your workouts will still be available thanks to local storage.

### Installation and Setup
1. **Clone the Repository**: `git clone <repository_url>`
2. **Navigate to the Project Directory**: `cd mapty`
3. **Open in Browser**: Double-click on the `index.html` file or serve it using a local development server.

### Future Enhancements
- **User Authentication**: Allow users to create accounts and sync workouts across devices.
- **Social Sharing**: Enable users to share their workout maps on social media.
- **Advanced Analytics**: Introduce more detailed statistics and charts to analyze workout data over time.

### License
This project is licensed under the MIT License. Feel free to use it for learning or portfolio purposes, but please do not claim it as your own or use it for teaching.

---

**Author**: [Abuzar RaziQ](https://www.github.com/abuzarraziqgithub)

---

### Credits
- **Leaflet.js** for the interactive map functionality.
- **Google Fonts** for providing the custom font used in the project.
- **OpenStreetMap** for map data and tile layers.