(this.webpackJsonpfacerecon=this.webpackJsonpfacerecon||[]).push([[0],{102:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(45),i=a.n(c),r=(a(102),a(89)),l=a(90),s=a(96),u=a(95),m=a(91),E=a.n(m),g=a(92),p=a.n(g),d=(a(345),a(346),function(){return o.a.createElement("nav",null,o.a.createElement("p",{className:"f4 link dim black pointer"},"Sign Out"))}),b=(a(347),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This magic app will detect faces in your pictures. Give it a try"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),f=(a(348),function(e){var t=e.imageURL,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),h=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"Abner, your current rank is ..."),o.a.createElement("div",{className:"white f1"},"#5"))},A=a(93),v=a.n(A),R=a(94),w=a.n(R),F=(a(349),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(v.a,{className:"Tilt br2 shadow-2",options:{max:50},style:{height:150,width:150}},o.a.createElement("div",{id:"logoDiv",className:"dib v-mid"},o.a.createElement("img",{alt:"FaceRecon Logo",src:w.a}),o.a.createElement("p",{className:"f4 mt0"},"FaceRecon"))))}),y=new p.a.App({apiKey:"7a83d2f84c08464a8507e21476482e66"}),x={particles:{number:{value:70,density:{enable:!0,value_area:800},move:{speed:3}}}},C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t}),console.log(t)},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),y.models.predict({id:"a403429f2ddf4b49b307e318f00e528b",version:"34ce21a40cc24b6b96ffee54aabff139"},e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageURL:"",box:{}},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E.a,{className:"particles",params:x}),o.a.createElement(d,null),o.a.createElement(F,null),o.a.createElement(h,null),o.a.createElement(b,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(f,{box:this.state.box,imageURL:this.state.imageURL}))}}]),a}(n.Component);a(350),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAC20lEQVR4nO3dMW4TQRTG8X8AgSgBCRS7p6KlAF8AhHMcsClJIi6AuAh0ARJBEii4gbkAFKTAboIikmJmlWHlWI73jf129/tJo2St7PiNnmd27MyOQURERERERERERERERETE0gawB0yAU4OybxjboVFME2AX6BvGlsVrbBqcli+G8R1kiG/bMD5TG4QAj4EXQGe14WTVAQaEtp7itKfsEYIbrDqQJRoS2vxp1YFMMyYEV/SMqsPDKGOsozmfd1R6rDguhtFOPP6TMdaFFQ1Kj5uq3E6ztl6xqkhsKCHOKCHOKCHO5EzIj4x1yxxMZxvOaZbVFjkTkvONncxBbwwNaMhyRglxRtPeBtO014CnIeuQxf9dW/XcgwXPda38SrnstLfKK23Z52brIZaqTnuVEOCaVUWErv8vOW7yRT1tW7GSpXHq1EOy8XRRF2yHrKrKQ94yn9dND2kKV8NOFRqynFFCnFFCnFFCnFFCnFFCnFFCnFFCnFFCnKlrQsr3CjZGXRMyLQmWN4eKiMhyVVn5UTfpAg63q1YaN+OZIU2I23a7DSyzxi6Um2YAHAE9g7p6wE/guUFd2XhPyHXgFvAB2ATWF6hjHdgCPgL3gBsGcdXi3peqKxenuQq8Teo+BnaAV8AT4AHQBW7G0o2PPY1/swP8Tc5/E+usqhUrF2fpAe+BE/7/yGSecgK8Ax4ZxpMtIWtWFXEe1FpybFk/wB3gcSwPgbvA7VggXG+OgF/Ad+Ar8A34bRzHCLgffy+324023dKWatUsq3WUEGeUkMXUctrb5GtIK25pE5QQd5QQZ5QQZ5QQZywTMok/i21i97l4y9dZ27TO2ra1qss876zyOdbXjT/HhjGa2SUEO1x1IEv0ktBmlxsp9zn/iHxIs7ca7xKSUWw1/my14VxsG5shIS0evx0hLVuG8WXRJ3ThYuvxqsXjtyOMYxvd9gwRERERERERERERERERqaMzSvCZkXtoEcoAAAAASUVORK5CYII="},97:function(e,t,a){e.exports=a(351)}},[[97,1,2]]]);
//# sourceMappingURL=main.3651c4aa.chunk.js.map