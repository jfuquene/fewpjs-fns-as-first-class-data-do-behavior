/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let hour = timeString.split(":")[0]
  let hourI = parseInt(hour);
  return hourI < 11 ? "Good Morning"
   : hourI < 15 ? "Good Afternoon" : "Good Evening";

}

function displayMessage(greetingString) {
  let message = document.getElementById('greeting')
  message.innerText = greetingString;

}

