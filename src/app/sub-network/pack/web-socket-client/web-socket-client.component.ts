import {Component, OnInit, Type} from '@angular/core';
import {ChatServiceService} from './web-chat/chat-service.service';

@Component({
  selector: 'app-web-socket-client',
  templateUrl: './web-socket-client.component.html',
  styleUrls: ['./web-socket-client.component.css']
})
export class WebSocketClientComponent implements OnInit {

  webSocket!: WebSocket;

  nameArr: string[] = [];

  constructor(private chatServiceService: ChatServiceService) {
  }
  ngOnInit() {
  }

  // getServerUrl() {
  //   // return 'ws://127.0.0.1:8086/' + 'springDemo/endpoint';
  //   return 'springDemo/endpoint/';
  // }

  add(name: string) {
    if (this.chatServiceService.isNameValid(name)) {
      this.nameArr.push(name);
      console.log('name arrRoutes = ' , this.nameArr);
    } else {
      console.log('name already exists');
    }
  }

  connect() {
    try {
      const url = this.chatServiceService.getWebSocketLocation() + '/endpoint';
      this.webSocket = new WebSocket(url);
      // this.webSocket = new WebSocket('ws://127.0.0.1:8086/springDemo/endpoint');
      // this.webSocket = new WebSocket(this.getServerUrl());

      //
      // Implement WebSocket event handlers!
      //
      // if (this.webSocket){
      this.webSocket.onopen = event => {
        console.log('onopen::' + JSON.stringify(event, null, 4));
      };

      this.webSocket.onmessage = event => {
        const msg = event.data;
        console.log('onmessage::' + JSON.stringify(msg, null, 4));
      };
      this.webSocket.onclose = event => {
        console.log('onclose::' + JSON.stringify(event, null, 4));
      };
      this.webSocket.onerror = event => {
        console.log('onerror::' + JSON.stringify(event, null, 4));
      };
      // }



    } catch (exception) {
      console.error(exception);
    }
  }

  getStatus() {
    console.log('Status::' + this.webSocket.readyState);
    return this.webSocket.readyState;
  }
  send(message: any) {

    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(message);

    } else {
      console.error('webSocket is not open. readyState=' + this.webSocket.readyState);
    }
  }

  disconnect() {
    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.close();

    } else {
      console.error('webSocket is not open. readyState=' + this.webSocket.readyState);
    }
  }

}
