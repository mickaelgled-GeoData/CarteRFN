var size = 0;
var placement = 'point';
function categories_VoiesferroviairesBPL_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Exploitée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,30,120,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.4699999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Neutralisé':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,30,120,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fret':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,190,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,190,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_VoiesferroviairesBPL_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Statuts");
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#6e1e78";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Etiq") !== null && resolution > 0 && resolution < 0) {
        labelText = String(feature.get("Etiq"));
    }
    
    var style = categories_VoiesferroviairesBPL_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
