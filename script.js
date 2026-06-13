const menuToggle=document.querySelector('[data-menu-toggle]');
const siteNav=document.querySelector('[data-site-nav]');
const reveals=document.querySelectorAll('.reveal');
const enterBtn=document.querySelector('[data-enter-site]');
const welcome=document.querySelector('[data-welcome]');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let globalPointer={x:window.innerWidth*.5,y:window.innerHeight*.45,active:false};
function setPointerVars(x,y){globalPointer={x,y,active:true};document.documentElement.style.setProperty('--mx',`${x}px`);document.documentElement.style.setProperty('--my',`${y}px`)}
setPointerVars(globalPointer.x,globalPointer.y);
window.addEventListener('pointermove',e=>setPointerVars(e.clientX,e.clientY),{passive:true});
window.addEventListener('scroll',()=>{document.documentElement.style.setProperty('--scrollY',`${window.scrollY}px`)},{passive:true});
menuToggle?.addEventListener('click',()=>{const open=siteNav?.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(Boolean(open))) });
if(enterBtn&&welcome){document.body.classList.add('no-scroll');enterBtn.addEventListener('click',()=>{welcome.classList.add('is-hidden');document.body.classList.remove('no-scroll')});}
const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'}):null;
reveals.forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i*35,210)}ms`;observer?observer.observe(el):el.classList.add('in-view')});
document.querySelectorAll('[data-sound-control]').forEach(control=>{const audio=control.querySelector('[data-audio]');const btn=control.querySelector('[data-sound-toggle]');const label=control.querySelector('[data-sound-label]');if(!audio||!btn||!label)return;const sync=playing=>{btn.classList.toggle('is-playing',playing);btn.setAttribute('aria-pressed',String(playing));label.textContent=playing?'Pause':'Play me'};btn.addEventListener('click',async()=>{try{document.querySelectorAll('[data-audio]').forEach(a=>{if(a!==audio)a.pause()});document.querySelectorAll('[data-sound-toggle]').forEach(b=>{if(b!==btn)b.classList.remove('is-playing')});if(audio.paused){await audio.play();sync(true)}else{audio.pause();sync(false)}}catch(e){label.textContent='Tap again'}});audio.addEventListener('ended',()=>sync(false));audio.addEventListener('pause',()=>{if(!audio.ended)sync(false)})});
const locationPins=document.querySelectorAll('[data-location-pin]');const locationTitle=document.querySelector('[data-location-title]');const locationCopy=document.querySelector('[data-location-copy]');locationPins.forEach(pin=>pin.addEventListener('click',()=>{locationPins.forEach(p=>p.classList.remove('is-active'));pin.classList.add('is-active');if(locationTitle)locationTitle.textContent=pin.dataset.title||'Metro Manila';if(locationCopy)locationCopy.textContent=pin.dataset.copy||''}));locationPins[0]?.classList.add('is-active');
const dialog=document.querySelector('[data-product-dialog]');const dialogTitle=document.querySelector('[data-dialog-title]');const dialogCopy=document.querySelector('[data-dialog-copy]');document.querySelectorAll('[data-product-card]').forEach(card=>{const btn=card.querySelector('button');btn?.addEventListener('click',()=>{if(!dialog)return;dialogTitle.textContent=card.dataset.title||'Serving note';dialogCopy.textContent=card.dataset.note||'';dialog.showModal?dialog.showModal():dialog.setAttribute('open','')})});document.querySelector('[data-dialog-close]')?.addEventListener('click',()=>dialog?.close());

function makeTextTargets(width,height,count){
  const off=document.createElement('canvas'); const ctx=off.getContext('2d',{willReadFrequently:true});
  off.width=Math.max(360,Math.round(width)); off.height=Math.max(260,Math.round(height));
  ctx.clearRect(0,0,off.width,off.height);
  const fontSize=Math.min(off.width*.34,off.height*.44);
  ctx.font=`900 ${fontSize}px Georgia, serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillStyle='white'; ctx.fillText('T&S',off.width*.52,off.height*.50);
  const data=ctx.getImageData(0,0,off.width,off.height).data;
  const points=[]; const step=Math.max(5,Math.round(Math.min(off.width,off.height)/70));
  for(let y=0;y<off.height;y+=step){for(let x=0;x<off.width;x+=step){if(data[(y*off.width+x)*4+3]>80)points.push({x:x/off.width*width,y:y/off.height*height})}}
  if(!points.length){for(let i=0;i<count;i++)points.push({x:width*.5+Math.cos(i)*width*.2,y:height*.5+Math.sin(i)*height*.2})}
  return Array.from({length:count},(_,i)=>points[i%points.length]);
}
class ParticleField{
  constructor(canvas,{hero=false}={}){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.hero=hero;this.particles=[];this.targets=[];this.tick=0;this.resize();window.addEventListener('resize',()=>this.resize());this.animate()}
  resize(){const dpr=Math.min(window.devicePixelRatio||1,2);const rect=this.canvas.getBoundingClientRect();this.w=rect.width||window.innerWidth;this.h=rect.height||window.innerHeight;this.canvas.width=this.w*dpr;this.canvas.height=this.h*dpr;this.ctx.setTransform(dpr,0,0,dpr,0,0);const area=(this.w*this.h)/10000;const count=this.hero?Math.max(520,Math.min(980,Math.round(area*7.2))):Math.max(420,Math.min(980,Math.round(area*6.0)));this.targets=this.hero?makeTextTargets(this.w,this.h,count):[];this.particles=Array.from({length:count},(_,i)=>this.makeParticle(i))}
  makeParticle(i){const angle=Math.random()*Math.PI*2;const target=this.targets[i]||{x:Math.random()*this.w,y:Math.random()*this.h};return{x:this.hero?target.x+(Math.random()-.5)*this.w*.55:Math.random()*this.w,y:this.hero?target.y+(Math.random()-.5)*this.h*.55:Math.random()*this.h,tx:target.x,ty:target.y,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:this.hero?.9+Math.random()*2.6:.7+Math.random()*2.1,a:.24+Math.random()*.66,phase:Math.random()*Math.PI*2,follower:!this.hero && i%5===0}}
  animate(){if(reduce)return;this.tick+=.012;const c=this.ctx;c.clearRect(0,0,this.w,this.h);const rect=this.canvas.getBoundingClientRect();const mx=globalPointer.x-rect.left,my=globalPointer.y-rect.top;const active=globalPointer.active;for(let i=0;i<this.particles.length;i++){const p=this.particles[i];if(this.hero){const shimmer=Math.sin(this.tick*2+p.phase)*5;p.x+=(p.tx+shimmer-p.x)*.038;p.y+=(p.ty+Math.cos(this.tick+p.phase)*4-p.y)*.038}else if(p.follower&&active){const orbit=this.tick*2.2+p.phase;const targetX=mx+Math.cos(orbit)*(52+(i%7)*10);const targetY=my+Math.sin(orbit)*(32+(i%5)*8);p.x+=(targetX-p.x)*.045;p.y+=(targetY-p.y)*.045}else{p.x+=p.vx+Math.sin(this.tick+p.phase)*.045;p.y+=p.vy+Math.cos(this.tick*.9+p.phase)*.045;if(p.x<-35)p.x=this.w+35;if(p.x>this.w+35)p.x=-35;if(p.y<-35)p.y=this.h+35;if(p.y>this.h+35)p.y=-35}if(active){const dx=mx-p.x,dy=my-p.y,dist=Math.hypot(dx,dy),range=this.hero?260:230;if(dist<range&&dist>1){const force=(1-dist/range)*(this.hero?2.0:1.05);p.x+=dx/dist*force;p.y+=dy/dist*force}}c.beginPath();const alpha=p.a*(this.hero?0.94:0.72);c.fillStyle=`rgba(242,207,140,${alpha})`;c.arc(p.x,p.y,p.r,0,Math.PI*2);c.fill()}requestAnimationFrame(()=>this.animate())}
}
document.querySelectorAll('[data-particles]').forEach(canvas=>new ParticleField(canvas,{hero:canvas.dataset.particles==='hero'}));
