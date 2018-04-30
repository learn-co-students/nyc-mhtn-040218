class MyValidator < ActiveModel::Validator
  def validate(record)
    unless record.name.starts_with? 'X'
      record.errors[:name] << 'Need a name starting with X please!'
    end

    unless record.fluffiness
      record.errors[:fluffiness] << 'fluffy error'
      # byebug
    end
  end
end


class BeanieBaby < ApplicationRecord
  include ActiveModel::Validations
  validates_with MyValidator

  validates :price, numericality: { greater_than: 0 }
  validates :rarity, numericality: { greater_than: 0 }
end

# model
# - name, price, rarity, fluffiness
#   - validate
#   - on failure, put in errors
# controller
# - .valid? tells us if it failed
#   - if it did, there are errors inside .errors
#   - to get human readable messages, we used .errors.full_messages
#   - we then use that and put those error messages in flash
# view
# - we can check flash for errors to print
