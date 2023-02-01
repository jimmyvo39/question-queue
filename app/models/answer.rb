class Answer < ApplicationRecord
  belongs_to :author_id
  belongs_to :question_id
end
