# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true

  validates :username, length: { in: 3..30 }
  validates :username, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  validates :email, length: { in: 3..255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message:  "email invalid"  }

  validates :password, length: { in: 8..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :questions,
  class_name: :Question,
  primary_key: :id,
  foreign_key: :author_id

  has_many :answers,
  class_name: :Answer,
  primary_key: :id,
  foreign_key: :author_id

  has_many :votes,
  class_name: :Vote,
  primary_key: :id,
  foreign_key: :user_id



  
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
  
  private   
  
  def generate_unique_session_token
    while true
      session_token = SecureRandom.urlsafe_base64
      return session_token if !User.exists?(session_token)
    end
  end
  
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  
end
