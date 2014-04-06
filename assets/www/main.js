/*global NdefPlugin, Ndef */
var choice = null,
    listening = false,
    mimeType = "game/rockpaperscissors";


function onNfc(nfcEvent) {
	alert("onnfc!");
  var tag = nfcEvent.tag,records = tag.ndefMessage,result;
//opponentsChoice = nfc.bytesToString(records[0].payload),;
alert(nfcEvent.tag);
//navigator.notification.vibrate(100);   
}


var ready = function () {

nfc.addMimeTypeListener('text/pg',onNfc);
          
};

document.addEventListener('deviceready', ready, false);