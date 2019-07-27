/**
  *
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
    var html = '<select id="'+name+'" name="'+name+'" onchange="'+fn+'"></select>'
    fragment.innerHTML = html
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
    // for (var i = 0; i < data.length; i++) {
    //    selectbox.innerHTML = selectbox.innerHTML + template(data, i)
    // }
    const fn = (value, i, arr) => template(arr, i)
    const sb = data.map(fn).reduce((current, prev) => current + prev )

    return sb
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
