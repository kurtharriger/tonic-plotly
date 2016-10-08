## tonic-plotly

Simple wrapper to render [plot.ly](https://plot.ly) on [tonicdev](http://tonicdev.com)

[Example](https://runkit.com/kurtharriger/tonic-plotly)
```
const d3 = require('d3');
const plotly = require('tonic-plotly');

const x = d3.range(-5, 5, 0.1);  
const f = (x) => Math.sin(x);
const g = (x) => Math.cos(x);
const fdata = { x, y: x.map(f), type: 'scatter', name: 'f(x)' };
const gdata = { x, y: x.map(g), type: 'scatter', name: 'g(x)' };

plotly([fdata, gdata]);
```
