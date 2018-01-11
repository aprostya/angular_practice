import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output ('customInt') customInterval = new EventEmitter<number>();
  interval;
  customEvent;
  lastNumber = 0;
  customNumber = 0;
  flag = 'even';

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
    onShowText() {
    this.customEvent = setInterval(() => {
      this.customInterval.emit(this.customNumber + 1);
      this.customNumber++;
    }, 2000);
  }

  onPauseGame() {
    clearInterval(this.interval);
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
