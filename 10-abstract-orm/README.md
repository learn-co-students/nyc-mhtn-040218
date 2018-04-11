# Dynamic ORMs

Creating a Superclass that our other subclasses inherit form
This Superclass talks to SQL for us
Subclass is blissfully unaware of SQL

## Reorganizing

* [ ] Write `song.rb`
* [ ] Add a Gemfile to manage Gems
* [ ] Require all gems from Gemfile
* [ ] Create models folder and move models into there
* [ ] Require all files from `app/`
* [ ] Remove DB methods from `run.rb`
* [ ] Compare static ORM with an old example
* [ ] Add other attributes to `Song` model
* [ ] Define public interface

## Objectives

* Public versus private interface
* Explain **how inheritance works in Ruby**
* **Demonstrate inheritance **between Ruby classes without persistence
* Refactor code that is common to two separate custom ORMs into a **shared parent class**
* Explain **mass assignment**
* Apply **meta-programming** to create and act on methods in child classes
* BONUS: Implement **relationship macros** in custom dynamic ORM

## What I changed from Lecture

* Removed the duplicate databases and reference to it
* Renamed `super-model.rb` to `super_model.rb`
* Moved `super_model.rb` to `app/helpers`
* Moved all models to `app/models`
* Removed model specific language from `super_model.rb`
* Fixed mixed up instance/class references to table_name method
* Add `DB[:conn].results_as_hash = true` to `run.rb`
* Changed column name in `songs` table in DB from `title` to `name`
* Revise the `update` method in `SuperModel`

## How to Run the `subway` App

* `gem install bundler`
* `cd` into `subway` directory
* run `bundle install`
* run `ruby db/seeds.rb` (takes a moment)
* run `ruby bin/run.rb`
  * run `Route.all`
  * run `Station.all`
  * run `Stops.all`
* explore the code in the `app` folder! (if you want)
