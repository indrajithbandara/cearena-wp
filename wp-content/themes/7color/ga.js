(function(){var s=true,t=false,aa=window,u=undefined,v=Math,ba="push",fa="slice",ga="cookie",y="charAt",z="indexOf",A="gaGlobal",ha="getTime",ja="toString",B="window",D="length",E="document",F="split",G="location",ka="href",H="substring",I="join",L="toLowerCase";var la="_gat",ma="_gaq",na="4.8.8",oa="_gaUserPrefs",pa="ioo",M="&",N="=",O="__utma=",qa="__utmb=",ra="__utmc=",sa="__utmk=",ta="__utmv=",ua="__utmz=",va="__utmx=",wa="GASO=";var xa=function(){var k=this,i=[],j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";k.wc=function(l){i[l]=s};k.Ob=function(){for(var l=[],h=0;h<i[D];h++)if(i[h])l[v.floor(h/6)]^=1<<h%6;for(h=0;h<l[D];h++)l[h]=j[y](l[h]||0);return l[I]("")}},ya=new xa;function Q(k){ya.wc(k)};var za=function(k,i){var j=this;j.window=k;j.document=i;j.nc=function(l){return navigator.userAgent[z](l)>=0};j.hb=function(l){if(!l||!j.nc("Firefox"))return l;l=l.replace(/\n|\r/g," ");for(var h=0,p=l[D];h<p;++h){var m=l.charCodeAt(h)&255;if(m==10||m==13)l=l[H](0,h)+"?"+l[H](h+1)}return l}},R=new za(aa,document);var Aa=function(k){return function(i,j,l){k[i]=function(){Q(j);return l.apply(k,arguments)};return l}},S=function(k){return u==k||"-"==k||""==k},T=function(k,i,j){var l="-",h;if(!S(k)&&!S(i)&&!S(j)){h=k[z](i);if(h>-1){j=k[z](j,h);if(j<0)j=k[D];l=k[H](h+i[z](N)+1,j)}}return l},Ba=function(k){var i=t,j=0,l,h;if(!S(k)){i=s;for(l=0;l<k[D];l++){h=k[y](l);j+="."==h?1:0;i=i&&j<=1&&(0==l&&"-"==h||".0123456789"[z](h)>-1)}}return i},U=function(k,i){var j=encodeURIComponent;if(j instanceof Function)return i?
encodeURI(k):j(k);else{Q(68);return escape(k)}},Ca=function(k,i){var j=decodeURIComponent,l;k=k[F]("+")[I](" ");if(j instanceof Function)try{l=i?decodeURI(k):j(k)}catch(h){Q(97);l=unescape(k)}else{Q(68);l=unescape(k)}return l},V=function(k,i){return k[z](i)>-1};function Da(k){if(!k||""==k)return"";for(;k[y](0)[D]>0&&" \n\r\t"[z](k[y](0))>-1;)k=k[H](1);for(;k[y](k[D]-1)[D]>0&&" \n\r\t"[z](k[y](k[D]-1))>-1;)k=k[H](0,k[D]-1);return k}
var X=function(k,i){k[ba]||Q(94);k[k[D]]=i},Ea=function(k){var i=1,j=0,l;if(!S(k)){i=0;for(l=k[D]-1;l>=0;l--){j=k.charCodeAt(l);i=(i<<6&268435455)+j+(j<<14);j=i&266338304;i=j!=0?i^j>>21:i}}return i},Fa=function(){return v.round(v.random()*2147483647)},Ga=function(){};var Ha=function(k,i){this.Na=k;this.$a=i},Ia=function(){function k(j){var l=[];j=j[F](",");for(var h,p=0;p<j[D];p++){h=j[p][F](":");l[ba](new Ha(h[0],h[1]))}return l}var i=this;i.ta="utm_campaign";i.ua="utm_content";i.va="utm_id";i.wa="utm_medium";i.xa="utm_nooverride";i.ya="utm_source";i.za="utm_term";i.Aa="gclid";i.U=0;i.v=0;i.Ea=15768E6;i.lb=18E5;i.u=63072E6;i.ia=[];i.ka=[];i.gc="cse";i.hc="q";i.bb=5;i.M=k("daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words");
i.f="/";i.O=100;i.ga="/__utm.gif";i.Y=1;i.Z=1;i.t="|";i.W=1;i.Fa=1;i.Da=1;i.a="auto";i.B=1;i.Fc=10;i.Gb=10;i.Gc=0.2;i.l=u};var Ja=function(k){function i(a,c,f,d){var e="",q=0;e=T(a,"2"+c,";");if(!S(e)){a=e[z]("^"+f+".");if(a<0)return["",0];e=e[H](a+f[D]+2);if(e[z]("^")>0)e=e[F]("^")[0];f=e[F](":");e=f[1];q=parseInt(f[0],10);if(!d&&q<h.q)e=""}if(S(e))e="";return[e,q]}function j(a,c){return"^"+[[c,a[1]][I]("."),a[0]][I](":")}function l(a){var c=new Date;a=new Date(c[ha]()+a);return"expires="+a.toGMTString()+"; "}var h=this,p=k;h.q=(new Date)[ha]();var m=[O,qa,ra,ua,ta,va,wa];h.h=function(){var a=R[E][ga];return p.l?h.Pb(a,
p.l):a};h.Pb=function(a,c){for(var f=[],d,e=0;e<m[D];e++){d=i(a,m[e],c)[0];S(d)||(f[f[D]]=m[e]+d+";")}return f[I]("")};h.k=function(a,c,f){var d=f>0?l(f):"";if(p.l){c=h.cc(R[E][ga],a,p.l,c,f);a="2"+a;d=f>0?l(p.u):""}a=a+c;d=d;a=R.hb(a);if(a[D]>2E3){Q(69);a=a[H](0,2E3)}d=a+"; path="+p.f+"; "+d+h.Qa();R[E].cookie=d};h.cc=function(a,c,f,d,e){var q="";e=e||p.u;d=j([d,h.q+e*1],f);q=T(a,"2"+c,";");if(!S(q)){a=j(i(a,c,f,s),f);q=q[F](a)[I]("");return q=d+q}return d};h.Qa=function(){return S(p.a)?"":"domain="+
p.a+";"}};var Ka=function(k){function i(b){b=b instanceof Array?b[I]("."):"";return S(b)?"-":b}function j(b,g){var o=[],n;if(!S(b)){o=b[F](".");if(g)for(n=0;n<o[D];n++)Ba(o[n])||(o[n]="-")}return o}function l(b,g,o){var n=e.F,r,w;for(r=0;r<n[D];r++){w=n[r][0];w+=S(g)?g:g+n[r][4];n[r][2](T(b,w,o))}}var h,p,m,a,c,f,d,e=this,q,x=k;e.g=new Ja(k);e.Xa=function(){return u==q||q==e.I()};e.h=function(){return e.g.h()};e.ea=function(){return c?c:"-"};e.ob=function(b){c=b};e.ma=function(b){q=Ba(b)?b*1:"-"};e.da=function(){return i(f)};
e.na=function(b){f=j(b)};e.Nb=function(){e.g.k(ta,"",-1)};e.dc=function(){return q?q:"-"};e.Qa=function(){return S(x.a)?"":"domain="+x.a+";"};e.ba=function(){return i(h)};e.mb=function(b){h=j(b,1)};e.z=function(){return i(p)};e.la=function(b){p=j(b,1)};e.ca=function(){return i(m)};e.nb=function(b){m=j(b,1)};e.fa=function(){return i(a)};e.pb=function(b){a=j(b);for(b=0;b<a[D];b++)if(b<4&&!Ba(a[b]))a[b]="-"};e.Yb=function(){return d};e.zc=function(b){d=b};e.Jb=function(){h=[];p=[];m=[];a=[];c=u;f=[];
q=u};e.I=function(){for(var b="",g=0;g<e.F[D];g++)b+=e.F[g][1]();return Ea(b)};e.ja=function(b){var g=e.h(),o=t;if(g){l(g,b,";");e.ma(e.I());o=s}return o};e.sc=function(b){l(b,"",M);e.ma(T(b,sa,M))};e.Dc=function(){var b=e.F,g=[],o;for(o=0;o<b[D];o++)X(g,b[o][0]+b[o][1]());X(g,sa+e.I());return g[I](M)};e.Jc=function(b,g){var o=e.F,n=x.f;e.ja(b);x.f=g;for(var r=0;r<o[D];r++)S(o[r][1]())||o[r][3]();x.f=n};e.yb=function(){e.g.k(O,e.ba(),x.u)};e.qa=function(){e.g.k(qa,e.z(),x.lb)};e.zb=function(){e.g.k(ra,
e.ca(),0)};e.sa=function(){e.g.k(ua,e.fa(),x.Ea)};e.Ab=function(){e.g.k(va,e.ea(),x.u)};e.ra=function(){e.g.k(ta,e.da(),x.u)};e.Mc=function(){e.g.k(wa,e.Yb(),0)};e.F=[[O,e.ba,e.mb,e.yb,"."],[qa,e.z,e.la,e.qa,""],[ra,e.ca,e.nb,e.zb,""],[va,e.ea,e.ob,e.Ab,""],[ua,e.fa,e.pb,e.sa,"."],[ta,e.da,e.na,e.ra,"."]]};var La=function(){var k=this;k.kb=function(i,j,l,h,p){if(!p&&j[D]>2037)j=l+"&err=len&max=2037&len="+j[D];k.Lb(i+j,h)};k.Lb=function(i,j){var l=new Image(1,1);l.src=i;l.onload=function(){l.onload=null;(j||Ga)()}}};var Ma=function(k){var i=this,j=k,l=new Ka(j),h=new La,p=!Y.Kc(),m=function(){};i.bd=function(a){var c=a[F](".");if(!c||c[D]<5)return a;if((a=c[fa](4)[I]("."))&&a[z]("=")==-1)a=Ca(a);c=c[fa](0,4);X(c,a);return c[I](".")};i.P=function(a,c,f,d,e,q){var x=j.B,b=R[E][G];l.ja(f);var g=l.z()[F](".");if(g[1]<500||d){if(e){g=g;var o=(new Date)[ha](),n;n=(o-g[3])*(j.Gc/
1E3);if(n>=1){g[2]=v.min(v.floor(g[2]*1+n),j.Gb);g[3]=o}g=g}if(d||!e||g[2]>=1){if(!d&&e)g[2]=g[2]*1-1;g[1]=g[1]*1+1;e="?utmwv="+na;o="&utmn="+Fa();d=e+"e"+o;a=e+o+(S(b.hostname)?"":"&utmhn="+U(b.hostname))+(j.O==100?"":"&utmsp="+U(j.O))+a;if(0==x||2==x){b=2==x?m:q||m;p&&h.kb(j.ga,a,d,b,s)}if(1==x||2==x){c="&utmac="+c;d+=c;a+=c+"&utmcc="+i.Ub(f);if(Y.Ma){f="&aip=1";d+=f;a+=f}a+="&utmu="+ya.Ob();p&&h.kb(i.ac(),a,d,q)}}}l.la(g[I]("."));l.qa()};i.Ub=function(a){for(var c=[],f=[O,ua,ta,va],d=l.h(),e,q=
0;q<f[D];q++){e=T(d,f[q]+a,";");if(!S(e)){if(f[q]==ta){e=e[F](a+".")[1][F]("|")[0];if(S(e))continue;e=a+"."+e}X(c,f[q]+e+";")}}return U(c[I]("+"))}};var Na=function(){var k=this;k.S=[];k.Va=function(i){for(var j,l=k.S,h=0;h<l[D];h++)j=i==l[h].n?l[h]:j;return j};k.Fb=function(i,j,l,h,p,m,a,c){var f=k.Va(i);if(u==f){f=new Na.Cb(i,j,l,h,p,m,a,c);X(k.S,f)}else{f.Ca=j;f.ub=l;f.tb=h;f.rb=p;f.Ha=m;f.sb=a;f.Ka=c}return f}};Na.Bb=function(k,i,j,l,h,p){var m=this;m.xb=k;m.oa=i;m.o=j;m.Ga=l;m.db=h;m.eb=p;m.pa=function(){return"&"+["utmt=item","tid="+U(m.xb),"ipc="+U(m.oa),"ipn="+U(m.o),"iva="+U(m.Ga),"ipr="+U(m.db),"iqt="+U(m.eb)][I]("&utm")}};
Na.Cb=function(k,i,j,l,h,p,m,a){var c=this;c.n=k;c.Ca=i;c.ub=j;c.tb=l;c.rb=h;c.Ha=p;c.sb=m;c.Ka=a;c.K=[];c.Eb=function(f,d,e,q,x){var b=c.Zb(f),g=c.n;if(u==b)X(c.K,new Na.Bb(g,f,d,e,q,x));else{b.xb=g;b.oa=f;b.o=d;b.Ga=e;b.db=q;b.eb=x}};c.Zb=function(f){for(var d,e=c.K,q=0;q<e[D];q++)d=f==e[q].oa?e[q]:d;return d};c.pa=function(){return"&"+["utmt=tran","id="+U(c.n),"st="+U(c.Ca),"to="+U(c.ub),"tx="+U(c.tb),"sp="+U(c.rb),"ci="+U(c.Ha),"rg="+U(c.sb),"co="+U(c.Ka)][I]("&utmt")}};var Oa=function(k){function i(){var c=h;try{var f=m.awt.Toolkit.getDefaultToolkit().getScreenSize();c=f.width+"x"+f.height}catch(d){}return c}function j(){var c,f,d;f="ShockwaveFlash";var e="$version",q=R[B].navigator;if((q=q?q.plugins:u)&&q[D]>0)for(c=0;c<q[D]&&!d;c++){f=q[c];if(V(f.name,"Shockwave Flash"))d=f.description[F]("Shockwave Flash ")[1]}else{f=f+"."+f;try{c=new ActiveXObject(f+".7");d=c.GetVariable(e)}catch(x){}if(!d)try{c=new ActiveXObject(f+".6");d="WIN 6,0,21,0";c.Nc="always";d=c.GetVariable(e)}catch(b){}if(!d)try{c=
new ActiveXObject(f);d=c.GetVariable(e)}catch(g){}if(d){d=d[F](" ")[1][F](",");d=d[0]+"."+d[1]+" r"+d[2]}}return d?d:h}var l=this,h="-",p=R[B].screen,m=R[B].rd,a=R[B].navigator;l.jb=p?p.width+"x"+p.height:m?i():h;l.ib=p?p.colorDepth+"-bit":h;l.Ib=U(R[E].characterSet?R[E].characterSet:R[E].charset?R[E].charset:h);l.ab=(a&&a.language?a.language:a&&a.browserLanguage?a.browserLanguage:h)[L]();l.Za=a&&a.javaEnabled()?1:0;l.Rb=k?j():h;l.Ec=function(){return M+"utm"+["cs="+U(l.Ib),"sr="+l.jb,"sc="+l.ib,
"ul="+l.ab,"je="+l.Za,"fl="+U(l.Rb)][I]("&utm")};l.Tb=function(){var c=R[B].navigator,f=R[B].history[D];c=c.appName+c.version+l.ab+c.platform+c.userAgent+l.Za+l.jb+l.ib+(R[E][ga]?R[E][ga]:"")+(R[E].referrer?R[E].referrer:"");for(var d=c[D];f>0;)c+=f--^d++;return Ea(c)}};var Z=function(k,i,j,l){function h(a){var c="";c=a[F]("://")[1][L]();if(V(c,"/"))c=c[F]("/")[0];return c}var p=l,m=this;m.b=k;m.fb=i;m.q=j;m.Ua=function(a){var c=m.aa();return new Z.r(T(a,p.va+N,M),T(a,p.ya+N,M),T(a,p.Aa+N,M),m.J(a,p.ta,"(not set)"),m.J(a,p.wa,"(not set)"),m.J(a,p.za,c&&!S(c.C)?Ca(c.C):u),m.J(a,p.ua,u))};m.Wa=function(a){var c=h(a),f;f=a;var d="";f=f[F]("://")[1][L]();if(V(f,"/")){f=f[F]("/")[1];if(V(f,"?"))d=f[F]("?")[0]}f=d;if(V(c,"google")){a=a[F]("?")[I](M);if(V(a,M+p.hc+N))if(f==
p.gc)return s}return t};m.aa=function(){var a,c=m.fb,f,d=p.M;if(!(S(c)||"0"==c||!V(c,"://")||m.Wa(c))){a=h(c);for(var e=0;e<d[D];e++){f=d[e];if(V(a,f.Na[L]())){c=c[F]("?")[I](M);if(V(c,M+f.$a+N)){a=c[F](M+f.$a+N)[1];if(V(a,M))a=a[F](M)[0];return new Z.r(u,f.Na,u,"(organic)","organic",a,u)}}}}};m.J=function(a,c,f){a=T(a,c+N,M);return f=!S(a)?Ca(a):!S(f)?f:"-"};m.oc=function(a){var c=p.ia,f=t;if(a&&"organic"==a.L){a=Ca(a.C)[L]();for(var d=0;d<c[D];d++)f=f||c[d][L]()==a}return f};m.Sa=function(){var a=
"",c="";a=m.fb;if(!(S(a)||"0"==a||!V(a,"://")||m.Wa(a))){a=a[F]("://")[1];if(V(a,"/")){c=a[H](a[z]("/"));c=c[F]("?")[0];a=a[F]("/")[0][L]()}if(0==a[z]("www."))a=a[H](4);return new Z.r(u,a,u,"(referral)","referral",u,c)}};m.Pa=function(a){var c="";if(p.U){c=a&&a.hash?a[ka][H](a[ka][z]("#")):"";c=""!=c?c+M:c}c+=a.search;return c};m.Wb=function(){return new Z.r(u,"(direct)",u,"(direct)","(none)",u,u)};m.pc=function(a){var c=t,f=p.ka;if(a&&"referral"==a.L){a=U(a.Q)[L]();for(var d=0;d<f[D];d++)c=c||V(a,
f[d][L]())}return c};m.i=function(a){return u!=a&&a.Ya()};m.qd=function(a){a=T(a,ua+m.b+".",";");var c=a[F](".");a=new Z.r;a.cb(c[fa](4)[I]("."));if(!m.i(a))return s;c=R[E][G];c=m.Pa(c);c=m.Ua(c);if(!m.i(c)){c=m.aa();m.i(c)||(c=m.Sa())}return m.i(c)&&a.D()[L]()!=c.D()[L]()};m.Vb=function(a,c){if(p.Fa){var f="",d="-",e,q=0,x,b,g=m.b;if(a){b=a.h();f=m.Pa(R[E][G]);if(p.v&&a.Xa()){d=a.fa();if(!S(d)&&!V(d,";")){a.sa();return}}d=T(b,ua+g+".",";");e=m.Ua(f);if(m.i(e)){f=T(f,p.xa+N,M);if("1"==f&&!S(d))return}if(!m.i(e)){e=
m.aa();if(!S(d)&&m.oc(e))return}if(!m.i(e)&&c){e=m.Sa();if(!S(d)&&m.pc(e))return}if(!m.i(e))if(S(d)&&c)e=m.Wb();if(m.i(e)){if(!S(d)){q=d[F](".");x=new Z.r;x.cb(q[fa](4)[I]("."));x=x.D()[L]()==e.D()[L]();q=q[3]*1}if(!x||c){b=T(b,O+g+".",";");x=b.lastIndexOf(".");b=x>9?b[H](x+1)*1:0;q++;b=0==b?1:b;a.pb([g,m.q,b,q,e.D()][I]("."));a.sa()}}}}}};
Z.r=function(k,i,j,l,h,p,m){var a=this;a.n=k;a.Q=i;a.V=j;a.o=l;a.L=h;a.C=p;a.Ja=m;a.D=function(){var c=[],f=[["cid",a.n],["csr",a.Q],["gclid",a.V],["ccn",a.o],["cmd",a.L],["ctr",a.C],["cct",a.Ja]],d,e;if(a.Ya())for(d=0;d<f[D];d++)if(!S(f[d][1])){e=f[d][1][F]("+")[I]("%20");e=e[F](" ")[I]("%20");X(c,"utm"+f[d][0]+N+e)}return R.hb(c[I]("|"))};a.Ya=function(){return!(S(a.n)&&S(a.Q)&&S(a.V))};a.cb=function(c){var f=function(d){return Ca(T(c,"utm"+d+N,"|"))};a.n=f("cid");a.Q=f("csr");a.V=f("gclid");a.o=
f("ccn");a.L=f("cmd");a.C=f("ctr");a.Ja=f("cct")}};var Pa=function(k,i,j,l){var h=this,p=i,m=N,a=k,c=l;h.H=j;h.ha="";h.m={};h.lc=function(){var f;f=T(h.H.h(),ta+p+".",";")[F](p+".")[1];if(!S(f)){f=f[F]("|");var d=h.m,e=f[1],q;if(!S(e)){e=e[F](",");for(var x=0;x<e[D];x++){q=e[x];if(!S(q)){q=q[F](m);if(q[D]==4)d[q[0]]=[q[1],q[2],1]}}}h.ha=f[0];h.T()}};h.T=function(){h.Hb();var f=h.ha,d,e,q="";for(d in h.m)if((e=h.m[d])&&1===e[2])q+=d+m+e[0]+m+e[1]+m+1+",";S(q)||(f+="|"+q);if(S(f))h.H.Nb();else{h.H.na(p+"."+f);h.H.ra()}};h.Ac=function(f){h.ha=f;h.T()};
h.yc=function(f,d,e,q){if(1!=q&&2!=q&&3!=q)q=3;var x=t;if(d&&e&&f>0&&f<=a.bb){d=U(d);e=U(e);if(d[D]+e[D]<=64){h.m[f]=[d,e,q];h.T();x=s}}return x};h.fc=function(f){if((f=h.m[f])&&1===f[2])return f[1]};h.Mb=function(f){var d=h.m;if(d[f]){delete d[f];h.T()}};h.Hb=function(){c.w(8);c.w(9);c.w(11);var f=h.m,d,e;for(e in f)if(d=f[e]){c.p(8,e,d[0]);c.p(9,e,d[1]);(d=d[2])&&3!=d&&c.p(11,e,""+d)}}};var Qa=function(){function k(n,r,w,J){if(u==m[n])m[n]={};if(u==m[n][r])m[n][r]=[];m[n][r][w]=J}function i(n,r,w){if(u!=m[n]&&u!=m[n][r])return m[n][r][w]}function j(n,r){if(u!=m[n]&&u!=m[n][r]){m[n][r]=u;var w=s,J;for(J=0;J<f[D];J++)if(u!=m[n][f[J]]){w=t;break}if(w)m[n]=u}}function l(n){var r="",w=t,J,P;for(J=0;J<f[D];J++){P=n[f[J]];if(u!=P){if(w)r+=f[J];r=r;P=P;w=[];var ia=void 0,C=void 0;for(C=0;C<P[D];C++)if(u!=P[C]){ia="";if(C!=o&&u==P[C-1])ia+=C[ja]()+x;var K;K=P[C];var W="",ca=void 0,da=void 0,
ea=void 0;for(ca=0;ca<K[D];ca++){da=K[y](ca);ea=g[da];W+=u!=ea?ea:da}K=W;ia+=K;X(w,ia)}P=d+w[I](q)+e;r=r+P;w=t}else w=s}return r}var h=this,p=Aa(h),m={},a="k",c="v",f=[a,c],d="(",e=")",q="*",x="!",b="'",g={};g[b]="'0";g[e]="'1";g[q]="'2";g[x]="'3";var o=1;h.jc=function(n){return u!=m[n]};h.N=function(){var n="",r;for(r in m)if(u!=m[r])n+=r[ja]()+l(m[r]);return n};h.tc=function(n){if(n==u)return h.N();var r=n.N(),w;for(w in m)if(u!=m[w]&&!n.jc(w))r+=w[ja]()+l(m[w]);return r};h.p=p("_setKey",89,function(n,
r,w){if(typeof w!="string")return t;k(n,a,r,w);return s});h.qb=p("_setValue",90,function(n,r,w){if(typeof w!="number"&&(u==Number||!(w instanceof Number))||v.round(w)!=w||w==NaN||w==Infinity)return t;k(n,c,r,w[ja]());return s});h.$b=p("_getKey",87,function(n,r){return i(n,a,r)});h.ec=p("_getValue",88,function(n,r){return i(n,c,r)});h.w=p("_clearKey",85,function(n){j(n,a)});h.Ia=p("_clearValue",86,function(n){j(n,c)})};var Ra=function(k,i){var j=this,l=Aa(j);j.td=i;j.rc=k;j.vb=l("_trackEvent",91,function(h,p,m){return i.vb(j.rc,h,p,m)})};var $=function(){};$.Qb=function(k){var i="gaso=",j=R[E][G].hash;if(j&&1==j[z](i))k=T(j,i,M);else k=(j=R[B].name)&&0<=j[z](i)?T(j,i,M):T(k.h(),wa,";");return k};$.qc=function(k,i){var j=(i||"www")+".google.com";j="https://"+j+"/analytics/reporting/overlay_js?gaso="+k+M+Fa();var l="_gasojs",h=R[E].createElement("script");h.type="text/javascript";h.src=j;if(l)h.id=l;(R[E].getElementsByTagName("head")[0]||R[E].getElementsByTagName("body")[0]).appendChild(h)};
$.load=function(k,i){if(!$.mc){var j=$.Qb(i),l=j&&j.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);if(l){i.zc(j);i.Mc();Y._gasoDomain=k.a;Y._gasoCPath=k.f;$.qc(l[2],l[1])}$.mc=s}};var Sa=function(k,i,j){function l(){if("auto"==d.a){var b=R[E].domain;if("www."==b[H](0,4))b=b[H](4);d.a=b}d.a=d.a[L]()}function h(){l();var b=d.a,g=b[z]("www.google.")*b[z](".google.")*b[z]("google.");return g||"/"!=d.f||b[z]("google.org")>-1}function p(b,g,o){if(S(b)||S(g)||S(o))return"-";b=T(b,O+a.b+".",g);if(!S(b)){b=b[F](".");b[5]=""+(b[5]?b[5]*1+1:1);b[3]=b[4];b[4]=o;b=b[I](".")}return b}function m(){return"file:"!=R[E][G].protocol&&h()}var a=this,c=Aa(a),f=u,d=new Ia,e=d.a,q=t,x=u;a.o=k;a.q=
v.round((new Date)[ha]()/1E3);a.s=i||"UA-XXXXX-X";a.La=R[E].referrer;a.$=u;a.d=u;a.A=t;a.G=u;a.e=u;a.Oa=u;a.b=u;a.j=u;d.l=j?U(j):u;a.bc=function(){return Fa()^a.G.Tb()&2147483647};a.Xb=function(){if(!d.a||""==d.a||"none"==d.a){d.a="";return 1}l();return d.Da?Ea(d.a):1};a.Sb=function(b,g){if(S(b))b="-";else{g+=d.f&&"/"!=d.f?d.f:"";var o=b[z](g);b=o>=0&&o<=8?"0":"["==b[y](0)&&"]"==b[y](b[D]-1)?"-":b}return b};a.gb=function(b){var g="";g+=d.W?a.G.Ec():"";g+=d.Y&&!S(R[E].title)?"&utmdt="+U(R[E].title):
"";g=g;var o;o=u;if(R[B]&&R[B][A]&&R[B][A].hid)o=R[B][A].hid;else{o=Fa();R[B].gaGlobal=R[B][A]?R[B][A]:{};R[B][A].hid=o}o=o;return g=g+("&utmhid="+o+"&utmr="+U(a.$)+"&utmp="+U(a.uc(b)))};a.uc=function(b){var g=R[E][G];return b=u!=b&&""!=b?U(b,s):U(g.pathname+g.search,s)};a.Hc=function(b){if(a.R()){var g="";if(a.e!=u&&a.e.N()[D]>0)g+="&utme="+U(a.e.N());g+=a.gb(b);f.P(g,a.s,a.b)}};a.Kb=function(){var b=new Ka(d);return b.ja(a.b)?b.Dc():u};a.Ra=c("_getLinkerUrl",52,function(b,g){var o=b[F]("#"),n=b,
r=a.Kb();if(r)if(g&&1>=o[D])n+="#"+r;else if(!g||1>=o[D])if(1>=o[D])n+=(V(b,"?")?M:"?")+r;else n=o[0]+(V(b,"?")?M:"?")+r+"#"+o[1];return n});a.ic=function(){var b=a.q,g=a.j,o=g.h(),n=a.b+"",r=R[B]?R[B][A]:u,w,J=V(o,O+n+"."),P=V(o,qa+n),ia=V(o,ra+n),C,K=[],W="",ca=t;o=S(o)?"":o;if(d.v){w=R[E][G]&&R[E][G].hash?R[E][G][ka][H](R[E][G][ka][z]("#")):"";if(d.U&&!S(w))W=w+M;W+=R[E][G].search;if(!S(W)&&V(W,O)){g.sc(W);g.Xa()||g.Jb();C=g.ba()}w=g.ea;var da=g.ob,ea=g.Ab;if(!S(w())){da(Ca(w()));V(w(),";")||ea()}w=
g.da;da=g.na;ea=g.ra;if(!S(w())){da(w());V(w(),";")||ea()}}if(S(C))if(J)if(!P||!ia||0){C=p(o,";",b);a.A=s}else{C=T(o,O+n+".",";");K=T(o,qa+n,";")[F](".")}else{C=[n,a.bc(),b,b,b,1][I](".");ca=a.A=s}else if(S(g.z())||S(g.ca())){C=p(W,M,b);a.A=s}else{K=g.z()[F](".");n=K[0]}C=C[F](".");if(R[B]&&r&&r.dh==n&&!d.l){C[4]=r.sid?r.sid:C[4];if(ca){C[3]=r.sid?r.sid:C[4];if(r.vid){b=r.vid[F](".");C[1]=b[0];C[2]=b[1]}}}g.mb(C[I]("."));K[0]=n;K[1]=K[1]?K[1]:0;K[2]=u!=K[2]?K[2]:d.Fc;K[3]=K[3]?K[3]:C[4];g.la(K[I]("."));
g.nb(n);S(g.dc())||g.ma(g.I());g.yb();g.qa();g.zb()};a.kc=function(){f=new Ma(d)};a.getName=c("_getName",58,function(){return a.o});a.c=c("_initData",2,function(){var b;if(!q){if(!a.G)a.G=new Oa(d.Z);a.b=a.Xb();a.j=new Ka(d);a.e=new Qa;x=new Pa(d,a.b,a.j,a.e);a.kc()}if(m()){if(!q){a.$=a.Sb(a.La,R[E].domain);b=new Z(a.b,a.$,a.q,d)}a.ic(b);x.lc()}if(!q){m()&&b.Vb(a.j,a.A);a.Oa=new Qa;$.load(d,a.j);q=s}});a.Lc=c("_visitCode",54,function(){a.c();var b=T(a.j.h(),O+a.b+".",";");b=b[F](".");return b[D]<
4?"":b[1]});a.Xc=c("_cookiePathCopy",30,function(b){a.c();a.j&&a.j.Jc(a.b,b)});a.R=function(){return a.Lc()%1E4<d.O*100};a.fe=c("_trackPageview",1,function(b){if(m()){a.c();a.Hc(b);a.A=t}});a.ge=c("_trackTrans",18,function(){var b=a.b,g=[],o,n,r;a.c();if(a.d&&a.R()){for(o=0;o<a.d.S[D];o++){n=a.d.S[o];X(g,n.pa());for(r=0;r<n.K[D];r++)X(g,n.K[r].pa())}for(o=0;o<g[D];o++)f.P(g[o],a.s,b,s)}});a.ae=c("_setTrans",20,function(){var b,g,o,n;b=R[E].getElementById?R[E].getElementById("utmtrans"):R[E].utmform&&
R[E].utmform.utmtrans?R[E].utmform.utmtrans:u;a.c();if(b&&b.value){a.d=new Na;n=b.value[F]("UTM:");d.t=!d.t||""==d.t?"|":d.t;for(b=0;b<n[D];b++){n[b]=Da(n[b]);g=n[b][F](d.t);for(o=0;o<g[D];o++)g[o]=Da(g[o]);if("T"==g[0])a.Ba(g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8]);else"I"==g[0]&&a.Db(g[1],g[2],g[3],g[4],g[5],g[6])}}});a.Ba=c("_addTrans",21,function(b,g,o,n,r,w,J,P){a.d=a.d?a.d:new Na;return a.d.Fb(b,g,o,n,r,w,J,P)});a.Db=c("_addItem",19,function(b,g,o,n,r,w){var J;a.d=a.d?a.d:new Na;(J=a.d.Va(b))||
(J=a.Ba(b,"","","","","","",""));J.Eb(g,o,n,r,w)});a.ce=c("_setVar",22,function(b){if(b&&""!=b&&h()){a.c();x.Ac(U(b));a.R()&&f.P("&utmt=var",a.s,a.b)}});a.Md=c("_setCustomVar",10,function(b,g,o,n){a.c();return x.yc(b,g,o,n)});a.ad=c("_deleteCustomVar",35,function(b){a.c();x.Mb(b)});a.nd=c("_getVisitorCustomVar",50,function(b){a.c();return x.fc(b)});a.Ud=c("_setMaxCustomVariables",71,function(b){d.bb=b});a.link=c("_link",12,function(b,g){if(d.v&&b){a.c();R[E][G].href=a.Ra(b,g)}});a.sd=c("_linkByPost",
13,function(b,g){if(d.v&&b&&b.action){a.c();b.action=a.Ra(b.action,g)}});a.de=c("_setXKey",83,function(b,g,o){a.e.p(b,g,o)});a.ee=c("_setXValue",84,function(b,g,o){a.e.qb(b,g,o)});a.od=c("_getXKey",76,function(b,g){return a.e.$b(b,g)});a.pd=c("_getXValue",77,function(b,g){return a.e.ec(b,g)});a.Vc=c("_clearXKey",72,function(b){a.e.w(b)});a.Wc=c("_clearXValue",73,function(b){a.e.Ia(b)});a.$c=c("_createXObj",75,function(){a.c();return new Qa});a.vc=c("_sendXEvent",78,function(b){var g="";a.c();if(a.R()){g+=
"&utmt=event&utme="+U(a.e.tc(b))+a.gb();f.P(g,a.s,a.b,t,s)}});a.Zc=c("_createEventTracker",74,function(b){a.c();return new Ra(b,a)});a.vb=c("_trackEvent",4,function(b,g,o,n){a.c();var r=a.Oa;if(u!=b&&u!=g&&""!=b&&""!=g){r.w(5);r.Ia(5);(b=r.p(5,1,b)&&r.p(5,2,g)&&(u==o||r.p(5,3,o))&&(u==n||r.qb(5,1,n)))&&a.vc(r)}else b=t;return b});a.fd=function(){return d};a.Pd=c("_setDomainName",6,function(b){e=d.a=b});a.Qc=c("_addOrganic",14,function(b,g,o){d.M.splice(o?0:d.M[D],0,new Ha(b,g))});a.Uc=c("_clearOrganic",
17,function(){d.M=[]});a.Oc=c("_addIgnoredOrganic",15,function(b){X(d.ia,b)});a.Sc=c("_clearIgnoredOrganic",16,function(){d.ia=[]});a.Pc=c("_addIgnoredRef",31,function(b){X(d.ka,b)});a.Tc=c("_clearIgnoredRef",32,function(){d.ka=[]});a.wd=c("_setAllowHash",8,function(b){d.Da=b?1:0});a.Hd=c("_setCampaignTrack",36,function(b){d.Fa=b?1:0});a.Id=c("_setClientInfo",66,function(b){d.W=b?1:0});a.ed=c("_getClientInfo",53,function(){return d.W});a.Jd=c("_setCookiePath",9,function(b){d.f=b});a.be=c("_setTransactionDelim",
82,function(b){d.t=b});a.Ld=c("_setCookieTimeout",25,function(b){a.xc(b*1E3)});a.xc=c("_setCampaignCookieTimeout",29,function(b){d.Ea=b});a.Nd=c("_setDetectFlash",61,function(b){d.Z=b?1:0});a.gd=c("_getDetectFlash",65,function(){return d.Z});a.Od=c("_setDetectTitle",62,function(b){d.Y=b?1:0});a.hd=c("_getDetectTitle",56,function(){return d.Y});a.Rd=c("_setLocalGifPath",46,function(b){d.ga=b});a.jd=c("_getLocalGifPath",57,function(){return d.ga});a.Td=c("_setLocalServerMode",92,function(){d.B=0});
a.Xd=c("_setRemoteServerMode",63,function(){d.B=1});a.Sd=c("_setLocalRemoteServerMode",47,function(){d.B=2});a.kd=c("_getServiceMode",59,function(){return d.B});a.Yd=c("_setSampleRate",45,function(b){d.O=b});a.Zd=c("_setSessionTimeout",27,function(b){a.Bc(b*1E3)});a.Bc=c("_setSessionCookieTimeout",26,function(b){d.lb=b});a.xd=c("_setAllowLinker",11,function(b){d.v=b?1:0});a.vd=c("_setAllowAnchor",7,function(b){d.U=b?1:0});a.Ed=c("_setCampNameKey",41,function(b){d.ta=b});a.Ad=c("_setCampContentKey",
38,function(b){d.ua=b});a.Bd=c("_setCampIdKey",39,function(b){d.va=b});a.Cd=c("_setCampMediumKey",40,function(b){d.wa=b});a.Dd=c("_setCampNOKey",42,function(b){d.xa=b});a.Fd=c("_setCampSourceKey",43,function(b){d.ya=b});a.Gd=c("_setCampTermKey",44,function(b){d.za=b});a.zd=c("_setCampCIdKey",37,function(b){d.Aa=b});a.cd=c("_getAccount",64,function(){return a.s});a.ud=c("_setAccount",3,function(b){a.s=b});a.Vd=c("_setNamespace",48,function(b){d.l=b?U(b):u});a.md=c("_getVersion",60,function(){return na});
a.yd=c("_setAutoTrackOutbound",79,Ga);a.$d=c("_setTrackOutboundSubdomains",81,Ga);a.Qd=c("_setHrefExamineLimit",80,Ga);a.Wd=c("_setReferrerOverride",49,function(b){a.La=b});a.Kd=c("_setCookiePersistence",24,function(b){a.Cc(b)});a.Cc=c("_setVisitorCookieTimeout",28,function(b){d.u=b})};var Ta=function(){var k=this,i=Aa(k);k.Ma=t;k.wb={};k.Ic=0;k._gasoDomain=u;k._gasoCPath=u;k.ld=i("_getTracker",0,function(j,l){return k.X(j,u,l)});k.X=i("_createTracker",55,function(j,l,h){l&&Q(23);h&&Q(67);if(l==u)l="~"+Y.Ic++;return Y.wb[l]=new Sa(l,j,h)});k.Ta=i("_getTrackerByName",51,function(j){j=j||"";return Y.wb[j]||Y.X(u,j)});k.Kc=function(){var j=aa[oa];return j&&j[pa]&&j[pa]()};k.Rc=i("_anonymizeIp",70,function(){k.Ma=s})};var Ua=t,Wa=function(){var k=this,i=Aa(k);k.Yc=i("_createAsyncTracker",33,function(j,l){return Y.X(j,l||"")});k.dd=i("_getAsyncTracker",34,function(j){return Y.Ta(j)});k.push=function(){Q(5);var j=arguments,l=0;Ua=s;for(var h=0;h<j[D];h++)try{if(typeof j[h]==="function")j[h]();else{var p="",m=j[h][0],a=m.lastIndexOf(".");if(a>0){p=m[H](0,a);m=m[H](a+1)}var c=p==la?Y:p==ma?Va:Y.Ta(p);c[m].apply(c,j[h][fa](1))}}catch(f){l++}return l}};var Y=new Ta;var Xa=aa[la];if(Xa&&typeof Xa._getTracker=="function")Y=Xa;else aa[la]=Y;var Va=new Wa;a:{var Ya=aa[ma],Za=t;if(Ya&&typeof Ya[ba]=="function"){Za=Ya.constructor==Array;if(!Za)break a}aa[ma]=Va;Za&&Va[ba].apply(Va,Ya)};})()
