describe("Scorecard", function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("has 0 score to start", function(){
    expect(scorecard.scoreTotal).toEqual(0);
  });

  it("has 10 frames by default", function() {
    expect(scorecard.frames.length).toEqual(10);
  });

  it("increases frame roll1 by given amount", function(){
    scorecard.addScore(0, 5);
    //var frame = scorecard.frames[0];
    expect(scorecard.frames[0].roll1).toEqual(5);
  });

  it("starts at frame 1", function(){
    expect(scorecard.getCurrentFrame()).toEqual(1);
  });

  it("moves to the next roll when score added", function(){
    expect(scorecard.roll).toEqual(0);
    scorecard.addScore(0, 4);
    expect(scorecard.roll).toEqual(1);
  });

  it("moves back to roll 0 when 2 scores added", function(){
    expect(scorecard.roll).toEqual(0);
    scorecard.addScore(0, 4);
    expect(scorecard.roll).toEqual(1);
    scorecard.addScore(0, 4);
    expect(scorecard.roll).toEqual(0);
  });

  it("adds / to roll2 if roll1 = 10 ", function(){
    expect(scorecard.roll).toEqual(0);
    scorecard.addScore(0, 10);
    expect(scorecard.frames[0].roll2).toEqual('/');
    expect(scorecard.roll).toEqual(0);
  });

  it("adds frame score on roll2", function(){
    scorecard.addScore(0, 4);
    scorecard.addScore(0, 4);
    expect(scorecard.frames[0].score).toEqual(8);
  });

  it("has score of 10 at first if strike is scored", function(){
    scorecard.addScore(0, 10);
    expect(scorecard.frames[0].roll1).toEqual(10);
    expect(scorecard.frames[0].score).toEqual(10);
  });
  it("adds bonus points from next round if strike scored", function(){
    scorecard.addScore(0, 10);
    expect(scorecard.frames[0].roll1).toEqual(10);
    expect(scorecard.frames[0].score).toEqual(10);
    scorecard.addScore(1, 4);
    expect(scorecard.frames[1].roll1).toEqual(4);
    scorecard.addScore(1, 4);
    expect(scorecard.frames[1].score).toEqual(8);
    expect(scorecard.frames[0].score).toEqual(18);
  });
});
