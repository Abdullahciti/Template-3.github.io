let myclients = document.querySelector(".stats .one");
let myProjects = document.querySelector(".stats .two");
let myCountries = document.querySelector(".stats .three");
let myMoney = document.querySelector(".stats .four");
let loader = document.querySelector(".loader");
let goUpBtn = document.querySelector(".go-up")
// console.log(myclients, myProjects, myCountries, myMoney, loader);

function startFound (el){
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent === goal || parseInt(el.textContent) >= 135){
            clearInterval(counter);
        }
    }, 150);
}
// startFound(document.querySelector(".box div .one"));
// startFound(document.querySelector(".box div .two"));
// startFound(document.querySelector(".box div .three"));
// startFound(document.querySelector(".box div .four"));
// startFound(document.querySelector(".box div .four"));
// startFound(document.querySelector(".box div .four"));




// Stats
let maxHeight = document.documentElement.scrollHeight  - document.documentElement.clientHeight


window.onscroll = function(){
    let scrollPercentage = (scrollY / maxHeight);
    loader.style.width = `${scrollPercentage * 100}%`;
    if(window.scrollY >= 550){
        goUpBtn.style.display = "block"
        
        if(window.scrollY >= 551){
            goUpBtn.style.opacity = "1"
            goUpBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior:"smooth"
                })
            })
    }}else{
        goUpBtn.style.display = "none"
        goUpBtn.style.opacity = "0"
    }
    }
