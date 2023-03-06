
json.answer do
  json.partial! '/api/answers/answer', answer: @answer
  json.votes @answer.votes
  json.votes_count @asnwer.votes.sum(:value)
end
