const filterEl =  document.getElementById("filter-container")

document.getElementById("filter-btn").addEventListener("click", ()=> {
   return document.getElementById("filter-section").style.display ="block"
})

filterEl.addEventListener("click", ()=> {
    return document.getElementById("filter-section").style.display = "none"
})
document.body.addEventListener("click", (e)=>{
    console.log(e)
})
