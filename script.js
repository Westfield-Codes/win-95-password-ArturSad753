function setup(){
    let buttons = document.getElementById("buttons");
    let ok = document.createElement("button");
    let cancel = document.createElement("button");
    ok.innerHTML = "ok";
    ok.addEventListener("click",getPassword);
    buttons.appendChild(ok);
    cancel.innerHTML = "cancel";
    buttons.appendChild(cancel);
}
function getPassword(){
    let dialogs = document.getElementById("dialogs");
    let username = dialogs.querySelector(':nth-child(2)').value; 
    let password = dialogs.querySelector(':nth-child(4)').value;
    alert(username+password);

}
