export class Place {
  constructor(title, imageUrl, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat: 0.452234, lng: 13446.3}
    this.id = new Date().toString() + Math.random().toString();
  }
}
