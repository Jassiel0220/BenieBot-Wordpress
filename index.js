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
  beniebotIframe.src = "chatbot/beniebot.html";
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
    beniebotIframe.src = "beniebot.html";
    beniebotContainer.style.display = 'block';
    closeDisclaimer();
  } else {
    errorSpan.textContent = "You must agree to the disclaimers to activate the Virtual Assistant.";
    agreementCheckbox.addEventListener("change", function () {
      errorSpan.textContent = "";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".chatbot_icon");
  const botContent = document.querySelector(".disclaimer");

  window.onload = function() {
    if (getCookie("agreement") === "true") {
      agreementCheckbox.checked = true;
    }
  };
  
  openButton.addEventListener("click", function () {
    if (agreementCheckbox.checked) {
      var beniebotContainer = document.querySelector('.beniebot');
      var beniebotIframe = document.getElementById('beniebotIframe');
      beniebotIframe.src = "https://topmexico.org/chatbot/beniebot.html";
      document.cookie = "username=Employee; path=/";
      document.cookie = "agreement=true;"; // Establece la cookie de acuerdo
      beniebotContainer.style.display = 'block';
      closeDisclaimer();
    } else {
      if (botContent.style.display === "none") {
        botContent.style.display = "block";
      } else {
        botContent.style.display = "none";
      }
    }
  });
  
  // Función para obtener el valor de la cookie por su nombre
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});






