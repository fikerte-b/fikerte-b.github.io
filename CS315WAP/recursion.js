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

  // part2 no. 1
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

// body: null
// div: null
// label: Name
// input: this was typed by a user
// p: This is text in the a paragraph

 printNode(node1);
//  printList(list);
//  printReverse(list);
// printNodeLoop(node1);


