import fakerStatic from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = fakerStatic.name.firstName();
    this.location = {
      lat: parseFloat(fakerStatic.address.latitude()),
      lng: parseFloat(fakerStatic.address.longitude()),
    };
  }
}
