let homeScore = 0
let guestScore = 0

const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")

const homeOneBtn = document.getElementById("home-1")
const homeTwoBtn = document.getElementById("home-2")
const homeThreeBtn = document.getElementById("home-3")
const guestOneBtn = document.getElementById("guest-1")
const guestTwoBtn = document.getElementById("guest-2")
const guestThreeBtn = document.getElementById("guest-3")


// Increment functions
function incrementHomeScore(score){
    homeScore += score
    homeEl.textContent = homeScore
}

function incrementGuestScore(score){
    guestScore += score
    guestEl.textContent = guestScore
}


// Home button event listeners
homeOneBtn.addEventListener("click", function() {
    incrementHomeScore(1)
})

homeTwoBtn.addEventListener("click", function() {
    incrementHomeScore(2)
})

homeThreeBtn.addEventListener("click", function() {
    incrementHomeScore(3)
})

// Guest button event listeners
guestOneBtn.addEventListener("click", function() {
    incrementGuestScore(1)
})

guestTwoBtn.addEventListener("click", function() {
    incrementGuestScore(2)
})

guestThreeBtn.addEventListener("click", function() {
    incrementGuestScore(3)
})