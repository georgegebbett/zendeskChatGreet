var greeting;

function save_options() {
    if (document.getElementById("greetingBox").value.includes("[name]")){
        greeting = document.getElementById("greetingBox").value;
        chrome.storage.sync.set({greeting: greeting}, function (){
            console.log("Greeting updated");
            document.getElementById("successMsg").innerText = "Greeting updated to \"".concat(greeting, "\" successfully. You can now close this window.")
            document.getElementById("successMsg").hidden = false;
            document.getElementById("errorMsg").hidden = true;
        })
    } else {
        document.getElementById("errorMsg").hidden = false;
        document.getElementById("successMsg").hidden = true;

        console.log("Greeting update failed.")
    }

    document.getElementById("retrieveMsg").hidden = true;
    document.getElementById("deleteMsg").hidden = true;
}

function restore_options() {
    chrome.storage.sync.get({greeting: "Hi there [name]"}, function (items){
        document.getElementById("greetingBox").value = items.greeting;
        document.getElementById("successMsg").hidden = true;
        document.getElementById("errorMsg").hidden = true;
        document.getElementById("deleteMsg").hidden = true;
        if (document.getElementById("devOp").checked) {
            document.getElementById("retrieveMsg").hidden = false;
        }

    })
}

function delete_options() {
    chrome.storage.sync.clear(function (){
        document.getElementById("deleteMsg").hidden = false;
        document.getElementById("successMsg").hidden = true;
        document.getElementById("errorMsg").hidden = true;
        document.getElementById("retrieveMsg").hidden = true;
        document.getElementById("greetingBox").value = "";
    })
}

function hideShowOptions() {
    if (document.getElementById("devOp").checked === true){
        document.getElementById("remove").hidden = false;
        document.getElementById("retrieve").hidden = false;
        document.getElementById("warningMsg").hidden = false;
    } else {
        document.getElementById("remove").hidden = true;
        document.getElementById("retrieve").hidden = true;
        document.getElementById("warningMsg").hidden = true;
    }
}




document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener('click', save_options);
document.getElementById("remove").addEventListener('click', delete_options);
document.getElementById("retrieve").addEventListener('click', restore_options);
document.getElementById("devOp").addEventListener('click', hideShowOptions);
