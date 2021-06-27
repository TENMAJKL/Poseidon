/**
 *
 * Poseidon
 * Faster DOM work
 *
 * Author: TEN MAJKL
 * License: MIT
 *
 * */

/** DOM syntax declaration */
let syntax = {
    "#": "getElementById",
    ".": "getElementsByClassName",
    "": "getElementsByTagName"
};

let onechar = {
    "!": "documentElement",
    "/": "baseURI",
};

/**
 *
 * Function for DOM manipulation simple to jquery
 *
 * @param String element
 * @return DOM object
 * */
function dom(element)
{
    var method_char = element.charAt(0);
    var name = element.substr(1);
    if (!(method_char in syntax))
    {
        if (method_char in onechar)
            return eval("document."+onechar[method_char]);

        name = element;
        method_char = "";
    }
    var method = syntax[method_char];
    return eval("document."+method+"(\""+name+"\")");
}

/**
 *
 * Function for making custom elements
 *
 *  @param String name
 *  @param String content
 *
 * */
function el(name, content)
{
    var elements = dom(name);
    Array.prototype.forEach.call(elements, function(el){
        el.outerHTML = content;
   });
}

