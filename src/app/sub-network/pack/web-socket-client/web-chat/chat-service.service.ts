import { Injectable } from '@angular/core';
import { chatMsg } from './chat-export'
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  map = new Map<string, WebSocket>();
  // ws = null;
  isconnected = false;
  // lastMsgGot : string;
  name: string;

messageSource = new BehaviorSubject('');
// messageSource = new Subject();
currentMessage = this.messageSource.asObservable();

  constructor() { }

  connectChat(name: string) {
    try {
      const ws = new WebSocket(this.getWebSocketLocation() + '/chat/' + name);

      ws.onopen = event => {
        this.isconnected = true;
        console.log('onopen::' + JSON.stringify(event, null, 4));
      };

      ws.onmessage = event => {

        this.messageSource.next(event.data);
        console.log('onmessage::' + JSON.stringify(event.data, null, 4));
      };
      ws.onclose = event => {
        this.isconnected = false;
        console.log('onclose::' + JSON.stringify(event, null, 4));
      };
      ws.onerror = event => {
        this.isconnected = false;
        console.log('onerror::' + JSON.stringify(event, null, 4));
      };

      this.map.set(name , ws);

    } catch (exception) {
      console.error(exception);
    }
  }


  getWebSocketLocation() {
    return 'ws://127.0.0.1:8086/springDemo';
    // return 'springDemo/';            // it is unknown why i can not use the proxy for websocket
  }

  getStatusChat(name: string): number {
    if (this.isNameValid(name) && this.map?.get(name) && this.map?.get(name) != undefined ) {
      console.log('Status::' + this.map?.get(name)?.readyState);
      return <number>this.map?.get(name)?.readyState;
    } else {
      console.log('not connected');
      return -3;
    }
  }

  sendChat(name: string , message: any) {

    if (this.map?.get(name)?.readyState === WebSocket.OPEN) {
      this.map?.get(name)?.send(message);
    } else {
      console.error('webSocket is not open. readyState=' + this.map?.get(name)?.readyState);
    }
  }

  disconnectChat(name: string) {
    if (this.map?.get(name)?.readyState === WebSocket.OPEN) {
      this.map?.get(name)?.close();

    } else {
      console.error('webSocket is not open. readyState=' + this.map?.get(name)?.readyState);
    }
  }

  isConnected(name: string) {
    const ws = this.map?.get(name);
    return  ws != null && (ws.readyState === ws.CONNECTING
                        || ws.readyState === ws.OPEN);
  }

  isNameValid(name: string): boolean {
    return this.map?.get(name) !== null;
  }

  // getLastMsg(){
  //   return this.lastMsgGot;
  // }


}
