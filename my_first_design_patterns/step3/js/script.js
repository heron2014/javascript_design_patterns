//chatModule is a self invoking function which returns some values - these values are public and accesible by the user, everything outside the return is private
var chatModule = (function () {
  
  var leadself = 'Me: ',
    leadcomputer = "PC: ",
    aSaid = ["This is a Cyber Chat"],
    msgYes =  "Yes, that's a great idea.",
    msgNo = "No, that must be a mistake.",
    aSassyStuff = [
      "Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."
    ];
 
  function echo (msg) {
    aSaid.push("<div>" + msg + "</div>");

    //show only six chats , not more
    var aSaidLength = aSaid.length,
      start = Math.max(aSaidLength - 6, 0), //that value or 0 , avoid any negative numbers
      out = '';

      for (var i = start; i < aSaidLength; i++) {
        out += aSaid[i];
      }

    $('.chat').html(out); 
    $('#talk span').text(msg);
  }

  return {
    talk : function (msg) {
      echo(leadself + msg);
    },
    replyYesNo: function () {
      var msg = Math.random() > 0.5 ? msgYes : msgNo;
      echo(leadcomputer + msg);
    },
    saySassyStuff : function () {
      var msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length)];
      echo(leadcomputer + msg);
    }
  };

})();

// console.log(chatModule.echo) - not accesible - private

//invoke all your public methods automaticcally
$(document).ready(function () {
  chatModule.talk('this is a Module pattern');
  chatModule.replyYesNo();
  chatModule.saySassyStuff();
});




