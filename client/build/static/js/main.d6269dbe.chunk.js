(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){e.exports=n(47)},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(28),o=n(0),r=n.n(o),i=n(7),l=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(80),s=n(79),d=(n(43),{width:"70%",marginLeft:"15%",marginTop:"2vh",padding:"0.5%"}),u={width:"20%",height:"7vh",marginLeft:"15.5%",marginTop:"2vh",fontSize:"150%"},h=new WebSocket("ws://81.141.3.17:8000");function m(){var e=r.a.useState(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=r.a.useState(""),l=Object(a.a)(i,2),m=l[0],p=l[1];return h.onmessage=function(e){p("https://url.torbet.co/"+e.data)},r.a.createElement("div",null,r.a.createElement("h1",null,"URL Shortener"),r.a.createElement(s.a,{className:"input",label:"Enter URL:",variant:"filled",style:d,inputProps:{style:{fontSize:"200%"}},InputLabelProps:{style:{fontSize:"150%",padding:"0.5%"}},onChange:function(e){return function(e){o(e.target.value)}(e)}}),r.a.createElement(c.a,{variant:"contained",style:u,onClick:function(){var e;1==(e=n,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e))?h.send(n):p("please enter valid url")}},"Primary"),r.a.createElement("h1",null,m))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d6269dbe.chunk.js.map