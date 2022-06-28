
import { Component } from '@angular/core';
import {photoState, popOverState, photoStateMove, photosAnimation, photoTilt} from "./animation";
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  animations: [popOverState ,
               photoState ,
               photoStateMove ,
               photosAnimation,
               photoTilt
  ]
})



export class AnimationsComponent {

  show = false;
  position: string | null;
  positionWithKey: string | null;
  positionTilt: string | null;

  photos : string[]= [];

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }

  changePosition(newPosition : string | null){
    this.position = newPosition;
  }

  changeWithKeyFrame(newPosition : string | null){
    this.positionWithKey = newPosition;
  }

  setPhotos(isSet: boolean){
    this.photos = isSet ?  [
      "https://source.unsplash.com/random/200x200?sig=1",
      "https://source.unsplash.com/random/200x200?sig=2",
      "https://source.unsplash.com/random/200x200?sig=3"
    ] : [];

  }

  logAnimation($event) {
    console.log(`${this.positionWithKey} animation ${$event.phaseName}`)
  }

}
