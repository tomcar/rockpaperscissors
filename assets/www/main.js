/*global NdefPlugin, Ndef */
var choice = null,
    listening = false,
    mimeType = "game/rockpaperscissors";


function onNfc(nfcEvent) {
  if (!listening) {
      return;
  }

  var tag = nfcEvent.tag,records = tag.ndefMessage,result;
//opponentsChoice = nfc.bytesToString(records[0].payload),;
alert(nfcEvent.tag);
//navigator.notification.vibrate(100);   
}


var ready = function () {
  
  nfc.addTagDiscoveredListener(onNfc);
          
};

document.addEventListener('deviceready', ready, false);