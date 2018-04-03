require 'rest-client'
require 'json'
require 'pry'

# def get_players
#   result = game_hash.values.map do |team_info|
#     team_info[:players]
#   end
#   result.flatten
#
#   # instead of
#   # game_hash[:home][:players] + game_hash[:away][:players]
# end


# response = RestClient.get 'https://www.reddit.com/.json'
# json = JSON.parse(response)


# We want to get all of the titles of all of the posts
# on reddit's front page

# def get_reddit_titles(reddit_json)
#   get_posts.map do |post|
#     post["data"]["title"]
#   end
# end
#
# def get_posts(reddit_json)
#   reddit_json["data"]["children"]
# end
#
# titles = get_reddit_titles(json)
#


def welcome
  puts "Welcome to my Book App"
end

def get_search_term
  puts "What kinds of books would you like to see?"
  gets.chomp
end

def make_search_and_parse_results(search_term)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  JSON.parse(response)
end

def get_books(json)
  json["items"].map do |book|
    book["volumeInfo"]
  end
end

def print_books(books)
  books.each do |book|
    print_one_book(book)
  end
end

def print_one_book(book)
  puts "Title: #{book["title"]}"
  puts "Authors: #{book["authors"]}"
  puts "Description: #{book["description"]}"
  puts "\n"
end

def run_app
  welcome
  input = get_search_term
  results = make_search_and_parse_results(input)
  books = get_books(results)
  print_books(books)
end

run_app
