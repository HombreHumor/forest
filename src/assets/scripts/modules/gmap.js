export default () => {
  (function initMap() {
    const google = window.google;
    const map = new google.maps.Map(document.getElementById("gmap"), {
      zoom: 14,
      center: {
        lat: 55.018402,
        lng: 73.341074
      },
      styles: [{
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{
              saturation: 36
            },
            {
              color: "#333333"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [{
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [{
            visibility: "off"
          }]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{
              color: "#fefefe"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{
              color: "#fefefe"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{
              color: "#f5f5f5"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{
              color: "#f5f5f5"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{
              color: "#dedede"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{
              color: "#ffffff"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
              color: "#ffffff"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{
              color: "#ffffff"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{
              color: "#f2f2f2"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{
              color: "#e9e9e9"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{
            color: "#6c9c5a"
          }]
        }
      ],
      mapTypeControl: false,
      zoomControl: true,
      streetViewControl: true,
      fullscreenControl: true,
    });

    const image = {
      url: "https://raw.githubusercontent.com/OlBol/AdvancedCourse-Project/master/img/map-marker.png",
      size: new google.maps.Size(30, 40)
    };

    const marker = new google.maps.Marker({
      position: {
        lat: 55.023118,
        lng: 73.377666
      },
      map: map,
      icon: image
    });

    marker.setMap(map);
  })();
}