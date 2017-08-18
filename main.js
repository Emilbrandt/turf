window.addEventListener('scroll', function(e) {

    //d.style.boxShadow = 'inset 0 0 30000px rgba(0,0,0,' + ((window.scrollY/window.innerHeight)) + ')'
})


var headerImg = new Actionmation(document.querySelector('header img'));
headerImg.parallax(-.25);

var header = new Actionmation(document.querySelectorAll('header')[0]);
header.fadeOut();

var container = new Actionmation(document.querySelector('.panel'));
container.parallax(.25);

