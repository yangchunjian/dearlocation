import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as s,c as i,a as e,b as n,d as a,e as c}from"./app.616f3263.js";const d={},l=e("p",null,"\u57FA\u4E8E centOS7 \u7684 redis \u5B89\u88C5",-1),h=a("\u57FA\u4E8ESpringBoot+VUE\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u514D\u8D39\u5F00\u6E90\uFF0C\u6B22\u8FCE\u89C2\u8D4F\u3002\u5728\u7EBF\u5730\u5740\uFF1A"),p={href:"http://liawan.javapub.net.cn/",target:"_blank",rel:"noopener noreferrer"},_=a("http://liawan.javapub.net.cn/"),u=a("\u3002\u8BE6\u7EC6\u53C2\u8003\u6587\u6863\u53CA\u89C6\u9891\u540C\u6B65\u66F4\u65B0\u3002"),b=e("h2",{id:"\u524D\u8A00",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),a(" \u524D\u8A00")],-1),m=e("p",null,"\u5B89\u88C5\u73AF\u5883\uFF1A",-1),f=e("p",null,"centos7\u3001redis5\u3001",-1),k=e("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1qR4y1c78t&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),g=e("h2",{id:"\u5B89\u88C5\u6559\u7A0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5\u6559\u7A0B","aria-hidden":"true"},"#"),a(" \u5B89\u88C5\u6559\u7A0B")],-1),v=e("h3",{id:"_1-\u4E0B\u8F7D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7D","aria-hidden":"true"},"#"),a(" 1. \u4E0B\u8F7D")],-1),q=a("\u56FD\u5185\u955C\u50CF\u5730\u5740\uFF1A"),x={href:"https://mirrors.huaweicloud.com/redis/",target:"_blank",rel:"noopener noreferrer"},y=a("https://mirrors.huaweicloud.com/redis/"),V=c(`<p><img src="https://tva3.sinaimg.cn/large/007F3CC8ly1h2dguy49obj31hc0q1gzo.jpg" alt="image" loading="lazy"></p><h3 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h3><p>\u89E3\u538B\uFF1A</p><blockquote><p>tar -zxvf redis-5.0.8.tar.gz</p></blockquote><p>\u7F16\u8BD1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-5.0.8

<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> 3. \u4FEE\u6539\u914D\u7F6E</h3><p><code>\u4FEE\u6539redis.conf</code></p><p>\u5F00\u542F\u5916\u7F51\u8BBF\u95EE</p><blockquote><p>bind 0.0.0.0</p></blockquote><p>\u5173\u95EDRedis\u7684\u670D\u52A1\u4FDD\u62A4\u6A21\u5F0F</p><blockquote><p>protected-mode no</p></blockquote><p>\u4FEE\u6539\u5BC6\u7801</p><blockquote><p>requirepass javapub</p></blockquote><h3 id="_4-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8" aria-hidden="true">#</a> 4. \u542F\u52A8</h3><blockquote><p>redis-server redis.conf</p></blockquote><p>\u540E\u53F0\u542F\u52A8\uFF1A</p><blockquote><p>nohup redis-server redis.conf &amp;</p></blockquote><h3 id="_5-\u8BBF\u95EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-\u8BBF\u95EE\u6D4B\u8BD5" aria-hidden="true">#</a> 5. \u8BBF\u95EE\u6D4B\u8BD5</h3><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u5916\u7F51\u8BBF\u95EE\uFF0C\u8981\u4FDD\u8BC1\u9632\u706B\u5899\u5BF9\u5E94\u7AEF\u53E3\u5F00\u653E\u3002</p></blockquote>`,20),j=a("\u539F\u6587\uFF1A"),w={href:"https://blog.csdn.net/qq_40374604/article/details/124857707",target:"_blank",rel:"noopener noreferrer"},B=a("https://blog.csdn.net/qq_40374604/article/details/124857707");function z(E,N){const o=r("ExternalLinkIcon");return s(),i("div",null,[l,e("p",null,[h,e("a",p,[_,n(o)]),u]),b,m,f,k,g,v,e("p",null,[q,e("a",x,[y,n(o)])]),V,e("p",null,[j,e("a",w,[B,n(o)])])])}var L=t(d,[["render",z],["__file","redis-install-to-linux.html.vue"]]);export{L as default};
