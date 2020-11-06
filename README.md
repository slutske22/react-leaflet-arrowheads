# react-leaflet-arrowheads
 React-Leaflet-Arrowheads is a [react-leaflet](https://react-leaflet.js.org/) wrapper for leaflet-arrowheads.  [Leaflet-Arrowheads](https://github.com/slutske22/leaflet-arrowheads) is a small plugin for leaflet to quickly draw arrowheads on polylines for vector visualization.
 
 ***Note:***  react-leaflet version 3 is coming soon, which introduces many breaking changes.  A version of react-leaflet-arrowheads that is compatible with react-leaflet v3 is ready, and will be pushed to the main branch as soon as v3 is in a stable release.  Support for v2 will still be available.

<p align="center">
  <img src="images/banner.png" width="80%">
</p>

##  [:eyes: Demo :eyes:](https://codesandbox.io/s/rl-arrowheads-v2-example-z8qwx)

## Installation

You can use npm to install react-leaflet-arrowheads:

````
npm install react-leaflet-arrowheads --save
````

## Usage

#### Using with `<Polyline>`

Instead of importing `{ Polyline }` from `react-leaflet`, you'll import a modified `Polyline` from `react-leaflet-arrowheads`

````javascript
import Polyline from 'react-leaflet-arrowheads'
````

Within your `<Map />` component, you can now use this new `Polyline` component.  Using the `arrowheads` prop on this new `Polyline` component will apply arrowheads.

````javascript
<Map>

  <TileLayer ... />

  <Polyline positions={ [coords array] } arrowheads />

</Map>
````

#### Using with `<GeoJSON>`

If you want to apply arrowheads to a GeoJSON, you don't need `react-lefalet-arrowheads`, just `leaflet-arrowheads`.  Import `leaflet-arrowheads` in your project:

````javascript
npm i leaflet-arrowheads
````

Then you can apply `arrowheads` as a property of a `<GeoJSON />` component:

````javascript
<GeoJSON data={data} arrowheads={{ options }} />
````

And that's it!


## Options

Declaring a polyline with the `arrowheads` prop with no options object will give the default options:

````javascript
<Polyline positions={ [coords array] } arrowheads />
````

The arrowheads prop can also take a configuration object as its value:

````javascript
<Polyline positions={ [coords array] } arrowheads={{ size: '300m', frequency: '1000m' }} />
````

The options that are available are te same options inherited from leaflet-arrowheads.  [Click here](https://github.com/slutske22/leaflet-arrowheads#options) for a list of options and examples.
