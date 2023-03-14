import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  protected items: Item[];

  constructor(private itemService: ItemService) {
    this.items = itemService.createItems();
  }

  removeItem(index: number) {
    this.items[index].deleted = true;
  }

  getComments(index: number) {
    return this.items[index].comments;
  }

  ngOnInit(): void {}
}
