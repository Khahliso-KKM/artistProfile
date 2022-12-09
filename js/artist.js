var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tlink of tablinks){
        tlink.classList.remove("active-link") //this removes the active link
    }
    for(tlink of tabcontents){
        tlink.classList.remove("active-tab") //this removes the active tab
    }
    event.currentTarget.classList.add("active-link"); //addind pink line as you click tab
    document.getElementById(tabname).classList.add("active-tab");
}