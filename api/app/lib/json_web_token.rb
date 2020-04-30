class JsonWebToken
    # secret to encode and decode token
    HMAC_SECRET = 'b964b6286b88027fec9caf9fe200d8ccb219549f255877e85f905da9790fad6bc483627beaef7eb37df3f80c3f38ae040c9988c3123d561e2c6fed4607503c12'#Rails.application.secrets.secret_key_base

    def self.encode(payload, exp = 1.year.from_now)
      # set expiry to 24 hours from creation time
      payload[:exp] = exp.to_i
      p [payload, HMAC_SECRET]
      # sign token with application secret
      JWT.encode(payload, HMAC_SECRET)
    end

    def self.decode(token)
      # get payload; first index in decoded Array
      body = JWT.decode(token, HMAC_SECRET, true, { algorithm: 'HS256' })[0]
      HashWithIndifferentAccess.new body
      # rescue from all decode errors
    rescue JWT::DecodeError => e
      # raise custom error to be handled by custom handler
      raise ExceptionHandler::InvalidToken, e.message
    end
  end