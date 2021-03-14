var monster_pattern = ["m", "o", "n", "s", "t", "e", "r"];
var monster_current = 0;

var keyHandler = function(event) {
    if((monster_pattern.indexOf(event.key) < 0) || event.key !== monster_pattern[monster_current]){
        monster_current = 0;
        return;
    }

    monster_current++;
    if (monster_pattern.length == monster_current) {
        window.location.replace("https://whentheimposteriss.us/monster");   
    }

}

document.addEventListener("keydown", keyHandler, false);