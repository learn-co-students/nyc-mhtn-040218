Rails Forms and Validations
===========================

## Outline

### Rails Review!

- Create a new application in Rails
  - index, show, new, create, edit, update, destroy
  - what is `resources`? what is `only`?

### Intro to Forms

- `form_tag` vs `form_for`
- Mass Assignment
  - Strong Params
- Partials

### Intro to Validations

- Why Use Validations?
- Flash

### Explore Validations

- Time permitting, play around with all the validations.
- Custom validations.

## Objectives

- Discuss and Review Forms
- Mass Assignment
- Strong Params
- Validation: Checking information before creating
- Display errors using flash

## Lecture Notes

### Rails Review!

- Use our generators to make our Rails app.

```sh
# create new rails app
# what are we making?
rails new pet-store
cd pet-store
rails s
# cool, works!

# a store needs to sell stuff, right?
# what are we selling? how can we store it?
# http://guides.rubyonrails.org/command_line.html#rails-generate
# http://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-add_column
rails g model Product name stock:integer price:float
# rails g model Product name stock:integer price:float

# this is all we're going to need for this lesson
# so let's run migrate now
# note: this is rails 5, in your labs, you would probably be using rake
rails db:migrate
# now we can create some data
rails c
```

```ruby
# in rails console creating data...
Product.all
Product.create(name: 'cat', stock: 10, price: 0.99)
# alternatively
Product.new(name: 'dog', stock: 10, price: 1.99)
_.save
exit
```

- Building it from scratch and discuss `resources` helper.

```ruby
# we can't actually see anything yet though, so let's start making some routes
# pet-store > config > routes.rb
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :products, only: [:index]
  # get "/index" to: "ProductsController#index"

end

# pet-store > app > controllers > product_controller.rb
class ProductController > ApplicationController
  def index
    # what do we want to pass to our view?
    # - all drivers
    # so let's do:
    @products = Driver.all
    # since we're in rails and this is a basic route it supports
    # we don't need to do erb since rails knows what to do
  end
end
```

```html
<!-- pet-store > app > views > products > index.html.erb -->
<ul>
<% @products.each do |product| %>
  <li><%= product.name %> | <%= product.price %></li>
<% end %>
</ul>
```

```sh
# now to run and test
rails s
# if you get stuck on routes:
#   http://localhost:3000/rails/info/routes
```

- Keep on building. Next is `show`.

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :products, only: [:index, :show]

end

class ProductController > ApplicationController
  # ...

  def show
    @product = Product.find(params[:id])
  end
end
```

```html
<!--
  index.html.erb
  we can link to them now with this helper
-->
<ul>
<% @products.each do |product| %>
  <li><%= link_to product.name, product %> | <%= product.price %></li>
<% end %>
</ul>

<!-- show.html.erb -->
<h1><%= @product.name %></h1>

<h2><%= @product.stock %><h2>
<h2><%= @product.price %><h2>
```

- With `new` and `create`, we can get into forms.
  - http://guides.rubyonrails.org/form_helpers.html

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :products, only: [:index, :show, :new, :create]

end

class ProductController > ApplicationController
  # ...

  def new
    @product = Product.new
  end

  def create
    # use byebug here to demonstrate what we get on posting
    # byebug
      # TODO:
        # - http://guides.rubyonrails.org/v3.2.8/security.html#mass-assignment
        # notice the version
        # the old v3 way of handling security was through the model
        # we don't do that anymore
        # https://weblog.rubyonrails.org/2012/3/21/strong-parameters/
        # v4 has a new way of handling security for mass assignment called strong params
        # where it's handled through the controller
        # http://guides.rubyonrails.org/v5.0/action_controller_overview.html#strong-parameters
        # > With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been whitelisted.

      # individually is a lot of repetitive typing
      #  @product = Product.create(name: params[:product][:name], stock: params[:product][:stock], price: params[:product][:price])

      # straight up mass assignment will fail
      # @product = Product.create(params[:product])
      # *** ActiveModel::ForbiddenAttributesError Exception: ActiveModel::ForbiddenAttributesError
      # params will have something called permitted: false

      # here, we introduce strong params
      # params = params.require(:product).permit(:name, :stock, :price)
      # @product = Product.create(params)
    @product = Product.create(product_params)

    redirect_to @product
    # byebug
    # redirect_to product_path(@product)
    # app.products_path
    # app.product_path <== error
    # app.product_path(1)
    # app.product_path(Product.first)
  end

  private
  def product_params
    params.require(:product).permit(:name, :stock, :price)
  end
end
```

```html
<!--
  new.html.erb
  now we can introduce form_for
  who's heard of form_for and form_tag?
  what's the difference? why use which?
  form_for == form for a model object
  form_tag == just creates a form
  http://guides.rubyonrails.org/form_helpers.html
  https://stackoverflow.com/questions/14463946/form-for-and-form-tag-when-to-use-which-one
-->
<%= form_for @product do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.label :stock %>
  <%= f.text_field :stock %>
  <%= f.label :price %>
  <%= f.text_field :price %>
  <%= f.submit %>
<% end %>

<!-- the equivalent using form_tag


-->
```

