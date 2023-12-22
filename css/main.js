document.getElementById('main').addEventListener('scroll',(e)=>{
    let scroll = e.target.scrollTop;
    console.log(scroll);

    let sec1=document.querySelector('#sc1')
    if(scroll<500){
        sec1.style.transform='translateY('+scroll+'px)'
    }
})