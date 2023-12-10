"use strict";(()=>{var Z={Empty:"\u3000",YinYang:"\u9670\u967D",WuXing:"\u6728\u706B\u571F\u91D1\u6C34",Gan:"\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",Zhi:"\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",Yun:["\u9577\u751F","\u6C90\u6D74","\u51A0\u5E36","\u81E8\u5B98","\u5E1D\u65FA","\u8870","\u75C5","\u6B7B","\u5893","\u7D55","\u80CE","\u990A"],LiuQin:"\u5144\u5B50\u8CA1\u5B98\u7236",LiuQin2:["\u5144\u5F1F","\u5B50\u5B6B","\u59BB\u8CA1","\u5B98\u9B3C","\u7236\u6BCD"],ShiShen:"\u6BD4\u98DF\u624D\u6BBA\u689F\u52AB\u50B7\u8CA1\u5B98\u5370",ShiShen2:["\u6BD4\u80A9","\u98DF\u795E","\u504F\u8CA1","\u4E03\u6BBA","\u504F\u5370","\u52AB\u8CA1","\u50B7\u5B98","\u6B63\u8CA1","\u6B63\u5B98","\u6B63\u5370"],TianJiang:"\u8CB4\u86C7\u6731\u5408\u52FE\u9752\u7A7A\u864E\u5E38\u7384\u9670\u540E",TianJiang2:["\u8CB4\u4EBA","\u87A3\u86C7","\u6731\u96C0","\u516D\u5408","\u52FE\u9673","\u9752\u9F8D","\u5929\u7A7A","\u767D\u864E","\u592A\u5E38","\u7384\u6B66","\u592A\u9670","\u5929\u540E"],YueJiang2:["\u795E\u540E","\u5927\u5409","\u529F\u66F9","\u592A\u885D","\u5929\u7F61","\u592A\u4E59","\u52DD\u5149","\u5C0F\u5409","\u50B3\u9001","\u5F9E\u9B41","\u6CB3\u9B41","\u767B\u660E"],Jie:["\u5927\u96EA","\u5C0F\u5BD2","\u7ACB\u6625","\u9A5A\u87C4","\u6E05\u660E","\u7ACB\u590F","\u8292\u7A2E","\u5C0F\u6691","\u7ACB\u79CB","\u767D\u9732","\u5BD2\u9732","\u7ACB\u51AC"],Qi:["\u51AC\u81F3","\u5927\u5BD2","\u96E8\u6C34","\u6625\u5206","\u7A40\u96E8","\u5C0F\u6EFF","\u590F\u81F3","\u5927\u6691","\u8655\u6691","\u79CB\u5206","\u971C\u964D","\u5C0F\u96EA"],JieQi:["\u51AC\u81F3","\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u9A5A\u87C4","\u6625\u5206","\u6E05\u660E","\u7A40\u96E8","\u7ACB\u590F","\u5C0F\u6EFF","\u8292\u7A2E","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u8655\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA"],NaYin:["\u6D77\u4E2D\u91D1","\u7210\u4E2D\u706B","\u5927\u6797\u6728","\u8DEF\u65C1\u571F","\u528D\u92D2\u91D1","\u5C71\u982D\u706B","\u6F97\u4E0B\u6C34","\u57CE\u982D\u571F","\u767D\u81D8\u91D1","\u694A\u67F3\u6728","\u4E95\u6CC9\u6C34","\u5C4B\u4E0A\u571F","\u9739\u9742\u706B","\u677E\u67CF\u6728","\u9577\u6D41\u6C34","\u7802\u4E2D\u91D1","\u5C71\u4E0B\u706B","\u5E73\u5730\u6728","\u58C1\u4E0A\u571F","\u91D1\u7B94\u91D1","\u8986\u71C8\u706B","\u5929\u6CB3\u6C34","\u5927\u9A5B\u571F","\u91F5\u91E7\u91D1","\u6851\u67D8\u6728","\u5927\u6EAA\u6C34","\u7802\u4E2D\u571F","\u5929\u4E0A\u706B","\u77F3\u69B4\u6728","\u5927\u6D77\u6C34"]},d={shengKe(t,e){return(e-t+5)%5},shiShen(t,e){let n=this.shengKe(u(t).WuXing,u(e).WuXing),a=u(t).YinYang==u(e).YinYang?0:5;return n+a},JiaZi(t,e){for(let n=e;n<60;n+=12)if(n%10==t)return n;return-1},NaYin(t,e){return Math.floor(this.JiaZi(t,e)/2)},getYM(t){let e=t.getFullYear()-3,n=v.getJie(t),a=n<2;return n=n+e%5*12,e=a?e-1:e,[e%10,e%12,n%10,n%12]},getDH(t){let e=new Date("1924-02-15T00:00:00.0").getTime(),n=Math.floor((t.getTime()-e)/(24*60*60*1e3)),a=Math.round(t.getHours()/2)+n%5*12;return n=t.getHours()===23?n+1:n,[n%10,n%12,a%10,a%12]}};function u(t){let e=[0,0,1,1,2,2,3,3,4,4][t];return{YinYang:(t+1)%2,WuXing:e,He:[5,6,7,8,9,0,1,2,3,4][t],JiGong:[2,4,5,7,5,7,8,10,11,1][t],Yun:n=>{let a=[1,6,10,9,10,9,7,0,4,3];return t%2==0?(a[t]+n)%12:(a[t]-n+12)%12},shengKe:n=>d.shengKe(e,n),shiShen:n=>d.shiShen(t,n)}}function g(t){let e=[4,2,0,0,2,1,1,2,3,3,2,4][t];return{YinYang:(t+1)%2,WuXing:e,MZJ:(t+1)%3,Xing:[3,10,5,0,4,8,6,1,2,9,7,11][t],Chong:(t+6)%12,Po:[9,4,11,6,1,8,3,10,5,0,7,2][t],Hai:[7,6,5,4,3,2,1,0,11,10,9,8][t],He:[1,0,11,10,9,8,7,6,5,4,3,2][t],SanHe:[t,(t+4)%12,(t+8)%12].sort((n,a)=>n-a),SanHui:[t%3==2?t:t%3==0?(t+11)%12:(t+10)%12,t%3==0?t:t%3==1?(t+11)%12:(t+1)%12,t%3==1?t:t%3==2?(t+2)%12:(t+1)%12],CangGan:[[9],[5,9,7],[0,2,4],[1],[4,1,9],[2,4,6],[3,5],[5,3,1],[6,8,4],[7],[4,7,3],[8,0]][t],shengKe:n=>d.shengKe(e,n)}}var Y=class{constructor(e){this.time=e,[this.yGan,this.yZhi,this.mGan,this.mZhi]=d.getYM(e),[this.rGan,this.rZhi,this.sGan,this.sZhi]=d.getDH(e)}},v={getDate(t,e){let n=S[t-1920].split(","),a=`${t}-${("0"+(Math.floor(e/2)+1)).slice(-2)}-`,i=`${n[e].slice(0,2)}T${n[e].slice(2)}:00:00.000Z`;return new Date(a+i)},getJie(t){let e=t.getTime(),n=t.getFullYear();for(let a=0;a<24;a+=2)if(e<this.getDate(n,a).getTime())return a/2;return 0},getQi(t){let e=t.getTime(),n=t.getFullYear();for(let a=1;a<24;a+=2)if(e<this.getDate(n,a).getTime())return(a-1)/2;return 0},getJieQi(t){let e=t.getTime(),n=t.getFullYear();for(let a=0;a<24;a+=1)if(e<this.getDate(n,a).getTime())return a;return 0}},S=["0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0812,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0512,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0815,2315,0715,2215,0615,2115","0515,2015,0315,1815,0515,2015,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0815,2315,0715,2215,0715,2115","0515,2015,0415,1815,0515,2015,0515,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0715,2215,0715,2215","0515,2015,0415,1915,0515,2015,0415,1915,0515,2015,0515,2015,0615,2215,0715,2215,0715,2215,0715,2215,0615,2115,0615,2115","0515,1915,0315,1815,0515,2015,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0815,2315,0715,2215,0615,2115","0515,2015,0315,1815,0515,2015,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0815,2315,0715,2215,0715,2115","0515,2015,0415,1815,0515,2015,0515,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0715,2215,0715,2215","0515,2015,0415,1915,0515,2015,0415,1915,0415,2015,0515,2015,0615,2215,0715,2215,0715,2215,0715,2215,0615,2115,0615,2115","0515,1915,0315,1815,0515,2015,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,2012,0512,2115,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0512,2012,0412,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0712,2212,0712,2212","0512,2012,0412,1912,0412,2012,0412,1912,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0515,2015,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0512,2012,0412,2012,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0415,2015,0415,1915,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0715,2215,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0715,2315,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0715,2215,0715,2315,0715,2215,0815,2315,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0812,2312,0712,2212,0712,2112","0512,2012,0412,1912,0412,1912,0415,1915,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0515,2015,0615,2215,0615,2215,0615,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0515,2015,0615,2215,0715,2215,0715,2215,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2012,0512,2112,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112"];var z=class{constructor(e){let n;e instanceof Date?(this.pillars=new Y(e),n={yueJiang:J.YueJiang(e),zhan:this.pillars.sZhi,rGan:this.pillars.rGan,rZhi:this.pillars.rZhi}):n=e,this.pan=new x(n),this.ke=new T(this.pan,n),this.chuan=new D(this.pan,this.ke),this.data=n}},x=class{constructor(e){this.diff=0;let{yueJiang:n,zhan:a,rGan:i,rZhi:s}=e;this.diff=(a-n+12)%12,this.zhi=this.getZhiShen(n,a),this.gan=this.zhi.map(l=>J.XunDun(i,s,l)),this.jiang=this.getTianJiang(i,a)}getZhiShen(e,n){let a=[...Array(12).keys()],i=(e-n+12)%12;return[...a.slice(i),...a.slice(0,i)]}getTianJiang(e,n){let a=(J.GuiRen(e,n)+this.diff)%12,i=[...Array(12).keys()],s=a<5||a==11?i:[0,...i.slice(1).reverse()];return[...s.slice(12-a),...s.slice(0,12-a)]}},T=class{constructor(e,n){let{rGan:a,rZhi:i}=n,s=u(a).JiGong;this.earth=[s,e.zhi[s],i,e.zhi[i]],this.heaven=this.earth.map(l=>e.zhi[l]),this.jiang=this.earth.map(l=>e.jiang[l]),this.rGan=a,this.rZhi=i}},D=class{constructor(e,n){this.method="";this.zhi=this.getChuan(e,n),this.gan=this.zhi.map(a=>J.XunDun(n.rGan,n.rZhi,a)),this.jiang=this.zhi.map(a=>e.jiang[e.zhi.indexOf(a)]),this.qin=this.zhi.map(a=>u(n.rGan).shengKe(g(a).WuXing))}getChuan(e,n){let a=u(n.rGan).WuXing,i=n.heaven.map(o=>g(o).WuXing),s=n.earth.map(o=>g(o).WuXing);s[0]=a;let l=[0,1,2,3].filter(o=>d.shengKe(s[o],i[o])==2),h=[0,1,2,3].filter(o=>d.shengKe(s[o],i[o])==3),p=[0,1,2,3].filter(o=>d.shengKe(i[o],a)==2),f=[0,1,2,3].filter(o=>d.shengKe(i[o],a)==3),$=l.length>0||h.length>0,r=p.length>0||f.length>0;return e.diff==0?this.FuYin(n):e.diff==6?this.FanYin(n,e):u(n.rGan).JiGong==n.rZhi&&!$?this.BaZhuan(n):new Set(n.heaven).size==3&&!$&&!r?this.BieZe(n,e):new Set(n.heaven).size==4&&!$&&!r?this.AngXing(n,e):$?this.ZeiKe(n,e):r?this.YaoKe(n,e):[]}ZeiKe(e,n){let a=e.heaven.map(r=>g(r).WuXing),i=e.earth.map(r=>g(r).WuXing);i[0]=u(e.rGan).WuXing;let s=[0,1,2,3].filter(r=>d.shengKe(i[r],a[r])==2).map(r=>e.heaven[r]),l=[0,1,2,3].filter(r=>d.shengKe(i[r],a[r])==3).map(r=>e.heaven[r]),h,p=s.length>0?s:l;if(new Set(p).size==1)this.method=s.length>0?"\u91CD\u5BE9":"\u5143\u9996",h=p[0];else if(p.length>1){this.method="\u77E5\u4E00";let r=u(e.rGan).YinYang,o=p.filter(G=>g(G).YinYang==r),y=p.filter(G=>g(G).YinYang!=r);if(new Set(o).size==1)h=o[0];else{this.method="\u6D89\u5BB3";let G=o.length>0?o:y,K=G.map(b=>n.zhi.indexOf(b)).map(b=>g(b).MZJ);h=G[K.indexOf(Math.min(...K))]}}else return[];let f=n.zhi[h],$=n.zhi[f];return[h,f,$]}YaoKe(e,n){this.method="\u9059\u524B";let a=e.heaven.map(r=>g(r).WuXing),i=u(e.rGan).WuXing,s=[0,1,2,3].filter(r=>d.shengKe(a[r],i)==2).map(r=>e.heaven[r]),l=[0,1,2,3].filter(r=>d.shengKe(a[r],i)==3).map(r=>e.heaven[r]),h,p=s.length>0?s:l;if(new Set(p).size==1)h=p[0];else if(p.length>1){let r=u(e.rGan).YinYang,o=p.filter(y=>g(y).YinYang==r);if(new Set(o).size==1)h=o[0];else return[]}else return[];let f=n.zhi[h],$=n.zhi[f];return[h,f,$]}AngXing(e,n){switch(this.method="\u6602\u661F",u(e.rGan).YinYang){case 1:return[n.zhi[9],e.heaven[2],e.heaven[0]];case 0:return[n.zhi.indexOf(9),e.heaven[0],e.heaven[2]];default:return[]}}BieZe(e,n){switch(this.method="\u5225\u8CAC",u(e.rGan).YinYang){case 1:let a=u(u(e.rGan).He).JiGong;return[n.zhi[a],e.heaven[0],e.heaven[0]];case 0:let i=g(e.rZhi).SanHe,s=(i.indexOf(e.rZhi)+1)%3;return[i[s],e.heaven[0],e.heaven[0]];default:return[]}}BaZhuan(e){switch(this.method="\u516B\u5C08",u(e.rGan).YinYang){case 1:return[(e.heaven[0]+2)%12,e.heaven[0],e.heaven[0]];case 0:return[(e.heaven[3]+10)%12,e.heaven[0],e.heaven[0]];default:return[]}}FuYin(e){if(this.method="\u4F0F\u541F",u(e.rGan).YinYang==1||e.rGan==1||e.rGan==9){let n=e.heaven[0],a=g(n).Xing,i=a==n?e.heaven[2]:a,s=g(i).Xing,l=s==i||s==n?g(i).Chong:s;return[n,i,l]}else{let n=e.heaven[2],a=g(n).Xing,i=a==n?e.heaven[0]:a,s=g(i).Xing,l=s==i||s==n?g(i).Chong:s;return[n,i,l]}}FanYin(e,n){let a=this.ZeiKe(e,n);return this.method="\u8FD4\u541F",a.length?a:[J.YiMa(e.rZhi),e.heaven[2],e.heaven[0]]}},J={YueLing:t=>v.getJie(t),YueJiang:t=>(13-v.getQi(t))%12,XunDun:(t,e,n)=>{let a=(e-t+12)%12,i=(n-a+12)%12;return i>9?-1:i},XunKong:(t,e)=>{let a=((e-t+12)%12+10)%12;return[a,a+1]},GuiRen:(t,e)=>e>=3&&e<9?[1,0,11,11,1,0,1,6,5,5][t]:[7,8,9,9,7,8,7,2,3,3][t],YiMa:t=>[2,11,8,5,2,11,8,5,2,11,8,5][t]};var m={dZ:Z.Zhi,tG:Z.Gan,lQ:Z.LiuQin,tJ:Z.TianJiang,tJ2:Z.TianJiang2};function w(){let t=document.getElementById("date-input").value,e=document.getElementById("time-input").value,n=new z(new Date(t+e+":00"));document.getElementById("jiang-input").value=n.data.yueJiang;let a=document.getElementById("pillars").children,i=[`${m.tG[n.pillars.sGan]}${m.dZ[n.pillars.sZhi]}\u6642`,`${m.tG[n.pillars.rGan]}${m.dZ[n.pillars.rZhi]}\u65E5`,`${m.tG[n.pillars.mGan]}${m.dZ[n.pillars.mZhi]}\u6708`,`${m.tG[n.pillars.yGan]}${m.dZ[n.pillars.yZhi]}\u5E74`];for(var s=0;s<a.length;s++)a[s].innerHTML=`<span class="n">${i[s][0]}</span><span class="n">${i[s][1]}</span><span class="n">${i[s][2]}</span>`;let l=document.getElementById("c3").children,h=n.chuan.zhi.map(c=>m.dZ[c]),p=n.chuan.gan.map(c=>c<0?"\u{10A52}":m.tG[c]),f=n.chuan.jiang.map(c=>m.tJ[c]),$=n.chuan.qin.map(c=>m.lQ[c]);for(var s=0;s<3;s++)l[s].innerHTML=`<span class="g">${$[s]}</span><span><span class="q">${p[s]}</span><span class="z">${h[s]}</span></span><span class="j">${f[s]}</span>`;let r=document.getElementById("k4").children,o=n.ke.heaven.map(c=>m.dZ[c]),y=n.ke.earth.map(c=>m.dZ[c]),G=n.ke.jiang.map(c=>m.tJ[c]);for(var s=3;s>=0;s--)r[3-s].innerHTML=`<span class="j">${G[s]}</span><span class="n">${o[s]}</span><span class="n">${s?y[s]:m.tG[n.ke.rGan]}</span>`;let j=document.getElementById("td").children,K=n.pan.zhi.map(c=>m.dZ[c]),b=n.pan.gan.map(c=>c<0?"\u3000":m.tG[c]),L=n.pan.jiang.map(c=>m.tJ2[c]);for(var s=0;s<12;s++)j[s].innerHTML=`<span class="z">${K[s]}</span><span class="g">${b[s]}</span><span class="j">${L[s]}</span>`;document.getElementById("note-box").value+=`${n.chuan.method}`}function X(){let t=new Date,e=document.getElementById("date-input"),n=document.getElementById("time-input"),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=t.getHours()+t.getHours()%2;e.value=t.getFullYear()+"-"+a+"-"+i,n.value="T"+("0"+s).slice(-2),e.addEventListener("change",r=>w()),n.addEventListener("change",r=>w());let l=document.getElementById("pillars");for(var h=0;h<4;h++)l.innerHTML+='<div class="pillar"></div>';let p=document.getElementById("c3");for(var h=0;h<3;h++)p.innerHTML+='<div class="chuan"></div>';let f=document.getElementById("k4");for(var h=0;h<4;h++)f.innerHTML+='<div class="ke"></div>';let $=document.getElementById("td");for(var h=0;h<12;h++)$.innerHTML+=`<div id="cell-${h}" class="cell"></div>`;$.innerHTML+=`<textarea id="note-box" maxlength="120">



${t.getFullYear()}/${a}/${i}
${("0"+t.getHours()).slice(-2)}:${("0"+t.getMinutes()).slice(-2)}
</textarea>`,w()}X();})();
