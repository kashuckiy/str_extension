var str = document.getElementById("str");
var des_str = document.getElementById("des_str");
var all = document.getElementById("all");

str.addEventListener("click", async(e) => {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = text_str
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_str;
        }

      }
    });
  });
});

des_str.addEventListener("click", function () {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = text_des_str
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_des_str;
        }

      }
    });
  });
});

all.addEventListener("click", function () {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = text_all;
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_all;
        }

      }
    });
  });
});
