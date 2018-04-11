require 'csv'
require_relative '../config/environment'

# Create the table
DB[:conn].execute("DROP TABLE IF EXISTS stations")
DB[:conn].execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS stations (
    id integer primary key,
    name text,
    line text,
    division text,
    latitude real,
    longitude real
  )
SQL

# Seed the database
CSV.foreach('db/stations.csv') do |row|
  unless row[0] == "id"
    DB[:conn].execute("INSERT INTO stations (id, name, line, division, latitude, longitude) VALUES (#{row[0]}, \"#{row[1]}\", \"#{row[2]}\", \"#{row[3]}\", #{row[4]}, #{row[5]})")
  end
end

# Create Routes table (create table) and seed the DB (insert into)
DB[:conn].execute("DROP TABLE IF EXISTS routes")
DB[:conn].execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS routes (
    id integer primary key,
    name text
  )
SQL

CSV.foreach('db/routes.csv') do |row|
  unless row[0] == "id"
    DB[:conn].execute("INSERT INTO routes (id, name) VALUES (#{row[0]}, \"#{row[1]}\")")
  end
end

# Create Stops table (create table) and tseed the DB (insert into)
DB[:conn].execute("DROP TABLE IF EXISTS stops")
DB[:conn].execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS stops (
    id integer primary key,
    route_id integer,
    station_id integer
  )
SQL

CSV.foreach('db/stops.csv') do |row|
  unless row[0] == "route_id"
    DB[:conn].execute("INSERT INTO stops (route_id, station_id) VALUES (#{row[0]}, #{row[1]})")
  end
end
