import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';
import OSM from 'ol/source/OSM.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
const baseUrl = 'https://';
const urls = [
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m50m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m45m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m40m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m35m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m30m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m25m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m20m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m15m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m10m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m05m/{z}/{x}/{y}.png',
  baseUrl +
    'mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png',
];

const source = new XYZ();

const map = new Map({
  target: 'map',
  layers: [
   new TileLayer({
      source: new StadiaMaps({
        layer: 'alidade_smooth_dark',
        retina: true,
        // apiKey: ''
      }),
    }),
    new TileLayer({
      source: source,
    }),
   
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

function updateUrl(index) {
  source.setUrl(urls[index]);
}

var x = 0;
setInterval(() => {
  x = x + 1;
  updateUrl(x);
  if (x > 10) {
   updateUrl(10);
   setTimeout(function(){ x = 0; }, 3000);
    
    
  }
}, 500);
