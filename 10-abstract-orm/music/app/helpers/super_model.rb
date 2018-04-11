class SuperModel
  # parent class

  def initialize(id=nil, name)
    @id = id
    @name = name
  end

  def self.table_name
    # if used in instance method, use self.class
    self.name.downcase + 's'
  end

  def save
    sql = <<-SQL
      INSERT INTO #{self.class.table_name} (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)

    @id = retrieve_highest_id

    self
  end

  def self.create(name)
    s = self.new(name)
    s.save
  end

  def self.all
    sql = <<-SQL
      SELECT * from #{self.table_name};
    SQL

    hashes = DB[:conn].execute(sql)
    hashes.map do |hash|
      parse_hash(hash)
    end
  end

  def self.find(id)
    # we used to write Song.all.find
    # now we can write Song.find
    sql = <<-SQL
      SELECT * FROM #{table_name} WHERE id = ?
    SQL

    hash = DB[:conn].execute(sql, id)
    parse_hash(hash[0])
  end

  def update(new_name)
    sql = <<-SQL
      UPDATE #{self.class.table_name} SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, new_name, @id)

    a = self.class.find(@id)
    @name = a.name
    self
  end

  def self.destroy(id)
    sql = <<-SQL
      DELETE FROM #{table_name} WHERE id=?;
    SQL

    DB[:conn].execute(sql, id)

    true
  end

  private

  def self.parse_hash(hash)
    if hash
      Song.new(hash["id"], hash["name"])
    else
      nil
    end
  end

  def retrieve_highest_id
    sql = <<-SQL
      SELECT last_insert_rowid() FROM #{self.class.table_name}
    SQL

    DB[:conn].execute(sql)[0][0]
  end

end
