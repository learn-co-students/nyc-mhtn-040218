## Auth In Rails

### Initial Questions
###### What is the difference between sign-in and sign up?

###### What is authentication?

###### What is the difference between Authentication and Authorization?

###### How do passwords work?
[http://i.imgur.com/s5CyFVb.gifv]()

###### What is the difference between hashing and encrypting? What is a salt?

### The `bcrypt` gem
`has_secure_password`
`password_digest`
`password_confirmation`

### CRUD for User

### Sessions & Cookies

```ruby
get "signup", to: "users#new", as: "signup"
get "login", to: "sessions#new", as: "login"
post "sessions", to: "sessions#create", as: "sessions"
```




### Authorization

https://i.imgur.com/bYiIN56.jpg

```
session[:user_id] = @user.id
```

`application_controller.rb`
```ruby
helper_method :logged_in?

def current_user
  if session[:user_id]
    @user = User.find_by(id: session[:user_id])
  else
  end
end

def logged_in?
  !!current_user
end

# Do this later

def authorized
  redirect_to login_path unless logged_in?
end
```

```ruby
skip_before_action :authorized, only: [:new, :create]
```

### Log Out
