var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lahan_Kalimantan_Timur_1 = new ol.format.GeoJSON();
var features_lahan_Kalimantan_Timur_1 = format_lahan_Kalimantan_Timur_1.readFeatures(json_lahan_Kalimantan_Timur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahan_Kalimantan_Timur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahan_Kalimantan_Timur_1.addFeatures(features_lahan_Kalimantan_Timur_1);
var lyr_lahan_Kalimantan_Timur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahan_Kalimantan_Timur_1, 
                style: style_lahan_Kalimantan_Timur_1,
                popuplayertitle: 'lahan_Kalimantan_Timur',
                interactive: true,
    title: 'lahan_Kalimantan_Timur<br />\
    <img src="styles/legend/lahan_Kalimantan_Timur_1_0.png" /> 2001 - 2006<br />\
    <img src="styles/legend/lahan_Kalimantan_Timur_1_1.png" /> 2006 - 2010<br />\
    <img src="styles/legend/lahan_Kalimantan_Timur_1_2.png" /> 2010 - 2014<br />\
    <img src="styles/legend/lahan_Kalimantan_Timur_1_3.png" /> 2014 - 2014<br />\
    <img src="styles/legend/lahan_Kalimantan_Timur_1_4.png" /> 2014 - 20141<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_lahan_Kalimantan_Timur_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lahan_Kalimantan_Timur_1];
lyr_lahan_Kalimantan_Timur_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_lahan_Kalimantan_Timur_1.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_lahan_Kalimantan_Timur_1.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Provinsi': 'no label', 'PL_19_R': 'inline label - always visible', 'Legenda': 'inline label - always visible', });
lyr_lahan_Kalimantan_Timur_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});