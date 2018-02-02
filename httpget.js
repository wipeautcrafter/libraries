module.exports=function(t,o){require(t.startsWith("https")?"https":"http").get(t,function(t){var n="";t.on("data",t=>{n+=t,console.log(n)}),t.on("end",()=>o(n))})};
