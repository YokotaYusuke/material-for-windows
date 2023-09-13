document.addEventListener('DOMContentLoaded', function () {
    const cb = function(el ,isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }
    const so = new ScrollObserver(".animate-title", cb);
});


class ScrollObserver {
    constructor(els, cb, options) {        
        this.els.document.querySelectorAll(els);
        const defalutOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defalutOptions, options);
        this._init();
    }
    _init() {
        const callBack = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    observer.unobserve(entry.target);
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        const io = new IntersectionObserver(callBack.bind(this), this.options);
        this.els.forEach(el => io.observe(el));
    }
}
