const menuBtn = document.querySelector(".style_switcher_icon"),
navmenu = document.querySelector(".customizer");
menuBtn.addEventListener("click", (e) => {
    navmenu.classList.toggle("open");
});

// theme color
const alternateStyles = document.querySelectorAll(".altenate-style")
function setActiveStyle(color) {
    localStorage.setItem("CodemanColor", color);
    changeColor();
}
// checking if "color" key exixts
if(localStorage.getItem("CodemanColor") !== null){
    changeColor();
}

function changeColor(){
    alternateStyles.forEach((style) => {
        if(localStorage.getItem("CodemanColor") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

// 
// 
// 
// 
// 

// dark and light theme mode----------
const darkLight = document.querySelector("#toggledark");
let body = document.querySelector('.mode');

darkLight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("codemanThemeColor", "dark");
    }else{
        localStorage.setItem("codemanThemeColor", "light");
    }
    updatetheme();
})

function themeMode(){
    // cheking if 'theme' key exists
    if(localStorage.getItem("codemanThemeColor") !== null){
        if(localStorage.getItem("codemanThemeColor") === "light"){
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }
    updatetheme();
}
themeMode();
function updatetheme(){
    if(document.body.classList.contains("dark")){
        darkLight.classList.add('dark');
        darkLight.classList.remove('light');
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        darkLight.classList.add('light');
        darkLight.classList.remove('dark');
        body.classList.add('light');
        body.classList.remove('dark');
    }
}

// steel and glass theme mode----------
const steelGlass = document.querySelector("#togglesteel");

steelGlass.addEventListener("click", () => {
    document.body.classList.toggle("glass");
    if(document.body.classList.contains("glass")){
        localStorage.setItem("codemanThemeStyle", "glass");
    }else{
        localStorage.setItem("codemanThemeStyle", "steel");
    }
    updatetype();
})

function codemanThemeStyleMode(){
    // cheking if 'theme' key exists
    if(localStorage.getItem("codemanThemeStyle") !== null){
        if(localStorage.getItem("codemanThemeStyle") === "steel"){
            document.body.classList.remove("glass");
            document.body.classList.add("steel");
        }else{
            document.body.classList.remove("steel");
            document.body.classList.add("glass");
        }
    }
    updatetype();
}
codemanThemeStyleMode();

function updatetype(){
    if(document.body.classList.contains("glass")){
        steelGlass.classList.add('glass');
        steelGlass.classList.remove('steel');
        body.classList.add('glass');
        body.classList.remove('steel');
    }
    else{
        steelGlass.classList.add('steel');
        steelGlass.classList.remove('glass');
        body.classList.add('steel');
        body.classList.remove('glass');
    }
}