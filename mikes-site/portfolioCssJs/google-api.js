function initMap() {
    var options = {
        zoom:5,
        center: {
            lat: 39.734650,
            lng: -99.375242
        }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    // add marker

    var image =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    var marker = new google.maps.Marker({
        position: {
            lat: 37.5779,
            lng: -122.3481
        },
        // adds it to the map
        map: map,
        icon: image
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h2>My Hometown</h2>'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    })



    // array of markers
    var markers= [
    {
        //Beth PA
        coords: {
            lat: 40.6259,
            lng: -75.3705
        },
        content: '<h2>Spiegel Lives Here</h2>'
    },
    {
         //OKC
        coords: {
            lat: 35.4676,
            lng: -97.5164
        },
        content: '<h2>Paul Lives Here</h2>'
    },
    {
         //stale
        coords: {
            lat: -78.944031,
            lng: 34.915835
        },
        content: '<h2>Stale Lives Here</h2>'
    }
    ,
    {
         //cliff
        coords: {
            lat: 43.673459,
            lng:-79.358326
        },
        content: '<h2>Cliff Lives Here</h2>'
    },
    {
         //Shihlin
        coords: {
            lat: 35.129122,
            lng: -106.596764
        },
        content: '<h2>Shihlin Lives Here</h2>'
    }
    ,
    {
         //Teri
        coords: {
            lat: 30.267153,
            lng: -97.743057
        },
        content: '<h2>Teri Lives Here</h2>'
    },
    {
         //Chris
        coords: {
            lat: 29.760427,
            lng: -95.369804
        },
        content: '<h2>Chris Lives Here</h2>'
    },
    {
         //Chase
        coords: {
            lat: 39.739235,
            lng: -104.990250
        },
        content: '<h2>Chase Lives Here</h2>'
    },
    {
         //Rogan
        coords: {
            lat: 45.512230,
            lng: -122.658722
        },
        content: '<h2>Rogan Lives Here</h2>'
    },
    {
         //Stephen
        coords: {
            lat: 30.379040,
            lng: -97.724605
        },
        content: '<h2>Stephen Lives Here</h2>'
    },
    {
         //Cookie
        coords: {
            lat: 50.980912,
            lng: -93.920912
        },
        content: '<h2>Cookie Lives Here</h2>'
    },
    {
         //Nime
        coords: {
            lat: 36.162663,
            lng: -86.781601
        },
        content: '<h2>Nime Lives Here</h2>'
    }
    ];



    //loop through markers
    for (var i = 0; i<markers.length; i++){
        addMarker(markers[i]);
        }
    

    // add markers
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            // adds it to the map
            map: map,
            icon: props.iconImage
        });
        //check for custom icon
        if (props.iconImage) {
            // set icon image
            marker.setIcon(props.iconImage);
        }
        //check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            })
        }
    }
}