(function () {
  var banner = document.getElementById("cookieBanner");
  var acceptButton = document.getElementById("acceptCookies");
  var storageKey = "cookiesAccepted";

  if (!banner || !acceptButton) {
    return;
  }

  if (localStorage.getItem(storageKey) !== "true") {
    banner.classList.add("show");
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem(storageKey, "true");
    banner.classList.remove("show");
  });
})();
