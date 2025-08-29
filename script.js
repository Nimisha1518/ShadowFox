// Mobile menu (progressive enhancement)
    function toggleMenu(){
      const links = document.querySelector('.navlinks');
      if(!links) return; 
      const visible = getComputedStyle(links).display !== 'none';
      links.style.display = visible ? 'none' : 'flex';
    }

    // Intersection-based reveal animations (disabled if user prefers reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!prefersReducedMotion && 'IntersectionObserver' in window){
      document.querySelectorAll('.reveal').forEach(el => el.classList.remove('in'));
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
      },{ threshold:.12 });
      document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el=> el.classList.add('in'));
    }

    async function submitForm(e){
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');

  // 👉 Replace with your Formspree endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/xpwjqvpw";

  const formData = new FormData(form);
  formData.append('_subject', 'New message from Nimisha Portfolio');

  submitBtn.disabled = true;
  status.textContent = '';

  try {
    const resp = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (resp.ok) {
      form.reset();
      status.className = 'success';
      status.textContent = "✅ Thanks! Your message has been sent.";
    } else {
      status.className = 'error';
      status.textContent = "⚠️ Oops! Something went wrong. Try again.";
    }
  } catch (err) {
    status.className = 'error';
    status.textContent = "⚠️ Network error. Please try later.";
  } finally {
    submitBtn.disabled = false;
    setTimeout(()=>{ status.textContent=''; status.className=''; }, 6000);
  }
}

    // Year autopopulate
    document.getElementById('year').textContent = new Date().getFullYear();