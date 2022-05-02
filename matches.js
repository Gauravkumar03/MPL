// write js code here corresponding to matches.html

let schedule = JSON.parse(localStorage.getItem("schedule"))
let favourites = JSON.parse(localStorage.getItem("favourites")) || []

let tbody = document.querySelector("tbody")


schedule.forEach(element => {
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
    let td6 = document.createElement("td")
    td6.textContent = "Add as Favourites"
    td6.style.color = "green"
    td6.style.cursor = "pointer"
    td6.addEventListener("click", addtofav)
    function addtofav() {
        event.preventDefault()
        let obj = {}
        obj.matchNum = element.matchNum
        obj.teamA = element.teamA
        obj.teamB = element.teamB
        obj.date = element.date
        obj.venue = element.venue 
        favourites.push(obj)
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }

    tr.append(td1, td2, td3, td4, td5, td6)
    tbody.append(tr)
});