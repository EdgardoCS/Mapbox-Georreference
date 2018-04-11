var addSector18;
var removeSector18;
var addSector27;
var removeSector27;

document.getElementById('S18').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addSector18 = false;
    removeSector18 = true;
  }
  if (e.target.checked == true) {
    addSector18 = true;
    removeSector18 = false;
  }
});
document.getElementById('S27').addEventListener('change', function(e) {
  if (e.target.checked == false) {
    addSector27 = false;
    removeSector27 = true;
  }
  if (e.target.checked == true) {
    addSector27 = true;
    removeSector27 = false;
  }
});

function viewSector() {
  var isSectorSelected = [addSector18, addSector27];
  if (map.getLayer("sector18")) {
    map.removeLayer("sector18");
  }
  if (map.getLayer("sector27")) {
    map.removeLayer("sector27");
  }
  if(map.getLayer("CESFAM MENA")){
    map.removeLayer("CESFAM MENA");
  }
  for (i = 0; i < 1; i++) {
    if (isSectorSelected[0] == true) {
      map.addLayer(sector18);
      map.addLayer(mena);
    }
    if (isSectorSelected[1] == true) {
      map.addLayer(sector27);
    }
  }
}
var mena = {
  "id": "CESFAM MENA",
  "type": "circle",
  "source": {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-71.631230, -33.048942]
        },
        "properties": {},
      }]
    }
  },
  "layout": {
    'visibility': 'visible'
  },
  "paint": {
    "circle-radius": 10,
    "circle-color": "#727272"
  },
};
var sector18 = {
  "id": "sector18",
  "type": "fill",
  "source": {
    "type": "geojson",
    "data": {
      "features": [{
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.629459, -33.051],
                [-71.6292, -33.05116],
                [-71.628962, -33.051484],
                [-71.629085, -33.051932],
                [-71.628934, -33.052164],
                [-71.628456, -33.052316],
                [-71.628174, -33.052148],
                [-71.627932, -33.051771],
                [-71.627368, -33.051613],
                [-71.626853, -33.051791],
                [-71.626326, -33.052069],
                [-71.626124, -33.0524],
                [-71.626333, -33.052757],
                [-71.626298, -33.053129],
                [-71.625906, -33.053411],
                [-71.625549, -33.053951],
                [-71.625917, -33.054505],
                [-71.626493, -33.055597],
                [-71.626768, -33.056373],
                [-71.627302, -33.05721],
                [-71.627741, -33.057641],
                [-71.627394, -33.057975],
                [-71.627523, -33.058687],
                [-71.629196, -33.060069],
                [-71.629304, -33.060566],
                [-71.630274, -33.060953],
                [-71.630378, -33.061586],
                [-71.631051, -33.06208],
                [-71.630967, -33.062755],
                [-71.631771, -33.062981],
                [-71.63307, -33.064009],
                [-71.633412, -33.064834],
                [-71.634109, -33.066654],
                [-71.637285, -33.065467],
                [-71.636693, -33.062348],
                [-71.63675, -33.062029],
                [-71.636878, -33.061935],
                [-71.637228, -33.061738],
                [-71.637449, -33.06121],
                [-71.637315, -33.060775],
                [-71.637011, -33.060206],
                [-71.636881, -33.059654],
                [-71.636901, -33.058908],
                [-71.637352, -33.058273],
                [-71.638611, -33.058164],
                [-71.635558, -33.055734],
                [-71.633497, -33.053054],
                [-71.632371, -33.051968],
                [-71.630708, -33.051274],
                [-71.630225, -33.051284],
                [-71.629761, -33.0512],
                [-71.629459, -33.051]
              ]
            ],
            "type": "Polygon"
          },
          "id": "44a4739a53d0573ed51fb4c5f84d735e"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.631238, -33.048528],
                [-71.631279, -33.04882],
                [-71.630612, -33.049139],
                [-71.630389, -33.049447],
                [-71.63008, -33.049725],
                [-71.629492, -33.049815],
                [-71.629267, -33.050125],
                [-71.629439, -33.05048],
                [-71.629665, -33.050756],
                [-71.629506, -33.051005],
                [-71.62909, -33.051237],
                [-71.628979, -33.051624],
                [-71.628968, -33.051875],
                [-71.629086, -33.052067],
                [-71.628875, -33.05212],
                [-71.628669, -33.052262],
                [-71.628344, -33.052224],
                [-71.627841, -33.051709],
                [-71.627219, -33.05156],
                [-71.626277, -33.051992],
                [-71.626105, -33.052395],
                [-71.626357, -33.052831],
                [-71.626147, -33.053217],
                [-71.625726, -33.053499],
                [-71.625482, -33.053922],
                [-71.625907, -33.054517],
                [-71.626119, -33.055],
                [-71.626554, -33.055718],
                [-71.626816, -33.05642],
                [-71.627231, -33.057116],
                [-71.627694, -33.057605],
                [-71.627491, -33.057984],
                [-71.627566, -33.0587],
                [-71.628087, -33.059189],
                [-71.628854, -33.059856],
                [-71.629243, -33.060007],
                [-71.629437, -33.060612],
                [-71.63028, -33.060984],
                [-71.630405, -33.061627],
                [-71.630937, -33.062001],
                [-71.631038, -33.06265],
                [-71.630203, -33.06241],
                [-71.629685, -33.063285],
                [-71.62765, -33.062486],
                [-71.627053, -33.060946],
                [-71.626762, -33.05981],
                [-71.62644, -33.059003],
                [-71.625607, -33.058109],
                [-71.625602, -33.057064],
                [-71.625053, -33.055567],
                [-71.624648, -33.05505],
                [-71.624023, -33.053383],
                [-71.623603, -33.052959],
                [-71.623358, -33.052673],
                [-71.623349, -33.051884],
                [-71.623032, -33.050959],
                [-71.622952, -33.050153],
                [-71.623261, -33.049463],
                [-71.623257, -33.04908],
                [-71.623199, -33.048656],
                [-71.623416, -33.047938],
                [-71.623685, -33.046974],
                [-71.623654, -33.045937],
                [-71.624029, -33.045645],
                [-71.624983, -33.046308],
                [-71.62478, -33.046973],
                [-71.625301, -33.047365],
                [-71.625644, -33.047552],
                [-71.626317, -33.047514],
                [-71.627101, -33.047528],
                [-71.62787, -33.047573],
                [-71.62802, -33.047473],
                [-71.628534, -33.047895],
                [-71.629008, -33.047909],
                [-71.629996, -33.048346],
                [-71.630377, -33.048614],
                [-71.630789, -33.048627],
                [-71.631043, -33.048399],
                [-71.631238, -33.048528]
              ]
            ],
            "type": "Polygon"
          },
          "id": "62b186339b7f4704e5d598d1ce997e44"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.626682, -33.044468],
                [-71.626085, -33.045215],
                [-71.626218, -33.045938],
                [-71.62668, -33.046293],
                [-71.627031, -33.047184],
                [-71.627719, -33.04731],
                [-71.628434, -33.047862],
                [-71.629328, -33.048004],
                [-71.630153, -33.048394],
                [-71.630762, -33.048626],
                [-71.631058, -33.04842],
                [-71.631226, -33.04853],
                [-71.631203, -33.048757],
                [-71.630534, -33.049143],
                [-71.630335, -33.04944],
                [-71.630015, -33.049748],
                [-71.629547, -33.049779],
                [-71.629307, -33.050027],
                [-71.629366, -33.050342],
                [-71.629628, -33.050742],
                [-71.629455, -33.050942],
                [-71.629741, -33.051159],
                [-71.630211, -33.051249],
                [-71.630725, -33.051303],
                [-71.632314, -33.051888],
                [-71.63346, -33.053008],
                [-71.635547, -33.055711],
                [-71.638609, -33.058174],
                [-71.637399, -33.058292],
                [-71.636891, -33.058887],
                [-71.636849, -33.059607],
                [-71.636989, -33.06021],
                [-71.637347, -33.060861],
                [-71.637477, -33.061215],
                [-71.637186, -33.061706],
                [-71.636711, -33.062022],
                [-71.636657, -33.062403],
                [-71.636738, -33.062784],
                [-71.637085, -33.062182],
                [-71.637397, -33.06185],
                [-71.63813, -33.061547],
                [-71.639739, -33.061328],
                [-71.640498, -33.061123],
                [-71.641892, -33.060039],
                [-71.642409, -33.058042],
                [-71.642886, -33.057274],
                [-71.642463, -33.056359],
                [-71.642744, -33.053524],
                [-71.642568, -33.052396],
                [-71.642001, -33.05075],
                [-71.641174, -33.049709],
                [-71.640241, -33.048959],
                [-71.639807, -33.048376],
                [-71.638865, -33.047978],
                [-71.638878, -33.047804],
                [-71.638647, -33.04759],
                [-71.638524, -33.047087],
                [-71.637874, -33.046747],
                [-71.637225, -33.046688],
                [-71.63688, -33.046543],
                [-71.636107, -33.04587],
                [-71.636022, -33.045504],
                [-71.635783, -33.045275],
                [-71.635354, -33.04523],
                [-71.63482, -33.04535],
                [-71.633941, -33.044323],
                [-71.633725, -33.044296],
                [-71.633594, -33.044256],
                [-71.633397, -33.044016],
                [-71.633311, -33.043871],
                [-71.63319, -33.043806],
                [-71.632882, -33.04383],
                [-71.632678, -33.043741],
                [-71.632463, -33.043581],
                [-71.632273, -33.043483],
                [-71.632134, -33.043545],
                [-71.631957, -33.043815],
                [-71.631757, -33.044085],
                [-71.631672, -33.044172],
                [-71.631435, -33.044153],
                [-71.631317, -33.044243],
                [-71.631444, -33.044436],
                [-71.631529, -33.044575],
                [-71.631395, -33.044806],
                [-71.631277, -33.045062],
                [-71.631385, -33.045314],
                [-71.631604, -33.045494],
                [-71.631826, -33.045687],
                [-71.631984, -33.045867],
                [-71.631818, -33.046078],
                [-71.631639, -33.046287],
                [-71.631243, -33.046558],
                [-71.630683, -33.046288],
                [-71.630477, -33.046329],
                [-71.630199, -33.046265],
                [-71.629971, -33.046176],
                [-71.629541, -33.046186],
                [-71.628896, -33.045857],
                [-71.628842, -33.045695],
                [-71.628585, -33.045317],
                [-71.628398, -33.045214],
                [-71.628181, -33.044984],
                [-71.627856, -33.044673],
                [-71.627524, -33.044534],
                [-71.627188, -33.044483],
                [-71.626731, -33.044392],
                [-71.626682, -33.044468]
              ]
            ],
            "type": "Polygon"
          },
          "id": "a3b7f8ce830b21008f6109b714a89fe5"
        }
      ],
      "type": "FeatureCollection"
    }
  },
  "layout": {},
  "paint": {
    "fill-color": "#d8d114",
    "fill-opacity": 0.3,
    "fill-outline-color": "#D20C0C"
  }
};
var sector27 = {
  "id": "sector27",
  "type": "fill",
  "source": {
    "type": "geojson",
    "data": {
      "features": [{
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.628791, -33.065149],
                [-71.627527, -33.064795],
                [-71.626149, -33.063549],
                [-71.625453, -33.062641],
                [-71.624959, -33.061017],
                [-71.62429, -33.059805],
                [-71.623948, -33.059107],
                [-71.623401, -33.058272],
                [-71.622998, -33.058017],
                [-71.622644, -33.057115],
                [-71.622154, -33.056606],
                [-71.621816, -33.055641],
                [-71.621394, -33.054816],
                [-71.621016, -33.054537],
                [-71.6202, -33.053395],
                [-71.61985, -33.05206],
                [-71.619378, -33.051756],
                [-71.619116, -33.051343],
                [-71.619402, -33.050917],
                [-71.619112, -33.050644],
                [-71.61906, -33.050114],
                [-71.618603, -33.049692],
                [-71.618561, -33.049319],
                [-71.619279, -33.049333],
                [-71.619198, -33.048607],
                [-71.619682, -33.048552],
                [-71.620279, -33.048112],
                [-71.620447, -33.047646],
                [-71.621153, -33.047236],
                [-71.621473, -33.047859],
                [-71.621656, -33.047811],
                [-71.621336, -33.04724],
                [-71.621761, -33.047038],
                [-71.622234, -33.046599],
                [-71.622725, -33.045923],
                [-71.623158, -33.045804],
                [-71.623651, -33.04595],
                [-71.623707, -33.046831],
                [-71.623185, -33.048639],
                [-71.623341, -33.049086],
                [-71.62298, -33.050219],
                [-71.622975, -33.050957],
                [-71.62319, -33.051281],
                [-71.62338, -33.051852],
                [-71.623264, -33.052689],
                [-71.623939, -33.053361],
                [-71.624665, -33.055129],
                [-71.62507, -33.055544],
                [-71.62558, -33.057065],
                [-71.625593, -33.058062],
                [-71.626489, -33.059142],
                [-71.626718, -33.059779],
                [-71.627187, -33.061332],
                [-71.627656, -33.062455],
                [-71.629705, -33.063381],
                [-71.628791, -33.065149]
              ]
            ],
            "type": "Polygon"
          },
          "id": "17c40e22b5dc26380447d71e830ddb16"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.621612, -33.055175],
                [-71.621293, -33.055151],
                [-71.620878, -33.055101],
                [-71.620513, -33.054962],
                [-71.620337, -33.054773],
                [-71.620166, -33.054394],
                [-71.620042, -33.054023],
                [-71.619682, -33.053828],
                [-71.619516, -33.053653],
                [-71.619522, -33.053385],
                [-71.619442, -33.053073],
                [-71.619184, -33.052842],
                [-71.618723, -33.052708],
                [-71.61818, -33.052817],
                [-71.61779, -33.052926],
                [-71.617727, -33.053165],
                [-71.617715, -33.053451],
                [-71.61745, -33.053501],
                [-71.617615, -33.053777],
                [-71.617773, -33.053937],
                [-71.617463, -33.054449],
                [-71.617803, -33.05511],
                [-71.618074, -33.05632],
                [-71.618202, -33.056852],
                [-71.618359, -33.05708],
                [-71.61822, -33.057287],
                [-71.618437, -33.057515],
                [-71.618391, -33.058],
                [-71.617665, -33.058524],
                [-71.617352, -33.058429],
                [-71.61716, -33.058418],
                [-71.616822, -33.058769],
                [-71.616821, -33.058994],
                [-71.616553, -33.059192],
                [-71.616179, -33.05936],
                [-71.615954, -33.059485],
                [-71.61572, -33.059778],
                [-71.615747, -33.06009],
                [-71.61544, -33.060447],
                [-71.615808, -33.060512],
                [-71.615869, -33.060876],
                [-71.616044, -33.061116],
                [-71.615832, -33.06149],
                [-71.615834, -33.062135],
                [-71.61607, -33.062661],
                [-71.616153, -33.063306],
                [-71.616459, -33.063839],
                [-71.616339, -33.064682],
                [-71.616812, -33.066447],
                [-71.617589, -33.067481],
                [-71.618339, -33.068921],
                [-71.620068, -33.06983],
                [-71.620065, -33.071858],
                [-71.621737, -33.073042],
                [-71.628808, -33.065158],
                [-71.627562, -33.064805],
                [-71.626105, -33.063564],
                [-71.62545, -33.062628],
                [-71.625002, -33.06102],
                [-71.623893, -33.0591],
                [-71.623502, -33.058331],
                [-71.622947, -33.057942],
                [-71.622595, -33.057094],
                [-71.622221, -33.056616],
                [-71.6219, -33.056045],
                [-71.621867, -33.05561],
                [-71.621612, -33.055175]
              ]
            ],
            "type": "Polygon"
          },
          "id": "760b82e8c0f2e51f2b07e8f17ffb9d43"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-71.616841, -33.05877],
                [-71.617113, -33.058448],
                [-71.617455, -33.058377],
                [-71.617672, -33.058409],
                [-71.618337, -33.057971],
                [-71.61833, -33.057636],
                [-71.618242, -33.057283],
                [-71.618329, -33.057086],
                [-71.618141, -33.056781],
                [-71.617964, -33.056095],
                [-71.617748, -33.055177],
                [-71.617441, -33.054452],
                [-71.617752, -33.053959],
                [-71.61762, -33.053888],
                [-71.61742, -33.053528],
                [-71.617525, -33.053484],
                [-71.617671, -33.053276],
                [-71.617753, -33.052909],
                [-71.618573, -33.052675],
                [-71.619224, -33.052794],
                [-71.61953, -33.053158],
                [-71.619559, -33.053658],
                [-71.619771, -33.053854],
                [-71.620061, -33.054026],
                [-71.62031, -33.054505],
                [-71.62044, -33.054842],
                [-71.620868, -33.055036],
                [-71.621506, -33.055169],
                [-71.621312, -33.05474],
                [-71.621013, -33.054587],
                [-71.62018, -33.053371],
                [-71.619891, -33.052082],
                [-71.61932, -33.051773],
                [-71.619104, -33.051363],
                [-71.619358, -33.050941],
                [-71.619104, -33.050621],
                [-71.619076, -33.050107],
                [-71.618816, -33.049972],
                [-71.618548, -33.049708],
                [-71.618533, -33.049323],
                [-71.61815, -33.049366],
                [-71.617787, -33.049376],
                [-71.617031, -33.049522],
                [-71.616734, -33.049998],
                [-71.616603, -33.04936],
                [-71.615898, -33.04944],
                [-71.615667, -33.049765],
                [-71.615524, -33.049868],
                [-71.615714, -33.050196],
                [-71.615757, -33.050339],
                [-71.61571, -33.050496],
                [-71.615456, -33.050482],
                [-71.615034, -33.050741],
                [-71.614749, -33.050793],
                [-71.614518, -33.050486],
                [-71.614266, -33.050464],
                [-71.614113, -33.050911],
                [-71.614291, -33.05125],
                [-71.614178, -33.051421],
                [-71.61379, -33.051637],
                [-71.613614, -33.05188],
                [-71.613206, -33.051807],
                [-71.613062, -33.052079],
                [-71.613212, -33.052507],
                [-71.613646, -33.052965],
                [-71.613596, -33.053184],
                [-71.613337, -33.053819],
                [-71.613523, -33.054017],
                [-71.614295, -33.054339],
                [-71.614531, -33.054496],
                [-71.61458, -33.054789],
                [-71.615445, -33.055458],
                [-71.615586, -33.055879],
                [-71.615982, -33.056224],
                [-71.616158, -33.056307],
                [-71.61653, -33.056241],
                [-71.616701, -33.056616],
                [-71.616667, -33.056895],
                [-71.616894, -33.057047],
                [-71.617071, -33.057348],
                [-71.616938, -33.057422],
                [-71.617017, -33.057558],
                [-71.616556, -33.057965],
                [-71.616477, -33.058191],
                [-71.616588, -33.058267],
                [-71.616665, -33.058687],
                [-71.616841, -33.05877]
              ]
            ],
            "type": "Polygon"
          },
          "id": "c4b5bbcb81e16b0e5dac464619ca3588"
        }
      ],
      "type": "FeatureCollection"
    }
  },
  "layout": {},
  "paint": {
    "fill-color": "#15d8b8",
    "fill-opacity": 0.3,
    "fill-outline-color": "#D20C0C"
  }
};
