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


function CityClick(element){

  let name = element.innerText
  if (name.includes(".")) {
    name = encodeURIComponent(name.split(".", 1))
  }
  else {
    name = encodeURIComponent(name)
  }
  
  window.sessionStorage.setItem("city", name)
}

function DisplayData(data) {
    let list = document.getElementById("list")
    for (let i = 1; i < data.length; i++ ){
        let city = document.createElement("li")
        let link = document.createElement("a")
        link.href = "./getschoolurl.html"
        let name = data[i]["name"]
        city.id = "city"
        link.innerHTML = name
        list.appendChild(city)
        city.appendChild(link)
        link.setAttribute("onclick", "CityClick(this)");
    }

}
function Search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {

      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

