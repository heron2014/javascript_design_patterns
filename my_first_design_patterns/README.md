## Folders step1 - step5 covers following: 

- The problem with the global scope - overuse global scope (step1)
  - build the fake chat application
  - use global scope freely
  - setting up project for the upcomng steps

  In this step we introduced the problem of overusing the global scope. ALl methods are public and all of them are accessible by the user.

  To solve that problem we will use two design patterns: **object literal design pattern** and **namespace pattern**.

- Moving to One Object and Namespace (step2)
  - move all the variables and functions into one object as its properties and methods, make sure to reference them properly (hint: usage of ```this```)
  - by creating an object we have reduced overuse of global scope but this pattern still introduce the risk of someone else using the same name for our object
  - creating a long name as namespace (com.mywebsitename.uk) for our object solves the risk problem but is it the right solution?

- The Module design pattern (step3)
  - create a real privacy control (enable public methods to the user and hides (private members) variables and echo method)
  - having a clear public API
  - true encapsulation 

  The problem with this pattern is that we treated private and public members differently by seperating them. That seperation added a bit of complexity to our code. Behind that complexity the private methods couldn't interact with public ones. 

  The goal for the next module is to improve that complexity and remove those problems.

- The Module Reveal pattern (step4)
  - limitation of Module Pattern introduced another pattern which is called Reveal Pattern 
  - Reveal Pattern is an upgraded version of Module Pattern
  - Reveal Pattern is more simplistic

  The problem with Reveal Pattern is that it's hard to recognise which members are private and which one are public. One of the solution is to name private members and methods slightly differently, for example add _ to your names.
  We solved problem regards communicating private methods with public (they can erasily interact with each other). We also exposed public methods in return statement. Also you can easily convert private method into public one, by only returning them in return statement, without need to do anything more. 
  Another good side of this pattern is that is a cleaner process, which means easier to maintain. 

  Problems with this pattern are:
  - in your exposed methods (in return statement) we don't have access to private members which means we can't override these methods once the document is completed

- Controlling the global access completetly (ste5)
  Steps to do:
   - make everything private(nothing is accesible in global scope)
   - by defining condition we will add elements to the global scope
   - send things from the global scope into this module

  To avoid global scope entirely we can wrap up our module in self a big self invoking function. 
  This way nothing is accesible outside, everything is private, well almost! We still have 2 global variables : document and JQuery.

  We can solve this problem by sending 3 object: window, document and jQuery into our module.
  But why are we adding window as well?

  - by sending window object we can create public API inside the window object. We will create property chatModule and assign it to our chatModule to the window object, this way we control what is accesible in global scope.

## Reference

- what is global scope
- what is namespace
- what is encapsulation