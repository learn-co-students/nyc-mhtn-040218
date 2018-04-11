class GenericModel

  attr_reader :id

  def initialize(attributes)
    @id = nil
    self.send(:mass_assign_attributes, attributes)
  end

  def save
    self.id.nil? ? self.send(:insert_record) : self.send(:update_record)
  end

  def update(attributes)
    self.send(:mass_assign_attributes, attributes)
    self.save
  end

  def delete
    self.send(:delete_record)
  end

  def self.has_many(relationship, options = {})
    define_method(relationship.to_sym) do
      if options.empty?
        sql = <<-SQL
          SELECT #{relationship}.*
          FROM #{self.class.table_name}
          JOIN #{relationship}
              ON #{relationship}.#{self.class.foreign_key} = #{self.class.table_name}.id
          WHERE #{self.class.table_name}.id = #{self.id}
        SQL
      elsif !options[:through].nil?
        through = options[:through]
        sql = <<-SQL
          SELECT #{relationship}.*
          FROM #{self.class.table_name}
          JOIN #{through}
            ON #{through}.#{self.class.foreign_key} = #{self.class.table_name}.id
          JOIN #{relationship}
            ON #{through}.#{relationship[0...-1]}_id = #{relationship}.id
          WHERE #{self.class.table_name}.id = #{self.id}
        SQL
      end

      instances = DB[:conn].execute(sql).map do |row|
        relationship_class_name = relationship[0...-1].capitalize
        klass = Object.const_get(relationship_class_name)
        self.class.new_from_row(row, klass)
      end
    end
  end

  def self.belongs_to(relationship)
    define_method(relationship.to_sym) do
      foreign_key_value = self.send(:"#{relationship}_id")
      sql = <<-SQL
        SELECT DISTINCT #{relationship}s.*
        FROM #{self.class.table_name}
        JOIN #{relationship}s
          ON #{self.class.table_name}.#{relationship}_id = #{relationship}s.id
        WHERE #{relationship}s.id = #{foreign_key_value}
      SQL

      instance = DB[:conn].execute(sql).map do |row|
        relationship_class_name = relationship.capitalize
        klass = Object.const_get(relationship_class_name)
        self.class.new_from_row(row, klass)
      end.first
    end
  end

  def self.create(attributes)
    self.new(attributes).save
  end

  def self.table_name
    self.to_s.downcase + "s"
  end

  def self.foreign_key
    self.to_s.downcase + "_id"
  end

  def self.all
    sql = "SELECT * FROM #{self.table_name}"

    rows = DB[:conn].execute(sql)
    rows.map { |row| self.send(:new_from_row, row) }
  end

  def self.find(id)
    sql = "SELECT * FROM #{self.table_name} WHERE id = ?"

    row = DB[:conn].execute(sql, id)[0]
    self.send(:new_from_row, row) if row
  end

  def self.find_by(attributes)
    conditions = conditions_from_hash(attributes, " AND ")
    values = attributes.values
    sql = "SELECT * from #{self.table_name} WHERE #{conditions}"

    row = DB[:conn].execute(sql, *values)[0]
    self.send(:new_from_row, row) if row
  end

  def self.delete(id)
    self.find(id).delete
  end

  def self.column_names
    sql = "PRAGMA table_info('#{self.table_name}')"

    cols = DB[:conn].execute(sql).map { |hsh| hsh["name"] }
    cols.delete("id")
    cols
  end

  def self.inherited(childclass)
    childclass.column_names.each { |name| attr_accessor name.to_sym }
  end

  def self.new_from_row(row, klass = self)
    instance = klass.new(row)
    instance.instance_variable_set(:@id, row["id"])
    instance
  end

  def self.conditions_from_hash(attributes, delimeter)
    attributes.inject([]) { |acc, (k,_)| acc.push("#{k} = ?") }.join(delimeter)
  end

  private


  def mass_assign_attributes(attributes)
    attributes.each do |k, v|
      setter_method = "#{k}="
      if self.respond_to?(setter_method)
        self.send(setter_method, v)
      end
    end
  end

  def last_insert_row_id
    DB[:conn].execute("SELECT last_insert_rowid() FROM #{self.class.table_name}")[0][0]
  end

  def insert_record
    column_names = self.class.column_names.join(", ")
    values = self.class.column_names.map { |name| self.send(name.to_sym) }
    question_marks = values.map { |name| "?" }.join(", ")

    sql = <<-ANYTHING
      INSERT INTO #{self.class.table_name} (#{column_names})
      VALUES (#{question_marks})
    ANYTHING

    DB[:conn].execute(sql, *values)
    @id = self.send(:last_insert_row_id)
    self
  end

  def update_record
    values = self.class.column_names.map { |name| self.send(name.to_sym) }
    columns_and_values = self.class.column_names.zip(values)
    attributes = Hash[columns_and_values]
    conditions = self.class.conditions_from_hash(attributes, ", ")
    sql = "UPDATE #{self.class.table_name} SET #{conditions} WHERE id = ?"

    DB[:conn].execute(sql, *values, self.id)
    self
  end

  def delete_record
    sql = "DELETE FROM stations WHERE id = ?"

    DB[:conn].execute(sql, self.id)
    @id = nil
    self
  end
end
