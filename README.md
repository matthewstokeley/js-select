js-select

- selectbox chaining
- option templating

```
const selectbox = createSelectBox ({
    name: 'bibliography', // also used for id
    data: data, // expects an array of objects
    onchange: 'changeSelect(event)', // expects a function
    placeholder: 'Bibliography', // a blank option value placeholder
    template: fn // expects a function
})

```

#### Options Documentation
Detailed information about option properties.

`onchange`  
Function  

This function is the listener for the `onchange` event of the select box, and can therefore perform any operation, including creating additional select boxes. This module was originally created to chain selections.  That is when a user selects an option in one select box, and then another selectbox is created based on the first selection.  There is probably a more elegant way to do this.  

```
const changeSelect = (event) => createSelectBox({ ... })

```

---

`template`  
Function  

The template is the attribute name for a function that returns html containing the `option` tag. 

```
const template = (data) => '<option id="" name="" data-attribute="">${data.name}</option>'

```
---

`data`  
Array  

`js-select` expects an array of objects. can easily accomodate data-attributes, etc.

```
const data = [
	{name: 'this'}, { name: 'that'}
]

---



```

