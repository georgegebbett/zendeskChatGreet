function save_options() {
    if (document.getElementById("greeting").value.includes("[name]")){
        var greeting;
        greeting = document.getElementById("greeting").value;
        chrome.storage.sync.set({greeting: greeting}, function (){
            console.log("Greeting updated");
            document.getElementById("successMsg").hidden = false;
            document.getElementById("errorMsg").hidden = true;
        })
    } else {
        document.getElementById("errorMsg").hidden = false;
        document.getElementById("successMsg").hidden = true;
        console.log("No.")
    }

}

function restore_options() {
    chrome.storage.sync.get({greeting}, function (items){
        document.getElementById("greeting").value = items.greeting;
    })
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener('click', save_options);