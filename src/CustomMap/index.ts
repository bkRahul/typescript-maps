export class CustomMap {
  googleMap: google.maps.Map;

  constructor(elemId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elemId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
