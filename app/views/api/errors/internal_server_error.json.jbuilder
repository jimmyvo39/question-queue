json.title 'Server Error'
json.message @message
json.stack @stack unless Rails.env.production?

console.log(error.stack),