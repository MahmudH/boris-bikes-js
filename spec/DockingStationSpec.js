describe('DockingStation', function () {
  var station;
  var bike;

  beforeEach(function() {
    bike = {};
    station = new DockingStation(bike);
  });

  describe('release bike', function () {
    it('docking station releases a bike', function () {
      station.dockBike(bike);
      expect(station.releaseBike()).toEqual(bike);
    });

    it('does not release a bike if there a no bikes availiable', function() {
      //releaseBike = function() { station.releaseBike() };
      expect( function () { station.releaseBike() } ).toThrow(new Error (station.noBikeError));
    });
  });

  describe('working bike', function() {

  });

  describe('#dock', function(){
    it('is docks a bike', function() {
      station.dockBike(bike);
      expect(station.bike).toEqual(bike);
    });

    it('shows the user the bike that has been docked', function() {
      expect(station.dockBike(bike)).toEqual(bike);
    });

    it('shows an error when the capacity of bikes is reached', function() {
      station.dockBike(bike);
      expect(function () { station.dockBike(bike); }).toThrow(new Error (station.stationFullError));
    });
  });
});
