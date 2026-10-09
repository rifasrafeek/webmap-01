ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9300663.000000, 5216293.500000, -9290836.000000, 5224728.000000]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ROI4239914N8349122E_3 = new ol.format.GeoJSON();
var features_ROI4239914N8349122E_3 = format_ROI4239914N8349122E_3.readFeatures(json_ROI4239914N8349122E_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI4239914N8349122E_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROI4239914N8349122E_3.addFeatures(features_ROI4239914N8349122E_3);
var lyr_ROI4239914N8349122E_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROI4239914N8349122E_3, 
                style: style_ROI4239914N8349122E_3,
                popuplayertitle: 'ROI (42.39914N,-83.49122E)',
                interactive: true,
                title: '<img src="styles/legend/ROI4239914N8349122E_3.png" /> ROI (42.39914N,-83.49122E)'
            });
var format_route_guide_4 = new ol.format.GeoJSON();
var features_route_guide_4 = format_route_guide_4.readFeatures(json_route_guide_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_guide_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_guide_4.addFeatures(features_route_guide_4);
var lyr_route_guide_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_guide_4, 
                style: style_route_guide_4,
                popuplayertitle: 'route_guide',
                interactive: true,
                title: '<img src="styles/legend/route_guide_4.png" /> route_guide'
            });
var format_Railway_Line_5 = new ol.format.GeoJSON();
var features_Railway_Line_5 = format_Railway_Line_5.readFeatures(json_Railway_Line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_Line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_Line_5.addFeatures(features_Railway_Line_5);
var lyr_Railway_Line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_Line_5, 
                style: style_Railway_Line_5,
                popuplayertitle: 'Railway_Line',
                interactive: true,
                title: '<img src="styles/legend/Railway_Line_5.png" /> Railway_Line'
            });
var format_Sidewalks_6 = new ol.format.GeoJSON();
var features_Sidewalks_6 = format_Sidewalks_6.readFeatures(json_Sidewalks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sidewalks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sidewalks_6.addFeatures(features_Sidewalks_6);
var lyr_Sidewalks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sidewalks_6, 
                style: style_Sidewalks_6,
                popuplayertitle: 'Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/Sidewalks_6.png" /> Sidewalks'
            });
var format_EOP_Roadway_7 = new ol.format.GeoJSON();
var features_EOP_Roadway_7 = format_EOP_Roadway_7.readFeatures(json_EOP_Roadway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EOP_Roadway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EOP_Roadway_7.addFeatures(features_EOP_Roadway_7);
var lyr_EOP_Roadway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EOP_Roadway_7, 
                style: style_EOP_Roadway_7,
                popuplayertitle: 'EOP_Roadway',
                interactive: true,
                title: '<img src="styles/legend/EOP_Roadway_7.png" /> EOP_Roadway'
            });
var format_Driveways_8 = new ol.format.GeoJSON();
var features_Driveways_8 = format_Driveways_8.readFeatures(json_Driveways_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveways_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveways_8.addFeatures(features_Driveways_8);
var lyr_Driveways_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Driveways_8, 
                style: style_Driveways_8,
                popuplayertitle: 'Driveways',
                interactive: true,
                title: '<img src="styles/legend/Driveways_8.png" /> Driveways'
            });
var group_VectorExtracted = new ol.layer.Group({
                                layers: [lyr_Railway_Line_5,lyr_Sidewalks_6,lyr_EOP_Roadway_7,lyr_Driveways_8,],
                                fold: 'open',
                                title: 'Vector Extracted'});

lyr_GoogleRoad_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(false);lyr_ROI4239914N8349122E_3.setVisible(true);lyr_route_guide_4.setVisible(true);lyr_Railway_Line_5.setVisible(true);lyr_Sidewalks_6.setVisible(true);lyr_EOP_Roadway_7.setVisible(true);lyr_Driveways_8.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_ROI4239914N8349122E_3,lyr_route_guide_4,group_VectorExtracted];
lyr_ROI4239914N8349122E_3.set('fieldAliases', {'fid': 'fid', 'MINX': 'MINX', 'MINY': 'MINY', 'MAXX': 'MAXX', 'MAXY': 'MAXY', 'CNTX': 'CNTX', 'CNTY': 'CNTY', 'AREA': 'AREA', 'PERIM': 'PERIM', 'HEIGHT': 'HEIGHT', 'WIDTH': 'WIDTH', });
lyr_route_guide_4.set('fieldAliases', {'fid': 'fid', 'Length': 'Length', });
lyr_Railway_Line_5.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', });
lyr_Sidewalks_6.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', 'Sidewalk_Segment': 'Sidewalk_Segment', });
lyr_EOP_Roadway_7.set('fieldAliases', {'fid': 'fid', 'Road_Name': 'Road_Name', 'Road_Segment': 'Road_Segment', 'From_Intersection': 'From_Intersection', 'To_Intersection': 'To_Intersection', 'Length_ft': 'Length_ft', 'Notes': 'Notes', });
lyr_Driveways_8.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', 'Driveway_Segment': 'Driveway_Segment', });
lyr_ROI4239914N8349122E_3.set('fieldImages', {'fid': '', 'MINX': '', 'MINY': '', 'MAXX': '', 'MAXY': '', 'CNTX': '', 'CNTY': '', 'AREA': '', 'PERIM': '', 'HEIGHT': '', 'WIDTH': '', });
lyr_route_guide_4.set('fieldImages', {'fid': '', 'Length': '', });
lyr_Railway_Line_5.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', });
lyr_Sidewalks_6.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', 'Sidewalk_Segment': 'TextEdit', });
lyr_EOP_Roadway_7.set('fieldImages', {'fid': 'TextEdit', 'Road_Name': 'TextEdit', 'Road_Segment': 'TextEdit', 'From_Intersection': 'TextEdit', 'To_Intersection': 'TextEdit', 'Length_ft': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Driveways_8.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', 'Driveway_Segment': 'TextEdit', });
lyr_ROI4239914N8349122E_3.set('fieldLabels', {'fid': 'no label', 'MINX': 'no label', 'MINY': 'no label', 'MAXX': 'no label', 'MAXY': 'no label', 'CNTX': 'no label', 'CNTY': 'no label', 'AREA': 'no label', 'PERIM': 'no label', 'HEIGHT': 'no label', 'WIDTH': 'no label', });
lyr_route_guide_4.set('fieldLabels', {'fid': 'no label', 'Length': 'no label', });
lyr_Railway_Line_5.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', });
lyr_Sidewalks_6.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', 'Sidewalk_Segment': 'no label', });
lyr_EOP_Roadway_7.set('fieldLabels', {'fid': 'no label', 'Road_Name': 'no label', 'Road_Segment': 'no label', 'From_Intersection': 'no label', 'To_Intersection': 'no label', 'Length_ft': 'no label', 'Notes': 'no label', });
lyr_Driveways_8.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', 'Driveway_Segment': 'no label', });
lyr_Driveways_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});