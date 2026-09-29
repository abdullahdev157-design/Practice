let users = [
  { name: "abdullah", role: "worker" },
  { name: "abdullah", role: "admin" },
  { name: "abdullah", role: "admin" },
];
let obj = []
let newobj = []
users.forEach(user => {
    if(user.role === "admin"){
        obj.push(user)
    }
    else{
        newobj.push(user)


    }
    
});
console.log(obj)
console.log(newobj)