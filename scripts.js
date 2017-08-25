/*    modal-content    */

var btnOpen = document.querySelector(".open-form");
var modalContent = document.querySelector(".modal-content");
var btnClose = modalContent.querySelector(".btn-cancel");

btnOpen.addEventListener("click", function(event){
   event.preventDefault();
   modalContent.classList.add("modal-content-show");
});

btnClose.addEventListener("click", function(event){
    event.preventDefault();
    modalContent.classList.remove("modal-content-show");
});