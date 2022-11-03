import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello World";
  url = "../assets/bridge.png"
  userName = ""
  bridgeLabzUrl = "https://www.bridgelabz.com/"
  nameErr = ""
  ngOnInit(): void{
    this.title = "from bridgelabz"
  }
  getBridgeLabzPage(){
    window.open(this.bridgeLabzUrl);
  }
  onInput($event:any){
    console.log("hello", $event.data)
    const nameRegx = RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if(nameRegx.test(this.userName)){
      this.nameErr = ""
      return;
    }
    this.nameErr = "name is not valid"
  }
}
