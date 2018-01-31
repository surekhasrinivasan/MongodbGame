//MongoDB - Level 3 Assignment

var mongo = function(db) {
    
    //command that will find all monsters with an attack lower than 10
    db.monsters.find({"Stats.Attack":{"$lt":10}});
    
    //command that will find all monsters with a level above 5 but below 15 inclusive
    db.monsters.find({"Level":{"$gt":5, "$lt":15}});
    
    //command to find monsters that do not have the “bite” attack.
    db.monsters.find({"Attacks":{"$ne":"Bite"}});
    
    //command to find monsters with levels less than 6 but only return the name, 
    //level and health attributes
    db.monsters.find({"Level":{"$lt":6}}, {"Name":true, "Level":true, "Health":true, "_id":false});
    
    //command to find all monsters who attack is between 10 and 20 but do not 
    //include the monsters health or style
    db.monsters.find({"Stats.Attack":{"$gte":10,"$lte":20}}, {"Health":false,"Style":false});
    
    //command to find out how many monsters are in the collection
    db.monsters.find().count();
    
    //command to sort the collection by the monsters level with the highest level at 
    //the top and the lowest at the bottom
    db.monsters.find().sort({"Level":-1});
};


