let user = {
    name: "John"
  };
// how to get those flags -> use getOwnPropertyDescriptor
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log( JSON.stringify(descriptor, null, 2 ) );
  console.log(descriptor) //2 cách viết đều cho ra kq như nhau

//  To change the flags, we can use Object.defineProperty.

let change = Object.defineProperty(user, 'name', descriptor);
console.log(change)