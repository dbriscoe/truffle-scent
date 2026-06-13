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

function setMapPin(pin){
  const lat=pin.dataset.lat, lon=pin.dataset.lon, bbox=pin.dataset.bbox;
  const iframe=document.querySelector('[data-map-frame]')||document.querySelector('.real-map iframe');
  const openLink=document.querySelector('[data-map-open]')||document.querySelector('.map-open-link');
  if(lat&&lon&&bbox&&iframe){
    const safeBbox=bbox.replace(/,/g,'%2C');
    iframe.src=`https://www.openstreetmap.org/export/embed.html?bbox=${safeBbox}&layer=mapnik&marker=${lat}%2C${lon}`;
    if(openLink)openLink.href=`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=13/${lat}/${lon}`;
  }
}
const locationPins=document.querySelectorAll('[data-location-pin]');const locationTitle=document.querySelector('[data-location-title]');const locationCopy=document.querySelector('[data-location-copy]');locationPins.forEach(pin=>pin.addEventListener('click',()=>{locationPins.forEach(p=>p.classList.remove('is-active'));pin.classList.add('is-active');if(locationTitle)locationTitle.textContent=pin.dataset.title||'Metro Manila';if(locationCopy)locationCopy.textContent=pin.dataset.copy||'';setMapPin(pin)}));locationPins[0]?.classList.add('is-active');

