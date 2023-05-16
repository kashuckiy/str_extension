// var iframe = document.querySelector('iframe');
// var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

// iframeDocument.addEventListener('input', () => {
//     var elements = iframeDocument.querySelector("#tinymce").childNodes;
//     var lastText = [];
//     for (let i = 0; i < elements.length; i++) {
//         lastText.push(elements[i].outerHTML);
//     }
//     console.log(lastText.join(''));
//     localStorage.setItem('lastText', lastText.join(''));
// });

// var lastFocusedElement = document.activeElement;
// var lastIframeDocument = lastFocusedElement.contentDocument || iframe.contentWindow.document;

// lastIframeDocument.addEventListener('input', () => {
//     var elements = lastIframeDocument.querySelector("#tinymce").childNodes;
//     var lastText = [];
//     for (let i = 0; i < elements.length; i++) {
//         lastText.push(elements[i].outerHTML);
//     }
//     console.log(lastText.join(''));
//     localStorage.setItem('lastText', lastText.join(''));
// });


var iframe = document.querySelector('iframe');
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

document.addEventListener('input', (event) => {
    if (event.target === iframeDocument || event.target === lastIframeDocument) {
        var elements = event.target.querySelector("#tinymce").childNodes;
        var lastText = [];
        for (let i = 0; i < elements.length; i++) {
            lastText.push(elements[i].outerHTML);
        }
        console.log(lastText.join(''));
        localStorage.setItem('lastText', lastText.join(''));
    }
});
