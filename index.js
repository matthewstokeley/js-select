/**
  * @version  0.2.1
  * @param    {Object} 
  * @returns  {}
  */
var Select = function(options) {

    if (!options || typeof options !== 'object') {
        throw new Error('Invalid Argument Type')
    }
 
    let selectbox = this.createSelectBoxFragment(
     {
        name: options.name,
        fn: option.fn
     }
    )
 
    return selectbox;
};

/**
 * 
 * @todo  refactor
 * @param  {String}       name 
 * @param  {Function}     fn  
 * @return {Node}              
 */
Select.prototype.createSelectBoxFragment = (name, fn) => {
    var fragment = document.createElement('div')
    fragment.innerHTML = `<select id="#{$name}" name="#{$name}" onchange="#{$fn}"></select>`
    // @todo weird hack
    return fragment.children[0]
}

/**
 * @todo test and remove mapping function
 * @param  {Array}     data
 * @param  {Node}      selectbox
 * @param  {Function}  template
 * @return {Node} 
 */
Select.prototype.appendOptions = (data, selectbox, template) => {
     return data.map((value, i, arr) => template(arr, i)).reduce((current, prev) => current + prev )
}

/**
 * 
 * @param  {String}    placeholder
 * @return {Node}                  
 */
Select.prototype.createOptionPlaceholder = (placeholder) =>
    '<option class="placeholder" value="" placeholder="'+placeholder+'">'+placeholder+'</option>'

/**
 * 
 * @param  {Node}      selectbox  
 * @param  {String}    placeholder 
 * @return {Node}                 
 */  
Select.prototype.appendOptionPlaceholder = (selectbox, placeholder) => {
    selectbox.innerHTML = selectbox.innerHTML + select.createOptionPlaceholder(placeholder)
    return selectbox
}
