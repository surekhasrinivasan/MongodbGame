//Create a new mongo database called myGame.
> use myGame
switched to db myGame
> show dbs
admin  (empty)
local  0.078GB
> db.monsters.insert({
...     "Name":"Charizard",
...     "Health":78,
...     "Last fought date": new Date() ,
...     "Attacks": ["Fire", "Bite", "Scratch"],
...     "Stats": {"Attack": 84, "Defense": 78}
... })
WriteResult({ "nInserted" : 1 })
> db.monsters.insert({
...     "Name":"Venusaur",
...     "Health":80,
...     "Last fought date": new Date() ,
...     "Attacks": ["Poison", "Trap", "Eat"],
...     "Stats": {"Attack": 82, "Defense": 83}
... })
WriteResult({ "nInserted" : 1 })
> db.monsters.find()
{ "_id" : ObjectId("5a6f63a47376efe4e207a5be"), "Name" : "Charizard", "Health" : 78, "Last fought date" : ISODate("2018-01-29T18:10:44.941Z"), "Attacks" : [ "Fire", "Bite", "Scratch" ], "Stats" : { "Attack" : 84, "Defense" : 78 } }
{ "_id" : ObjectId("5a6f63cf7376efe4e207a5bf"), "Name" : "Venusaur", "Health" : 80, "Last fought date" : ISODate("2018-01-29T18:11:27.753Z"), "Attacks" : [ "Poison", "Trap", "Eat" ], "Stats" : { "Attack" : 82, "Defense" : 83 } }

// MongoDB Level 3 Assignment
db.monsters.insert({ "Name" : "Bat", 
                    "Level": 4, 
                    "Health" : 25, 
                    "Type": "Flying", 
                    "Last fought date" : ISODate("2018-01-29T18:10:44.941Z"), 
                    "Attacks" : ["Scratch", "Bite"], 
                    "Stats" : { "Attack" :5, 
                                "Defense" : 2}, 
                    "Style":"cool"})
