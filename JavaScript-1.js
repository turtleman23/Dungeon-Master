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
consol.log ("Oh no! " + name + " an enemy! it looks fast, we sould battle it instead of running!");
enemyhp = 15;
enemydmg = 3;

while (enemyhp > 0 && hp > 0); { 
    consol.log ("will you attack high = 3, middle = 2 or low = 1?  ");
    attack = Integer(gets);
    defend = 1 + rand(3);
    if (attack == defend); {
        str = ["oh no it blocked!\n", "Ah! We need to beat this thing!\n", "Hurry! Before it hits us!\n"];
        consol.log (str[rand(3)]);
    }elsif (attack != defend); {
        hitdmg = dmg+rand(5);
        consol.log ("Yay we hit it! dmg:" + dmg);
        enemyhp -= hitdmg;
    }
    if (enemyhp <= 0); {
        break;
    }
}
    consol.log ("How do you want to defend?  High = 3, middle = 2, or low = 1?  ");
    defense = Integer(gets);
    attack = rand(3) + 1;
if (attack != defense); {
        dodge = false;
        if (classs == "3"); {
            dodge = rand(10)+1 >= 6;
            if (dodge); {
                consol.log ("Yay, you dodged it!");
            }
        }
        if (not dodge); {
            hp -= enemydmg;
            consol.log ("oh no! We were hit! HP remaining: " + hp);
            consol.log ("use a healing surge! press 0  ");
            surge = gets.chomp;
            if (surge == "0"); {
                hp += int/3;
                consol.log ("You feel better. HP remaining: " + hp);
            }
        }
    elsif (attack == defence); {
        consol.log ("You blocked!\n");
    }
}

if (hp <= 0);
    consol.log ("Oh noes, you died");
elsif (enemyhp <= 0);
    consol.log ("he ded\n");
    consol.log ("Yay, you leveled Up, put your point in dmg by pressing d ");
    level = 2;
    up = 0;
    while (up != "d"); {
        up = gets.chomp;
        if (up == "d"); {
            dmg += 1;
            consol.log ("You did it\n");
        elsif (up != "d"); {
            consol.log ("please push d ");
        }
        }
    }
    consol.log ("now let's go over moving.\n");
    consol.log ("moving is baced on North, South, East and West, right now we are in the training room with a door in the South, let's move there by pressing S  ");
    move = 0;
    while (move != "s"); {
        move = gets.chomp;
        if (move == "s");
           consol.log ("yay we moved into the town\n");
           consol.log ("Let's go home by typing Inn  ");
           home = gets.chomp;
           if (home == "Inn" || home == "inn"); {
               consol.log ("thank you for the wonderful trip please come again and check out our updates in the future\n");
               break;
           }
        elsif (move != "s"); {
            consol.log ("please press S  ");
        }
    }
else; {
    consol.log ("huh?  What the...\n");
}