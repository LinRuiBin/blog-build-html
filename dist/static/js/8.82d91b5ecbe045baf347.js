webpackJsonp([8],{"ill/":function(t,e){},tO5f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("ZYmg"),s=n("6ROu"),a=n.n(s),o={data:function(){return{msg:"所有文章",totalCount:0,labels:[],articles:[],currentlabelId:0}},methods:{_getAllLabels:function(){var t=this;Object(l.c)().then(function(e){var n=e.results;n.splice(0,0,{id:0,name:"全部"}),t.labels=n})},_getAllArticles:function(){var t=this;Object(l.b)().then(function(e){console.log("获取文章"),t.totalCount=e.count,t.articles=e.results})},clickLabel:function(t){var e=this;this.currentlabelId=t,console.log("点击标签 id:"+t),0===t?(console.log("获取全部文章"),Object(l.b)().then(function(t){e.totalCount=t.count,e.articles=t.results})):(console.log("获取指定id文章: "+t),Object(l.f)(t).then(function(t){e.totalCount=t.count,e.articles=t.articles}))},handleCurrentChange:function(t){var e=this;console.log("点击了第几页: "+t),0===this.currentlabelId?Object(l.e)(t).then(function(t){e.totalCount=t.count,e.articles=t.results}):Object(l.g)(this.currentlabelId,t).then(function(t){e.totalCount=t.count,e.articles=t.articles})}},computed:{totalArts:function(){var t=this.articles.length;return console.log("当前所有文章数"+t),this.articles.count}},components:{moment:a.a},created:function(){console.log("全部文章界面"),this._getAllLabels(),this._getAllArticles()},filters:{timeFormat:function(t){return t?"（"+a()(t).format("MMMM YYYY")+"）":""}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{xs:"{span:20,offset:2}",sm:{span:12,offset:6},md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6}}},[n("div",{staticClass:"labellist"},t._l(t.labels,function(e){return n("el-button",{key:e.id,staticClass:"labelbtn",attrs:{type:"success",plain:"",size:"small"},on:{click:function(n){t.clickLabel(e.id)}}},[t._v(t._s(e.name))])})),t._v(" "),n("div",{staticClass:"posts"},[n("ul",{staticClass:"posts-list"},t._l(t.articles,function(e){return n("li",{key:e.id},[n("router-link",{staticClass:"title",attrs:{to:{path:"/postDetail",query:{postid:e.id}}}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"createTime"},[t._v(t._s(t._f("timeFormat")(e.add_time)))]),t._v(" "),t._l(e.label,function(e){return n("el-tag",{key:e.id,staticClass:"arttag",attrs:{size:"mini",type:"warning"}},[t._v(t._s(e.name))])})],2)}))]),t._v(" "),t.totalCount>10?n("div",{staticClass:"pagefooter"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalCount,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1):t._e()])],1)},staticRenderFns:[]};var c=n("VU/8")(o,i,!1,function(t){n("ill/")},"data-v-3e61c8f3",null);e.default=c.exports}});
//# sourceMappingURL=8.82d91b5ecbe045baf347.js.map