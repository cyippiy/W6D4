class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  html(html){
    if (typeof html === "undefined") {
      return this.nodes[0].innerHTML;
    }else if (typeof html === "string"){
      this.each((el) => {
        el.innerHTML = html;
      });
    }
  }
  each(cb) {
    this.nodes.forEach(cb);
  }

  empty(){
    this.html('');
  }
  append(children){
    if (typeof children === "string"){
      this.each( (el) => {
        el.innerHTML += children;
      });
    }else if  (children instanceof "DomNodeCollection") {
      this.each( (node) => {
          children.each( (childNode) =>{
            node.appendChild(childNode.clonenod(true));
          });
      });
    }
  }

  attr(key,value){
    if (typeof value === "string") {
      this.each( (node) => {
        node.setAttribute(key,value);
      })
    }else{
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(name){
    this.each( (node) =>{
      node.classList.add(name)
    });
  }
  removeClass(name){
    this.each( (node) => {
      node.classList.remove(name)
    });
  }

  children(){
    let results = [];
    this.each( (node)=>{
      let childrenList = node.children;
      results = results.concat(Array.from(childrenList));
    } );
    return new DomNodeCollection(results);
  }

  parent(){
    let results = [];
    this.each ( (node) =>{
      let parent_node = node.parentNode;
      results.push(parent_node);
    });
    return new DomNodeCollection(results);
  }

  find(el){
    let nodeList = [];
    this.each ( (node) => {
      let results = node.querySelectorAll(el);
      nodeList = nodeList.concat(Array.from(results));
    });
    return new DomNodeCollection(nodeList);
  }

  remove(){
    this.each( (node) => {
      node.remove();
    } );
  }

  on(eventHandle,cb){
    this.each( (node) => {
      node.addEventListener(eventHandle,cb);
    });
  }
}

module.exports = DomNodeCollection;