- Awesome! We're almost done now.
- With `edit`, we can introduce [partials](http://guides.rubyonrails.org/layouts_and_rendering.html#using-partials).

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :products, only: [:index, :show, :new, :create, :edit, :update]

end

class ProductController > ApplicationController
  # ...

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    @product.update(product_params)

    redirect_to @product
  end

  # ...
end
```

```html
<!--
  edit.html.erb
-->
<%= form_for @product do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.label :stock %>
  <%= f.text_field :stock %>
  <%= f.label :price %>
  <%= f.text_field :price %>
  <%= f.submit %>
<% end %>

<!--
  looks the same, right?
  we want to be DRY
  rails helps us do that by giving us something called partials
  we can make a file (has to start with _) called:
    _form.html.erb
  then use it in other erb files like so
    new.html.erb
    edit.html.erb
-->
```

- Finally, we can implement `destroy` which will bring us fill circle and let us use `form_tag`.
  - http://guides.rubyonrails.org/form_helpers.html

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # resources :products, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  # but now that we have everything, we can just use the shorthand
  resources :products
end

class ProductsController < ApplicationController
  # ...

  def destroy
    Product.destroy(params[:id])
    redirect_to products_path
  end

  # ...
end
```

```html
<!--
  pick a place to put your delete button
  maybe in the edit screen
  edit.html.erb
-->
<%= render 'form' %>

<%= form_tag product_path(@product), method: 'DELETE' do %>
  <%= submit_tag('Delete Product') %>
<% end %>
<!--
  note how it's product_path and not products_path
  why?
-->
```

## Validations!

- We're going to introduce more magic in the form of validations.
- Users are... not very technically savvy.
- Some are even malicious.
- Then you have the QA folk who are out to break your app with tools like [Selenium](https://www.seleniumhq.org/).
- Possible validations:
  - http://edgeguides.rubyonrails.org/active_record_validations.html
- Flash messages
  - http://guides.rubyonrails.org/action_controller_overview.html#the-flash
  - redirect vs render
    - https://stackoverflow.com/questions/18748072/rails-4-flash-message-persists-for-the-next-page-view
  - The Flash will deliver the error messages like a superhero. Then run away.

```ruby
# pet-store > app > models > product.rb
class Product < ApplicationRecord
  validates :name, presence: :true
  validates :stock, numericality: { greater_than_or_equal_to: 0}
  validates :price, numericality: { greater_than_or_equal_to: 0}
end

# then back in our controllers, we can check if things are valid
def create
  # byebug
  @product = Product.create(product_params)

  # redirect_to @product
  if @product.valid?
    redirect_to @product
  else
    flash[:errors] = @product.errors.full_messages
    redirect_to new_product_path
  end
end

def update
  @product = Product.find(params[:id])
  @product.update(product_params)

  # redirect_to @product
  if @product.valid?
    redirect_to @product
  else
    flash[:errors] = @product.errors.full_messages
    redirect_to edit_product_path(@product)
  end
end
```

```html
<!--
  we can then display the flash messages like so
  edit.html.erb
  new.html.erb
  or
  in a partial like _errors.html.erb
-->
<% if flash[:errors] %>
  <ul>
  <% flash[:errors].each do |error| -%>
    <li><%= error %></li>
  <% end %>
  </ul>
<% end %>
```

## Explore Validations

- [Custom validations](http://edgeguides.rubyonrails.org/active_record_validations.html#performing-custom-validations) - You have a few options depending on what you want to do:
  1. Custom validators are classes that inherit from  `ActiveModel::Validator`.
    - must implement the `validate` method
    - called in the model using the `validates_with` method
  2. The easiest way to add custom validators for validating individual attributes is with the convenient `ActiveModel::EachValidator`.
    - must implement a `validate_each` method
    - validator name is inferred from the class name:
      - `EmailValidator` => Email Validator => Email => `email`
  3. You can also create methods that verify the state of your models and add messages to the `errors` collection when they are invalid.
    - must then register these methods by using the `validate` class method
- Example of using them all together:

```ruby
# your > app > models > model_name.rb
class MyValidator < ActiveModel::Validator
  def validate(record)
    unless record.name.starts_with? 'X'
      record.errors[:name] << 'needs a name starting with X please!'
    end
    # byebug
    unless record.stock && record.stock < 10
      record.errors[:stock] << 'needs to be greater than 10!'
    end
  end
end

# validator name is inferred from this name
# EmailValidator => Email Validator => Email => email
class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      record.errors[attribute] << (options[:message] || "is not an email")
    end
  end
end

class Product < ApplicationRecord
  include ActiveModel::Validations
  validates_with MyValidator

  validate :name_must_be_cool,
    :price_must_not_be_over_nine_thousand

  validates :name, presence: :true, email: true
  validates :stock, numericality: { greater_than_or_equal_to: 0}
  validates :price, numericality: { greater_than_or_equal_to: 0}

  def name_must_be_cool
    if name != 'Mike'
      errors.add(:name, "is not cool!")
    end
  end

  def price_must_not_be_over_nine_thousand
    if price < 9000
      errors.add(:price, "is over 9000!")
    end
  end
end
```
