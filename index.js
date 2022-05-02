// write js code here corresponding to index.html
// You should add submit event on the form
let schedule = JSON.parse(localStorage.getItem("schedule")) || []

document.getElementById("masaiForm").addEventListener("submit", store)

function store() {
    event.preventDefault()
    let obj = {}
    obj.matchNum = document.getElementById("matchNum").value 
    obj.teamA = document.getElementById("teamA").value 
    obj.teamB = document.getElementById("teamB").value 
    obj.date = document.getElementById("date").value
    obj.venue = document.getElementById("venue").value
    schedule.push(obj)
    localStorage.setItem("schedule", JSON.stringify(schedule))
}