const dialog=document.querySelector('[data-product-dialog]');
const dialogTitle=document.querySelector('[data-dialog-title]');
const dialogDescription=document.querySelector('[data-dialog-description]')||document.querySelector('[data-dialog-copy]');
const dialogPairings=document.querySelector('[data-dialog-pairings]');
const dialogTip=document.querySelector('[data-dialog-tip]');
const dialogStorage=document.querySelector('[data-dialog-storage]');
document.querySelectorAll('[data-product-card]').forEach(card=>{const btn=card.querySelector('button');btn?.addEventListener('click',()=>{if(!dialog)return;if(dialogTitle)dialogTitle.textContent=card.dataset.title||'Product details';if(dialogDescription)dialogDescription.textContent=card.dataset.description||card.dataset.note||'';if(dialogPairings)dialogPairings.textContent=card.dataset.pairings||'Ask LEE for the best current pairing.';if(dialogTip)dialogTip.textContent=card.dataset.tip||'Use lightly at first, then adjust to taste.';if(dialogStorage)dialogStorage.textContent=card.dataset.storage||'Store according to the label and keep opened jars sealed.';dialog.showModal?dialog.showModal():dialog.setAttribute('open','')})});
document.querySelector('[data-dialog-close]')?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;if(outside)dialog.close()});

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
function truffleOffset(i,total){
  const golden=2.3999632297;
  const a=i*golden;
  const layer=(i%233)/233;
  const r=Math.sqrt(layer);
  // A round, knobbly filled cluster inspired by the truffle in the logo.
  const edge=1+.10*Math.sin(4*a)+.08*Math.cos(7*a)+.045*Math.sin(11*a);
  let x=Math.cos(a)*r*78*edge;
  let y=Math.sin(a)*r*75*(1+.05*Math.cos(5*a));
  x+=Math.sin(a*3.1)*5*r;
  y+=Math.cos(a*2.7)*5*r;
  return {x,y};
}
function flowerOffset(i,total){
  const golden=2.3999632297;
  const a=i*golden;
  const petalCount=5;
  const layer=(i%257)/257;
  const r=Math.sqrt(layer);
  const petal=Math.abs(Math.sin((petalCount*0.5)*a));
  const bloom=(24+54*petal)*r;
  let x=Math.cos(a)*bloom;
  let y=Math.sin(a)*bloom*0.96;
  x+=Math.cos(a*petalCount)*10*r;
  y+=Math.sin(a*petalCount)*10*r;
  // small central cluster keeps it reading as a flower rather than a ring
  if(i%9===0){x*=0.38; y*=0.38}
  return {x,y};
}
class ParticleField{
  constructor(canvas,{hero=false}={}){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.hero=hero;this.shape=canvas.dataset.particlesShape||(document.body.classList.contains('perfume-page')&&!hero?'flower':'truffle');this.particles=[];this.targets=[];this.tick=0;this.resize();window.addEventListener('resize',()=>this.resize());this.animate()}
  resize(){const dpr=Math.min(window.devicePixelRatio||1,2);const rect=this.canvas.getBoundingClientRect();this.w=rect.width||window.innerWidth;this.h=rect.height||window.innerHeight;this.canvas.width=this.w*dpr;this.canvas.height=this.h*dpr;this.ctx.setTransform(dpr,0,0,dpr,0,0);const area=(this.w*this.h)/10000;const count=this.hero?Math.max(520,Math.min(980,Math.round(area*7.2))):Math.max(520,Math.min(1150,Math.round(area*7.4)));this.targets=this.hero?makeTextTargets(this.w,this.h,count):[];this.particles=Array.from({length:count},(_,i)=>this.makeParticle(i,count))}
  makeParticle(i,count){const target=this.targets[i]||{x:Math.random()*this.w,y:Math.random()*this.h};const offset=this.shape==='flower'?flowerOffset(i,count):truffleOffset(i,count);return{x:this.hero?target.x+(Math.random()-.5)*this.w*.55:Math.random()*this.w,y:this.hero?target.y+(Math.random()-.5)*this.h*.55:Math.random()*this.h,tx:target.x,ty:target.y,sx:offset.x,sy:offset.y,vx:(Math.random()-.5)*.24,vy:(Math.random()-.5)*.24,r:this.hero?.9+Math.random()*2.6:.7+Math.random()*2.3,a:.24+Math.random()*.66,phase:Math.random()*Math.PI*2,follower:!this.hero && i%3!==0}}
  animate(){if(reduce)return;this.tick+=.012;const c=this.ctx;c.clearRect(0,0,this.w,this.h);const rect=this.canvas.getBoundingClientRect();const mx=globalPointer.x-rect.left,my=globalPointer.y-rect.top;const active=globalPointer.active;for(let i=0;i<this.particles.length;i++){const p=this.particles[i];if(this.hero){const shimmer=Math.sin(this.tick*2+p.phase)*5;p.x+=(p.tx+shimmer-p.x)*.038;p.y+=(p.ty+Math.cos(this.tick+p.phase)*4-p.y)*.038}else if(p.follower&&active){const wobbleX=Math.sin(this.tick*2.1+p.phase)*5;const wobbleY=Math.cos(this.tick*1.7+p.phase)*4;const targetX=mx+p.sx+wobbleX;const targetY=my+p.sy+wobbleY;p.x+=(targetX-p.x)*.052;p.y+=(targetY-p.y)*.052}else{p.x+=p.vx+Math.sin(this.tick+p.phase)*.05;p.y+=p.vy+Math.cos(this.tick*.9+p.phase)*.05;if(p.x<-35)p.x=this.w+35;if(p.x>this.w+35)p.x=-35;if(p.y<-35)p.y=this.h+35;if(p.y>this.h+35)p.y=-35}if(this.hero&&active){const dx=mx-p.x,dy=my-p.y,dist=Math.hypot(dx,dy),range=260;if(dist<range&&dist>1){const force=(1-dist/range)*2.0;p.x+=dx/dist*force;p.y+=dy/dist*force}}c.beginPath();const alpha=p.a*(this.hero?0.94:(p.follower?.78:.42));c.fillStyle=`rgba(242,207,140,${alpha})`;c.arc(p.x,p.y,p.r,0,Math.PI*2);c.fill()}requestAnimationFrame(()=>this.animate())}
}
document.querySelectorAll('[data-particles]').forEach(canvas=>new ParticleField(canvas,{hero:canvas.dataset.particles==='hero'}));
