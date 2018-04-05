class Book

  attr_accessor :title, :authors, :description

  @@all = []

  def initialize (title, authors, description)
    @title = title
    @authors = authors
    @description = description
    @@all << self
  end

  def self.all
    @@all
  end

  def formatted_title
    @title.split(" ").map{|word| word.capitalize}.join(" ")
  end

  def formatted_authors
    @authors.join(" & ")
  end

  def to_s
    puts "#{self.formatted_title} by #{self.formatted_authors}"
  end

  #class
  def self.display_self
    self
  end

  #instance
  def show_self
    self
  end

end
