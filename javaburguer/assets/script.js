const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)






