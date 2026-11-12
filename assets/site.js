
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(status){status.textContent='Demo only: this enquiry has not been sent. Connect an approved backend or clinic email workflow before launch.';status.classList.add('show');}form.reset();}));
const langBtn=document.querySelector('[data-lang-toggle]');
if(langBtn){langBtn.addEventListener('click',()=>{alert('Tamil translation can be added after the clinic approves the translated content. This demo currently uses English.');});}
