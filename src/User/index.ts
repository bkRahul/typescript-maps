import fakerStatic from 'faker';
import { Mappable } from '../CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { name, address } = fakerStatic;
    this.name = name.firstName();
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
