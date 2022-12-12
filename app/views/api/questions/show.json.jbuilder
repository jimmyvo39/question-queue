
json.question do
  json.partial! '/api/questions/question', question: @question
end
