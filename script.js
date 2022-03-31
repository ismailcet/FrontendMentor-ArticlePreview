const shareBtn=document.querySelector('#share');
const shareMobile=document.querySelector('#share-mobile');
const hide=document.querySelector('.hide');
const person=document.querySelector('.person');
let windowSize=window.innerWidth;
shareBtn.addEventListener('click',toggleHide)
shareMobile.addEventListener('click',toggleHide)
function toggleHide(e){
    e.preventDefault();
    if(windowSize<=800){
        if(hide.classList.contains('show')){
            hide.classList.remove('show');
            person.style.visibility='visible';
        }else{
            hide.classList.add('show');
            person.style.visibility='hidden';
        }
    }else{
        if(hide.classList.contains('show')){
            hide.classList.remove('show');
        }else{
            hide.classList.add('show');
        }
    }
};
if(windowSize<=800){
    person.style.visibility='visible';
}