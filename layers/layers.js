var wms_layers = [];

var format_Oceanetrivires_0 = new ol.format.GeoJSON();
var features_Oceanetrivires_0 = format_Oceanetrivires_0.readFeatures(json_Oceanetrivires_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oceanetrivires_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oceanetrivires_0.addFeatures(features_Oceanetrivires_0);
var lyr_Oceanetrivires_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oceanetrivires_0,
maxResolution:28004.466152261964,
 minResolution:14.00223307613098,

                style: style_Oceanetrivires_0,
                popuplayertitle: 'Ocean et rivières',
                interactive: false,
                title: '<img src="styles/legend/Oceanetrivires_0.png" /> Ocean et rivières'
            });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
maxResolution:14.00223307613098,

            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
maxResolution:14.00223307613098,

            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Dpartements_3 = new ol.format.GeoJSON();
var features_Dpartements_3 = format_Dpartements_3.readFeatures(json_Dpartements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_3.addFeatures(features_Dpartements_3);
var lyr_Dpartements_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartements_3,
maxResolution:42006.69922839294,
 minResolution:14.00223307613098,

                style: style_Dpartements_3,
                popuplayertitle: 'Départements',
                interactive: true,
                title: '<img src="styles/legend/Dpartements_3.png" /> Départements'
            });
var format_Rgions_4 = new ol.format.GeoJSON();
var features_Rgions_4 = format_Rgions_4.readFeatures(json_Rgions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_4.addFeatures(features_Rgions_4);
var lyr_Rgions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgions_4, 
                style: style_Rgions_4,
                popuplayertitle: 'Régions',
                interactive: false,
                title: '<img src="styles/legend/Rgions_4.png" /> Régions'
            });
var format_Limitesadministratives_5 = new ol.format.GeoJSON();
var features_Limitesadministratives_5 = format_Limitesadministratives_5.readFeatures(json_Limitesadministratives_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesadministratives_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesadministratives_5.addFeatures(features_Limitesadministratives_5);
var lyr_Limitesadministratives_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesadministratives_5, 
                style: style_Limitesadministratives_5,
                popuplayertitle: 'Limites administratives',
                interactive: false,
    title: 'Limites administratives<br />\
    <img src="styles/legend/Limitesadministratives_5_0.png" /> Limite de département<br />\
    <img src="styles/legend/Limitesadministratives_5_1.png" /> Limite de région<br />\
    <img src="styles/legend/Limitesadministratives_5_2.png" /> Limite côtière<br />' });
var format_VoiesferroviairesBPL_6 = new ol.format.GeoJSON();
var features_VoiesferroviairesBPL_6 = format_VoiesferroviairesBPL_6.readFeatures(json_VoiesferroviairesBPL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VoiesferroviairesBPL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VoiesferroviairesBPL_6.addFeatures(features_VoiesferroviairesBPL_6);
var lyr_VoiesferroviairesBPL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VoiesferroviairesBPL_6, 
                style: style_VoiesferroviairesBPL_6,
                popuplayertitle: 'Voies ferroviaires BPL',
                interactive: true,
    title: 'Voies ferroviaires BPL<br />\
    <img src="styles/legend/VoiesferroviairesBPL_6_0.png" /> Voies Exploitées<br />\
    <img src="styles/legend/VoiesferroviairesBPL_6_1.png" /> Voies non exploitées<br />\
    <img src="styles/legend/VoiesferroviairesBPL_6_2.png" /> Fret<br />\
    <img src="styles/legend/VoiesferroviairesBPL_6_3.png" /> VS<br />' });
var format_Communesferroviaires_7 = new ol.format.GeoJSON();
var features_Communesferroviaires_7 = format_Communesferroviaires_7.readFeatures(json_Communesferroviaires_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesferroviaires_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesferroviaires_7.addFeatures(features_Communesferroviaires_7);
var lyr_Communesferroviaires_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesferroviaires_7,
maxResolution:70.0111653806549,
 
                style: style_Communesferroviaires_7,
                popuplayertitle: 'Communes ferroviaires',
                interactive: true,
                title: '<img src="styles/legend/Communesferroviaires_7.png" /> Communes ferroviaires'
            });
