let starcontainer = document.querySelector(".star-rating-container")
let alllable = document.getElementsByTagName("label")
let imogy = document.querySelector(".imogy");
let imogy_catagory = document.querySelector(".imogy-catagory")
console.log(imogy.innerText)
console.log(imogy_catagory.innerText)
for (let i = 0; i <= alllable.length; i++) {
    alllable[i].addEventListener("click", (e) => {
        if (e.target.id === "star1") {
            imogy_catagory.innerText = "Very bed"
            imogy.innerText = "😢"
        }
        else if (e.target.id === "star2") {
            imogy_catagory.innerText = "Not good"
            imogy.innerText = "😞"
        }
        else if (e.target.id === "star3") {
            imogy_catagory.innerText = " Good"
            imogy.innerText = "😐"
        }
        else if (e.target.id === "star4") {
            imogy_catagory.innerText = "Nice"
            imogy.innerText = "😀"
        }
        else if (e.target.id === "star5") {
            imogy_catagory.innerText = "Exxelent"
            imogy.innerText = " 😎"
        }
    })
}
