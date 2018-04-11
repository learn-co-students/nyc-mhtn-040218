# load gems
require 'pry'
require 'sqlite3'

# creating a database connection that will
# shared with my models below
DB = {}
DB[:conn] = SQLite3::Database.new('db/subway.db')
DB[:conn].results_as_hash = true

# loading my application code
require_relative '../app/helpers/generic_model.rb'
require_relative '../app/models/route.rb'
require_relative '../app/models/station.rb'
require_relative '../app/models/stop.rb'