var format_Intercommunalit_8 = new ol.format.GeoJSON();
var features_Intercommunalit_8 = format_Intercommunalit_8.readFeatures(json_Intercommunalit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intercommunalit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intercommunalit_8.addFeatures(features_Intercommunalit_8);
var lyr_Intercommunalit_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intercommunalit_8,
maxResolution:140.0223307613098,
 
                style: style_Intercommunalit_8,
                popuplayertitle: 'Intercommunalité',
                interactive: true,
                title: '<img src="styles/legend/Intercommunalit_8.png" /> Intercommunalité'
            });
var format_PNBPL_9 = new ol.format.GeoJSON();
var features_PNBPL_9 = format_PNBPL_9.readFeatures(json_PNBPL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNBPL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNBPL_9.addFeatures(features_PNBPL_9);
var lyr_PNBPL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNBPL_9,
maxResolution:14.00223307613098,
 
                style: style_PNBPL_9,
                popuplayertitle: 'PNBPL',
                interactive: true,
                title: '<img src="styles/legend/PNBPL_9.png" /> PNBPL'
            });
var format_GaresdecatgorieBC_10 = new ol.format.GeoJSON();
var features_GaresdecatgorieBC_10 = format_GaresdecatgorieBC_10.readFeatures(json_GaresdecatgorieBC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaresdecatgorieBC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaresdecatgorieBC_10.addFeatures(features_GaresdecatgorieBC_10);
var lyr_GaresdecatgorieBC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaresdecatgorieBC_10,
maxResolution:140.0223307613098,
 
                style: style_GaresdecatgorieBC_10,
                popuplayertitle: 'Gares de catégorie B C',
                interactive: true,
    title: 'Gares de catégorie B C<br />\
    <img src="styles/legend/GaresdecatgorieBC_10_0.png" /> B<br />\
    <img src="styles/legend/GaresdecatgorieBC_10_1.png" /> C<br />' });
var format_Pk_11 = new ol.format.GeoJSON();
var features_Pk_11 = format_Pk_11.readFeatures(json_Pk_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pk_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pk_11.addFeatures(features_Pk_11);
var lyr_Pk_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pk_11,
maxResolution:14.00223307613098,
 
                style: style_Pk_11,
                popuplayertitle: 'Pk',
                interactive: true,
                title: '<img src="styles/legend/Pk_11.png" /> Pk'
            });
var format_GaresdecatgorieA_12 = new ol.format.GeoJSON();
var features_GaresdecatgorieA_12 = format_GaresdecatgorieA_12.readFeatures(json_GaresdecatgorieA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaresdecatgorieA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaresdecatgorieA_12.addFeatures(features_GaresdecatgorieA_12);
var lyr_GaresdecatgorieA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaresdecatgorieA_12, 
                style: style_GaresdecatgorieA_12,
                popuplayertitle: 'Gares de catégorie A',
                interactive: true,
                title: '<img src="styles/legend/GaresdecatgorieA_12.png" /> Gares de catégorie A'
            });

