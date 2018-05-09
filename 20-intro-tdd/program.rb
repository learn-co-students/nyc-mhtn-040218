require 'pry'

class Palindrome
  def self.is_palindrome?(word)
    if (word.class != String)
      raise ArgumentError
    end

    test_word = word.gsub(' ', '').gsub(/[[:punct:]]/, '').downcase
    test_word == test_word.reverse
  end
end


# x! = x * (x-1) * (x-2) all the way to 1
# 4! = 4 * 3 * 2 * 1 = 24
# x! is just mathematical notation, i really mean factorial(x)
# or factorial(4)

def factorial(num)
  if num.class != Fixnum || num < 0 || num > 99999999999
    raise ArgumentError
  end

  total = 1
  1.upto(num) do |n|
    total *= n
  end
  total
end

def factorial_recursive(num)
  if num.class != Fixnum || num < 0 || num > 99999999999
    raise ArgumentError
  end

  if (num == 1 || num == 0)
    return 1
  end
  num * factorial(num-1)
end

# 3 * 2 * 1
