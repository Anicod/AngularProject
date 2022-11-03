import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello World";
  ngOnInit(): void{
    this.title = "Hell0 world from bridgelabz"
  }
}
