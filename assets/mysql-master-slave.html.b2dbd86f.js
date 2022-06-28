import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as i,c as t,a as s,b as o,d as n,e as r}from"./app.d7b92b9c.js";const p={},c=s("p",null,"\u57FA\u4E8Elinux\u642D\u5EFAmysql\u4E3B\u4ECE\u670D\u52A1\u5668\uFF0C\u5355\u673A\u642D\u5EFA",-1),d=s("p",null,"[toc]",-1),m=s("h2",{id:"\u4E0B\u8F7D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#"),n(" \u4E0B\u8F7D")],-1),u=n("wget wget "),v={href:"https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.32-el7-x86_64.tar.gz",target:"_blank",rel:"noopener noreferrer"},b=n("https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.32-el7-x86_64.tar.gz"),k=r(`<h2 id="\u521B\u5EFA\u591A\u5B9E\u4F8B\u914D\u7F6E\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u591A\u5B9E\u4F8B\u914D\u7F6E\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u591A\u5B9E\u4F8B\u914D\u7F6E\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E3A\u6BCF\u4E2A\u5B9E\u4F8B\u521B\u5EFA\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u5B58\u653E\u5BF9\u5E94\u7684\u6570\u636E\u6587\u4EF6\u3001\u65E5\u5FD7\u6587\u4EF6\u3001\u4E34\u65F6\u6587\u4EF6</span>
<span class="token function">mkdir</span> -p /mnt/databases/mysql/<span class="token punctuation">{</span>mysql_3306,mysql_3307<span class="token punctuation">}</span>
<span class="token function">mkdir</span> /mnt/databases/mysql/mysql_3306/<span class="token punctuation">{</span>data,log,tmp<span class="token punctuation">}</span>
<span class="token function">mkdir</span> /mnt/databases/mysql/mysql_3307/<span class="token punctuation">{</span>data,log,tmp<span class="token punctuation">}</span>

<span class="token comment">#\u66F4\u6539\u76EE\u5F55\u6743\u9650</span>
<span class="token function">chown</span> -R mysql-admin:mysql /mnt/databases/mysql/ 
<span class="token function">chown</span> -R mysql-admin:mysql /usr/local/mysql/

<span class="token comment">#\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=$PATH:/usr/local/mysql/bin&#39;</span> <span class="token operator">&gt;&gt;</span>  /etc/profile 
<span class="token builtin class-name">source</span> /etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Emy-cnf" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Emy-cnf" aria-hidden="true">#</a> \u914D\u7F6Emy.cnf</h2><blockquote><p>vim /usr/local/mysql/support-files/my.cnf</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/tmp/mysql.sock

<span class="token punctuation">[</span>mysqld_multi<span class="token punctuation">]</span>
<span class="token assign-left variable">mysqld</span><span class="token operator">=</span>/usr/local/mysql/bin/mysqld_safe
<span class="token assign-left variable">mysqladmin</span><span class="token operator">=</span>/usr/local/mysql/bin/mysqladmin
<span class="token assign-left variable">log</span><span class="token operator">=</span>/mnt/databases/mysql/mysqld_multi.log

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql-admin
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql
<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span>NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

<span class="token punctuation">[</span>mysqld3306<span class="token punctuation">]</span>
<span class="token assign-left variable">mysqld</span><span class="token operator">=</span>mysqld
<span class="token assign-left variable">mysqladmin</span><span class="token operator">=</span>mysqladmin
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/mnt/databases/mysql/mysql_3306/data
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/tmp/mysql_3306.sock
log-output<span class="token operator">=</span>file
<span class="token assign-left variable">slow_query_log</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">slow_query_log_file</span><span class="token operator">=</span>/mnt/databases/mysql/mysql_3306/log/slow.log
log-error<span class="token operator">=</span>/mnt/databases/mysql/mysql_3306/log/error.log
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed
log-bin<span class="token operator">=</span>/mnt/databases/mysql/mysql_3306/log/mysql3306_bin

<span class="token punctuation">[</span>mysqld3307<span class="token punctuation">]</span>
<span class="token assign-left variable">mysqld</span><span class="token operator">=</span>mysqld
<span class="token assign-left variable">mysqladmin</span><span class="token operator">=</span>mysqladmin
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/mnt/databases/mysql/mysql_3307/data
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3307</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">3307</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/tmp/mysql_3307.sock
log-output<span class="token operator">=</span>file
<span class="token assign-left variable">slow_query_log</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">slow_query_log_file</span><span class="token operator">=</span>/mnt/databases/mysql/mysql_3307/log/slow.log
log-error<span class="token operator">=</span>/mnt/databases/mysql/mysql_3307/log/error.log
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed
log-bin<span class="token operator">=</span>/mnt/databases/mysql/mysql_3307/log/mysql3307_bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>cp /usr/local/mysql/support-files/my.cnf /etc/my.cnf</p></blockquote><h2 id="\u521D\u59CB\u5316\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6570\u636E\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8FDB\u5165\u5230mysql\u7684bin\u76EE\u5F55\u4E0B</span>
<span class="token builtin class-name">cd</span> /usr/local/mysql/bin
<span class="token comment">#\u6267\u884C\u521D\u59CB\u53163306\u6570\u636E\u5E93</span>
./mysqld --initialize --user<span class="token operator">=</span>mysql-admin --basedir<span class="token operator">=</span>/usr/local/mysql/ --datadir<span class="token operator">=</span>/mnt/databases/mysql/mysql_3306/data

<span class="token comment">#\u521D\u59CB\u53163307\u6570\u636E\u5E93</span>
./mysqld --initialize --user<span class="token operator">=</span>mysql-admin --basedir<span class="token operator">=</span>/usr/local/mysql/ --datadir<span class="token operator">=</span>/mnt/databases/mysql/mysql_3307/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7BA1\u7406\u591A\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u591A\u5B9E\u4F8B" aria-hidden="true">#</a> \u7BA1\u7406\u591A\u5B9E\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u542F\u52A8\u5168\u90E8\u5B9E\u4F8B\uFF1A</span>
/usr/local/mysql/bin/mysqld_multi start

<span class="token comment">#\u67E5\u770B\u5168\u90E8\u5B9E\u4F8B\u72B6\u6001\uFF1A</span>
/usr/local/mysql/bin/mysqld_multi report 

<span class="token comment">#\u542F\u52A8\u5355\u4E2A\u5B9E\u4F8B\uFF1A</span>
/usr/local/mysql/bin/mysqld_multi start <span class="token number">3306</span> 

<span class="token comment">#\u505C\u6B62\u5355\u4E2A\u5B9E\u4F8B\uFF1A</span>
/usr/local/mysql/bin/mysqld_multi stop <span class="token number">3306</span> 

<span class="token comment">#\u67E5\u770B\u5355\u4E2A\u5B9E\u4F8B\u72B6\u6001\uFF1A</span>
/usr/local/mysql/bin/mysqld_multi report <span class="token number">3306</span> 

<span class="token comment">#\u505C\u6B62\u5B9E\u4F8B\u547D\u4EE4\u5931\u6548\u65F6\uFF0C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
mysqladmin -u root -p -S /tmp/mysql_3306.sock <span class="token function">shutdown</span>
Enter password:

<span class="token comment">#\u67E5\u770B\u542F\u52A8\u8FDB\u7A0B</span>
<span class="token function">netstat</span> -tlnap <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u4E34\u65F6\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E34\u65F6\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u4E34\u65F6\u5BC6\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u9010\u4E00\u767B\u5F55mysql\uFF0C\u8F93\u5165\u4E34\u65F6\u5BC6\u7801\u767B\u5F55\uFF1B</span>
mysql -S /tmp/mysql_3306.sock -p
Enter password:
<span class="token comment">#\u8BBE\u7F6E\u65B0\u5BC6\u7801</span>
<span class="token builtin class-name">set</span> password <span class="token keyword">for</span> root@<span class="token string">&#39;localhost&#39;</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
flush privileges<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><hr><h2 id="\u4E3B\u4ECE" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u4ECE" aria-hidden="true">#</a> \u4E3B\u4ECE</h2><h3 id="\u914D\u7F6E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4FEE\u6539" aria-hidden="true">#</a> \u914D\u7F6E\u4FEE\u6539</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6253\u5F00\u914D\u7F6E\u6587\u4EF6my.cnf</span>
<span class="token function">vim</span> /usr/local/mysql/support-files/my.cnf
<span class="token comment">#\u5728 \u4E3B\u5E93[mysqld3306] \u4E0B\u589E\u52A0\u914D\u7F6E\uFF0C\u5FFD\u7565\u540C\u6B65\u7684\u6570\u636E\u5E93\u540D\u79F0\uFF1B</span>
binlog-ignore-db<span class="token operator">=</span>mysql
binlog-ignore-db<span class="token operator">=</span>performance_schema
binlog-ignore-db<span class="token operator">=</span>sys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5173\u95ED3306\uFF0C\u542F\u52A83306\uFF1B3307\u6CA1\u6709\u4FEE\u6539\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u91CD\u542F\uFF1B</span>
mysqladmin -u root -p -S /tmp/mysql_3306.sock <span class="token function">shutdown</span>
mysqld_multi start <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743" aria-hidden="true">#</a> \u6388\u6743</h3><p>\u4E3B\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grant replication slave on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;127.0.0.1&#39;</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u6388\u6743\u540E\u9700\u8981\u5237\u65B0\u540E\uFF0C\u624D\u80FD\u751F\u6548\uFF1B</span>
flush privileges<span class="token punctuation">;</span> 
<span class="token comment">#\u67E5\u770B\u4E3B\u5E93\u6388\u6743\u72B6\u6001</span>
show master status<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tva1.sinaimg.cn/large/007F3CC8ly1h1oaj3c3y7j30nr0nx7pp.jpg" alt="image" loading="lazy"></p><p>\u4ECE\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6CE8\u610F\uFF1A\u4ECE\u5E93\u7684\u51E0\u4E2A\u53C2\u6570\u4E00\u5B9A\u8981\u548C\u4E3B\u5E93\u7684\u4FDD\u6301\u4E00\u81F4</span>
change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span>,master_user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span>,master_password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>,master_log_file<span class="token operator">=</span><span class="token string">&#39;mysql3306-bin.000006&#39;</span>,master_log_pos<span class="token operator">=</span><span class="token number">597</span><span class="token punctuation">;</span>
<span class="token comment">#\u542F\u52A8\u4E3B\u4ECE\u62F7\u8D1D</span>
start slave<span class="token punctuation">;</span> 
<span class="token comment">#\u67E5\u770B\u62F7\u8D1D\u72B6\u6001</span>
show slave status<span class="token punctuation">;</span>
 <span class="token comment">#\u6E05\u9664\u6388\u6743\uFF0C\u6388\u6743\u4FE1\u606F\u4E5F\u88AB\u6E05\u9664\u6389</span>
reset slave all<span class="token punctuation">;</span>
<span class="token comment">#\u67E5\u770B\u72B6\u6001</span>
show slave status <span class="token punctuation">\\</span>G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u68C0\u9A8C</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Slave_IO_Running: Yes
Slave_SQL_Running: Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9644\u52A0" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0" aria-hidden="true">#</a> \u9644\u52A0</h2><p>\u5EFA\u7ACB\u4ECE\u5E93\u53EA\u8BFB\u8D26\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GRANT SElECT ON *.* TO <span class="token string">&#39;root_readonly&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>
<span class="token comment">#\u6267\u884C\u5237\u65B0\uFF0C\u5237\u65B0\u540E\uFF1B</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function g(h,y){const a=l("ExternalLinkIcon");return i(),t("div",null,[c,d,m,s("blockquote",null,[s("p",null,[u,s("a",v,[b,o(a)])])]),k])}var f=e(p,[["render",g],["__file","mysql-master-slave.html.vue"]]);export{f as default};
