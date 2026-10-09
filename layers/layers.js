var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; HAAC - Médias du Bénin | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                url: 'https://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });
var format_BEN_LIM_Etat_line_1 = new ol.format.GeoJSON();
var features_BEN_LIM_Etat_line_1 = format_BEN_LIM_Etat_line_1.readFeatures(json_BEN_LIM_Etat_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEN_LIM_Etat_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEN_LIM_Etat_line_1.addFeatures(features_BEN_LIM_Etat_line_1);
var lyr_BEN_LIM_Etat_line_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BEN_LIM_Etat_line_1, 
                style: style_BEN_LIM_Etat_line_1,
                popuplayertitle: 'BEN_LIM_Etat_line',
                interactive: false,
                title: '<img src="styles/legend/BEN_LIM_Etat_line_1.png" /> BEN_LIM_Etat_line'
            });
var format_MdiasduBnin_2 = new ol.format.GeoJSON();
var features_MdiasduBnin_2 = format_MdiasduBnin_2.readFeatures(json_MdiasduBnin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MdiasduBnin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MdiasduBnin_2.addFeatures(features_MdiasduBnin_2);
var lyr_MdiasduBnin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MdiasduBnin_2, 
                style: style_MdiasduBnin_2,
                popuplayertitle: 'Médias du Bénin',
                interactive: true,
    title: 'Médias du Bénin<br />\
    <img src="styles/legend/MdiasduBnin_2_0.png" /> Radio<br />\
    <img src="styles/legend/MdiasduBnin_2_1.png" /> Télévision<br />\
    <img src="styles/legend/MdiasduBnin_2_2.png" /> Presse écrite<br />\
    <img src="styles/legend/MdiasduBnin_2_3.png" /> Média en ligne<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BEN_LIM_Etat_line_1.setVisible(true);lyr_MdiasduBnin_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BEN_LIM_Etat_line_1,lyr_MdiasduBnin_2];
lyr_BEN_LIM_Etat_line_1.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_MdiasduBnin_2.set('fieldAliases', {'fid': 'fid', 'Nom_Media': 'Nom du média', 'Type': 'Type', 'Sous_type': 'Sous-type', 'Nature': 'Nature', 'Departement': 'Département', 'Commune': 'Commune', 'Frequence': 'Fréquence', 'Specialisation': 'Spécialisation', 'Audience': 'Audience', 'Statut': 'Statut', 'Site_web': 'Site web', });
lyr_BEN_LIM_Etat_line_1.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_MdiasduBnin_2.set('fieldImages', {'fid': '', 'Nom_Media': '', 'Type': '', 'Sous_type': '', 'Nature': '', 'Departement': '', 'Commune': '', 'Frequence': '', 'Specialisation': '', 'Audience': '', 'Statut': '', 'Site_web': '', });
lyr_BEN_LIM_Etat_line_1.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_MdiasduBnin_2.set('fieldLabels', {'fid': 'no label', 'Nom_Media': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Sous_type': 'inline label - visible with data', 'Nature': 'inline label - visible with data', 'Departement': 'inline label - visible with data', 'Commune': 'inline label - visible with data', 'Frequence': 'inline label - visible with data', 'Specialisation': 'inline label - visible with data', 'Audience': 'inline label - visible with data', 'Statut': 'inline label - visible with data', 'Site_web': 'inline label - visible with data', });
lyr_MdiasduBnin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});