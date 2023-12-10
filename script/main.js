// Website Loader & go up Button
let loader = document.querySelector(".loader");
let goUpBtn = document.querySelector(".go-up")

let maxHeight = document.documentElement.scrollHeight  - document.documentElement.clientHeight;


// Stats
let stats = document.querySelector (".stats");
let allStatsElements = document.querySelectorAll(".stats .number");
let skills = document.querySelector(".skills");
let skillSpan = document.querySelector(".skills .my-percent");
let skillsSpans = document.querySelectorAll(".skills .my-percent");

// console.log(skills, skillsSpans)


// window.onscroll = function(){
// }


// Settings 
let started = false;
let startedAgain = false;

function startFind (el){
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent === goal || parseInt(el.textContent) >= 135){
            clearInterval(counter);
        }
    }, 1500 / goal);
}

window.onscroll = function websiteLoader(){
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
        }
    } else{
        goUpBtn.style.display = "none"
        goUpBtn.style.opacity = "0"
    }
    if (window.scrollY >= (skills.offsetTop - 150)) {
            let skGoal = +skillSpan.dataset.skills + 20;
            skillsSpans.forEach((e)=> {
            e.style.width = `${skGoal}%`;
        })
    }
    if (window.scrollY >= (stats.offsetTop - 150)) {
        if (!started){
            allStatsElements.forEach((ele) => startFind(ele));
        }
        started = true;
    }
}

