// Elements
// Website Loader & go up Button
let loader = document.querySelector(".loader");
let goUpBtn = document.querySelector(".go-up");

// Header
let headerLis = document.querySelectorAll("header li a");

// Stats
let stats = document.querySelector(".stats");
let allStatsElements = document.querySelectorAll(".stats .number");
let skills = document.querySelector(".skills");
let skillSpan = document.querySelector(".skills .my-percent");
let skillsSpans = document.querySelectorAll(".skills .my-percent");

// How It Works 
let howWorks = document.querySelector(".how-it-works");

// Latest Events 
let stopWatch = document.querySelectorAll(".stop-watch h3");

// discounts
let discounts = document.querySelectorAll(".discounts");

// Settings 
let started = false;
let startedAgain = false;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Header
headerLis.forEach((el, index) => {
    el.addEventListener("click", () => {
        headerLis.forEach((li) => {
            li.classList.remove("active");
        });
        el.classList.add("active");
        if(index >= 3){
            headerLis[3].classList.add("active");
        };
    });
});

// Skills
function startFindSkills(el){
    let skillGoal = el.dataset.skills;
    currentnumber = 0;
    let countSkill = setInterval(() => {
        el.style = `width: ${currentnumber++}%`
        if (currentnumber >= parseInt(skillGoal)){
            clearInterval(countSkill);
        };
    }, 4000 / (parseInt(skillGoal)));
}
// Stats 
function startFind (el){
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent === goal || parseInt(el.textContent) >= 135){
            clearInterval(counter);
        }
    }, 1500 / goal);
}

//  Window Scroll Function 
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    loader.style.width = `${(scrollTop / height) * 100}%`;
    if(window.scrollY >= 550){
        goUpBtn.style.display = "block";
        if(window.scrollY >= 551){
            goUpBtn.style.opacity = "1";
            goUpBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior:"smooth"
                })
            })
        }
    } else{
        goUpBtn.style.display = "none";
        goUpBtn.style.opacity = "0";
    }
    if (window.scrollY >= (stats.offsetTop - 150) || window.scrollY <= (discounts.offsetTop + 25)) {
        if (!started){
            allStatsElements.forEach((ele) => startFind(ele));
        }
        started = true;
    }
    if (window.scrollY > skills.offsetTop || window.scrollY < (howWorks.offsetTop + 20)) {
        if(!startedAgain){
            skillsSpans.forEach((el) => startFindSkills(el));
        };
        startedAgain = true;
    };
};

// Events 
let myTime = new Date;

stopWatch.forEach(() => {
    stopWatch[0].innerHTML = myTime.getDay();
    stopWatch[1].innerHTML = myTime.getHours();
    stopWatch[2].innerHTML = myTime.getMinutes();
    stopWatch[3].innerHTML = myTime.getSeconds();
});
