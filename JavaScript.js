AOS.init({
    duration: 900,
    once:false,
    
});

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");
    
    if (theme.getAttribute("href") == "darkcss.css") {
        theme.href = "main.css";
    } else {
        theme.href = "darkcss.css";
    }
}
