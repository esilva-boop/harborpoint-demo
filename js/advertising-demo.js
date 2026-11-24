// Demo initiator - ADVERTISING / TARGETING category.
// Simulates an ad-tech tag: campaign and audience cookies plus a tracking pixel.
(function(){var y=new Date(Date.now()+90*864e5).toUTCString();
document.cookie='hp_demo_ad_campaign=spring_savings; expires='+y+'; path=/; SameSite=Lax';
document.cookie='hp_demo_ad_audience=prospect; expires='+y+'; path=/; SameSite=Lax';
try{localStorage.setItem('hp_demo_ad_seen',String(Date.now()))}catch(e){}
var p=new Image(1,1);p.alt='';p.src='img/pixel.gif?c=spring_savings&t='+Date.now();
window.hpDemo=window.hpDemo||{};window.hpDemo.advertising=true;})();
