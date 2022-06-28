import { Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {

  //https://www.npmjs.com/package/angular-audio-context

  constructor(private _audioContext: AudioContext) {}

  public async beep() {

    if (this._audioContext.state === 'suspended') {
      await this._audioContext.resume();
    }

    const oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this._audioContext.destination);

    oscillatorNode.start();
    oscillatorNode.stop(this._audioContext.currentTime + 0.5);
  }

  ngOnInit() {
  }

}
