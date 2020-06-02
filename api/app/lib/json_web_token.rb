class JsonWebToken
  # secret to encode and decode token
  HMAC_SECRET = Rails.env == 'test' ? 'aj3oiro23r92f93gd98y0970980931' : ENV['SECRET_KEY_BASE']

  def self.encode(payload, exp = 1.year.from_now)
    # set expiry to 24 hours from creation time
    payload[:exp] = exp.to_i
    # sign token with application secret
    JWT.encode(payload, HMAC_SECRET)
  end

  def self.decode(token)
    # get payload; first index in decoded Array
    body = JWT.decode(token, HMAC_SECRET, true, { algorithm: 'HS256' })[0]
    HashWithIndifferentAccess.new body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    raise ExceptionHandler::InvalidToken, e.message
  end
end
