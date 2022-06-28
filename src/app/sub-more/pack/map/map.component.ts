import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { /*MouseEvent*/ MapsAPILoader , GoogleMapsAPIWrapper, AgmMap} from '@agm/core';
// import { google.maps.MouseEvent as AGMMouseEvent } from '@agm/core';

declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  @ViewChild(AgmMap, {static: false}) map!: AgmMap;

  constructor( private mapsWrapper:GoogleMapsAPIWrapper){}

  ngAfterViewInit(): void {
    // debugger;
    this.mapsWrapper.getNativeMap().then((map) => {
      // debugger;
      console.log("Map = ",map);
// I have been manually updating core/services/google-maps-types.d.ts to include things th…DragEnd(m: marker, $event: MouseEvent) {
      console.log("Map zoom ",map.getZoom());

      let position = new google.maps.LatLng(45.521, -122.677);
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: position,
        radius: 10000
      });

    });
  }
  clickedMarker(label: string | undefined, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    console.log('marcador');
    console.log(this.map.usePanning);
    this.mapsWrapper.panTo({lat: 0,lng: 0});
  }
/*
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
*/
  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

    // let watch = this.geolocation.watchPosition().subscribe(position => {
    //   if ((position as Geoposition).coords != undefined) {
    //     var geoposition = (position as Geoposition);
    //     console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
    //   } else {
    //     var positionError = (position as PositionError);
    //     console.log('Error ' + positionError.code + ': ' + positionError.message);
    //   }

  }

  markerDragEnd(m: marker, $event: google.maps.MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]

  doMove(){
    this.lat += 32.0853;
    this.lng += 34.7818;
  }

  goTelAviv(){
    this.lat += 1;
    this.lng += 1;
  }
  goMyLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position : GeolocationPosition) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
        }
      },
      (error: GeolocationPositionError) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
}


// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
