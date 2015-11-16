function DockingStation (Bike) {
  this.bike = Bike;
}

DockingStation.prototype.releaseBike = function () {
  return this.bike;
}



