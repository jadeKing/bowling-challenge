var Frame = function(){
  this.roll1 = 0;
  this.roll2 = 0;
  this.score = 0;
};

Frame.prototype.addScore = function(roll, score) {


  if (roll === 0) {
    this.roll1 = score;

  }
  else {
    this.roll2 = score;
    this.calculateScore();
  }

  if(score === 10){
    this.roll2 = '/';
    this.calculateScore();
  }
};

Frame.prototype.calculateScore = function() {
  if(this.roll2 === '/'){
    this.score = this.roll1;
  }
  else {
    this.score = this.roll1 + this.roll2;
  }
};
