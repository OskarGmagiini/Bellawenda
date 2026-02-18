const burger=document.querySelector(".burger-nav");
const sideMenu=document.querySelector(".sideMenu");
console.log(sideMenu);
console.log(burger);
var show = false;


burger.addEventListener("click",function(){
    console.log("Burger has been clicked")
    if(show == false){
        sideMenu.classList.add("sideMenuShow")
        sideMenu.classList.remove("sideMenuHide")
        show=true
        console.log("menu is showed")
        


    }else if(show == true){
        sideMenu.classList.add("sideMenuHide")
        sideMenu.classList.remove("sideMenuShow")
        show=false
        console.log("menu is hiden")
    }




})


// function burgerClicked(){
//     console.log("Burger has been clicked")
//     if(show == false){
//         sideMenu.classList.add("sideMenuShow")
//         sideMenu.classList.remove("sideMenuHide")
//         show=true
//         console.log("menu is showed")
        


//     }else if(show == true){
//         sideMenu.classList.add("sideMenuHide")
//         sideMenu.classList.remove("sideMenuShow")
//         show=false
//         console.log("menu is hiden")
//     }
// }