
@answers.each do |answer|
  json.set! answer.id do
    json.partial! 'api/answers/answer', answer: answer
    json.votes_count answer.votes.sum(:value)
    json.votes answer.votes
    
  end
end

