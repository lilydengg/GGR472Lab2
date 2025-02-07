mapboxgl.accessToken = 'pk.eyJ1IjoibGlseWRlbmciLCJhIjoiY201eGIwOG5jMDB6ZDJqcHJrdGtudzVscSJ9.-cRhTqv-44DxjWWHAi9GmQ'; // I added default public map token from my apbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/lilydeng/cm6tys6di01bo01ry4vv111um', // style URL
    center: [-79.392, 43.6633], // starting position here so the viewer is placed at the Queen's Park area
    zoom: 15, // starting zoom at this number so you can see all the libraries and SS
});

