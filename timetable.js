let url = "https://bakalari.spssoa.cz/api/3/timetable/permanent"
let head = {"Content-Type": "application/x-www-form-urlencoded", "Authorization": "Bearer " + window.sessionStorage.getItem("access_token") }

async function GetPermanentTimetable() {
    var response = await fetch(url, {
        method: "GET",
        headers: head,
    });

    var responseJson = await response.json();
    console.log(responseJson)
    DisplayData(responseJson)
}

GetPermanentTimetable()

function DisplayData(data) {
    document.getElementById("test").innerHTML = JSON.stringify(data["Hours"][0])
}