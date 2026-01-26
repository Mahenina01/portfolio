const index = document.querySelector('.nav-index');
const items = document.querySelectorAll('li'); 

function handleIndicator(element){
// boucle sur tous items pour retirer 'is-active'

    items.forEach(item=>{
        item.classList.remove("is-active");
    });
// style for index 
    index.style.width=`${element.offsetWidth}px`;

    //ajout element 
    element.style.color='#dc45fe';
   // element.style.color='#ff0000';

}

items.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        handleIndicator(e.target);
    });
    item.classList.contains('is-active') && handleIndicator(item);//ternaire avancer pour eviter ? et le if condition
});