# boilerplateGenerator
This is an way to generate boilerplate based on templates

Syntax: 
templates: a map of strings that each represent a template. The entry point is a 'hardcoded' template called main that you have to supply
params: a map of either simple values or objects. Passing in an object will recursively call the fillTemplate function with the object value as the params input, and the template id as the new template

