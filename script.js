

const locations = [
    { lat: -22.970722, lng: -43.182365 }, // Rio De Janeiro
    { lat: 5.593222, lng: -0.205874 }, // Accra - Ghana
    { lat: 48.864716, lng: 2.349014 }, // Paris - France
    { lat: 19.076090, lng: 72.877426 }, // Mumbai - India
    { lat: 25.761681, lng: -80.191788 }, // Miami  - Florida
    // Add more locations as needed
];

// Initialize and display the map
function initMap() {
    // Create a new map centered on a specific location
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 }, // Center the map at 0,0 initially
        zoom: 2,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ], // Initial zoom level
    });

    const geocoder = new google.maps.Geocoder();

    const loginButton = document.getElementById("login")
    function showLogin() {
        console.log("clicked");
        loginButton.click()
    }
    // Iterate over the locations array and add markers to the map
    locations.forEach((location) => {
        geocoder
            .geocode({ location: location }).then((response) => {
                const address = response.results[0].address_components[3];
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: "Headquarter",
                    label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: `${address.long_name}` }
                });

                google.maps.event.addListener(marker, 'click', showLogin);
            })



    });
}