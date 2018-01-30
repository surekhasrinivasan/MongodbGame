// MongoDB - Level 1 Assignment 

var db = "use myGame";

function monsters(name, health,lastFoughtDate, attacks,stats, db){

//Javascript code that would insert the four attributes into the “monsters” collection as 
//a new document.     
    db.monsters.insert({
        "Name":"Charizard",
        "Health":78,
        "Last fought date": new Date() ,
        "Attacks": ["Fire", "Bite", "Scratch"],
        "Stats": {"Attack": 84, "Defense": 78}
    });
    
    //code that would console.log all the documents inside the collection.
    db.monsters.find();
    
    //command that will find your monster based on a name
    db.monsters.find({"Name":"Venusaur"});
    
    //command that will find a monster based on one of the attack
     db.monsters.find({"Attacks":"Fire"});
     
    //command that will find a monster based on their defense stat
    db.monsters.find({"Stats.Defense":78});
}