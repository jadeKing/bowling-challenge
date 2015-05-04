var Scorecard = function(){
  this.scoreTotal = 0;
  this.frameCount = 0;
  this.roll = 0;
  this.scores = [];
};
// function nextRoll() {
//   if (this.roll === 1) this.frame += 1;
//   this.roll = this.roll === 0 ? 1 : 0;
// }
Scorecard.prototype.addScore = function(score) {

  // function strike() {
  //   this.scores.push('/');
  //   nextRoll();
  // }
  // function frame(roll1, roll2, score){
  //   return [roll1, roll2, score];

  // function frame (){
  //   this.roll1 = 0;
  //   this.roll2 = 0;
  //   this.score = 0;
  // }
  var round;
  if (this.roll === 0) {
    round = new Frame();
    round.roll1 = score;
  }

  if (score === 10) {
    round.roll2 = '/';
    this.nextRoll();
  }
  else {
    round.roll2 = score;
  }


  var new_frame = [];
  this.scores.push(score);
  this.scoreTotal += score;


  this.nextRoll();

};
var Frame = function(){
  this.roll1 = 0;
  this.roll2 = 0;
  this.score = 0;
};
Scorecard.prototype.nextRoll = function() {
  if (this.roll === 1) this.frame += 1;
  this.roll = this.roll === 0 ? 1 : 0;
};
