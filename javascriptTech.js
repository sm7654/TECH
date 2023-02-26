function responsive_bar() {

    if (document.getElementById("ul_header_options_responsive").style.display == "none") {
        document.getElementById("ul_header_options_responsive").style.display = "flex";
        document.getElementById("nav_bar_img").src = "./images/close.png";
    } else {
        document.getElementById("ul_header_options_responsive").style.display = "none";
        document.getElementById("nav_bar_img").src = "./images/menu.png";
        document.getElementById("wraper_of_log_sign_In_responsive").style.display = "none";
    }
    }
    
function account_clicked() {
    if (document.getElementById("optins_log_in_signIn").style.display == "none") {
        if (screen.width > 600) {/* the web is not responsive*/
           document.getElementById("optins_log_in_signIn").style.display = "flex";
        } else {/* the web is responsive*/
            if (document.getElementById("wraper_of_log_sign_In_responsive").style.display == "none") {
                document.getElementById("wraper_of_log_sign_In_responsive").style.display = "flex";                
            } else {
                document.getElementById("wraper_of_log_sign_In_responsive").style.display = "none";
            }
        }
    } else {
        document.getElementById("optins_log_in_signIn").style.display = "none";
    }
}
function sign_in() {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("logIn_signIn_section_wraper").style.height = "100vh";
    document.getElementById("sign_in_option").style.display = "flex";
    document.getElementById("optins_log_in_signIn").style.display = "none";
    document.getElementById("log_in_option").style.display = "none";


    document.getElementById("header_responsive").style.pointerEvents = "none";

}
function log_in() {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("logIn_signIn_section_wraper").style.height = "100vh";
    document.getElementById("log_in_option").style.display = "flex";
    document.getElementById("optins_log_in_signIn").style.display = "none";
    document.getElementById("sign_in_option").style.display = "none";


    document.getElementById("header_responsive").style.pointerEvents = "none";

}
function goback() {
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("logIn_signIn_section_wraper").style.height = "0px";
    document.getElementById("log_in_option").style.display = "none";
    document.getElementById("sign_in_option").style.display = "none";
    if (screen.width > 600) {
        document.getElementById("optins_log_in_signIn").style.display = "flex";
    } else{
        document.getElementById("header_responsive").style.pointerEvents = "all";
    }

}

const toTop = document.querySelector(".go_up");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 50) { 
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}
})

