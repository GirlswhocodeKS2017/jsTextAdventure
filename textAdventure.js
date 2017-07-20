/* JavaScript code for my website text adventures */


function stay() {
    var next = "You decide to stay. Maybe it is all a dream. You close" +
	" your eyes, hoping that you will wake up. A hideous monster" +
	" busts through the door.";
    document.getElementById("story").innerHTML = next;
    document.getElementById("stayButton").style.display = "none";
    document.getElementById("leaveButton").style.display = "none";
    document.getElementById("stayButton2").style.display = "inline";
    document.getElementById("lampButton").style.display = "inline";
}

function leave() {
    var next = "You slowly open the door... and come face to face" +
	" with a huge, scary monster! You are eaten! Better luck next" +
	" time...";
    document.getElementById("story").innerHTML = next;
    document.getElementById("stayButton").style.display = "none";
    document.getElementById("leaveButton").style.display = "none";
    document.getElementById("storyImage").src="scaryMonster.jpg";
    
}
function lamp () {
    var next = "You pick up the lamp and swing it at the monster! " +
	"Direct Hit! Who knew you were such a Bad Mamba Jamba! " +
	" To be continued ...";
    
    document.getElementById("story").innerHTML = next;
    document.getElementById("stayButton2").style.display = "none";
    document.getElementById("lampButton").style.display = "none";
    document.getElementById("storyImage").src="zena.gif";
    
}

function stayAgain() {
    next = "Sorry. It wasn't a dream. You meet a grisly end." 
    document.getElementById("story").innerHTML = next;
    document.getElementById("storyImage").src="grizzly.jpg";
    document.getElementById("stayButton2").style.display = "none";
    document.getElementById("lampButton").style.display = "none";

}
