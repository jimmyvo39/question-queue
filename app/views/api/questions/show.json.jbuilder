
json.question do
  json.partial! '/api/questions/question', question: @question
  json.votes @question.votes
  json.votes_count @question.votes.sum(:value)
end
 