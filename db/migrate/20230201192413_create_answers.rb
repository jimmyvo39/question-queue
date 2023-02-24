class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.text :body, null:false
      t.bigint :author_id, null: false, foreign_key: true
      t.bigint :question_id, null: false, foreign_key: true

      t.timestamps
    end
    add_index :answers, :author_id
    add_index :answers, :question_id
    add_foreign_key :answers, :users, column: :author_id, primary_key: :id
    add_foreign_key :answers, :questions, column: :question_id, primary_key: :id
  end
end
