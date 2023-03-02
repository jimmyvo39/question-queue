class Api::VotesController < ApplicationController
  before_action :require_logged_in

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
      @vote.destroy
    else
      @vote.value = value
      @vote.save
    end

    render json: { votable_type: @votable.class.name, votable_id: @votable.id, value: @vote.value }
  end

  def find_votable
    if params[:answer_id]
      Answer.find(params[:answer_id])
    else
      Question.find(params[:question_id])
    end
  end
end
