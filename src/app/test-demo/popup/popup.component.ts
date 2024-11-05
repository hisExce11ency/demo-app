import { Component, OnDestroy, OnInit } from '@angular/core';
import { trainImageSrc } from '../../constants';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit, OnDestroy {
  trainImage = "";

  ngOnInit(): void {
    setTimeout(() => {
      this.trainImage = trainImageSrc;
      console.log("Data has been fetched on INIT!");
      console.log("Subscribe for Events");
    }, 2000);
    console.log("Popup has been created!");
  }

  ngOnDestroy(): void {
    console.log("UNSUBSCRIBE from all of the EVENTS");

  }
}
