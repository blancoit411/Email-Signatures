if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


function highlightDate() {
  let days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let currentDay = days[new Date().getDay()];
  let selected = document.getElementById(currentDay);
  selected.classList.add("currentDay")

}

function navToggleEvent() {
  let menuState = getComputedStyle(document.getElementById('navLinks')).opacity;

  if (menuState == '1')
  {
    navClose();
    return;
  }
  
  if (menuState == '0')
  {
    navOpen();
    return;
  }
}


function navOpen()
{
  document.getElementById("navLinks").classList.remove('hidden');
  document.getElementById("navToggle").classList.add('rotated');
  return;
}

function navClose()
{
  document.getElementById("navLinks").classList.add('hidden');
  document.getElementById("navToggle").classList.remove('rotated');
  return;
}