require "pry"

class App
  def self.call(environment_hash)
    # status_code = 200
    # header = {}
    # body = ['hello'] # or {}

    # binding.pry

    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    #binding.pry

    "/myhello"
    "/hello"
    "/rishi"
    if req.path.match(/myhello/)
      resp.write("THIS IS YOUR HELLO")
    elsif req.path.match(/hello/)
      resp.write("HELLO WORLD")
    elsif req.path == "/"
      resp.write("WELCOME HOME")
    else
      resp.write("404 YA DUN GOOFED")
      resp.status = 404
    end

    resp.finish

    # return [status_code, header, body]
  end
end
