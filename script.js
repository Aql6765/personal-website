const loadingScreen = document.querySelector(".loading-screen")
const loadingText = document.querySelector(".loading-text")
const loadingSkip = document.querySelector(".loading-skip")
const siteContent = document.querySelector(".site-content")
const desktop = document.querySelector(".desktop")
const loadingTime = Math.floor(Math.random() * (30000 - 7000 + 1)) + 7000;
const loadingMessages = [
    "Loading...",
    "Dialing up...",
    "Downloading more RAM...",
    "Counting the pixels...",
    "Uhhh....",
    "Why's this taking so long?",
    "Almost there! (Probably)",
    "Loading the loading screen...",
    "Bribing the server...",
    "Loading... something?",
    "Looking for the CSS file...",
    "Vibe coding the website quickly...",
    "Running a background check on you...",
    "Trying to find that one bug...",
    "Procrastinating...",
    "Adding more salt...",
    "The line is long...",
    "Hope you're having a good day :)",
    "Vibe check",
    "Adding sparkles",
    "Wait did you take a ticket?",
    "Did you bring the money?",
    "Did you bring the good stuff?",
    "Tbh, it's not worth it",
    "You're still here?",
    "Touch grass.",
    "You are: number 69 in line.",
    "You are NOT the father.",
    `You shouldn't wait ${loadingTime / 1000} seconds for this.`
]
const loadingMessagesDone = [
    "Done! Nothing exploded.",
    "Loaded absolutely nothing.",
    "Finally!",
    "Loaded. I think.",
    "This better be good.",
    "Now Serving: 69.",
    "You actually waited?",
    "You should've just skipped.",
    `${loadingTime / 1000} seconds is too much.`
]
const loadingMessagesSkipped = [
    "Why you so impatient?",
    "Fine, I guess.",
    "Really?",
    "K",
    "Rude.",
    "I put so much effort into this!",
    "You're missing out.",
    "I have no words.",
    "Why can't you wait?",
    `Come on, it was only gonna be ${loadingTime / 1000} seconds!`
]
const loadingTextChange = setInterval(() => {
    loadingText.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}, 1500)

siteContent.classList.add("hidden")
history.scrollRestoration = "manual";
window.scrollTo(0, 0)
console.log(window.location.search)

if (window.location.search == "?skipLoading") {
    siteContent.classList.remove("hidden")
    loadingScreen.style.display = "none";
    document.body.style.overflow = "scroll";
}
else {
    setTimeout(() => {
        clearInterval(loadingTextChange)
        loadingText.textContent = loadingMessagesDone[Math.floor(Math.random() * loadingMessagesDone.length)];
        loadingScreen.classList.add("hidden")
        setTimeout(() => {
            siteContent.classList.remove("hidden")
            loadingScreen.style.display = "none"
            document.body.style.overflow = "scroll";
        }, 2000)
    }, loadingTime)
}

if (window.location.search == "?old") {
    desktop.style.display = "none"
}

if (loadingSkip) {
    loadingSkip.addEventListener("click", () => {
        clearInterval(loadingTextChange)
        loadingText.textContent = loadingMessagesSkipped[Math.floor(Math.random() * loadingMessagesSkipped.length)];
        loadingScreen.classList.add("hidden")
        setTimeout(() => {
            siteContent.classList.remove("hidden")
            loadingScreen.style.display = "none"
            document.body.style.overflow = "scroll";
        }, 2000)
    })
}