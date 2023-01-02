// $(window).on('load',function(){
//     $('.loader').fadeOut(2000);
//     $('.body').fadeIn(1000);
// });

// $(window).on('load',function(){
//     setTimeout(function(){
//         $(".loader").hide();
//     },1000)
// });
var navlink = document.querySelectorAll('.menulink');
var typing = new Typed('.role',{
    strings : ["Full Stack Developer","Software Engineer","Software Developer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1500
})

document.querySelector('.darkmode').onclick = function(){
    document.querySelector('.body').classList.toggle('dark')
}
document.querySelector('.mobile').onclick = function(){
    document.querySelector('.navmenu').classList.toggle('toggle');
    // document.querySelector('.navmenu').style.right = '100%';
}
for(let i=0;i<navlink.length;i++){
    document.querySelectorAll('.menulink')[i].onclick = function(){
    document.querySelector('.navmenu').classList.remove('toggle');}
}
