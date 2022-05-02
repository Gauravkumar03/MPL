// write js code here corresponding to favourites.html
let favourites = JSON.parse(localStorage.getItem("favourites"))
let tbody = document.querySelector("tbody")
favourites.forEach(function(element) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.textContent = element.matchNum
    let td2 = document.createElement("td")
    td2.textContent = element.teamA
    let td3 = document.createElement("td")
    td3.textContent = element.teamB
    let td4 = document.createElement("td")
    td4.textContent = element.date
    let td5 = document.createElement("td")
    td5.textContent = element.venue
    td6 = document.createElement("td")
    td6.textContent = "Delete"
    td6.style.color = "red"
    td6.style.cursor = "pointer"
    tr.append(td1, td2, td3, td4, td5, td6)
    tbody.append(tr)
})