require 'sqlite3'
require 'pry'

DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true

class Artist

  attr_accessor :name
  attr_reader :id

  def initialize(id=nil, name)
    # Artist.new(1, "Beyonce")
    # Artist.new("Beyonce")
    @id = id
    @name = name
  end

  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)

    @id = retrieve_highest_id

    self
  end

  def self.create(name)
    a = Artist.new(name)
    a.save
  end

  def self.all
    sql = <<-SQL
      SELECT * from artists;
    SQL
    
    artist_hashes = DB[:conn].execute(sql)
    artist_hashes.map do |artist_hash|
      parse_artist_hash(artist_hash)
    end
  end

  def self.find(id)
    #we used to write Artist.all.find
    # now we can write Artist.find
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    artist_hash = DB[:conn].execute(sql, id)
    parse_artist_hash(artist_hash[0])
  end

  def update(new_name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, new_name, @id)

    a = Artist.find(@id)
    @name = a.name
    self
  end

  def self.destroy(id)
    sql = <<-SQL
      DELETE FROM artists WHERE id=?;
    SQL

    DB[:conn].execute(sql, id)

    # i faked it sorry not sorry
    true
  end


  private

  def self.parse_artist_hash(artist_hash)
    if artist_hash
      Artist.new(artist_hash["id"], artist_hash["name"])
    else
      nil
    end
  end

  def retrieve_highest_id
    sql = <<-SQL
      SELECT last_insert_rowid() FROM artists
    SQL

    DB[:conn].execute(sql)[0][0]
  end



end

Pry.start
