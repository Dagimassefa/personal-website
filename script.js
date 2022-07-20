/*-----------about tab---------- */
const tabsContainer=document.querySelector(".about-tabs"),
aboutSection=document.querySelector(".about-section");
tabsContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
  tabsContainer.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  const target=e.target.getAttribute("data-target");
   aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}
});

document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("view-project-btn")){
    toggleportfoliopopup();
  }
})
function toggleportfoliopopup(){
  window.open("https://github.com/Dagimassefa/git-workshop");
  //<a href="https://github.com/Dagimassefa/git-workshop" target="_blank">Go to the project</a>;
}
const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
  hideSection();
  toogleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
  document.querySelector("section.active").classList.toggle("fade-out");

}
function toogleNavbar(){
document.querySelector(".header").classList.toggle("active");
}
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("link-item") && e.target.hash!==""){
   navToggler.classList.add("hide");
    if(e.target.classList.contains("nav-item")){
      toogleNavbar();
    }
    else{
     hideSection();
     document.body.classList.add("hide-scrolling");
    }
    setTimeout(()=>{
      document.querySelector("section.active").classList.remove("active","fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
    },500);
  }
});