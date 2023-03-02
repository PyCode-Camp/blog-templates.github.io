import "./assets/css/tailwind.css";

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let panels = document.querySelectorAll(".tab-panel");
let dots = document.querySelectorAll(".dot");

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab =>{
  tab.addEventListener("click", ()=>{
    let tabTarget = tab.getAttribute("aria-controls")

    indicator.style.width = tab.getBoundingClientRect().width + 'px'
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


    panels.forEach(panel =>{
      let panelId = panel.getAttribute("id")
      if(tabTarget === panelId){
        panel.classList.remove("invisible", "opacity-0")
        panel.classList.add("visible", "opacity-100")
      } else {
        panel.classList.add("invisible", "opacity-0")
      }
    })

    dots.forEach(dot =>{

      let dotLabel = dot.getAttribute("aria-label");
      if(tabTarget === dotLabel){
        dot.classList.add("activ");
      }
      else{
        dot.classList.remove("activ");
      }
    });
  })
})

