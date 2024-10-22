let url = "https://corsproxy.io/?https://sluzby.bakalari.cz/api/v1/municipality"
let head = {"Accept": "application/json"}

async function GetSchoolList() {
    var response = await fetch(url, {
        method: "GET",
        headers: head,
    });

    var responseJson = JSON.stringify(await response.json())
    console.log(responseJson)
    DisplayData(responseJson)
}

GetSchoolList()

function DisplayData(data) {
    document.getElementById("test").innerHTML = data
}