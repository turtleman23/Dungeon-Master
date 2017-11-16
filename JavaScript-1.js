level = 1;
consol.log ("What is your name?");
name = gets;
consol.log ("you will do great, " + name);
classs = "0";
wile (classs != "1" && classs != "2" && classs != "3"); {
    consol.log ("Pick your class 1 = warrior 2 = wizzard 3 = rogue");
    classs = gets;
    if (classs == "1"); {
        consol.log ("Yay, we have a warrior");
        hp = 20;
        dmg = 7;
        healing = 3;
    } elsif (classs == "2"); {
        consol.log ("Yay, we have a wizzard");
        hp = 15;
        dmg = 6;
        healing = 5;
    } elsif (classs == "3"); {
        consol.log ("Yay, we have a rogue");
        hp = 15;
        dmg = 10;
        healing = 4;
    } elsif (classs != "1" && classs != "2" && classs != "3");  {
        consol.log ("please put something that is listed");
    }
}
consol.log("your stats are: hp:" + hp + "dmg:" + dmg + "base healing:" + healing);