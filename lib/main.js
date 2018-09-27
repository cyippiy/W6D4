const DomNodeCollection = require("./dom_node_collection");

window.$l = (selector)=> {
  let obj;
  // if(typeof selector === HTMLElement){
  //   obj = new DomNodeCollection(selector);
  //   // let obj = document.querySelectorAll(selector);
  //   //return Array.from(obj);
  //   return obj;
  // }else
  if (typeof selector === "string") {
    obj = document.querySelectorAll(selector);
    return Array.from(obj);
  }else if (typeof selector === "object") {
    if(selector instanceof HTMLElement){
      return new DomNodeCollection([selector]);
    }
  }
}
