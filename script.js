// Starting with fetch

document.getElementById("buttonActivity").addEventListener("click", function() {
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity-name").textContent = data.activity;
        //After clicking on button, text beneath will be showen
        document.getElementById("title").textContent = "🦾 HappyBot 🦿";
        document.body.classList.add("fun-color");
    })
});