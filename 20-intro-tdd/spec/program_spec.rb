require_relative "../program.rb"

describe "Palindrome.is_palindrome?" do
  # happy path tests

  it "should return true for 'racecar'" do
    expect(Palindrome.is_palindrome?('racecar')).to be(true)
  end

  it "should return false for 'hello'" do
    expect(Palindrome.is_palindrome?('hello')).to be(false)
  end

  it "should not care about whitespace" do
    expect(Palindrome.is_palindrome?('a man a plan a canal panama')).to be(true)
  end

  # tests with a bit more edgy cases, but are still happy

  it "should not care about capitalization" do
    expect(Palindrome.is_palindrome?('rAceCar')).to be(true)
    expect(Palindrome.is_palindrome?('Hello')).to be(false)
  end

  it "should not care about punctuation" do
    expect(Palindrome.is_palindrome?('a man a plan a canal, panama')).to be(true)
    expect(Palindrome.is_palindrome?('race!car')).to be(true)
    expect(Palindrome.is_palindrome?('hello, world')).to be(false)
  end

  it "should not care about special characters" do
    expect(Palindrome.is_palindrome?('råcecår')).to be(true)
  end

  it "should return true if given 1 character" do
    expect(Palindrome.is_palindrome?('a')).to be(true)
  end

  # sad path tests (tests that expect errors) & extreme edge cases

  it "should fail if passed an integer or boolean" do
    expect { Palindrome.is_palindrome?(1) }.to raise_error(ArgumentError)
    expect { Palindrome.is_palindrome?(true) }.to raise_error(ArgumentError)

  end

  it "should fail if passed an object or method" do
    expect { Palindrome.is_palindrome?(Object.new) }.to raise_error(ArgumentError)
    expect { Palindrome.is_palindrome?(Palindrome.is_palindrome?) }.to raise_error(ArgumentError)
  end

  it "should fail if passed an array or hash" do
    expect { Palindrome.is_palindrome?([]) }.to raise_error(ArgumentError)
    expect { Palindrome.is_palindrome?({}) }.to raise_error(ArgumentError)
  end

  it "should fail if passed self" do
    expect { Palindrome.is_palindrome?(self) }.to raise_error(ArgumentError)
  end

end

describe "factorial" do

  # happy path cases

  it "should return 24 if given 4" do
    expect(factorial(4)).to be(24)
  end

  it "should return 120 if given 5" do
    expect(factorial(5)).to be(120)
  end

  it "should return 1 if given 0" do
    expect(factorial(0)).to be(1)
  end

  # edge cases (some sad stuff here ;( )

  it "should return the correct value if given a complex expression" do
    expect(factorial(3*4)).to be(479001600)
  end

  it "should fail if given a sufficiently large number" do
    expect { factorial(4611686018427387903) }.to raise_error(ArgumentError)
  end

  it "should fail if given a negative number" do
    expect { factorial(-1) }.to raise_error(ArgumentError)
  end

  it "should fail if given a float" do
    expect { factorial(3.2) }.to raise_error(ArgumentError)
  end

  # more xtreme edge cases

  it "should fail if given nil" do
    expect { factorial(nil) }.to raise_error(ArgumentError)
  end

  it "should fail if given a boolean" do
    expect { factorial(true) }.to raise_error(ArgumentError)
  end

  it "should fail if given a string" do
    expect { factorial("3") }.to raise_error(ArgumentError)
  end
end
