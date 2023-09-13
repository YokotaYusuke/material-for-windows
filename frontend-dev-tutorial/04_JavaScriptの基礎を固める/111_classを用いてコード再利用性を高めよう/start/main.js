document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    const ta3 = new TextAnimation('.animate-title-3');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
        ta3.animate();
    }, 1000);
});


class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((accu, curr) => {
            curr = curr.replace(" ", "&nbsp;");
            return `${accu}<span class="char">${curr}</span>`;
        },"");
    }
    animate() {
        this.el.classList.toggle("inview");
    }
}


function addClass() {
    document.querySelector(".animate-title").classList.toggle("inview");
    document.querySelector(".animate-title-2").classList.toggle("inview");
    document.querySelector(".animate-title-3").classList.toggle("inview");
}

const btnElement = document.querySelector(".btn");
btnElement.addEventListener("click", addClass);