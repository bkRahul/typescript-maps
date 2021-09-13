import fakerStatic from 'faker';
import { Mappable } from '../CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { company, address } = fakerStatic;

    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    const { address } = fakerStatic;

    return `${address.streetName()} ${address.cityName()} ${address.state()} ${address.zipCode()} ${address.country()}`;
  }
}
