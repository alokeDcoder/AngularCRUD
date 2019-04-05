import { Component, OnInit } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "AngularFirebaseCRUD";
  public hubconnection: HubConnection;
  nick = "";
  message = "";
  messages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // const builder = new HubConnectionBuilder();
    // this.hubconnection = builder.withUrl("http://localhost:5000/chat").build();
    // this.nick = window.prompt("Your name:", "Roxton");

    // this.hubconnection
    //   .start()
    //   .then(() => console.log("Connection started!"))
    //   .catch(err => console.log("Error while establishing connection :("));

    // this.hubconnection.on(
    //   "sendToAll",
    //   (nick: string, receivedMessage: string) => {
    //     const text = `${nick}:${receivedMessage}`;
    //     this.messages.push(text);
    //   }
    // );
  }

  public sendMessage(): void {
    this.hubconnection
      .invoke("sendToAll", this.nick, this.message)
      .catch(err => console.log(err));
  }
}
