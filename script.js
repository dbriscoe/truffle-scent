const header=document.querySelector('[data-header]');
const menuToggle=document.querySelector('[data-menu-toggle]');
const siteNav=document.querySelector('[data-site-nav]');
const reveals=document.querySelectorAll('.reveal');
const enterBtn=document.querySelector('[data-enter-site]');
const welcome=document.querySelector('[data-welcome]');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let globalPointer={x:window.innerWidth*.5,y:window.innerHeight*.42,active:false};
function setPointerVars(x,y){globalPointer={x,y,active:true};document.documentElement.style.setProperty('--mx',`${x}px`);document.documentElement.style.setProperty('--my',`${y}px`)}
setPointerVars(globalPointer.x,globalPointer.y);
window.addEventListener('pointermove',e=>setPointerVars(e.clientX,e.clientY),{passive:true});
menuToggle?.addEventListener('click',()=>{const open=siteNav?.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(Boolean(open)))});
if(enterBtn&&welcome){document.body.classList.add('no-scroll');enterBtn.addEventListener('click',()=>{welcome.classList.add('is-hidden');document.body.classList.remove('no-scroll')});}
const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'}):null;
reveals.forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i*35,210)}ms`;observer?observer.observe(el):el.classList.add('in-view')});

document.querySelectorAll('[data-sound-control]').forEach(control=>{const audio=control.querySelector('[data-audio]');const btn=control.querySelector('[data-sound-toggle]');const label=control.querySelector('[data-sound-label]');if(!audio||!btn||!label)return;const sync=playing=>{btn.classList.toggle('is-playing',playing);btn.setAttribute('aria-pressed',String(playing));label.textContent=playing?'Pause':'Play me'};btn.addEventListener('click',async()=>{try{document.querySelectorAll('[data-audio]').forEach(a=>{if(a!==audio)a.pause()});document.querySelectorAll('[data-sound-toggle]').forEach(b=>{if(b!==btn)b.classList.remove('is-playing')});if(audio.paused){await audio.play();sync(true)}else{audio.pause();sync(false)}}catch(e){label.textContent='Tap again'}});audio.addEventListener('ended',()=>sync(false));audio.addEventListener('pause',()=>{if(!audio.ended)sync(false)})});

function setMapPin(pin){const iframe=document.querySelector('[data-map-frame]')||document.querySelector('.real-map iframe');const openLink=document.querySelector('[data-map-open]')||document.querySelector('.map-open-link');const lat=pin.dataset.lat,lon=pin.dataset.lon,bbox=pin.dataset.bbox;if(iframe&&lat&&lon&&bbox){iframe.src=`https://www.openstreetmap.org/export/embed.html?bbox=${bbox.replace(/,/g,'%2C')}&layer=mapnik&marker=${lat}%2C${lon}`;}if(openLink&&lat&&lon){openLink.href=`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=13/${lat}/${lon}`;}}
const locationPins=document.querySelectorAll('[data-location-pin]');const locationTitle=document.querySelector('[data-location-title]');const locationCopy=document.querySelector('[data-location-copy]');locationPins.forEach(pin=>pin.addEventListener('click',()=>{locationPins.forEach(p=>p.classList.remove('is-active'));pin.classList.add('is-active');if(locationTitle)locationTitle.textContent=pin.dataset.title||'Metro Manila';if(locationCopy)locationCopy.textContent=pin.dataset.copy||'';setMapPin(pin)}));locationPins[0]?.classList.add('is-active');


(function renderCentralPrices(){
  const priceData=window.TRUFFLE_SCENT_PRICES||{};
  const cards=document.querySelectorAll('[data-product-card], [data-price-id]');
  cards.forEach(card=>{
    const key=card.dataset.priceId||(card.id||'').replace(/^prod-/,'');
    const item=priceData[key];
    if(!item||item.hidden)return;
    const price=(item.price||'').trim();
    const stock=(item.stock||'').trim();
    if(!price&&!stock)return;
    card.dataset.price=price;
    card.dataset.stock=stock;
    const target=card.matches('.fragrance-item')?(card.querySelector('div')||card):card;
    let display=target.querySelector('[data-price-display]');
    if(!display){
      display=document.createElement('div');
      display.className='product-price';
      display.setAttribute('data-price-display','');
      const action=target.querySelector('button, .text-link, .btn');
      action?target.insertBefore(display,action):target.appendChild(display);
    }
    display.innerHTML='';
    if(price){
      const value=document.createElement('strong');
      value.textContent=price;
      display.appendChild(value);
    }
    if(stock){
      const badge=document.createElement('span');
      badge.textContent=stock;
      display.appendChild(badge);
    }
  });
})();

