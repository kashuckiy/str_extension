var str = document.getElementById("str");
var des_str = document.getElementById("des_str");
var all = document.getElementById("all");

    
str.addEventListener("click", async (e) => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {
            var iframe = document.querySelector('iframe');
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.querySelector("#tinymce").innerHTML = 
            '<p><strong>Steps to reproduce:</strong></p>'+
            '<ol><li><br data-mce-bogus="1"></li></ol>'+
            '<p><strong>Actual result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Expected result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'
          }
        });
      });
});

des_str.addEventListener("click", function() {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {
            var iframe = document.querySelector('iframe');
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.querySelector("#tinymce").innerHTML = 
            '<p><strong>Description</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Steps to reproduce:</strong></p>'+
            '<ol><li><br data-mce-bogus="1"></li></ol>'+
            '<p><strong>Actual result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Expected result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'
          }
        });
      });
});

all.addEventListener("click", function() {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {
            var iframe = document.querySelector('iframe');
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.querySelector("#tinymce").innerHTML = 
            '<p><strong>Description</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Preconditions</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Steps to reproduce:</strong></p>'+
            '<ol><li><br data-mce-bogus="1"></li></ol>'+
            '<p><strong>Actual result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Expected result</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'+
            '<p><strong>Additionals</strong></p>'+
            '<p><br data-mce-bogus="1"></p>'
          }
        });
      });
});
