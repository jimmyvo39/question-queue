
json.answer do
  json.partial! '/api/answers/answer', answer: @answer
  json.votes_count @asnwer.votes.sum(:value)
end
