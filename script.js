const roles = [
    "Java Backend Developer",
    "Java Enthusiast",
    "REST API Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    const typingElement=document.getElementById("typing");

    if(charIndex>0){

        typingElement.innerHTML=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typeEffect,500);

    }

}

window.addEventListener("load", typeEffect);
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const topBtn = document.getElementById("topBtn");


topBtn.addEventListener("click", function () {


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});