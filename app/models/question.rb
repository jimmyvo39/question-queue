# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
  
  validates :title, :body, presence: true

  belongs_to :author,
  class_name: :User,
  primary_key: :id, 
  foreign_key: :author_id


  has_many :answers,
  class_name: :Answer,
  primary_key: :id,
  foreign_key: :question_id,
  dependent: :destroy

  has_many :votes, as: :votable, 
  dependent: :destroy

  

end
