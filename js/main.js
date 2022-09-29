
// Menu show & hide -----
const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// Mobile  -
const navLink = document.querySelectorAll(".nav-link")


function linkAction() {

    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

// Skills lists -----
const skillsContent = document.querySelectorAll(".skills-content"),
      skillsHeader = document.querySelectorAll(".skills-header")



function toggleSkills() {

    let itemClass = this.parentNode.className


    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills-content skills-close"
    }

    if(itemClass === "skills-content skills-close"){
        this.parentNode.className = "skills-content skills-open"
    }
}

skillsHeader.forEach(el => el.addEventListener("click", toggleSkills) )


// Qualifications tabs -----

const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]")

      

tabs.forEach(tab => {

    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification-active")
        })
        target.classList.add("qualification-active")

        // This piece of code shows an error.
        /* tab.forEach(tab => {
            tab.classList.remove("qualification-active")
        })
        tab.classList.add("qualification-active") */
        
    })
})