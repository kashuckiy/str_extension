var str = document.querySelector("#str");
var des_str = document.querySelector("#des_str");
var all = document.querySelector("#all");
var last_text = document.querySelector("#last_text");

function track(selector) {
  var elements = selector.querySelector("#tinymce").childNodes;
  var lastText = [];
  for (let i = 0; i < elements.length; i++) {
    lastText.push(elements[i].outerHTML);
  }
  console.log(lastText.join(''));
  localStorage.setItem('lastText', lastText.join(''));
}

str.addEventListener("click", () => {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = text_str
          iframeDocument.oninput = () => track(iframeDocument);
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_str;
          lastIframeDocument.oninput = () => track(lastIframeDocument);
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
          iframeDocument.oninput = () => track(iframeDocument);
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_des_str;
          lastIframeDocument.oninput = () => track(lastIframeDocument);
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
          iframeDocument.oninput = () => track(iframeDocument);
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_all;
          lastIframeDocument.oninput = () => track(lastIframeDocument);
        }

      }
    });
  });
});

last_text.addEventListener("click", function () {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = localStorage.getItem('lastText')
          iframeDocument.oninput = () => track(iframeDocument);
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = localStorage.getItem('lastText')
          lastIframeDocument.oninput = () => track(lastIframeDocument);
        }

      }
    });
  });
});