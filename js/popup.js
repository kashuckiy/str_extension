var str = document.getElementById("str");
var des_str = document.getElementById("des_str");
var all = document.getElementById("all");
var last_text = document.getElementById("last_text");

function track (selector) {
  var elements =  selector.querySelector("#tinymce").childNodes;
  var lastText = [];
  for(let i  = 0; i<elements.length; i++){
    lastText.push(elements[i].outerHTML);
  }
  console.log(lastText.join(''));
  localStorage.setItem('test', lastText.join(''));
}

str.addEventListener("click", async(e) => {
  chrome.tabs.update({}, async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {

        var iframe = document.querySelector('iframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument.querySelector("#tinymce") !== null) {
          iframeDocument.querySelector("#tinymce").innerHTML = text_str

          // start tracked last text
          iframeDocument.oninput = function() {
            var elements =  iframeDocument.querySelector("#tinymce").childNodes;
            var lastText = [];
            for(let i  = 0; i<elements.length; i++){
              lastText.push(elements[i].outerHTML);
            }
            console.log(lastText.join(''));
            localStorage.setItem('test', lastText.join(''));
          }
          // finish

          
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

                    // start tracked last text
                    iframeDocument.oninput = function() {
                      var elements =  iframeDocument.querySelector("#tinymce").childNodes;
                      var lastText = [];
                      for(let i  = 0; i<elements.length; i++){
                        lastText.push(elements[i].outerHTML);
                      }
                      console.log(lastText.join(''));
                      localStorage.setItem('test', lastText.join(''));
                    }
                    // finish


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

                    // start tracked last text
                    iframeDocument.oninput = function() {
                      var elements =  iframeDocument.querySelector("#tinymce").childNodes;
                      var lastText = [];
                      for(let i  = 0; i<elements.length; i++){
                        lastText.push(elements[i].outerHTML);
                      }
                      console.log(lastText.join(''));
                      localStorage.setItem('test', lastText.join(''));
                    }
                    // finish

                    
        } else {
          var lastFocusedElement = document.activeElement;
          var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
          lastIframeDocument.querySelector("#tinymce").innerHTML = text_all;
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
