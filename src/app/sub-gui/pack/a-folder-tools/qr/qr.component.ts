import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

// https://www.npmjs.com/package/ng-qrcode


export class QrComponent implements OnInit {

  myAngularxQrCode = '1234565789';

  constructor() { }

  ngOnInit() {
  }

}
