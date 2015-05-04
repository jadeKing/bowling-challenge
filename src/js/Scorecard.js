var Scorecard = function() {
  this.scoreTotal = 0;
  this.frames = this.default();
  this.currentFrame = 0;
  this.roll = 0;
};

Scorecard.prototype.default = function(){
  var list = [];
  for(var i=0; i < 10; i++){
    list[i] = new Frame();
  }
  return list;
};
Scorecard.prototype.addScore = function(frame, score) {
  this.frames[frame].addScore(this.roll, score);
  if(this.roll2 && frame > 0){
    this.checkBonuses(frame);

  }
  this.nextRoll();
  if(score === 10){ this.nextRoll();}

};
Scorecard.prototype.getCurrentFrame = function() {
  return this.currentFrame + 1;
};
Scorecard.prototype.nextRoll = function() {
  this.roll = this.roll === 0 ? 1 : 0;
};
Scorecard.prototype.checkBonuses = function(frame) {
  var lastFrame = frame - 1;
  if(this.frames[lastFrame].roll1 === 10){
    this.frames[lastFrame].score += this.frames[frame].score;
  }
};
