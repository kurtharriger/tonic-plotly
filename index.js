module.exports = function plotly(data) {
    return '<div id="plotly"/>' +
      '<script type="text/javascript" src="https://cdn.plot.ly/plotly-latest.min.js"></script>' +
      '<script>Plotly.newPlot("plotly", ' + JSON.stringify(data)+ ');</script>' +
      '</div>';
}
