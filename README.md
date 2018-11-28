selectyish
- really simple select box chaining

```
var selectbox = createSelectBox({
	name: 'bibliography', // also used for id
    data: data, // expects an array of objects
    onchange: 'changeSelect(event)', // expects a function
    placeholder: 'Bibliography', // a blank option value placeholder
    template: fn // expects a function
})

```

#### `onchange` function
This function is the listener for the `onchange` event of the select box, and can therefore perform any operation, including creating additional select boxes. This module was originally created to chain selections.  That is when a user selects an option in one select box, and then another selectbox is created based on the first selection.  There is probably a more elegant way to do this.  

```
var changeSelect = function(event) {
	var secondSelectBox = createSelectBox({...});
}
```

#### Template
The template is the attribute name for the html containing the `option` tag.  `selectyish` requires the `template` attribute to be a function that returns a string. 

```
var template = function(data) {
	return '<option id="" name="" data-attribute="">'+data.name+'</option>';
}

```


#### Data
`selectyish` expects an array objects. can easily accomodate data-attributes, etc.

```
var data = [
	{name: 'this'}, { name: 'that'}
];

```

