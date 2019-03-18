console.info("my first js file");

var name = "Andrei";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Ploscar";

console.info("Name:")
console.info(name)

console.log("before inside welcome message");
function getWelcomeMsg(){
    console.log("inside welcome message");
    return "welcome to my site!";
}

function getColor(){
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 16) {
         return "green"
    } 
    return "red";

}


console.log("after inside welcome message");


var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary")
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color; 



//first example
function hideHomePage() {
    document.getElementById('home-page').style.display = 'none' ;
}

function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block' ;
}

function clickOnSkills () {
    //hideHomePage();
    //showSkillsPage();
    hidePage("home-page");
    hidePage("languages-page");
    hidePage("about-page");
    showPage("skills-page");
}
//first example - end;


function hidePage(page) {
    document.getElementById(page).style.display = 'none' ;
}

function showPage(page) {
    document.getElementById(page).style.display = 'block' ;
}