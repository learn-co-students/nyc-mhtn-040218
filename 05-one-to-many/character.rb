class Character
  # belongs to series

  @@all = []

  attr_reader :name, :alliance
  attr_accessor :series

  def initialize(name, alliance)
    @name = name
    @alliance = alliance
    @@all << self
  end

  # define a method that calls and inits a series instance
  # Character.all
  def self.all
    @@all
  end

end
