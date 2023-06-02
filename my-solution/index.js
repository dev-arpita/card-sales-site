const filterEl =  document.getElementById("filter-container")
    likeEl = document.querySelectorAll(".like");
console.log(likeEl)
document.getElementById("filter-btn").addEventListener("click", ()=> {
    if (document.getElementById("filter-section").style.display === "none"){
        document.getElementById("filter-section").style.display = "block"
    }
    else {
        document.getElementById("filter-section").style.display = "none"
    }
})
likeEl.addEventListener("click", ()=> {
    console.log("liked")
})

// filterEl.addEventListener("click", ()=> {
//      document.getElementById("filter-section").style.display = "none"
// })
// document.addEventListener("click", (e)=>{
//     if(document.getElementById("filter-section").style.display === "block"){
//         if(!document.getElementById("filter-section").contains(e.target))
//           document.getElementById("filter-section").style.display = "none"
//     }
// })
