!function(e,t){function r(t){var n,o;if("."!==t[0])return e(t);if(r.json.test(t))return e("./"+r.basename(t));if(n=r.resolve(t),o=r.cache[n],!o)throw new Error('failed to require "'+t+'"');return o.exports||(o.exports={},o.call(o.exports,o,o.exports,r.relative(n))),o.exports}r.json=/\.json$/i,r.cache={},r.basename=e("path").basename,r.resolve=function(e){var t=e,n=e+".js",o=e+"/index.js";return r.cache[n]&&n||r.cache[o]&&o||t},r.register=function(e,t){r.cache[e]=t},r.relative=function(e){function t(t){var n,o,s,i,c;if("."!==t[0])return r(t);for(n=e.split("/"),o=t.split("/"),n.pop(),s=0,i=o.length;i>s;s+=1)c=o[s],".."===c?n.pop():"."!==c&&n.push(c);return r(n.join("/"))}return t.resolve=function(e){return r.json.test(e)?"./"+r.basename(e):r.resolve(e)},t.cache=r.cache,t},r.register("./http/server.js",function(e,t,r){"use strict";var n=r("http"),o=r("./config.json"),s=r("./respond");t.start=function(e){e="function"==typeof e?e:function(){},t._http=n.createServer(function(e,t){return s(e,t)}),t._http.listen(o.port,e)},t.port=o.port,t._http=null,t.close=function(e){e="function"==typeof e?e:function(){},t._http.close(e)}}),r.register("./http/respond.js",function(e,t,r){"use strict";var n=r("url"),o=r("./config.json");e.exports=function(e,t){var r=n.parse(e.url,!0);t.writeHead(200,{"Content-Type":"text/plain"}),"bar"===r.query.foo?t.write(o.bar):t.write(o.foo),t.end()}}),t.exports=r("../server.js")}(require,module);