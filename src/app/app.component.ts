import { Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  custInt;
  flag = 'even';

  @Output () onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.flag = 'even';
      this.evenNumbers.push(firedNumber);
      console.log(this.flag);
    } else {
      this.oddNumbers.push(firedNumber);
      this.flag = 'odd';
      console.log(this.flag);
    }
  }
  @Output() onGameTurnover() {
    if (this.flag === 'odd') {
      alert ('Okay');
      console.log(this.flag);
    } else {
      alert('Wrong');
      console.log(this.flag);
    }
  }
}
