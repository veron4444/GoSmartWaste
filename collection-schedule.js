// Replace with your own values
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const calendarId = 'YOUR_CALENDAR_ID';

// Load the Google API Client Library
const script = document.createElement('script');
script.src = 'https://apis.google.com/js/api.js';
document.head.appendChild(script);

// Set up the API client
gapi.client.setApiKey(clientId);
gapi.client.setAuthorizationToken({
    'access_token': 'YOUR_ACCESS_TOKEN' // Obtain an access token using OAuth 2.0 flow
});

// Function to fetch the bus schedule
function fetchBusSchedule() {
    gapi.client.calendar.events.list({
        'calendarId': calendarId,
        'timeMin': (new Date()).toISOString(),
        'singleEvents': true,
        'orderBy': 'startTime'
    }).then(response => {
        const events = response.result.items;
        const busSchedule = [];

        events.forEach(event => {
            const startTime = event.start.dateTime;
            const endTime = event.end.dateTime;
            const busRoute = event.summary;

            busSchedule.push({
                'route': busRoute,
                'startTime': startTime,
                'endTime': endTime
            });
        });

        // Display the bus schedule
        const scheduleList = document.getElementById('schedule-list');
        scheduleList.innerHTML = '';

        busSchedule.forEach(schedule => {
            const listItem = document.createElement('li');
            listItem.textContent = `Bus Route: ${schedule.route}, Start Time: ${schedule.startTime}, End Time: ${schedule.endTime}`;
            scheduleList.appendChild(listItem);
        });
    }).catch(error => {
        console.error('Error fetching bus schedule:', error);
    });
}

// Button click event handler
document.getElementById('check-schedule').addEventListener('click', fetchBusSchedule);

document.getElementById('google-calendar-toggle').addEventListener('change', function() {
    alert('Google Calendar is now ' + (this.checked ? 'enabled' : 'disabled'));
});

let map;
let marker;

// Define boundaries for Kuala Lumpur
const KL_BOUNDARIES = {
    north: 3.1734, // Northern boundary
    south: 3.1000, // Southern boundary
    east: 101.7500, // Eastern boundary
    west: 101.6000 // Western boundary
};

function initMap() {
    // Set the center to Kuala Lumpur, Malaysia
    const malaysiaLocation = { lat: 3.1390, lng: 101.6869 };

    // Create the map
    map = L.map('map').setView([malaysiaLocation.lat, malaysiaLocation.lng], 12); // Set initial view

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a draggable marker
    marker = L.marker(malaysiaLocation, { draggable: true }).addTo(map);

    // Add a listener for the marker's drag event
    marker.on('dragend', function(event) {
        const position = marker.getLatLng();
        const lat = position.lat;
        const lng = position.lng;

        // Check if the new position is within the boundaries
        if (lat >= KL_BOUNDARIES.south && lat <= KL_BOUNDARIES.north && lng >= KL_BOUNDARIES.west && lng <= KL_BOUNDARIES.east) {
            document.getElementById("selected-location").innerText = `Selected Location: Latitude: ${lat}, Longitude: ${lng}`;
        } else {
            // If out of bounds, reset the marker to the last valid position
            alert("You can only drag the marker within Kuala Lumpur.");
            marker.setLatLng(malaysiaLocation);
        }
    });

    // Add a click listener to the map
    map.on("click", function(event) {
        placeMarker(event.latlng);
    });
}

// Function to place a marker on the map
function placeMarker(location) {
    // Check if the clicked location is within the boundaries
    if (location.lat >= KL_BOUNDARIES.south && location.lat <= KL_BOUNDARIES.north && location.lng >= KL_BOUNDARIES.west && location.lng <= KL_BOUNDARIES.east) {
        marker.setLatLng(location); // Move the marker to the clicked location
        document.getElementById("

