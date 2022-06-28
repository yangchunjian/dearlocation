<template><div><p>Docker</p>
<!-- more -->
<p>10道不得不会的 Docker 面试题</p>
<p>我是DearLocation，专注于面试、副业，技术人的成长记录。</p>
<p>以下是 Docker 面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。<strong>DearLocation</strong>在这里整理这些容易忘记的重点知识及<strong>解答</strong>，<code v-pre>建议收藏，经常温习查阅</code>。</p>
<p>评论区见</p>
<p>@[toc]</p>
<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<p>以下是一些docker的基础面试题，下一篇docker进阶面试题。本系列《最少必要面试题》</p>
<h3 id="_1-什么是-docker-容器" tabindex="-1"><a class="header-anchor" href="#_1-什么是-docker-容器" aria-hidden="true">#</a> 1. 什么是 Docker 容器？</h3>
<p>Docker 是一种流行的开源软件平台，可简化创建、管理、运行和分发应用程序的过程。它使用容器来打包应用程序及其依赖项。我们也可以将容器视为 Docker 镜像的运行时实例。</p>
<h3 id="_2-docker-和虚拟机有什么不同" tabindex="-1"><a class="header-anchor" href="#_2-docker-和虚拟机有什么不同" aria-hidden="true">#</a> 2. Docker 和虚拟机有什么不同？</h3>
<p>Docker 是轻量级的沙盒，在其中运行的只是应用，虚拟机里面还有额外的系统。</p>
<h3 id="_3-什么是-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-什么是-dockerfile" aria-hidden="true">#</a> 3. 什么是 DockerFile？</h3>
<p>Dockerfile 是一个文本文件，其中包含我们需要运行以构建 Docker 镜像的所有命令，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。Docker 使用 Dockerfile 中的指令自动构建镜像。我们可以 <code v-pre>docker build</code> 用来创建按顺序执行多个命令行指令的自动构建。</p>
<p><strong>一些最常用的指令如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>FROM ：使用 FROM 为后续的指令建立基础映像。在所有有效的 Dockerfile 中， FROM 是第一条指令。

LABEL： LABEL 指令用于组织项目映像，模块，许可等。在自动化布署方面 LABEL 也有很大用途。在 LABEL 中指定一组键值对，可用于程序化配置或布署 Docker 。

RUN： RUN 指令可在映像当前层执行任何命令并创建一个新层，用于在映像层中添加功能层，也许最来的层会依赖它。

CMD： 使用 CMD 指令为执行的容器提供默认值。在 Dockerfile 文件中，若添加多个 CMD 指令，只有最后的 CMD 指令运行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-使用docker-compose时如何保证容器a先于容器b运行" tabindex="-1"><a class="header-anchor" href="#_4-使用docker-compose时如何保证容器a先于容器b运行" aria-hidden="true">#</a> 4. 使用Docker Compose时如何保证容器A先于容器B运行？</h3>
<blockquote>
<p>Docker Compose 是一个用来定义和运行复杂应用的Docker工具。一个使用Docker容器的应用，通常由多个容器组成。使用Docker Compose不再需要使用shell脚本来启动容器。Compose 通过一个配置文件来管理多个Docker容器。简单理解：Docker Compose 是docker的管理工具。</p>
</blockquote>
<p>Docker Compose 在继续下一个容器之前不会等待容器准备就绪。为了控制我们的执行顺序，我们可以使用“<strong>取决于</strong>”条件，<code v-pre>depends_on</code> 。这是在 docker-compose.yml 文件中使用的示例</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"2.4"</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

 <span class="token key atrule">backend</span><span class="token punctuation">:</span>

   <span class="token key atrule">build</span><span class="token punctuation">:</span> .    <span class="token comment"># 构建自定义镜像</span>

   <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>

     <span class="token punctuation">-</span> db

 <span class="token key atrule">db</span><span class="token punctuation">:</span>

   <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code v-pre>docker-compose up</code> 命令将按照我们指定的依赖顺序启动和运行服务。</p>
