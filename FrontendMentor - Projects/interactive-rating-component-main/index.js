let ratings = document.querySelectorAll(".ratings")
let numberOfRatings = document.querySelectorAll(".ratings").length
let selected = undefined

for (var i = 0; i < numberOfRatings; i++) {
    ratings[i].addEventListener("click", function () {
        if (selected != undefined) {
            if (selected.innerText !== this.innerText) {
                selected.classList.remove("selected")
                this.classList.add("selected")
                selected = this
            }
        } else {
            this.classList.add("selected")
            selected = this
        }
    })
}
function hide() {
    if (selected != undefined) {
        let card = document.querySelector("#card1")
        card.classList.add("hide")
        card = document.querySelector(".card2")
        card.classList.remove("hide")
        document.querySelector(".selectedRate").innerText = `You selected ${selected.innerText} out of 5`
    }
}