json.extract! question, :id, :author_id, :title, :body, :created_at, :updated_at
json.extract! question.author, :username
json.extract! question.answers
json.extract! question.votes