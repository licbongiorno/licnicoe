/** Script que corre antes de pintar: evita la intro si ya se vio en la sesión o si se prefiere menos movimiento. */
export const introHeadScript = `try{if(sessionStorage.getItem('intro-seen')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('intro-done')}}catch(e){}`;
