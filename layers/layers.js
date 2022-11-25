var wms_layers = [];


        var lyr_MAPS_0 = new ol.layer.Tile({
            'title': 'MAPS',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SATELIT_1 = new ol.layer.Tile({
            'title': 'SATELIT',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZONANILAITANAH_2 = new ol.format.GeoJSON();
var features_ZONANILAITANAH_2 = format_ZONANILAITANAH_2.readFeatures(json_ZONANILAITANAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONANILAITANAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONANILAITANAH_2.addFeatures(features_ZONANILAITANAH_2);
var lyr_ZONANILAITANAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONANILAITANAH_2, 
                style: style_ZONANILAITANAH_2,
                interactive: true,
    title: 'ZONA NILAI TANAH<br />\
    <img src="styles/legend/ZONANILAITANAH_2_0.png" /> 0 - 300000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_1.png" /> 300000 - 400000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_2.png" /> 400000 - 500000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_3.png" /> 500000 - 800000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_4.png" /> 800000 - 1000000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_5.png" /> 1000000 - 1200000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_6.png" /> 1200000 - 1500000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_7.png" /> 1500000 - 2000000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_8.png" /> 2000000 - 3000000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_9.png" /> 3000000 - 4000000<br />\
    <img src="styles/legend/ZONANILAITANAH_2_10.png" /> 4000000 - 21000000<br />'
        });
var format_BATAS_KELURAHAN_3 = new ol.format.GeoJSON();
var features_BATAS_KELURAHAN_3 = format_BATAS_KELURAHAN_3.readFeatures(json_BATAS_KELURAHAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_KELURAHAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_KELURAHAN_3.addFeatures(features_BATAS_KELURAHAN_3);
var lyr_BATAS_KELURAHAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_KELURAHAN_3, 
                style: style_BATAS_KELURAHAN_3,
                interactive: true,
                title: '<img src="styles/legend/BATAS_KELURAHAN_3.png" /> BATAS_KELURAHAN'
            });

lyr_MAPS_0.setVisible(true);lyr_SATELIT_1.setVisible(true);lyr_ZONANILAITANAH_2.setVisible(true);lyr_BATAS_KELURAHAN_3.setVisible(true);
var layersList = [lyr_MAPS_0,lyr_SATELIT_1,lyr_ZONANILAITANAH_2,lyr_BATAS_KELURAHAN_3];
lyr_ZONANILAITANAH_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'D_KD_KC': 'D_KD_KC', 'D_NM_KC': 'D_NM_KC', 'D_KD_KL': 'D_KD_KL', 'D_NM_KL': 'D_NM_KL', 'KD_LAMA': 'KD_LAMA', 'KELAS_TANA': 'KELAS_TANA', 'NIR_BARU': 'NIR_BARU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_KELURAHAN_3.set('fieldAliases', {'D_KD_KC': 'D_KD_KC', 'D_NM_KC': 'D_NM_KC', 'D_KD_KL': 'D_KD_KL', 'D_NM_KL': 'D_NM_KL', 'kabkot': 'kabkot', 'NOP': 'NOP', 'ZNT': 'ZNT', });
lyr_ZONANILAITANAH_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'D_KD_KC': 'TextEdit', 'D_NM_KC': 'TextEdit', 'D_KD_KL': 'TextEdit', 'D_NM_KL': 'TextEdit', 'KD_LAMA': 'TextEdit', 'KELAS_TANA': 'TextEdit', 'NIR_BARU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATAS_KELURAHAN_3.set('fieldImages', {'D_KD_KC': 'TextEdit', 'D_NM_KC': 'TextEdit', 'D_KD_KL': 'TextEdit', 'D_NM_KL': 'TextEdit', 'kabkot': 'TextEdit', 'NOP': 'TextEdit', 'ZNT': 'TextEdit', });
lyr_ZONANILAITANAH_2.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'D_KD_KC': 'inline label', 'D_NM_KC': 'inline label', 'D_KD_KL': 'inline label', 'D_NM_KL': 'inline label', 'KD_LAMA': 'inline label', 'KELAS_TANA': 'inline label', 'NIR_BARU': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_BATAS_KELURAHAN_3.set('fieldLabels', {'D_KD_KC': 'inline label', 'D_NM_KC': 'inline label', 'D_KD_KL': 'inline label', 'D_NM_KL': 'inline label', 'kabkot': 'inline label', 'NOP': 'inline label', 'ZNT': 'inline label', });
lyr_BATAS_KELURAHAN_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});