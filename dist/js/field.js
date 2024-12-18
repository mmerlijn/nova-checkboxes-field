(()=>{"use strict";var e,n={933:(e,n,t)=>{const r=Vue;var o={class:"w-full"},l=["title"];const i={props:["resourceName","field"]};var c=t(262);const s=(0,c.A)(i,[["render",function(e,n,t,i,c,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(Object.entries(t.field.options),(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("span",{key:e[1],title:e[1],class:(0,r.normalizeClass)(["rounded-full w-2 h-2 mr-1",t.field.value.map((function(e){return String(e)})).includes(e[0])?"bg-green-600":"bg-red-600"])}," ",10,l)})),128))])}]]);var a={class:"text-sm grid grid-cols-4 grid-flow-row gap-2"},u={class:"flex items-center"};const d={props:["index","resource","resourceName","resourceId","field"]},f=(0,c.A)(d,[["render",function(e,n,t,o,l,i){var c=(0,r.resolveComponent)("PanelItem");return(0,r.openBlock)(),(0,r.createBlock)(c,{index:t.index,field:t.field},{value:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",a,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.field.options,(function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",u,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)(["rounded-full w-2 h-2 mr-1",t.field.value.map((function(e){return String(e)})).includes(n)?"bg-green-600":"bg-red-600"])},null,2),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e),1)])})),256))])]})),_:1},8,["index","field"])}]]);var p={class:"text-sm grid grid-cols-2 grid-flow-row gap-2"},m={class:"flex items-center"},v=["value","checked","onInput","id"],h=["for","textContent","onClick"],k={key:0,class:"my-2 text-red-500"};const g=LaravelNova,x={mixins:[g.FormField,g.HandlesValidationErrors],props:["resourceName","resourceId","field"],methods:{isChecked:function(e){return!!this.value&&this.value.map((function(e){return String(e)})).includes(e)},toggleOption:function(e){this.isChecked(e)?this.$set(this,"value",this.value.filter((function(n){return n!=e}))):this.value.push(e)},setInitialValue:function(){this.value=this.field.value||[]},fill:function(e){e.append(this.field.attribute,this.value||[])},handleChange:function(e){this.value=e}}},b=(0,c.A)(x,[["render",function(e,n,t,o,l,i){var c=(0,r.resolveComponent)("DefaultField");return(0,r.openBlock)(),(0,r.createBlock)(c,{field:t.field,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",p,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.field.options,(function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",m,[(0,r.createElementVNode)("input",{type:"checkbox",value:n,checked:i.isChecked(n),onInput:function(e){return i.toggleOption(n)},class:"checkbox mr-2",id:t.field.name},null,40,v),(0,r.createElementVNode)("label",{for:t.field.name,textContent:(0,r.toDisplayString)(e),onClick:function(e){return i.toggleOption(n)},class:"w-full leading-tight"},null,8,h)])})),256))]),e.hasError?((0,r.openBlock)(),(0,r.createElementBlock)("p",k,(0,r.toDisplayString)(e.firstError),1)):(0,r.createCommentVNode)("",!0)]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e,n){e.component("index-nova-checkboxes-field",s),e.component("detail-nova-checkboxes-field",f),e.component("form-nova-checkboxes-field",b)}))},613:()=>{},262:(e,n)=>{n.A=(e,n)=>{const t=e.__vccOpts||e;for(const[e,r]of n)t[e]=r;return t}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var l=t[e]={exports:{}};return n[e](l,l.exports,r),l.exports}r.m=n,e=[],r.O=(n,t,o,l)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,o,l]=e[u],c=!0,s=0;s<t.length;s++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(c=!1,l<i&&(i=l));if(c){e.splice(u--,1);var a=o();void 0!==a&&(n=a)}}return n}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[t,o,l]},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={222:0,101:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,l,[i,c,s]=t,a=0;if(i.some((n=>0!==e[n]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var u=s(r)}for(n&&n(t);a<i.length;a++)l=i[a],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},t=self.webpackChunkmmerlijn_nova_checkboxes_field=self.webpackChunkmmerlijn_nova_checkboxes_field||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.O(void 0,[101],(()=>r(933)));var o=r.O(void 0,[101],(()=>r(613)));o=r.O(o)})();