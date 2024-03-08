function applyChanges() {
    var ckeyInput = document.getElementById('text').value;
    var body = document.body;

    if (ckeyInput.toLowerCase() === 'waryt') {
        changeColor(body, 'red-background');
    } else {
        changeColor(body, 'green-background');
    }
}


function changeColor(element, className) {
    element.classList.remove('red-background', 'green-background');
    
    element.classList.add(className);
}
