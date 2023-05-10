var str = document.getElementById("str");
var des_str = document.getElementById("des_str");
var all = document.getElementById("all");
var last_text = document.getElementById("last_text");

function track(selector) {
  var elements = selector.querySelector("#tinymce").childNodes;
  var lastText = [];
  for (let i = 0; i < elements.length; i++) {
    lastText.push(elements[i].outerHTML);
  }
  console.log(lastText.join(''));
  localStorage.setItem('test', lastText.join(''));
}

str.addEventListener("click", async (e) => {
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
          iframeDocument.querySelector("#tinymce").innerHTML = localStorage.getItem('test')
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = localStorage.getItem('test')
        }

      }
    });
  });
});


// chrome.tabs.update({}, async (tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: () => {

//       var iframe = document.querySelector('iframe');
//       var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

//         iframeDocument.oninput = function() {
//           var elements =  iframeDocument.querySelector("#tinymce").childNodes;
//           var lastText = [];
//           for(let i  = 0; i<elements.length; i++){
//             lastText.push(elements[i].outerHTML);
//           }
//           console.log(lastText.join(''));

//           // var lastText = elements.forEach(element => element.outerHTML);

//           localStorage.setItem('test', lastText.join(''));

//           // chrome.storage.local.set({ 'cusmon':  helo}).then(() => {
//           //   console.log("Value is set to " + helo);
//           // });

//           // chrome.storage.local.get(['cusmon']).then((result) => {
//           //   console.log("Value currently is " + result.key);
//           // });

//         };


//     }
//   });
// });
