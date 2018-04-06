require_relative './movie.rb'
require_relative './appearance.rb'
require_relative './avenger.rb'
require "pry"


tony = Avenger.new("Iron Man", "really smart && rich")
steve = Avenger.new("Captain America", "handsome, noble, bold, loves the idea of his country")
peter = Avenger.new("Spider-Man", "witty, terrible luck, is a spider, nobody cares except rishi")
natasha = Avenger.new("Black Widow", "cold-stone badass, will kick your ass")
tchalla = Avenger.new("Black Panther", "i never freeze, king")
thor = Avenger.new("Lord of Thunder", "gets hammered, long hair, one-eyed")
loki = Avenger.new("Mischief Manager", "send help")
steven = Avenger.new("Dr. Strange", "mr. doctor")

avengers_the_movie = Movie.new("Avengers")
aou = Movie.new("Age of Ultron")
im2 = Movie.new("Iron Man 2")
smh = Movie.new("Spider-Man: Homecoming")
ragnarok = Movie.new("Thor: Ragnarok")
drs = Movie.new("Dr. Strange")

tony.appear_in_movie(avengers_the_movie)
steve.appear_in_movie(avengers_the_movie)
peter.appear_in_movie(smh)
natasha.appear_in_movie(avengers_the_movie)

tony.appear_in_movie(im2)
natasha.appear_in_movie(im2)


Pry.start
