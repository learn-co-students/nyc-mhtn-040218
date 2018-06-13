class ApplicationController < ActionController::API
  def get_secret
    ENV['JWT_SECRET']
  end

  def generate_token
    # We will make a token here!
    payload = {
      username: @user.username,
      id: @user.id
    }

    # IMPORTANT: set nil as password parameter
    JWT.encode payload, get_secret(), 'HS256'
  end

  def get_token
    request.headers["Authorization"]
  end

  def get_decoded_token
    token = get_token()
    begin
      decoded_token = JWT.decode token, get_secret(), true, { algorithm: 'HS256' }
      # Check decoded_token payload for expiration date.
    rescue JWT::DecodeError
      return nil
    end

    decoded_token
  end

  def is_authenticated?
    !!get_decoded_token
  end

  def requires_login
    if !is_authenticated?
      render json: {
        message: "No good"
      }, status: :unauthorized
    end
  end

  def requires_user_match
    @user = User.find_by(id: params[:user_id])
    # byebug
    if @user.id != get_decoded_token[0]["id"]
      render json: {
        message: "Not your snacks!!!!!! Treat yourself!"
      }, status: :unauthorized
    end
  end

end
