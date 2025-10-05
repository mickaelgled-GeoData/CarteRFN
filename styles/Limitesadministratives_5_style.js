var size = 0;
var placement = 'point';
function categories_Limitesadministratives_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Limite de département':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,79,83,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,251,255,1.0)', lineDash: [4.56,2.28,1.14,2.28], lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limite de région':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,79,83,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,251,255,1.0)', lineDash: [5.0811472,2.5405736,1.2702868,2.5405736], lineCap: 'square', lineJoin: 'bevel', width: 1.2702868}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limite côtière':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(117,210,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Limitesadministratives_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("NATURE");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Limitesadministratives_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
