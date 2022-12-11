ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Question.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one demo user with an easy to remember username, email, and password:
  # seed username with matching email name
  User.create!(username: 'Demo-lition', email: 'demo@user.io', password: 'password') #1
  User.create!(username: 'not_a_seed', email: 'not_a_seed@user.io', password: 'password') #2
  User.create!(username: 'need4seed', email: 'need4seed@user.io', password: 'password') #3
  User.create!(username: 'seedOfLight', email: 'seedOfLight@user.io', password: 'password') #4
  User.create!(username: 'robot', email: 'robot@user.io', password: 'password') #5
  User.create!(username: 'lurker', email: 'lurker@user.io', password: 'password') #6
  User.create!(username: 'hireMe', email: 'hireMe@user.io', password: 'password') #7
  User.create!(username: 'kweshen', email: 'kweshen@user.io', password: 'password') #8
  User.create!(username: 'redditRep', email: 'redditRep@user.io', password: 'password') #9
  User.create!(username: 'googleRep', email: 'googleRep@user.io', password: 'password') #10
  User.create!(username: 'sirjimmyvo', email: 'sirjimmyvo@user.io', password: 'password') #11
  User.create!(username: 'seedAccount', email: 'seedAccount@user.io', password: 'password') #12
  User.create!(username: 'answerMePlz', email: 'answerMePlz@user.io', password: 'password') #13
  User.create!(username: 'notABot', email: 'notABot@user.io', password: 'password') #14
  User.create!(username: 'bananna', email: 'bananna@user.io', password: 'password') #15
  User.create!(username: 'filler', email: 'filler@user.io', password: 'password') #16
  User.create!(username: 'fakeAcct', email: 'fakeAcct@user.io', password: 'password') #17
  User.create!(username: 'forgot_my_pw', email: 'forgot_my_pw@user.io', password: 'password') #18
  User.create!(username: 'here4answrs', email: 'here4answrs@user.io', password: 'password') #19
  User.create!(username: 'code4life', email: 'code4life@user.io', password: 'password') #20
  User.create!(username: 'binary', email: 'binary@user.io', password: 'password') #21
  User.create!(username: 'thxFaker', email: 'thxFaker@user.io', password: 'password') #22
  User.create!(username: 'verified', email: 'verified@user.io', password: 'password') #23
  User.create!(username: 'notABot10', email: 'notABot@10user.io', password: 'password') #24
  User.create!(username: 'user25', email: 'user25@user.io', password: 'password') #25
  User.create!(username: 'madeByJimmy', email: 'madeByJimmy@user.io', password: 'password') #26
  User.create!(username: 'testaccount', email: 'testaccount@user.io', password: 'password') #27
  User.create!(username: 'pwNOTpassword', email: 'pwNOTpassword@user.io', password: 'password') #28
  User.create!(username: 'Bcreative', email: 'Bcreative@user.io', password: 'password') #29
  User.create!(username: 'Ruby', email: 'Ruby@user.io', password: 'password') #30
  User.create!(username: 'javascript', email: 'javascript@user.io', password: 'password') #31
  User.create!(username: 'anon', email: 'anon@user.io', password: 'password') #32
  User.create!(username: 'S_Jobs', email: 'S_Jobs@user.io', password: 'password') #33
  User.create!(username: 'William_Gates', email: 'William_Gates@user.io', password: 'password') #34
  User.create!(username: 'User123', email: 'User123@user.io', password: 'password') #35
  User.create!(username: 'email', email: 'email@user.io', password: 'password') #36
  User.create!(username: 'Mac', email: 'Mac@user.io', password: 'password') #37
  User.create!(username: 'HTML', email: 'HTML@user.io', password: 'password') #38
  User.create!(username: 'aA_student', email: 'aA_student@user.io', password: 'password') #39
  User.create!(username: 'notStackOverflow', email: 'notStackOverflow@user.io', password: 'password') #40
  User.create!(username: 'handSeeded', email: 'handSeeded@user.io', password: 'password') #41
  User.create!(username: 'faker', email: 'faker@user.io', password: 'password') #42
  User.create!(username: 'madeUp', email: 'madeUp@user.io', password: 'password') #43
  User.create!(username: 'replace', email: 'replace@user.io', password: 'password') #44
  User.create!(username: 'helpPlz', email: 'helpPlz@user.io', password: 'password') #45
  User.create!(username: 'iGOTanswers', email: 'iGOTanswers@user.io', password: 'password') #46
  User.create!(username: 'turkey', email: 'turkey@user.io', password: 'password') #47
  User.create!(username: 'taken', email: 'taken@user.io', password: 'password') #48
  User.create!(username: 'ready4work', email: 'ready4work@user.io', password: 'password') #49

  puts "Users seeded, creating questions..."

  Question.create!(title:'is quicksort the best?', body:'does quicksort work for every scenario?', author_id:3)
  Question.create!(title:'Sample state? ', body: 'how do i write a sample state?', author_id: 1)
  Question.create!(title:'replace letter in javascript', body: 'i have a string, how do i replace the letter i with the number 1', author_id: 2)
  Question.create!(title:'why stackover flow', body: "i'm usually on reddit why do people asked their questions here?", author_id: 40)
  Question.create!(title:'array vs objects', body: 'arrays are easier to type, why use object', author_id: 5)
  Question.create!(title:'reverse "rm -rf /" command', body: 'currently on my phone and i cant seem to reverse this command on my linux', author_id: 34)
  Question.create!(title:'potassium intake', body: 'how much potasium should a adult consume?', author_id:15)
  Question.create!(title:'How do I undo the most recent local commits in Git?', body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet.", author_id:43)
  Question.create!(title:"How do I undo 'git add' before commit?", body: "I mistakenly added files to Git using the command: git add myfile.txt I have not yet run git commit. How do I undo this so that these changes will not be included in the commit?", author_id:27)
  Question.create!(title:'How do I check if an element is hidden in jQuery?', body: 'How do I toggle the visibility of an element using .hide(), .show(), or .toggle()? How do I test if an element is visible or hidden?', author_id:10)
  Question.create!(title:'mac vs pc', body: 'which is better for coding?', author_id:35)
  Question.create!(title:'dot notation vs  bracket', body: 'when should i use brackets or dots when keying into an object?', author_id:21)
  Question.create!(title:'what is OOP', body: 'what is object oriented programming?', author_id:5)
  Question.create!(title:'update homebrew', body: 'how do i update homebrew through my terminal?', author_id:1)
  Question.create!(title:'npm vs yarn', body: 'which  package manager is prefered?', author_id:3)
  Question.create!(title:'Single Quotes or Double Quotes?', body: 'should i stick with single quotes when writing javascript?', author_id:5)
  Question.create!(title:'Super', body: 'what does super mean in Ruby?', author_id:4)
  Question.create!(title:'event listener for key press', body: 'how do i trigger an action when the space bar is pressed', author_id:4)
  Question.create!(title:'how to use RubyGems', body: 'i added to my gemfile but the commands arent working', author_id:4)
  Question.create!(title:'backend vs frontend vs fullstack', body: 'what are the difference between these titles?', author_id:5)
  Question.create!(title:'How do I remove local (untracked) files from the current Git working tree?', body: 'How do I delete untracked local files from the current working tree?', author_id:36)
  Question.create!(title:'How do I redirect to another webpage?', body: 'How can I redirect the user from one page to another using jQuery or pure JavaScript?', author_id:39)
  Question.create!(title:'a tag vs Link in React.js', body: 'which tag should i use?', author_id:39)
  Question.create!(title:'Does Python have a ternary conditional operator?', body: 'Is there a ternary conditional operator in Python?', author_id:33)
  Question.create!(title:"What is the difference between 'git pull' and 'git fetch?'", body: 'What are the differences between git pull and git fetch?', author_id:22)
  Question.create!(title:'whats the difference between == and ===?', body: 'when should i use triple = in javascript?', author_id:21)
  Question.create!(title:'Loop over an array in JavaScript', body: 'How can I loop through all the entries in an array using JavaScript?', author_id:25)
  Question.create!(title:'for  vs while loop', body: 'i write most loops as for loops, when should i use while loops?', author_id:29)
  Question.create!(title:'validate password in rails', body: 'how do i make sure passwords are atleast 8 character long and include a number', author_id:19)
  Question.create!(title:'"Big O" notation?', body: 'what does it mean when i write my functions', author_id:18)
  Question.create!(title:'How can I horizontally center an element?', body: 'How can I horizontally center a <div> within another <div> using CSS? <div id="outer"> <div id="inner">Foo foo</div> </div>', author_id:17)
  Question.create!(title:'nil vs null vs undefined', body: 'what are the diffrence?', author_id:30)
  Question.create!(title:'how do i know if an element is an array?', body: 'if i iterate over an array of different element types, how do i know if that element is an array', author_id:23)
  Question.create!(title:'recursion', body: 'can most problems be solved without recursion?', author_id:23)
  Question.create!(title:'how do i keep the header on the top of the view portal?', body: 'how do i use CSS to makesure my navigation bar stays on top even when i scroll down?', author_id:23)
  Question.create!(title:'What is RESTful programming?', body: 'What is RESTful programming?', author_id:11)
  Question.create!(title:'padding vs margin', body: 'whats the difference?', author_id:6)
  #
  Question.create!(title:'What is the difference between a process and a thread in computer science?', body: 'What is the difference between a process and a thread in computer science?', author_id: 23)
  Question.create!(title:'What is the purpose of a database index, and how does it improve query performance?', body: 'What is the purpose of a database index, and how does it improve query performance?', author_id: 17)
  Question.create!(title:'How does data encryption work and what are some common algorithms used for it?', body: 'How does data encryption work and what are some common algorithms used for it?', author_id: 41)
  Question.create!(title:'What is the difference between a stack and a queue, and when is each one used?', body: 'What is the difference between a stack and a queue, and when is each one used?', author_id: 12)
  Question.create!(title:'What is the difference between a recursive and an iterative algorithm, and when is each one appropriate to use?', body: 'What is the difference between a recursive and an iterative algorithm, and when is each one appropriate to use?', author_id: 49)
  Question.create!(title:'What is the difference between a high-level programming language and a low-level programming language?', body: 'What is the difference between a high-level programming language and a low-level programming language?', author_id: 34)
  Question.create!(title:'How does a stack data structure work and when is it used?', body: 'How does a stack data structure work and when is it used?', author_id: 29)
  Question.create!(title:'What is the purpose of a hash table in computer science?', body: 'What is the purpose of a hash table in computer science?', author_id: 3)
  Question.create!(title:'How does a search algorithm such as binary search work, and when is it most effective?', body: 'How does a search algorithm such as binary search work, and when is it most effective?', author_id: 28)
  Question.create!(title:'What is the difference between a static and a dynamic programming language, and when is each one used?', body: 'What is the difference between a static and a dynamic programming language, and when is each one used?', author_id: 19)
  Question.create!(title:'What is the purpose of a computers operating system and how does it manage the hardware and software of a computer?', body: 'What is the purpose of a computers operating system and how does it manage the hardware and software of a computer?', author_id: 22)
  Question.create!(title:'What is the difference between a compiler and an interpreter, and when is each one used?', body: 'What is the difference between a compiler and an interpreter, and when is each one used?', author_id: 41)
  Question.create!(title:'What is a software design pattern and how do they help in software development?', body: 'What is a software design pattern and how do they help in software development?', author_id: 37)
  Question.create!(title:'What is the difference between a memory leak and a buffer overflow, and how can they be prevented?', body: 'What is the difference between a memory leak and a buffer overflow, and how can they be prevented?', author_id: 17)
  Question.create!(title:'What is the difference between a heap and a stack in computer science, and when is each one used?', body: 'What is the difference between a heap and a stack in computer science, and when is each one used?', author_id: 15)
  Question.create!(title:'What is the difference between artificial intelligence and machine learning?', body: 'What is the difference between artificial intelligence and machine learning?', author_id: 23)
  Question.create!(title:'What are the main differences between a client and a server in computer networking?', body: 'What are the main differences between a client and a server in computer networking?', author_id: 31)
  Question.create!(title:'What are some common uses of hash functions, and how do they work?', body: 'What are some common uses of hash functions, and how do they work?', author_id: 4)
  Question.create!(title:'What is the difference between a process and a thread in computer science?', body: 'What is the difference between a process and a thread in computer science?', author_id: 19)
  Question.create!(title:'What is the purpose of a database index, and how does it improve query performance?', body: 'What is the purpose of a database index, and how does it improve query performance?', author_id: 3)
  Question.create!(title:'How does data encryption work and what are some common algorithms used for it?', body: 'How does data encryption work and what are some common algorithms used for it?', author_id: 17)
  Question.create!(title:'What is the difference between a stack and a queue, and when is each one used?', body: 'What is the difference between a stack and a queue, and when is each one used?', author_id: 12)
  Question.create!(title:'What is the difference between a recursive and an iterative algorithm, and when is each one appropriate to use?', body: 'What is the difference between a recursive and an iterative algorithm, and when is each one appropriate to use?', author_id: 4)
  Question.create!(title:'What is the difference between a high-level programming language and a low-level programming language?', body: 'What is the difference between a high-level programming language and a low-level programming language?', author_id: 29)
  Question.create!(title:'How does a stack data structure work and when is it used?', body: 'How does a stack data structure work and when is it used?', author_id: 25)
  Question.create!(title:'What is the purpose of a hash table in computer science?', body: 'What is the purpose of a hash table in computer science?', author_id: 37)
  Question.create!(title:'How does a search algorithm such as binary search work, and when is it most effective?', body: 'How does a search algorithm such as binary search work, and when is it most effective?', author_id: 22)
  Question.create!(title:'What is the difference between a static and a dynamic programming language, and when is each one used?', body: 'What is the difference between a static and a dynamic programming language, and when is each one used?', author_id: 39)
  Question.create!(title:'What is Ruby on Rails and what are some key features of this web development framework?', body: 'What is Ruby on Rails and what are some key features of this web development framework?', author_id: 28)
  Question.create!(title:'How does the MVC (Model-View-Controller) pattern work in Ruby on Rails, and what are its benefits?', body: 'How does the MVC (Model-View-Controller) pattern work in Ruby on Rails, and what are its benefits?', author_id: 31)
  Question.create!(title:'What is Ruby on Rails and what are some key features of this web development framework?', body: 'What is Ruby on Rails and what are some key features of this web development framework?', author_id: 28)
  Question.create!(title:'How does the MVC (Model-View-Controller) pattern work in Ruby on Rails, and what are its benefits?', body: 'How does the MVC (Model-View-Controller) pattern work in Ruby on Rails, and what are its benefits?', author_id: 31)
  Question.create!(title:'What are some common gems used in Ruby on Rails development, and what are their purposes?', body: 'What are some common gems used in Ruby on Rails development, and what are their purposes?', author_id: 4)
  Question.create!(title:'What is ActiveRecord in Ruby on Rails and how is it used for object-relational mapping?', body: 'What is ActiveRecord in Ruby on Rails and how is it used for object-relational mapping?', author_id: 12)
  Question.create!(title:'What is JavaScript and what are some of its key features?', body: 'What is JavaScript and what are some of its key features?', author_id: 34)
  Question.create!(title:'What is the difference between var, let, and const in JavaScript?', body: 'What is the difference between var, let, and const in JavaScript?', author_id: 29)
  Question.create!(title:'What is a JavaScript object and how is it used in a web application?', body: 'What is a JavaScript object and how is it used in a web application?', author_id: 3)
  Question.create!(title:'What is an event listener in JavaScript and how is it used?', body: 'What is an event listener in JavaScript and how is it used?', author_id: 28)
  Question.create!(title:'What is a closure in JavaScript and how is it used?', body: 'What is a closure in JavaScript and how is it used?', author_id: 19)
  Question.create!(title:'What is the purpose of a callback function in JavaScript, and how is it used?', body: 'What is the purpose of a callback function in JavaScript, and how is it used?', author_id: 22)
  Question.create!(title:'What is the difference between a synchronous and an asynchronous function in JavaScript?', body: 'What is the difference between a synchronous and an asynchronous function in JavaScript?', author_id: 41)
  Question.create!(title:'What is a prototype in JavaScript, and how is it used for inheritance?', body: 'What is a prototype in JavaScript, and how is it used for inheritance?', author_id: 37)
  Question.create!(title:'What is the difference between == and === in JavaScript?', body: 'What is the difference between == and === in JavaScript?', author_id: 17)
  Question.create!(title:'What is a regular expression in JavaScript, and how is it used for pattern matching?', body: 'What is a regular expression in JavaScript, and how is it used for pattern matching?', author_id: 15)
  Question.create!(title:'What is C++ and what are some of its key features?', body: 'What is C++ and what are some of its key features?', author_id: 23)
  Question.create!(title:'What is the difference between a reference and a pointer in C++, and when is each one used?', body: 'What is the difference between a reference and a pointer in C++, and when is each one used?', author_id: 31)
  Question.create!(title:'What are some common C++ data types, and how are they used in a program?', body: 'What are some common C++ data types, and how are they used in a program?', author_id: 4)
  Question.create!(title:'What is the difference between a class and an object in C++, and how are they used to model real-world entities?', body: 'What is the difference between a class and an object in C++, and how are they used to model real-world entities?', author_id: 12)
  Question.create!(title:'What is polymorphism in C++, and how is it implemented using virtual functions and function overriding?', body: 'What is polymorphism in C++, and how is it implemented using virtual functions and function overriding?', author_id: 10)


  puts "Done!"
end