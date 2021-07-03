

var email=document.getElementById("e");
var password=document.getElementById("p");

email.addEventListener('textInput',checkemail);
password.addEventListener('textInput',checkpass);

function validate()
{
  if(checkemail()==true && checkpass()==true)
    return true;
  return false;
}
function checkemail()
{
  var em=document.getElementById("e").value;
    if(em==""|| em==null)
    {
        document.getElementById("check").style.visibility = "hidden";
        document.getElementById("error").innerHTML="This field can't be empty!!"
        email.style.border="1px solid red";
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("exclamation").style.visibility = "visible";
        return false;
    }
    else
    {
        document.getElementById("check").style.visibility = "hidden";
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("exclamation").style.visibility = "hidden";
        if(em.indexOf("@")==-1)
          {
            email.style.border="1px solid red";
            email.focus();
            document.getElementById("error").innerHTML="Wrong Email Address!!";
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("exclamation").style.visibility = "visible";
            return false;
          }
        else
          {
            document.getElementById("check").style.visibility = "visible";
            email.style.border="1px solid green";
            return true;
          }
          
    }
  }
  function checkpass()
  {
    var pass=document.getElementById("p").value;
    if(pass=="" || pass==null || pass.length<8)
    {
        document.getElementById("errorp").style.color="red";
        document.getElementById("errorp").style.visibility = "hidden";
        document.getElementById("checkp").style.visibility = "hidden";
        password.style.border="1px solid red";
        if(pass=="" || pass==null)
          {
             document.getElementById("errorp").innerHTML="This field can't be empty!!";
            document.getElementById("errorp").style.visibility = "visible";
          }
        else if(pass.length<8)
          {
            document.getElementById("errorp").innerHTML="Length should be more than 8 characters!!";
            document.getElementById("errorp").style.visibility = "visible";
          }
        document.getElementById("exclamationp").style.visibility = "visible";
        return false;
    }
    else
    {
        document.getElementById("exclamationp").style.visibility = "hidden";
        document.getElementById("checkp").style.visibility = "visible";
        password.style.border="1px solid green";
        document.getElementById("errorp").style.visibility = "hidden";
        var c=0;
        for(var i=0;i<pass.length;i++)
        {
            if(pass[i]=='@')
              {
                document.getElementById("errorp").innerHTML="Strong password:)"
                document.getElementById("errorp").style.color="green";
                document.getElementById("errorp").style.visibility = "visible";
                c=1;
                break;
              }
        }
        if(c!=1)
          {
            document.getElementById("errorp").innerHTML="Weak password:)"
            document.getElementById("errorp").style.color="green";
            document.getElementById("errorp").style.visibility = "visible";
          }
        return true;
    }
}