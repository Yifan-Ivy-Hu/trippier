/* eslint-dsiable */


export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieWlmYW5pdnkiLCJhIjoiY2s0MDJrN3BrMjFpNzNkbnpuNWE1eHMwNSJ9.3Oo4KbLqhkdlFv5ugK3Ajw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yifanivy/ck403jf1y8ucy1cmndc6xgpic',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: true
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 100
    }
  });
};
