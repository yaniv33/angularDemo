import {Component, OnInit} from '@angular/core';

// npm install --save rxjs-compat
// import {Observable} from "rxjs/Observable";
import { Observable } from 'rxjs'
import {Subject} from "rxjs";
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";

//https://basst314.github.io/ngx-webcam/?
@Component({
  selector: 'app-web-cam',
  templateUrl: './web-cam.component.html',
  styleUrls: ['./web-cam.component.scss']
})
export class WebCamComponent implements OnInit {
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId!: string;
  public facingMode: string = 'environment';
  public errors: WebcamInitError[] = [];

  // // latest snapshot
  public webcamImage!: WebcamImage;

  // // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      console.warn('Camera access was not allowed by user!');
    }
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
    // return null;
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
    // return null;
  }

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = {ideal: this.facingMode};
    }

    return result;
  }
}

// trigger: Subject<void> = new Subject<void>();
// nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
// webcamImage: WebcamImage = null;
// cameraMode: boolean = false;
// showWebcam = true;
// public videoOptions: MediaTrackConstraints = {
//   width: {ideal: 400},
//   height: {ideal: 400}
// };
//
// public allowCameraSwitch = true;
// public deviceId: string;
//
// public get triggerObservable(): Observable<void> {
//   return this.trigger.asObservable();
// }
//
// public handleImage(webcamImage: WebcamImage): void {
//   console.info('received webcam image', webcamImage);
//   // this.personalDataHolder.picture = webcamImage.imageAsBase64;
//   this.webcamImage = webcamImage;
//
//   this.cameraMode = false;
// }
//
// public get nextWebcamObservable(): Observable<boolean | string> {
//   return this.nextWebcam.asObservable();
// }
//
// public cameraWasSwitched(deviceId: string): void {
//   // console.log('active device: ' + deviceId);
//   this.deviceId = deviceId;
// }
//
// public handleInitError(error: WebcamInitError): void {
//   // this.errors.push(error);
//   alert(error.message);
// }



