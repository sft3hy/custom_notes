(this.webpackJsonpcustom_notes=this.webpackJsonpcustom_notes||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=(a(29),a(22)),s=a(17),i=a(18),u=a(23),m=a(21),d=(a(30),a(9)),h=(a(31),a(20)),v=a(7),N=a(10),E=function(e){var t=e.notes.map((function(t,a){return o.a.createElement(v.a,{className:"DeleteNoteButton"},o.a.createElement(v.a.Header,{as:"h4"},o.a.createElement("span",null,t.title),o.a.createElement(N.a,{className:"DeleteNoteButton",onClick:function(){return e.removeNote(a)},variant:"outline-danger"},"Delete note")),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,null,t.contents)))}));return o.a.createElement("div",null,t)},f=function(e){var t=e.notes,a=e.removeNote;return o.a.createElement(d.a,null,o.a.createElement("h2",{className:"YourNotes"},"Your Notes"),o.a.createElement("hr",null),o.a.createElement(h.a,null,o.a.createElement(E,{notes:t,removeNote:a})))},p=a(13),b=(a(32),a(11)),g=a(14),w=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),s=Object(p.a)(c,2),i=s[0],u=s[1],m=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"title":l(n);break;case"contents":u(n);break;default:console.log("change not handled")}};return o.a.createElement(d.a,null,o.a.createElement("h1",{className:"Title"},"Your custom notes app"),o.a.createElement(b.a,{className:"Note Title"},o.a.createElement(g.a,{className:"Note Title",type:"text",id:"title",name:"title",placeholder:"Note Title",value:r,onChange:m})),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"Text",type:"text",as:"textarea",rows:"6",name:"contents",placeholder:"Note Text",value:i,onChange:m})),o.a.createElement(N.a,{className:"AddNote",variant:"primary",onClick:function(){if(r&&i){var t={title:r,contents:i};e.handleAddNote(t),l(""),u("")}}},"Add Note"))},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={notes:[]},e.removeNote=function(t){var a=e.state.notes;e.setState({notes:a.filter((function(e,a){return a!==t}))})},e.handleAddNote=function(t){e.setState({notes:[].concat(Object(c.a)(e.state.notes),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.notes;return o.a.createElement("div",null,o.a.createElement(w,{handleAddNote:this.handleAddNote}),o.a.createElement(f,{notes:e,removeNote:this.removeNote}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a0a0650e.chunk.js.map