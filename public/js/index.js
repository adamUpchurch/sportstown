var spots = [];

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getLocations(teamid) {
    const url='/team/map/' + teamid;
    
    var x = document.getElementById("team_select");

    var i;
    for (i = 0; i < x.length; i++) {
      if(teamid == x.options[i].value) {
        document.getElementById("team_select").selectedIndex = i
      }
    }  
    return fetch(url)
            .then((response) => response.json())
            .then(({team}) => {
              console.log(team)
              addMarker(team.homefields, team.logo)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
}

function addMarker(homefields, logo) {
  homefields.forEach(function(sc) {
    spots.push(sc)
    var infowindow = new google.maps.InfoWindow({
      content: "<h5>"+ sc.yelp.name + "</h5> <a href=" + sc.yelp.url + "target='_blank'>Go to their yelp</a>"
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(sc.geometry.coordinates[0], sc.geometry.coordinates[1]),
      icon: {
        url: logo ? logo : 'https://sportstown.s3.us-east-2.amazonaws.com/Logos/football.png',
        scaledSize: new google.maps.Size(50, 50)
      },
      map: map,
      title: sc.location,
      animation: google.maps.Animation.DROP
    })
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  })
  render(spots, template, '#listings');
}

var template = (locals) => {  
    var temp = "<ul style='padding-top: 10px;'>"
    console.log(locals)
    locals.forEach( function(local) {    
        console.log(local)
        temp += `<li class='listing' style="color:black; font-size: 20px;"> ${local.yelp.name} - ${local.yelp.location.city}, ${local.yelp.location.state} - <span><a href='${local.yelp.url}' target="_blank">Check out their yelp</a></span></li>`
    })
    temp = temp + "</ul>"
    console.log(temp)

    return temp
};

var render = (locals, template, selector) => {
	var node = document.querySelector(selector);
    if (!node) return;
	node.innerHTML = template(locals);
};

function initMap() {
  var lat = 33.749
  var lng = -84.3880
  if (null) {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
      lat = position.coords.latitude ? position.coords.latitude : 36.0907578
      lng = position.coords.longitude ? position.coords.longitude : -119.5948303
    })
  }

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 12
  })
  console.log(lat, lng)
  
}

var map;
let {team_id} = getUrlVars('team_id')
let locations = getLocations(team_id)
console.log(spots)


