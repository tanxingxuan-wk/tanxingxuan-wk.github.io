(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{LS5l:function(e,t,n){},P7vt:function(e,t,n){},iLUg:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne}));var a=n("VCL8"),o=n("QbLZ"),r=n.n(o),i=n("jo6Y"),l=n.n(i),s=n("iCc5"),c=n.n(s),p=n("FYw3"),u=n.n(p),d=n("V7oC"),m=n.n(d),h=n("mRg0"),f=n.n(h),v=n("cDcd"),y=n.n(v),g=n("17x9"),E=n.n(g),w=!("undefined"!==typeof window&&window.document&&window.document.createElement);function b(e){var t=[];return y.a.Children.forEach(e,(function(e){t.push(e)})),t}function T(e){return e||0===e?Array.isArray(e)?e:[e]:[]}function S(e){return Array.isArray(e)?2===e.length?e:[e.join(),e.join()]:[e,e]}function k(e,t){if(!e||!t)return!1;if(e===t)return!0;var n=!0;function a(e,t){Object.keys(e).forEach((function(a){e[a]!==t[a]&&(n="object"===typeof e[a]&&"object"===typeof t[a]&&k(e[a],t[a]))}))}if(Array.isArray(e)&&Array.isArray(t))for(var o=0;o<e.length;o++){var r=e[o],i=t[o];a(r,i)}return Object.keys(e).forEach((function(a){a in t?"object"===typeof e[a]&&"object"===typeof t[a]?n=k(e[a],t[a]):"function"===typeof e[a]&&"function"===typeof t[a]?e[a].name!==t[a].name&&(n=!1):e[a]!==t[a]&&(n=!1):n=!1})),Object.keys(t).forEach((function(a){a in e?"object"===typeof t[a]&&"object"===typeof e[a]?n=k(t[a],e[a]):"function"===typeof e[a]&&"function"===typeof t[a]?e[a].name!==t[a].name&&(n=!1):t[a]!==e[a]&&(n=!1):n=!1})),n}function H(){return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop}function D(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function C(){}var L=function(){if(w)return!1;var e=!1;return window.addEventListener("test",(function(){}),Object.defineProperty({},"passive",{get:function(){return e=!0,null}})),!!e&&{passive:!1}},A="scroll-id";function B(e){this._listeners={},this._eventTarget=e||{},this.recoverLists=[],this._listFun={}}B.prototype={addEventListener:function(e,t,n,a){var o=e.split("."),r=o[0],i=o[1];n&&!n.getAttribute(A)&&n.setAttribute(A,(Date.now()+Math.random()).toString(32).replace(".",""));var l=r+(n?"_"+n.getAttribute(A):""),s=this._listeners[l],c=0,p=void 0,u=void 0;s||(s=[],this._listeners[l]=s),u=s.length;while(--u>-1)p=s[u],p.n===i&&p.c===t?s.splice(u,1):0===c&&(c=u+1);var d=n||this._eventTarget;s.splice(c,0,{c:t,n:i,t:r}),this._listFun[l]||(this._listFun[l]=this._listFun[l]||this.dispatchEvent.bind(this,{type:r,target:n}),d.addEventListener?d.addEventListener(r,this._listFun[l],a):d.attachEvent&&d.attachEvent("on"+r,this._listFun[l]))},removeEventListener:function(e,t,n,a){var o=e.split("."),r=o[0],i=o[1],l=r+(n?"_"+n.getAttribute(A):""),s=this._listeners[l],c=void 0,p=a;if(i||(p=!0),s){c=s.length;var u=n||this._eventTarget;while(--c>-1)if(s[c].c===t&&(p||s[c].n===i)){if(s.splice(c,1),!s.length){var d=this._listFun[l];delete this._listeners[l],delete this._listFun[l],u.removeEventListener?u.removeEventListener(r,d):u.detachEvent&&u.detachEvent("on"+r,d)}if(!p)return}}},dispatchEvent:function(e,t){var n=e.type,a=e.target,o=n+(a?"_"+a.getAttribute(A):""),r=this._listeners[o],i=void 0,l=void 0,s=void 0;if(r){i=r.length,l=this._eventTarget;while(--i>-1)if(s=r[i],s){var c=t||{type:n,target:l};s.c.call(l,c)}}},removeAllType:function(e,t){var n=this,a=e.split("."),o=a[0],r=a[1],i=o+(t?"_"+t.getAttribute(A):""),l=this._listeners[i];this.recoverLists=this.recoverLists.concat(T(l).filter((function(e){return e.n&&e.n.match(r)}))),this.recoverLists.forEach((function(e){n.removeEventListener(e.t+"."+e.n,e.c,t)}))},reAllType:function(e,t){var n=this,a=e.split("."),o=a[0],r=a[1];this.recoverLists=this.recoverLists.map((function(e){return e.t===o&&e.n.match(r)?(n.addEventListener(e.t+"."+e.n,e.c,t),null):e})).filter((function(e){return e}))}};var O=new B("undefined"!==typeof window&&"undefined"!==typeof document&&window),P=n("faye"),x=n.n(P),N=function(e){function t(e){c()(this,t);var n=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getParam=function(e){n.clientHeight=n.target?n.target.clientHeight:D();var t=n.target?n.target.scrollTop:H(),a=n.dom.getBoundingClientRect(),o=n.target?n.target.getBoundingClientRect().top:0,r=a.top+t-o;n.elementShowHeight=t-r+n.clientHeight;var i=S(n.props.playScale),l=/([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(i[0]));l[2]?"px"===l[2]?n.playHeight=parseFloat(l[1]):n.playHeight=n.clientHeight*parseFloat(l[1])/100:n.playHeight=n.clientHeight*parseFloat(i[0]);var s=a.height,c=/([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(i[1]));c[2]?"px"===c[2]?n.leavePlayHeight=parseFloat(c[1]):n.leavePlayHeight=s*parseFloat(c[1])/100:n.leavePlayHeight=s*parseFloat(i[1]);var p=n.props.replay?n.elementShowHeight>=n.playHeight&&n.elementShowHeight<=n.clientHeight+n.leavePlayHeight:n.elementShowHeight>=n.playHeight,u=p?"enter":"leave",d=n.enter!==p||"boolean"!==typeof n.enter?u:null;d&&n.props.onChange({mode:d,id:n.props.id}),n.props.onScroll({domEvent:e,scrollTop:t,showHeight:n.elementShowHeight,offsetTop:r,id:n.props.id}),n.enter=p},n.addScrollEvent=function(){O.addEventListener(n.eventType,n.scrollEventListener,n.target);var e=H();e||n.scrollEventListener()},n.scrollEventListener=function(e){n.getParam(e)},n.state={$self:n},n}return f()(t,e),m()(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,a=t.$self,o={prevProps:e};return n&&e!==n&&a.scrollEventListener(),o}}]),m()(t,[{key:"componentDidMount",value:function(){if(!w){this.dom=x.a.findDOMNode(this);var e=Date.now();this.target=this.props.targetId&&document.getElementById(this.props.targetId);var t=O._listeners.scroll?O._listeners.scroll.length:0;this.eventType="scroll.scrollEvent"+e+t,this.addScrollEvent()}}},{key:"componentWillUnmount",value:function(){O.removeEventListener(this.eventType,this.scrollEventListener,this.target)}},{key:"render",value:function(){var e=this.props,t=e.component,n=(e.playScale,e.location,e.targetId,e.onScroll,e.onChange,e.replay,e.componentProps),a=l()(e,["component","playScale","location","targetId","onScroll","onChange","replay","componentProps"]);return y.a.createElement(t,r()({},a,n))}}]),t}(y.a.Component);N.propTypes={component:E.a.any,playScale:E.a.any,id:E.a.string,onChange:E.a.func,onScroll:E.a.func,location:E.a.string,targetId:E.a.string,replay:E.a.bool,componentProps:E.a.object},N.defaultProps={component:"div",onChange:C,onScroll:C,playScale:.5,replay:!1,componentProps:{}},N.isScrollElement=!0;var I=N,_=function(e){function t(e){c()(this,t);var n=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scrollEventListener=function(e){n.getParam(e);var t=n.state.show,a=n.props,o=a.always,r=a.replay,i=n.elementShowHeight>n.clientHeight+n.leavePlayHeight;if(n.enter||!r&&i)t||n.setState({show:!0}),!o&&n.eventType&&O.removeEventListener(n.eventType,n.scrollEventListener,n.target);else if(o){var l=n.elementShowHeight<n.playHeight,s=r?i:null;(s||l)&&t&&n.setState({show:!1})}},n.children=b(e.children),n.oneEnter=!1,n.enter=!1,n.state={show:!1,children:b(e.children)},n}return f()(t,e),m()(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,a={prevProps:e};return n&&e!==n&&(a.children=b(e.children)),a}}]),m()(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e!==this.props){var n=this.props.always,a=this.state.show,o=O._listeners.scroll&&O._listeners.scroll.some((function(e){return e.n===t.eventType.split(".")[1]}));n&&!o?this.addScrollEvent():n||a||this.scrollEventListener()}}},{key:"render",value:function(){var e=this.props,t=(e.playScale,e.replay,e.component),n=(e.always,e.scrollEvent,e.appear),a=(e.location,e.targetId,e.onChange,e.onScroll,e.componentProps),o=l()(e,["playScale","replay","component","always","scrollEvent","appear","location","targetId","onChange","onScroll","componentProps"]);if(w)return Object(v["createElement"])(t,r()({},o,a),o.children);var i=void 0;if(this.oneEnter)this.state.show?this.children=this.state.children:this.children=this.children.map((function(e){if(!e)return null;var t=e.key||(Date.now()+Math.random()).toString(16).replace(".","");return e.type.isTweenOne?y.a.cloneElement(e,{key:t,reverse:!0}):y.a.cloneElement(e,{key:t},null)})),i=Object(v["createElement"])(t,r()({},o,a),this.children);else{var s=!n,c=b(o.children).map((function(e){if(!e)return null;var t=e.key||(Date.now()+Math.random()).toString(16).replace(".","");return e.type.isTweenOne?y.a.cloneElement(e,r()({},e.props,{key:t,paused:!s})):y.a.cloneElement(e,r()({},e.props,{key:t}),s&&e.props.children)}));i=Object(v["createElement"])(t,r()({},o,a),c),this.oneEnter=!0}return i}}]),t}(I);_.propTypes={component:E.a.any,playScale:E.a.any,always:E.a.bool,scrollEvent:E.a.func,children:E.a.any,className:E.a.string,style:E.a.any,replay:E.a.bool,onChange:E.a.func,onScroll:E.a.func,appear:E.a.bool,componentProps:E.a.object},_.defaultProps={component:"div",playScale:.5,always:!0,scrollEvent:C,replay:!1,onChange:C,onScroll:C,appear:!0,componentProps:{}},_.isScrollOverPack=!0;var j=_,F=n("tQyb"),M=n.n(F),R=n("6y1p"),Q=n("3h2U"),U=0;function W(e){return Array.isArray(e)?2===e.length?e:[e[0]||0,e[1]||1]:e?[e,1]:[0,1]}var Y=function(e){function t(e){c()(this,t);var n=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setDefaultData=function(e){var t=T(e),a=function(e,t){var a=W(e.playScale).map((function(e){return e*n.clientHeight})),o=r()({},e);delete o.playScale;var i=r()({},e);delete i.playScale,i.delay=a[0],o.delay=a[0],i.duration=a[1]-a[0],o.duration=a[1]-a[0],i.onStart=null,i.onUpdate=null,i.onComplete=null,i.onRepeat=null,o.onStart=o.onStart||C,o.onComplete=o.onComplete||C,o.onUpdate=o.onUpdate||C,o.onStartBack=o.onStartBack||C,o.onCompleteBack=o.onCompleteBack||C,n.defaultTweenData[t]=i,n.defaultData[t]=o};t.forEach(a)},n.resizeEventListener=function(){n.defaultData[n.defaultData.length-1]&&n.defaultData[n.defaultData.length-1].onCompleteBool&&!n.props.always||(n.scrollTop=H(),n.target=n.props.targetId&&document.getElementById(n.props.targetId),n.clientHeight=n.target?n.target.clientHeight:D(),n.setDefaultData(n.props.animation||{}),n.timeline&&n.timeline.resetDefaultStyle(),n.timeline=new R["a"](n.dom,n.defaultTweenData),n.timeline.init(),n.scrollEventListener())},n.scrollEventListener=function(){var e=n.target?n.target.scrollTop:H();n.clientHeight=n.target?n.target.clientHeight:D();var t=n.props.location?document.getElementById(n.props.location):n.dom;if(!t)throw new Error('"location" is null');var a=n.target?n.target.getBoundingClientRect().top:0,o=t.getBoundingClientRect().top+e-a,r=e-o+n.clientHeight,i=n.scrollTop-o+n.clientHeight;n.defaultData.forEach((function(e,t){var a=n.defaultData.map((function(e,n){return n<t&&e.delay+e.duration||0})).reduce((function(e,t){return e+t})),o=void 0;r<=e.delay+a?!e.onCompleteBackBool&&e.onStartBool&&(e.onCompleteBackBool=!0,o=!0,e.onCompleteBack()):e.onCompleteBackBool=!1,r>=e.delay+a?e.onStartBool||(e.onStartBool=!0,o=!0,e.onStart()):e.onStartBool=!1,r<=e.delay+e.duration+a?!e.onStartBackBool&&e.onCompleteBool&&(e.onStartBackBool=!0,o=!0,e.onStartBack()):e.onStartBackBool=!1,r>=e.delay+e.duration+a?e.onCompleteBool||(e.onCompleteBool=!0,o=!0,e.onComplete()):e.onCompleteBool=!1,r>=e.delay+a&&r<=e.delay+e.duration+a&&!o&&e.onUpdate(r/(e.delay+e.duration+a))})),Q["a"].clear(n.tickerId),n.tickerId="scrollParallax"+Date.now()+"-"+U,U++,U>=Number.MAX_VALUE&&(U=0);var l=Q["a"].frame;Q["a"].wake(n.tickerId,(function(){var e=(Q["a"].frame-l)*Q["a"].perFrame,t=M.a.easeOutQuad(e,.08,1,300);n.timeline.frame(i+t*(r-i)),e>=300&&Q["a"].clear(n.tickerId)})),n.scrollTop=e,n.defaultData[n.defaultData.length-1].onCompleteBool&&n.eventType&&!n.props.always&&O.removeEventListener(n.eventType,n.scrollEventListener,n.target)},n.scrollTop=0,n.defaultTweenData=[],n.defaultData=[],n.state={$self:n},n}return f()(t,e),m()(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,a=t.$self,o={prevProps:e};if(n&&e!==n){var r=k(n.animation,e.animation);r||(a.setDefaultData(e.animation||{}),a.timeline.resetAnimData(),a.timeline.setDefaultData(a.defaultTweenData))}return o}}]),m()(t,[{key:"componentDidMount",value:function(){this.dom=x.a.findDOMNode(this);var e=Date.now(),t=O._listeners.scroll?O._listeners.scroll.length:0;this.eventType="scroll.scrollEvent"+e+t,this.eventResize="resize.resizeEvent"+e+t,this.resizeEventListener(),O.addEventListener(this.eventResize,this.resizeEventListener,this.target),this.timeline.frame(0),this.scrollEventListener(),O.addEventListener(this.eventType,this.scrollEventListener,this.target)}},{key:"componentWillUnmount",value:function(){O.removeEventListener(this.eventType,this.scrollEventListener,this.target),O.removeEventListener(this.eventResize,this.resizeEventListener,this.target)}},{key:"render",value:function(){var e=this.props,t=(e.animation,e.always,e.component,e.location,e.targetId,e.componentProps),n=l()(e,["animation","always","component","location","targetId","componentProps"]),a=r()({},n.style);return Object.keys(a).forEach((function(e){if(e.indexOf("filter")>=0||e.indexOf("Filter")>=0)for(var t=["Webkit","Moz","Ms","ms"],n=0;n<t.length;n++)a[t[n]+"Filter"]=a[e]})),n.style=a,y.a.createElement(this.props.component,r()({},n,t))}}]),t}(y.a.Component);Y.propTypes={component:E.a.any,animation:E.a.any,always:E.a.bool,location:E.a.string,children:E.a.any,className:E.a.string,style:E.a.any,id:E.a.string,targetId:E.a.string,componentProps:E.a.object},Y.defaultProps={component:"div",always:!0,componentProps:{}},Y.isScrollParallax=!0;var z=Y,$=n("xEkU"),V=n.n($),X=[],q=function(e){function t(e){c()(this,t);var n=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(e){e.preventDefault(),O.removeAllType("scroll.scrollAnchorEvent"),n.elementDom=document.getElementById(n.props.to),-1===n.rafID&&n.elementDom&&(n.scrollTop=n.target?n.target.scrollTop:H(),n.initTime=Date.now(),n.rafID=V()(n.raf),X.forEach((function(e){e!==n&&e.remActive()})),n.addActive())},n.getToTop=function(){var e=n.elementDom&&n.elementDom.getBoundingClientRect();n.clientHeight=n.target?n.target.clientHeight:D();var t=n.target?n.target.getBoundingClientRect().top:0,a=Math.round(e.top+H())-n.props.offsetTop-t,o=S(n.props.showHeightActive)[0],r=o.match("%")?n.clientHeight*parseFloat(o)/100:o;return n.props.toShowHeight?a-r+.5:a},n.cancelRequestAnimationFrame=function(){V.a.cancel(n.rafID),n.rafID=-1},n.addActive=function(){if(!n.state.active){var e={target:n.dom,to:n.props.to};n.props.onFocus(e),n.setState({active:!0},(function(){if(n.props.toHash){var e="#"+n.props.to;history.pushState(null,window.title,e)}}))}},n.raf=function(){if(-1!==n.rafID){var e=n.props.duration,t=Date.now(),a=t-n.initTime>e?e:t-n.initTime,o=M.a[n.props.ease](a,n.scrollTop,n.getToTop(),e);n.target?n.target.scrollTop=o:window.scrollTo(window.scrollX,o),a===e?(n.elementDom=null,n.cancelRequestAnimationFrame(),O.reAllType("scroll.scrollAnchorEvent")):n.rafID=V()(n.raf)}},n.remActive=function(){if(n.state.active){var e={target:n.dom,to:n.props.to};n.props.onBlur(e),n.setState({active:!1})}},n.scrollEventListener=function(){var e=document.getElementById(n.props.to);if(e){var t=n.target?n.target.clientHeight:D(),a=e.getBoundingClientRect(),o=e.clientHeight,r=n.target?n.target.getBoundingClientRect().top:0,i=Math.round(-a.top+r),l=S(n.props.showHeightActive),s=l[0].toString().indexOf("%")>=0?parseFloat(l[0])/100*t:parseFloat(l[0]),c=l[1].toString().indexOf("%")>=0?parseFloat(l[1])/100*t:parseFloat(l[1]);i>=Math.round(-s)&&i<Math.round(o-c)?n.addActive():n.remActive()}},n.rafID=-1,n.state={active:!1},n}return f()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this;this.dom=x.a.findDOMNode(this),this.target=this.props.targetId&&document.getElementById(this.props.targetId),X.push(this);var t=Date.now(),n=O._listeners.scroll?O._listeners.scroll.length:0;this.eventType="scroll.scrollAnchorEvent"+t+n,O.addEventListener(this.eventType,this.scrollEventListener,this.target),setTimeout((function(){e.scrollEventListener()}))}},{key:"componentWillUnmount",value:function(){var e=this;X=X.filter((function(t){return t!==e})),O.removeEventListener(this.eventType,this.scrollEventListener,this.target),this.cancelRequestAnimationFrame()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.component,t.onClick),a=(t.duration,t.active),o=(t.showHeightActive,t.ease,t.toShowHeight,t.offsetTop,t.targetId,t.to,t.toHash,t.componentProps),i=l()(t,["component","onClick","duration","active","showHeightActive","ease","toShowHeight","offsetTop","targetId","to","toHash","componentProps"]),s=this.state.active?a:"";i.onClick=function(t){n(t),e.onClick(t)};var c=new RegExp(s,"ig"),p=i.className||"";return i.className=-1===p.indexOf(s)?(p+" "+s).trim():p.replace(c,"").trim(),Object(v["createElement"])(this.props.component,r()({},i,o))}}]),t}(y.a.Component);q.propTypes={component:E.a.any,children:E.a.any,className:E.a.string,style:E.a.any,offsetTop:E.a.number,duration:E.a.number,active:E.a.string,to:E.a.string,targetId:E.a.string,showHeightActive:E.a.any,toShowHeight:E.a.bool,ease:E.a.string,onClick:E.a.func,onFocus:E.a.func,onBlur:E.a.func,toHash:E.a.bool,componentProps:E.a.object},q.defaultProps={component:"div",offsetTop:0,duration:450,active:"active",showHeightActive:"50%",ease:"easeInOutQuad",toHash:!1,onClick:C,onFocus:C,onBlur:C,componentProps:{}},q.isScrollLink=!0;var J=q;function Z(e){return{ease:e.ease||"easeInOutQuad",duration:e.duration||450,docHeight:e.docHeight,scrollInterval:e.scrollInterval||1e3,loop:e.loop||!1,location:e.location||[]}}var G=L(),K=function e(){var t=this;c()(this,e),this.init=function(e){t.vars=Z(e||{}),t.rafID=-1,t.toHeight=-1,t.num=0,w||(O.addEventListener("wheel.scrollWheel",t.onWheel,null,G),setTimeout(t.startScroll))},this.unMount=function(){O.removeEventListener("wheel.scrollWheel",t.onWheel)},this.setCurrentNNum=function(){var e=t.mapped,n=D();if(e.length){e.forEach((function(e,n){var a=e.offsetTop,o=e.getBoundingClientRect().height;if(t.scrollTop>=a&&t.scrollTop<a+o){var r=(t.scrollTop-e.offsetTop)/o;r=r>.8?1:0,t.num=n+r,t.toHeight=a+r*o}}));var a=void 0,o=e[e.length-1],r=e[0],i=r.offsetTop;if(t.scrollTop>o.offsetTop+o.getBoundingClientRect().height)a=Math.ceil((t.scrollTop-o.offsetTop-o.getBoundingClientRect().height)/n),t.num=e.length+a,t.toHeight=o.offsetTop+o.getBoundingClientRect().height+a*n;else if(t.scrollTop<i){var l=t.scrollTop-i;a=l>0?Math.ceil(l/n):Math.floor(l/n),t.num=a;var s=Math.ceil(i/n);t.toHeight=(s+a)*n}}else{var c=t.vars.docHeight||document.body.scrollHeight,p=t.scrollTop/n,u=c/n,d=c%n,m=t.scrollTop%n,h=Math.floor(p),f=Math.ceil(p)===Math.floor(u)?m/d:m/n;t.num=Math.round(h+f),t.toHeight=t.num*n}},this.startScroll=function(){var e=t.vars.location.map((function(e){return document.getElementById(e)})).filter((function(e){return e}));t.mapped=e,t.scrollTop=H(),t.animEndScrollTop=t.scrollTop,t.setCurrentNNum(),e[0]&&e[0].offsetTop>=D()&&console.warn('Warning: The first screen is not at the top, which may lead to poor scrolling effect, "'+t.vars.location[0]+'" offsetTop '+e[0].offsetTop+"px."),t.toHeight!==t.scrollTop?(t.initTime=Date.now(),t.rafID=V()(t.raf)):t.toHeight=-1},this.raf=function(){var e=t.vars.duration,n=Date.now(),a=n-t.initTime>e?e:n-t.initTime,o=M.a[t.vars.ease](a,t.scrollTop,t.toHeight,e);t.animEndScrollTop=o,window.scrollTo(window.scrollX,o),a===e?(t.cancelRequestAnimationFrame(),setTimeout((function(){t.toHeight=-1}),t.vars.scrollInterval)):t.rafID=V()(t.raf)},this.cancelRequestAnimationFrame=function(){V.a.cancel(t.rafID),t.rafID=-1},this.getComputedStyle=function(e){return e&&document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e):{}},this.isScroll=function(e,n){var a=t.getComputedStyle(e),o=a.overflow,r=a.overflowY,i="auto"===o||"scroll"===o||"overlay"===o||"auto"===r||"scroll"===r||"overlay"===r;return!(e===document.body||!e||e.parentNode===document)&&(!!(e.scrollHeight>e.offsetHeight&&i&&e.scrollTop+e.offsetHeight+n<e.scrollHeight&&e.scrollTop+n>0)||t.isScroll(e.parentNode,n))},this.limitNum=function(e,n){t.vars.loop?(t.num=t.num<e?n:t.num,t.num=t.num>n?e:t.num):(t.num=t.num<e?e:t.num,t.num=t.num>n?n:t.num)},this.onWheel=function(e){var n=e.deltaY;if(!t.isScroll(e.target,n)){e.preventDefault();var a=t.mapped;if(-1===t.rafID&&0!==n&&-1===t.toHeight){var o=D();t.scrollTop=H();var r=t.vars.docHeight||document.body.scrollHeight;if(t.animEndScrollTop!==t.scrollTop&&t.setCurrentNNum(),n<0?t.num--:n>0&&t.num++,a.length){var i=a[a.length-1],l=a[0],s=l.offsetTop,c=s?Math.ceil(s/o):0,p=r-i.offsetTop-i.getBoundingClientRect().height,u=p?Math.ceil(p/o):0;t.limitNum(-c,a.length-1+u);var d=a[t.num];t.toHeight=d?d.offsetTop:(c+t.num)*o,t.toHeight=t.toHeight<0?0:t.toHeight,t.toHeight=t.toHeight>r-o?r-o:t.toHeight}else t.limitNum(0,Math.floor(r/o)),t.toHeight=o*t.num;t.initTime=Date.now(),t.rafID=V()(t.raf)}}}},ee=new K,te={init:ee.init,unMount:ee.unMount},ne=Object(a["a"])(j),ae=Object(a["a"])(z),oe=Object(a["a"])(I),re=J,ie=O,le=te;t["b"]={OverPack:ne,Parallax:ae,Element:oe,Link:re,Event:ie,scrollScreen:le}},yZnS:function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),o=n.n(a),r=(n("+L6B"),n("2/Rp")),i=n("tJVT"),l=n("0Xwh"),s=n("QbLZ"),c=n.n(s),p=n("iCc5"),u=n.n(p),d=n("FYw3"),m=n.n(d),h=n("mRg0"),f=n.n(h),v=n("6y1p"),y=n("TSYQ"),g=n.n(y),E={left:{x:30,opacity:0},right:{x:-30,opacity:0},top:{y:-30,opacity:0},bottom:{y:30,opacity:0},alpha:{opacity:0},scale:{scale:0,opacity:0},scaleBig:{scale:2,opacity:0},scaleX:{opacity:0,scaleX:0},scaleY:{opacity:0,scaleY:0},"mask-bottom":{opacity:0,scale:.8,y:"100%"},"mask-top":{opacity:0,scale:.8,y:"-100%"},flash:{enter:[{opacity:0,type:"from",duration:150},{opacity:0,duration:150},{opacity:1,duration:150}],leave:[{opacity:0,duration:150},{opacity:1,duration:150},{opacity:0,duration:150}]},bounce:{enter:[{opacity:0,type:"set"},{y:-30,opacity:1,duration:300},{y:15,duration:200},{y:-10,duration:200},{y:5,duration:200},{y:0,duration:200}],leave:[{y:5,duration:200},{y:-10,duration:200},{y:15,duration:200},{y:-30,opacity:0,duration:300}]},swing:{enter:[{opacity:0,type:"set"},{x:10,opacity:1,duration:150},{x:-10,duration:150},{x:8,duration:100},{x:-8,duration:100},{x:5,duration:100},{x:-5,duration:100},{x:0,duration:100}],leave:[{x:-5,duration:100},{x:5,duration:100},{x:-8,duration:100},{x:8,duration:100},{x:-10,duration:150},{x:10,opacity:0,duration:150}]},"swing-rotate":{enter:[{opacity:0,transformOrigin:"50% 0",type:"set"},{rotate:30,opacity:1,duration:300},{rotate:-30,duration:300},{rotate:15,duration:200},{rotate:-15,duration:200},{rotate:5,duration:100},{rotate:-5,duration:100},{rotate:0,duration:50}],leave:[{rotate:-5,duration:100},{rotate:5,duration:100},{rotate:-15,duration:200},{rotate:15,duration:200},{rotate:-30,duration:300},{rotate:30,opacity:0,duration:300}]},"swing-y":{enter:[{opacity:0,type:"set"},{y:10,opacity:1,duration:150},{y:-10,duration:150},{y:8,duration:100},{y:-8,duration:100},{y:5,duration:100},{y:-5,duration:100},{y:0,duration:100}],leave:[{y:-5,duration:100},{y:5,duration:100},{y:-8,duration:100},{y:8,duration:100},{y:-10,duration:150},{y:10,opacity:0,duration:150}]}},w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n};function b(e,t){var n=void 0;return n="function"===typeof e?e(t):e,n}var T=function(e){function t(){u()(this,t);var n=m()(this,e.apply(this,arguments));return n.getChildrenToRender=function(e){if(!e)return[];var t=n.props.split,o=t?t(e):e.split("");return o.map((function(e,t){return a["createElement"]("span",{key:e+"-"+t.toString()},e)}))},n.getEnterOrLeave=function(e,t,a){var o=n.props,r=o.mode,i=o.type,l=o.enter,s=o.appear,p=o.interval,u=o.duration;if(!s&&"enter"===t||a<0)return null;var d=c()({},e,{type:t}),m=b(u,d),h=b(p,d),f=void 0;if("function"===typeof p)f=h;else switch(r){case"reverse":f=(a-e.index)*h;break;case"sync":f=0;break;case"random":f=a*h*Math.random();break;default:f=e.index*h}f+=b(n.props.delay,d);var v="enter"===t?"from":"to",y=n.props[t]||l;return y&&"function"===typeof y?y=y(c()({},e,{delay:f})):y||(y=E[i]),y.enter&&(y=y[t]||y.etner),Array.isArray(y)?y.map((function(e,t){if(!(t||e.duration&&"set"!==e.type))return e;if(1===t){var n=y[0];if(!n.duration||"set"===e.type)return c()({delay:f},e)}return c()({delay:t?0:f},e)})):c()({delay:f,duration:m,type:v},y)},n}return f()(t,e),t.prototype.render=function(){var e,t=this,n=this.props,o=n.prefixCls,r=n.type,i=n.className,l=n.enter,s=(n.mode,n.duration,n.delay,n.interval,n.children),p=(n.split,w(n,["prefixCls","type","className","enter","mode","duration","delay","interval","children","split"])),u=this.getChildrenToRender(s),d=g()(o,(e={},e[r]=r&&!l,e[i]=!!i,e));return a["createElement"](v["b"],c()({},p,{className:d,enter:function(e){return t.getEnterOrLeave(e,"enter",u.length-1)},leave:function(e){return t.getEnterOrLeave(e,"leave",t.tweenGrooup.keysToLeave.length-1)},ref:function(e){t.tweenGrooup=e}}),u)},t}(a["Component"]),S=T;T.defaultProps={type:"top",mode:"smooth",prefixCls:"texty",component:"div",delay:0,interval:50,appear:!0};var k=S;function H(e,t,n){var o=null===n||void 0===n?void 0:n.immediate,r=Object(a["useRef"])();r.current=e,Object(a["useEffect"])((function(){var e;if(void 0!==t&&null!==t){o&&(null===(e=r.current)||void 0===e||e.call(r));var n=setInterval((function(){var e;null===(e=r.current)||void 0===e||e.call(r)}),t);return function(){clearInterval(n)}}}),[t])}var D=H;const C=e=>{const t=Object(a["useState"])(),n=Object(i["a"])(t,2),s=n[0],c=n[1],p=()=>{const e=new Date;c(`${e.getFullYear()}.${e.getMonth()+1}.${Number(e.getDate())<10?"0"+e.getDate():e.getDate()}-${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`)};return D((()=>{p()}),1e3),o.a.createElement("div",{className:"banner0"},o.a.createElement(l["a"],{key:"QueueAnim",type:["bottom","top"],delay:200,className:"banner0-text-wrapper"},o.a.createElement("div",{className:"banner0-name-en",key:"nameEn"},o.a.createElement("span",null,"Seeking Experience & Engineering Conference")),o.a.createElement("div",{className:"banner0-slogan",key:"nameEn"},o.a.createElement(k,{type:"mask-bottom"},"banner0\u6807\u9898")),o.a.createElement("div",{className:"banner0-name",key:"name"},o.a.createElement("span",null,"banner\u5185\u5bb9")),o.a.createElement(r["a"],{type:"primary",key:"button",className:"banner0-button"},"\u7acb\u523b\u67e5\u770b"),o.a.createElement("div",{className:"banner0-time",key:"time"},o.a.createElement("span",null,s))))};var L=C,A=n("iLUg");const B=A["b"].OverPack,O=()=>o.a.createElement("div",{className:"banner1"},o.a.createElement(B,{className:"banner1-page",playScale:"0.5",always:!0},o.a.createElement(l["a"],{key:"text",type:"left",leaveReverse:!0,ease:["easeOutQuad","easeInQuad"],"data-edit":"childWrapper",className:"banner1-title-wrapper"},o.a.createElement("h1",{className:"banner1-title",key:"title"},o.a.createElement("span",null,"\u4ea7\u54c1\u540dBanner1")),o.a.createElement("div",{className:"banner1-explain",key:"explain"},o.a.createElement("span",null,"\u4ea7\u54c1\u6807\u8bedBanner1")),o.a.createElement("div",{className:"banner1-content",key:"content"},o.a.createElement("span",null,"\u4ea7\u54c1\u7684\u8be6\u7ec6\u8bf4\u660eBanner1")),o.a.createElement("div",{className:"banner1-button-wrapper",key:"button"},o.a.createElement(r["a"],{type:"primary",className:"banner1-button"},"\u5f00\u59cb\u4f7f\u7528"))),o.a.createElement(v["c"],{animation:{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"},className:"banner1-image"},o.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",width:"100%",alt:"img"}))));var P=O,x=n("KO28"),N=n("8Skl");n("P7vt");const I=x["a"].BgElement,_=()=>o.a.createElement("div",{className:"banner2"},o.a.createElement(v["b"],{enter:{opacity:0,type:"from"},leave:{opacity:0},component:""},o.a.createElement("div",{className:"banner2-wrapper",key:"wrapper"},o.a.createElement(x["b"],null,o.a.createElement(x["a"],{key:"1",prefixCls:"banner2-user-elem"},o.a.createElement(I,{key:"bg",className:"bg bg1"}),o.a.createElement(l["a"],{type:["bottom","top"],delay:200,key:"text",className:"banner2-text-wrapper"},o.a.createElement("div",{key:"content",className:"banner2-content"},"demo-demo-demo-banner2"),o.a.createElement(r["a"],{ghost:!0,key:"button",className:"banner2-button"},o.a.createElement("span",null,"\u66f4\u591a1")))),o.a.createElement(x["a"],{key:"1",prefixCls:"banner2-user-elem"},o.a.createElement(I,{key:"bg",className:"bg bg2"}),o.a.createElement(l["a"],{type:["bottom","top"],delay:200,key:"text",className:"banner2-text-wrapper"},o.a.createElement("div",{key:"content",className:"banner2-content"},"demo-demo-demo-banner2"),o.a.createElement(r["a"],{ghost:!0,key:"button",className:"banner2-button"},o.a.createElement("span",null,"\u66f4\u591a2"))))))),o.a.createElement(v["c"],{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner2-icon",key:"icon"},o.a.createElement(N["a"],null)));var j=_;n("LS5l");const F=()=>o.a.createElement("div",{className:"home-wrapper"},o.a.createElement(L,null),o.a.createElement(P,null),o.a.createElement(j,null));t["default"]=F}}]);