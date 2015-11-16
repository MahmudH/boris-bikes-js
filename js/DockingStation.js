function DockingStation () {
  this.noBikeError = 'No bikes availiable';
  this.stationFullError ='Station is full';
}

DockingStation.prototype.releaseBike = function () {
  if (!this.bike){
    throw Error(this.noBikeError);
  } else {
  return this.bike;
  }
}

DockingStation.prototype.dockBike = function(bike) {
  if (this.bike) { throw Error(this.stationFullError) }

  this.bike = bike;
  return this.bike;
}



