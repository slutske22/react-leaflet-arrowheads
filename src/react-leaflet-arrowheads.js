import React from 'react'
import { Polyline } from 'react-leaflet'
import 'leaflet-arrowheads'

class ArrowheadsPolyline extends React.Component{

   componentDidMount(){
      const polyline = this.polylineRef.leafletElement
      if (this.props.arrowheads){
         polyline.arrowheads(this.props.arrowheads)
         polyline._update()
      }
   }

   componentWillUnmount(){
      if (this.props.arrowheads){
         const polyline = this.polylineRef.leafletElement
         polyline.deleteArrowheads()
      }
   }

   render(){
      return(
         <Polyline {...this.props} ref={polylineRef => this.polylineRef = polylineRef}>
            {this.props.children}
         </Polyline>
      )
   }
   
}

export default ArrowheadsPolyline