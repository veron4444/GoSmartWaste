// Function to generate random collection points
function generateRandomCollectionPoints(stateCoords, count) {
    const points = [];
    for (let i = 0; i < count; i++) {
        const latOffset = (Math.random() - 0.5) * 0.1; // Random offset for latitude
        const lngOffset = (Math.random() - 0.5) * 0.1; // Random offset for longitude
        const status = Math.random() < 0.33 ? 'empty' : (Math.random() < 0.5 ? 'half' : 'full'); // Random status
        points.push({
            lat: stateCoords.lat + latOffset,
            lng: stateCoords.lng + lngOffset,
            status: status
        });
    }
    return points;
}

// Define states and their coordinates
const states = {
    Johor: { lat: 1.4927, lng: 103.7414 },
    Kedah: { lat: 6.1000, lng: 100.3651 },
    Kelantan: { lat: 6.1256, lng: 102.2399 },
    Malacca: { lat: 2.1896, lng: 102.2500 },
    NegeriSembilan: { lat: 2.7260, lng: 101.7970 },
    Pahang: { lat: 4.2090, lng: 103.0450 },
    Penang: { lat: 5.4164, lng: 100.3288 },
    Perak: { lat: 4.5965, lng: 101.0911 },
    Perlis: { lat: 6.4425, lng: 100.1925 },
    Sabah: { lat: 5.9804, lng: 116.0735 },
    Sarawak: { lat: 1.5536, lng: 110.3592 },
    Selangor: { lat: 3.0738, lng: 101.5183 },
    Terengganu: { lat: 5.2743, lng: 103.1400 },
    KualaLumpur: { lat: 3.139, lng: 101.6869 },
    Putrajaya: { lat: 2.9260, lng: 101.6540 }
};

// Generate collection points for each state
let collectionPoints = [];
for (const state in states) {
    const points = generateRandomCollectionPoints(states[state], 10); // Generate 10 points for each state
    collectionPoints = collectionPoints.concat(points); // Combine all points
}

// Initialize the map
function initMap() {
    // Create a map centered on Malaysia
    const map = L.map('map').setView([4.2105, 101.9758], 5); // Coordinates for Malaysia

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add collection points to the map
    collectionPoints.forEach(point => {
        let color;

        // Determine the color based on the status
        switch (point.status) {
            case 'empty':
                color = 'gray'; // No color means not filled
                break;
            case 'half':
                color = 'yellow'; // Yellow means half filled
                break;
            case 'full':
                color = 'red'; // Red means full
                break;
            default:
                color = 'gray'; // Default to gray if status is unknown break;
        }

        // Create a circle marker for each collection point
        L.circleMarker([point.lat, point.lng], {
            radius: 8,
            fillColor: color,
            color: color,
            fillOpacity: 0.5,
            stroke: false
        }).addTo(map);
    });
}

// Call the initMap function when the window loads
window.onload = initMap;

