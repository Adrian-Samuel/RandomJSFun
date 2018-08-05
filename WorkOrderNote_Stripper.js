// Make sure you wrap the script in a script tag
// Insert this after the <h1 class="receiptTypeTitle"> in the Sales template

document.addEventListener("DOMContentLoaded", function(event) { 
    let regx1 = /([\s\S]+?\b[ap]m\b)[\s\S]+/ig;
    let regx2 = /([\s\S]+#\d{0,})[\s\S]+/ig;
    var div = document.querySelectorAll('.line_note');
    div.forEach(function(div) {
        var content = div.innerHTML;
        var search = content.includes("Work order");
    if (search === true) {
        if (regx1.test(content)) {
        new_str = content.replace(regx1, "$1");
        } else {
            new_str = content.replace(regx2, "$1");
        }
     div.innerHTML = new_str;
     let targetBreak = document.querySelector('.line_note br');
     targetBreak.style.cssText="display: none";
    }
    });
    
    });
