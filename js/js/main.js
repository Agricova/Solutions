document.addEventListener('DOMContentLoaded',function(){
  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if(menuBtn && navList){
    menuBtn.addEventListener('click', function(e){
      e.stopPropagation();
      navList.classList.toggle('show');
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    });
    document.addEventListener('click', (e)=>{
      if(!navList.contains(e.target) && !menuBtn.contains(e.target)){
        navList.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Quote dropdown toggle
  document.querySelectorAll('.quote-container').forEach(qc=>{
    const btn=qc.querySelector('.quote-toggle');
    const dd=qc.querySelector('.quote-dropdown');
    if(btn && dd){
      btn.addEventListener('click',e=>{
        e.stopPropagation();
        qc.classList.toggle('open');
      });
    }
  });
  document.addEventListener('click',()=>document.querySelectorAll('.quote-container.open').forEach(c=>c.classList.remove('open')));

  // Floating Contact
  const cb=document.getElementById('hc-contact');
  if(cb){
    cb.addEventListener('click',()=>location.href='contact.html');
  }
});