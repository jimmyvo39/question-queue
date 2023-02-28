class Vote < ApplicationRecord
  validates :value, inclusion: { in: [-1, 1] }
  validates :user_id, uniqueness: { scope: [:votable_id, :votable_type] }

  belongs_to :user
  belongs_to :votable, polymorphic: true
end
