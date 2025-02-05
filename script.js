mapboxgl.accessToken = 'pk.eyJ1IjoibGlseWRlbmciLCJhIjoiY201eGIwOG5jMDB6ZDJqcHJrdGtudzVscSJ9.-cRhTqv-44DxjWWHAi9GmQ'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/lilydeng/cm6ieis68005q01ryh8rxc14d', // style URL
    center: [-79.39, 43.66], // starting position [lng, lat]
    zoom: 14, // starting zoom 
});

map.on('load', () => {
    // Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });
});

// Add a data source from a GeoJSON file
map.addSource('buildings-data', {
    type: 'geojson',
    data: 'https://github.com/lilydengg/GGR472Lab2/tree/main/databuildings.geojson' // Your URL to your buildings.geojson file
});
map.addLayer({
    'id': 'buildings-point',
    'type': 'circle',
    'source': 'buildings-data',
    'paint': {
        'circle-radius': 5,
        'circle-color': '#007cbf'
    }
});