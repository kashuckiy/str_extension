const str = document.querySelector("#str");
const des_str = document.querySelector("#des_str");
const all = document.querySelector("#all");
const last_text = document.querySelector("#last_text");

function track(selector, activeTab) {
    if (activeTab === "wysiwyg") {
        let elements = selector.querySelector("#tinymce").childNodes;
        let lastText = [];
        for (let i = 0; i < elements.length; i++) {
            lastText.push(elements[i].outerHTML);
        }
        console.log(lastText.join(''));
        localStorage.setItem('lastText', lastText.join(''));
    } else if (activeTab === "source") {
        let getTextAreaText = selector.value
        console.log(getTextAreaText);
        localStorage.setItem('lastText', getTextAreaText);
    }
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

function switchTabToSourceAndTrack() {
    let getTextarea = document.querySelector("#description");
    if (getTextarea != null) {
        getTextarea.oninput = () => track(getTextarea, getActiveTab());
        console.log(getTextarea);
    } else {
        let getCommentTextarea = document.querySelector("#comment");
        getCommentTextarea.oninput = () => track(getCommentTextarea, getActiveTab());
        console.log(getCommentTextarea)
    }
}

function switchTabToWysiwygAndTrack() {
    const interval = setInterval(() => {
        let iframe = document.activeElement;
        if (iframe) {
            // If element founded, execute script and clear interval
            let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            clearInterval(interval);
            iframeDocument.oninput = () => track(iframeDocument, getActiveTab());
        }
    }, 1000);
}

function main (wysiwygText, sourceText) {
    /* Checking which tab the user is on || Wysiwyg tab*/
    if (getActiveTab() === "wysiwyg") {
        let iframe = document.querySelector('iframe');
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        /* Execute script from RapidBoard*/
        if (iframeDocument.querySelector("#tinymce") !== null) {
            iframeDocument.querySelector("#tinymce").innerHTML = wysiwygText;
            iframeDocument.oninput = () => track(iframeDocument, getActiveTab());
            /* Tracking function when the user goes to the "Source" tab */
            document.querySelector('[data-mode="source"]').addEventListener('click', switchTabToSourceAndTrack)
        }
        /* Execute script from Dashboard which include lastFocusedElement*/
        else {
            let lastFocusedElement = document.activeElement;
            let lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;
            lastIframeDocument.querySelector("#tinymce").innerHTML = wysiwygText;
            lastIframeDocument.oninput = () => track(lastIframeDocument, getActiveTab());
            /* Tracking function when the user goes to the "Source" tab */
            document.querySelector('[data-mode="source"]').addEventListener('click', switchTabToSourceAndTrack)
        }
    }

    /* Checking which tab the user is on || Source tab*/
    else {
        let getTextarea = document.querySelector("#description");
        /* Checking if the user is in a dialog window */
        if (getTextarea != null) {
            getTextarea.value = sourceText;
            getTextarea.oninput = () => track(getTextarea, getActiveTab());
            console.log(sourceText);
            /* Tracking function when the user goes to the "Wysiwyg" tab */
            document.querySelector('[data-mode="wysiwyg"]').addEventListener('click', switchTabToWysiwygAndTrack)
        }
        /* Checking if the user is in a comment window */
        else {
            let getCommentTextarea = document.querySelector("#comment");
            getCommentTextarea.value = sourceText;
            getCommentTextarea.oninput = () => track(getCommentTextarea, getActiveTab());
            console.log(sourceText)
            /* Tracking function when the user goes to the "Wysiwyg" tab */
            document.querySelector('[data-mode="wysiwyg"]').addEventListener('click', switchTabToWysiwygAndTrack)
        }

    }

}

str.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {main(text_str, textarea_str)}
        });
    });
});

des_str.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {main(text_des_str, textarea_des_str)}
        });
    });
});

all.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {main(text_all, textarea_all)}
        });
    });
});

last_text.addEventListener("click", function () {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {
                let getStorageWysiwyg = localStorage.getItem('lastText')
                let getStorageSource = localStorage.getItem('lastText')
                main(getStorageWysiwyg, getStorageSource)
            }
        });
    });
});