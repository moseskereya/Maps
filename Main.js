
    const MapKey = 'pk.eyJ1IjoibW9zZXM3NyIsImEiOiJja2E1cGlnMGwwMmVuM2hwZTd5cjhsMWVyIn0.mpwzIZMybaDJDN2iAOer0g';

    mapboxgl.accessToken = MapKey;

    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom : 1.8,
    center : [0, 0]
    });

        fetch("/Data.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(report => {
                const countryName = report.name;
                const lat = report.latitude;
                const lng = report.longitude;

                var marker = new mapboxgl.Marker({
                    color :  "crimson",
                    draggable : false
                }).setLngLat([lat, lng]).addTo(map);
         });

         if(marker.draggable === true){
             return "bule"
         }

});

