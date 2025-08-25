A promise represents a value that may be availble now, later or never 
it is used to handle async operations ( Api calls, files read. databaseQueries)  cleanly without falling into ocallback hell
Gives us .then(), .catch(), and .finally() to manage async flow 

Behind the Scenes

A Promise can be in 3 states:

pending → operation running

fulfilled → resolved with a value (resolve)

rejected → failed with an error (reject)

JavaScript executes synchronous code first; when a promise resolves/rejects, its callback is pushed into the Microtask Queue, which executes before the Callback Queue.

That’s why Promises are faster than setTimeout in execution order.