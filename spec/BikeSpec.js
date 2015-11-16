describe('Bike', function () {
 var bike;

 beforeEach(function () {
  bike = new Bike(); 
 });

  describe('#isWorking' , function() {
    it('tells the user if the bike is working', function() {
      expect(bike.isWorking()).toBe(true);
    });
  });
});

