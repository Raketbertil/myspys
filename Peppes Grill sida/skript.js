//Skickar formulär
function validate() {    
    //variabler
    var fnamn = document.getElementById("fnamn").value;
    var enamn = document.getElementById("enamn").value;
    var msg = document.getElementById("msg").value;
    var mail = document.getElementById("email").value;
    var validation = true;
    
    //rensar error texterna
    document.getElementById("fnamnError").innerHTML = "";
    document.getElementById("enamnError").innerHTML = "";
    document.getElementById("mailError").innerHTML = "";
    document.getElementById("msgError").innerHTML = "";
    
    msg = msg.replace(/\s/g, "");
    fnamn = fnamn.replace(/\s/g, "");
    enamn = enamn.replace(/\s/g, "");
    
    //error för förnamn
    if (fnamn.length < 1)
    {
        validation = false;
        document.getElementById("fnamnError").innerHTML = "*Ange förnamn!";
    }
    
    //error för efternamn
    if (enamn.length < 1)
    {
        validation = false;
        document.getElementById("enamnError").innerHTML = "*Ange efternamn!";
    }
    
    //error för mail
    if (mail.length < 1)
    {
        validation = false;
        document.getElementById("mailError").innerHTML = "*Ange Epost!";
    }
    
    //error för messagebox
    if (msg.length = 0)
    {
        validation = false;
        document.getElementById("msgError").innerHTML = "*Måste lämna ett meddelande!";
    }
    
    else if (msg.length > 200)
    {
        validation = false;
    }
    
    return validation;
}

//Räknar tecken i messageboxen
function chars() {
    var text = document.getElementById("msg").value;
    text = text.replace(/\s/g,"");
    
    if (text.length <= 200){
        document.getElementById("msgInfo").style.color = "green";
        document.getElementById("msgInfo").innerHTML = (200 - text.length) + " tecken kvar";
    }
    
    else {
        document.getElementById("msgInfo").style.color = "red";
        document.getElementById("msgInfo").innerHTML = "*För långt meddelande! Max 200 tecken";
    }
    
}
