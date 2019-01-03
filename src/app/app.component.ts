import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private transactionService: TransactionsService) {}
  transactions;
  @ViewChild('left') private alex: ElementRef
  isLoaded: boolean = false;
  transactionsFiltered: Array<any> = [];
  sliderLeft: number = 4;
  controlLeft: string = 'min'
  sliderRight: number = 6;
  controlRight: string = 'max'
  dirty: boolean = false;
  values: Array<any> = [0, 50, 100, 250, 1000, 2000, 3500, 5000, 10000, 30000, 50000];
  min: number = this.values[this.sliderLeft];
  max: number = this.values[this.sliderRight];


  ngOnInit() {
    setTimeout(() => {
      this.transactions = this.transactionService.getTransactions()
      this.transactionsFiltered = this.transactions;
      this.isLoaded = true;
    }, 2000)

    console.log(this.alex)
  }

  logRight(x) {
    if(x.value > this.sliderLeft) {
      console.log('Right controlling max')
      this.controlRight = 'max'
    } else if (x.value < this.sliderLeft) {
      console.log('Right controlling min')
      this.controlRight = 'min'
    }
    if(this.controlRight === 'max') {
      this.sliderRight = +x.value;
      this.max = this.values[this.sliderRight];
    } else if(this.controlRight === 'min') {
      this.sliderRight = +x.value;
      this.min = this.values[this.sliderRight];
    }
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.min && x.amount < this.max )
    if(!this.dirty) {
      this.dirty = true;
    }
  }
  logLeft(x) {
    if(x.value > this.sliderRight) {
      console.log('Right controlling max')
      this.controlLeft = 'max'
    } else if (x.value < this.sliderRight) {
      console.log('Right controlling min')
      this.controlLeft = 'min'
    }
    if(this.controlLeft === 'max') {
      this.sliderLeft = +x.value;
      this.max = this.values[this.sliderLeft];
    } else if(this.controlLeft === 'min') {
      this.sliderLeft = +x.value;
      this.min = this.values[this.sliderLeft];
    }
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.min && x.amount < this.max )
    if(!this.dirty) {
      this.dirty = true;
    }
  }
}


