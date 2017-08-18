class Actionmation {
    constructor(elm) {
        this.elm = elm;
    }
    parallax(factor) {
        var factor = factor || -.1;
        var element = this.elm;
        document.addEventListener("scroll", function() {
            var rect = element.getBoundingClientRect();
            var height = window.innerHeight;
            console.log(rect.top);
            element.style.transform = "translate3d(0," + (rect.top - height / 2) * factor + "px,0)";
        });
    }
    fadeOut() {
        var element = this.elm;
        document.addEventListener("scroll", function() {
            element.style.boxShadow = 'inset 0 0 0 3000px rgba(0,0,0,' + ((window.scrollY / window.innerHeight)) + ')';
        });
    }
}


