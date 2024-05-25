"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[619],{6758:(V,E,b)=>{b.d(E,{q:()=>M});var d=b(5e3),l=b(5384);let M=(()=>{class C{constructor(m){this.apiService=m}getAll(){return this.apiService.get("api/donnee")}getAllPaginate(m,k){return this.apiService.get("api/donnee/paginate/"+m+"/"+k)}get(m){return this.apiService.get("api/donnee/"+m)}add(m){return this.apiService.post("api/donnee",m)}update(m){return this.apiService.put("api/donnee/"+m.id,m)}delete(m){return this.apiService.delete("api/donnee/"+m.id)}}return C.\u0275fac=function(m){return new(m||C)(d.LFG(l.s))},C.\u0275prov=d.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},2301:(V,E,b)=>{b.d(E,{P:()=>M});var d=b(5e3),l=b(5384);let M=(()=>{class C{constructor(m){this.apiService=m}getAll(){return this.apiService.get("api/requete")}findBy(m){return console.log(m),this.apiService.post("api/requete/findBy",m)}get(m){return this.apiService.get("api/requete/"+m)}add(m){return this.apiService.post("api/requete",m)}update(m){return this.apiService.put("api/requete/"+m.id,m)}delete(m){return this.apiService.delete("api/requete/"+m.id)}}return C.\u0275fac=function(m){return new(m||C)(d.LFG(l.s))},C.\u0275prov=d.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},1282:(V,E,b)=>{b.d(E,{Z:()=>z});var d=b(4809),l=b(5311),M=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e)return(e.deviceXDPI||1)/(e.logicalXDPI||1)}return 1}(),C_textSize=function(e,a,t){var c,i=[].concat(a),r=i.length,n=e.font,h=0;for(e.font=t.string,c=0;c<r;++c)h=Math.max(e.measureText(i[c]).width,h);return e.font=n,{height:r*t.lineHeight,width:h}};function w(e,a){var t=a.x,i=a.y;if(null===t)return{x:0,y:-1};if(null===i)return{x:1,y:0};var r=e.x-t,n=e.y-i,h=Math.sqrt(r*r+n*n);return{x:h?r/h:0,y:h?n/h:-1}}function L(e,a,t){var i=0;return e<t.left?i|=1:e>t.right&&(i|=2),a<t.top?i|=8:a>t.bottom&&(i|=4),i}function P(e,a){var r,n,t=a.anchor,i=e;return a.clamp&&(i=function X(e,a){for(var p,_,v,t=e.x0,i=e.y0,r=e.x1,n=e.y1,h=L(t,i,a),c=L(r,n,a);h|c&&!(h&c);)8&(p=h||c)?(_=t+(r-t)*(a.top-i)/(n-i),v=a.top):4&p?(_=t+(r-t)*(a.bottom-i)/(n-i),v=a.bottom):2&p?(v=i+(n-i)*(a.right-t)/(r-t),_=a.right):1&p&&(v=i+(n-i)*(a.left-t)/(r-t),_=a.left),p===h?h=L(t=_,i=v,a):c=L(r=_,n=v,a);return{x0:t,x1:r,y0:i,y1:n}}(i,a.area)),"start"===t?(r=i.x0,n=i.y0):"end"===t?(r=i.x1,n=i.y1):(r=(i.x0+i.x1)/2,n=(i.y0+i.y1)/2),function m(e,a,t,i,r){switch(r){case"center":t=i=0;break;case"bottom":t=0,i=1;break;case"right":t=1,i=0;break;case"left":t=-1,i=0;break;case"top":t=0,i=-1;break;case"start":t=-t,i=-i;break;case"end":break;default:r*=Math.PI/180,t=Math.cos(r),i=Math.sin(r)}return{x:e,y:a,vx:t,vy:i}}(r,n,e.vx,e.vy,a.align)}var S={arc:function(e,a){var t=(e.startAngle+e.endAngle)/2,i=Math.cos(t),r=Math.sin(t),n=e.innerRadius,h=e.outerRadius;return P({x0:e.x+i*n,y0:e.y+r*n,x1:e.x+i*h,y1:e.y+r*h,vx:i,vy:r},a)},point:function(e,a){var t=w(e,a.origin),i=t.x*e.options.radius,r=t.y*e.options.radius;return P({x0:e.x-i,y0:e.y-r,x1:e.x+i,y1:e.y+r,vx:t.x,vy:t.y},a)},bar:function(e,a){var t=w(e,a.origin),i=e.x,r=e.y,n=0,h=0;return e.horizontal?(i=Math.min(e.x,e.base),n=Math.abs(e.base-e.x)):(r=Math.min(e.y,e.base),h=Math.abs(e.base-e.y)),P({x0:i,y0:r+h,x1:i+n,y1:r,vx:t.x,vy:t.y},a)},fallback:function(e,a){var t=w(e,a.origin);return P({x0:e.x,y0:e.y,x1:e.x+(e.width||0),y1:e.y+(e.height||0),vx:t.x,vy:t.y},a)}},I=function(e){return Math.round(e*M)/M};function te(e,a){var t=a.chart.getDatasetMeta(a.datasetIndex).vScale;if(!t)return null;if(void 0!==t.xCenter&&void 0!==t.yCenter)return{x:t.xCenter,y:t.yCenter};var i=t.getBasePixel();return e.horizontal?{x:i,y:null}:{x:null,y:i}}function de(e){return e instanceof l.qi?S.arc:e instanceof l.od?S.point:e instanceof l.ZL?S.bar:S.fallback}function ie(e,a,t){var i=e.shadowBlur,r=t.stroked,n=I(t.x),h=I(t.y),c=I(t.w);r&&e.strokeText(a,n,h,c),t.filled&&(i&&r&&(e.shadowBlur=0),e.fillText(a,n,h,c),i&&r&&(e.shadowBlur=i))}var q=function(e,a,t,i){var r=this;r._config=e,r._index=i,r._model=null,r._rects=null,r._ctx=a,r._el=t};(0,d.TS)(q.prototype,{_modelize:function(e,a,t,i){var r=this,n=r._index,h=(0,d.re)((0,d.DB)([t.font,{}],i,n)),c=(0,d.DB)([t.color,l.ce.color],i,n);return{align:(0,d.DB)([t.align,"center"],i,n),anchor:(0,d.DB)([t.anchor,"center"],i,n),area:i.chart.chartArea,backgroundColor:(0,d.DB)([t.backgroundColor,null],i,n),borderColor:(0,d.DB)([t.borderColor,null],i,n),borderRadius:(0,d.DB)([t.borderRadius,0],i,n),borderWidth:(0,d.DB)([t.borderWidth,0],i,n),clamp:(0,d.DB)([t.clamp,!1],i,n),clip:(0,d.DB)([t.clip,!1],i,n),color:c,display:e,font:h,lines:a,offset:(0,d.DB)([t.offset,4],i,n),opacity:(0,d.DB)([t.opacity,1],i,n),origin:te(r._el,i),padding:(0,d.oY)((0,d.DB)([t.padding,4],i,n)),positioner:de(r._el),rotation:(0,d.DB)([t.rotation,0],i,n)*(Math.PI/180),size:C_textSize(r._ctx,a,h),textAlign:(0,d.DB)([t.textAlign,"start"],i,n),textShadowBlur:(0,d.DB)([t.textShadowBlur,0],i,n),textShadowColor:(0,d.DB)([t.textShadowColor,c],i,n),textStrokeColor:(0,d.DB)([t.textStrokeColor,c],i,n),textStrokeWidth:(0,d.DB)([t.textStrokeWidth,0],i,n)}},update:function(e){var h,c,p,a=this,t=null,i=null,r=a._index,n=a._config,_=(0,d.DB)([n.display,!0],e,r);_&&(c=(0,d.Be)((0,d.uz)(n.formatter,[h=e.dataset.data[r],e]),h),(p=(0,d._D)(c)?[]:function(e){var t,a=[];for(e=[].concat(e);e.length;)"string"==typeof(t=e.pop())?a.unshift.apply(a,t.split("\n")):Array.isArray(t)?e.push.apply(e,t):(0,d._D)(e)||a.unshift(""+t);return a}(c)).length&&(i=function ee(e){var a=e.borderWidth||0,t=e.padding,i=e.size.height,r=e.size.width,n=-r/2,h=-i/2;return{frame:{x:n-t.left-a,y:h-t.top-a,w:r+t.width+2*a,h:i+t.height+2*a},text:{x:n,y:h,w:r,h:i}}}(t=a._modelize(_,p,n,e)))),a._model=t,a._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(e,a){var h,i=e.ctx,r=this._model,n=this._rects;!this.visible()||(i.save(),r.clip&&(h=r.area,i.beginPath(),i.rect(h.left,h.top,h.right-h.left,h.bottom-h.top),i.clip()),i.globalAlpha=function(e,a,t){return Math.max(e,Math.min(a,t))}(0,r.opacity,1),i.translate(I(a.x),I(a.y)),i.rotate(r.rotation),function $(e,a,t){var i=t.backgroundColor,r=t.borderColor,n=t.borderWidth;!i&&(!r||!n)||(e.beginPath(),function N(e,a,t,i,r,n){var h=Math.PI/2;if(n){var c=Math.min(n,r/2,i/2),p=a+c,_=t+c,v=a+i-c,x=t+r-c;e.moveTo(a,_),p<v&&_<x?(e.arc(p,_,c,-Math.PI,-h),e.arc(v,_,c,-h,0),e.arc(v,x,c,0,h),e.arc(p,x,c,h,Math.PI)):p<v?(e.moveTo(p,t),e.arc(v,_,c,-h,h),e.arc(p,_,c,h,Math.PI+h)):_<x?(e.arc(p,_,c,-Math.PI,0),e.arc(p,x,c,0,Math.PI)):e.arc(p,_,c,-Math.PI,Math.PI),e.closePath(),e.moveTo(a,t)}else e.rect(a,t,i,r)}(e,I(a.x)+n/2,I(a.y)+n/2,I(a.w)-n,I(a.h)-n,t.borderRadius),e.closePath(),i&&(e.fillStyle=i,e.fill()),r&&n&&(e.strokeStyle=r,e.lineWidth=n,e.lineJoin="miter",e.stroke()))}(i,n.frame,r),function ae(e,a,t,i){var D,r=i.textAlign,n=i.color,h=!!n,c=i.font,p=a.length,_=i.textStrokeColor,v=i.textStrokeWidth,x=_&&v;if(p&&(h||x))for(t=function G(e,a,t){var i=t.lineHeight,r=e.w,n=e.x;return"center"===a?n+=r/2:("end"===a||"right"===a)&&(n+=r),{h:i,w:r,x:n,y:e.y+i/2}}(t,r,c),e.font=c.string,e.textAlign=r,e.textBaseline="middle",e.shadowBlur=i.textShadowBlur,e.shadowColor=i.textShadowColor,h&&(e.fillStyle=n),x&&(e.lineJoin="round",e.lineWidth=v,e.strokeStyle=_),D=0,p=a.length;D<p;++D)ie(e,a[D],{stroked:x,filled:h,w:t.w,x:t.x,y:t.y+t.h*D})}(i,r.lines,n.text,r),i.restore())}});var se=Number.MIN_SAFE_INTEGER||-9007199254740991,W=Number.MAX_SAFE_INTEGER||9007199254740991;function O(e,a,t){var i=Math.cos(t),r=Math.sin(t),n=a.x,h=a.y;return{x:n+i*(e.x-n)-r*(e.y-h),y:h+r*(e.x-n)+i*(e.y-h)}}function K(e,a){var n,h,_,t=W,i=se,r=a.origin;for(n=0;n<e.length;++n)_=a.vx*((h=e[n]).x-r.x)+a.vy*(h.y-r.y),t=Math.min(t,_),i=Math.max(i,_);return{min:t,max:i}}function F(e,a){var t=a.x-e.x,i=a.y-e.y,r=Math.sqrt(t*t+i*i);return{vx:(a.x-e.x)/r,vy:(a.y-e.y)/r,origin:e,ln:r}}var Z=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function J(e,a,t){var i=a.positioner(e,a),r=i.vx,n=i.vy;if(!r&&!n)return{x:i.x,y:i.y};var h=t.w,c=t.h,p=a.rotation,_=Math.abs(h/2*Math.cos(p))+Math.abs(c/2*Math.sin(p)),v=Math.abs(h/2*Math.sin(p))+Math.abs(c/2*Math.cos(p)),x=1/Math.max(Math.abs(r),Math.abs(n));return _*=r*x,v*=n*x,{x:i.x+(_+=a.offset*r),y:i.y+(v+=a.offset*n)}}(0,d.TS)(Z.prototype,{center:function(){var e=this._rect;return{x:e.x+e.w/2,y:e.y+e.h/2}},update:function(e,a,t){this._rotation=t,this._rect={x:a.x+e.x,y:a.y+e.y,w:a.w,h:a.h}},contains:function(e){var a=this,i=a._rect;return!((e=O(e,a.center(),-a._rotation)).x<i.x-1||e.y<i.y-1||e.x>i.x+i.w+2||e.y>i.y+i.h+2)},intersects:function(e){var r,n,h,a=this._points(),t=e._points(),i=[F(a[0],a[1]),F(a[0],a[3])];for(this._rotation!==e._rotation&&i.push(F(t[0],t[1]),F(t[0],t[3])),r=0;r<i.length;++r)if(n=K(a,i[r]),h=K(t,i[r]),n.max<h.min||h.max<n.min)return!1;return!0},_points:function(){var e=this,a=e._rect,t=e._rotation,i=e.center();return[O({x:a.x,y:a.y},i,t),O({x:a.x+a.w,y:a.y},i,t),O({x:a.x+a.w,y:a.y+a.h},i,t),O({x:a.x,y:a.y+a.h},i,t)]}});var T={prepare:function(e){var t,i,r,n,h,a=[];for(t=0,r=e.length;t<r;++t)for(i=0,n=e[t].length;i<n;++i)a.push(h=e[t][i]),h.$layout={_box:new Z,_hidable:!1,_visible:!0,_set:t,_idx:h._index};return a.sort(function(c,p){var _=c.$layout,v=p.$layout;return _._idx===v._idx?v._set-_._set:v._idx-_._idx}),this.update(a),a},update:function(e){var t,i,r,n,h,a=!1;for(t=0,i=e.length;t<i;++t)n=(r=e[t]).model(),(h=r.$layout)._hidable=n&&"auto"===n.display,h._visible=r.visible(),a|=h._hidable;a&&function ne(e){var a,t,i,r,n,h,c;for(a=0,t=e.length;a<t;++a)(r=(i=e[a]).$layout)._visible&&(c=new Proxy(i._el,{get:(p,_)=>p.getProps([_],!0)[_]}),n=i.geometry(),h=J(c,i.model(),n),r._box.update(h,n,i.rotation()));(function re(e,a){var t,i,r,n;for(t=e.length-1;t>=0;--t)for(r=e[t].$layout,i=t-1;i>=0&&r._visible;--i)(n=e[i].$layout)._visible&&r._box.intersects(n._box)&&a(r,n)})(e,function(p,_){var v=p._hidable,x=_._hidable;v&&x||x?_._visible=!1:v&&(p._visible=!1)})}(e)},lookup:function(e,a){var t,i;for(t=e.length-1;t>=0;--t)if((i=e[t].$layout)&&i._visible&&i._box.contains(a))return e[t];return null},draw:function(e,a){var t,i,r,n,h,c;for(t=0,i=a.length;t<i;++t)(n=(r=a[t]).$layout)._visible&&(h=r.geometry(),c=J(r._el,r.model(),h),n._box.update(c,h,r.rotation()),r.draw(e,c))}},u="$datalabels",y="$default";function o(e,a,t,i){if(a){var h,r=t.$context,n=t.$groups;!a[n._set]||(h=a[n._set][n._key])&&!0===(0,d.uz)(h,[r,i])&&(e[u]._dirty=!0,t.update(r))}}var z={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(e){if((0,d._D)(e))return null;var t,i,r,a=e;if((0,d.Kn)(e))if((0,d._D)(e.label))if((0,d._D)(e.r))for(a="",r=0,i=(t=Object.keys(e)).length;r<i;++r)a+=(0!==r?", ":"")+t[r]+": "+e[t[r]];else a=e.r;else a=e.label;return""+a},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(e){e[u]={_actives:[]}},beforeUpdate:function(e){var a=e[u];a._listened=!1,a._listeners={},a._datasets=[],a._labels=[]},afterDatasetUpdate:function(e,a,t){var x,D,ue,pe,he,_e,H,R,i=a.index,r=e[u],n=r._datasets[i]=[],h=e.isDatasetVisible(i),c=e.data.datasets[i],p=function s(e,a){var n,h,t=e.datalabels,i={},r=[];return!1===t?null:(!0===t&&(t={}),a=(0,d.TS)({},[a,t]),n=a.labels||{},h=Object.keys(n),delete a.labels,h.length?h.forEach(function(c){n[c]&&r.push((0,d.TS)({},[a,n[c],{_key:c}]))}):r.push(a),i=r.reduce(function(c,p){return(0,d.S6)(p.listeners||{},function(_,v){c[v]=c[v]||{},c[v][p._key||y]=_}),delete p.listeners,c},{}),{labels:r,listeners:i})}(c,t),_=a.meta.data||[],v=e.ctx;for(v.save(),x=0,ue=_.length;x<ue;++x)if((H=_[x])[u]=[],h&&H&&e.getDataVisibility(x)&&!H.skip)for(D=0,pe=p.labels.length;D<pe;++D)_e=(he=p.labels[D])._key,(R=new q(he,v,H,x)).$groups={_set:i,_key:_e||y},R.$context={active:!1,chart:e,dataIndex:x,dataset:c,datasetIndex:i},R.update(R.$context),H[u].push(R),n.push(R);v.restore(),(0,d.TS)(r._listeners,p.listeners,{merger:function(Q,le,fe){le[Q]=le[Q]||{},le[Q][a.index]=fe[Q],r._listened=!0}})},afterUpdate:function(e){e[u]._labels=T.prepare(e[u]._datasets)},afterDatasetsDraw:function(e){T.draw(e,e[u]._labels)},beforeEvent:function(e,a){if(e[u]._listened){var t=a.event;switch(t.type){case"mousemove":case"mouseout":!function g(e,a){var r,n,t=e[u],i=t._listeners;if(i.enter||i.leave){if("mousemove"===a.type)n=T.lookup(t._labels,a);else if("mouseout"!==a.type)return;r=t._hovered,t._hovered=n,function f(e,a,t,i,r){var n,h;!t&&!i||(t?i?t!==i&&(h=n=!0):h=!0:n=!0,h&&o(e,a.leave,t,r),n&&o(e,a.enter,i,r))}(e,i,r,n,a)}}(e,t);break;case"click":!function U(e,a){var t=e[u],i=t._listeners.click,r=i&&T.lookup(t._labels,a);r&&o(e,i,r,a)}(e,t)}}},afterEvent:function(e){var n,h,c,p,_,v,x,a=e[u],r=function(e,a){var r,n,h,c,t=e.slice(),i=[];for(r=0,h=a.length;r<h;++r)-1===(n=t.indexOf(c=a[r]))?i.push([c,1]):t.splice(n,1);for(r=0,h=t.length;r<h;++r)i.push([t[r],-1]);return i}(a._actives,a._actives=e.getActiveElements());for(n=0,h=r.length;n<h;++n)if((_=r[n])[1])for(c=0,p=(x=_[0].element[u]||[]).length;c<p;++c)(v=x[c]).$context.active=1===_[1],v.update(v.$context);(a._dirty||r.length)&&(T.update(a._labels),e.render()),delete a._dirty}}},6688:(V,E,b)=>{b.d(E,{Hi:()=>oe});var d=b(1159),l=b(5e3),M=b(508);b(3191),b(9808),b(6360),b(7579),b(6451),b(5698),b(2722),b(8675),b(925),b(5664),b(449),b(3075),b(7322),b(226);const K=new l.OlP("mat-chips-default-options");let oe=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=l.oAB({type:u}),u.\u0275inj=l.cJS({providers:[M.rD,{provide:K,useValue:{separatorKeyCodes:[d.K5]}}],imports:[[M.BQ]]}),u})()},4809:(V,E,b)=>{b.d(E,{PI:()=>d.P,eT:()=>d.b2,tH:()=>d.av,uz:()=>d.C,i7:()=>d.L,ri:()=>d.j,ME:()=>d.aG,Qd:()=>d.au,S6:()=>d.Q,kJ:()=>d.b,KH:()=>d.g,_D:()=>d.k,Kn:()=>d.i,TS:()=>d.V,DB:()=>d.a,Ux:()=>d.F,re:()=>d.O,oY:()=>d.K,Yr:()=>d.t,kX:()=>d.ax,p2:()=>d.N,Be:()=>d.v});var d=b(4035)}}]);