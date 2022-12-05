# Load the Rails application.
require_relative "application"

# reformat case
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true

# Initialize the Rails application.
Rails.application.initialize!
