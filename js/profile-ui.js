/*==================================================================

    PROFILE-UI.JS

--------------------------------------------------------------------

Project : Legend of Sarbajit Portfolio V2

Purpose:

Controls the Professional Identity section.

This file reads data from:

✔ careerDatabase

✔ specializationDatabase

✔ statisticsDatabase

and updates the UI dynamically.

Author : Sarbajit Senapati

==================================================================*/
const roleCards=document.querySelectorAll(".role-card");

const roleTitle=document.getElementById("role-title");
const roleCompany=document.getElementById("role-company");
const roleDuration=document.getElementById("role-duration");
const roleDescription=document.getElementById("role-description");
const responsibilityList=document.getElementById("role-responsibilities-list");
const achievementList=document.getElementById("role-achievements-list");
const tagContainer =document.getElementById("tag-container");
const xpLevel =document.getElementById("xp-level");
const xpFill =document.getElementById("xp-fill");
const xpText =document.getElementById("xp-text");

function loadRole(role){

    const data=roles[role];

    if(!data) return;

    roleTitle.textContent=data.title;

    roleCompany.textContent=data.company;

    roleDuration.textContent=data.duration;

    roleDescription.textContent=data.description;

    responsibilityList.innerHTML="";

    data.responsibilities.forEach(function(item){

        const li=document.createElement("li");

        li.textContent=item;

        responsibilityList.appendChild(li);

    });


    achievementList.innerHTML="";

    data.achievements.forEach(function(item){

        const li=document.createElement("li");

        li.textContent=item;

        achievementList.appendChild(li);

    });
	
/*============================
SKILLS
=============================*/

tagContainer.innerHTML="";
if(data.skills){
	
data.skills.forEach(function(skill){

const tag=

document.createElement("span");

tag.textContent=skill;

tagContainer.appendChild(tag);

});
}
/*============================
LEVEL
=============================*/
xpLevel.textContent="Level "+data.level;

xpText.textContent=data.xp+" / 10000 XP";

xpFill.style.width=(data.xp/100)+"%";


    roleCards.forEach(function(card){

        card.classList.remove("active");

    });

    document
        .querySelector(`[data-role="${role}"]`)
        .classList
        .add("active");

}



roleCards.forEach(function(card){

    card.addEventListener("click",function(){

        loadRole(card.dataset.role);

    });

});


loadRole("trainer");