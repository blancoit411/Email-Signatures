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
  document.getElementById("navLinks").classList.toggle('hidden');
  document.getElementById("navToggle").classList.toggle('rotated');
}