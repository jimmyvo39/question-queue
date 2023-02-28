class Vote < ApplicationRecord
  validates :value, inclusion: { in: [-1, 0, 1] }
  validates :user_id, uniqueness: { scope: [:votable_type, :votable_id] }

  belongs_to :user
  belongs_to :votable, polymorphic: true
end
