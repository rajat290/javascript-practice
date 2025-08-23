bar ();
var bar = function() {
  console.log("Hello from bar");
};

// at this point Output will be : TypeError: bar is not a function
// Because var bar is hoisted & initialized with undefined. So calling undefined as function will throw TypeError.