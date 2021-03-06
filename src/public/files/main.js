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
    if (to.length !== 42) {
        alert("Not a valid address: " + to);
    } else {
        document.getElementById("result").style.display = "none";
        document.getElementById("loading-container").style.display = "block";
        document.getElementById("send-smilo-button").disabled = true;
        document.getElementById("toaddress").disabled = true;

        request.open('GET', URI + '/request/smilo/' + to, true);
        request.onload = function () {

            // Begin accessing JSON data here
            var data = JSON.parse(this.response);

            if (request.status >= 200 && request.status < 400) {
                var str = JSON.stringify(data, undefined, 4);
                document.getElementById("result").style.display = "block";
                document.getElementById("loading-container").style.display = "none";
                document.getElementById("send-smilo-button").disabled = false;
                document.getElementById("toaddress").disabled = false;
                output(syntaxHighlight(str));
            } else {
                console.log('error');
            }
        };

        request.send();

    }
}

var request = new XMLHttpRequest();

request.open('GET', URI+'/status/smilo' , true);
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