var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
      highlightLayer.setStyle({
color: '#ffff00',
weight: 7,
      });
    } else {
      highlightLayer.setStyle({
fillColor: '#ffff00',
weight: 7,
      });
    }
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:16
}).fitBounds([[-36.85881373242564,-73.11279224985866],[-36.8495414471861,-73.09306241728913]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_GoogleSatellite_0');
map.getPane('pane_GoogleSatellite_0').style.zIndex = 400;
var layer_GoogleSatellite_0 = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleSatellite_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 16,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 22
});
layer_GoogleSatellite_0;
map.addLayer(layer_GoogleSatellite_0);

function pop_Direccindelflujo_1(feature, layer) {
    layer.on({
mouseout: function(e) {
    for (i in e.target._eventParents) {
e.target._eventParents[i].resetStyle(e.target);
    }
},
mouseover: highlightFeature,
    });
    var popupContent = '<table>\
    <tr>\
<td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<td colspan="2">' + (feature.properties['IDFLUJO'] !== null ? autolinker.link(feature.properties['IDFLUJO'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<td colspan="2">' + (feature.properties['Shape__Are'] !== null ? autolinker.link(feature.properties['Shape__Are'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<td colspan="2">' + (feature.properties['Shape__Len'] !== null ? autolinker.link(feature.properties['Shape__Len'].toLocaleString()) : '') + '</td>\
    </tr>\
</table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Direccindelflujo_1_0() {
    return {
pane: 'pane_Direccindelflujo_1',
opacity: 1,
color: 'rgba(82,82,82,0.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1.0, 
fill: true,
fillOpacity: 1,
fillColor: 'rgba(204,204,204,1.0)',
interactive: true,
    }
}
map.createPane('pane_Direccindelflujo_1');
map.getPane('pane_Direccindelflujo_1').style.zIndex = 401;
map.getPane('pane_Direccindelflujo_1').style['mix-blend-mode'] = 'normal';
var layer_Direccindelflujo_1 = new L.geoJson(json_Direccindelflujo_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Direccindelflujo_1',
    layerName: 'layer_Direccindelflujo_1',
    pane: 'pane_Direccindelflujo_1',
    onEachFeature: pop_Direccindelflujo_1,
    style: style_Direccindelflujo_1_0,
});
bounds_group.addLayer(layer_Direccindelflujo_1);
map.addLayer(layer_Direccindelflujo_1);
function pop_ColectorAS_2(feature, layer) {
    layer.on({
mouseout: function(e) {
    for (i in e.target._eventParents) {
e.target._eventParents[i].resetStyle(e.target);
    }
},
mouseover: highlightFeature,
    });
    var popupContent = '<table>\
    <tr>\
<th scope="row">IDENTIFICADOR</th>\
<td>' + (feature.properties['IDENTIFICADOR'] !== null ? autolinker.link(feature.properties['IDENTIFICADOR'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">LONGITUD (m)</th>\
<td>' + (feature.properties['LONGITUD (m)'] !== null ? autolinker.link(feature.properties['LONGITUD (m)'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">DIÁMETRO (mm)</th>\
<td>' + (feature.properties['DIAMETRO (mm)'] !== null ? autolinker.link(feature.properties['DIAMETRO (mm)'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">ÚLTIMA FECHA INSPECCIÓN</th>\
<td>' + (feature.properties['ULTIMA FECHA INSPECCION'] !== null ? autolinker.link(feature.properties['ULTIMA FECHA INSPECCION'].toLocaleString()) : '') + '</td>\
    </tr>\
</table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ColectorAS_2_0(feature) {
    switch(String(feature.properties['q2wHide_ETAPA'])) {
case '1':
    return {
pane: 'pane_ColectorAS_2',
opacity: 1,
color: 'rgba(29,207,32,1.0)',
dashArray: '',
lineCap: 'square',
lineJoin: 'bevel',
weight: 2.0,
fillOpacity: 0,
interactive: true,
    }
    break;
case '2':
    return {
pane: 'pane_ColectorAS_2',
opacity: 1,
color: 'rgba(54,132,228,1.0)',
dashArray: '',
lineCap: 'square',
lineJoin: 'bevel',
weight: 2.0,
fillOpacity: 0,
interactive: true,
    }
    break;
    }
}
map.createPane('pane_ColectorAS_2');
map.getPane('pane_ColectorAS_2').style.zIndex = 402;
map.getPane('pane_ColectorAS_2').style['mix-blend-mode'] = 'normal';
var layer_ColectorAS_2 = new L.geoJson(json_ColectorAS_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ColectorAS_2',
    layerName: 'layer_ColectorAS_2',
    pane: 'pane_ColectorAS_2',
    onEachFeature: pop_ColectorAS_2,
    style: style_ColectorAS_2_0,
});
bounds_group.addLayer(layer_ColectorAS_2);
map.addLayer(layer_ColectorAS_2);
function pop_CmarasAS_3(feature, layer) {
    layer.on({
mouseout: function(e) {
    for (i in e.target._eventParents) {
e.target._eventParents[i].resetStyle(e.target);
    }
},
mouseover: highlightFeature,
    });
    var popupContent = '<table>\
    <tr>\
<th scope="row">IDENTIFICADOR</th>\
<td>' + (feature.properties['IDENTIFICADOR'] !== null ? autolinker.link(feature.properties['IDENTIFICADOR'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">ESTADO</th>\
<td>' + (feature.properties['ESTADO'] !== null ? autolinker.link(feature.properties['ESTADO'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">ESTE (m)</th>\
<td>' + (feature.properties['x'] !== null ? autolinker.link(feature.properties['x'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">NORTE (m)</th>\
<td>' + (feature.properties['y'] !== null ? autolinker.link(feature.properties['y'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">PROFUNDIDAD (m)</th>\
<td>' + (feature.properties['PROFUNDIDAD (m)'] !== null ? autolinker.link(feature.properties['PROFUNDIDAD (m)'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">FOTOGRAFÍA INTERIOR</th>\
<td>' + (feature.properties['FOTOGRAFIA INTERIOR'] !== null ? '<img src="images/' + String(feature.properties['FOTOGRAFIA INTERIOR']).replace(/[\\\/:]/g, '_').trim() + '" '+ 'class=popupImage' + '>' : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">OBSERVACIÓN</th>\
<td>' + (feature.properties['OBSERVACION'] !== null ? autolinker.link(feature.properties['OBSERVACION'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">COMENTARIO EMPLAZAMIENTO</th>\
<td>' + (feature.properties['COMENTARIO EMPLAZAMIENTO'] !== null ? autolinker.link(feature.properties['COMENTARIO_EMPLAZAMIENTO'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">FECHA ÚLTIMA INSPECCIÓN</th>\
<td>' + (feature.properties['FECHA ULTIMA INSPECCION'] !== null ? autolinker.link(feature.properties['FECHA ULTIMA INSPECCION'].toLocaleString()) : '') + '</td>\
    </tr>\
</table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_CmarasAS_3_0(feature) {
    switch(String(feature.properties['FECHA ULTIMA INSPECCION'])) {
case '2021-04-23':
    return {
pane: 'pane_CmarasAS_3',
radius: 4.0,
opacity: 1,
color: 'rgba(35,35,35,0.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(29,207,32,1.0)',
interactive: true,
    }
    break;
case '2021-12-16':
    return {
pane: 'pane_CmarasAS_3',
radius: 4.0,
opacity: 1,
color: 'rgba(35,35,35,0.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(54,132,228,1.0)',
interactive: true,
    }
    break;
case '2022-07-29':
    return {
pane: 'pane_CmarasAS_3',
radius: 6.0,
opacity: 1,
color: 'rgba(35,35,35,0.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(255,165,166,1.0)',
interactive: true,
    }
    break;
    }
}
map.createPane('pane_CmarasAS_3');
map.getPane('pane_CmarasAS_3').style.zIndex = 403;
map.getPane('pane_CmarasAS_3').style['mix-blend-mode'] = 'normal';
var layer_CmarasAS_3 = new L.geoJson(json_CmarasAS_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_CmarasAS_3',
    layerName: 'layer_CmarasAS_3',
    pane: 'pane_CmarasAS_3',
    onEachFeature: pop_CmarasAS_3,
    pointToLayer: function (feature, latlng) {
var context = {
    feature: feature,
    variables: {}
};
return L.circleMarker(latlng, style_CmarasAS_3_0(feature));
    },
});
bounds_group.addLayer(layer_CmarasAS_3);
map.addLayer(layer_CmarasAS_3);
function pop_Tramodelainspeccin_4(feature, layer) {
    layer.on({
mouseout: function(e) {
    for (i in e.target._eventParents) {
e.target._eventParents[i].resetStyle(e.target);
    }
},
mouseover: highlightFeature,
    });
    var popupContent = '<table>\
    <tr>\
<th scope="row">TRAMO Nº</th>\
<td>' + (feature.properties['nº'] !== null ? autolinker.link(feature.properties['nº'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">DESCRIPCIÓN</th>\
<td>' + (feature.properties['DESCRIPCION'] !== null ? autolinker.link(feature.properties['DESCRIPCION'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">LONGITUD (m)</th>\
<td>' + (feature.properties['Longitud del tramo (m)'] !== null ? autolinker.link(feature.properties['Longitud del tramo (m)'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">REGISTRO DE VIDEO</th>\
<td>' + (feature.properties['Vértices de la inspección_gdrive'] !== null ? autolinker.link(feature.properties['Vértices de la inspección_gdrive'].toLocaleString()) : '') + '</td>\
    </tr>\
</table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Tramodelainspeccin_4_0() {
    return {
pane: 'pane_Tramodelainspeccin_4',
opacity: 1,
color: 'rgba(219,30,42,1.0)',
dashArray: '',
lineCap: 'square',
lineJoin: 'bevel',
weight: 3.0,
fillOpacity: 0,
interactive: true,
    }
}
map.createPane('pane_Tramodelainspeccin_4');
map.getPane('pane_Tramodelainspeccin_4').style.zIndex = 404;
map.getPane('pane_Tramodelainspeccin_4').style['mix-blend-mode'] = 'normal';
var layer_Tramodelainspeccin_4 = new L.geoJson(json_Tramodelainspeccin_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Tramodelainspeccin_4',
    layerName: 'layer_Tramodelainspeccin_4',
    pane: 'pane_Tramodelainspeccin_4',
    onEachFeature: pop_Tramodelainspeccin_4,
    style: style_Tramodelainspeccin_4_0,
});
bounds_group.addLayer(layer_Tramodelainspeccin_4);
map.addLayer(layer_Tramodelainspeccin_4);
function pop_Vrticesdelainspeccin_5(feature, layer) {
    layer.on({
mouseout: function(e) {
    for (i in e.target._eventParents) {
e.target._eventParents[i].resetStyle(e.target);
    }
},
mouseover: highlightFeature,
    });
    var popupContent = '<table>\
    <tr>\
<th scope="row">VÉRTICE INICIO VIDEO Nº</th>\
<td>' + (feature.properties['inicio video n.º'] !== null ? autolinker.link(feature.properties['inicio video n.º'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">ESTE (m)</th>\
<td>' + (feature.properties['x'] !== null ? autolinker.link(feature.properties['x'].toLocaleString()) : '') + '</td>\
    </tr>\
    <tr>\
<th scope="row">NORTE (m)</th>\
<td>' + (feature.properties['y'] !== null ? autolinker.link(feature.properties['y'].toLocaleString()) : '') + '</td>\
    </tr>\
</table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Vrticesdelainspeccin_5_0() {
    return {
pane: 'pane_Vrticesdelainspeccin_5',
shape: 'triangle',
radius: 6.0,
opacity: 1,
color: 'rgba(128,17,25,0.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 2.0,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(219,30,42,1.0)',
interactive: true,
    }
}
map.createPane('pane_Vrticesdelainspeccin_5');
map.getPane('pane_Vrticesdelainspeccin_5').style.zIndex = 405;
map.getPane('pane_Vrticesdelainspeccin_5').style['mix-blend-mode'] = 'normal';
var layer_Vrticesdelainspeccin_5 = new L.geoJson(json_Vrticesdelainspeccin_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Vrticesdelainspeccin_5',
    layerName: 'layer_Vrticesdelainspeccin_5',
    pane: 'pane_Vrticesdelainspeccin_5',
    onEachFeature: pop_Vrticesdelainspeccin_5,
    pointToLayer: function (feature, latlng) {
var context = {
    feature: feature,
    variables: {}
};
return L.shapeMarker(latlng, style_Vrticesdelainspeccin_5_0(feature));
    },
});
bounds_group.addLayer(layer_Vrticesdelainspeccin_5);
map.addLayer(layer_Vrticesdelainspeccin_5);
    var title = new L.Control();
    title.onAdd = function (map) {
this._div = L.DomUtil.create('div', 'info');
this.update();
return this._div;
    };
    title.update = function () {
this._div.innerHTML = '<h2>Inspección Borde Laguna Grande, Andalué</h2>';
    };
    title.addTo(map);
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="legend/Vrticesdelainspeccin_5.png" /> Vértices de la inspección': layer_Vrticesdelainspeccin_5,'<img src="legend/Tramodelainspeccin_4.png" /> Tramo de la inspección': layer_Tramodelainspeccin_4,'Cámaras AS<br /><table><tr><td style="text-align: center;"><img src="legend/CmarasAS_3_Últimainspección230420210.png" /></td><td>Última inspección: 23-04-2021</td></tr><tr><td style="text-align: center;"><img src="legend/CmarasAS_3_Últimainspección161220211.png" /></td><td>Última inspección: 16-12-2021</td></tr><tr><td style="text-align: center;"><img src="legend/CmarasAS_3_ÚltimaInspección290720222.png" /></td><td>Última Inspección: 29-07-2022</td></tr></table>': layer_CmarasAS_3,'Colector AS<br /><table><tr><td style="text-align: center;"><img src="legend/ColectorAS_2_Últimainspección230420210.png" /></td><td>Última inspección: 23-04-2021</td></tr><tr><td style="text-align: center;"><img src="legend/ColectorAS_2_Últimainspección161220211.png" /></td><td>Última inspección: 16-12-2021</td></tr></table>': layer_ColectorAS_2,'<img src="legend/Direccindelflujo_1.png" /> Dirección del flujo': layer_Direccindelflujo_1,"Google Satellite": layer_GoogleSatellite_0,},{collapsed:false}).addTo(map);
setBounds();
var i = 0;
layer_CmarasAS_3.eachLayer(function(layer) {
    var context = {
feature: layer.feature,
variables: {}
    };
    layer.bindTooltip((exp_label_CmarasAS_3_eval_expression(context) !== null?String('<div style="color: #ffffff; font-size: 8pt; font-weight: bold; font-family: \'Liberation Sans\', sans-serif;">' + exp_label_CmarasAS_3_eval_expression(context)) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_CmarasAS_3'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
var i = 0;
layer_Tramodelainspeccin_4.eachLayer(function(layer) {
    var context = {
feature: layer.feature,
variables: {}
    };
    layer.bindTooltip((exp_label_Tramodelainspeccin_4_eval_expression(context) !== null?String('<div style="color: #ffffff; font-size: 8pt; font-family: \'Liberation Sans\', sans-serif;">' + exp_label_Tramodelainspeccin_4_eval_expression(context)) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Tramodelainspeccin_4'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
resetLabels([layer_ColectorAS_2,layer_CmarasAS_3,layer_Tramodelainspeccin_4]);
map.on("zoomend", function(){
    resetLabels([layer_ColectorAS_2,layer_CmarasAS_3,layer_Tramodelainspeccin_4]);
});
map.on("layeradd", function(){
    resetLabels([layer_ColectorAS_2,layer_CmarasAS_3,layer_Tramodelainspeccin_4]);
});
map.on("layerremove", function(){
    resetLabels([layer_ColectorAS_2,layer_CmarasAS_3,layer_Tramodelainspeccin_4]);
});
// Overview mini map
// carga un mapa base (WMS) en el objeto previamente creado	
var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap'
});

var miniMap = new L.Control.MiniMap(osmBase, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomright',
    width: 200,
    height: 200,
}).addTo(map);

//add scale bar to map
L.control.scale({
position: 'bottomleft',
metric: true,
imperial: false,
maxWidth: 400,
}).addTo(map);

      //Centra el popup
map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.x -= (e.popup._container.clientHeight/3-80) // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    px.y -= (e.popup._container.clientHeight/2+80) // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    map.panTo(map.unproject(px),{animate: true}); // pan to new center
    });