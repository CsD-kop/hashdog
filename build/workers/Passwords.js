"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),_get=function(t,e,a){for(var s=!0;s;){var i=t,r=e,o=a;n=u=d=void 0,s=!1,null===i&&(i=Function.prototype);var n=Object.getOwnPropertyDescriptor(i,r);if(void 0!==n){if("value"in n)return n.value;var d=n.get;return void 0===d?void 0:d.call(o)}var u=Object.getPrototypeOf(i);if(null===u)return void 0;t=u,e=r,a=o,s=!0}},_BaseWorker2=require("./BaseWorker"),Passwords=function(t){function e(t){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.passwordLength=0,this.lastTries=0,this.data.name="<Dictionary> Passwords",this.data.keysTried=0,this.data.keysTotal=14344391,this.data.processId=process.pid,this.data.status="Initializing..."}return _inherits(e,t),_createClass(e,[{key:"initialize",value:function(t){var e=this,a=require("fs"),s=require("path").join,i=require("zlib"),r=require("tar"),o=s(__dirname,"../../data/data.bin"),n=void 0;this.passwordLength=t.length,this.data.status="Parsing password archive",this.data.uptime=process.uptime().toFixed(2),this.sendStatus(),n=a.createReadStream(s(__dirname,"../../data/data.bin")),n.on("error",function(){a.createReadStream(s(__dirname,"../../data/data.tar.gz")).on("error",function(t){"EACCES"===t.code?e.data.status="Please run with sudo. Error when extracting data.":e.data.status=t.toString(),e.data.uptime=process.uptime().toFixed(2),e.sendStatus(),process.exit(0)}).pipe(i.Unzip()).pipe(r.Parse()).on("entry",function(t){e.data.status="Extracting password list",e.data.uptime=process.uptime().toFixed(2),e.sendStatus(),t.pipe(a.createWriteStream(o)),t.on("end",function(){e.processList(o)})})}),n.on("readable",function(){e.data.status="Password list cached",e.processList(o)})}},{key:"processList",value:function(t){var e=this,a=this,s=require("fs"),i=require("../util/Liner"),r=s.createReadStream(t);this.data.status="Working",this.data.uptime=process.uptime().toFixed(2),this.sendStatus(),r.pipe(i),r.on("end",function(){s.unlinkSync(t),a.data.percentage=100,a.data.uptime=process.uptime().toFixed(2),a.data.keyLength=0,a.data.status="Unsuccessful",a.data.string="",a.sendStatus(),process.send({command:"DONE",workerId:e.data.workerId})}),i.on("readable",function(){for(var t=void 0;null!==(t=i.read());)a.processLine(t)})}},{key:"processLine",value:function(t){var e=void 0,a=void 0,s=void 0,i=void 0,r=void 0,o=void 0;if(!this.passwordLength||t.length===this.passwordLength){if(e=this.hasher.hash(t),this.match===e)return this.data.status="SUCCESS",this.data.success=!0,this.data.uptime=process.uptime().toFixed(2),this.data.keyLength=t.length,this.data.hash=e,this.data.string=t,this.sendStatus(),void process.exit(0);a=new Date,s=a-this.lastDate,s>=this.refreshRate&&(i=this.data.keysTried-this.lastTries,r=(this.data.keysTried/this.data.keysTotal*100).toFixed(2),o=i/(s/1e3)/1e3,this.data.status="Working",this.data.success=!1,this.data.uptime=process.uptime().toFixed(2),this.data.keyLength=t.length,this.data.rate=o,this.data.percentage=r,this.data.string=t,this.sendStatus(),this.lastTries=this.data.keysTried,this.lastDate=a),this.data.keysTried++}}}]),e}(_BaseWorker2.BaseWorker);exports.Passwords=Passwords;