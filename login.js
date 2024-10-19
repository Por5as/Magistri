let username;
let password;
let body;

function getInput() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    body = "client_id=ANDR&grant_type=password&username=" + username + "&password=" + password;
    getToken();
}

let url = "https://bakalari.spssoa.cz/api/login"
let head = {"Content-Type": "application/x-www-form-urlencoded"}

async function getToken() {
    var response = await fetch(url, {
        method: "POST",
        headers: head,
        body: body
    });

    var responseJson = await response.json();
    window.sessionStorage.setItem("access_token", responseJson.access_token)
    
    if (window.sessionStorage.getItem("access_token") !== "undefined") {
        window.location.href = './dash.html'
    }
    else {
        document.getElementById("errorMessage").style.display="block"
    }
}