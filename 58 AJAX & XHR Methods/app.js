document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    /// Create an XHR 
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    console.log('READYSTATE', xhr.readyState);

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send(); 
}