const dialog=document.querySelector('[data-product-dialog]');const dialogTitle=document.querySelector('[data-dialog-title]');const dialogCopy=document.querySelector('[data-dialog-copy]');const dialogKicker=document.querySelector('[data-dialog-kicker]');const dialogPair=document.querySelector('[data-dialog-pair], [data-dialog-best], [data-dialog-pairings]');const dialogTip=document.querySelector('[data-dialog-tip]');const dialogStorage=document.querySelector('[data-dialog-storage]');document.querySelectorAll('[data-product-card]').forEach(card=>{const btn=card.querySelector('button');btn?.addEventListener('click',()=>{if(!dialog)return;if(dialogKicker)dialogKicker.textContent=card.dataset.kicker||'Product details';if(dialogTitle)dialogTitle.textContent=card.dataset.title||'Product details';if(dialogCopy)dialogCopy.textContent=card.dataset.detail||card.dataset.description||card.dataset.note||'';if(dialogPair)dialogPair.textContent=card.dataset.best||card.dataset.pair||card.dataset.pairings||'Message LEE for pairing guidance.';if(dialogTip)dialogTip.textContent=card.dataset.tip||'Use thoughtfully and taste as you go.';if(dialogStorage)dialogStorage.textContent=card.dataset.storage||'Check pack guidance and store carefully.';dialog.showModal?dialog.showModal():dialog.setAttribute('open','')})});document.querySelector('[data-dialog-close]')?.addEventListener('click',()=>dialog?.close());dialog?.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;if(outside)dialog.close()});


