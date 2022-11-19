let switcherlis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".switchers img");
imges=Array(imgs)
console.log(imges);
switcherlis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
  });
  function removeActive(){
    switcherlis.forEach((li) =>{
       li.classList.remove("active");
       this.classList.add("active");
       this.classList.add("rounded-pill")
    })
  };
  function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  }