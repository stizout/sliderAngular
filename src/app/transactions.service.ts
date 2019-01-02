import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions() {
    return transactions;
  }

}



const transactions = [
  {
      id: 1,
      company: 'American Express',
      amount: 69.54,
      date: '1/1/2019'
  },
  {
      id: 2,
      company: 'Best Buy',
      amount: 1169.54,
      date: '1/5/2019'
  },
  {
      id: 3,
      company: 'Apple',
      amount: 2269.96,
      date: '1/10/2019'
  },
  {
      id: 4,
      company: 'Toyota Dealer',
      amount: 44069.11,
      date: '1/15/2019'
  },
  {
      id: 5,
      company: 'Build a Bear',
      amount: 169.87,
      date: '1/20/2019'
  },
  {
      id: 6,
      company: 'Taco Bell',
      amount: 9.54,
      date: '1/25/2019'
  },
  {
      id: 7,
      company: 'Coke Store',
      amount: 119.38,
      date: '1/30/2019'
  },
  {
      id: 8,
      company: 'Sony',
      amount: 1601.66,
      date: '2/5/2019'
  },
  {
      id: 9,
      company: 'Logitech',
      amount: 180.97,
      date: '1/30/2019'
  },
  {
      id: 10,
      company: 'Acer',
      amount: 1509.11,
      date: '1/11/2019'
  },
  {
      id: 11,
      company: 'Kid to Kid',
      amount: 159.54,
      date: '2/15/2019'
  },
  {
      id: 12,
      company: 'T-Mobile',
      amount: 159.18,
      date: '2/18/2019'
  },
  {
      id: 13,
      company: 'Shutterfly',
      amount: 19.87,
      date: '2/27/2019'
  },
  {
      id: 14,
      company: 'RC Willey',
      amount: 5412.21,
      date: '3/5/2019'
  },
  {
      id: 15,
      company: 'Ikea',
      amount: 559.14,
      date: '3/30/2019'
  },
  {
      id: 16,
      company: 'Luxor Hotel',
      amount: 819.54,
      date: '3/25/2019'
  },
];
