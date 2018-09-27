class DomNodeCollection {
  constructor(node) {
    this.node = node;
  }
  html(html){
    if (typeof html === "undefined") {
      return this.node[0].innerHTML;
    }else if (typeof html === "string"){
      this.each((el) => {
        el.innerHTML = html;
      });
    }
  }
  empty(){
    this.html('');
  }
  append(children){
    if (typeof children === "string"){
      this.each( (el) => {
        el.innerHTML += "children";
      });
    }else if  (children instanceof "DomNodeCollection") {
      this.each( (node) => {
          children.each( (childNode) =>{
            node.appendChild(childNode.clonenod(true));
          });
      });
    }
  }
}

module.exports = DomNodeCollection;
