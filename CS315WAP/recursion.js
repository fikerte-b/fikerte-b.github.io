//part I output single linked list
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  // using loop
//   function printListLoop(obj){
//       while(obj.next != null){
//           console.log(obj.value);
//           obj = obj.next;
//       }
//   }
  function printList(obj){
      if(obj.next === null){
          console.log(obj.value);
      }else{
          console.log(obj.value);
          printList(obj.next);
      }
  }


  // printing in reverse order
  function printReverse(obj){
      if(obj.next === null){
          console.log(obj.value);
      }else{
          printReverse(obj.next)
          console.log(obj.value);
      }
  }

 
  // =====part2 ========
  let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };

   //=====partII no1=========
  function printNode(node){
    if(node.children == null){
        console.log(node.name +":"+ node.value);
    }
    else{
        for(let child of node.children){
            
            printNode(child);
           }
           console.log(`${node.name} : ${node.value}`); 
    }
  }
  function printNodeLoop(node){
      console.log(`${node.name} : ${node.value}`);
      if(node.children !== null){
          for(const child of node.children){
              console.log(`${child.name} : ${child.value}`);
             if(child.children !== null){
                 for(const grandChild of child.children){
                     console.log(`${grandChild.name} : ${grandChild.value}`);
                 }
             }
          }
      }
  }

  //====partII no.2=====
  function modifiedPrintNode(node){
    
    if(node.children == null){
      return (`${node.name} : ${node.value}`)
    }
    let valueName = [];
    for(const child of node.children){
      let grandchild = modifiedPrintNode(child);
      valueName = valueName.concat(grandchild);
    }
    return valueName;
  }

 
 
 
  //=====partIII======
  function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
   
    // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);


  //===PartIII no.1====
  function printNames(node){
   if(node.descendents===[]){
     console.log(node.value);
   }
   for(const child of node.descendents){
     printNames(child);
   }
  } 
  
  //===partIII no.2===
  function containsTarget(node, name){
    if(node.value === name){
      return true;
    }
    if(node.descendents !== []){
      for(const child of node.descendents){
        if(containsTarget(child, name)){
          return true;
        }
      }
    }
    return false;
  }

  //===partIII no.3=====
  function findSubtree(node, name){
    if(node.value === name){
      return node;
    }
    if(node.descendents.length !== 0){
      for(child of node.descendents){
        if(containsTarget(child, name)){
          return findSubtree(child, name)
        }
      }
    }
    return null;
  }

  //===partIII no.4====
  // creating a linked list
  // Abe, Homer, Bart, Lisa, Maggie
  function LinkedList(value, next){
    this.value = value;
    this.next = next;
  }
  const abeLink = new LinkedList("Abe", null);
  const homerLink = new LinkedList("Homer", abeLink);
  const bartLink = new LinkedList("Bart", homerLink);
  const lisaLink = new LinkedList("Lisa", bartLink);
  const maggieLink = new LinkedList("Maggie", lisaLink);

  //===partIII no.5
  function findListNode(linkedList, name){
     if(linkedList.value === name){
       return linkedList;
     }
     if(linkedList.next !==null){
       return findListNode(linkedList.next, name);
     }else {
      return null;
    }

  }

//  printList(list);
//  printReverse(list);
//  printNode(node1);
//  printNodeLoop(node1);
//  console.log(modifiedPrintNode(node1));
//  printNames(abe);
 // console.log(containsTarget(abe, "Lisa"));
 // console.log(containsTarget(abe, "Lili"));
 // console.log(findSubtree(abe, "Lisa"));
 // console.log(findSubtree(abe, "Lili"));
  console.log(findListNode(abeLink, "Abe"));
  console.log(findListNode(abeLink, "hommerr"));



