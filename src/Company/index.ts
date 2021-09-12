import fakerStatic from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = fakerStatic.company.companyName();
    this.catchPhrase = fakerStatic.company.catchPhrase();
    this.location = {
      lat: parseFloat(fakerStatic.address.latitude()),
      lng: parseFloat(fakerStatic.address.longitude()),
    };
  }
}
