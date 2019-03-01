const app = document.getElementById('result');

function output(inp) {
    var element = document.createElement("pre");
    element.innerHTML = inp;
    app.insertAdjacentElement('afterbegin', element);
    // app.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function sendSmilo() {
    to = document.getElementById('toaddress').value;
    if (to.length !== 40) {
        alert("Not a valid address: " + to);
    } else {
        request.open('GET', 'http://localhost:3000/request/smilo/'+to, true);
        request.onload = function () {

            // Begin accessing JSON data here
            var data = JSON.parse(this.response);

            if (request.status >= 200 && request.status < 400) {
                console.log(data);
                var str = JSON.stringify(data, undefined, 4);
                output(syntaxHighlight(str));
            } else {
                console.log('error');
            }
        };

        request.send();

    }
}

var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/status/smilo', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        console.log(data);
        var str = JSON.stringify(data, undefined, 4);
        output(syntaxHighlight(str));
    } else {
        console.log('error');
    }
};

request.send();