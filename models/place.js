class Place {
  constructor(title, imageUrl, address, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.location = location; //{lat: 0.452234, lng: 13446.3}
    this.id = new Date().toString() + Math.random().toString();
  }
}
