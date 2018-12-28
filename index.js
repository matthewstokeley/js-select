var select = {};

/**
 * 
 * @todo  refactor
 * @param  {String}       name 
 * @param  {Function}     fn  
 * @return {Node}              
 */
select.createSelectBoxFragment = (name, fn) => {
    var fragment = document.createElement('div')
    var html = '<select id="'+name+'" name="'+name+'" onchange="'+fn+'"></select>'
    fragment.innerHTML = html
    // @todo weird hack
    return fragment.children[0]
}

/**
 * [appendOptions description]
 * @param  {Array}     data      [description]
 * @param  {Node}      selectbox [description]
 * @param  {Function}  template  [description]
 * @return {Node}                [description]
 */
select.appendOptions = (data, selectbox, template) => {
    for (var i = 0; i < data.length; i++) {
        selectbox.innerHTML = selectbox.innerHTML + template(data, i)
    }

    return selectbox
}

/**
 * 
 * @param  {String}    placeholder
 * @return {Node}                  
 */
select.createOptionPlaceholder = (placeholder) =>
    '<option class="placeholder" value="" placeholder="'+placeholder+'">'+placeholder+'</option>'

/**
 * 
 * @param  {Node}      selectbox  
 * @param  {String}    placeholder 
 * @return {Node}                 
 */  
select.appendOptionPlaceholder = (selectbox, placeholder) => {
    selectbox.innerHTML = selectbox.innerHTML + select.createOptionPlaceholder(placeholder)
    return selectbox
}

/**
 *
 */
function createSelectbox(options) {
    var selectbox = select.createSelectBoxFragment(options.name, options.onchange);
    selectbox = select.appendOptionPlaceholder(selectbox, options.placeholder);
    selectbox = select.appendOptions(options.data, selectbox, options.template);
    return selectbox;
}
