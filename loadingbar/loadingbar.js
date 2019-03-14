// Load text
window.onload = () => {
  fetch('http://www.randomtext.me/api/lorem/p-40/15-200')
    .then(response => response.json())
    .then(json => {
      document.querySelector('#content').innerHTML = json.text_out;
    })
}

// Loading bar
let body = document.querySelector('body');
let loadingBar = document.querySelector('#loading-bar');

window.onscroll = () => {
  loadingBar.style.width = Math.round(
    100 * window.scrollY / ( body.clientHeight - window.innerHeight)
  ) + '%'
}
