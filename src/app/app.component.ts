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
  leftVal: number = 10;
  rightVal: number = 90;
  dirty: boolean = false;
  values: Array<any> = [0, 50, 100, 250, 1000, 2000, 3500, 5000, 10000, 30000, 50000]


  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
    this.transactionsFiltered = this.transactions;
    console.log(this.transactions)
  }

  logRight(x) {
    console.log(x.value, this.values[x.value])
    this.rightVal = this.values[x.value]
    
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.leftVal && x.amount < this.rightVal )
    if(!this.dirty) {
        this.dirty = true;
      }
    }
    logLeft(x) {
      console.log(x.value, this.values[x.value])
      this.leftVal = this.values[x.value]
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.leftVal && x.amount < this.rightVal )
    if(!this.dirty) {
      this.dirty = true;
    }
  }

}


