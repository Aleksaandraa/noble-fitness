const cookieBanner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");
const rejectButton = document.getElementById("reject-cookies");

if (localStorage.getItem("nobleCookieConsent") !== null) {
    cookieBanner.style.display = "none";
}


acceptButton.addEventListener("click", function () {
    localStorage.setItem("nobleCookieConsent", "accepted");
    cookieBanner.style.display = "none";
});


rejectButton.addEventListener("click", function () {
    localStorage.setItem("nobleCookieConsent", "rejected");
    cookieBanner.style.display = "none";
});