<h3 id="_5-一个完整的docker由哪些部分组成" tabindex="-1"><a class="header-anchor" href="#_5-一个完整的docker由哪些部分组成" aria-hidden="true">#</a> 5. 一个完整的Docker由哪些部分组成?</h3>
<ul>
<li>DockerClient 客户端</li>
<li>Docker Daemon 守护进程</li>
<li>Docker Image 镜像</li>
<li>DockerContainer 容器</li>
</ul>
<h3 id="_6-docker常用命令" tabindex="-1"><a class="header-anchor" href="#_6-docker常用命令" aria-hidden="true">#</a> 6. docker常用命令</h3>
<blockquote>
<p>命令建议在本地安装做一个实操，记忆会更深刻。
也可以克隆基于docker的俩万（springboot+vue）项目练手，提供视频+完善文档。地址：<a href="https://gitee.com/yangchunjian/liawan-vue" target="_blank" rel="noopener noreferrer">https://gitee.com/yangchunjian/liawan-vue<ExternalLinkIcon/></a></p>
</blockquote>
<ol>
<li>查看本地主机的所用镜像：`docker images``</li>
<li>搜索镜像：`docker search mysql``</li>
<li>下载镜像：<code v-pre>docker pull mysql</code>，没写 tag 就默认下载最新的 lastest</li>
<li>下载指定版本的镜像：`docker pull mysql:5.7``</li>
<li>删除镜像：`docker rmi -f 镜像id 镜像id 镜像id``</li>
</ol>
<h3 id="_7-描述-docker-容器的生命周期。" tabindex="-1"><a class="header-anchor" href="#_7-描述-docker-容器的生命周期。" aria-hidden="true">#</a> 7. 描述 Docker 容器的生命周期。</h3>
<p>Docker 容器经历以下阶段：</p>
<ul>
<li>创建容器</li>
<li>运行容器</li>
<li>暂停容器（可选）</li>
<li>取消暂停容器（可选）</li>
<li>启动容器</li>
<li>停止容器</li>
<li>重启容器</li>
<li>杀死容器</li>
<li>销毁容器</li>
</ul>
<h3 id="_8-docker容器之间怎么隔离" tabindex="-1"><a class="header-anchor" href="#_8-docker容器之间怎么隔离" aria-hidden="true">#</a> 8. docker容器之间怎么隔离?</h3>
<blockquote>
<p>这是一道涉猎很广泛的题目，理解性阅读。</p>
</blockquote>
<p>Linux中的PID、IPC、网络等资源是全局的，而Linux的NameSpace机制是一种资源隔离方案，在该机制下这些资源就不再是全局的了，而是属于某个特定的NameSpace，各个NameSpace下的资源互不干扰。</p>
<p>​​**Namespace实际上修改了应用进程看待整个计算机“视图”，即它的“视线”被操作系统做了限制，只能“看到”某些指定的内容​​。**对于宿主机来说，这些被“隔离”了的进程跟其他进程并没有区别。</p>
<p>虽然有了NameSpace技术可以实现资源隔离，但进程还是可以不受控的访问系统资源，比如CPU、内存、磁盘、网络等，为了控制容器中进程对资源的访问，Docker采用control groups技术(也就是cgroup)，有了cgroup就可以控制容器中进程对系统资源的消耗了，比如你可以限制某个容器使用内存的上限、可以在哪些CPU上运行等等。</p>
<p>有了这两项技术，容器看起来就真的像是独立的操作系统了。</p>
<blockquote>
<p>强烈建议大家实操，才能更好的理解docker。</p>
</blockquote>
<p>低谷蓄力</p>
<p><strong>《最少必要面试题》</strong></p>
<p><a href="https://javapub.blog.csdn.net/article/details/122011870" target="_blank" rel="noopener noreferrer">10道不得不会的Java基础面试题<ExternalLinkIcon/></a></p>
<p><a href="https://javapub.blog.csdn.net/article/details/122087243" target="_blank" rel="noopener noreferrer">10道不得不会的MySQL基础面试题<ExternalLinkIcon/></a></p>
<p><a href="https://javapub.blog.csdn.net/article/details/122159231" target="_blank" rel="noopener noreferrer">10道不得不会的Java并发基础面试题<ExternalLinkIcon/></a></p>
<p><a href="https://javapub.blog.csdn.net/article/details/124008535" target="_blank" rel="noopener noreferrer">10道不得不会的JVM面试题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_40374604/article/details/123761794" target="_blank" rel="noopener noreferrer">10道不得不会的ElasticSearch面试题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_40374604/category_11740063.html" target="_blank" rel="noopener noreferrer">10道不得不会的Spring面试题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_40374604/category_11740063.html" target="_blank" rel="noopener noreferrer">10道不得不会的 Redis 面试题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_40374604/category_11740063.html" target="_blank" rel="noopener noreferrer">10道不得不会的 Kafka 面试题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_40374604/category_11740063.html" target="_blank" rel="noopener noreferrer">10道不得不会的 MyBatis 面试题<ExternalLinkIcon/></a></p>
</div></template>
