const str = document.querySelector("#str");
const des_str = document.querySelector("#des_str");
const all = document.querySelector("#all");
const last_text = document.querySelector("#last_text");

function track(selector) {
    let elements = selector.querySelector("#tinymce").childNodes;
    let lastText = [];
    for (let i = 0; i < elements.length; i++) {
        lastText.push(elements[i].outerHTML);
    }
    console.log(lastText.join(''));
    localStorage.setItem('lastText', lastText.join(''));
}

function trackTextarea(selector) {
    let getTextAreaText = selector.value
    console.log(getTextAreaText);
    localStorage.setItem('lastText', getTextAreaText);
}

function getActiveTab() {
    let tabs = document.querySelector('[role="tablist"]');
    let activeTab;

    for (let i = 0; i < tabs.childNodes.length; i++) {
        if (tabs.childNodes[i].classList.length === 2) {
            activeTab = tabs.childNodes[i].dataset.mode;
            console.log(activeTab);
        }
    }
    return activeTab
}

str.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {

                let activeTab = getActiveTab();

                if (activeTab === "wysiwyg") {
                    let iframe = document.querySelector('iframe');
                    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

                    if (iframeDocument.querySelector("#tinymce") !== null) {
                        iframeDocument.querySelector("#tinymce").innerHTML = text_str
                        iframeDocument.oninput = () => track(iframeDocument);
                    } else {
                        let lastFocusedElement = document.activeElement;
                        let lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
                        lastIframeDocument.querySelector("#tinymce").innerHTML = text_str;
                        lastIframeDocument.oninput = () => track(lastIframeDocument);
                    }

                } else {
                    let getTextarea = document.querySelector("#description");
                    if (getTextarea != null) {
                        getTextarea.value = textarea_str;
                        getTextarea.oninput = () => trackTextarea(getTextarea);
                        console.log(textarea_str);
                    } else {
                        let getCommentTextarea = document.querySelector("#comment");
                        getCommentTextarea.value = textarea_str;
                        getCommentTextarea.oninput = () => trackTextarea(getCommentTextarea);
                        console.log(textarea_str)
                    }

                }

            }
        });
    });
});

des_str.addEventListener("click", function () {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
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
            target: {tabId: tab.id},
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
            target: {tabId: tab.id},
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