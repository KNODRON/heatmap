var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BASEDATOSARTINVESTIGADOS20142023_1 = new ol.format.GeoJSON();
var features_BASEDATOSARTINVESTIGADOS20142023_1 = format_BASEDATOSARTINVESTIGADOS20142023_1.readFeatures(json_BASEDATOSARTINVESTIGADOS20142023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASEDATOSARTINVESTIGADOS20142023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASEDATOSARTINVESTIGADOS20142023_1.addFeatures(features_BASEDATOSARTINVESTIGADOS20142023_1);
var lyr_BASEDATOSARTINVESTIGADOS20142023_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_BASEDATOSARTINVESTIGADOS20142023_1, 
                radius: 800 * 2,
                gradient: ['#2b83ba', '#abdda4', '#ffffbf', '#fdae61', '#d7191c', '#d7191c'],
                blur: 15,
                shadow: 250,
                title: 'BASE DATOS ART. INVESTIGADOS 2014 - 2023'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BASEDATOSARTINVESTIGADOS20142023_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BASEDATOSARTINVESTIGADOS20142023_1];
