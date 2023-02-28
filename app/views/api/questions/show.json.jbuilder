
json.question do
  json.partial! '/api/questions/question', question: @question
  json.votes_count @question.votes.sum(:value)
end
