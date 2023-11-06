function closeBenieBot() {
  var beniebotDiv = document.querySelector('.beniebot');
  beniebotDiv.style.display = 'none';
  var iframe = document.getElementById("beniebotIframe");
  if (iframe) {
    iframe.src = 'about:blank';
  }
}
function refresh() {
  var beniebotContainer = document.querySelector('.beniebot');
  var beniebotIframe = document.getElementById('beniebotIframe');
  beniebotIframe.src = "https://calhr.benefitsprograms.info/chatbot/beniebot.html";
  beniebotContainer.style.display = 'block';
}

function closeDisclaimer() {
  const disclaimer = document.querySelector(".disclaimer");
  if (disclaimer) {
    disclaimer.style.display = "none";
  }
}

const openBot = document.getElementById("openNewWindow");
const agreementCheckbox = document.getElementById("agreementCheckbox");
const errorSpan = document.getElementById("js-chatbot-error");

openBot.addEventListener("click", function () {
  if (agreementCheckbox.checked) {
    var beniebotContainer = document.querySelector('.beniebot');
    var beniebotIframe = document.getElementById('beniebotIframe');
    beniebotIframe.src = "https://calhr.benefitsprograms.info/chatbot/beniebot.html";
    beniebotContainer.style.display = 'block';
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = "username=Employee; path=/; expires=" + expirationDate.toUTCString();
    document.cookie = "agreement=true; path=/; expires=" + expirationDate.toUTCString();
    closeDisclaimer();
  } else {
    errorSpan.textContent = "You must agree to the disclaimers to activate the Virtual Assistant.";
    agreementCheckbox.addEventListener("change", function () {
      errorSpan.textContent = "";
    });
  }
});
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.addEventListener("DOMContentLoaded", function () {
  const domain = "calhr.benefitsprograms.info";
  if (window.location.hostname.endsWith(domain)) {
    const openButton = document.querySelector(".chatbot_icon");
    const botContent = document.querySelector(".disclaimer");
    const agreementCheckbox = document.getElementById("agreementCheckbox");

    openButton.addEventListener("click", function () {
      if (agreementCheckbox.checked) {
        var beniebotContainer = document.querySelector('.beniebot');
        var beniebotIframe = document.getElementById('beniebotIframe');
        beniebotIframe.src = "https://" + domain + "/chatbot/beniebot.html";
        beniebotContainer.style.display = 'block';
        closeDisclaimer();
      } else {
        if (getCookie("agreement") !== "true") {
          if (botContent.style.display === "none") {
            botContent.style.display = "block";
          } else {
            botContent.style.display = "none";
          }
        }
      }
    });
  }
});








