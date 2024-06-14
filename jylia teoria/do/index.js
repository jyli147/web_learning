var sendButton = document.getElementById("send_button")

sendButton.onclick = function () { 
    var name = document.getElementById("name").value; 
    name = accurancyName(name);


    console.log('Твое имя ' + name); 
}

function accurancyName(name){
    if (name.length == 0) {
        name = prompt('Я не знаю твое имя =(');
        return accurancyName(name); 
    }

    return name;
}
