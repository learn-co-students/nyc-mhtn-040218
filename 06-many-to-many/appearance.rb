class Appearance
  attr_accessor :avenger, :movie

  ALL = []

  def initialize(avenger, movie)
    @avenger = avenger
    @movie = movie

    ALL << self
  end

  def self.all
    ALL
  end

end
