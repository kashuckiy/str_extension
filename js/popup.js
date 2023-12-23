const str = document.querySelector("#str");
const des_str = document.querySelector("#des_str");
const all = document.querySelector("#all");
const last_text = document.querySelector("#last_text");

function track(selector) {
    let elements = selector.childNodes;
    let lastText = [];
    for (let i = 0; i < elements.length; i++) {
        lastText.push(elements[i].outerHTML);
    }
    console.log(lastText.join(''));
    localStorage.setItem('lastText', lastText.join(''));
}

function main(wysiwygText) {
    let textArea = document.querySelector('#ak-editor-textarea');

    if (textArea !== null) {
        textArea.innerHTML = wysiwygText;
        textArea.oninput = () => track(textArea);
    } else {
        let lastFocusedElement = document.activeElement;
        lastFocusedElement.innerHTML = wysiwygText;
        lastFocusedElement.oninput = () => track(lastFocusedElement);
    }
}

str.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => { main(text_str) }
        });
    });
});

des_str.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => { main(text_des_str) }
        });
    });
});

all.addEventListener("click", () => {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => { main(text_all) }
        });
    });
});

last_text.addEventListener("click", function () {
    chrome.tabs.update({}, async (tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                let getStorageWysiwyg = localStorage.getItem('lastText')
                main(getStorageWysiwyg)
            }
        });
    });
});