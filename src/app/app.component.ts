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
  controlLeft: boolean = true;
  sliderRight: number = 6;
  controlRight: boolean = true;
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
    if(x.value > this.sliderLeft && this.controlRight) {
      this.sliderRight = +x.value
      this.max = this.values[this.sliderRight];
    } else if(x.value < this.sliderLeft && this.controlRight) {
      this.sliderRight = this.sliderLeft;
      this.max = this.values[this.sliderRight];
      this.sliderLeft = +x.value
      this.min = this.values[this.sliderLeft];
      this.controlRight = false;
    } else if(x.value > this.sliderLeft && !this.controlRight) {
      // this.sliderLeft = this.sliderRight
      this.sliderLeft = +x.value;
      this.min = this.values[this.sliderLeft];
      this.max = this.values[this.sliderRight];
      // this.controlRight = true;
    } else if(x.value < this.sliderLeft && !this.controlRight) {
      this.sliderRight = +x.value;
      this.min = this.values[this.sliderRight];
    }
    this.transactionsFiltered = this.transactions.filter((x) => x.amount > this.values[this.sliderLeft] && x.amount < this.values[this.sliderRight] )
    if(!this.dirty) {
      this.dirty = true;
    }
    console.log('leftVal', this.sliderLeft)
    console.log('rightVal', this.sliderRight)
  }
  logLeft(x) {
    console.log(this.alex.nativeElement.innerHTML)
    console.log(this.alex.nativeElement.getBoundingClientRect())
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


