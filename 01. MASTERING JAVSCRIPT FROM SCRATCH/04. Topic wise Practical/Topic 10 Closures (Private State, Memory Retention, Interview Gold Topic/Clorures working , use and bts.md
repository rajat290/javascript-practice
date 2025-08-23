1. Use in Real Coding

Closures allow a function to "remember" variables from its outer scope even after that scope has finished executing.
They’re widely used for data privacy, callbacks, event handlers, and maintaining state in JavaScript apps.


Example:

Private variables (like class private fields).

Memoization (caching expensive function results).

Event listeners (preserve access to state).



2. Behind the Scenes

Every time a function is created, it carries a lexical environment (scope chain) along with it.

When the function executes later, it still has access to its outer scope variables even if the outer function is done.

This "backpack of variables" = Closure.

👉 A closure is formed when:

A function is defined inside another function,

The inner function references variables from the outer function.