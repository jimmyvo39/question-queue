class CreateVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :votes do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :value, null: false
      t.references :votable, polymorphic: true, null: false
      t.timestamps

      t.index [:user_id, :votable_id, :votable_type], unique: true
    end
  end
end