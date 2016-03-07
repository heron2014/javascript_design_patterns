//my private members are with underscore

var chatModule = (function () {
  
  var _leadself = 'Me: ',
    _leadcomputer = "PC: ",
    _aSaid = ["This is a Cyber Chat"],
    _msgYes =  "Yes, that's a great idea.",
    _msgNo = "No, that must be a mistake.",
    _aSassyStuff = [
      "Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."
    ];
 
  function _echo (msg) {
    _aSaid.push("<div>" + msg + "</div>");

    //show only six chats , not more
    var aSaidLength = _aSaid.length,
      start = Math.max(aSaidLength - 6, 0), //that value or 0 , avoid any negative numbers
      out = '';

      for (var i = start; i < aSaidLength; i++) {
        out += _aSaid[i];
      }

    $('.chat').html(out); 
    $('#talk span').text(msg);
  }

  function talk (msg) {
    _echo(_leadself + msg);
  }

  function replyYesNo () {
    var msg = Math.random() > 0.5 ? _msgYes : _msgNo;
    _echo(_leadcomputer + msg);
  }

  function saySassyStuff () {
    var msg = _aSassyStuff[ Math.floor(Math.random() * _aSassyStuff.length)];
    _echo(_leadcomputer + msg);
  }

  return {
    // console.log(_leadself); -- no access to private members, issue
    talk: talk,
    replyYesNo: replyYesNo,
    saySassyStuff: saySassyStuff    
  };

})();


//invoke all your public methods automaticcally
$(document).ready(function () {
  chatModule.talk('this is a Module pattern');
  chatModule.replyYesNo();
  chatModule.saySassyStuff();
});




