document.addEventListener('DOMContentLoaded', function () {
  if (!document.cookie.includes('conversationInProgress')) {
      localStorage.clear();
  }
});


window.addEventListener('beforeunload', function (event) {
  if (event.clientY < 0) {
      document.cookie = 'conversationInProgress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
});

function closeBenieBot() {
  var beniebotDiv = document.querySelector('.beniebot');
  beniebotDiv.style.display = 'none';
  document.cookie = 'conversationInProgress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
 
  localStorage.clear();


  var beniebotIframe = document.getElementById('beniebotIframe');

 
  beniebotIframe.contentWindow.document.body.innerHTML = "";

 
  beniebotIframe.src = "https://calhr.benefitsprograms.info/chatbot/beniebot.html";
}
 

function refresh() {
  var beniebotContainer = document.querySelector('.beniebot');
  var beniebotIframe = document.getElementById('beniebotIframe');

 
  localStorage.clear();


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
 
document.addEventListener("DOMContentLoaded", function () {
  const agreementCheckbox = document.getElementById("agreementCheckbox");

 
  if (getCookie("agreement") === "true") {
    agreementCheckbox.checked = true;
  }

 
  agreementCheckbox.addEventListener("change", function () {
 
    if (agreementCheckbox.checked) {
     
      setCookie("agreement", "true");
      
     
      setCookie("conversationInProgress", "true");
    } else {
      document.cookie = 'conversationInProgress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  });

  
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;`;
  }

 
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});
 
var isBotActivated = localStorage.getItem("botActivated");
 
document.addEventListener("DOMContentLoaded", function () {
  const beniebotContainer = document.querySelector('.beniebot');
  const beniebotIframe = document.getElementById('beniebotIframe');

  
  var isAgreementAccepted = getCookie("conversationInProgress") === "true";

 
  beniebotContainer.style.display = isAgreementAccepted ? 'block' : 'none';
  });

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

 
openBot.addEventListener("click", function () {
  if (agreementCheckbox.checked) {
   
    localStorage.setItem("botActivated", true);
 
 
   
    var beniebotContainer = document.querySelector('.beniebot');
    var beniebotIframe = document.getElementById('beniebotIframe');
    beniebotIframe.src = "https://calhr.benefitsprograms.info/chatbot/beniebot.html";
    beniebotContainer.style.display = 'block';
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = "username=Employee; path=/; expires=" + expirationDate.toUTCString();
    document.cookie = "agreement=true; path=/; expires=" + expirationDate.toUTCString();
    closeDisclaimer();
 
  }
 
  else {
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
 
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }
 
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
 
  const openButton = document.querySelector(".chatbot_icon");
  const botContent = document.querySelector(".disclaimer");
  const agreementCheckbox = document.getElementById("agreementCheckbox");
 
  const beniebotContainer = document.querySelector('.beniebot');
  const beniebotIframe = document.getElementById('beniebotIframe');
 
  openButton.addEventListener("click", function () {
    if (agreementCheckbox.checked) {
      if (!beniebotIframe.src || beniebotIframe.src === "about:blank") {
        beniebotIframe.src = "https://" + domain + "/chatbot/beniebot.html";
      }
 
      beniebotContainer.style.display = 'block';
 
      setCookie('conversationInProgress', 'true');
 
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
});




