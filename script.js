let display=document.getElementById("input");
let btn=document.querySelectorAll("button");
let btnarray=Array.from(btn); //btn ke node list ko array main convert kar diya


let string="";



btnarray.forEach(function(abc){

    //console.log(abc);
    abc.addEventListener("click",(f)=>{
        //console.log(f.target.textContent);
        //string= string+f.target.innerHTML;
        //display.value=string;
        if(f.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
    else if (f.target.innerHTML=='AC'){
        string="";
        display.value=string;
    }
    else if(f.target.innerHTML=='='){

      string=eval(string);    //YE STRING KO NUMBERS MAIN CONVERT KAR DEGA 
      
      display.value=string;

    }
        else {
            string= string+f.target.innerHTML;
        display.value=string;
        }

    })
})