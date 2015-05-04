describe("Scorecard Interface", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '';
    loadFixtures('index.html');
  });

  it("it displays default(empty) scorecard", function(){
    expect('#main').toContainElement('#scorecard');
  });

});
