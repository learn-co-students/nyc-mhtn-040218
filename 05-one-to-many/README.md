# One to Many Relationships

## We've Learned So Far

* Inheritance
* Self
* Class Variables
* Instance Variables
* Class Methods
* Instance methods
* Global Variables
* Scope
* Initialize (Lifecycle)
* Accessors

## Objectives

* Talk about `run.rb` file and single point of entry
* `@@all` as database supplement
* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Additional:
  * Infer type of method (class or instance) through naming conventions
  * Distinguish between implicit and explicit receivers
  * Refactor code using private instance methods

## Deliverables

* Create a Series class. The class should have these methods:
  * `Series#initialize` which takes a title and has a reader method for the title
  * `Series#characters` that returns an array of Character instances
  * `Series#add_character` that takse a name and ranger/villain alliance, creates a new Character instance, and adds it to the series' character collection
* Create a Character class. The class should have these methods:
  * `Character#name` that returns a string
  * `Character#alliance` that returns the alliance of the character
  * `Character#series` that returns an instance of the series class
  * `Character#series_title` that returns the title of the series
  * `Character.all` that returns all the Characters created.

## Notes

* Model:
  * A class who's primary responsibility is to create objects
  * The definition of the data and behavior of those objects
* Domain:
  * The subject matter of the problem, (e.g., Learn's domain is online education)
* Domain modeling:
  * Creating models for your domain to represent real or abstract ideas (e.g., Learn's domain model includes modules, cohorts, assignments as well as their relationships)
* Relationships:
  * How one model or thing is connected to another model or thing
  * **One to many relationship: A relationship describing a single model that contains or keeps track of other models (a tree has many leaves, an organism has many cells, the universe has many galaxies)**
  * Many to many relationship: Next time
  * Other relationships: Next time

## Power Rangers Notes

* Super Sentai!

![](https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/MightyMorphinPowerRangers_26050625400_PR1_MIGHTY_MORPHIN._V348547908_RI_SX940_.jpg)

* Mighty Morphin Power Rangers
  * Black Ranger, Zack Taylor
  * Pink Ranger, Kimberly Hart
  * Blue Ranger, Billy Cranston
  * Yellow Ranger, Trini Kwan
  * Red Ranger, Jason Lee Scott
  * Villain, Rita Repulsa
  * Villain, Lord Zedd
  * Villain, Goldar
  * Villain, Putty Patroller

![](https://fsmedia.imgix.net/c6/db/7d/79/6728/48b2/9a1e/dd42d6304575/power-rangers-zeo-1996.jpeg?rect=0%2C185%2C3000%2C1500&auto=format%2Ccompress&w=650)

* Power Rangers Zeo
  * Red Ranger, Tommy Oliver
  * Green Ranger, Adam Park
  * Yellow Ranger, Tanya Sloan
  * Villain, King Mondo
  * Villain, Queen Machina
  * Villain, Prince Sprocket

![](http://henshinjustice.com/wp-content/uploads/2018/03/POWER-RANGERS-TURBO.jpg)

* Power Rangers Turbo
  * Red Ranger, Tommy Oliver (two series?!)
  * Blue Ranger, Justin Stewart
  * Pink Ranger, Kat Hillard
  * Yellow Ranger, Ashley Hammond
  * Villain, Divatox
  * Villain, Elgar
  * Villain, Rygog
