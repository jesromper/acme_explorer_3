import { Entity } from './entity.model';

export class Actor extends Entity {
  private _name!: string;
  private _surname!: string;
  private _phone!: string;
  private _role!: string;
  private _email!: string;
  private _password!: string;
  private _address!: string;
  private _validated!: boolean;

  constructor() {
    super();
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public get surname(): string {
    return this._surname;
  }
  public set surname(value: string) {
    this._surname = value;
  }
public get role(): string {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }
public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
public get validated(): boolean {
    return this._validated;
  }
  public set validated(value: boolean) {
    this._validated = value;
  }
}
