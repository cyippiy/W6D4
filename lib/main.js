const DomNodeCollection = require("./dom_node_collection");

window.$l = (selector)=> {
  let obj;
  if (typeof selector === "string") {
    obj = document.querySelectorAll(selector);
    return Array.from(obj);
  }else if (typeof selector === "object") {
    if(selector instanceof HTMLElement){
      return new DomNodeCollection([selector]);
    }
  }
}
li = document.querySelectorAll("li");
arr = Array.from(li);
test = new DomNodeCollection(arr);
