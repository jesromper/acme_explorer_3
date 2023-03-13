import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  protected item: Item;
  protected isSpecial = false;

  constructor() {
    this.item = new Item();
    this.item.sku = '57-AB32';
    this.item.name = 'Berries Mix'
    this.item.description = 'Berry mix has a great harmony of tasty berries.';
    this.item.price = 6.4;
    this.item.picture = '../../assets/images/berries-mix.jpg';
    this.item.comments = ['Very Tasty!', 'Great Mix', 'Love it!'];
    this.item.deleted = false;
    this.isSpecial = true;
   }

  ngOnInit(): void {
  }

  getComments() {
    return this.item.comments;
  }

  removeItem() {
    this.item.deleted = true;
  }

  onKey() {
    this.isSpecial = Number(this.item.price) > 0 && this.item.price < 10;
  }

  getCurrentStyles() {
    let deal = this.item.price >= 10;
    let currentStyles = {
      'font-weight': !deal ? 'bold' : 'normal',
      'font-size.px': !deal ? '24' : '12',
      'color': !deal ? 'green' : 'red'
    }
    return currentStyles;
  }

}
