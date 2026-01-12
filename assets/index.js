document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const btn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }));
  }
});
