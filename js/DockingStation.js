function DockingStation () {
  this.bike;
}

DockingStation.prototype.releaseBike = function () {
  return this.bike;
}

DockingStation.prototype.dockBike = function(bike) {
  this.bike = bike;
}



