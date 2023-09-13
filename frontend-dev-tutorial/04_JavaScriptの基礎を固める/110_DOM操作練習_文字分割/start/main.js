document.addEventListener("DOMContentLoaded", function() {
  const el = document.querySelector(".animate-title");
  const arr = el.innerHTML.trim().split("");

  el.innerHTML = arr.reduce((a,b) => {
    b = b.replace(" ", "&nbsp;");
    return `${a}<span class="char">${b}</span>`;
  },"");
})