// Demo initiator - FUNCTIONAL / PREFERENCES category.
// Sets a language-preference cookie and a localStorage item.
(function(){var y=new Date(Date.now()+180*864e5).toUTCString();
document.cookie='hp_demo_lang=en-US; expires='+y+'; path=/; SameSite=Lax';
try{localStorage.setItem('hp_demo_theme','light')}catch(e){}
window.hpDemo=window.hpDemo||{};window.hpDemo.functional=true;})();
