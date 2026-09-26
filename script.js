const loadingScreen = document.querySelector(".loading-screen")
const loadingText = document.querySelector(".loading-text")
const loadingTime = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;
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
]
const loadingMessagesDone = [
    "Done! Nothing exploded.",
    "Loaded absolutely nothing.",
    "Finally!",
    "Loaded. I think."
]
const loadingTextChange = setInterval(() => {
    loadingText.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}, 900)

history.scrollRestoration = "manual";
window.scrollTo(0, 0)

setTimeout(() => {
    clearInterval(loadingTextChange)
    loadingText.textContent = loadingMessagesDone[Math.floor(Math.random() * loadingMessagesDone.length)];
    loadingScreen.classList.add("hidden")
    setTimeout(() => {
        loadingScreen.style.display = "none"
        document.body.style.overflow = "scroll";
    }, 1500)
}, loadingTime)