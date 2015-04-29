describe("Scorecard", function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard();
  });
  it("has a 0 score to start", function(){
    expect(scorecard.score).toEqual(0);
  });
  // it("increases score by given amount", function(){
  //   expect(scorecard.increaseScore(5)).toEqal
  // });


});
