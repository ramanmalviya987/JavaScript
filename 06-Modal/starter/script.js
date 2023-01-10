'use strict';

const model = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal');


const closeModelButton = function(){
    model.classList.add('hidden')
    overlay.classList.add('hidden')

}

// open modal box
for (let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
       model.classList.remove('hidden')
       overlay.classList.remove('hidden')
    })
}


//close modal box
btnCloseModal.addEventListener('click',closeModelButton)

overlay.addEventListener('click',closeModelButton)


document.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key==='Escape' && !model.classList.contains('hidden')){
        closeModelButton();
    }
})

