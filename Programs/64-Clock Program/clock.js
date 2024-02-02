const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    hours = formatzeroes(hours);
    minutes = formatzeroes(minutes);
    seconds = formatzeroes(seconds);

    return `${hours}:${minutes}: ${seconds} ${amorPm}`;
  }
}

function formatzeroes(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}
