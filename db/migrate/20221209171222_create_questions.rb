class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.bigint :author_id, null: false, foreign_key: true


      t.timestamps
    end
    add_index :questions, :author_id
    add_foreign_key :questions , :users, column: :author_id, primary_key: :id
  end
end
