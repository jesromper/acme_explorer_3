import { Entity } from './entity.model';

export class Item extends Entity {
  private _sku!: string;
  private _name!: string;
  private _description!: string;
  private _price!: number;
  private _picture!: string;
  private _comments!: string[];
  private _deleted!: boolean;

  constructor() {
    super();
  }

  public get sku(): string {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get picture(): string {
    return this._picture;
  }
  public set picture(value: string) {
    this._picture = value;
  }
  public get comments(): string[] {
    return this._comments;
  }
  public set comments(value: string[]) {
    this._comments = value;
  }
  public get deleted(): boolean {
    return this._deleted;
  }
  public set deleted(value: boolean) {
    this._deleted = value;
  }
}
