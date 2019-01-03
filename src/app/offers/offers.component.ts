import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CurrentOffersService } from '../current-offers.service'


@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private currentOffers: CurrentOffersService) { }

  isLoaded = false;
  currentPage = 1;
  limit = 10;
  totalPages: number;
  minIndex = 0;
  maxIndex = 10
  offers: Array<any> = [];
  offersToShow: Array<any> = [];

  ngOnInit() {
    setTimeout(() => {
      this.offers = this.currentOffers.getOffers()
      this.isLoaded = true;
      this.offersToShow = this.offers.filter((e, i) => i >= this.minIndex && i < this.maxIndex)
      this.totalPages = Math.ceil(this.offers.length / this.limit)
      console.log(this.offers)
    }, 1400)
  }

  updateLimit(option) {
    this.limit = +option.value;
    this.minIndex = 0;
    this.currentPage = 1;
    this.maxIndex = this.limit;
    this.isLoaded = false;
    setTimeout(() => {
      this.totalPages = Math.ceil(this.offers.length / this.limit);
      console.log(this.minIndex, this.maxIndex, 'should be 0 and 20')
      this.offersToShow = this.offers.filter((e, i) => i >= this.minIndex && i < this.maxIndex);
      this.isLoaded = true;
      console.log(this.offersToShow);
      console.log(this.offers);
      
    }, 1400)
  }

  goPrev(event) {
    console.log('goPrev was hit', event)
    this.currentPage-= 1;
    this.minIndex -= this.limit;
    this.maxIndex -= this.limit;
    console.log(this.minIndex, this.maxIndex)
    this.offersToShow = this.offers.filter((e, i) => i >= this.minIndex && i < this.maxIndex)
  }

  goNext(event) {
    console.log('goNext was hit', event)
    this.currentPage+=1
    this.minIndex += this.limit
    this.maxIndex += this.limit
    this.offersToShow = this.offers.filter((e, i) => i >= this.minIndex && i < this.maxIndex)
  }

}
