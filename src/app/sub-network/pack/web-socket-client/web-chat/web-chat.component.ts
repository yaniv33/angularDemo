import {Component, Input, OnInit} from '@angular/core';
import {ChatServiceService} from './chat-service.service';
import {chatMsg} from "./chat-export";
import {Observable} from "rxjs";


@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css']
})
export class WebChatComponent implements OnInit {

  @Input() userName!: string;

  lastGotMsg :string = '_';

  current_msg$ : Observable<string>;

  constructor(private chatServiceService: ChatServiceService) {

    this.current_msg$ = this.chatServiceService.currentMessage;

    this.current_msg$.subscribe((message : string) =>
    // this.chatServiceService.currentMessage.subscribe((message : string) =>
      {
        console.log('message' , message);

        if (message !== ''){
          let chatMsg:chatMsg = JSON.parse(message);        // try to fix in future filter the next on the service side
          if (chatMsg.to === this.userName)
            this.lastGotMsg = chatMsg.content;

        }
      }
    )

  }

  ngOnInit() {
  }

  connectChat() {
    this.chatServiceService.connectChat(this.userName);
  }

  getStatusChat() {
    this.chatServiceService.getStatusChat(this.userName);
  }
  sendChat(message : string) {
    this.chatServiceService.sendChat(this.userName , message);
  }
  disconnectChat() {
    this.chatServiceService.disconnectChat(this.userName);
  }

  isConnected() {
    return this.chatServiceService.isConnected(this.userName);
  }

  // getLastMsg() : string {
  //   return this.chatServiceService.getLastMsg();
  // }

}
