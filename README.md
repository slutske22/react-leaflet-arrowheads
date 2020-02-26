# leaflet-arrowheads
 React-Leaflet-Arrowheads is a [react-leaflet](https://react-leaflet.js.org/) wrapper for leaflet-arrowheads.  [Leaflet-Arrowheads](https://github.com/slutske22/leaflet-arrowheads) is a small plugin for leaflet to quickly draw arrowheads on polylines for vector visualization.

<p align="center">
  <img src="images/banner.PNG" width="80%">
</p>

## Installation

You can use npm to install react-leaflet-arrowheads:

````
npm install -react-leaflet-arrowheads --save
````

Instead of importing `{ Polyline }` from `react-leaflet`, you'll import a modified `Polyline` from `react-leaflet-arrowheads`

````javascript
import { Plyline } from 'react-leaflet-arrowheads'
````

## Usage

Arrowheads can be applied to any polyline, whether unisegmental, multisegmental, continuous, or discontinuous:

````javascript
var myVector = L.polyline([ coords ]).arrowheads()
````

Arrowheads will be added to your polyline and will automatically be added to and removed from the map when you call add and remove methods on your polyline:

````javascript
myVector.addTo(map) or myVector.remove()
````

If you need to access the arrowheads directly, you can call the `.getArrowheads()` method on your polyline.

````javascript
myVector.getArrowheads() // returns the arrowheads polyline object
myVector.getArrowheads().remove() // removes arrowheads from map
````

Arrowheads can also be deleted from their parent polyline entirely:

````javascript
myVector.deleteArrowheads()
````

Arrowheads can take a configuration object as its argument:

````javascript
var myVector = L.polyline([ coords ]).arrowheads({ <Options> })
````