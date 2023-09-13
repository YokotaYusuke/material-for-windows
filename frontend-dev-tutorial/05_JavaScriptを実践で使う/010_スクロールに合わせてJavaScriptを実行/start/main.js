const child = document.querySelector(".child");
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log("In View");
      // observer.unobserve(entry.target);
      entry.target.classList.add("inview");
    } else {
      console.log("Out View");
      entry.target.classList.remove("inview");
    }
  });
  
}

const option = {
  root: null,
  rootMargin: "-500px 0px",
  threshold: 0
}

const io = new IntersectionObserver(cb, option);
io.observe(child);