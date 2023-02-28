class VotesController < ApplicationController
  before_action :require_login

  def upvote
    vote(1)
  end

  def downvote
    vote(-1)
  end

  private

  def vote(value)
    @votable = find_votable
    @vote = @votable.votes.find_or_initialize_by(user_id: current_user.id)

    if @vote.value == value
      # User is neutralizing their vote.
      # to preserve space vote is destroyed from the table rather than updating with a 0 value.
      @vote.destroy
    else
      # User is changing their vote or voting for the first time
      @vote.value = value
      @vote.save
    end

    redirect_to question_path(@votable)
  end

  def find_votable
    if params[:answer_id]
      Answer.find(params[:answer_id])
    else
      Question.find(params[:question_id])
    end
  end
end
