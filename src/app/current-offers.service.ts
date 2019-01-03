import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentOffersService {


  constructor() { }

  getOffers() {
    return offers;
  }
}

const offers = [
  {
      id: 1,
      company: 'Build a Bear',
      offer: '$5 off total',
      expiration: '1/1/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 2,
      company: 'Best Buy',
      offer: '$100 Select Macbook Pro',
      expiration: '1/5/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 3,
      company: 'Apple',
      offer: 'Buy one iPhone Xr get One',
      expiration: '1/10/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 4,
      company: 'Toyota Dealer',
      offer: '$5,000 off MSRP',
      expiration: '1/15/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 5,
      company: 'Starbucks',
      offer: '50% off purchase of $25 or more',
      expiration: '1/20/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 6,
      company: 'Taco Bell',
      offer: '5% total purchase',
      expiration: '1/25/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 7,
      company: 'Coke Store',
      offer: 'Buy Coke, get more Coke',
      expiration: '1/30/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 8,
      company: 'Sony',
      offer: '75% off TVs 21in or less' ,
      expiration: '2/5/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 9,
      company: 'Logitech',
      offer: 'Buy keyboard get mouse 50% off',
      expiration: '1/30/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 10,
      company: 'Acer',
      offer: 'Buy one computer, get 18 free!',
      expiration: '1/11/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 11,
      company: 'Kid to Kid',
      offer: '99% off all inventory',
      expiration: '2/15/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 12,
      company: 'T-Mobile',
      offer: '20% off purchase of accessories',
      expiration: '2/18/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 13,
      company: 'Shutterfly',
      offer: '10% off purchase of $50 or more',
      expiration: '2/27/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 14,
      company: 'RC Willey',
      offer: 'Free iPad with purchase of $599 or more',
      expiration: '3/5/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 15,
      company: 'Ikea',
      offer: 'Free Meatballs with purchase of dresser',
      expiration: '3/30/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
  {
      id: 16,
      company: 'Luxor Hotel',
      offer: 'Free slots for 1 hour after documented $100,000 loss',
      expiration: '3/25/2019',
      image: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg'
  },
];
