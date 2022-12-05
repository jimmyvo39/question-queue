class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true

  validates :username, length: { in: 3..30 }
  validates :username, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  validates :email, length: { in: 3..255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  def generate_unique_session_token
    while true
      session_token = SecureRandom.urlsafe_base64
      return session_token if !User.exists?(session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token

  end

  def self.find_by_credentials(credential, password)

    if (credential.match( URI::MailTo::EMAIL_REGEXP ))
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end
    
    if user
      return user if user.authenticate(password)
    end
        
    false
    
  end

  def reset_session_token!

    self.session_token = generate_unique_session_token()
    save!
    session_token
  end
  
  has_secure_password
end
