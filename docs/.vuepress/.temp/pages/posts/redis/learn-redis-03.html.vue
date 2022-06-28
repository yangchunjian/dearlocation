<template><div><p>rodert单排学习redis进阶【白银一】</p>
<!-- more -->
<p>redis之白银一</p>
<p><code v-pre>说些题外话，最近帝都疫情又严重，大家都身处时代洪流中，这不是个别人能左右的，希望你能保护好自己，天天开心。</code></p>
<p>@[toc]</p>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<blockquote>
<p>声明：参考来源互联网，有任何争议可以留言。站在前人的肩上，我们才能看的更远。</p>
</blockquote>
<p><code v-pre>前文推荐阅读：</code></p>
<p><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&amp;action=getalbum&amp;album_id=1389304118178840577&amp;subscene=126&amp;scenenote=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzUzNDUyOTY0Nw%3D%3D%26mid%3D2247484050%26idx%3D1%26sn%3D5b76110a20c22959fdbbe1f8f367a709%26chksm%3Dfa921192cde59884bd8c810eba099e3d371f7f77f9481d167e76753739fce4ed0111ca343a35%26scene%3D126%26sessionid%3D1593072726%26key%3D2e8f81eda3e54fad73caa3aec9e546eec371260ca3b30cbb0e97ee0d569806699c0e6ac6bc8f1a0a04974a4f03d1e9ce9ae1bc838e0c06e3ac25f682055eca28db3fc0078943eafe783bb4e5e6816f33%26ascene%3D1%26uin%3DMTk1NDc4MzM2Mg%253D%253D%26devicetype%3DWindows%2B10%2Bx64%26version%3D62090070%26lang%3Dzh_CN%26exportkey%3DAYmXGhQITcjoyZn4ey%252Bxo5Q%253D%26pass_ticket%3DguqlwSdMxkC7XLyNJjPoGkvn0U9XOSyfcXnMeGtUYAn8EAUS8reK0TbBSbbW9Nss%26winzoom%3D1#wechat_redirect" target="_blank" rel="noopener noreferrer">rodert单排学习redis入门【黑铁】<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/S2qZiJG-_HgW3ET9Sl0EAg" target="_blank" rel="noopener noreferrer">yangchunjian 单排学习 redis 进阶【青铜】<ExternalLinkIcon/></a></p>
<h3 id="_1-redis-客户端" tabindex="-1"><a class="header-anchor" href="#_1-redis-客户端" aria-hidden="true">#</a> 1.Redis 客户端</h3>
<h4 id="_1-1-redis-desktop-manager" tabindex="-1"><a class="header-anchor" href="#_1-1-redis-desktop-manager" aria-hidden="true">#</a> 1.1.Redis Desktop Manager</h4>
<p>使用称手的工具，做起事来 <code v-pre>事半功倍</code> ，用 <code v-pre>redis-cli</code> 自然不错。我推荐一款我经常用的 <code v-pre>Redis</code> <strong>可视化</strong>工具，<code v-pre>Redis Desktop Manager</code> 。</p>
<p>启动界面如下：</p>
<p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9zdGF0aWMwMS5pbWdrci5jb20vdGVtcC81MzEyMWYwMGVkNDg0ZTJlYWFkYTZlYWM2NGMzMjE1NC5wbmc?x-oss-process=image/format,png" alt="" loading="lazy"></p>
<p>至于安装方式是 <code v-pre>一键安装</code> 。</p>
<blockquote>
<p>官网下载地址：<a href="https://redisdesktop.com/pricing" target="_blank" rel="noopener noreferrer">https://redisdesktop.com/pricing<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>学生和学习者可以公众号后台回复：【666】，免费获取。</p>
</blockquote>
<h3 id="_2-redis-连接池" tabindex="-1"><a class="header-anchor" href="#_2-redis-连接池" aria-hidden="true">#</a> 2.Redis 连接池</h3>
<h4 id="_2-2-0-连接池" tabindex="-1"><a class="header-anchor" href="#_2-2-0-连接池" aria-hidden="true">#</a> 2.2.0.连接池</h4>
<blockquote>
<p>池技术被广泛使用在系统开发中，像 <code v-pre>JDBC</code> 连接池、线程池等。连连接池是创建和管理一个连接的缓冲池的技术，这些连接准备好被任何需要它们的线程使用。</p>
</blockquote>
<p>在处理一个任务时，我们大多情况要在数毫秒级别就完成，如果重复创建、关闭资源，会占用较长时间和大量系统资源。</p>
<ul>
<li><strong>使用连接池优势</strong></li>
</ul>
<ol>
<li><strong>减少连接创建时间</strong></li>
</ol>
<p>连接在系统初始化时就创建完成，需要时直接从池中取用，减少了时间开销。</p>
<ol start="2">
<li><strong>简化的编程模式</strong></li>
</ol>
<p>当使用连接池时，每一个单独的线程能够像创建了一个自己的 JDBC 连接一样操作。</p>
<ol start="3">
<li><strong>受控的资源使用</strong></li>
</ol>
<p>连接池能够控制一个模块的资源占用率，不会让一个模块资源占用过高，导致整个系统崩溃。</p>
<h4 id="_2-1-redis-连接池" tabindex="-1"><a class="header-anchor" href="#_2-1-redis-连接池" aria-hidden="true">#</a> 2.1.Redis 连接池</h4>
<h5 id="_2-1-1-前言引入" tabindex="-1"><a class="header-anchor" href="#_2-1-1-前言引入" aria-hidden="true">#</a> 2.1.1.前言引入</h5>
<blockquote>
<p><code v-pre>Redis</code> 修炼之连接池篇，前面讲了Redis入门篇：<a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNDUyOTY0Nw==&amp;action=getalbum&amp;album_id=1389304118178840577&amp;subscene=126&amp;scenenote=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzUzNDUyOTY0Nw%3D%3D%26mid%3D2247484050%26idx%3D1%26sn%3D5b76110a20c22959fdbbe1f8f367a709%26chksm%3Dfa921192cde59884bd8c810eba099e3d371f7f77f9481d167e76753739fce4ed0111ca343a35%26scene%3D126%26sessionid%3D1593072726%26key%3D2e8f81eda3e54fad73caa3aec9e546eec371260ca3b30cbb0e97ee0d569806699c0e6ac6bc8f1a0a04974a4f03d1e9ce9ae1bc838e0c06e3ac25f682055eca28db3fc0078943eafe783bb4e5e6816f33%26ascene%3D1%26uin%3DMTk1NDc4MzM2Mg%253D%253D%26devicetype%3DWindows%2B10%2Bx64%26version%3D62090070%26lang%3Dzh_CN%26exportkey%3DAYmXGhQITcjoyZn4ey%252Bxo5Q%253D%26pass_ticket%3DguqlwSdMxkC7XLyNJjPoGkvn0U9XOSyfcXnMeGtUYAn8EAUS8reK0TbBSbbW9Nss%26winzoom%3D1#wechat_redirect" target="_blank" rel="noopener noreferrer">rodert单排学习redis入门【黑铁】<ExternalLinkIcon/></a>、<a href="https://mp.weixin.qq.com/s/S2qZiJG-_HgW3ET9Sl0EAg" target="_blank" rel="noopener noreferrer">yangchunjian 单排学习 redis 进阶【青铜】<ExternalLinkIcon/></a>，对 <code v-pre>Redis</code> 基本数据类型的操作做了讲解。</p>
</blockquote>
<p>在以前没有开源连接池时，很多人自写连接池工具，简单来说就是创建一个集合，存放一批连接，动态维护着。保证每个连接都是有效的。</p>
<h5 id="_2-1-2-redis-连接池" tabindex="-1"><a class="header-anchor" href="#_2-1-2-redis-连接池" aria-hidden="true">#</a> 2.1.2.Redis 连接池</h5>
<blockquote>
<p>本教程涉及到的一些代码都是 Java 语言编写。</p>
</blockquote>
<p><code v-pre>maven</code> 依赖，引入 <code v-pre>pom.xml</code> 文件</p>
<ul>
<li><code v-pre>pom.xml</code></li>
</ul>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>RedisUtil.java</code></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtil</span> <span class="token punctuation">{</span>
    <span class="token comment">//IP 地址</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> ADDR <span class="token operator">=</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">;</span>
    <span class="token comment">//端口号</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> PORT <span class="token operator">=</span> <span class="token number">6379</span><span class="token punctuation">;</span>
    <span class="token comment">//redis 服务端密码</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> PWD <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>
    
    <span class="token comment">//可用连接实例最大数目，默认为 8，若赋值 -1，表示不被限制</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> MAX_TOTAL <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token comment">//控制一个连接池最多有多少个状态为空闲的 jedis 实例，默认值为 8</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> MAX_IDLE <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    
    <span class="token comment">//等待可用连接最大的等待时间，单位 ms，默认值 -1，表示永不超时，若等待超时抛出 JedisConnectionException</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> MAX_WAIT_MILLIS <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
    <span class="token comment">//超时</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> TIMEOUT <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
    
    <span class="token comment">//在用一个 jedis 实例时，是否提前进行 validate 操作，若结果为 true 则 jedis 实例可用</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> TEST_ON_BORROW <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    
    <span class="token comment">//jedis 连接池</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">JedisPool</span> jedisPool <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 初始化 jedis 连接池的静态块,RedisPool 第一次类加载时执行，以后便不再执行
     */</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">JedisPoolConfig</span> conf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPoolConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/*
             * 高版本 jedis jar 中 JedisPoolConfig 没有 setMaxActive 和 setMaxWait 属性，因为官方在高版本			   * 中启用了此方法，用以下两个属性替换
             * maxActive ==> maxTotal
             * maxWait ==> maxWaitMillis
             */</span>
            <span class="token comment">//设置连接实例最大数目</span>
            conf<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span>MAX_TOTAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置最多多少空闲的 jedis 实例</span>
            conf<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span>MAX_IDLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置等待可用连接的最大时间</span>
            conf<span class="token punctuation">.</span><span class="token function">setMaxWaitMillis</span><span class="token punctuation">(</span>MAX_WAIT_MILLIS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置是否提前进行测试借用</span>
            conf<span class="token punctuation">.</span><span class="token function">setTestOnBorrow</span><span class="token punctuation">(</span>TEST_ON_BORROW<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//新建 jedis 连接池</span>
            jedisPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> ADDR<span class="token punctuation">,</span> PORT<span class="token punctuation">,</span> TIMEOUT<span class="token punctuation">,</span> PWD<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
     * 获取 jedis 实例来操作数据，每次使用完要将连接返回给连接池 jedis.close()
     * @return
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token class-name">Jedis</span> <span class="token function">getRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>jedisPool <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//获取 jedis 实例</span>
                <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> jedisPool<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> jedis<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"没有找到 Jedis 连接池！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
     * 用来回收 Jedis 对象资源，用户需要用到此方法释放资源，否则一直占用资源，在新版本中，`returnResource(jedis) 将被废弃不推荐使用，`直接调用 `jedis.close();` 归还连接到连接池。
     * @param Jedis jedis
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">returnJedis</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> jedis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>jedis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//回收 jedis 对象资源</span>
                jedisPool<span class="token punctuation">.</span><span class="token function">returnResource</span><span class="token punctuation">(</span>jedis<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Jedis 被成功回收！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li></li>
</ul>
<blockquote>
<p>本教程纯手打，致力于最实用教程，不需要什么奖励，只希望多多转发支持。
欢迎来我公众号，希望可以结识你，也可以催更，微信搜索：DearLocation</p>
</blockquote>
<blockquote>
<p>有任何问题都可以来谈谈 ！</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/20200625165207975.jpg" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>
