let timer;
let time = 0;

const setTimes = (e) => {
  const minutes = String(Math.floor(e / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((e % 60000) / 1000)).padStart(2, '0');
  const minisecundes = String(Math.floor((e % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${minisecundes}`;
}

const start = () => {
  if (!timer) {
    timer = setInterval(() => {
      time += 10;
      document.getElementById('display').textContent = setTimes(time);
    }, 10);
  }
}

const stop = () => {
  clearInterval(timer);
  timer = null;
  const result = document.createElement('li');
  result.textContent = setTimes(time);
  document.getElementById('results').appendChild(result);
}

const reset = () => {
  clearInterval(timer);
  timer = null;
  time = 0;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('results').innerHTML = '';
}