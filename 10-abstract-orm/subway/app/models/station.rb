class Station < GenericModel
  has_many :stops
  has_many :routes, through: :stops
end
