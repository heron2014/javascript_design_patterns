## Folders step1 - step5 cover following: 

- The problem with the global scope - overuse global scope (step1)
  - build the fake chat application
  - use global scope freely
  - setting up project for the upcomng steps

  In this step we introduced the problem of overusing the global scope. ALl methods are public and all of them are accessible by the user.

  To solve that problem we will use two design patterns: **object literal design pattern** and **namespace pattern**.

- Moving to One Object and Namespace (step2)
  - move all the variables and functions into one object (example : o = {}) as its properties and methods, make sure to reference them properly (hint: usage of ```this```)
  - by creating an object we have reduced overuse of global scope but this pattern still introduce the risk of someone else using the same name for our object
  - creating a long name as namespace (com.mywebsitename.uk) for our object solves the risk problem but is it the right solution?

- The Module design pattern (step3)
  - create a real privacy control (enable public methods to the user and hide (make it private members) variables and echo method)
  - having a clear public API
  - true encapsulation 

  The problem with this pattern is that we treated private and public members differently by seperating them and adding extra complexity (explain what complexity)

- The Module Reveal pattern (step4 - coming soon)
  - limitation of Module Pattern introduced another pattern which is called Reveal Pattern 
  - upgraded version of Module Pattern from step3

- Controlling the global access completetly (ste5 - coming soon)


## Reference

- what is global scope
- what is namespace
- what is encapsulation