/*  
Define a function that can answer the role of a user 
A User can be following roles:
admin- with all access
subadmin - with access to create /deleye course
testprep - with access to create
user- consume all contnet
other - trailer user

Input getUserRole(namr,role)**/


function getUserRole(name,role){
    switch (role) {
        case "admin" : 
        console.log(`${name} ${role}`,'with all access')
        break;
        case "subadmin" : 
        console.log(`${name} ${role}`,'with access to create /deleye course')
        break;
        case "testprep" :
            console.log(`${name} ${role}`,'with access to create')
            break;   
        default :
        break
    }
}


getUserRole('vidya',"admin");