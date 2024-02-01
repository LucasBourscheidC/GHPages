let currentArrow = undefined
let currentAnswer = undefined
let answers = document.querySelectorAll(".answer")
let arrows = document.querySelectorAll(".arrows")
for (let i = 0; i < 5; i++) {
    arrows[i].addEventListener("click", function () {
        //document.querySelectorALL(".answer")[i].classList.remove("hide")
        if (currentArrow === undefined) {
            currentArrow = this;
            this.classList.add("transform-arrow")
            selectAnswer(this)
        }
        else if (currentArrow === this) {
            this.classList.remove("transform-arrow")
            currentArrow = undefined
            selectAnswer(this)
            currentAnswer.classList.add("hide")
        }
        else {
            currentArrow.classList.remove("transform-arrow");
            currentArrow = this;
            this.classList.add("transform-arrow")
            currentAnswer.classList.add("hide")
            selectAnswer(this)

        }
    })
}

function selectAnswer(key) {
    switch (key.id) {
        case arrows[0].id:
            answers[0].classList.remove("hide")
            currentAnswer = answers[0]
            break;
        case arrows[1].id:
            answers[1].classList.remove("hide")
            currentAnswer = answers[1]

            break;
        case arrows[2].id:
            answers[2].classList.remove("hide")
            currentAnswer = answers[2]
            break;
        case arrows[3].id:
            answers[3].classList.remove("hide")
            currentAnswer = answers[3]
            break;
        case arrows[4].id:
            answers[4].classList.remove("hide")
            currentAnswer = answers[4]
            break;
        default:
            break;
    }
}






