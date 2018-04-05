class Series
  # has many characters
  # cast of characters

  @@all = []

  attr_reader :name
  # attr_accessor :cast
  # def series
  #   @name
  # end


  def initialize(name)
    # scoped to one instance

    @name = name
    # @cast = []
    @@all << self
  end

  # add a character to this instance's cast
  def add_character(character_obj)
    # instance.cast << character_obj
    # self.cast << character_obj
    character_obj.series = self
  end

  def self.all
    @@all
  end

  def cast
    # find all the cast that refer to self
    Character.all.select do |character|
      character.series == self
    end
  end

end
