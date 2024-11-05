import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5]
  isShown = false;
  randomMsg = "random-red";


  togleModal(event: Event): void {
    // console.log({ event });
    this.isShown = !this.isShown;
    this.randomMsg = this.isShown ? "random-green" : "random-red"
  }

  handleClick(input: HTMLInputElement) {
    this.numbers.push(Number(input.value));
    this.isShown = false;
  }
}
