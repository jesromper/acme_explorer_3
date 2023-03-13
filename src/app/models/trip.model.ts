import { Entity } from './entity.model';

export class Trip extends Entity {
  ticket: string;
  title: string;
  description: string;
  price: number;
  picture: string;
  startDate: Date;
  endDate: Date;
  cancelled: boolean;
  managerId: number;

  constructor(
    id: string,
    version: number,
    ticket: string,
    title: string,
    description: string,
    price: number,
    picture: string,
    startDate: Date,
    endDate: Date,
    cancelled: boolean,
    managerId: number
  ) {
    super(id, version);
    this.ticket = ticket;
    this.title = title;
    this.description = description;
    this.price = price;
    this.picture = picture;
    this.startDate = startDate;
    this.endDate = endDate;
    this.cancelled = cancelled;
    this.managerId = managerId;
  }
}
