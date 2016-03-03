var leadself = 'Me: ',
	leadcomputer = "PC: ",
	aSaid= ["This is a Cyber Chat"],
	msgYes = "Yes, that's a great idea.",
	msgNo = "No, that must be a mistake.",
	aSassyStuff = [
		"Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."
	];


//these are 3 public methods
function talk (msg) {

}

//computer replies
function replyYesNo () {
  
}

function saySassyStuff (msg) {
  
}

//this one we want to be private method, not available to the user (but for now is public)
function echo (msg) {
  aSaid.push("<div>" + msg + "</div>");

  $('#talk span').text(msg);
}






