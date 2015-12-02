

var answer= Math.floor((Math.random() * 100) + 0); // Need to random this value from 0-100
var check= document.getElementById("userValue");
var game = {
	init: function() {
		var self = this;
		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){
			self.click(1);
		}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){
			self.click(2);
		}, false);

			var ele = document.getElementById("three");
		ele.addEventListener("click", function(){
			self.click(3);
		}, false);

			var ele = document.getElementById("four");
		ele.addEventListener("click", function(){
			self.click(4);
		}, false);

			var ele = document.getElementById("five");
		ele.addEventListener("click", function(){
			self.click(5);
		}, false);

			var ele = document.getElementById("six");
		ele.addEventListener("click", function(){
			self.click(6);
		}, false);

			var ele = document.getElementById("seven");
		ele.addEventListener("click", function(){
			self.click(7);
		}, false);

			var ele = document.getElementById("eight");
		ele.addEventListener("click", function(){
			self.click(8);
		}, false);

			var ele = document.getElementById("nine");
		ele.addEventListener("click", function(){
			self.click(9);
		}, false);

			var ele = document.getElementById("zero");
		ele.addEventListener("click", function(){
			self.click(0);
		}, false);

		// Guess!
		var ele = document.getElementById("guess");
		//ele.addEventListener("click", this.checkAnswer, false);// click function
		//ele.addEventListener("click", self.checkAnswer(self), false);
		ele.addEventListener("click", function(){
			self.checkAnswer(self);
		}, false);







			var ele = document.getElementById("reset");
		ele.addEventListener("click", function(){
			check.value='';
		}, false);

			var ele = document.getElementById("show");
		ele.addEventListener("click", function(){
			check.value=answer;
		}, false);
	},
	click: function(value) {
		console.log(value + " clicked.");
		var userValueEle = document.getElementById("userValue");
		userValueEle.value += value;
	},
	checkAnswer: function(value) {
		if (check.value == self.answer){
			alert("That is correct! Congratulations!");
			}
			else { 
				if (check.value < self.answer){
			alert("Wrong too Low! ");}
			else if (check.value > self.answer)
			{
			alert("Wrong too High! ");
			}
			}
		}
};

game.init();
