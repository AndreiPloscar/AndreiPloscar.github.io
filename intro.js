function getWelcomeMsg(){
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

var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary")
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color; 




function hidePage(page) {
    document.getElementById(page).style.display = 'none' ;
}

function showPage(page) {
    document.getElementById(page).style.display = 'block' ;
}

function initMenu() {
    var links = document.querySelectorAll("#Top-menu-bar a");
    console.info(links);
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;
    }
}

function clickOnMenuItem () {
    console.warn('clicked on menu', this);
    hideAllPages();
    var pageId = this.getAttribute('data-page');
    console.warn({pageId});
    showPage(pageId);
    //show this page (current page)
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for(var i = 0; i < pages.length; i++) {
pages[i].style.display = 'none';
    }

}

initMenu(); 

function showSkills() {
    var skills = [
        {name: 'html', endorsements: 8, endorsedBy: 'Andrei I'}, 
        {name: 'css', endorsements: 12}, 
        {name: 'js', endorsements: 19, endorsedBy: 'Vasile I'}, 
        {name: 'nodejs', endorsements: 3}
    ];



    var htmlSkills = skills.map(function(skill) {
        var endorsedBy = skill.endorsedBy ? ' - ' + skill.endorsedBy : '';
        var endorsements = ` <span class="endorsement">(${skill.endorsements}${endorsedBy}  )<span/>`;
        return '<li>' + skill.name.toUpperCase() + endorsements + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    console.warn(ul);
    ul.innerHTML = htmlSkills.join('');
}

hideAllPages();
showPage('skills-page');

showSkills();
