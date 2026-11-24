// Site helper - STRICTLY NECESSARY. Sets an essential cookie and powers the cookie inspector.
document.cookie='hp_demo_essential=1; path=/; SameSite=Lax';
function hpList(){var c=document.cookie?document.cookie.split('; '):[];return c.map(function(x){var i=x.indexOf('=');return[x.slice(0,i),x.slice(i+1)]})}
function hpStore(s){var o=[];try{for(var i=0;i<s.length;i++){var k=s.key(i);o.push([k,s.getItem(k)])}}catch(e){}return o}
function hpEsc(v){return String(v).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function hpRender(){var el=document.getElementById('inspector');if(!el)return;
 var rows=function(a){return a.length?a.map(function(r){return'<tr><td>'+hpEsc(r[0])+'</td><td>'+hpEsc(String(r[1]).slice(0,80))+'</td></tr>'}).join(''):'<tr><td colspan="2">None</td></tr>'};
 var d=window.hpDemo||{};var s=function(v){return v?'<span class="ok">Ran</span>':'<span class="no">Blocked / not run</span>'};
 var gpc=navigator.globalPrivacyControl;
 el.innerHTML='<h3>Demo scripts on this page</h3><table><tr><th>Script (category)</th><th>Status</th></tr>'+
 '<tr><td>functional-demo.js (Functional)</td><td>'+s(d.functional)+'</td></tr>'+
 '<tr><td>analytics-demo.js (Analytics)</td><td>'+s(d.analytics)+'</td></tr>'+
 '<tr><td>advertising-demo.js (Advertising)</td><td>'+s(d.advertising)+'</td></tr></table>'+
 '<h3>Global Privacy Control</h3><p>navigator.globalPrivacyControl = <b>'+(gpc===true?'true (signal sent)':gpc===false?'false':'not supported in this browser')+'</b></p>'+
 '<h3>Cookies visible to this page ('+hpList().length+')</h3><table><tr><th>Name</th><th>Value</th></tr>'+rows(hpList())+'</table>'+
 '<h3>localStorage</h3><table><tr><th>Key</th><th>Value</th></tr>'+rows(hpStore(localStorage))+'</table>'+
 '<h3>sessionStorage</h3><table><tr><th>Key</th><th>Value</th></tr>'+rows(hpStore(sessionStorage))+'</table>'}
function hpClear(){hpList().forEach(function(c){document.cookie=c[0]+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'});try{localStorage.clear();sessionStorage.clear()}catch(e){}location.reload()}
document.addEventListener('DOMContentLoaded',function(){hpRender();setInterval(hpRender,2000)});
