"use strict";(()=>{var y={Empty:"\u3000",YinYang:"\u9670\u967D",WuXing:"\u6728\u706B\u571F\u91D1\u6C34",Gan:"\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",Zhi:"\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",Yun:["\u9577\u751F","\u6C90\u6D74","\u51A0\u5E36","\u81E8\u5B98","\u5E1D\u65FA","\u8870","\u75C5","\u6B7B","\u5893","\u7D55","\u80CE","\u990A"],LiuQin:"\u5144\u5B50\u8CA1\u5B98\u7236",LiuQin2:["\u5144\u5F1F","\u5B50\u5B6B","\u59BB\u8CA1","\u5B98\u9B3C","\u7236\u6BCD"],ShiShen:"\u6BD4\u98DF\u624D\u6BBA\u689F\u52AB\u50B7\u8CA1\u5B98\u5370",ShiShen2:["\u6BD4\u80A9","\u98DF\u795E","\u504F\u8CA1","\u4E03\u6BBA","\u504F\u5370","\u52AB\u8CA1","\u50B7\u5B98","\u6B63\u8CA1","\u6B63\u5B98","\u6B63\u5370"],TianJiang:"\u8CB4\u86C7\u6731\u5408\u52FE\u9752\u7A7A\u864E\u5E38\u7384\u9670\u540E",TianJiang2:["\u8CB4\u4EBA","\u87A3\u86C7","\u6731\u96C0","\u516D\u5408","\u52FE\u9673","\u9752\u9F8D","\u5929\u7A7A","\u767D\u864E","\u592A\u5E38","\u7384\u6B66","\u592A\u9670","\u5929\u540E"],YueJiang2:["\u795E\u540E","\u5927\u5409","\u529F\u66F9","\u592A\u885D","\u5929\u7F61","\u592A\u4E59","\u52DD\u5149","\u5C0F\u5409","\u50B3\u9001","\u5F9E\u9B41","\u6CB3\u9B41","\u767B\u660E"],Jie:["\u5927\u96EA","\u5C0F\u5BD2","\u7ACB\u6625","\u9A5A\u87C4","\u6E05\u660E","\u7ACB\u590F","\u8292\u7A2E","\u5C0F\u6691","\u7ACB\u79CB","\u767D\u9732","\u5BD2\u9732","\u7ACB\u51AC"],Qi:["\u51AC\u81F3","\u5927\u5BD2","\u96E8\u6C34","\u6625\u5206","\u7A40\u96E8","\u5C0F\u6EFF","\u590F\u81F3","\u5927\u6691","\u8655\u6691","\u79CB\u5206","\u971C\u964D","\u5C0F\u96EA"],JieQi:["\u51AC\u81F3","\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u9A5A\u87C4","\u6625\u5206","\u6E05\u660E","\u7A40\u96E8","\u7ACB\u590F","\u5C0F\u6EFF","\u8292\u7A2E","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u8655\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA"],NaYin:["\u6D77\u4E2D\u91D1","\u7210\u4E2D\u706B","\u5927\u6797\u6728","\u8DEF\u65C1\u571F","\u528D\u92D2\u91D1","\u5C71\u982D\u706B","\u6F97\u4E0B\u6C34","\u57CE\u982D\u571F","\u767D\u81D8\u91D1","\u694A\u67F3\u6728","\u4E95\u6CC9\u6C34","\u5C4B\u4E0A\u571F","\u9739\u9742\u706B","\u677E\u67CF\u6728","\u9577\u6D41\u6C34","\u7802\u4E2D\u91D1","\u5C71\u4E0B\u706B","\u5E73\u5730\u6728","\u58C1\u4E0A\u571F","\u91D1\u7B94\u91D1","\u8986\u71C8\u706B","\u5929\u6CB3\u6C34","\u5927\u9A5B\u571F","\u91F5\u91E7\u91D1","\u6851\u67D8\u6728","\u5927\u6EAA\u6C34","\u7802\u4E2D\u571F","\u5929\u4E0A\u706B","\u77F3\u69B4\u6728","\u5927\u6D77\u6C34"]},$={shengKe(t,e){return(e-t+5)%5},shiShen(t,e){let n=this.shengKe(u(t).WuXing,u(e).WuXing),s=u(t).YinYang==u(e).YinYang?0:5;return n+s},JiaZi(t,e){for(let n=e;n<60;n+=12)if(n%10==t)return n;return-1},NaYin(t,e){return Math.floor(this.JiaZi(t,e)/2)},getYM(t){let e=t.getFullYear()-3,n=T.getJie(t),s=n<2;return n=n+e%5*12,e=s?e-1:e,[e%10,e%12,n%10,n%12]},getDH(t){let e=new Date("1924-02-15T00:00:00.0").getTime(),n=Math.floor((t.getTime()-e)/(24*60*60*1e3)),s=Math.round(t.getHours()/2)+n%5*12;return n=t.getHours()===23?n+1:n,[n%10,n%12,s%10,s%12]}};function u(t){let e=[0,0,1,1,2,2,3,3,4,4][t];return{YinYang:(t+1)%2,WuXing:e,He:[5,6,7,8,9,0,1,2,3,4][t],JiGong:[2,4,5,7,5,7,8,10,11,1][t],Yun:n=>{let s=[1,6,10,9,10,9,7,0,4,3];return t%2==0?(s[t]+n)%12:(s[t]-n+12)%12},shengKe:n=>$.shengKe(e,n),shiShen:n=>$.shiShen(t,n)}}function g(t){let e=[4,2,0,0,2,1,1,2,3,3,2,4][t];return{YinYang:(t+1)%2,WuXing:e,MZJ:(t+1)%3,Xing:[3,10,5,0,4,8,6,1,2,9,7,11][t],Chong:(t+6)%12,Po:[9,4,11,6,1,8,3,10,5,0,7,2][t],Hai:[7,6,5,4,3,2,1,0,11,10,9,8][t],He:[1,0,11,10,9,8,7,6,5,4,3,2][t],SanHe:[t,(t+4)%12,(t+8)%12].sort((n,s)=>n-s),SanHui:[t%3==2?t:t%3==0?(t+11)%12:(t+10)%12,t%3==0?t:t%3==1?(t+11)%12:(t+1)%12,t%3==1?t:t%3==2?(t+2)%12:(t+1)%12],CangGan:[[9],[5,9,7],[0,2,4],[1],[4,1,9],[2,4,6],[3,5],[5,3,1],[6,8,4],[7],[4,7,3],[8,0]][t],shengKe:n=>$.shengKe(e,n)}}var J=class{constructor(e){this.time=e,[this.yGan,this.yZhi,this.mGan,this.mZhi]=$.getYM(e),[this.rGan,this.rZhi,this.sGan,this.sZhi]=$.getDH(e)}},T={getDate(t,e){let n=M[t-1920].split(","),s=`${t}-${("0"+(Math.floor(e/2)+1)).slice(-2)}-`,a=`${n[e].slice(0,2)}T${n[e].slice(2)}:00:00.000Z`;return new Date(s+a)},getJie(t){let e=t.getTime(),n=t.getFullYear();for(let s=0;s<24;s+=2)if(e<this.getDate(n,s).getTime())return s/2;return 0},getQi(t){let e=t.getTime(),n=t.getFullYear();for(let s=1;s<24;s+=2)if(e<this.getDate(n,s).getTime())return(s-1)/2;return 0},getJieQi(t){let e=t.getTime(),n=t.getFullYear();for(let s=0;s<24;s+=1)if(e<this.getDate(n,s).getTime())return s;return 0}},M=["0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0812,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0612,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0512,2012,0512,2012,0512,2112,0512,2112,0712,2312,0712,2312,0712,2312,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0815,2315,0715,2215,0615,2115","0515,2015,0315,1815,0515,2015,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0815,2315,0715,2215,0715,2115","0515,2015,0415,1815,0515,2015,0515,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0715,2215,0715,2215","0515,2015,0415,1915,0515,2015,0415,1915,0515,2015,0515,2015,0615,2215,0715,2215,0715,2215,0715,2215,0615,2115,0615,2115","0515,1915,0315,1815,0515,2015,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0815,2315,0715,2215,0615,2115","0515,2015,0315,1815,0515,2015,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0815,2315,0715,2215,0715,2115","0515,2015,0415,1815,0515,2015,0515,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0715,2215,0715,2215","0515,2015,0415,1915,0515,2015,0415,1915,0415,2015,0515,2015,0615,2215,0715,2215,0715,2215,0715,2215,0615,2115,0615,2115","0515,1915,0315,1815,0515,2015,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,2012,0512,2115,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0512,2012,0412,2015,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0815,2315,0712,2212,0712,2212","0512,2012,0412,1912,0412,2012,0412,1912,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0515,2015,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0512,2012,0412,2012,0515,2115,0515,2115,0715,2315,0715,2315,0715,2315,0812,2312,0712,2212,0712,2212","0512,2012,0412,1912,0415,2015,0415,1915,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0715,2215,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0715,2315,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0715,2215,0715,2315,0715,2215,0815,2315,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0812,2312,0712,2212,0712,2112","0512,2012,0412,1912,0412,1912,0415,1915,0415,2015,0515,2015,0615,2215,0615,2215,0715,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2315,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0515,2015,0615,2215,0615,2215,0615,2215,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0515,2015,0615,2215,0715,2215,0715,2215,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2112,0512,2112,0712,2212,0712,2312,0712,2312,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0415,1915,0515,2015,0515,2115,0615,2215,0715,2215,0715,2215,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0415,2015,0515,2115,0515,2115,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2212,0612,2112","0512,2012,0312,1812,0512,2012,0412,2012,0512,2012,0512,2112,0715,2215,0715,2315,0715,2215,0812,2312,0712,2212,0712,2112","0512,2012,0412,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0712,2212,0712,2312,0712,2212,0812,2312,0712,2212,0712,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2312,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0812,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2212,0612,2112","0512,2012,0312,1812,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2112,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2312,0712,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0512,2012,0512,2012,0612,2212,0712,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0512,2012,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0712,2212,0712,2212,0612,2112,0612,2112","0512,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0512,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,1912,0412,2012,0612,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0612,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2212,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0412,1912,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1912,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0412,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0612,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2212,0612,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1812,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0612,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0312,1812,0312,1812,0312,1912,0312,1912,0512,2112,0512,2112,0512,2112,0612,2112,0512,2012,0512,2012","0312,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,1912,0512,2112,0512,2112,0612,2112,0612,2112,0512,2012,0512,2012","0412,1812,0212,1712,0412,1912,0312,1812,0412,1912,0412,2012,0512,2112,0612,2112,0612,2112,0712,2212,0612,2112,0512,2012","0412,1912,0212,1712,0412,1912,0312,1912,0412,2012,0412,2012,0612,2112,0612,2212,0612,2212,0712,2212,0612,2112,0612,2012","0412,1912,0312,1712,0412,1912,0412,1912,0412,2012,0412,2012,0612,2212,0612,2212,0612,2212,0712,2212,0612,2112,0612,2112"];var K=class{constructor(e){let n;e instanceof Date?(this.pillars=new J(e),n={yueJiang:G.YueJiang(e),zhan:this.pillars.sZhi,rGan:this.pillars.rGan,rZhi:this.pillars.rZhi}):n=e,this.pan=new w(n),this.ke=new L(this.pan,n),this.chuan=new j(this.pan,this.ke),this.data=n}},w=class{constructor(e){this.diff=0;let{yueJiang:n,zhan:s,rGan:a,rZhi:h}=e;this.diff=(s-n+12)%12,this.zhi=this.getZhiShen(n,s),this.gan=this.zhi.map(l=>G.XunDun(a,h,l)),this.jiang=this.getTianJiang(a,s),this.xunkong=G.XunKong(a,h)}getZhiShen(e,n){let s=[...Array(12).keys()],a=(e-n+12)%12;return[...s.slice(a),...s.slice(0,a)]}getTianJiang(e,n){let s=(G.GuiRen(e,n)+this.diff)%12,a=[...Array(12).keys()],h=s<5||s==11?a:[0,...a.slice(1).reverse()];return[...h.slice(12-s),...h.slice(0,12-s)]}},L=class{constructor(e,n){let{rGan:s,rZhi:a}=n,h=u(s).JiGong;this.earth=[h,e.zhi[h],a,e.zhi[a]],this.heaven=this.earth.map(l=>e.zhi[l]),this.jiang=this.earth.map(l=>e.jiang[l]),this.rGan=s,this.rZhi=a}},j=class{constructor(e,n){this.kong=[];this.method="";this.zhi=this.getChuan(e,n),this.gan=this.zhi.map(s=>G.XunDun(n.rGan,n.rZhi,s)),this.jiang=this.zhi.map(s=>e.jiang[e.zhi.indexOf(s)]),this.qin=this.zhi.map(s=>u(n.rGan).shengKe(g(s).WuXing)),this.kong=this.zhi.map(s=>e.xunkong.includes(e.zhi.indexOf(s))?-1:0)}getChuan(e,n){let s=u(n.rGan).WuXing,a=n.heaven.map(c=>g(c).WuXing),h=n.earth.map(c=>g(c).WuXing);h[0]=s;let l=[0,1,2,3].filter(c=>$.shengKe(h[c],a[c])==2),p=[0,1,2,3].filter(c=>$.shengKe(h[c],a[c])==3),d=[0,1,2,3].filter(c=>$.shengKe(a[c],s)==2),f=[0,1,2,3].filter(c=>$.shengKe(a[c],s)==3),o=l.length>0||p.length>0,r=d.length>0||f.length>0;return e.diff==0?this.FuYin(n):e.diff==6?this.FanYin(n,e):u(n.rGan).JiGong==n.rZhi&&!o?this.BaZhuan(n):new Set(n.heaven).size==3&&!o&&!r?this.BieZe(n,e):new Set(n.heaven).size==4&&!o&&!r?this.AngXing(n,e):o?this.ZeiKe(n,e):r?this.YaoKe(n,e):[]}ZeiKe(e,n){let s=e.heaven.map(r=>g(r).WuXing),a=e.earth.map(r=>g(r).WuXing);a[0]=u(e.rGan).WuXing;let h=[0,1,2,3].filter(r=>$.shengKe(a[r],s[r])==2).map(r=>e.heaven[r]),l=[0,1,2,3].filter(r=>$.shengKe(a[r],s[r])==3).map(r=>e.heaven[r]),p,d=h.length>0?h:l;if(new Set(d).size==1)this.method=h.length>0?"\u91CD\u5BE9":"\u5143\u9996",p=d[0];else if(d.length>1){this.method="\u77E5\u4E00";let r=u(e.rGan).YinYang,c=d.filter(Z=>g(Z).YinYang==r),b=d.filter(Z=>g(Z).YinYang!=r);if(new Set(c).size==1)p=c[0];else{this.method="\u6D89\u5BB3";let Z=c.length>0?c:b,D=Z.map(Y=>n.zhi.indexOf(Y)).map(Y=>g(Y).MZJ);p=Z[D.indexOf(Math.min(...D))]}}else return[];let f=n.zhi[p],o=n.zhi[f];return[p,f,o]}YaoKe(e,n){this.method="\u9059\u524B";let s=e.heaven.map(r=>g(r).WuXing),a=u(e.rGan).WuXing,h=[0,1,2,3].filter(r=>$.shengKe(s[r],a)==2).map(r=>e.heaven[r]),l=[0,1,2,3].filter(r=>$.shengKe(s[r],a)==3).map(r=>e.heaven[r]),p,d=h.length>0?h:l;if(new Set(d).size==1)p=d[0];else if(d.length>1){let r=u(e.rGan).YinYang,c=d.filter(b=>g(b).YinYang==r);if(new Set(c).size==1)p=c[0];else return[]}else return[];let f=n.zhi[p],o=n.zhi[f];return[p,f,o]}AngXing(e,n){switch(this.method="\u6602\u661F",u(e.rGan).YinYang){case 1:return[n.zhi[9],e.heaven[2],e.heaven[0]];case 0:return[n.zhi.indexOf(9),e.heaven[0],e.heaven[2]];default:return[]}}BieZe(e,n){switch(this.method="\u5225\u8CAC",u(e.rGan).YinYang){case 1:let s=u(u(e.rGan).He).JiGong;return[n.zhi[s],e.heaven[0],e.heaven[0]];case 0:let a=g(e.rZhi).SanHe,h=(a.indexOf(e.rZhi)+1)%3;return[a[h],e.heaven[0],e.heaven[0]];default:return[]}}BaZhuan(e){switch(this.method="\u516B\u5C08",u(e.rGan).YinYang){case 1:return[(e.heaven[0]+2)%12,e.heaven[0],e.heaven[0]];case 0:return[(e.heaven[3]+10)%12,e.heaven[0],e.heaven[0]];default:return[]}}FuYin(e){if(this.method="\u4F0F\u541F",u(e.rGan).YinYang==1||e.rGan==1||e.rGan==9){let n=e.heaven[0],s=g(n).Xing,a=s==n?e.heaven[2]:s,h=g(a).Xing,l=h==a||h==n?g(a).Chong:h;return[n,a,l]}else{let n=e.heaven[2],s=g(n).Xing,a=s==n?e.heaven[0]:s,h=g(a).Xing,l=h==a||h==n?g(a).Chong:h;return[n,a,l]}}FanYin(e,n){let s=this.ZeiKe(e,n);return this.method="\u8FD4\u541F",s.length?s:[G.YiMa(e.rZhi),e.heaven[2],e.heaven[0]]}},G={YueLing:t=>T.getJie(t),YueJiang:t=>(13-T.getQi(t))%12,XunDun:(t,e,n)=>{let s=(e-t+12)%12,a=(n-s+12)%12;return a>9?-1:a},XunKong:(t,e)=>{let s=((e-t+12)%12+10)%12;return[s,s+1]},GuiRen:(t,e,n=!0)=>{let s=e>=3&&e<9;return n?s?[1,0,11,11,1,0,1,6,5,5][t]:[7,8,9,9,7,8,7,2,3,3][t]:s?[7,8,9,11,1,0,1,2,3,5][t]:[1,0,11,9,7,8,7,6,5,3][t]},YiMa:t=>[2,11,8,5,2,11,8,5,2,11,8,5][t]};var m={dZ:y.Zhi,tG:y.Gan,lQ:y.LiuQin,tJ:y.TianJiang,tJ2:y.TianJiang2};function X(){let t=document.getElementById("date-input").value,e=document.getElementById("time-input").value,n=new K(new Date(t+e+":00"));document.getElementById("jiang-input").value=n.data.yueJiang;let s=document.getElementById("pillars").children,a=[`${m.tG[n.pillars.sGan]}${m.dZ[n.pillars.sZhi]}\u6642`,`${m.tG[n.pillars.rGan]}${m.dZ[n.pillars.rZhi]}\u65E5`,`${m.tG[n.pillars.mGan]}${m.dZ[n.pillars.mZhi]}\u6708`,`${m.tG[n.pillars.yGan]}${m.dZ[n.pillars.yZhi]}\u5E74`];for(let i=0;i<s.length;i++)s[i].innerHTML=`<span class="dt">${a[i][0]}</span><span class="dt">${a[i][1]}</span><span class="dt">${a[i][2]}</span>`;let h=document.getElementById("c3").children,l=n.chuan.zhi.map(i=>m.dZ[i]),p=n.chuan.gan.map(i=>i<0?"\u3000":m.tG[i]),d=n.chuan.jiang.map(i=>m.tJ[i]),f=n.chuan.qin.map(i=>m.lQ[i]),o=n.chuan.kong.map(i=>i==-1?"\u233E":"\u3000");for(let i=0;i<3;i++)h[i].innerHTML=`<span class="q">${f[i]}</span><span><span class="s">${p[i]}</span><span class="z">${l[i]}</span></span><span><span class="j">${d[i]}</span><span class="s">${o[i]}</span></span>`;let r=document.getElementById("k4").children,c=n.ke.heaven.map(i=>m.dZ[i]),b=n.ke.earth.map(i=>m.dZ[i]),Z=n.ke.jiang.map(i=>m.tJ[i]);for(let i=3;i>=0;i--)r[3-i].innerHTML=`<span class="j">${Z[i]}</span><span class="n">${c[i]}</span><span class="n">${i?b[i]:m.tG[n.ke.rGan]}</span>`;let x=document.getElementById("td").children,D=n.pan.zhi.map(i=>m.dZ[i]),Y=n.pan.gan.map(i=>i<0?"\u3000":m.tG[i]),S=n.pan.jiang.map(i=>m.tJ2[i]);for(let i=0;i<12;i++)x[i].innerHTML=`<span class="z">${D[i]}</span><span class="g">${Y[i]}</span><span class="j">${S[i]}</span>`,n.pan.xunkong.includes(i)?x[i].classList.add("kong"):x[i].classList.remove("kong");let z=new Date,v=("0"+(z.getMonth()+1)).slice(-2),H=("0"+z.getDate()).slice(-2);document.getElementById("note-box").value=`

${z.getFullYear()}/${v}/${H}
${("0"+z.getHours()).slice(-2)}:${("0"+z.getMinutes()).slice(-2)}
${n.chuan.method}\u8AB2`}function A(){let t=new Date,e=document.getElementById("date-input"),n=document.getElementById("time-input"),s=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2),h=t.getHours()+t.getHours()%2;e.value=t.getFullYear()+"-"+s+"-"+a,n.value="T"+("0"+h).slice(-2),e.addEventListener("change",()=>X()),n.addEventListener("change",()=>X());let l=document.getElementById("pillars");for(let o=0;o<4;o++)l.innerHTML+='<div class="pillar"></div>';let p=document.getElementById("c3");for(let o=0;o<3;o++)p.innerHTML+='<div class="chuan"></div>';let d=document.getElementById("k4");for(let o=0;o<4;o++)d.innerHTML+='<div class="ke"></div>';let f=document.getElementById("td");for(let o=0;o<12;o++)f.innerHTML+=`<div id="cell-${o}" class="cell"></div>`;f.innerHTML+='<textarea id="note-box" maxlength="120"></textarea>',X()}A();})();
