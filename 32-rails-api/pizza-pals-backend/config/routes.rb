Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pizzas, only: [:index, :create]
      resources :ingredients, only: [:index, :create]
      resources :pizza_ingredients, only: [:index, :create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
