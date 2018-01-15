import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  funnyImage: string;

  constructor() { }

  ngOnInit() {
    this.funnyImage = "https://media1.giphy.com/media/NPjlpCVQ8kQeI/giphy.gif";
  }

}
