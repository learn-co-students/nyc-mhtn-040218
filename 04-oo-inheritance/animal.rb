require "pry"

class Animal
  attr_accessor :num_legs, :num_eyes, :type, :cuteness

  def initialize(num_legs, num_eyes, type, cuteness)
    @num_legs = num_legs
    @num_eyes = num_eyes
    @type = type
    @cuteness = cuteness
  end

  def speak
    "Hello"
  end

  def walk
    "Walking on #{num_legs} legs!!"
  end
end

class Mammal < Animal
  def initialize(num_legs, cuteness)
    super(num_legs, 2, "mammal", cuteness)
  end
end

# Dog inherits from Animal
# Dog extends Animal
# Dog is a child class of Animal
# Dog is a subclass of Animal
# Animal is a parent class of Dog
# Animal is a superclass of Dog
class Dog < Mammal
  attr_accessor :breed

  def initialize(breed, cuteness)
    super(4, cuteness)
    @breed = breed
  end

  def speak
    super + " WOOF!!!"
  end
end

class Cat < Mammal

  def initialize(cuteness)
    super(4, cuteness)
  end

  def speak
    "meow"
  end
end

class Snake < Animal
  def initialize
    super(0, 2, "serpent", 0)
  end

  def walk
    "sssslither"
  end
end

octopus = Animal.new(8, 2, "acquatic", 5000)
gs = Dog.new("german shepherd", 10000)
bc = Dog.new("border collie", 20000)
tabby = Cat.new(1000)
python = Snake.new

Pry.start
