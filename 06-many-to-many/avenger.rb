class Avenger
  attr_accessor :name, :power

  ALL = [] #global constant, you can't redefine it, but you can still mutate it
  # such as with "<<", but you cannot say ALL = "something else"

  def initialize(name, power)
    @name = name
    @power = power

    ALL << self
  end

  def self.all
    ALL
  end

  def appear_in_movie(movie)
    # REMEMBER, WE DON'T WANT TO SAY @movies << movie, because our single-source-of-truth
    # for the relationship between Avengers and Movies belongs in Appearance

    Appearance.new(self, movie)
  end

  # def appear_in_movie(avenger, movie) WE DON'T WANT THIS, WE COULD CALL Appearance.new instead


  def appearances
    Appearance.all.select do |appearance|
      appearance.avenger == self
    end
  end

  def movies
    appearances.map do |appearance|
      appearance.movie
    end
  end

end
