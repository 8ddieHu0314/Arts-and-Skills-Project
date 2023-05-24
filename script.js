let Fish1 = document.getElementById("Fish1");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    Fish1.style.translateX = value * 5 + 'px';
})