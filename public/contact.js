function check()
{
    var n=document.getElementById("name").value;
    var e=document.getElementById("email").value;
    var m=document.getElementById("msg").value;
    var flag=0;
    if(n=="" || n==NULL)
    {
        window.alert("Name can't be blank!!");
        return false;
    }
    else if(e=="" || e==NULL)
    {
        window.alert("Email Address can't be blank!!");
        return false;
    }
    else if(m=="" || m==NULL)
    {
        window.alert("Enter the Message you want to convey !!");
        return false;
    }
      
}