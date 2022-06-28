<template><div><p>Java并发</p>
<!-- more -->
<p>10道不得不会的Java并发基础面试题</p>
<p>以下都是Java的并发基础面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。<strong>DearLocation</strong>在这里整理这些容易忘记的重点知识及<strong>解答</strong>，<code v-pre>建议收藏，经常温习查阅</code>。</p>
<p>评论区见</p>
<p>@[toc]</p>
<hr>
<h2 id="_1-start-方法和run-方法的区别" tabindex="-1"><a class="header-anchor" href="#_1-start-方法和run-方法的区别" aria-hidden="true">#</a> 1. start()方法和run()方法的区别</h2>
<p>如果只是调用 run() 方法，那么代码还是同步执行的，必须等待一个线程的run()方法里面的代码全部执行完毕之后，另外一个线程才可以执行其run()方法里面的代码。</p>
<p>只有调用了start()方法，才会表现出多线程的特性，不同线程的run()方法里面的代码交替执行。</p>
<p>参考图：</p>
<p><img src="https://img-blog.csdnimg.cn/c9b8939fe6274e508853acba1f1ee213.png" alt="在这里插入图片描述" loading="lazy"></p>
<hr>
<h2 id="_2-volatile关键字的作用" tabindex="-1"><a class="header-anchor" href="#_2-volatile关键字的作用" aria-hidden="true">#</a> 2. volatile关键字的作用</h2>
<p>volatile <code v-pre>英 [ˈvɒlətaɪl]</code> ，第一个想到的一定是<strong>保证内存可见性</strong>（Memory Visibility）。可见性是性对于线程而言。</p>
<p><img src="https://img-blog.csdnimg.cn/dbb024baa3144f8b9abc1b241a6474a6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmF2YVB1Yi1yb2RlcnQ=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy">
上图是Java内存模型，所有线程的共享变量都放在主内存中，每一个线程都有一个独有的工作内存，每个线程不直接操作在主内存中的变量，而是将主内存上变量的副本放进自己的工作内存中，只操作工作内存中的数据。当修改完毕后，再把修改后的结果放回到主内存中。每个线程都只操作自己工作内存中的变量，无法直接访问对方工作内存中的变量，线程间变量值的传递需要通过主内存来完成。</p>
<p>很明显，在并发环境下一定会发生脏数据问题。</p>
<p>使用volatile变量能够保证:</p>
<ol>
<li>每次读取前必须先从主内存刷新最新的值。</li>
<li>每次写入后必须立即同步回主内存当中。</li>
</ol>
<blockquote>
<p>也就是说，volatile关键字修饰的变量看到的随时是自己的最新值。</p>
</blockquote>
<p><strong>防止指令重排</strong></p>
<p>在基于偏序关系的Happens-Before内存模型中，指令重排技术大大提高了程序执行效率。但是也引入一个新问题：被部分初始化的对象</p>
<p>例子：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>创建一个对象
instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它并不是一个原子操作。事实上，它可以”抽象“为下面几条JVM指令：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>memory <span class="token operator">=</span> <span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//1：分配对象的内存空间</span>
<span class="token function">initInstance</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//2：初始化对象</span>
instance <span class="token operator">=</span> memory<span class="token punctuation">;</span>      <span class="token comment">//3：设置instance指向刚分配的内存地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面操作2依赖于操作1，但是操作3并不依赖于操作2，所以JVM可以以“优化”为目的对它们进行重排序，经过重排序后如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>memory <span class="token operator">=</span> <span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//1：分配对象的内存空间</span>
instance <span class="token operator">=</span> memory<span class="token punctuation">;</span>      <span class="token comment">//3：设置instance指向刚分配的内存地址（此时对象还未初始化）</span>
<span class="token function">initInstance</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//2：初始化对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到指令重排之后，操作 3 排在了操作 2 之前，即引用instance指向内存memory时，这段崭新的内存还没有初始化。由于instance已经指向了一块内存空间，从而返回 instance!=null，用户得到了没有完成初始化的“半个”单例。</p>
<p>但是有一点：volatile不保证原子性。</p>
<blockquote>
<p>这里有一篇生产环境使用volatile的例子：<a href="https://mp.weixin.qq.com/s/s1cwut9WvUSrMYw_6UK3sg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/s1cwut9WvUSrMYw_6UK3sg<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<h2 id="_3-sleep方法和wait方法有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-sleep方法和wait方法有什么区别" aria-hidden="true">#</a> 3. sleep方法和wait方法有什么区别</h2>
<p>要了解sleep和wait，首先需要了解Java线程的6种状态。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>#下面是<span class="token class-name">Java</span>线程的<span class="token number">6</span>种状态
<span class="token number">1.</span> 初始<span class="token punctuation">(</span>NEW<span class="token punctuation">)</span>：新创建了一个线程对象，但还没有调用<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法。
<span class="token number">2.</span> 运行<span class="token punctuation">(</span>RUNNABLE<span class="token punctuation">)</span>：<span class="token class-name">Java</span>线程中将就绪（ready）和运行中（running）两种状态笼统的称为“运行”。
线程对象创建后，其他线程<span class="token punctuation">(</span>比如main线程）调用了该对象的<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法。该状态的线程位于可运行线程池中，等待被线程调度选中，获取CPU的使用权，此时处于就绪状态（ready）。就绪状态的线程在获得CPU时间片后变为运行中状态（running）。
<span class="token number">3.</span> 阻塞<span class="token punctuation">(</span>BLOCKED<span class="token punctuation">)</span>：表示线程阻塞于锁。
<span class="token number">4.</span> 等待<span class="token punctuation">(</span>WAITING<span class="token punctuation">)</span>：进入该状态的线程需要等待其他线程做出一些特定动作（通知或中断）。
<span class="token number">5.</span> 超时等待<span class="token punctuation">(</span>TIMED_WAITING<span class="token punctuation">)</span>：该状态不同于WAITING，它可以在指定的时间后自行返回。
<span class="token number">6.</span> 终止<span class="token punctuation">(</span>TERMINATED<span class="token punctuation">)</span>：表示该线程已经执行完毕。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>sleep</strong> 休眠方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">long</span> ms<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法会使当前线程进入阻塞状态指定毫秒，当阻塞指定毫秒后，当前线程会重新进入Runnable状态，等待划分时间片。</p>
<p>sleep方法属于Thread类中方法，表示让一个线程进入睡眠状态，等待一定的时间之后，自动醒来进入到可运行状态，不会马上进入运行状态，因为线程调度机制恢复线程的运行也需要时间，一个线程对象调用了sleep方法之后，并不会释放他所持有的所有对象锁，所以也就不会影响其他进程对象的运行。</p>
<p><strong>wait</strong> 方法一般是跟notify方法连用的</p>
<p>多线程之间需要协调工作。如果条件不满足则等待。当条件满足时，等待该条件的线程将被唤醒。在Java中，这个机制实现依赖于wait/notify或wait/notifyAll。</p>
<p>object.wait()让当前线程进入不可运行状态，如sleep()一样，但不同的是wait方法从一个对象调用，而不是从一个线程调用；我们称这个对象为“锁定对象（lockObj）”。在lockObj.wait()被调用之前，当前线程必须在lockObj上同步（synchronize）；然后调用wait()后释放这个锁，并将线程增加到与lockObj相关的“等待名单（wait list）”。然后，另一个在同一个lockObj锁定（synchronize）的方法可以调用lockObj.nofity()。这会唤醒原来等待的线程。基本上，wait() / notify()就像sleep() / interrupt()，只是活动线程不需要直接指向一个睡眠线程，他们只需要共享锁对象（lockObj）。</p>
<p>到这里你是否明白这个问题，如果不明白来DearLocation，后续一篇代码分析，马上安排。</p>
<hr>
<h2 id="_4-如何停止一个正在运行的线程" tabindex="-1"><a class="header-anchor" href="#_4-如何停止一个正在运行的线程" aria-hidden="true">#</a> 4. 如何停止一个正在运行的线程？</h2>
<p>最直观的一定是 Thread.stop，但是它是不推荐的，并且已经废弃。看一下官方说明
<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/concurrency/threadPrimitiveDeprecation.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/8/docs/technotes/guides/concurrency/threadPrimitiveDeprecation.html<ExternalLinkIcon/></a></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token operator">*</span>   	<span class="token class-name">This</span> method is inherently <span class="token class-name"><span class="token namespace">unsafe<span class="token punctuation">.</span></span>   Stopping</span> a thread <span class="token keyword">with</span> 
<span class="token operator">*</span>       <span class="token class-name">Thread</span><span class="token punctuation">.</span> stop causes it <span class="token keyword">to</span> <span class="token namespace">unlock</span> all of the monitors that it 
<span class="token operator">*</span>       has locked <span class="token punctuation">(</span>as a natural consequence of the unchecked 
<span class="token operator">*</span>       <span class="token generics"><span class="token punctuation">&lt;</span>code<span class="token punctuation">></span></span><span class="token class-name">ThreadDeath</span><span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span> exception propagating up the stack<span class="token punctuation">)</span><span class="token punctuation">.</span>   <span class="token class-name">If</span> 
<span class="token operator">*</span>       any of the objects previously <span class="token keyword">protected</span> by these monitors were in 
<span class="token operator">*</span>       an inconsistent state<span class="token punctuation">,</span> the damaged objects become visible <span class="token keyword">to</span> 
<span class="token operator">*</span>       other threads<span class="token punctuation">,</span> potentially resulting in arbitrary <span class="token class-name"><span class="token namespace">behavior<span class="token punctuation">.</span></span>   Many</span> 
<span class="token operator">*</span>       <span class="token keyword">uses</span> <span class="token namespace">of</span> <span class="token generics"><span class="token punctuation">&lt;</span>code<span class="token punctuation">></span></span>stop<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span> should be replaced by code that simply 
<span class="token operator">*</span>       modifies some variable <span class="token keyword">to</span> <span class="token namespace">indicate</span> that the target thread should 
<span class="token operator">*</span>       stop <span class="token class-name"><span class="token namespace">running<span class="token punctuation">.</span></span>   The</span> target thread should check <span class="token keyword">this</span> variable 
<span class="token operator">*</span>       regularly<span class="token punctuation">,</span> and <span class="token keyword">return</span> from its run method in an orderly fashion 
<span class="token operator">*</span>       <span class="token keyword">if</span> the variable indicates that it is <span class="token keyword">to</span> <span class="token namespace">stop</span> <span class="token class-name"><span class="token namespace">running<span class="token punctuation">.</span></span>   If</span> the 
<span class="token operator">*</span>       target thread waits <span class="token keyword">for</span> <span class="token keyword">long</span> periods <span class="token punctuation">(</span>on a condition variable<span class="token punctuation">,</span> 
<span class="token operator">*</span>       <span class="token keyword">for</span> example<span class="token punctuation">)</span><span class="token punctuation">,</span> the <span class="token generics"><span class="token punctuation">&lt;</span>code<span class="token punctuation">></span></span>interrupt<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span> method should be used <span class="token keyword">to</span> 
<span class="token operator">*</span>       interrupt the wait<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结：
简单来说，Thread.stop()不安全，已不再建议使用。</p>
<p><strong>方法一：</strong></p>
<p>使用 interrupt 方法中断线程。</p>
<p>interrupt()方法的使用效果并不像for+break语句那样，马上就停止循环。调用interrupt方法是在当前线程中打了一个停止标志，并不是真的停止线程。</p>
<p>需要 this.isInterrupted(): 测试线程是否真的已经中断。</p>
<p><strong>方法二：</strong></p>
<p>最好的一种方法，使用标志位停止。</p>
<p>run() 方法中做标识符，保证优雅的停止服务。</p>
<hr>
<h2 id="_5-java如何实现多线程之间的通讯和协作-如何在两个线程间共享数据" tabindex="-1"><a class="header-anchor" href="#_5-java如何实现多线程之间的通讯和协作-如何在两个线程间共享数据" aria-hidden="true">#</a> 5. java如何实现多线程之间的通讯和协作？(如何在两个线程间共享数据？)</h2>
<p><strong>volatile关键字方式</strong></p>
<p>volatile有两大特性，一是可见性，二是有序性，禁止指令重排序，其中可见性就是可以让线程之间进行通信。</p>
<p><strong>等待/通知机制</strong></p>
<p>等待通知机制是基于wait和notify方法来实现的，在一个线程内调用该线程锁对象的wait方法，线程将进入等待队列进行等待直到被通知或者被唤醒。</p>
<p>也就是通过<strong>等待/通知机制</strong> 让多个线程协作</p>
<p><strong>join方式</strong></p>
<p>join其实合理理解成是线程合并，当在一个线程调用另一个线程的join方法时，当前线程阻塞等待被调用join方法的线程执行完毕才能继续执行，所以join的好处能够保证线程的执行顺序，但是如果调用线程的join方法其实已经失去了并行的意义，虽然存在多个线程，但是本质上还是串行的，最后join的实现其实是基于等待通知机制的。</p>
<p><strong>threadLocal方式</strong></p>
<p>threadLocal方式的线程通信，不像以上三种方式是多个线程之间的通信，它更像是一个线程内部的通信，将当前线程和一个map绑定，在当前线程内可以任意存取数据，减省了方法调用间参数的传递。</p>
<hr>
<h2 id="_6-什么是threadlocal" tabindex="-1"><a class="header-anchor" href="#_6-什么是threadlocal" aria-hidden="true">#</a> 6. 什么是ThreadLocal?</h2>
<p>定义：线程局部变量是局限于线程内的变量，属于线程自身所有，不在多个线程间共享。java提供 ThreadLocal类 来支持线程局部变量，是一个实现线程安全的方式。</p>
<p>作用：ThreadLocal 是一种以空间换时间的做法，在每一个 Thread 里面维护了一个 ThreadLocal.ThreadLocalMap 把数据进行隔离，数据不共享，自然就没有线程安全方面的问题了。</p>
<hr>
<h2 id="_7-java-中-countdownlatch-和-cyclicbarrier-有什么不同" tabindex="-1"><a class="header-anchor" href="#_7-java-中-countdownlatch-和-cyclicbarrier-有什么不同" aria-hidden="true">#</a> 7. Java 中 CountDownLatch 和 CyclicBarrier 有什么不同？</h2>
<p><strong>概念：</strong></p>
<p><strong>CountDownLatch</strong> 是一个同步的辅助类，允许一个或多个线程，等待其他一组线程完成操作，再继续执行。简单来说：CountDownLatch 是一个计数器，可以保证线程之间的顺序执行把线程从并发状态调整为串行状态保证了线程的执行顺序。(只可以使用一次)</p>
<p><strong>CyclicBarrier</strong> 是一个同步的辅助类，允许一组线程相互之间等待，达到一个共同点，再继续执行。典型场景：可以用于多线程计算数据，最后合并计算结果。（可以多次使用）</p>
<p>分享一个直观的代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dearlocation<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">CountDownLatch</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author: DearLocation
 * @License: https://github.com/yangchunjian/
 * @Contact: https://dearlocation.blog.csdn.net/
 * @Date: 2022/1/1 16:50
 * @Version: 1.0
 * @Description: countDownLatch 可以保证线程之间的顺序执行把线程从并发状态调整为串行状态保证了线程的执行顺序。
 * demo效果：当打印完B，再打印C。
 */</span>

<span class="token keyword">class</span> <span class="token class-name">ThreadA</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">CountDownLatch</span> down<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadA</span><span class="token punctuation">(</span><span class="token class-name">CountDownLatch</span> down<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>down <span class="token operator">=</span> down<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            down<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//相当于wait(),调用await()方法的线程会被挂起，它会等待直到count值为0才继续执行</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ThreadB</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">CountDownLatch</span> down<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span><span class="token class-name">CountDownLatch</span> down<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>down <span class="token operator">=</span> down<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>down<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        down<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将count值减1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CountDownLatch</span> down <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建1个计数器</span>
        <span class="token keyword">new</span> <span class="token class-name">ThreadA</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*输出
A
B
C
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>roundyuan<span class="token punctuation">.</span>fanggateway<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">CyclicBarrier</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author: DearLocation
 * @License: https://github.com/yangchunjian/
 * @Contact: https://dearlocation.blog.csdn.net/
 * @Date: 2022/1/2 13:42
 * @Version: 1.0
 * @Description: CyclicBarrier
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CyclicBarrierDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">TaskThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

        <span class="token class-name">CyclicBarrier</span> barrier<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">TaskThread</span><span class="token punctuation">(</span><span class="token class-name">CyclicBarrier</span> barrier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>barrier <span class="token operator">=</span> barrier<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 到达栅栏 A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                barrier<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 冲破栅栏 A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 到达栅栏 B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                barrier<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 冲破栅栏 B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> threadNum <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token class-name">CyclicBarrier</span> barrier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CyclicBarrier</span><span class="token punctuation">(</span>threadNum<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 完成最后任务"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadNum<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">TaskThread</span><span class="token punctuation">(</span>barrier<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Thread-3 到达栅栏 A
Thread-1 到达栅栏 A
Thread-4 到达栅栏 A
Thread-2 到达栅栏 A
Thread-0 到达栅栏 A
Thread-2 完成最后任务
Thread-2 冲破栅栏 A
Thread-0 冲破栅栏 A
Thread-4 冲破栅栏 A
Thread-3 冲破栅栏 A
Thread-1 冲破栅栏 A
Thread-4 到达栅栏 B
Thread-0 到达栅栏 B
Thread-2 到达栅栏 B
Thread-1 到达栅栏 B
Thread-3 到达栅栏 B
Thread-3 完成最后任务
Thread-3 冲破栅栏 B
Thread-0 冲破栅栏 B
Thread-4 冲破栅栏 B
Thread-1 冲破栅栏 B
Thread-2 冲破栅栏 B
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网上看到一个比较形象一个例子：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CountDownLatch：
宿管阿姨，晚上关宿舍大门睡觉，需要等到所有学生回寝，才能关门睡觉，学生之间不用相互等待，回寝就能睡觉。	（学生就是各个线程，宿管阿姨就是监听CountDownLatch为0后要执行的。）

CyclicBarrier：
家庭聚餐，等待家庭成员到齐才能开饭，家庭成员之间需要相互等待，直到最后一个到达，才能同时开饭。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_8-如何避免死锁" tabindex="-1"><a class="header-anchor" href="#_8-如何避免死锁" aria-hidden="true">#</a> 8. 如何避免死锁？</h2>
<p><img src="https://img-blog.csdnimg.cn/20190729214659783.png" alt="" loading="lazy">
从上图我们就可以看出，产生死锁就是俩个或多个线程在申请资源时，自己需要的资源别别人持有、并阻塞。所以导致死锁。</p>
<p><strong>如何解决：</strong></p>
<ol>
<li>减小锁的范围，尽量保证之锁定自己需要的资源，减小交叉持有资源情况</li>
<li>但是有些时候不得不持有多个资源，比如<strong>银行转账</strong>，我们必须同时获得两个账户上的锁，才能进行操作，两个锁的申请必须发生交叉。这时我们也可以打破死锁的那个闭环，在涉及到要同时申请两个锁的方法中，总是以相同的顺序来申请锁，比如总是先申请 id 大的账户上的锁 ，然后再申请 id 小的账户上的锁，这样就无法形成导致死锁的那个闭环。</li>
<li>我们知道导致死锁有一个因素是阻塞，所以如果我们不使用默认阻塞的锁，也是可以避免死锁的。我们可以使用 ReentrantLock.tryLock() 方法，在一个循环中，如果 tryLock() 返回失败，那么就释放以及获得的锁，并睡眠一小段时间。这样就打破了死锁的闭环。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>roundyuan<span class="token punctuation">.</span>fanggateway<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">Lock</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">ReentrantLock</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author: DearLocation
 * @License: https://github.com/yangchunjian/
 * @Contact: https://dearlocation.blog.csdn.net/
 * @Date: 2022/1/2 14:38
 * @Version: 1.0
 * @Description: ReentrantLock
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLock</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Lock</span> lock1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Lock</span> lock2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">deathLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>lock1<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token comment">//如果获取成功则执行业务逻辑，如果获取失败，则释放lock1的锁，自旋重新尝试获得锁</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>lock2<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread1：已成功获取 lock1 and lock2 ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                                    lock2<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                            lock1<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread1：获取锁失败，重新获取---"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token comment">//防止发生活锁</span>
                        <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>NANOSECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>lock2<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token comment">//如果获取成功则执行业务逻辑，如果获取失败，则释放lock2的锁，自旋重新尝试获得锁</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>lock1<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread2：已成功获取 lock2 and lock1 ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                                    lock1<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                            lock2<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread2：获取锁失败，重新获取---"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token comment">//防止发生活锁</span>
                        <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>NANOSECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">deathLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说起死锁，银行家算法非常有必要了解：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>银行家算法（Banker’s Algorithm）是一个避免死锁（Deadlock）的著名算法，是由艾兹格·迪杰斯特拉在1965年为T.H.E系统设计的一种避免死锁产生的算法。它以银行借贷系统的分配策略为基础，判断并保证系统的安全运行。
1、操作系统按照银行家指定的规则为进程分配资源，当进程首次申请资源时，需要测试该进程对资源的最大需求量，如果系统现存的资源可以满足它的最大需求量则按当前的申请资源分配资源，否则就推迟分配；
2、当进程在执行中继续申请资源时，先测试该进程本次申请的资源数，是否超过了该资源剩余的总量，若超过则拒绝分配资源，若能满足则按当前的申请量分配资源，否则也要推迟分配。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考阅读：</p>
<p>如何快速排查死锁？如何避免死锁？
<a href="https://zhuanlan.zhihu.com/p/136294283" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/136294283<ExternalLinkIcon/></a></p>
<hr>
<h2 id="_9-java-中-synchronized-和-reentrantlock-有什么不同" tabindex="-1"><a class="header-anchor" href="#_9-java-中-synchronized-和-reentrantlock-有什么不同" aria-hidden="true">#</a> 9. Java 中 synchronized 和 ReentrantLock 有什么不同？</h2>
<p><strong>等待可中断:</strong></p>
<p>使用synchronized，不能被中断。synchronized 也可以说是Java提供的原子性内置锁机制。内部锁扮演了互斥锁（mutual exclusion lock ，mutex）的角色，一个线程引用锁的时候，别的线程阻塞等待。</p>
<p>使用ReentrantLock。等待了很长时间以后，可以中断等待，转而去做别的事情。</p>
<p><strong>公平锁:</strong></p>
<p>公平锁是指多个线程在等待同一个锁时，必须按照申请的时间顺序来依次获得锁；而非公平锁则不能保证这一点。非公平锁在锁被释放时，任何一个等待锁的线程都有机会获得锁。 synchronized的锁是非公平锁，ReentrantLock默认情况下也是非公平锁，但可以通过带布尔值的构造函数要求使用公平锁。</p>
<p>还有大家已知的俩点：</p>
<ol>
<li>
<p>synchronized是独占锁，加锁和解锁的过程自动进行，易于操作，但不够灵活。ReentrantLock也是独占锁，加锁和解锁的过程需要手动进行，不易操作，但非常灵活。</p>
</li>
<li>
<p>synchronized可重入，因为加锁和解锁自动进行，不必担心最后是否释放锁；ReentrantLock也可重入，但加锁和解锁需要手动进行，且次数需一样，否则其他线程无法获得锁。</p>
</li>
</ol>
<hr>
<h2 id="_10-有三个线程-t1-t2-t3-怎么确保它们按顺序执行" tabindex="-1"><a class="header-anchor" href="#_10-有三个线程-t1-t2-t3-怎么确保它们按顺序执行" aria-hidden="true">#</a> 10. 有三个线程 T1，T2，T3，怎么确保它们按顺序执行？</h2>
<p><strong>方法1：</strong></p>
<p>线程内部顺序调用，T1、T2、T3。这个可能不是要考察的点，但也是一个方案。</p>
<p><strong>方法2：</strong></p>
<p>join()方法用于将线程由 ”并行“变成”串行“，它用于等待其他线程的终止，在当前线程掉用了join()方法，那么当前线程将进入阻塞状态，等到另一个线程结束，当前线程再由阻塞状态转变成就绪状态，等待CPU的使用权。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dearlocation<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author: DearLocation
 * @License: https://github.com/yangchunjian/
 * @Contact: https://dearlocation.blog.csdn.net/
 * @Date: 2022/1/2 15:20
 * @Version: 1.0
 * @Description:
 */</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadA</span> threadA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadB</span> threadB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span>threadA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadC</span> threadC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadC</span><span class="token punctuation">(</span>threadB<span class="token punctuation">)</span><span class="token punctuation">;</span>

        threadA<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadB<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadC<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ThreadA</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ThreadB</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> threadA<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO Auto-generated constructor stub</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> threadA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>threadA <span class="token operator">=</span> threadA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            threadA<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// TODO Auto-generated catch block</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ThreadC</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> threadB<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadC</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> threadB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>threadB <span class="token operator">=</span> threadB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            threadB<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// TODO Auto-generated catch block</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信号量方式 java.util.concurrent.Semaphore <code v-pre>英 [ˈseməfɔː(r)]</code>
待研究</p>
<hr>
<p><strong>联系DearLocation:</strong></p>
<ol>
<li>如果需要下载CSDN资料又没有积分可以DearLocation留言，DearLocation帮你下载</li>
</ol>
<h2 id="推荐阅读" tabindex="-1"><a class="header-anchor" href="#推荐阅读" aria-hidden="true">#</a> 推荐阅读：</h2>
<p><RouterLink to="/willbe/java-basics-interview-must.html">【Java基础】10道不得不会的Java基础面试题</RouterLink></p>
<p><a href="java-concurrent-interview-must">【Java并发】10道不得不会的Java并发基础面试题</a></p>
<p><RouterLink to="/willbe/mysql-interview-must.html">【MySQL】10道不得不会的MySQL基础面试题</RouterLink></p>
<p><RouterLink to="/willbe/elasticsearch-interview-must.html">【ElasticSearch】10道不得不会的ElasticSearch面试题</RouterLink></p>
<p><RouterLink to="/willbe/jvm-interview-must.html">【JVM】10道不得不会的JVM面试题</RouterLink></p>
<p><a href="https://github.com/yangchunjian" target="_blank" rel="noopener noreferrer">GItHub<ExternalLinkIcon/></a>|<a href="https://gitee.com/yangchunjian" target="_blank" rel="noopener noreferrer">GitEE<ExternalLinkIcon/></a></p>
</div></template>
