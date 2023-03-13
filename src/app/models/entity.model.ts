export class Entity {
  id: string;
  version: number;

  constructor(id: string, version: number) {
    this.id = id;
    this.version = version;
  }
}
