
json.answer do
  json.partial! '/api/answers/answer', answer: @answer
  json.votes_count @answer.votes.sum(:value)
end
