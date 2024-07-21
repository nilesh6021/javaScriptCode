//const tinder = new Object(); singaltan object
//console.log(tinder);
// const tinderUser ={}
// tinderUser.id="123abc";
// tinderUser.name ="sammy";
// tinderUser.isloggedin=false
// console.log(tinderUser);


//object insisde object//

const JSuser ={
    email:"jsuser@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"patil"
        }

    }
}

// console.log(JSuser)
// console.log(JSuser.fullname)
// console.log(JSuser.fullname.userfullname)
// console.log(JSuser.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={5:"e",6:"f"}
//const obj4 ={obj1,obj2}
//const obj4 =Object.assign(obj1,obj2)
//const obj4 =Object.assign({},obj1,obj2)
//use splite//
const obj4 ={...obj1,...obj2,...obj3}
//console.log(obj4)



const user=[
    {
        id:"1",
        email:"np@gmail.com"
        
    },
    {
        id:"2",
        email:"npbb@gmail.com"
        
    },
    {
        id:"3",
        email:"npskns@gmail.com"
        
    }
]

//console.log(user[0]);
//console.log(user[1].id)



const tinderUser ={}
tinderUser.id="123abc";
tinderUser.name ="sammy";
tinderUser.isloggedin=false
console.log(tinderUser)
//==>{ id: '123abc', name: 'sammy', isloggedin: false }
//convert object in to array
console.log(Object.keys(tinderUser)) ;
//==>[ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderUser)) ;
//==>[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser)) ;
//==>[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]
console.log(Object.keys(tinderUser)) ;    
//==>