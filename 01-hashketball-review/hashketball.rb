require 'pry'

#rspec runs all tests
#rspec --fail-fast ends on the first failure
#rspec path/to/file:line_number runs one specific test

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

# hash = {:1 => 1, :2 => 2}
# hash.fetch(:1)
# hash[:1] THESE ARE THE SAME

def num_points_scored(player_name)
  # find the player whose name matches the argument 'player_name'
  player = find_player(player_name)
  # return that player's points
  player[:points]
end

def num_assists(player_name)
  player = find_player(player_name)
  player[:assists]
end

def find_player(player_name)
  # get a list of all the players
  # the block in find, must return a condition, or boolean
  get_all_players.find do |player|
    player[:player_name] == player_name
  end
end

def get_all_players
  # using each, to go through each element of game_hash, where
  # an individual element represents a team
  all_players = []
  game_hash.each do |team_name, team_data|
    all_players += team_data[:players]
  end
  all_players
end



# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Rishi', hometown: 'North Brunswick, NJ', age: 10},
  {name: 'Natalie', hometown: 'Bogota, NJ', age: 15},
  {name: 'Humzah', hometown: 'Edmond, OK', age: 25},
  {name: 'Paul', hometown: 'Mahwah, NJ', age: 26}
]


# MAP is great for modifying a series of instances that you
# want to transform in some way. When you use map, you
# have the same number of instances, but each of them can
# change based on what you do in the your block

def get_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end
end

# SELECT is great for "picking out" or "selecting" instances
# that fit certain criteria. Just like find, the block in
# our select must return a condition or a boolean, or at least
# evaluate to a boolean. Select returns instances that have the
# exact same value and structure as the original array, but
# will return less than or the same number of instances

def instructors_who_can_drink_legally(instructors)
  instructors.select do |instructor|
    instructor[:age] >= 21
  end
end

def instructor_names_who_can_drink_legally(instructors)
  relevant_instructors = instructors_who_can_drink_legally(instructors)
  get_names(relevant_instructors)
end





# # EXERCISE
# # What do the following return?
#
# arr = (1..100).to_a
#
# arr.map do |num|
#   num.even?
# end
#
# arr.select do |num|
#   7
# end
