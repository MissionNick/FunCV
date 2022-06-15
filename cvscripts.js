console.log("cvscripts.js loaded");// need to add reference so not hardcoded?
//const userInfo = new JobApplicant;

// if window is resized check to see if the careerHistory needs to move
// Done to avoid creating a duplicate div element and show / hide.
window.addEventListener('resize', moveCareerHistoryDiv());
moveCareerHistoryDiv()

const scrollCV = document.querySelector("#cvhome");
scrollCV.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollCV.scrollTop += evt.deltaY;
});

const scrollCareer = document.querySelector("#careerScroll");
scrollCareer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollCareer.scrollTop += evt.deltaY;
});

// Make the message form draggable @Source WC3 code
dragElement(document.getElementById("contactform"));

// Load users cv 
loadHTML('cvpages.html', 'cvhome');




class JobApplicant {
    constructor() {
        this.name = "Nick Wilson";
        this.role = "Full Stake Developer";
        this.career = [{ companyName: "Clanwilliam Health Asia", url: "https://www.clanwilliam.health", startDate: "", endDate: "" }]
    }

}


async function getCVinfo(cvInfo) {
    let url = 'cvInfo';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function editCV() {
    let cv = await getCVinfo();
    console.log(cv);
}

function sillyLoop() {

    const image = document.getElementById("clickIt");
    image.style.visibility = "visible";
    console.log('Sillyloop start');
    image.width = "50";
    image.height = "50";
    image.style.left ="10px"
    
    
    let count = 1;
    do {
             
      
        count += 1;
        
    }
    while (count < 2000);
//(image.style.visibilty==='visible'
    console.log('Sillyloop done');
}

function rollCredits() {

    //set best style for credits

    loadHTML('./cvstarwars.html', 'cvhome');
    loadHTML('./cvpages.html', 'starwarsCV');
    let audio = new Audio('Star_Wars_Main_Theme_Song.mp3');
    audio.play();
}

function gameOn() {
    //switch-stylesheets 

}

function clickPrompt(whichPrompt, e) {

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

const messageArray = [
    { contactname: '', email: '', message: '' }

];

function submitContactForm(form) {


    messageArray.push(contactname = form.fullname, email = form.email, message = form.message)
    console.log(message);
    /* 
    // Needs more work - using HTML5 submit input for now

    $myForm = $('#submessage');
    //jquery validation of the form
    //$('#submessage')[0].checkValidity()
    console.log($myForm[0])
    if (!$myForm[0].checkValidity()) {
        $myForm.find(':submit').click();
    }

    $('#submessage')
        .ajaxForm({
            url: 'myscript.php', // or whatever
            dataType: 'json',
            success: function (response) {
                alert("The server says: " + response);
            }
        })
        ;


    /*--
            try {
                $myForm.submit();
    
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
    
            */


}

function openContactform(x_pos, y_pos, relPos) {
    formElement = document.getElementById("contactform");
    //frameElement = document.querySelector("#thedisplaybox"); 
    maxwidth = relPos.offsetWidth;
    maxheight = relPos.offsetHeight;
    fwidth = formElement.offsetWidth;
    fheight = formElement.offsetHeight;



    console.log(relPos);
    console.log("Mouse ", x_pos, y_pos);
    console.log("Parent ", maxwidth, maxheight);
    console.log("Form ", fwidth, fheight);

    if ((x_pos + fwidth) > maxwidth) { x_pos = maxwidth - fwidth } //adjust to fit
    if ((y_pos + fheight) > maxheight) { y_pos = maxheight - fwidth }//adjust to fit

    console.log("Form pos ", x_pos, y_pos);

    formElement.style.left = x_pos + "px";
    formElement.style.top = y_pos + "px";

    formElement.style.visibility = "visible";
    document.getElementById("fullname").focus(); //default 1st input field
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

function loadHTML(fileName, id) {
    fetch(fileName)
        .then(response => response.text())
        .then(text => document.getElementById(id).innerHTML = text);
}


function saveHTML(fileName) {
    const html = document.getElementById('cvhome');
    text = html.textContent;
    let file = new Blob([text], { type: type });
    html.href = URL.createObjectURL(file);
    a.download = fileName;
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function scrollTop() {
    let element = document.getElementById('topPage')
    element.scrollIntoView({ behavior: 'smooth' });
}

function scrollBottom() {
    let element = document.getElementById('education')

    console.log(element);
    element.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(function () { scrollTop(); }, 2000);
}

function doSomething() {
    alert("hello")
}

function scrollToSection(sectionId) {
    console.log('scrollto:', sectionId);
    sectionId.scrollIntoView({ behavior: 'smooth' });
    //window.setTimeout(function () {scrollTop(); }, 2000);
}

function menuDisplay(e) {

    console.log("display:", e.style.visibility);
    if (e.style.visibility === "visible") {
        e.style.visibility = "hidden";
    } else {
        e.style.visibility = "visible";
        //window.setTimeout(function () { menuCloseListen(e); }, 2000)    
    }
    //menu.addEventListener("click", menuClose(menu))

}

function menuClose(e) {

    console.log('close:', e);
    if (e.style.visibility === "visible") {
        e.style.visibility = "hidden";
    }


}

function moveCareerHistoryDiv() {
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
        moveElement('career-history', 'myCareerDropdown');
    } else {
        moveElement('myCareerDropdown', 'career-history');
    }
}

function moveElement(fromE, toE) {
    let source = document.getElementById(fromE);
    let target = document.getElementById(toE);
    // dothemove()

    function dothemove() {
        console.log("Target:", target, "  Source:", source);
        target.innerHTML = source.textContent;
        source.innerHTML = "";
        console.log("Target:", target, "  Source:", source);

    }
}
