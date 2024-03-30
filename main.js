mapboxgl.accessToken = 'MAPBOX_API_KEY_PLACEHOLDER'; // Replace this with your actual Mapbox API key

window.onload = function() {
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: [150.65, -33.7385], // starting position [lng, lat]
        zoom: 14.5, // starting zoom
        accessToken: mapboxgl.accessToken // Provide the access token here
    });

    // Add a marker to the map
    new mapboxgl.Marker()
        .setLngLat([150.65, -33.7385])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('Location: Emu Heights NSW, Australia'))
        .addTo(map);
};