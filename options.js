function save_options() {
    var greeting = document.getElementById("greeting").value;
    chrome.storage.sync.set({greeting: greeting}, function (){
        console.log("Greeting updated");
    })
}

function restore_options() {
    chrome.storage.sync.get({greeting}, function (items){
        document.getElementById("greeting").value = items.greeting;
    })
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener('click', save_options);