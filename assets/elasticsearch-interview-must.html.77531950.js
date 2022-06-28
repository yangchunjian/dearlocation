import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as c,c as d,a as e,b as s,w as l,e as r,d as a}from"./app.616f3263.js";const h={},p=r('<p>Elastic Search</p><p>10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684ElasticSearch\u9762\u8BD5\u9898</p><p>\u4EE5\u4E0B\u662F ElasticSearch \u9762\u8BD5\u9898\uFF0C\u76F8\u4FE1\u5927\u5BB6\u90FD\u4F1A\u6709\u79CD\u53CA\u773C\u719F\u53C8\u964C\u751F\u7684\u611F\u89C9\u3001\u770B\u8FC7\u53EF\u80FD\u5728\u77ED\u6682\u7684\u9762\u8BD5\u540E\u53C8\u9A6C\u4E0A\u5FD8\u8BB0\u4E86\u3002<strong>DearLocation</strong>\u5728\u8FD9\u91CC\u6574\u7406\u8FD9\u4E9B\u5BB9\u6613\u5FD8\u8BB0\u7684\u91CD\u70B9\u77E5\u8BC6\u53CA<strong>\u89E3\u7B54</strong>\uFF0C<code>\u5EFA\u8BAE\u6536\u85CF\uFF0C\u7ECF\u5E38\u6E29\u4E60\u67E5\u9605</code>\u3002</p><p>\u8BC4\u8BBA\u533A\u89C1</p><p><code>\u5173\u4E8Ees\u7684\u9762\u8BD5\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u540D\u8BCD\u7528\u5B98\u65B9\u8BED\u8A00\u63CF\u8FF0\u4F1A\u66F4\u51C6\u786E\u3002</code></p><p>@[toc]</p><h2 id="_1-\u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8-es-\u7684\u96C6\u7FA4\u67B6\u6784-\u7D22\u5F15\u6570\u636E\u5927\u5C0F-\u5206\u7247\u6709\u591A\u5C11-\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5-\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8-es-\u7684\u96C6\u7FA4\u67B6\u6784-\u7D22\u5F15\u6570\u636E\u5927\u5C0F-\u5206\u7247\u6709\u591A\u5C11-\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5-\u3002" aria-hidden="true">#</a> 1. \u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8 es \u7684\u96C6\u7FA4\u67B6\u6784\uFF0C\u7D22\u5F15\u6570\u636E\u5927\u5C0F\uFF0C\u5206\u7247\u6709\u591A\u5C11\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5 \u3002</h2><p>\u8282\u70B9\u6570\u3001\u5206\u7247\u6570\u3001\u526F\u672C\u6570\uFF0C\u5C3D\u91CF\u6839\u636E\u81EA\u5DF1\u516C\u53F8\u4F7F\u7528\u60C5\u51B5\u56DE\u7B54\uFF0C\u5F53\u7136\u9002\u5F53\u653E\u5927\u4E5F\u53EF\u884C\u3002</p><p>\u8C03\u4F18\u624B\u6BB5\u662F\u73B0\u5728\u5F88\u5E38\u89C1\u7684\u9762\u8BD5\u9898\uFF0C\u4E0B\u9762\u8FD9\u51E0\u79CD\u8C03\u4F18\u624B\u6BB5\u4E00\u5B9A\u8981\u4E86\u89E3\u61C2\u3002\u5F53\u7136\uFF0C\u4E0B\u9762\u7684\u6BCF\u4E00\u6761\u90FD\u53EF\u4EE5\u5F53\u505A\u8C03\u4F18\u7684\u4E00\u90E8\u5206\u3002</p><p><strong>\u8BBE\u8BA1\u8C03\u4F18</strong></p>',10),u=a("\u53C2\u8003\uFF1A "),m={href:"https://www.cnblogs.com/sanduzxcvbnm/p/12084012.html",target:"_blank",rel:"noopener noreferrer"},b=a("https://www.cnblogs.com/sanduzxcvbnm/p/12084012.html"),_=e("p",null,[a("a. \u6839\u636E\u4E1A\u52A1\u589E\u91CF\u9700\u6C42\uFF0C\u91C7\u53D6\u57FA\u4E8E\u65E5\u671F\u6A21\u677F\u521B\u5EFA\u7D22\u5F15\uFF0C\u901A\u8FC7 "),e("code",null,"rollover API"),a(" \u6EDA\u52A8\u7D22\u5F15\uFF1B(rollover API\u6211\u4F1A\u5355\u72EC\u5199\u4E00\u4E2A\u4EE3\u7801\u6848\u4F8B\u505A\u8BB2\u89E3\uFF0C\u516C\u4F17\u53F7\uFF1ADearLocation) b. \u4F7F\u7528\u522B\u540D\u8FDB\u884C\u7D22\u5F15\u7BA1\u7406\uFF1B\uFF08es\u7684\u7D22\u5F15\u540D\u4E0D\u80FD\u6539\u53D8\uFF0C\u63D0\u4F9B\u7684\u522B\u540D\u673A\u5236\u4F7F\u7528\u975E\u5E38\u5E7F\u6CDB\u3002\uFF09 c. \u6BCF\u5929\u51CC\u6668\u5B9A\u65F6\u5BF9\u7D22\u5F15\u505Aforce_merge\u64CD\u4F5C\uFF0C\u4EE5\u91CA\u653E\u7A7A\u95F4\uFF1B d. \u91C7\u53D6\u51B7\u70ED\u5206\u79BB\u673A\u5236\uFF0C\u70ED\u6570\u636E\u5B58\u50A8\u5230SSD\uFF0C\u63D0\u9AD8\u68C0\u7D22\u6548\u7387\uFF1B\u51B7\u6570\u636E\u5B9A\u671F\u8FDB\u884Cshrink\u64CD\u4F5C\uFF0C\u4EE5\u7F29\u51CF\u5B58\u50A8\uFF1B e. \u91C7\u53D6curator\u8FDB\u884C\u7D22\u5F15\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406\uFF1B f. \u4EC5\u9488\u5BF9\u9700\u8981\u5206\u8BCD\u7684\u5B57\u6BB5\uFF0C\u5408\u7406\u7684\u8BBE\u7F6E\u5206\u8BCD\u5668\uFF1B g. Mapping\u9636\u6BB5\u5145\u5206\u7ED3\u5408\u5404\u4E2A\u5B57\u6BB5\u7684\u5C5E\u6027\uFF0C\u662F\u5426\u9700\u8981\u68C0\u7D22\u3001\u662F\u5426\u9700\u8981\u5B58\u50A8\u7B49\u3002")],-1),g=a("\u8FDB100+\u539F\u521B\u6587\u7AE0\uFF1A"),v={href:"https://gitee.com/yangchunjian/DearLocation",target:"_blank",rel:"noopener noreferrer"},f=a("https://gitee.com/yangchunjian/DearLocation"),k=r('<p><strong>\u5199\u5165\u8C03\u4F18</strong></p><ol><li>\u5199\u5165\u524D\u526F\u672C\u6570\u8BBE\u7F6E\u4E3A0\uFF1B</li><li>\u5199\u5165\u524D\u5173\u95EDrefresh_interval\u8BBE\u7F6E\u4E3A-1\uFF0C\u7981\u7528\u5237\u65B0\u673A\u5236\uFF1B</li><li>\u5199\u5165\u8FC7\u7A0B\u4E2D\uFF1A\u91C7\u53D6bulk\u6279\u91CF\u5199\u5165\uFF1B</li><li>\u5199\u5165\u540E\u6062\u590D\u526F\u672C\u6570\u548C\u5237\u65B0\u95F4\u9694\uFF1B</li><li>\u5C3D\u91CF\u4F7F\u7528\u81EA\u52A8\u751F\u6210\u7684id\u3002</li></ol><p><strong>\u67E5\u8BE2\u8C03\u4F18</strong></p><ol><li>\u7981\u7528wildcard\uFF1B\uFF08\u901A\u914D\u7B26\u6A21\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E%like%\uFF09</li><li>\u7981\u7528\u6279\u91CFterms\uFF08\u6210\u767E\u4E0A\u5343\u7684\u573A\u666F\uFF09\uFF1B</li><li>\u5145\u5206\u5229\u7528\u5012\u6392\u7D22\u5F15\u673A\u5236\uFF0C\u80FDkeyword\u7C7B\u578B\u5C3D\u91CFkeyword\uFF1B</li><li>\u6570\u636E\u91CF\u5927\u65F6\u5019\uFF0C\u53EF\u4EE5\u5148\u57FA\u4E8E\u65F6\u95F4\u6572\u5B9A\u7D22\u5F15\u518D\u68C0\u7D22\uFF1B</li><li>\u8BBE\u7F6E\u5408\u7406\u7684\u8DEF\u7531\u673A\u5236\u3002</li></ol><h2 id="_2-elasticsearch-\u7684\u5012\u6392\u7D22\u5F15\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-elasticsearch-\u7684\u5012\u6392\u7D22\u5F15\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2. elasticsearch \u7684\u5012\u6392\u7D22\u5F15\u662F\u4EC0\u4E48</h2><p>\u5012\u6392\u7D22\u5F15\u4E5F\u5C31\u662F\u5355\u8BCD\u5230\u6587\u6863\u7684\u6620\u5C04\uFF0C\u5F53\u7136\u4E0D\u53EA\u662F\u5B58\u91CC\u6587\u6863id\u8FD9\u4E48\u7B80\u5355\u3002\u8FD8\u5305\u62EC\uFF1A\u8BCD\u9891\uFF08TF\uFF0CTerm Frequency\uFF09\u3001\u504F\u79FB\u91CF\uFF08offset\uFF09\u3001\u4F4D\u7F6E\uFF08Posting\uFF09\u3002</p><h2 id="_3-elasticsearch-\u662F\u5982\u4F55\u5B9E\u73B0-master-\u9009\u4E3E\u7684" tabindex="-1"><a class="header-anchor" href="#_3-elasticsearch-\u662F\u5982\u4F55\u5B9E\u73B0-master-\u9009\u4E3E\u7684" aria-hidden="true">#</a> 3. elasticsearch \u662F\u5982\u4F55\u5B9E\u73B0 master \u9009\u4E3E\u7684</h2>',7),y=a("ElasticSearch \u7684\u9009\u4E3B\u662F ZenDiscovery \u6A21\u5757\u8D1F\u8D23\uFF0C\u6E90\u7801\u5206\u6790\u5C06\u9996\u53D1\u5728\u3002 "),w={href:"https://gitee.com/yangchunjian/DearLocation",target:"_blank",rel:"noopener noreferrer"},L=a("https://gitee.com/yangchunjian/DearLocation"),x=r(`<ol><li>\u5BF9\u6240\u6709\u53EF\u4EE5\u6210\u4E3A Master \u7684\u8282\u70B9\uFF08node.master: true\uFF09\u6839\u636E nodeId \u6392\u5E8F\uFF0C\u6BCF\u6B21\u9009\u4E3E\u6BCF\u4E2A\u8282\u70B9\u90FD\u628A\u81EA\u5DF1\u6240\u77E5\u9053\u8282\u70B9\u6392\u4E00\u6B21\u5E8F\uFF0C\u7136\u540E\u9009\u51FA\u7B2C\u4E00\u4E2A\uFF08\u7B2C0\u4F4D\uFF09\u8282\u70B9\uFF0C\u6682\u4E14\u8BA4\u4E3A\u5B83\u662F Master \u8282\u70B9\u3002</li><li>\u5982\u679C\u5BF9\u67D0\u4E2A\u8282\u70B9\u7684\u6295\u7968\u6570\u8FBE\u5230\u4E00\u5B9A\u7684\u503C\uFF08\u53EF\u4EE5\u6210\u4E3Amaster\u8282\u70B9\u6570n/2+1\uFF09\u5E76\u4E14\u8BE5\u8282\u70B9\u81EA\u5DF1\u4E5F\u9009\u4E3E\u81EA\u5DF1\uFF0C\u90A3\u8FD9\u4E2A\u8282\u70B9\u5C31\u662Fmaster\u3002\u5426\u5219\u91CD\u65B0\u9009\u4E3E\u3002 (\u5F53\u7136\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u5B9A\u4E00\u4E2A\u503C\uFF0C\u6700\u5C0F\u503C\u8BBE\u5B9A\u4E3A\u8D85\u8FC7\u80FD\u6210\u4E3AMaster\u8282\u70B9\u7684n/2+1\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u8111\u88C2\u95EE\u9898\u3002discovery.zen.minimum_master_nodes)</li></ol><h2 id="_5-\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u7D22\u5F15\u6587\u6863\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u7D22\u5F15\u6587\u6863\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> 5. \u63CF\u8FF0\u4E00\u4E0B Elasticsearch \u7D22\u5F15\u6587\u6863\u7684\u8FC7\u7A0B</h2><p><img src="https://tva3.sinaimg.cn/large/007F3CC8ly1h0niy8fcitj30ku09d3zr.jpg" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><ol><li>\u5BA2\u6237\u7AEF\u5411 Node 1 \u53D1\u9001\u65B0\u5EFA\u3001\u7D22\u5F15\u6216\u8005\u5220\u9664\u8BF7\u6C42\u3002</li><li>\u8282\u70B9\u4F7F\u7528\u6587\u6863\u7684 _id \u786E\u5B9A\u6587\u6863\u5C5E\u4E8E\u5206\u7247 0 \u3002\u8BF7\u6C42\u4F1A\u88AB\u8F6C\u53D1\u5230 Node 3\uFF0C\u56E0\u4E3A\u5206\u7247 0 \u7684\u4E3B\u5206\u7247\u76EE\u524D\u88AB\u5206\u914D\u5728 Node 3 \u4E0A\u3002</li><li>Node 3 \u5728\u4E3B\u5206\u7247\u4E0A\u9762\u6267\u884C\u8BF7\u6C42\u3002\u5982\u679C\u6210\u529F\u4E86\uFF0C\u5B83\u5C06\u8BF7\u6C42\u5E76\u884C\u8F6C\u53D1\u5230 Node 1 \u548C Node 2 \u7684\u526F\u672C\u5206\u7247\u4E0A\u3002\u4E00\u65E6\u6240\u6709\u7684\u526F\u672C\u5206\u7247\u90FD\u62A5\u544A\u6210\u529F, Node 3 \u5C06\u5411\u534F\u8C03\u8282\u70B9\u62A5\u544A\u6210\u529F\uFF0C\u534F\u8C03\u8282\u70B9\u5411\u5BA2\u6237\u7AEF\u62A5\u544A\u6210\u529F\u3002</li></ol><p><strong>\u4E00\u56FE\u80DC\u5343\u6587\uFF0C\u8BB0\u4F4F\u8FD9\u5E45\u56FE\uFF0C\u4E0A\u9762\u662F\u6587\u6863\u5728\u8282\u70B9\u95F4\u5206\u53D1\u7684\u8FC7\u7A0B\uFF0C\u63A5\u7740\u8BF4\u4E00\u4E0B\u6587\u6863\u4ECE\u63A5\u6536\u5230\u5199\u5165\u78C1\u76D8\u8FC7\u7A0B\u3002</strong> \u534F\u8C03\u8282\u70B9\u9ED8\u8BA4\u4F7F\u7528\u6587\u6863 ID \u53C2\u4E0E\u8BA1\u7B97\uFF08\u4E5F\u652F\u6301\u901A\u8FC7 routing\uFF09\uFF0C\u4EE5\u4FBF\u4E3A\u8DEF\u7531\u63D0\u4F9B\u5408\u9002\u7684\u5206\u7247\u3002</p><blockquote><p>shard = hash(document_id) % (num_of_primary_shards)</p></blockquote><ol><li>\u5F53\u5206\u7247\u6240\u5728\u7684\u8282\u70B9\u63A5\u6536\u5230\u6765\u81EA\u534F\u8C03\u8282\u70B9\u7684\u8BF7\u6C42\u540E\uFF0C\u4F1A\u5C06\u8BF7\u6C42\u5199\u5165\u5230 MemoryBuffer\uFF0C\u7136\u540E\u5B9A\u65F6\uFF08\u9ED8\u8BA4\u662F\u6BCF\u9694 1 \u79D2\uFF09\u5199\u5165\u5230 Filesystem Cache\uFF0C\u8FD9\u4E2A\u4ECE MomeryBuffer \u5230 Filesystem Cache \u7684\u8FC7\u7A0B\u5C31\u53EB\u505A refresh\uFF1B</li><li>\u5F53\u7136\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B58\u5728 Momery Buffer \u548C Filesystem Cache \u7684\u6570\u636E\u53EF\u80FD\u4F1A\u4E22\u5931\uFF0CES \u662F\u901A\u8FC7 translog \u7684\u673A\u5236\u6765\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u9760\u6027\u7684\u3002\u5176\u5B9E\u73B0\u673A\u5236\u662F\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u540C\u65F6\u4E5F\u4F1A\u5199\u5165\u5230 translog \u4E2D\uFF0C\u5F53 Filesystem cache \u4E2D\u7684\u6570\u636E\u5199\u5165\u5230\u78C1\u76D8\u4E2D\u65F6\uFF0C\u624D\u4F1A\u6E05\u9664\u6389\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A flush\uFF1B</li><li>\u5728 flush \u8FC7\u7A0B\u4E2D\uFF0C\u5185\u5B58\u4E2D\u7684\u7F13\u51B2\u5C06\u88AB\u6E05\u9664\uFF0C\u5185\u5BB9\u88AB\u5199\u5165\u4E00\u4E2A\u65B0\u6BB5\uFF0C\u6BB5\u7684 fsync\u5C06\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\u70B9\uFF0C\u5E76\u5C06\u5185\u5BB9\u5237\u65B0\u5230\u78C1\u76D8\uFF0C\u65E7\u7684 translog \u5C06\u88AB\u5220\u9664\u5E76\u5F00\u59CB\u4E00\u4E2A\u65B0\u7684 translog\u3002</li><li>flush \u89E6\u53D1\u7684\u65F6\u673A\u662F\u5B9A\u65F6\u89E6\u53D1\uFF08\u9ED8\u8BA4 30 \u5206\u949F\uFF09\u6216\u8005 translog \u53D8\u5F97\u592A\u5927\uFF08\u9ED8\u8BA4\u4E3A 512M\uFF09\u65F6\uFF1B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. translog \u53EF\u4EE5\u7406\u89E3\u4E3A\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u76F4\u8FFD\u52A0\u3002
<span class="token number">2</span>. MemoryBuffer \u5E94\u7528\u7F13\u5B58\u3002
<span class="token number">3</span>. Filesystem Cache \u7CFB\u7EDF\u7F13\u51B2\u533A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5EF6\u4F38\u9605\u8BFB\uFF1ALucene \u7684 <code>Segement</code>:</p><blockquote><ol><li>Lucene \u7D22\u5F15\u662F\u7531\u591A\u4E2A\u6BB5\u7EC4\u6210\uFF0C\u6BB5\u672C\u8EAB\u662F\u4E00\u4E2A\u529F\u80FD\u9F50\u5168\u7684\u5012\u6392\u7D22\u5F15\u3002</li><li>\u6BB5\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u5141\u8BB8 Lucene \u5C06\u65B0\u7684\u6587\u6863\u589E\u91CF\u5730\u6DFB\u52A0\u5230\u7D22\u5F15\u4E2D\uFF0C\u800C\u4E0D\u7528\u4ECE\u5934\u91CD\u5EFA\u7D22\u5F15\u3002</li><li>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u641C\u7D22\u8BF7\u6C42\u800C\u8A00\uFF0C\u7D22\u5F15\u4E2D\u7684\u6240\u6709\u6BB5\u90FD\u4F1A\u88AB\u641C\u7D22\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u6BB5\u4F1A\u6D88\u8017CPU \u7684\u65F6\u949F\u5468\u3001\u6587\u4EF6\u53E5\u67C4\u548C\u5185\u5B58\u3002\u8FD9\u610F\u5473\u7740\u6BB5\u7684\u6570\u91CF\u8D8A\u591A\uFF0C\u641C\u7D22\u6027\u80FD\u4F1A\u8D8A\u4F4E\u3002</li><li>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CElasticsearch \u4F1A\u5408\u5E76\u5C0F\u6BB5\u5230\u4E00\u4E2A\u8F83\u5927\u7684\u6BB5\uFF0C\u63D0\u4EA4\u65B0\u7684\u5408\u5E76\u6BB5\u5230\u78C1\u76D8\uFF0C\u5E76\u5220\u9664\u90A3\u4E9B\u65E7\u7684\u5C0F\u6BB5\u3002</li></ol></blockquote><h2 id="_4-\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u641C\u7D22\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u641C\u7D22\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> 4. \u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B Elasticsearch \u641C\u7D22\u7684\u8FC7\u7A0B\uFF1F</h2><blockquote><p>es\u4F5C\u4E3A\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u5B58\u50A8\u548C\u68C0\u7D22\u7CFB\u7EDF\uFF0C\u6BCF\u4E2A\u6587\u6863\u6839\u636E _id \u5B57\u6BB5\u505A\u8DEF\u7531\u5206\u53D1\u88AB\u8F6C\u53D1\u5230\u5BF9\u5E94\u7684shard\u4E0A\u3002</p></blockquote><p>\u641C\u7D22\u6267\u884C\u9636\u6BB5\u8FC7\u7A0B\u5206\u4FE9\u4E2A\u90E8\u5206\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A Query Then Fetch\u3002</p><p><strong>4.1 query-\u67E5\u8BE2\u9636\u6BB5</strong></p><p>\u5F53\u4E00\u4E2Asearch\u8BF7\u6C42\u53D1\u51FA\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2Aquery\u4F1A\u88AB\u5E7F\u64AD\u5230\u7D22\u5F15\u91CC\u9762\u7684\u6BCF\u4E00\u4E2Ashard\uFF08\u4E3Bshard\u6216\u526F\u672Cshard\uFF09\uFF0C\u6BCF\u4E2Ashard\u4F1A\u5728\u672C\u5730\u6267\u884C\u67E5\u8BE2\u8BF7\u6C42\u540E\u4F1A\u751F\u6210\u4E00\u4E2A\u547D\u4E2D\u6587\u6863\u7684\u4F18\u5148\u7EA7\u961F\u5217\u3002</p><p>\u8FD9\u4E2A\u961F\u5217\u662F\u4E00\u4E2A\u6392\u5E8F\u597D\u7684top N\u6570\u636E\u7684\u5217\u8868\uFF0C\u5B83\u7684size\u7B49\u4E8Efrom+size\u7684\u548C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u4F60\u7684from\u662F10\uFF0Csize\u662F10\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u961F\u5217\u7684size\u5C31\u662F20\uFF0C\u6240\u4EE5\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6DF1\u5EA6\u5206\u9875\u4E0D\u80FD\u7528from+size\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u56E0\u4E3Afrom\u8D8A\u5927\uFF0C\u6027\u80FD\u5C31\u8D8A\u4F4E\u3002</p><p>es\u91CC\u9762\u5206\u5E03\u5F0Fsearch\u7684\u67E5\u8BE2\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="https://tva2.sinaimg.cn/large/007F3CC8ly1h0niv378zsj30lh08z75i.jpg" alt="es\u91CC\u9762\u5206\u5E03\u5F0Fsearch\u7684\u67E5\u8BE2\u6D41\u7A0B" loading="lazy"></p><p>\u67E5\u8BE2\u9636\u6BB5\u5305\u542B\u4EE5\u4E0B\u4E09\u4E2A\u6B65\u9AA4:</p><ol><li>\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2A search \u8BF7\u6C42\u5230 Node 3 \uFF0C Node 3 \u4F1A\u521B\u5EFA\u4E00\u4E2A\u5927\u5C0F\u4E3A from + size \u7684\u7A7A\u4F18\u5148\u961F\u5217\u3002</li><li>Node 3 \u5C06\u67E5\u8BE2\u8BF7\u6C42\u8F6C\u53D1\u5230\u7D22\u5F15\u7684\u6BCF\u4E2A\u4E3B\u5206\u7247\u6216\u526F\u672C\u5206\u7247\u4E2D\u3002\u6BCF\u4E2A\u5206\u7247\u5728\u672C\u5730\u6267\u884C\u67E5\u8BE2\u5E76\u6DFB\u52A0\u7ED3\u679C\u5230\u5927\u5C0F\u4E3A from + size \u7684\u672C\u5730\u6709\u5E8F\u4F18\u5148\u961F\u5217\u4E2D\u3002</li><li>\u6BCF\u4E2A\u5206\u7247\u8FD4\u56DE\u5404\u81EA\u4F18\u5148\u961F\u5217\u4E2D\u6240\u6709\u6587\u6863\u7684 ID \u548C\u6392\u5E8F\u503C\u7ED9\u534F\u8C03\u8282\u70B9\uFF0C\u4E5F\u5C31\u662F Node 3 \uFF0C\u5B83\u5408\u5E76\u8FD9\u4E9B\u503C\u5230\u81EA\u5DF1\u7684\u4F18\u5148\u961F\u5217\u4E2D\u6765\u4EA7\u751F\u4E00\u4E2A\u5168\u5C40\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5217\u8868\u3002</li></ol><p><strong>4.2 fetch - \u8BFB\u53D6\u9636\u6BB5 / \u53D6\u56DE\u9636\u6BB5</strong></p><p><img src="https://tva3.sinaimg.cn/large/007F3CC8ly1h0niuhpty3j30ka08mdh1.jpg" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><p>\u5206\u5E03\u5F0F\u9636\u6BB5\u7531\u4EE5\u4E0B\u6B65\u9AA4\u6784\u6210\uFF1A</p><ol><li>\u534F\u8C03\u8282\u70B9\u8FA8\u522B\u51FA\u54EA\u4E9B\u6587\u6863\u9700\u8981\u88AB\u53D6\u56DE\u5E76\u5411\u76F8\u5173\u7684\u5206\u7247\u63D0\u4EA4\u591A\u4E2A GET \u8BF7\u6C42\u3002</li><li>\u6BCF\u4E2A\u5206\u7247\u52A0\u8F7D\u5E76 \u4E30\u5BCC \u6587\u6863\uFF0C\u5982\u679C\u6709\u9700\u8981\u7684\u8BDD\uFF0C\u63A5\u7740\u8FD4\u56DE\u6587\u6863\u7ED9\u534F\u8C03\u8282\u70B9\u3002</li><li>\u4E00\u65E6\u6240\u6709\u7684\u6587\u6863\u90FD\u88AB\u53D6\u56DE\u4E86\uFF0C\u534F\u8C03\u8282\u70B9\u8FD4\u56DE\u7ED3\u679C\u7ED9\u5BA2\u6237\u7AEF\u3002</li></ol><p>\u534F\u8C03\u8282\u70B9\u9996\u5148\u51B3\u5B9A\u54EA\u4E9B\u6587\u6863 \u786E\u5B9E \u9700\u8981\u88AB\u53D6\u56DE\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u67E5\u8BE2\u6307\u5B9A\u4E86 { &quot;from&quot;: 90, &quot;size&quot;: 10 } \uFF0C\u6700\u521D\u768490\u4E2A\u7ED3\u679C\u4F1A\u88AB\u4E22\u5F03\uFF0C\u53EA\u6709\u4ECE\u7B2C91\u4E2A\u5F00\u59CB\u768410\u4E2A\u7ED3\u679C\u9700\u8981\u88AB\u53D6\u56DE\u3002\u8FD9\u4E9B\u6587\u6863\u53EF\u80FD\u6765\u81EA\u548C\u6700\u521D\u641C\u7D22\u8BF7\u6C42\u6709\u5173\u7684\u4E00\u4E2A\u3001\u591A\u4E2A\u751A\u81F3\u5168\u90E8\u5206\u7247\u3002</p><p>\u534F\u8C03\u8282\u70B9\u7ED9\u6301\u6709\u76F8\u5173\u6587\u6863\u7684\u6BCF\u4E2A\u5206\u7247\u521B\u5EFA\u4E00\u4E2A multi-get request \uFF0C\u5E76\u53D1\u9001\u8BF7\u6C42\u7ED9\u540C\u6837\u5904\u7406\u67E5\u8BE2\u9636\u6BB5\u7684\u5206\u7247\u526F\u672C\u3002</p><p>\u5206\u7247\u52A0\u8F7D\u6587\u6863\u4F53-- _source \u5B57\u6BB5\u2014\u200B\u5982\u679C\u6709\u9700\u8981\uFF0C\u7528\u5143\u6570\u636E\u548C search snippet highlighting \u4E30\u5BCC\u7ED3\u679C\u6587\u6863\u3002 \u4E00\u65E6\u534F\u8C03\u8282\u70B9\u63A5\u6536\u5230\u6240\u6709\u7684\u7ED3\u679C\u6587\u6863\uFF0C\u5B83\u5C31\u7EC4\u88C5\u8FD9\u4E9B\u7ED3\u679C\u4E3A\u5355\u4E2A\u54CD\u5E94\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u62D3\u5C55\u9605\u8BFB\uFF1A
\u6DF1\u7FFB\u9875\uFF08Deep Pagination\uFF09
---
\u5148\u67E5\u540E\u53D6\u7684\u8FC7\u7A0B\u652F\u6301\u7528 from \u548C size \u53C2\u6570\u5206\u9875\uFF0C\u4F46\u662F\u8FD9\u662F \u6709\u9650\u5236\u7684 \u3002 \u8981\u8BB0\u4F4F\u9700\u8981\u4F20\u9012\u4FE1\u606F\u7ED9\u534F\u8C03\u8282\u70B9\u7684\u6BCF\u4E2A\u5206\u7247\u5FC5\u987B\u5148\u521B\u5EFA\u4E00\u4E2A from + size \u957F\u5EA6\u7684\u961F\u5217\uFF0C\u534F\u8C03\u8282\u70B9\u9700\u8981\u6839\u636E number_of_shards * <span class="token punctuation">(</span>from + size<span class="token punctuation">)</span> \u6392\u5E8F\u6587\u6863\uFF0C\u6765\u627E\u5230\u88AB\u5305\u542B\u5728 size \u91CC\u7684\u6587\u6863\u3002

\u53D6\u51B3\u4E8E\u4F60\u7684\u6587\u6863\u7684\u5927\u5C0F\uFF0C\u5206\u7247\u7684\u6570\u91CF\u548C\u4F60\u4F7F\u7528\u7684\u786C\u4EF6\uFF0C\u7ED9 <span class="token number">10,000</span> \u5230 <span class="token number">50,000</span> \u7684\u7ED3\u679C\u6587\u6863\u6DF1\u5206\u9875\uFF08 <span class="token number">1,000</span> \u5230 <span class="token number">5,000</span> \u9875\uFF09\u662F\u5B8C\u5168\u53EF\u884C\u7684\u3002\u4F46\u662F\u4F7F\u7528\u8DB3\u591F\u5927\u7684 from \u503C\uFF0C\u6392\u5E8F\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u53D8\u5F97\u975E\u5E38\u6C89\u91CD\uFF0C\u4F7F\u7528\u5927\u91CF\u7684CPU\u3001\u5185\u5B58\u548C\u5E26\u5BBD\u3002\u56E0\u4E3A\u8FD9\u4E2A\u539F\u56E0\uFF0C\u6211\u4EEC\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u4E0D\u8981\u4F7F\u7528\u6DF1\u5206\u9875\u3002

\u5B9E\u9645\u4E0A\uFF0C \u201C\u6DF1\u5206\u9875\u201D \u5F88\u5C11\u7B26\u5408\u4EBA\u7684\u884C\u4E3A\u3002\u5F532\u52303\u9875\u8FC7\u53BB\u4EE5\u540E\uFF0C\u4EBA\u4F1A\u505C\u6B62\u7FFB\u9875\uFF0C\u5E76\u4E14\u6539\u53D8\u641C\u7D22\u6807\u51C6\u3002\u4F1A\u4E0D\u77E5\u75B2\u5026\u5730\u4E00\u9875\u4E00\u9875\u7684\u83B7\u53D6\u7F51\u9875\u76F4\u5230\u4F60\u7684\u670D\u52A1\u5D29\u6E83\u7684\u7F6A\u9B41\u7978\u9996\u4E00\u822C\u662F\u673A\u5668\u4EBA\u6216\u8005web spider\u3002

\u5982\u679C\u4F60 \u786E\u5B9E \u9700\u8981\u4ECE\u4F60\u7684\u96C6\u7FA4\u53D6\u56DE\u5927\u91CF\u7684\u6587\u6863\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7528 scroll \u67E5\u8BE2\u7981\u7528\u6392\u5E8F\u4F7F\u8FD9\u4E2A\u53D6\u56DE\u884C\u4E3A\u66F4\u6709\u6548\u7387\uFF0C\u6211\u4EEC\u4F1A\u5728 later <span class="token keyword">in</span> this chapter \u8FDB\u884C\u8BA8\u8BBA\u3002
\u6CE8\uFF1Ahttps://www.elastic.co/guide/cn/elasticsearch/guide/current/scroll.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-elasticsearch-\u5728\u90E8\u7F72\u65F6-\u5BF9-linux-\u7684\u8BBE\u7F6E\u6709\u54EA\u4E9B\u4F18\u5316\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-elasticsearch-\u5728\u90E8\u7F72\u65F6-\u5BF9-linux-\u7684\u8BBE\u7F6E\u6709\u54EA\u4E9B\u4F18\u5316\u65B9\u6CD5" aria-hidden="true">#</a> 5. Elasticsearch \u5728\u90E8\u7F72\u65F6\uFF0C\u5BF9 Linux \u7684\u8BBE\u7F6E\u6709\u54EA\u4E9B\u4F18\u5316\u65B9\u6CD5</h2><ol><li>\u5173\u95ED\u7F13\u5B58swap;</li></ol><blockquote><p>\u539F\u56E0\uFF1A\u5927\u591A\u6570\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u5C06\u5185\u5B58\u4F7F\u7528\u5230\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\uFF0C\u4F1A\u5C06\u5E94\u7528\u7A0B\u5E8F\u672A\u7528\u5230\u7684\u5185\u5B58\u4EA4\u6362\u51FA\u53BB\u3002\u4F1A\u5BFC\u81F4jvm\u7684\u5806\u5185\u5B58\u4EA4\u6362\u5230\u78C1\u76D8\u4E0A\u3002\u4EA4\u6362\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002\u4F1A\u5BFC\u81F4\u5185\u5B58\u5783\u573E\u56DE\u6536\u5EF6\u957F\u3002\u4F1A\u5BFC\u81F4\u96C6\u7FA4\u8282\u70B9\u54CD\u5E94\u65F6\u95F4\u53D8\u6162\uFF0C\u6216\u8005\u4ECE\u96C6\u7FA4\u4E2D\u65AD\u5F00\u3002</p></blockquote><ol start="2"><li><p>\u5806\u5185\u5B58\u8BBE\u7F6E\u4E3A\uFF1AMin\uFF08\u8282\u70B9\u5185\u5B58/2, 32GB\uFF09;</p></li><li><p>\u8BBE\u7F6E\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570\uFF1B</p></li></ol><p><strong>\u540E\u4FE9\u70B9\u4E0D\u61C2\u53EF\u4EE5\u5148\u8BF4\u6709\u4E00\u5B9A\u4E86\u89E3\uFF0C\u5173\u6CE8JavaPub\u4F1A\u505A\u8BE6\u7EC6\u8BB2\u89E3\u3002</strong></p><ol start="4"><li><p>\u8C03\u6574\u7EBF\u7A0B\u6C60\u548C\u961F\u5217\u5927\u5C0F</p></li><li><p>\u78C1\u76D8\u5B58\u50A8 raid \u65B9\u5F0F\u2014\u2014\u5B58\u50A8\u6709\u6761\u4EF6\u4F7F\u7528 RAID6\uFF0C\u589E\u52A0\u5355\u8282\u70B9\u6027\u80FD\u4EE5\u53CA\u907F\u514D\u5355\u8282\u70B9\u5B58\u50A8\u6545\u969C\u3002</p></li></ol>`,34),q={href:"https://www.elastic.co/cn/blog/how-to-design-your-elasticsearch-data-storage-architecture-for-scale#raid56",target:"_blank",rel:"noopener noreferrer"},E=a("https://www.elastic.co/cn/blog/how-to-design-your-elasticsearch-data-storage-architecture-for-scale#raid56"),z=r(`<h2 id="_6-elasticsearch-\u4E2D\u7684\u8282\u70B9-\u6BD4\u5982\u5171-20-\u4E2A-\u5176\u4E2D\u7684-10-\u4E2A\u9009\u4E86\u4E00\u4E2A-master-\u53E6\u5916-10-\u4E2A\u9009\u4E86\u53E6\u4E00\u4E2A-master-\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_6-elasticsearch-\u4E2D\u7684\u8282\u70B9-\u6BD4\u5982\u5171-20-\u4E2A-\u5176\u4E2D\u7684-10-\u4E2A\u9009\u4E86\u4E00\u4E2A-master-\u53E6\u5916-10-\u4E2A\u9009\u4E86\u53E6\u4E00\u4E2A-master-\u600E\u4E48\u529E" aria-hidden="true">#</a> 6. Elasticsearch \u4E2D\u7684\u8282\u70B9\uFF08\u6BD4\u5982\u5171 20 \u4E2A\uFF09\uFF0C\u5176\u4E2D\u7684 10 \u4E2A\u9009\u4E86\u4E00\u4E2A master\uFF0C\u53E6\u5916 10 \u4E2A\u9009\u4E86\u53E6\u4E00\u4E2A master\uFF0C\u600E\u4E48\u529E\uFF1F</h2><ol><li><p>\u5F53\u96C6\u7FA4 master \u5019\u9009\u6570\u91CF\u4E0D\u5C0F\u4E8E 3 \u4E2A\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u6700\u5C11\u6295\u7968\u901A\u8FC7\u6570\u91CF\uFF08discovery.zen.minimum_master_nodes\uFF09\u8D85\u8FC7\u6240\u6709\u5019\u9009\u8282\u70B9\u4E00\u534A\u4EE5\u4E0A\u6765\u89E3\u51B3\u8111\u88C2\u95EE\u9898\uFF1B</p></li><li><p>\u5F53\u5019\u9009\u6570\u91CF\u4E3A\u4E24\u4E2A\u65F6\uFF0C\u53EA\u80FD\u4FEE\u6539\u4E3A\u552F\u4E00\u7684\u4E00\u4E2A master \u5019\u9009\uFF0C\u5176\u4ED6\u4F5C\u4E3A data\u8282\u70B9\uFF0C\u907F\u514D\u8111\u88C2\u95EE\u9898\u3002</p></li></ol><h2 id="_7-\u5BA2\u6237\u7AEF\u5728\u548C\u96C6\u7FA4\u8FDE\u63A5\u65F6-\u5982\u4F55\u9009\u62E9\u7279\u5B9A\u7684\u8282\u70B9\u6267\u884C\u8BF7\u6C42\u7684" tabindex="-1"><a class="header-anchor" href="#_7-\u5BA2\u6237\u7AEF\u5728\u548C\u96C6\u7FA4\u8FDE\u63A5\u65F6-\u5982\u4F55\u9009\u62E9\u7279\u5B9A\u7684\u8282\u70B9\u6267\u884C\u8BF7\u6C42\u7684" aria-hidden="true">#</a> 7. \u5BA2\u6237\u7AEF\u5728\u548C\u96C6\u7FA4\u8FDE\u63A5\u65F6\uFF0C\u5982\u4F55\u9009\u62E9\u7279\u5B9A\u7684\u8282\u70B9\u6267\u884C\u8BF7\u6C42\u7684\uFF1F</h2><p>client \u8FDC\u7A0B\u8FDE\u63A5\u8FDE\u63A5\u4E00\u4E2A elasticsearch \u96C6\u7FA4\u3002\u5B83\u5E76\u4E0D\u52A0\u5165\u5230\u96C6\u7FA4\u4E2D\uFF0C\u53EA\u662F\u83B7\u5F97\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u521D\u59CB\u5316\u7684\u5730\u5740\uFF0C\u5E76\u4EE5\u8F6E\u8BE2\u7684\u65B9\u5F0F\u4E0E\u8FD9\u4E9B\u5730\u5740\u8FDB\u884C\u901A\u4FE1\u3002</p><h2 id="_8-\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u66F4\u65B0\u548C\u5220\u9664\u6587\u6863\u7684\u8FC7\u7A0B\u3002" tabindex="-1"><a class="header-anchor" href="#_8-\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B-elasticsearch-\u66F4\u65B0\u548C\u5220\u9664\u6587\u6863\u7684\u8FC7\u7A0B\u3002" aria-hidden="true">#</a> 8. \u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B Elasticsearch \u66F4\u65B0\u548C\u5220\u9664\u6587\u6863\u7684\u8FC7\u7A0B\u3002</h2><ol><li>\u5220\u9664\u548C\u66F4\u65B0\u4E5F\u90FD\u662F\u5199\u64CD\u4F5C\uFF0C\u4F46\u662F Elasticsearch \u4E2D\u7684\u6587\u6863\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u56E0\u6B64\u4E0D\u80FD\u88AB\u5220\u9664\u6216\u8005\u6539\u52A8\u4EE5\u5C55\u793A\u5176\u53D8\u66F4\uFF1B(\u6839\u672C\u539F\u56E0\u662F\u5E95\u5C42lucene\u7684segment\u6BB5\u6587\u4EF6\u4E0D\u53EF\u66F4\u65B0\u5220\u9664)</li><li>\u78C1\u76D8\u4E0A\u7684\u6BCF\u4E2A\u6BB5\u90FD\u6709\u4E00\u4E2A\u76F8\u5E94\u7684 .del \u6587\u4EF6\u3002\u5F53\u5220\u9664\u8BF7\u6C42\u53D1\u9001\u540E\uFF0C\u6587\u6863\u5E76\u6CA1\u6709\u771F \u7684\u88AB\u5220\u9664\uFF0C\u800C\u662F\u5728 <code>.del</code> \u6587\u4EF6\u4E2D\u88AB\u6807\u8BB0\u4E3A\u5220\u9664\u3002\u8BE5\u6587\u6863\u4F9D\u7136\u80FD\u5339\u914D\u67E5\u8BE2\uFF0C\u4F46\u662F\u4F1A\u5728 \u7ED3\u679C\u4E2D\u88AB\u8FC7\u6EE4\u6389\u3002\u5F53\u6BB5\u5408\u5E76\u65F6\uFF0C\u5728.del \u6587\u4EF6\u4E2D\u88AB\u6807\u8BB0\u4E3A\u5220\u9664\u7684\u6587\u6863\u5C06\u4E0D\u4F1A\u88AB\u5199\u5165 \u65B0\u6BB5\u3002</li><li>\u5728\u65B0\u7684\u6587\u6863\u88AB\u521B\u5EFA\u65F6\uFF0CElasticsearch \u4F1A\u4E3A\u8BE5\u6587\u6863\u6307\u5B9A\u4E00\u4E2A\u7248\u672C\u53F7\uFF0C\u5F53\u6267\u884C\u66F4\u65B0 \u65F6\uFF0C\u65E7\u7248\u672C\u7684\u6587\u6863\u5728.del \u6587\u4EF6\u4E2D\u88AB\u6807\u8BB0\u4E3A\u5220\u9664\uFF0C\u65B0\u7248\u672C\u7684\u6587\u6863\u88AB\u7D22\u5F15\u5230\u4E00\u4E2A\u65B0\u6BB5\u3002</li></ol><p>\u65E7\u7248\u672C\u7684\u6587\u6863\u4F9D\u7136\u80FD\u5339\u914D\u67E5\u8BE2\uFF0C\u4F46\u662F\u4F1A\u5728\u7ED3\u679C\u4E2D\u88AB\u8FC7\u6EE4\u6389\u3002</p><h2 id="_9-elasticsearch-\u5BF9\u4E8E\u5927\u6570\u636E\u91CF-\u4E0A\u4EBF\u91CF\u7EA7-\u7684\u805A\u5408\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_9-elasticsearch-\u5BF9\u4E8E\u5927\u6570\u636E\u91CF-\u4E0A\u4EBF\u91CF\u7EA7-\u7684\u805A\u5408\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 9. Elasticsearch \u5BF9\u4E8E\u5927\u6570\u636E\u91CF\uFF08\u4E0A\u4EBF\u91CF\u7EA7\uFF09\u7684\u805A\u5408\u5982\u4F55\u5B9E\u73B0\uFF1F</h2><blockquote><p>\u8FD9\u9053\u9898\u76EE\u8F83\u96BE\uFF0C\u76F8\u4FE1\u5927\u5BB6\u770B\u5230\u5F88\u591A\u7C7B\u4F3C\u8FD9\u79CD\u56DE\u7B54</p></blockquote><p>Elasticsearch \u63D0\u4F9B\u7684\u9996\u4E2A\u8FD1\u4F3C\u805A\u5408\u662Fcardinality \u5EA6\u91CF\u3002\u5B83\u63D0\u4F9B\u4E00\u4E2A\u5B57\u6BB5\u7684\u57FA\u6570\uFF0C\u5373\u8BE5\u5B57\u6BB5\u7684distinct\u6216\u8005unique\u503C\u7684\u6570\u76EE\u3002\u5B83\u662F\u57FA\u4E8EHLL\u7B97\u6CD5\u7684\u3002HLL \u4F1A\u5148\u5BF9\u6211\u4EEC\u7684\u8F93\u5165\u4F5C\u54C8\u5E0C\u8FD0\u7B97\uFF0C\u7136\u540E\u6839\u636E\u54C8\u5E0C\u8FD0\u7B97\u7684\u7ED3\u679C\u4E2D\u7684 bits \u505A\u6982\u7387\u4F30\u7B97\u4ECE\u800C\u5F97\u5230\u57FA\u6570\u3002\u5176\u7279\u70B9\u662F\uFF1A\u53EF\u914D\u7F6E\u7684\u7CBE\u5EA6\uFF0C\u7528\u6765\u63A7\u5236\u5185\u5B58\u7684\u4F7F\u7528\uFF08\u66F4\u7CBE\u786E \uFF1D \u66F4\u591A\u5185\u5B58\uFF09\uFF1B\u5C0F\u7684\u6570\u636E\u96C6\u7CBE\u5EA6\u662F\u975E\u5E38\u9AD8\u7684\uFF1B\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u53C2\u6570\uFF0C\u6765\u8BBE\u7F6E\u53BB\u91CD\u9700\u8981\u7684\u56FA\u5B9A\u5185\u5B58\u4F7F\u7528\u91CF\u3002\u65E0\u8BBA\u6570\u5343\u8FD8\u662F\u6570\u5341\u4EBF\u7684\u552F\u4E00\u503C\uFF0C\u5185\u5B58\u4F7F\u7528\u91CF\u53EA\u4E0E\u4F60\u914D\u7F6E\u7684\u7CBE\u786E\u5EA6\u76F8\u5173\u3002</p><p><strong>\u79D1\u666E&amp;\u62D3\u5C55</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>HyperLogLog\uFF1A
\u4E0B\u9762\u7B80\u79F0\u4E3AHLL\uFF0C\u5B83\u662F LogLog \u7B97\u6CD5\u7684\u5347\u7EA7\u7248\uFF0C\u4F5C\u7528\u662F\u80FD\u591F\u63D0\u4F9B\u4E0D\u7CBE\u786E\u7684\u53BB\u91CD\u8BA1\u6570\u3002\u5B58\u5728\u4EE5\u4E0B\u7684\u7279\u70B9\uFF1A
<span class="token number">1</span>. \u80FD\u591F\u4F7F\u7528\u6781\u5C11\u7684\u5185\u5B58\u6765\u7EDF\u8BA1\u5DE8\u91CF\u7684\u6570\u636E\uFF0C\u5728 Redis \u4E2D\u5B9E\u73B0\u7684 HyperLogLog\uFF0C\u53EA\u9700\u898112K\u5185\u5B58\u5C31\u80FD\u7EDF\u8BA12^64\u4E2A\u6570\u636E\u3002
<span class="token number">2</span>. \u8BA1\u6570\u5B58\u5728\u4E00\u5B9A\u7684\u8BEF\u5DEE\uFF0C\u8BEF\u5DEE\u7387\u6574\u4F53\u8F83\u4F4E\u3002\u6807\u51C6\u8BEF\u5DEE\u4E3A <span class="token number">0.81</span>% \u3002
<span class="token number">3</span>. \u8BEF\u5DEE\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u8F85\u52A9\u8BA1\u7B97\u56E0\u5B50\u8FDB\u884C\u964D\u4F4E\u3002
---
\u5E94\u7528\u573A\u666F\uFF1A
<span class="token number">1</span>. \u57FA\u6570\u4E0D\u5927\uFF0C\u6570\u636E\u91CF\u4E0D\u5927\u5C31\u7528\u4E0D\u4E0A\uFF0C\u4F1A\u6709\u70B9\u5927\u6750\u5C0F\u7528\u6D6A\u8D39\u7A7A\u95F4
<span class="token number">2</span>. \u6709\u5C40\u9650\u6027\uFF0C\u5C31\u662F\u53EA\u80FD\u7EDF\u8BA1\u57FA\u6570\u6570\u91CF\uFF0C\u800C\u6CA1\u529E\u6CD5\u53BB\u77E5\u9053\u5177\u4F53\u7684\u5185\u5BB9\u662F\u4EC0\u4E48
<span class="token number">3</span>. \u548Cbitmap\u76F8\u6BD4\uFF0C\u5C5E\u4E8E\u4E24\u79CD\u7279\u5B9A\u7EDF\u8BA1\u60C5\u51B5\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0CHyperLogLog \u53BB\u91CD\u6BD4 bitmap \u65B9\u4FBF\u5F88\u591A
<span class="token number">4</span>. \u4E00\u822C\u53EF\u4EE5bitmap\u548Chyperloglog\u914D\u5408\u4F7F\u7528\uFF0Cbitmap\u6807\u8BC6\u54EA\u4E9B\u7528\u6237\u6D3B\u8DC3\uFF0Chyperloglog\u8BA1\u6570
---
\u5E94\u7528\u573A\u666F\uFF1A
<span class="token number">1</span>. \u57FA\u6570\u4E0D\u5927\uFF0C\u6570\u636E\u91CF\u4E0D\u5927\u5C31\u7528\u4E0D\u4E0A\uFF0C\u4F1A\u6709\u70B9\u5927\u6750\u5C0F\u7528\u6D6A\u8D39\u7A7A\u95F4
<span class="token number">2</span>. \u6709\u5C40\u9650\u6027\uFF0C\u5C31\u662F\u53EA\u80FD\u7EDF\u8BA1\u57FA\u6570\u6570\u91CF\uFF0C\u800C\u6CA1\u529E\u6CD5\u53BB\u77E5\u9053\u5177\u4F53\u7684\u5185\u5BB9\u662F\u4EC0\u4E48
<span class="token number">3</span>. \u548Cbitmap\u76F8\u6BD4\uFF0C\u5C5E\u4E8E\u4E24\u79CD\u7279\u5B9A\u7EDF\u8BA1\u60C5\u51B5\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0CHyperLogLog \u53BB\u91CD\u6BD4 bitmap \u65B9\u4FBF\u5F88\u591A
<span class="token number">4</span>. \u4E00\u822C\u53EF\u4EE5bitmap\u548Chyperloglog\u914D\u5408\u4F7F\u7528\uFF0Cbitmap\u6807\u8BC6\u54EA\u4E9B\u7528\u6237\u6D3B\u8DC3\uFF0Chyperloglog\u8BA1\u6570
\u6765\u6E90\uFF1A\u5237\u5237\u9762\u8BD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-\u5728\u5E76\u53D1\u60C5\u51B5\u4E0B-elasticsearch-\u5982\u679C\u4FDD\u8BC1\u8BFB\u5199\u4E00\u81F4" tabindex="-1"><a class="header-anchor" href="#_10-\u5728\u5E76\u53D1\u60C5\u51B5\u4E0B-elasticsearch-\u5982\u679C\u4FDD\u8BC1\u8BFB\u5199\u4E00\u81F4" aria-hidden="true">#</a> 10. \u5728\u5E76\u53D1\u60C5\u51B5\u4E0B\uFF0CElasticsearch \u5982\u679C\u4FDD\u8BC1\u8BFB\u5199\u4E00\u81F4\uFF1F</h2><blockquote><p>\u9996\u5148\u8981\u4E86\u89E3\u4EC0\u4E48\u662F\u4E00\u81F4\u6027\uFF0C\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u901A\u8FC7CPA\u7406\u8BBA\u5206\u6790\u3002</p></blockquote><p>\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E0D\u53EF\u80FD\u540C\u65F6\u6EE1\u8DB3\u4E00\u81F4\u6027\uFF08C\uFF1AConsistency\uFF09\u3001\u53EF\u7528\u6027\uFF08A\uFF1AAvailability\uFF09\u548C\u5206\u533A\u5BB9\u5FCD\u6027\uFF08P\uFF1APartition Tolerance\uFF09\uFF0C\u6700\u591A\u53EA\u80FD\u540C\u65F6\u6EE1\u8DB3\u5176\u4E2D\u4E24\u9879\u3002 <img src="https://tvax4.sinaimg.cn/large/007F3CC8ly1h0nitw2kjwj30nk0l5goe.jpg" alt="\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E0D\u53EF\u80FD\u540C\u65F6\u6EE1\u8DB3\u4E00\u81F4\u6027\uFF08C\uFF1AConsistency\uFF09\u3001\u53EF\u7528\u6027\uFF08A\uFF1AAvailability\uFF09\u548C\u5206\u533A\u5BB9\u5FCD\u6027\uFF08P\uFF1APartition Tolerance\uFF09\uFF0C\u6700\u591A\u53EA\u80FD\u540C\u65F6\u6EE1\u8DB3\u5176\u4E2D\u4E24\u9879\u3002" loading="lazy"></p><ol><li>\u53EF\u4EE5\u901A\u8FC7\u7248\u672C\u53F7\u4F7F\u7528\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\uFF0C\u4EE5\u786E\u4FDD\u65B0\u7248\u672C\u4E0D\u4F1A\u88AB\u65E7\u7248\u672C\u8986\u76D6\uFF0C\u7531\u5E94\u7528\u5C42\u6765\u5904\u7406\u5177\u4F53\u7684\u51B2\u7A81\uFF1B</li><li>\u53E6\u5916\u5BF9\u4E8E\u5199\u64CD\u4F5C\uFF0C\u4E00\u81F4\u6027\u7EA7\u522B\u652F\u6301 quorum/one/all\uFF0C\u9ED8\u8BA4\u4E3A quorum\uFF0C\u5373\u53EA\u6709\u5F53\u5927\u591A\u6570\u5206\u7247\u53EF\u7528\u65F6\u624D\u5141\u8BB8\u5199\u64CD\u4F5C\u3002\u4F46\u5373\u4F7F\u5927\u591A\u6570\u53EF\u7528\uFF0C\u4E5F\u53EF\u80FD\u5B58\u5728\u56E0\u4E3A\u7F51\u7EDC\u7B49\u539F\u56E0\u5BFC\u81F4\u5199\u5165\u526F\u672C\u5931\u8D25\uFF0C\u8FD9\u6837\u8BE5\u526F\u672C\u88AB\u8BA4\u4E3A\u6545\u969C\uFF0C\u5206\u7247\u5C06\u4F1A\u5728\u4E00\u4E2A\u4E0D\u540C\u7684\u8282\u70B9\u4E0A\u91CD\u5EFA\u3002</li><li>\u5BF9\u4E8E\u8BFB\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E replication \u4E3A sync(\u9ED8\u8BA4)\uFF0C\u8FD9\u4F7F\u5F97\u64CD\u4F5C\u5728\u4E3B\u5206\u7247\u548C\u526F\u672C\u5206\u7247\u90FD\u5B8C\u6210\u540E\u624D\u4F1A\u8FD4\u56DE\uFF1B\u5982\u679C\u8BBE\u7F6E replication \u4E3A async \u65F6\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u641C\u7D22\u8BF7\u6C42\u53C2\u6570_preference \u4E3A primary \u6765\u67E5\u8BE2\u4E3B\u5206\u7247\uFF0C\u786E\u4FDD\u6587\u6863\u662F\u6700\u65B0\u7248\u672C\u3002</li></ol><h2 id="_11-\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u4EEC\u7684\u4E2A\u6027\u5316\u641C\u7D22\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_11-\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u4EEC\u7684\u4E2A\u6027\u5316\u641C\u7D22\u65B9\u6848" aria-hidden="true">#</a> 11. \u4ECB\u7ECD\u4E00\u4E0B\u4F60\u4EEC\u7684\u4E2A\u6027\u5316\u641C\u7D22\u65B9\u6848\uFF1F</h2><blockquote><p>\u5982\u679C\u4F60\u6CA1\u6709\u5F88\u591A\u5B9E\u6218\u7ECF\u9A8C\uFF0C\u53EF\u4EE5\u57FA\u4E8E word2vec \u505A\u4E00\u4E9B\u7EC3\u4E60\uFF0C\u6211\u7684\u535A\u5BA2\u63D0\u4F9B\u4E86 word2vec Java\u7248\u7684\u4E00\u4E9BDemo\u3002</p></blockquote><p>\u57FA\u4E8E word2vec \u548C Elasticsearch \u5B9E\u73B0\u4E2A\u6027\u5316\u641C\u7D22\uFF0C\u5B83\u6709\u4EE5\u4E0B\u4F18\u70B9\uFF1A</p><ol><li>\u57FA\u4E8Eword2vec\u7684\u5546\u54C1\u5411\u91CF\u8FD8\u6709\u4E00\u4E2A\u53EF\u7528\u4E4B\u5904\uFF0C\u5C31\u662F\u53EF\u4EE5\u7528\u6765\u5B9E\u73B0\u76F8\u4F3C\u5546\u54C1\u7684\u63A8\u8350\uFF1B</li></ol><h2 id="\u63A8\u8350\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u9605\u8BFB" aria-hidden="true">#</a> \u63A8\u8350\u9605\u8BFB\uFF1A</h2>`,21),C=a("\u3010Java\u57FA\u7840\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Java\u57FA\u7840\u9762\u8BD5\u9898"),j=e("p",null,[e("a",{href:"java-concurrent-interview-must"},"\u3010Java\u5E76\u53D1\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Java\u5E76\u53D1\u57FA\u7840\u9762\u8BD5\u9898")],-1),N=a("\u3010MySQL\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684MySQL\u57FA\u7840\u9762\u8BD5\u9898"),M=a("\u3010ElasticSearch\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684ElasticSearch\u9762\u8BD5\u9898"),S=a("\u3010JVM\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684JVM\u9762\u8BD5\u9898"),D=a("\u3010Spring\u301110\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Spring\u9762\u8BD5\u9898"),F={href:"https://github.com/yangchunjian",target:"_blank",rel:"noopener noreferrer"},P=a("GItHub"),I=a("|"),A={href:"https://gitee.com/yangchunjian",target:"_blank",rel:"noopener noreferrer"},B=a("GitEE");function H(J,T){const i=t("ExternalLinkIcon"),n=t("RouterLink");return c(),d("div",null,[p,e("p",null,[u,e("a",m,[b,s(i)])]),_,e("p",null,[g,e("a",v,[f,s(i)])]),k,e("blockquote",null,[e("p",null,[y,e("a",w,[L,s(i)])])]),x,e("blockquote",null,[e("p",null,[e("a",q,[E,s(i)])])]),z,e("p",null,[s(n,{to:"/willbe/java-basics-interview-must.html"},{default:l(()=>[C]),_:1})]),j,e("p",null,[s(n,{to:"/willbe/mysql-interview-must.html"},{default:l(()=>[N]),_:1})]),e("p",null,[s(n,{to:"/willbe/elasticsearch-interview-must.html"},{default:l(()=>[M]),_:1})]),e("p",null,[s(n,{to:"/willbe/jvm-interview-must.html"},{default:l(()=>[S]),_:1})]),e("p",null,[s(n,{to:"/willbe/willbe/spring-interview-must.html"},{default:l(()=>[D]),_:1})]),e("p",null,[e("a",F,[P,s(i)]),I,e("a",A,[B,s(i)])])])}var R=o(h,[["render",H],["__file","elasticsearch-interview-must.html.vue"]]);export{R as default};
