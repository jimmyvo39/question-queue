json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
  json.votes_count @question.votes.sum(:value)
end