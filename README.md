# fp_ideaBox

### Looking through your code, [where] were you able to:
### Make use of Pure Functions?
  I think my createCards fn will return the same output if the same inputs are used. Maybe my delete idea fn too???
### Make use of Higher Order Functions?
  The render and the create cards functions take a function as an arg.
### Make use of Closures?
  My anonymous function for the submit button on the form is a closure - still not sure about the  benefit. I think that data scoped locally to the closure is at least as susceptible to leakage   as the data outside the closure.
### Make use of Curried Functions?
  N/A - that said, I see some places where this makes sense in a refactor. 
### Make use of Composition?
  N/A
### How did you go about creating your data model? Where is it in your code?
  my data model is one array set globally - and then the property values assigned to each new idea object. all the necessary data is stored in the array though.
### How well were you able to separate your data model from the DOM logic? Where is that separation in the code?
  We'll see - I think I established a data then DOM flow, but there are some (maybe many) places where that distinction is blurry
