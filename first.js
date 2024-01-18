var getid = (id)=>{
   return document.getElementById(id);
}
var getclasses = (classes)=>{
   return document.getElementsByClassName(classes);
}
var form = getid('myform'), 
firstname = getid('fname'),
lname = getid('lname'),
email = getid('email'),
password = getid('password'),
address=getid('address'),
address2 = getid('address2'),
city = getid('city'),
errmsg1 = getclasses('error'),
state = getid('state'),
sts = getid('sts'),
btn = getid('btn');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var fnameVaild=custmtypes(firstname,0,"firstname is mandatory..:)");
    var lnameVaild=custmtypes(lname,1,"lastname is mandatory..:)");
    var emailVaild=custmtypes(email,2,"email is mandatory..:)");
    var passwordVaild=custmtypes(password,3,"password is mandatory..:)");
    var addressVaild=custmtypes(address,4,"address is mandatory..:)");
    var address1Vaild=custmtypes(address2,5,"address1 is mandatory..:)");
    var cityVaild=custmtypes(city,6,"city is mandatory..:)");
   // var zipVaild=custmtypes(zip,7,"zip is mandatory..:)");


    if(fnameVaild==true&&lnameVaild==true&&emailVaild==true&&passwordVaild==true&&addressVaild==true&&address1Vaild==true&&cityVaild==true){
        var objectc={}
        objectc['firstname']=firstname.value;
        objectc['lname']=lname.value;
        objectc['email']=email.value;
        objectc['password']=password.value;
        objectc['address']=address.value;
        objectc['address2']=address2.value;
        objectc['city']=city.value;
        localStorage.setItem('personinfo',JSON.stringify(objectc));

        sts.textContent="please wait for the submition"
        setTimeout(()=>{
            sts.textContent="Your good to go..!!"
        },3000)
        
    }

})


function custmtypes(documentRef,classId,errorMsg){
    if(documentRef.value.trim()==''){
        documentRef.style.border='2px solid red';
        errmsg1[classId].textContent = errorMsg;
        return false;
    }
    else{
        documentRef.style.border='2px solid green';
        errmsg1[classId].textContent = '';
        return true;
    }
}