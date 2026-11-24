// Demo initiator - ANALYTICS / PERFORMANCE category.
// Simulates an analytics library: visitor id, session and page-view counter.
(function(){var id=(document.cookie.match(/hp_demo_vid=([^;]+)/)||[])[1]||Math.random().toString(36).slice(2);
var y=new Date(Date.now()+365*864e5).toUTCString();
document.cookie='hp_demo_vid='+id+'; expires='+y+'; path=/; SameSite=Lax';
document.cookie='hp_demo_session='+Date.now()+'; path=/; SameSite=Lax';
try{sessionStorage.setItem('hp_demo_pageviews',String(1+Number(sessionStorage.getItem('hp_demo_pageviews')||0)))}catch(e){}
window.hpDemo=window.hpDemo||{};window.hpDemo.analytics=true;})();
