const filterEl =  document.getElementById("filter-section")
      menuBtn = document.getElementById("filter-btn")
      likeEl = document.querySelectorAll(".far");

menuBtn.addEventListener("click", ()=> {
    if (filterEl.style.display === "none"){
        filterEl.style.display = "block"
    }
    else {
       filterEl.style.display = "none"
    }
})

likeEl.forEach(item => {
    item.addEventListener("click", ()=> {
        item.classList.toggle("fas");
    })
})


