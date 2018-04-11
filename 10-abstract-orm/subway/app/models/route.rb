class Route < GenericModel
  has_many :stops
  has_many :stations, through: :stops
end
