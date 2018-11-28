
// old namespace
var select = {};




/**
 * [createSelectBoxFragment description]
 * @todo  refactor
 * @param  {String}       name [description]
 * @param  {Function}     fn   [description]
 * @return {Node}              [description]
 */
select.createSelectBoxFragment = function createSelectBoxFragment(name, fn) {
    var fragment = document.createElement('div');
    var html = '<select id="'+name+'" name="'+name+'" onchange="'+fn+'"></select>';
    fragment.innerHTML = html;
    // @todo weird hack
    return fragment.children[0];
}






/**
 * [appendOptions description]
 * @param  {Array}     data      [description]
 * @param  {Node}      selectbox [description]
 * @param  {Function}  template  [description]
 * @return {Node}                [description]
 */
select.appendOptions = function appendOptions(data, selectbox, template) {
    for (var i = 0; i < data.length; i++) {
        selectbox.innerHTML = selectbox.innerHTML + template(data, i);
    }

    return selectbox;
}






/**
 * [createOptionPlaceholder description]
 * @param  {String}    placeholder [description]
 * @return {Node}                  [description]
 */
select.createOptionPlaceholder = function createOptionPlaceholder(placeholder) {
    return '<option class="placeholder" value="" placeholder="'+placeholder+'">'+placeholder+'</option>';
}







/**
 * [appendOptionPlaceholder description]
 * @param  {Node}      selectbox   [description]
 * @param  {String}    placeholder [description]
 * @return {Node}                  [description]
 */  
select.appendOptionPlaceholder = function appendOptionPlaceholder(selectbox, placeholder) {
    selectbox.innerHTML = selectbox.innerHTML + select.createOptionPlaceholder(placeholder);
    return selectbox;
}






/**
 * experimenting with functional versus oo paradigms
 * kind of a weird functional / oo mix
 */
function createSelectbox(options) {
    var selectbox = select.createSelectBoxFragment(options.name, options.onchange);
    selectbox = select.appendOptionPlaceholder(selectbox, options.placeholder);
    selectbox = select.appendOptions(options.data, selectbox, options.template);
    return selectbox;
}