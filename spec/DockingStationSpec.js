describe('DockingStation', function () {
  var station;
  var bike;

  beforeEach(function() {
    bike = {};
    station = new DockingStation(bike);
  });

  describe('release bike', function () {
    it('docking station releases a bike', function () {
      expect(station.releaseBike()).toEqual(bike);
    });
  });

  describe('working bike', function() {

  });
});
