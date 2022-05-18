
function starWarsScroll()
{
    let x = document.getElementById("home");
    x.style.animation = "scroll 100s linear 4s infinite;";
        
  }
function clickPrompt(whichPrompt,e) {
    
    /* 
    Click here prompt actions.
    Default - Hide the prompt;

    */
    
    switch (whichPrompt) {
        case "endIntroAnimmation":
            endIntroAnimmation();
            e.style.visibility = "hidden";
            break;
        case "show":
            e.style.visibility = "visible";
            break;
        
        default:
            e.style.visibility = "hidden";
            
    }       

}



function clickhereAnimation(clickimg, xpos, ypos) {
    let x = document.getElementById(clickimg);
    x.style.position.fixed;
    x.style.visibility = "visible";
}



function endIntroAnimmation() {

    /* Disaable onclick or ignore
          Remove background 
          Display page form thedisplaybox  */

    let x = document.getElementById("thedisplaybox");
    /* document.body.style.backgroundImage = "none";   NOT WORKING!*/

    /* event.preventDefault();
    document.getElementById("bg-img-1").style.background = "none";  also not working!*/
    x.style.visibility = "visible";
    document.getElementById("bg-img-launch").removeAttribute("class"); /* Third time lucky!!!! */
    //document.getElementById("clickIt").removeAttribute("class");
    x = document.getElementById("clickIt")
    x.style.visibility = "hidden";
    //document.getElementById("clickIt").visibility = "hidden";
    

}


function submitContactform() {
    console.log("Submit form called");
    try {
        document.getElementById("contactform").submit();

    } catch (e) {
        if (e === 0) {
            closeContactform();
            console.log("Submit no error");

        }
        else {
            //do nothing - leave form open assuming a validation error;
            console.log("Submit error");
        }
    }


}


function openContactform() {
    var x = document.getElementById('contactform');
    x.style.visibility = "visible";
    document.getElementById("full-name").focus();
}



function closeContactform() {
    var x = document.getElementById('contactform');
    x.style.visibility = "hidden";


}


function hidetoggle() {
    var x = document.getElementById(arguments[0]);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



function toggleVisible() {
    var x = document.getElementById(arguments[0]);


    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";

    } else {
        x.style.visibility = "visible";
    }
}

