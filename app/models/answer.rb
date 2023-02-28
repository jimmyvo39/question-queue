class Answer < ApplicationRecord
  validates  :body, presence: true

  belongs_to :author,
  class_name: :User,
  primary_key: :id, 
  foreign_key: :author_id


  belongs_to :question,
  class_name: :Question,
  primary_key: :id, 
  foreign_key: :question_id,
  dependent: :destroy

  has_many :votes, as: :votable, 
  dependent: :destroy
end
