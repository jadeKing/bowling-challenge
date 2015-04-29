describe("Scorecard", function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard();
  });
  it("has 0 score to start", function(){
    expect(scorecard.score).toEqual(0);
  });
  it("increases score by given amount", function(){
    scorecard.addScore(5);
    expect(scorecard.score).toEqual(5);
  });


});
