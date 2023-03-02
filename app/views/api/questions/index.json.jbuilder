
@questions.each do |question|
  json.set! question.id do
    json.partial! 'api/questions/question', question: question
    json.votes_count question.votes.sum(:value)
    json.answer_count question.answers.length
  end
end