function makeTextTargets(width,height,count){
  const off=document.createElement('canvas'),ctx=off.getContext('2d',{willReadFrequently:true});
  off.width=Math.max(420,Math.round(width));
  off.height=Math.max(320,Math.round(height));
  ctx.clearRect(0,0,off.width,off.height);
  const size=Math.min(off.width*.42,off.height*.25);
  ctx.font=`900 ${size}px Georgia, serif`;
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillStyle='white';
  ctx.fillText('T&S',off.width*.50,off.height*.68);
  const data=ctx.getImageData(0,0,off.width,off.height).data;
  const points=[];
  const step=Math.max(4,Math.round(Math.min(off.width,off.height)/92));
  for(let y=0;y<off.height;y+=step){for(let x=0;x<off.width;x+=step){if(data[(y*off.width+x)*4+3]>80)points.push({x:x/off.width*width,y:y/off.height*height})}}
  return Array.from({length:count},(_,i)=>points[i%points.length]||{x:width*.5,y:height*.68});
}
function truffleOffset(i){
  const golden=2.3999632297,a=i*golden,layer=(i%233)/233,r=Math.sqrt(layer);
  const edge=1+.10*Math.sin(4*a)+.08*Math.cos(7*a)+.045*Math.sin(11*a);
  return{x:Math.cos(a)*r*78*edge+Math.sin(a*3.1)*5*r,y:Math.sin(a)*r*75*(1+.05*Math.cos(5*a))+Math.cos(a*2.7)*5*r,kind:'truffle'};
}
function flowerOffset(i){
  const petals=6;
  if(i%7===0){
    const a=i*2.3999632297,r=Math.sqrt((i%89)/89)*20;
    return{x:Math.cos(a)*r,y:Math.sin(a)*r,kind:'centre'};
  }
  const petal=(i%petals),base=-Math.PI/2+petal*Math.PI*2/petals;
  const seed=((i*9301+49297)%233280)/233280;
  const along=(.18+seed*.82)*48;
  const across=(Math.sin(i*12.9898)*.5+.5-.5)*28;
  const wobble=(Math.cos(i*4.712)*.5+.5-.5)*9;
  const x=Math.cos(base)*(32+along+wobble)+Math.cos(base+Math.PI/2)*across;
  const y=Math.sin(base)*(32+along+wobble)+Math.sin(base+Math.PI/2)*across;
  return{x,y,kind:'petal'};
}
class ParticleField{
  constructor(canvas,{hero=false}={}){
    this.canvas=canvas;this.ctx=canvas.getContext('2d');this.hero=hero;
    this.shape=canvas.dataset.particlesShape||(document.body.classList.contains('perfume-page')&&!hero?'flower':'truffle');
    this.particles=[];this.targets=[];this.tick=0;this.resize();window.addEventListener('resize',()=>this.resize());this.animate();
  }
  resize(){
    const dpr=Math.min(window.devicePixelRatio||1,2),rect=this.canvas.getBoundingClientRect();
    this.w=rect.width||window.innerWidth;this.h=rect.height||window.innerHeight;
    this.canvas.width=this.w*dpr;this.canvas.height=this.h*dpr;this.ctx.setTransform(dpr,0,0,dpr,0,0);
    const area=(this.w*this.h)/10000;
    const count=this.hero?Math.max(480,Math.min(920,Math.round(area*7.6))):Math.max(230,Math.min(720,Math.round(area*4.4)));
    this.targets=this.hero?makeTextTargets(this.w,this.h,count):[];
    this.particles=Array.from({length:count},(_,i)=>this.makeParticle(i,count));
  }
  makeParticle(i,count){
    const target=this.targets[i]||{x:Math.random()*this.w,y:Math.random()*this.h};
    const offset=this.shape==='flower'?flowerOffset(i):truffleOffset(i);
    return{x:this.hero?target.x+(Math.random()-.5)*this.w*.36:Math.random()*this.w,y:this.hero?target.y+(Math.random()-.5)*this.h*.36:Math.random()*this.h,tx:target.x,ty:target.y,sx:offset.x,sy:offset.y,kind:offset.kind,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:this.hero?1.05+Math.random()*2.25:.75+Math.random()*1.9,a:.30+Math.random()*.62,phase:Math.random()*Math.PI*2,follower:!this.hero&&i%3!==0};
  }
  animate(){
    if(reduce)return;this.tick+=.012;const c=this.ctx;c.clearRect(0,0,this.w,this.h);
    const rect=this.canvas.getBoundingClientRect(),mx=globalPointer.x-rect.left,my=globalPointer.y-rect.top,active=globalPointer.active;
    for(const p of this.particles){
      if(this.hero){
        const shimmer=Math.sin(this.tick*2+p.phase)*4.2;
        p.x+=(p.tx+shimmer-p.x)*.045;p.y+=(p.ty+Math.cos(this.tick+p.phase)*3.2-p.y)*.045;
      }else if(p.follower&&active){
        const targetX=mx+p.sx+Math.sin(this.tick*2.1+p.phase)*4.2;
        const targetY=my+p.sy+Math.cos(this.tick*1.7+p.phase)*3.5;
        p.x+=(targetX-p.x)*.056;p.y+=(targetY-p.y)*.056;
      }else{
        p.x+=p.vx+Math.sin(this.tick+p.phase)*.05;p.y+=p.vy+Math.cos(this.tick*.9+p.phase)*.05;
        if(p.x<-35)p.x=this.w+35;if(p.x>this.w+35)p.x=-35;if(p.y<-35)p.y=this.h+35;if(p.y>this.h+35)p.y=-35;
      }
      if(this.hero&&active){const dx=mx-p.x,dy=my-p.y,dist=Math.hypot(dx,dy),range=230;if(dist<range&&dist>1){const force=(1-dist/range)*1.45;p.x+=dx/dist*force;p.y+=dy/dist*force}}
      c.beginPath();const alpha=p.a*(this.hero?.96:(p.follower?.80:.38));
      if(this.shape==='flower'&&!this.hero){c.fillStyle=p.kind==='centre'?`rgba(247,210,132,${alpha})`:`rgba(255,166,190,${alpha})`;}else{c.fillStyle=`rgba(242,207,140,${alpha})`;}
      c.arc(p.x,p.y,p.r,0,Math.PI*2);c.fill();
    }
    requestAnimationFrame(()=>this.animate());
  }
}
document.querySelectorAll('[data-particles]').forEach(canvas=>new ParticleField(canvas,{hero:canvas.dataset.particles==='hero'}));
