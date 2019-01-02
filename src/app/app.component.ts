import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private transactionService: TransactionsService) {}

  title = 'slider';
  transactions: Array<any> = [];
  transactionsFiltered: Array<any> = [];
  sliderLeft: number = 1;
  sliderRight: number = 8;
  dirty: boolean = false;
  values: Array<any> = [0, 50, 100, 250, 1000, 2000, 3500, 5000, 10000, 30000, 50000];
  min: number = this.values[this.sliderLeft];
  max: number = this.values[this.sliderRight];


  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
    this.transactionsFiltered = this.transactions;
    console.log(this.transactions)
  }

  logRight(x) {
    this.sliderRight = x.value
    this.max = this.values[this.sliderRight];
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.values[this.sliderLeft] && x.amount < this.values[this.sliderRight] )
    if(!this.dirty) {
      this.dirty = true;
    }
    console.log('leftVal', this.sliderLeft)
    console.log('rightVal', this.sliderRight)
  }
  logLeft(x) {
    this.sliderLeft = x.value;
    this.min = this.values[this.sliderLeft];
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.values[this.sliderLeft] && x.amount < this.values[this.sliderRight] )
    if(!this.dirty) {
      this.dirty = true;
    }
    console.log('sliderLeft', this.sliderLeft)
    console.log('sliderRight', this.sliderRight)
  }

}