lyr_Oceanetrivires_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Dpartements_3.setVisible(true);lyr_Rgions_4.setVisible(true);lyr_Limitesadministratives_5.setVisible(true);lyr_VoiesferroviairesBPL_6.setVisible(true);lyr_Communesferroviaires_7.setVisible(true);lyr_Intercommunalit_8.setVisible(true);lyr_PNBPL_9.setVisible(true);lyr_GaresdecatgorieBC_10.setVisible(true);lyr_Pk_11.setVisible(true);lyr_GaresdecatgorieA_12.setVisible(true);
var layersList = [lyr_Oceanetrivires_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_Dpartements_3,lyr_Rgions_4,lyr_Limitesadministratives_5,lyr_VoiesferroviairesBPL_6,lyr_Communesferroviaires_7,lyr_Intercommunalit_8,lyr_PNBPL_9,lyr_GaresdecatgorieBC_10,lyr_Pk_11,lyr_GaresdecatgorieA_12];
lyr_Oceanetrivires_0.set('fieldAliases', {'id': 'id', });
lyr_Dpartements_3.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_CHF': 'CODE_CHF', 'NOM_CHF': 'NOM_CHF', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Rgions_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limitesadministratives_5.set('fieldAliases', {'NATURE': 'NATURE', 'ID_GEOFLA': 'ID_GEOFLA', });
lyr_VoiesferroviairesBPL_6.set('fieldAliases', {'Ligne': 'Ligne', 'Pkdeb': 'Pkdeb', 'Pkfin': 'Pkfin', 'Statuts': 'Statuts', 'Commune': 'Commune', 'Voie': 'Voie', 'Numdecret': 'Numdecret', 'DateDeclas': 'DateDeclas', 'DateFerm': 'DateFerm', 'DateMaj': 'DateMaj', 'Ltheorique': 'Ltheorique', 'Objet': 'Objet', 'Lréel': 'Lréel', 'code_insee': 'code_insee', 'nom': 'nom', 'Entreprise': 'Entreprise', 'Ouverture': 'Ouverture', 'Design': 'Design', 'FermTrafic': 'FermTrafic', 'Etiq': 'Etiq', });
lyr_Communesferroviaires_7.set('fieldAliases', {'NOM': 'NOM', 'INSEE_COM': 'INSEE_COM', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM_1': 'NOM_1', });
lyr_Intercommunalit_8.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NOM': 'NOM', 'NATURE': 'NATURE', });
lyr_PNBPL_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'LIBELLE': 'LIBELLE', 'OBSTACLE': 'OBSTACLE', 'LIB_TYPE': 'LIB_TYPE', 'MNEMO_TYPE': 'MNEMO_TYPE', 'Preoc': 'Preoc', 'Supprime': 'Supprime', 'EncourSup': 'EncourSup', 'Obs': 'Obs', 'Dep': 'Dep', 'SelProjet': 'SelProjet', 'OBSTACLE_1': 'OBSTACLE_1', 'PN_avec_an': 'PN_avec_an', 'N°interne_': 'N°interne_', 'PN_en_aggl': 'PN_en_aggl', 'Classe_de_': 'Classe_de_', 'Angle_de_c': 'Angle_de_c', 'Largeur_de': 'Largeur_de', 'PN_avec_di': 'PN_avec_di', 'Présence_s': 'Présence_s', 'Trafic_rou': 'Trafic_rou', 'Trafic_r_1': 'Trafic_r_1', 'Trafic_r_2': 'Trafic_r_2', 'Pourcentag': 'Pourcentag', 'Vitesse_fe': 'Vitesse_fe', 'Vitesse__1': 'Vitesse__1', 'Moment_de_': 'Moment_de_', 'Installati': 'Installati', 'Distance_d': 'Distance_d', 'Distance_1': 'Distance_1', 'Délai_d_an': 'Délai_d_an', 'Délai_d__1': 'Délai_d__1', 'Commune': 'Commune', 'VitesseFer': 'VitesseFer', 'DistanceAn': 'DistanceAn', 'delaiAnnon': 'delaiAnnon', 'Moment': 'Moment', 'TraficRout': 'TraficRout', 'StatutLign': 'StatutLign', 'MAJ': 'MAJ', 'DATESUP': 'DATESUP', 'AP': 'AP', 'Ligne': 'Ligne', 'PK': 'PK', 'Etiq': 'Etiq', 'X': 'X', });
lyr_GaresdecatgorieBC_10.set('fieldAliases', {'R_ID': 'R_ID', 'LIBELLE': 'LIBELLE', 'CODE_UIC': 'CODE_UIC', 'NATURE': 'NATURE', 'UIC': 'UIC', 'Segment': 'Segment', 'DRSNCF': 'DRSNCF', 'REG': 'REG', 'DEP': 'DEP', 'NUMDEP': 'NUMDEP', 'X': 'X', 'Y': 'Y', 'Ligne': 'Ligne', 'PK': 'PK', });
lyr_Pk_11.set('fieldAliases', {'CODE_LIGNE': 'CODE_LIGNE', 'RK': 'RK', 'Recale': 'Recale', 'MAJ': 'MAJ', 'Statuts': 'Statuts', 'Deca': 'Deca', 'PK': 'PK', 'reg': 'reg', 'X': 'X', 'Y': 'Y', });
lyr_GaresdecatgorieA_12.set('fieldAliases', {'R_ID': 'R_ID', 'LIBELLE': 'LIBELLE', 'CODE_UIC': 'CODE_UIC', 'NATURE': 'NATURE', 'UIC': 'UIC', 'Segment': 'Segment', 'DRSNCF': 'DRSNCF', 'REG': 'REG', 'DEP': 'DEP', 'NUMDEP': 'NUMDEP', 'X': 'X', 'Y': 'Y', 'Ligne': 'Ligne', 'PK': 'PK', });
lyr_Oceanetrivires_0.set('fieldImages', {'id': '', });
lyr_Dpartements_3.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_CHF': 'TextEdit', 'NOM_CHF': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Rgions_4.set('fieldImages', {'OBJECTID': 'Range', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limitesadministratives_5.set('fieldImages', {'NATURE': 'TextEdit', 'ID_GEOFLA': 'TextEdit', });
lyr_VoiesferroviairesBPL_6.set('fieldImages', {'Ligne': 'TextEdit', 'Pkdeb': 'Range', 'Pkfin': 'Range', 'Statuts': 'TextEdit', 'Commune': 'TextEdit', 'Voie': 'TextEdit', 'Numdecret': 'TextEdit', 'DateDeclas': 'DateTime', 'DateFerm': 'DateTime', 'DateMaj': 'DateTime', 'Ltheorique': 'Range', 'Objet': 'TextEdit', 'Lréel': 'Range', 'code_insee': 'TextEdit', 'nom': 'TextEdit', 'Entreprise': 'TextEdit', 'Ouverture': 'TextEdit', 'Design': 'TextEdit', 'FermTrafic': 'TextEdit', 'Etiq': 'TextEdit', });
lyr_Communesferroviaires_7.set('fieldImages', {'NOM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM_1': '', });
lyr_Intercommunalit_8.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NOM': 'TextEdit', 'NATURE': 'TextEdit', });
lyr_PNBPL_9.set('fieldImages', {'OBJECTID_1': 'Range', 'LIBELLE': 'TextEdit', 'OBSTACLE': 'TextEdit', 'LIB_TYPE': 'TextEdit', 'MNEMO_TYPE': 'TextEdit', 'Preoc': 'TextEdit', 'Supprime': 'TextEdit', 'EncourSup': 'TextEdit', 'Obs': 'TextEdit', 'Dep': 'Range', 'SelProjet': 'TextEdit', 'OBSTACLE_1': 'TextEdit', 'PN_avec_an': 'TextEdit', 'N°interne_': 'TextEdit', 'PN_en_aggl': 'TextEdit', 'Classe_de_': 'TextEdit', 'Angle_de_c': 'TextEdit', 'Largeur_de': 'TextEdit', 'PN_avec_di': 'TextEdit', 'Présence_s': 'TextEdit', 'Trafic_rou': 'TextEdit', 'Trafic_r_1': 'TextEdit', 'Trafic_r_2': 'TextEdit', 'Pourcentag': 'TextEdit', 'Vitesse_fe': 'TextEdit', 'Vitesse__1': 'TextEdit', 'Moment_de_': 'TextEdit', 'Installati': 'TextEdit', 'Distance_d': 'TextEdit', 'Distance_1': 'TextEdit', 'Délai_d_an': 'TextEdit', 'Délai_d__1': 'TextEdit', 'Commune': 'TextEdit', 'VitesseFer': 'Range', 'DistanceAn': 'Range', 'delaiAnnon': 'Range', 'Moment': 'Range', 'TraficRout': 'Range', 'StatutLign': 'TextEdit', 'MAJ': 'DateTime', 'DATESUP': 'DateTime', 'AP': 'TextEdit', 'Ligne': 'Range', 'PK': 'Range', 'Etiq': 'TextEdit', 'X': '', });
lyr_GaresdecatgorieBC_10.set('fieldImages', {'R_ID': 'Range', 'LIBELLE': 'TextEdit', 'CODE_UIC': 'TextEdit', 'NATURE': 'TextEdit', 'UIC': 'TextEdit', 'Segment': 'TextEdit', 'DRSNCF': 'TextEdit', 'REG': 'TextEdit', 'DEP': 'TextEdit', 'NUMDEP': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ligne': 'Range', 'PK': 'Range', });
lyr_Pk_11.set('fieldImages', {'CODE_LIGNE': 'TextEdit', 'RK': 'Range', 'Recale': 'TextEdit', 'MAJ': 'DateTime', 'Statuts': 'TextEdit', 'Deca': 'Range', 'PK': 'Range', 'reg': '', 'X': '', 'Y': '', });
lyr_GaresdecatgorieA_12.set('fieldImages', {'R_ID': 'Range', 'LIBELLE': 'TextEdit', 'CODE_UIC': 'TextEdit', 'NATURE': 'TextEdit', 'UIC': 'TextEdit', 'Segment': 'TextEdit', 'DRSNCF': 'TextEdit', 'REG': 'TextEdit', 'DEP': 'TextEdit', 'NUMDEP': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ligne': 'Range', 'PK': 'Range', });
lyr_Oceanetrivires_0.set('fieldLabels', {'id': 'no label', });
lyr_Dpartements_3.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'hidden field', 'CODE_CHF': 'no label', 'NOM_CHF': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Rgions_4.set('fieldLabels', {'OBJECTID': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limitesadministratives_5.set('fieldLabels', {'NATURE': 'no label', 'ID_GEOFLA': 'no label', });
lyr_VoiesferroviairesBPL_6.set('fieldLabels', {'Ligne': 'no label', 'Pkdeb': 'no label', 'Pkfin': 'no label', 'Statuts': 'no label', 'Commune': 'no label', 'Voie': 'no label', 'Numdecret': 'no label', 'DateDeclas': 'no label', 'DateFerm': 'no label', 'DateMaj': 'no label', 'Ltheorique': 'no label', 'Objet': 'no label', 'Lréel': 'no label', 'code_insee': 'no label', 'nom': 'no label', 'Entreprise': 'no label', 'Ouverture': 'no label', 'Design': 'no label', 'FermTrafic': 'no label', 'Etiq': 'hidden field', });
lyr_Communesferroviaires_7.set('fieldLabels', {'NOM': 'hidden field', 'INSEE_COM': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM_1': 'no label', });
lyr_Intercommunalit_8.set('fieldLabels', {'ID': 'no label', 'CODE_SIREN': 'no label', 'NOM': 'hidden field', 'NATURE': 'no label', });
lyr_PNBPL_9.set('fieldLabels', {'OBJECTID_1': 'no label', 'LIBELLE': 'no label', 'OBSTACLE': 'no label', 'LIB_TYPE': 'no label', 'MNEMO_TYPE': 'no label', 'Preoc': 'no label', 'Supprime': 'no label', 'EncourSup': 'no label', 'Obs': 'no label', 'Dep': 'no label', 'SelProjet': 'no label', 'OBSTACLE_1': 'no label', 'PN_avec_an': 'no label', 'N°interne_': 'no label', 'PN_en_aggl': 'no label', 'Classe_de_': 'no label', 'Angle_de_c': 'no label', 'Largeur_de': 'no label', 'PN_avec_di': 'no label', 'Présence_s': 'no label', 'Trafic_rou': 'no label', 'Trafic_r_1': 'no label', 'Trafic_r_2': 'no label', 'Pourcentag': 'no label', 'Vitesse_fe': 'no label', 'Vitesse__1': 'no label', 'Moment_de_': 'no label', 'Installati': 'no label', 'Distance_d': 'no label', 'Distance_1': 'no label', 'Délai_d_an': 'no label', 'Délai_d__1': 'no label', 'Commune': 'no label', 'VitesseFer': 'no label', 'DistanceAn': 'no label', 'delaiAnnon': 'no label', 'Moment': 'no label', 'TraficRout': 'no label', 'StatutLign': 'no label', 'MAJ': 'no label', 'DATESUP': 'no label', 'AP': 'no label', 'Ligne': 'no label', 'PK': 'no label', 'Etiq': 'no label', 'X': 'no label', });
lyr_GaresdecatgorieBC_10.set('fieldLabels', {'R_ID': 'no label', 'LIBELLE': 'hidden field', 'CODE_UIC': 'no label', 'NATURE': 'no label', 'UIC': 'no label', 'Segment': 'no label', 'DRSNCF': 'no label', 'REG': 'no label', 'DEP': 'no label', 'NUMDEP': 'no label', 'X': 'no label', 'Y': 'no label', 'Ligne': 'no label', 'PK': 'no label', });
lyr_Pk_11.set('fieldLabels', {'CODE_LIGNE': 'no label', 'RK': 'no label', 'Recale': 'no label', 'MAJ': 'no label', 'Statuts': 'no label', 'Deca': 'no label', 'PK': 'no label', 'reg': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_GaresdecatgorieA_12.set('fieldLabels', {'R_ID': 'no label', 'LIBELLE': 'hidden field', 'CODE_UIC': 'no label', 'NATURE': 'no label', 'UIC': 'no label', 'Segment': 'no label', 'DRSNCF': 'no label', 'REG': 'no label', 'DEP': 'no label', 'NUMDEP': 'no label', 'X': 'no label', 'Y': 'no label', 'Ligne': 'no label', 'PK': 'no label', });
lyr_GaresdecatgorieA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});