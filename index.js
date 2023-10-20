function closeBenieBot() {
  var beniebotDiv = document.querySelector('.beniebot');
  beniebotDiv.style.display = 'none';
  var iframe = document.getElementById("beniebotIframe");
  if (iframe) {
    iframe.src = 'about:blank';
  }
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
document.addEventListener("DOMContentLoaded", function() {
const openButton = document.querySelector(".chatbot_icon"); //The chatbot icon is saved as a button
const botContent = document.querySelector(".disclaimer"); //The iframe where the chatbot is contained
openButton.addEventListener("click",function(){
    if (botContent.style.display === "none") {
        botContent.style.display = "block"; // Show the chat container
    } else {
        botContent.style.display = "none"; // Hide the chat container
    }
})
})






