let url = "https://corsproxy.io/?https://sluzby.bakalari.cz/api/v1/municipality"
let head = {"Accept": "application/json"}

async function GetSchoolList() {
    var response = await fetch(url, {
        method: "GET",
        headers: head,
    });

    //var responseJson = JSON.stringify(await response.json())
    var responseJson = await response.json()

    console.log(responseJson)
    DisplayData(responseJson)
}

GetSchoolList()

function DisplayData(data) {
    for (let i = 1; i < data.length; i++ ){
        document.write(data[i]["name"] + "<br/>")
    }
}
