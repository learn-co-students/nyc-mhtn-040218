class Movie
  attr_accessor :title

  ALL = []

  def initialize(title)
    @title = title

    ALL << self
  end

  def self.all
    ALL
  end

  def appearances
    Appearance.all.select do |appearance|
      appearance.movie == self
    end
  end

  def characters
    appearances.map do |appearance|
      appearance.avenger
    end
  end
end
