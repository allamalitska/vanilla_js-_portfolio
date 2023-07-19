let footerMessage = "This page was built using: ";
let languagesArray = ["HTML", "CSS", "JavaScript"];

// footerMessage += languagesArray.join(", ") + "!";
// document.getElementById("footer").textContent = footerMessage;

for (i = 0; i <= languagesArray.length - 1; i++) {
  if (i === languagesArray.length - 1) {
    footerMessage = `${footerMessage} "${languagesArray[i]}"!`;
  } else {
    footerMessage = `${footerMessage} "${languagesArray[i]}",`;
  }
}
document.getElementById("footer").textContent = footerMessage;
