var em=document.getElementById("e").value;
var pass=document.getElementById("p").value;
function check()
{
    if(em=="" || em==null)
    {
        document.getElementById("check").style.visibility = "hidden";
        document.getElementById("error").innerHTML="This field can't be empty!!"
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("exclamation").style.visibility = "visible";
    }
    else
    {
        document.getElementById("check").style.visibility = "hidden";
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("exclamation").style.visibility = "hidden";
        var c=0;
        for(var i=0;i<em.length;i++)
        {
            if(em[i]=='@')
              c++;
        }
        if(c!=1)
          {
            document.getElementById("error").innerHTML="Wrong Email Address!!";
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("exclamation").style.visibility = "visible";
          }
        else
          document.getElementById("check").style.visibility = "visible";
    }
    if(pass=="" || pass==null || pass.length<8)
    {
        document.getElementById("errorp").style.color="red";
        document.getElementById("errorp").style.visibility = "hidden";
        document.getElementById("checkp").style.visibility = "hidden";
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
    }
    else
    {
        document.getElementById("exclamationp").style.visibility = "hidden";
        document.getElementById("checkp").style.visibility = "visible";
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
        
    }
}