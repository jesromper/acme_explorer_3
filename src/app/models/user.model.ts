import { Entity } from "./entity.model";

export class User  extends Entity{
  private _name!: string;
  private _email!: string;
  private _profileImage!: string;
  private _phoneNumber!: string;
  private _age!: number;

  constructor(){
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
public get profileImage(): string {
    return this._profileImage;
  }
  public set profileImage(value: string) {
    this._profileImage = value;
  }
public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
}
