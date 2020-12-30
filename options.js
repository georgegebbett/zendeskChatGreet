function save_options() {
    if (document.getElementById("greeting").value.includes("[name]")){
        var greeting;
        greeting = document.getElementById("greeting").value;
        chrome.storage.sync.set({greeting: greeting}, function (){
            console.log("Greeting updated");
            document.getElementById("successMsg").hidden = false;
            document.getElementById("errorMsg").hidden = true;
            document.getElementById("deleteMsg").hidden = true;

        })
    } else {
        document.getElementById("errorMsg").hidden = false;
        document.getElementById("successMsg").hidden = true;
        document.getElementById("deleteMsg").hidden = true;

        console.log("No.")
    }

}

function restore_options() {
    chrome.storage.sync.get({greeting: "Hi there [name]"}, function (items){
        document.getElementById("greeting").value = items.greeting;
    })
}

function delete_options() {
    chrome.storage.sync.clear(function (){
        document.getElementById("deleteMsg").hidden = false;
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
