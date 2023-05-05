function innerData (text) {
    chrome.tabs.update({}, async (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
  
          var iframe = document.querySelector('iframe');
          var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
          if (iframeDocument.querySelector("#tinymce") !== null) {
            iframeDocument.querySelector("#tinymce").innerHTML = text;
          } else {
            var lastFocusedElement = document.activeElement;
            var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
            lastIframeDocument.querySelector("#tinymce").innerHTML = text;
          }
  
        }
      });
    });
  }


  module.exports = innerData