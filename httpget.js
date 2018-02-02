module.exports=get=function(o,t,n){require("http").get({host:o,path:t},function(o){var t="";o.on("data",o=>{t+=o,console.log(t)}),o.on("end",()=>n(t))})};
