let sidebarButton = document.getElementById('sidebar-button');
let sidebarHideButton = document.getElementById('sidebar-hide-button');
let sidebar = document.getElementById('sidebar');

sidebarButton.onclick = () => { sidebar.className = 'visible' };

sidebarHideButton.onclick = () => { sidebar.className = '' };

let disableThisButton = document.querySelector("#disable-this-button");
let disabledText = document.querySelector("#disabled-text");
disableThisButton.onclick = () => {
  disableThisButton.setAttribute('disabled', 'disabled');
  disabledText.innerHTML += ' The button is disabled and can no longer be clicked';
}
