class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :creator, :img_src

  has_many :ingredients
end
