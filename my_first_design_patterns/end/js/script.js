(function(win, doc,$){
	var chatModule = (function (){
			var _leadself= 'Me: ',
					_leadcomputer= "PC: ",
					_aSaid= ["This is a Cyber Chat"],
					_msgYes= "Yes, that's a great idea.",
					_msgNo= "No, that must be a mistake.",
					_aSassyStuff= ["Like mold on books, grow myths on history.",
										"She moved like a poem and smiled like a sphinx.",
										"As long as we don’t die, this is gonna be one hell of a story.",
										"She laughed, and the desert sang.",
										"You’ve got about as much charm as a dead slug."];
			function _echo(msg){

					_aSaid.push("<div>" + msg + "</div>");

					var aSaidLength = _aSaid.length, 
							start = Math.max(aSaidLength - 6,0),
							out = "";

					for(var i=start; i<aSaidLength; i++){
						out += _aSaid[i];
					}	


					$('.advert').html(out);
					$('#talk span').text(msg);
				}
		function talk (msg){
				_echo(_leadself + msg);
		}

		function replayYesNo(){
				var msg = Math.random()>.5 ? _msgYes : _msgNo;
				_echo(_leadcomputer + msg);
		}
		function	saySassyStuff(){
				var msg = _aSassyStuff[ Math.floor(Math.random()*_aSassyStuff.length) ];
				_echo(_leadcomputer + msg);
		}

		return {
				talk:talk,
				replayYesNo:replayYesNo,
				saySassyStuff:saySassyStuff

		};
	})(); 

	$(doc).ready(function(){
		chatModule.talk("this is great");
		chatModule.replayYesNo();
		chatModule.saySassyStuff();
	});

	if(!win.chatModule) win.chatModule = chatModule;
})(window, document,jQuery);

console.log(window.chatModule);

/* Module Pattern
var chatModule = (function (){
		var leadself= 'Me: ',
				leadcomputer= "PC: ",
				aSaid= ["This is a Cyber Chat"],
				msgYes= "Yes, that's a great idea.",
				msgNo= "No, that must be a mistake.",
				aSassyStuff= ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."];
		function echo(msg){

				aSaid.push("<div>" + msg + "</div>");

				var aSaidLength = aSaid.length, 
						start = Math.max(aSaidLength - 6,0),
						out = "";

				for(var i=start; i<aSaidLength; i++){
					out += aSaid[i];
				}	


				$('.advert').html(out);
				$('#talk span').text(msg);
			}


	return {
			talk: function (msg){
			echo(leadself + msg);
		},
		replayYesNo: function (){
			var msg = Math.random()>.5 ? msgYes : msgNo;
			echo(leadcomputer + msg);
		},
		saySassyStuff: function (){
			var msg = aSassyStuff[ Math.floor(Math.random()*aSassyStuff.length) ];
			echo(leadcomputer + msg);
		}

	};
})(); 


*/

/* Namespace/Object Litteral Pattern
var com = com || {};
com.o2geek = com.o2geek || {};
com.o2geek.packt = com.o2geek.packt || {};
com.o2geek.packt.JSDP =com.o2geek.packt.JSDP || {};

com.o2geek.packt.JSDP.sudoChat = {
		leadself: 'Me: ',
		leadcomputer: "PC: ",
		aSaid: ["This is a Cyber Chat"],
		msgYes: "Yes, that's a great idea.",
		msgNo: "No, that must be a mistake.",
		aSassyStuff: ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."],
		
		echo: function (msg){

				this.aSaid.push("<div>" + msg + "</div>");

				var aSaidLength = this.aSaid.length, 
						start = Math.max(aSaidLength - 6,0),
						out = "";

				for(var i=start; i<aSaidLength; i++){
					out += this.aSaid[i];
				}	

				$('.advert').html(out);
				$('#talk span').text(msg);
			}

};*/





