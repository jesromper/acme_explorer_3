import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}
  createItems(): Item[] {
    let item: Item;
    let items: Item[];
    // Item 1
    items = new Array();
    item = new Item();
    item.sku = '57-AB32';
    item.name = 'Berries mix';
    item.description =
      'Berry mix has a great harmony of tasty berries' +
      "Can't pick just one berry? Then try them all";
    item.price = 6.4;
    item.picture = '../../assets/images/berries-mix.jpg';
    item.comments = ['Very Tasty!', 'Great mix', 'Love it!'];
    item.deleted = false;
    items.push(item);

    // Item 2
    item = new Item();
    item.sku = 'YH-KI9E';
    item.name = 'Banana';
    item.description =
      'Bananas, natures original superfood full of \
    magnesium, potassium and vitamin B';
    item.price = 1.99;
    item.picture = '../.. /assets/images/banana. png';
    item.comments = [];
    item.deleted = true;
    items.push(item);

    // Item 3
    item = new Item();
    item.sku = 'AH-93A0';
    item.name = 'Pineapple';
    item.description = 'Tropical fruit';
    item.price = 2.75;
    item.picture = '../../assets/images/pinneaple.png';
    item.comments = [];
    item.deleted = false;
    items.push(item);
    //  Item - 4
    item = new Item();
    item.sku = 'GF-203E';
    item.name = 'Fresh fruit tray';
    item.description = 'All you need to start your day, Ready for delivery';
    item.price = 19.99;
    item.picture = '../../assets/images/salad-fruit.png';
    item.comments = [
      'Very healthy',
      'I found it very expensive',
      'Quality fruit',
    ];
    item.deleted = false;
    items.push(item);
    //  Item 5
    item = new Item();
    item.sku = 'QW-AWS3';
    item.name = 'Avocado';
    item.description = 'free of sodium and sugar fruit';
    item.price = 6.7;
    item.picture = '../../assets/images/avocado.png';
    item.comments = ['superfood', 'Savory flavor'];
    item.deleted = false;
    items.push(item);
    return items;
  }
}
