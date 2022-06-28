import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as s,c as i,a as r,b as e,e as l,d as t}from"./app.616f3263.js";const p={},g=l(`<p>kafka</p><p>10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684 Kafka \u9762\u8BD5\u9898</p><p>\u6211\u662FJavaPub\uFF0C\u4E13\u6CE8\u4E8E\u9762\u8BD5\u3001\u526F\u4E1A\uFF0C\u6280\u672F\u4EBA\u7684\u6210\u957F\u8BB0\u5F55\u3002</p><p>\u4EE5\u4E0B\u662F Kafka \u9762\u8BD5\u9898\uFF0C\u76F8\u4FE1\u5927\u5BB6\u90FD\u4F1A\u6709\u79CD\u53CA\u773C\u719F\u53C8\u964C\u751F\u7684\u611F\u89C9\u3001\u770B\u8FC7\u53EF\u80FD\u5728\u77ED\u6682\u7684\u9762\u8BD5\u540E\u53C8\u9A6C\u4E0A\u5FD8\u8BB0\u4E86\u3002<strong>DearLocation</strong>\u5728\u8FD9\u91CC\u6574\u7406\u8FD9\u4E9B\u5BB9\u6613\u5FD8\u8BB0\u7684\u91CD\u70B9\u77E5\u8BC6\u53CA<strong>\u89E3\u7B54</strong>\uFF0C<code>\u5EFA\u8BAE\u6536\u85CF\uFF0C\u7ECF\u5E38\u6E29\u4E60\u67E5\u9605</code>\u3002</p><p>\u8BC4\u8BBA\u533A\u89C1</p><p>@[toc]</p><h1 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h1><p>\u5728\u9762\u8BD5kafka\u4E2D\uFF0C\u4E00\u5B9A\u8981\u4E86\u89E3\u4E3A\u4EC0\u4E48\u8981\u7528kafka\u3001\u53CAkafka\u7684\u67B6\u6784\u7B49\u57FA\u672C\u6982\u5FF5\uFF0C\u624D\u80FD\u5BF9\u9762\u8BD5\u4E2D\u7684\u95EE\u9898\u5F97\u5FC3\u5E94\u624B\u3002</p><h2 id="\u672F\u8BED0-kafka\u4E2D\u7684isr\u3001ar\u53C8\u4EE3\u8868\u4EC0\u4E48-isr\u7684\u4F38\u7F29\u53C8\u6307\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED0-kafka\u4E2D\u7684isr\u3001ar\u53C8\u4EE3\u8868\u4EC0\u4E48-isr\u7684\u4F38\u7F29\u53C8\u6307\u4EC0\u4E48" aria-hidden="true">#</a> \u672F\u8BED0. Kafka\u4E2D\u7684ISR\u3001AR\u53C8\u4EE3\u8868\u4EC0\u4E48\uFF1FISR\u7684\u4F38\u7F29\u53C8\u6307\u4EC0\u4E48</h2><p><strong>ISR</strong>:In-Sync Replicas \u526F\u672C\u540C\u6B65\u961F\u5217</p><p><strong>AR</strong>:Assigned Replicas \u6240\u6709\u526F\u672C</p><p>ISR\u662F\u7531leader\u7EF4\u62A4\uFF0Cfollower\u4ECEleader\u540C\u6B65\u6570\u636E\u6709\u4E00\u4E9B\u5EF6\u8FDF\uFF08\u5305\u62EC\u5EF6\u8FDF\u65F6\u95F4replica.lag.time.max.ms\u548C\u5EF6\u8FDF\u6761\u6570replica.lag.max.messages\u4E24\u4E2A\u7EF4\u5EA6, \u5F53\u524D\u6700\u65B0\u7684\u7248\u672C0.10.x\u4E2D\u53EA\u652F\u6301replica.lag.time.max.ms\u8FD9\u4E2A\u7EF4\u5EA6\uFF09\uFF0C\u4EFB\u610F\u4E00\u4E2A\u8D85\u8FC7\u9608\u503C\u90FD\u4F1A\u628Afollower\u5254\u9664\u51FAISR, \u5B58\u5165OSR\uFF08Outof-Sync Replicas\uFF09\u5217\u8868\uFF0C\u65B0\u52A0\u5165\u7684follower\u4E5F\u4F1A\u5148\u5B58\u653E\u5728OSR\u4E2D\u3002AR=ISR+OSR\u3002</p><h2 id="\u672F\u8BED0-kafka\u4E2D\u7684hw\u3001leo\u3001lso\u3001lw\u7B49\u5206\u522B\u4EE3\u8868\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED0-kafka\u4E2D\u7684hw\u3001leo\u3001lso\u3001lw\u7B49\u5206\u522B\u4EE3\u8868\u4EC0\u4E48" aria-hidden="true">#</a> \u672F\u8BED0. Kafka\u4E2D\u7684HW\u3001LEO\u3001LSO\u3001LW\u7B49\u5206\u522B\u4EE3\u8868\u4EC0\u4E48\uFF1F</h2><p><strong>HW</strong>:High Watermark \u9AD8\u6C34\u4F4D\uFF0C\u53D6\u4E00\u4E2Apartition\u5BF9\u5E94\u7684ISR\u4E2D\u6700\u5C0F\u7684LEO\u4F5C\u4E3AHW\uFF0Cconsumer\u6700\u591A\u53EA\u80FD\u6D88\u8D39\u5230HW\u6240\u5728\u7684\u4F4D\u7F6E\u4E0A\u4E00\u6761\u4FE1\u606F\u3002</p><p><strong>LEO</strong>:LogEndOffset \u5F53\u524D\u65E5\u5FD7\u6587\u4EF6\u4E2D\u4E0B\u4E00\u6761\u5F85\u5199\u4FE1\u606F\u7684offset HW/LEO\u8FD9\u4E24\u4E2A\u90FD\u662F\u6307\u6700\u540E\u4E00\u6761\u7684\u4E0B\u4E00\u6761\u7684\u4F4D\u7F6E\u800C\u4E0D\u662F\u6307\u6700\u540E\u4E00\u6761\u7684\u4F4D\u7F6E\u3002</p><p><strong>LSO</strong>:Last Stable Offset \u5BF9\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\u800C\u8A00\uFF0CLSO \u7684\u503C\u7B49\u4E8E\u4E8B\u52A1\u4E2D\u7B2C\u4E00\u6761\u6D88\u606F\u7684\u4F4D\u7F6E(firstUnstableOffset)\uFF0C\u5BF9\u5DF2\u5B8C\u6210\u7684\u4E8B\u52A1\u800C\u8A00\uFF0C\u5B83\u7684\u503C\u540C HW \u76F8\u540C</p><p><strong>LW</strong>:Low Watermark \u4F4E\u6C34\u4F4D, \u4EE3\u8868 AR \u96C6\u5408\u4E2D\u6700\u5C0F\u7684 logStartOffset \u503C</p><hr><h3 id="_1-kafka-\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-kafka-\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> 1. kafka \u662F\u4EC0\u4E48\uFF1F\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h3><p>Kafka \u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u6D41\u5F0F\u5904\u7406\u5E73\u53F0\uFF0C\u5B83\u4EE5\u9AD8\u541E\u5410\u3001\u53EF\u6301\u4E45\u5316\u3001\u53EF\u6C34\u5E73\u6269\u5C55\u3001\u652F\u6301\u6D41\u6570\u636E\u5904\u7406\u7B49\u591A\u79CD\u7279\u6027\u800C\u88AB\u5E7F\u6CDB\u4F7F\u7528</p><p><img src="https://img-blog.csdnimg.cn/img_convert/16668d6a19eb5cb6faddd7706e9e989b.png" alt="" loading="lazy"></p><p>\u4E3B\u8981\u529F\u80FD\u4F53\u73B0\u4E8E\u4E09\u70B9\uFF1A</p><ul><li><p><strong>\u6D88\u606F\u7CFB\u7EDF</strong>\uFF1Akafka\u4E0E\u4F20\u7EDF\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\u90FD\u5177\u5907<strong>\u7CFB\u7EDF\u89E3\u8026\u3001\u5197\u4F59\u5B58\u50A8\u3001\u6D41\u91CF\u524A\u5CF0\u3001\u7F13\u51B2\u3001\u5F02\u6B65\u901A\u4FE1\u3001\u6269\u5C55\u6027\u3001\u53EF\u6062\u590D\u6027</strong>\u7B49\u529F\u80FD\u3002\u4E0E\u6B64\u540C\u65F6\uFF0Ckafka\u8FD8\u63D0\u4F9B\u4E86\u5927\u591A\u6570\u6D88\u606F\u7CFB\u7EDF\u96BE\u4EE5\u5B9E\u73B0\u7684\u6D88\u606F\u987A\u5E8F\u6027\u4FDD\u969C\u53CA\u56DE\u6EAF\u6027\u6D88\u8D39\u7684\u529F\u80FD\u3002</p></li><li><p><strong>\u5B58\u50A8\u7CFB\u7EDF</strong>\uFF1Akafka\u628A<strong>\u6D88\u606F\u6301\u4E45\u5316\u5230\u78C1\u76D8</strong>\uFF0C\u76F8\u6BD4\u4E8E\u5176\u4ED6\u57FA\u4E8E\u5185\u5B58\u5B58\u50A8\u7684\u7CFB\u7EDF\u800C\u8A00\uFF0C\u6709\u6548\u7684\u964D\u4F4E\u4E86\u6D88\u606F\u4E22\u5931\u7684\u98CE\u9669\u3002\u8FD9\u5F97\u76CA\u4E8E\u5176\u6D88\u606F\u6301\u4E45\u5316\u548C\u591A\u526F\u672C\u673A\u5236\u3002\u4E5F\u53EF\u4EE5\u5C06kafka\u4F5C\u4E3A\u957F\u671F\u7684\u5B58\u50A8\u7CFB\u7EDF\u6765\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u628A\u5BF9\u5E94\u7684\u6570\u636E\u4FDD\u7559\u7B56\u7565\u8BBE\u7F6E\u4E3A\u201C\u6C38\u4E45\u201D\u6216\u542F\u7528\u4E3B\u9898\u65E5\u5FD7\u538B\u7F29\u529F\u80FD\u3002</p></li><li><p><strong>\u6D41\u5F0F\u5904\u7406\u5E73\u53F0</strong>\uFF1Akafka\u4E3A\u6D41\u884C\u7684\u6D41\u5F0F\u5904\u7406\u6846\u67B6\u63D0\u4F9B\u4E86\u53EF\u9760\u7684\u6570\u636E\u6765\u6E90\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u6D41\u5F0F\u5904\u7406\u6846\u67B6\uFF0C\u6BD4\u5982\u7A97\u53E3\u3001\u8FDE\u63A5\u3001\u53D8\u6362\u548C\u805A\u5408\u7B49\u5404\u7C7B\u64CD\u4F5C\u3002</p></li></ul><h3 id="_2-kafka-\u7684\u67B6\u6784\u662F\u600E\u4E48\u6837\u7684" tabindex="-1"><a class="header-anchor" href="#_2-kafka-\u7684\u67B6\u6784\u662F\u600E\u4E48\u6837\u7684" aria-hidden="true">#</a> 2. kafka \u7684\u67B6\u6784\u662F\u600E\u4E48\u6837\u7684\uFF1F</h3><blockquote><p>\u8FD9\u662F\u4E00\u4E2A\u57FA\u672C\u6982\u5FF5\u7684\u9898\u76EE\uFF0C\u4E00\u5B9A\u8981\u638C\u63E1\u3002</p></blockquote><p><img src="https://img-blog.csdnimg.cn/img_convert/77d41d1963c2606740b3188195eac97f.png" alt="" loading="lazy"></p><p>\u4E00\u4E2A\u5178\u578B\u7684 kafka \u4F53\u7CFB\u67B6\u6784\u5305\u62EC\u82E5\u5E72 Producer\u3001\u82E5\u5E72 Consumer\u3001\u4EE5\u53CA\u4E00\u4E2A Zookeeper \u96C6\u7FA4\uFF08\u57282.8.0\u7248\u672C\u4E2D\u79FB\uFF0C\u9664\u4E86 Zookeeper,\u901A\u8FC7 KRaft \u8FDB\u884C\u81EA\u5DF1\u7684\u96C6\u7FA4\u7BA1\u7406\uFF09</p><p>Producer \u5C06\u6D88\u606F\u53D1\u9001\u5230 Broker\uFF0CBroker \u8D1F\u8D23\u5C06\u53D7\u5230\u7684\u6D88\u606F\u5B58\u50A8\u5230\u78C1\u76D8\u4E2D\uFF0C\u800C Consumer \u8D1F\u8D23\u4ECE Broker \u8BA2\u9605\u5E76\u6D88\u8D39\u6D88\u606F\u3002</p><p>Kafka \u57FA\u672C\u6982\u5FF5\uFF1A</p><ul><li><p><strong>Producer</strong> \uFF1A\u751F\u4EA7\u8005\uFF0C\u8D1F\u8D23\u5C06\u6D88\u606F\u53D1\u9001\u5230 Broker</p></li><li><p><strong>Consumer</strong> \uFF1A\u6D88\u8D39\u8005\uFF0C\u4ECE Broker \u63A5\u6536\u6D88\u606F</p></li><li><p><strong>Consumer Group</strong> \uFF1A\u6D88\u8D39\u8005\u7EC4\uFF0C\u7531\u591A\u4E2A Consumer \u7EC4\u6210\u3002\u6D88\u8D39\u8005\u7EC4\u5185\u6BCF\u4E2A\u6D88\u8D39\u8005\u8D1F\u8D23\u6D88\u8D39\u4E0D\u540C\u5206\u533A\u7684\u6570\u636E\uFF0C<strong>\u4E00\u4E2A\u5206\u533A\u53EA\u80FD\u7531\u4E00\u4E2A\u7EC4\u5185\u6D88\u8D39\u8005\u6D88\u8D39</strong>\uFF0C\u6D88\u8D39\u8005\u7EC4\u4E4B\u95F4\u4E92\u4E0D\u5F71\u54CD\u3002\u6240\u6709\u7684\u6D88\u8D39\u8005\u90FD\u5C5E\u4E8E\u67D0\u4E2A\u6D88\u8D39\u8005\u7EC4\uFF0C\u5373\u6D88\u8D39\u8005\u7EC4\u662F\u903B\u8F91\u4E0A\u7684\u4E00\u4E2A\u8BA2\u9605\u8005\u3002</p></li><li><p><strong>Broker</strong> \uFF1A\u53EF\u4EE5\u770B\u505A\u4E00\u4E2A\u72EC\u7ACB\u7684 <strong>Kafka \u670D\u52A1\u8282\u70B9\u6216 Kafka \u670D\u52A1\u5B9E\u4F8B</strong>\u3002\u5982\u679C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u53EA\u90E8\u7F72\u4E86\u4E00\u4E2A Kafka \u5B9E\u4F8B\uFF0C\u90A3\u4E48\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06 Broker \u770B\u505A\u4E00\u53F0 Kafka \u670D\u52A1\u5668\u3002</p></li><li><p><strong>Topic</strong> \uFF1A\u4E00\u4E2A\u903B\u8F91\u4E0A\u7684\u6982\u5FF5\uFF0C\u5305\u542B\u5F88\u591A Partition\uFF0C<strong>\u540C\u4E00\u4E2A Topic \u4E0B\u7684 Partiton \u7684\u6D88\u606F\u5185\u5BB9\u662F\u4E0D\u76F8\u540C\u7684</strong>\u3002</p></li><li><p><strong>Partition</strong> \uFF1A\u4E3A\u4E86\u5B9E\u73B0\u6269\u5C55\u6027\uFF0C\u4E00\u4E2A\u975E\u5E38\u5927\u7684 topic <strong>\u53EF\u4EE5\u5206\u5E03\u5230\u591A\u4E2A broker \u4E0A\uFF0C\u4E00\u4E2A topic \u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A partition</strong>\uFF0C\u6BCF\u4E2A partition \u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u961F\u5217\u3002</p></li><li><p><strong>Replica</strong> \uFF1A\u526F\u672C\uFF0C<strong>\u540C\u4E00\u5206\u533A\u7684\u4E0D\u540C\u526F\u672C\u4FDD\u5B58\u7684\u662F\u76F8\u540C\u7684\u6D88\u606F</strong>\uFF0C\u4E3A\u4FDD\u8BC1\u96C6\u7FA4\u4E2D\u7684\u67D0\u4E2A\u8282\u70B9\u53D1\u751F\u6545\u969C\u65F6\uFF0C\u8BE5\u8282\u70B9\u4E0A\u7684 partition \u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u4E14 kafka \u4ECD\u7136\u80FD\u591F\u7EE7\u7EED\u5DE5\u4F5C\uFF0C- kafka \u63D0\u4F9B\u4E86\u526F\u672C\u673A\u5236\uFF0C\u4E00\u4E2A topic \u7684\u6BCF\u4E2A\u5206\u533A\u90FD\u6709\u82E5\u5E72\u4E2A\u526F\u672C\uFF0C\u4E00\u4E2A leader \u548C\u82E5\u5E72\u4E2A follower\u3002</p></li><li><p><strong>Leader</strong> \uFF1A\u6BCF\u4E2A\u5206\u533A\u7684\u591A\u4E2A\u526F\u672C\u4E2D\u7684&quot;\u4E3B\u526F\u672C&quot;\uFF0C<strong>\u751F\u4EA7\u8005\u4EE5\u53CA\u6D88\u8D39\u8005\u53EA\u4E0E Leader \u4EA4\u4E92</strong>\u3002</p></li><li><p><strong>Follower</strong> \uFF1A\u6BCF\u4E2A\u5206\u533A\u7684\u591A\u4E2A\u526F\u672C\u4E2D\u7684&quot;\u4ECE\u526F\u672C&quot;\uFF0C<strong>\u8D1F\u8D23\u5B9E\u65F6\u4ECE Leader \u4E2D\u540C\u6B65\u6570\u636E\uFF0C\u4FDD\u6301\u548C Leader \u6570\u636E\u7684\u540C\u6B65</strong>\u3002Leader \u53D1\u751F\u6545\u969C\u65F6\uFF0C\u4ECE Follower \u526F\u672C\u4E2D\u91CD\u65B0\u9009\u4E3E\u65B0\u7684 Leader \u526F\u672C\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002</p></li></ul><h3 id="_3-kafka-replicas\u662F\u600E\u4E48\u7BA1\u7406\u7684" tabindex="-1"><a class="header-anchor" href="#_3-kafka-replicas\u662F\u600E\u4E48\u7BA1\u7406\u7684" aria-hidden="true">#</a> 3. Kafka Replicas\u662F\u600E\u4E48\u7BA1\u7406\u7684\uFF1F</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/dfb283e65f030d4c660d60f3c8ca9b9c.png" alt="" loading="lazy"></p><ul><li>AR:\u5206\u533A\u4E2D\u7684<strong>\u6240\u6709 Replica \u7EDF\u79F0\u4E3A AR</strong></li><li>ISR:\u6240\u6709\u4E0E Leader \u526F\u672C<strong>\u4FDD\u6301\u4E00\u5B9A\u7A0B\u5EA6\u540C\u6B65</strong>\u7684Replica(\u5305\u62EC Leader \u526F\u672C\u5728\u5185)\u7EC4\u6210 ISR</li><li>OSR:\u4E0E Leader \u526F\u672C<strong>\u540C\u6B65\u6EDE\u540E\u8FC7\u591A\u7684</strong> Replica \u7EC4\u6210\u4E86 OSR</li></ul><p>Leader \u8D1F\u8D23\u7EF4\u62A4\u548C\u8DDF\u8E2A ISR \u96C6\u5408\u4E2D\u6240\u6709 Follower \u526F\u672C\u7684\u6EDE\u540E\u72B6\u6001\uFF0C\u5F53 Follower \u526F\u672C\u843D\u540E\u8FC7\u591A\u65F6\uFF0C\u5C31\u4F1A\u5C06\u5176\u653E\u5165 OSR \u96C6\u5408\uFF0C\u5F53 Follower \u526F\u672C\u8FFD\u4E0A\u4E86 Leader \u7684\u8FDB\u5EA6\u65F6\uFF0C\u5C31\u4F1A\u5C06\u5176\u653E\u5165 ISR \u96C6\u5408\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709 <strong>ISR \u4E2D\u7684\u526F\u672C\u624D\u6709\u8D44\u683C\u664B\u5347\u4E3A Leader</strong>\u3002</p><h3 id="_4-\u5982\u4F55\u786E\u5B9A\u5F53\u524D\u80FD\u8BFB\u5230\u54EA\u4E00\u6761\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u786E\u5B9A\u5F53\u524D\u80FD\u8BFB\u5230\u54EA\u4E00\u6761\u6D88\u606F" aria-hidden="true">#</a> 4. \u5982\u4F55\u786E\u5B9A\u5F53\u524D\u80FD\u8BFB\u5230\u54EA\u4E00\u6761\u6D88\u606F\uFF1F</h3><blockquote><p>\u8FD9\u4E2A\u95EE\u9898\u8981\u5148\u4E86\u89E3\u4E0A\u4E00\u4E2A\u95EE\u9898\u7684\u6982\u5FF5</p></blockquote><p>\u5206\u533A\u76F8\u5F53\u4E8E\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u4ECB\u7ECD\u51E0\u4E2A\u6982\u5FF5</p><p><img src="https://img-blog.csdnimg.cn/img_convert/9b038ce0fc7308c1e815ce46ac397b86.png" alt="" loading="lazy"></p><p>\u5982\u4E0A\u56FE\u662F\u4E00\u4E2A\u5206\u533A\u65E5\u5FD7\u6587\u4EF6</p><ul><li>\u6807\u8BC6<strong>\u5171\u67097\u6761\u6D88\u606F</strong>\uFF0Coffset (\u6D88\u606F\u504F\u79FB\u91CF)\u5206\u522B\u662F0~6</li><li>0 \u4EE3\u8868\u8FD9\u4E2A\u65E5\u5FD7\u6587\u4EF6\u7684<strong>\u5F00\u59CB</strong></li><li>HW(High Watermark) \u4E3A4\uFF0C0~3 \u4EE3\u8868\u8FD9\u4E2A\u65E5\u5FD7\u6587\u4EF6<strong>\u53EF\u4EE5\u6D88\u8D39\u7684\u533A\u95F4</strong>\uFF0C\u6D88\u8D39\u8005\u53EA\u80FD\u6D88\u8D39\u5230\u8FD9\u56DB\u6761\u6D88\u606F</li><li>LEO \u4EE3\u8868\u5373\u5C06\u8981\u5199\u5165\u6D88\u606F\u7684\u504F\u79FB\u91CF offset</li></ul><p><strong>\u5206\u533A ISR \u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u526F\u672C\u90FD\u4F1A\u7EF4\u62A4\u81EA\u5DF1\u7684 LEO\uFF0C\u800C ISR \u96C6\u5408\u4E2D\u6700\u5C0F\u7684LEO \u5373\u4E3A\u5206\u533A\u7684 HW</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/733241b1f3d812dc229022ddcddaadba.png" alt="" loading="lazy"></p><p>\u5982\u4E0A\u56FE: \u4E09\u4E2A\u5206\u533A\u526F\u672C\u90FD\u662F ISR\u96C6\u5408\u5F53\u4E2D\u7684\uFF0C\u6700\u5C0F\u7684 LEO \u4E3A 3\uFF0C\u5C31\u4EE3\u8868\u5206\u533A\u7684 HW \u4E3A3\uFF0C\u6240\u4EE5\u5F53\u524D\u5206\u533A\u53EA\u80FD\u6D88\u8D39\u5230 0~2 \u4E4B\u95F4\u7684\u4E09\u6761\u6570\u636E\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://img-blog.csdnimg.cn/img_convert/5e09d8a79178af747ccbf0cc2b142063.png" alt="" loading="lazy"></p><h3 id="_5-\u53D1\u9001\u6D88\u606F\u7684\u5206\u533A\u7B56\u7565\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_5-\u53D1\u9001\u6D88\u606F\u7684\u5206\u533A\u7B56\u7565\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 5. \u53D1\u9001\u6D88\u606F\u7684\u5206\u533A\u7B56\u7565\u6709\u54EA\u4E9B\uFF1F</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/fc5038a2800475066fb2fc7cebdbea30.png" alt="" loading="lazy"></p><ul><li><p>1.\u8F6E\u8BE2\uFF1A<strong>\u4F9D\u6B21</strong>\u5C06\u6D88\u606F\u53D1\u9001\u8BE5topic\u4E0B\u7684\u6240\u6709\u5206\u533A\uFF0C\u5982\u679C\u5728\u521B\u5EFA\u6D88\u606F\u7684\u65F6\u5019 key \u4E3A null\uFF0CKafka \u9ED8\u8BA4\u91C7\u7528\u8FD9\u79CD\u7B56\u7565\u3002</p></li><li><p>2.key \u6307\u5B9A\u5206\u533A\uFF1A\u5728\u521B\u5EFA\u6D88\u606F\u662F key \u4E0D\u4E3A\u7A7A\uFF0C\u5E76\u4E14\u4F7F\u7528\u9ED8\u8BA4\u5206\u533A\u5668\uFF0CKafka \u4F1A\u5C06 key \u8FDB\u884C hash\uFF0C\u7136\u540E<strong>\u6839\u636Ehash\u503C\u6620\u5C04\u5230\u6307\u5B9A\u7684\u5206\u533A\u4E0A</strong>\u3002\u8FD9\u6837\u7684\u597D\u5904\u662F key \u76F8\u540C\u7684\u6D88\u606F\u4F1A\u5728\u4E00\u4E2A\u5206\u533A\u4E0B\uFF0CKafka \u5E76\u4E0D\u80FD\u4FDD\u8BC1\u5168\u5C40\u6709\u5E8F\uFF0C\u4F46\u662F\u5728\u6BCF\u4E2A\u5206\u533A\u4E0B\u7684\u6D88\u606F\u662F\u6709\u5E8F\u7684\uFF0C\u6309\u7167\u987A\u5E8F\u5B58\u50A8\uFF0C\u6309\u7167\u987A\u5E8F\u6D88\u8D39\u3002\u5728\u4FDD\u8BC1\u540C\u4E00\u4E2A key \u7684\u6D88\u606F\u662F\u6709\u5E8F\u7684\uFF0C\u8FD9\u6837\u57FA\u672C\u80FD\u6EE1\u8DB3\u6D88\u606F\u7684\u987A\u5E8F\u6027\u7684\u9700\u6C42\u3002\u4F46\u662F<strong>\u5982\u679C partation \u6570\u91CF\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u5C31\u5F88\u96BE\u4FDD\u8BC1 key \u4E0E\u5206\u533A\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u4E86</strong>\u3002</p></li><li><p>3.\u81EA\u5B9A\u4E49\u7B56\u7565\uFF1A\u5B9E\u73B0 Partitioner \u63A5\u53E3\u5C31\u80FD\u81EA\u5B9A\u4E49\u5206\u533A\u7B56\u7565\u3002</p></li><li><p>4.\u6307\u5B9A Partiton \u53D1\u9001</p></li></ul><h3 id="_6-kafka-\u7684\u53EF\u9760\u6027\u662F\u600E\u4E48\u4FDD\u8BC1\u7684" tabindex="-1"><a class="header-anchor" href="#_6-kafka-\u7684\u53EF\u9760\u6027\u662F\u600E\u4E48\u4FDD\u8BC1\u7684" aria-hidden="true">#</a> 6. Kafka \u7684\u53EF\u9760\u6027\u662F\u600E\u4E48\u4FDD\u8BC1\u7684\uFF1F</h3><p><strong>1.acks</strong></p><p>\u8FD9\u4E2A\u53C2\u6570\u7528\u6765\u6307\u5B9A\u5206\u533A\u4E2D\u6709\u591A\u5C11\u4E2A\u526F\u672C\u6536\u5230\u8FD9\u6761\u6D88\u606F\uFF0C\u751F\u4EA7\u8005\u624D\u8BA4\u4E3A\u8FD9\u6761\u6D88\u606F\u662F\u5199\u5165\u6210\u529F\u7684\uFF0C\u8FD9\u4E2A\u53C2\u6570\u6709\u4E09\u4E2A\u503C\uFF1A</p><ul><li>1.acks = 1\uFF0C\u9ED8\u8BA4\u4E3A1\u3002\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\uFF0C<strong>\u53EA\u8981 leader \u526F\u672C\u6210\u529F\u5199\u5165\u6D88\u606F\uFF0C\u5C31\u4EE3\u8868\u6210\u529F</strong>\u3002\u8FD9\u79CD\u65B9\u6848\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u8FD4\u56DE\u6210\u529F\u540E\uFF0C\u5982\u679C leader \u526F\u672C\u548C follower \u526F\u672C<strong>\u8FD8\u6CA1\u6709\u6765\u5F97\u53CA\u540C\u6B65</strong>\uFF0Cleader \u5C31\u5D29\u6E83\u4E86\uFF0C\u90A3\u4E48\u5728\u9009\u4E3E\u540E\u65B0\u7684 leader \u5C31\u6CA1\u6709\u8FD9\u6761<strong>\u6D88\u606F\uFF0C\u4E5F\u5C31\u4E22\u5931\u4E86</strong>\u3002</li><li>2.acks = 0\u3002\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u540E\u76F4\u63A5\u7B97\u5199\u5165\u6210\u529F\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85\u54CD\u5E94\u3002\u8FD9\u4E2A\u65B9\u6848\u7684\u95EE\u9898\u5F88\u660E\u663E\uFF0C<strong>\u53EA\u8981\u670D\u52A1\u7AEF\u5199\u6D88\u606F\u65F6\u51FA\u73B0\u4EFB\u4F55\u95EE\u9898\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u6D88\u606F\u4E22\u5931</strong>\u3002</li><li>3.acks = -1 \u6216 acks = all\u3002\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u540E\uFF0C\u9700\u8981\u7B49\u5F85 ISR \u4E2D\u7684\u6240\u6709\u526F\u672C\u90FD\u6210\u529F\u5199\u5165\u6D88\u606F\u540E\u624D\u80FD\u6536\u5230\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u3002\u6BEB\u65E0\u7591\u95EE\u8FD9\u79CD\u65B9\u6848\u7684<strong>\u53EF\u9760\u6027\u662F\u6700\u9AD8\u7684</strong>\uFF0C\u4F46\u662F\u5982\u679C ISR \u4E2D\u53EA\u6709leader \u526F\u672C\uFF0C\u90A3\u4E48\u5C31\u548C acks = 1 \u6BEB\u65E0\u5DEE\u522B\u4E86\u3002</li></ul><p><strong>2.\u6D88\u606F\u53D1\u9001\u7684\u65B9\u5F0F</strong></p><p>\u7B2C6\u95EE\u4E2D\u6211\u4EEC\u63D0\u5230\u4E86\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u6709\u4E09\u79CD\u65B9\u5F0F\uFF0C\u53D1\u5B8C\u5373\u5FD8\uFF0C\u540C\u6B65\u548C\u5F02\u6B65\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u540C\u6B65\u6216\u8005\u5F02\u6B65\u83B7\u53D6\u54CD\u5E94\u7ED3\u679C\uFF0C<strong>\u5931\u8D25\u505A\u91CD\u8BD5</strong>\u6765\u4FDD\u8BC1\u6D88\u606F\u7684\u53EF\u9760\u6027\u3002</p><p><strong>3.\u624B\u52A8\u63D0\u4EA4\u4F4D\u79FB</strong></p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u6D88\u8D39\u8005\u6D88\u8D39\u5230\u6D88\u606F\u540E\uFF0C\u5C31\u4F1A\u81EA\u52A8\u63D0\u4EA4\u4F4D\u79FB\u3002\u4F46\u662F\u5982\u679C\u6D88\u8D39\u8005\u6D88\u8D39\u51FA\u9519\uFF0C\u6CA1\u6709\u8FDB\u5165\u771F\u6B63\u7684\u4E1A\u52A1\u5904\u7406\uFF0C\u90A3\u4E48\u5C31\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD9\u6761\u6D88\u606F\u6D88\u8D39\u5931\u8D25\uFF0C\u4ECE\u800C\u4E22\u5931\u3002\u6211\u4EEC\u53EF\u4EE5\u5F00\u542F\u624B\u52A8\u63D0\u4EA4\u4F4D\u79FB\uFF0C\u7B49\u5F85\u4E1A\u52A1\u6B63\u5E38\u5904\u7406\u5B8C\u6210\u540E\uFF0C\u518D\u63D0\u4EA4offset\u3002</p><p><strong>4.\u901A\u8FC7\u526F\u672C LEO \u6765\u786E\u5B9A\u5206\u533A HW</strong></p><p>\u53EF\u53C2\u8003\u7B2C\u56DB\u95EE</p><h3 id="_7-\u5206\u533A\u518D\u5206\u914D\u662F\u505A\u4EC0\u4E48\u7684-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_7-\u5206\u533A\u518D\u5206\u914D\u662F\u505A\u4EC0\u4E48\u7684-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 7. \u5206\u533A\u518D\u5206\u914D\u662F\u505A\u4EC0\u4E48\u7684\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h3><p>\u5206\u533A\u518D\u5206\u914D\u4E3B\u8981\u662F\u7528\u6765\u7EF4\u62A4 kafka \u96C6\u7FA4\u7684\u8D1F\u8F7D\u5747\u8861</p><p>\u65E2\u7136\u662F\u5206\u533A\u518D\u5206\u914D\uFF0C\u90A3\u4E48 kafka \u5206\u533A\u6709\u4EC0\u4E48\u95EE\u9898\u5462\uFF1F</p><p><img src="https://img-blog.csdnimg.cn/img_convert/e57b54803d2cf0f8f11b0acecc978e31.png" alt="" loading="lazy"></p><p><strong>\u95EE\u98981</strong>\uFF1A\u5F53\u96C6\u7FA4\u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u4E0B\u7EBF\u4E86</p><ul><li>\u5982\u679C\u8BE5\u8282\u70B9\u7684\u5206\u533A\u662F\u5355\u526F\u672C\u7684,\u90A3\u4E48\u5206\u533A\u5C06\u4F1A\u53D8\u5F97\u4E0D\u53EF\u7528</li><li>\u5982\u679C\u662F\u591A\u526F\u672C\u7684\uFF0C\u5C31\u4F1A\u8FDB\u884C leader \u9009\u4E3E\uFF0C\u5728\u5176\u4ED6\u673A\u5668\u4E0A\u9009\u4E3E\u51FA\u65B0\u7684 leader</li></ul><p><strong>kafka \u5E76\u4E0D\u4F1A\u5C06\u8FD9\u4E9B\u5931\u6548\u7684\u5206\u533A\u8FC1\u79FB\u5230\u5176\u4ED6\u53EF\u7528\u7684 broker \u4E0A</strong>\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5F71\u54CD\u96C6\u7FA4\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u751A\u81F3\u4E5F\u4F1A\u5F71\u54CD\u670D\u52A1\u7684\u53EF\u9760\u6027\u548C\u53EF\u7528\u6027</p><p><img src="https://img-blog.csdnimg.cn/img_convert/e2912a908a8b2672ae947e71287791db.png" alt="" loading="lazy"></p><p><strong>\u95EE\u98982</strong>\uFF1A\u96C6\u7FA4\u65B0\u589E broker \u65F6\uFF0C\u53EA\u6709\u65B0\u7684\u4E3B\u9898\u5206\u533A\u4F1A\u5206\u914D\u5728\u8BE5 broker \u4E0A\uFF0C\u800C\u8001\u7684\u4E3B\u9898\u5206\u533A\u4E0D\u4F1A\u5206\u914D\u5728\u8BE5 broker \u4E0A\uFF0C\u5C31\u9020\u6210\u4E86<strong>\u8001\u8282\u70B9\u548C\u65B0\u8282\u70B9\u4E4B\u95F4\u7684\u8D1F\u8F7D\u4E0D\u5747\u8861</strong>\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8BE5\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\u5206\u533A\u518D\u5206\u914D\uFF0C\u5B83\u53EF\u4EE5\u5728\u96C6\u7FA4\u6269\u5BB9\uFF0Cbroker \u5931\u6548\u7684\u573A\u666F\u4E0B\u8FDB\u884C\u5206\u533A\u8FC1\u79FB\u3002</p><p><strong>\u5206\u533A\u518D\u5206\u914D\u7684\u539F\u7406\u5C31\u662F\u901A\u5316\u63A7\u5236\u5668\u7ED9\u5206\u533A\u65B0\u589E\u65B0\u7684\u526F\u672C\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u7EDC\u628A\u65E7\u7684\u526F\u672C\u6570\u636E\u590D\u5236\u5230\u65B0\u7684\u526F\u672C\u4E0A\uFF0C\u5728\u590D\u5236\u5B8C\u6210\u540E\uFF0C\u5C06\u65E7\u526F\u672C\u6E05\u9664</strong>\u3002 \u5F53\u7136\uFF0C\u4E3A\u4E86\u4E0D\u5F71\u54CD\u96C6\u7FA4\u6B63\u5E38\u7684\u6027\u80FD\uFF0C\u5728\u6B64\u590D\u5236\u671F\u95F4\u8FD8\u4F1A\u6709\u4E00\u7CFB\u5217\u4FDD\u8BC1\u6027\u80FD\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982<strong>\u590D\u5236\u9650\u6D41</strong>\u3002</p><h3 id="_8-kafka-partition-\u526F\u672C-leader-\u662F\u600E\u4E48\u9009\u4E3E\u7684" tabindex="-1"><a class="header-anchor" href="#_8-kafka-partition-\u526F\u672C-leader-\u662F\u600E\u4E48\u9009\u4E3E\u7684" aria-hidden="true">#</a> 8. Kafka Partition \u526F\u672C leader \u662F\u600E\u4E48\u9009\u4E3E\u7684\uFF1F</h3><blockquote><p>\u8FD9\u4E2A\u95EE\u9898\u8BBE\u8BA1\u7684\u70B9\u6BD4\u8F83\u591A\uFF0C\u62D3\u5C55\u7684\u4E5F\u66F4\u591A\u4E00\u70B9\uFF0C\u5EFA\u8BAE\u8010\u5FC3\u9605\u8BFB\u3002</p></blockquote><p><strong>\u5E38\u7528\u9009\u4E3B\u673A\u5236\u7684\u7F3A\u70B9\uFF1A</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>split-brain (\u8111\u88C2):
\u200B\u8FD9\u662F\u7531ZooKeeper\u7684\u7279\u6027\u5F15\u8D77\u7684\uFF0C\u867D\u7136ZooKeeper\u80FD\u4FDD\u8BC1\u6240\u6709Watch\u6309\u987A\u5E8F\u89E6\u53D1\uFF0C\u4F46\u662F\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u540C\u4E00\u65F6\u523B\u6240\u6709Replica\u201C\u770B\u201D\u5230\u7684\u72B6\u6001\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u5C31\u53EF\u80FD\u9020\u6210\u4E0D\u540CReplica\u7684\u54CD\u5E94\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u9009\u51FA\u591A\u4E2A\u9886\u5BFC\u201C\u5927\u8111\u201D\uFF0C\u5BFC\u81F4\u201C\u8111\u88C2\u201D\u3002

herd effect (\u7F8A\u7FA4\u6548\u5E94):
\u200B\u5982\u679C\u5B95\u673A\u7684\u90A3\u4E2ABroker\u4E0A\u7684Partition\u6BD4\u8F83\u591A\uFF0C \u4F1A\u9020\u6210\u591A\u4E2AWatch\u88AB\u89E6\u53D1\uFF0C\u9020\u6210\u96C6\u7FA4\u5185\u5927\u91CF\u7684\u8C03\u6574\uFF0C\u5BFC\u81F4\u5927\u91CF\u7F51\u7EDC\u963B\u585E\u3002

ZooKeeper\u8D1F\u8F7D\u8FC7\u91CD:
\u200B\u6BCF\u4E2AReplica\u90FD\u8981\u4E3A\u6B64\u5728ZooKeeper\u4E0A\u6CE8\u518C\u4E00\u4E2AWatch\uFF0C\u5F53\u96C6\u7FA4\u89C4\u6A21\u589E\u52A0\u5230\u51E0\u5343\u4E2APartition\u65F6ZooKeeper\u8D1F\u8F7D\u4F1A\u8FC7\u91CD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F18\u52BF\uFF1A</strong></p><p>\u200BKafka\u7684Leader Election\u65B9\u6848\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\uFF0C\u5B83\u5728\u6240\u6709broker\u4E2D\u9009\u51FA\u4E00\u4E2Acontroller\uFF0C\u6240\u6709Partition\u7684Leader\u9009\u4E3E\u90FD\u7531controller\u51B3\u5B9A\u3002 controller\u4F1A\u5C06Leader\u7684\u6539\u53D8\u76F4\u63A5\u901A\u8FC7RPC\u7684\u65B9\u5F0F(\u6BD4ZooKeeper Queue\u7684\u65B9\u5F0F\u66F4\u9AD8\u6548)\u901A\u77E5\u9700\u4E3A\u6B64\u4F5C\u4E3A\u54CD\u5E94\u7684Broker\u3002</p><p>\u200B\u6CA1\u6709\u4F7F\u7528 zk\uFF0C\u6240\u4EE5\u65E0 2.3 \u95EE\u9898\uFF1B\u4E5F\u6CA1\u6709\u6CE8\u518C watch\u65E0 2.2 \u95EE\u9898 leader \u5931\u8D25\u4E86\uFF0C\u5C31\u901A\u8FC7 controller \u7EE7\u7EED\u91CD\u65B0\u9009\u4E3E\u5373\u53EF\uFF0C\u6240\u4EE5\u514B\u670D\u6240\u6709\u95EE\u9898\u3002</p><p><strong>Kafka partition leader\u7684\u9009\u4E3E\uFF1A</strong></p><p>\u7531 controller \u6267\u884C\uFF1A</p><ul><li>\u4ECEZookeeper\u4E2D\u8BFB\u53D6\u5F53\u524D\u5206\u533A\u7684\u6240\u6709ISR(in-sync replicas)\u96C6\u5408</li><li>\u8C03\u7528\u914D\u7F6E\u7684\u5206\u533A\u9009\u62E9\u7B97\u6CD5\u9009\u62E9\u5206\u533A\u7684leader</li></ul><p><img src="https://tvax1.sinaimg.cn/large/007F3CC8ly1h3dl7rqe24j313c0nm7ik.jpg" alt="\u5206\u533A\u9009\u62E9\u7B97\u6CD5" loading="lazy"></p><p>\u4E0A\u9762\u4E94\u79CD\u5206\u533A\u7B97\u6CD5\u90FD\u662F\u9009\u62E9PreferredReplica(\u4F18\u5148\u526F\u672C\u9009\u4E3E)\u4F5C\u4E3A\u5F53\u524DPartition\u7684leader\u3002\u533A\u522B\u4EC5\u4EC5\u662F\u9009\u62E9leader\u4E4B\u540E\u7684\u64CD\u4F5C\u6709\u6240\u4E0D\u540C\u3002</p><h3 id="_9-\u5206\u533A\u6570\u8D8A\u591A\u8D8A\u597D\u5417-\u541E\u5410\u91CF\u5C31\u4F1A\u8D8A\u9AD8\u5417" tabindex="-1"><a class="header-anchor" href="#_9-\u5206\u533A\u6570\u8D8A\u591A\u8D8A\u597D\u5417-\u541E\u5410\u91CF\u5C31\u4F1A\u8D8A\u9AD8\u5417" aria-hidden="true">#</a> 9. \u5206\u533A\u6570\u8D8A\u591A\u8D8A\u597D\u5417\uFF1F\u541E\u5410\u91CF\u5C31\u4F1A\u8D8A\u9AD8\u5417\uFF1F</h3><p>\u822C\u7C7B\u4F3C\u4E8E\u8FD9\u79CD\u95EE\u9898\u7684\u7B54\u6848\uFF0C\u90FD\u662F\u6301\u5426\u5B9A\u6001\u5EA6\u7684\u3002</p><p>\u4F46\u662F\u53EF\u4EE5\u8BF4\uFF0C<strong>\u5728\u4E00\u5B9A\u6761\u4EF6\u4E0B\uFF0C\u5206\u533A\u6570\u7684\u6570\u91CF\u662F\u548C\u541E\u5410\u91CF\u6210\u6B63\u6BD4\u7684\uFF0C\u5206\u533A\u6570\u548C\u6027\u80FD\u4E5F\u662F\u6210\u6B63\u6BD4\u7684</strong>\u3002</p><p>\u90A3\u4E48\u4E3A\u4EC0\u4E48\u8BF4\u8D85\u8FC7\u4E86\u4E00\u5B9A\u9650\u5EA6\uFF0C\u5C31\u4F1A\u5BF9\u6027\u80FD\u9020\u6210\u5F71\u54CD\u5462\uFF1F\u539F\u56E0\u5982\u4E0B:</p><p><img src="https://img-blog.csdnimg.cn/img_convert/54db2b5495c53fde42368a5f60ac1b0f.png" alt="" loading="lazy"></p><p><strong>1.\u5BA2\u6237\u7AEF/\u670D\u52A1\u5668\u7AEF\u9700\u8981\u4F7F\u7528\u7684\u5185\u5B58\u5C31\u8D8A\u591A</strong></p><p>\u670D\u52A1\u7AEF\u5728\u5F88\u591A\u7EC4\u4EF6\u4E2D\u90FD\u7EF4\u62A4\u4E86\u5206\u533A\u7EA7\u522B\u7684\u7F13\u5B58\uFF0C\u5206\u533A\u6570\u8D8A\u5927\uFF0C\u7F13\u5B58\u6210\u672C\u4E5F\u5C31\u8D8A\u5927\u3002 \u6D88\u8D39\u7AEF\u7684\u6D88\u8D39\u7EBF\u7A0B\u6570\u662F\u548C\u5206\u533A\u6570\u6302\u94A9\u7684\uFF0C\u5206\u533A\u6570\u8D8A\u5927\u6D88\u8D39\u7EBF\u7A0B\u6570\u4E5F\u5C31\u8D8A\u591A\uFF0C\u7EBF\u7A0B\u7684\u5F00\u9500\u6210\u672C\u4E5F\u5C31\u8D8A\u5927 \u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u6709\u7F13\u5B58\u7684\u6982\u5FF5\uFF0C\u4F1A\u4E3A\u6BCF\u4E2A\u5206\u533A\u7F13\u5B58\u6D88\u606F\uFF0C\u5F53\u79EF\u7D2F\u5230\u4E00\u5B9A\u7A0B\u5EA6\u6216\u8005\u65F6\u95F4\u65F6\u4F1A\u5C06\u6D88\u606F\u53D1\u9001\u5230\u5206\u533A\uFF0C\u5206\u533A\u8D8A\u591A\uFF0C\u8FD9\u90E8\u5206\u7684\u7F13\u5B58\u4E5F\u5C31\u8D8A\u5927</p><p><strong>2.\u6587\u4EF6\u53E5\u67C4\u7684\u5F00\u9500</strong></p><p>\u6BCF\u4E2A partition \u90FD\u4F1A\u5BF9\u5E94\u78C1\u76D8\u6587\u4EF6\u7CFB\u7EDF\u7684\u4E00\u4E2A\u76EE\u5F55\u3002\u5728 Kafka \u7684\u6570\u636E\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55\u4E2D\uFF0C\u6BCF\u4E2A\u65E5\u5FD7\u6570\u636E\u6BB5\u90FD\u4F1A\u5206\u914D\u4E24\u4E2A\u6587\u4EF6\uFF0C\u4E00\u4E2A\u7D22\u5F15\u6587\u4EF6\u548C\u4E00\u4E2A\u6570\u636E\u6587\u4EF6\u3002\u6BCF\u4E2A broker \u4F1A\u4E3A\u6BCF\u4E2A\u65E5\u5FD7\u6BB5\u6587\u4EF6\u6253\u5F00\u4E00\u4E2A index \u6587\u4EF6\u53E5\u67C4\u548C\u4E00\u4E2A\u6570\u636E\u6587\u4EF6\u53E5\u67C4\u3002\u56E0\u6B64\uFF0C\u968F\u7740 partition \u7684\u589E\u591A\uFF0C\u6240\u9700\u8981\u4FDD\u6301\u6253\u5F00\u72B6\u6001\u7684\u6587\u4EF6\u53E5\u67C4\u6570\u4E5F\u5C31\u8D8A\u591A\uFF0C\u6700\u7EC8\u53EF\u80FD\u8D85\u8FC7\u5E95\u5C42\u64CD\u4F5C\u7CFB\u7EDF\u914D\u7F6E\u7684\u6587\u4EF6\u53E5\u67C4\u6570\u91CF\u9650\u5236\u3002</p><p><strong>3.\u8D8A\u591A\u7684\u5206\u533A\u53EF\u80FD\u589E\u52A0\u7AEF\u5BF9\u7AEF\u7684\u5EF6\u8FDF</strong></p><p>Kafka \u4F1A\u5C06\u5206\u533A HW \u4E4B\u524D\u7684\u6D88\u606F\u66B4\u9732\u7ED9\u6D88\u8D39\u8005\u3002\u5206\u533A\u8D8A\u591A\u5219\u526F\u672C\u4E4B\u95F4\u7684\u540C\u6B65\u6570\u91CF\u5C31\u8D8A\u591A\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A broker \u4ECE\u5176\u4ED6 broker \u8282\u70B9\u8FDB\u884C\u6570\u636E\u526F\u672C\u590D\u5236\u65F6\uFF0C\u8BE5 broker \u8282\u70B9\u53EA\u4F1A\u4E3A\u6B64\u5DE5\u4F5C\u5206\u914D\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u8BE5\u7EBF\u7A0B\u9700\u8981\u5B8C\u6210\u8BE5 broker \u6240\u6709 partition \u6570\u636E\u7684\u590D\u5236\u3002</p><p><strong>4.\u964D\u4F4E\u9AD8\u53EF\u7528\u6027</strong></p><p>\u5728\u7B2C 7 \u95EE\u6211\u4EEC\u63D0\u5230\u4E86\u5206\u533A\u518D\u5206\u914D\uFF0C\u4F1A\u5C06\u6570\u636E\u590D\u5236\u5230\u53E6\u4E00\u4EFD\u526F\u672C\u5F53\u4E2D\uFF0C<strong>\u5206\u533A\u6570\u91CF\u8D8A\u591A\uFF0C\u90A3\u4E48\u6062\u590D\u65F6\u95F4\u4E5F\u5C31\u8D8A\u957F</strong>\uFF0C\u800C\u5982\u679C\u53D1\u751F\u5B95\u673A\u7684 broker \u6070\u597D\u662F controller \u8282\u70B9\u65F6\uFF1A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u65B0 leader \u8282\u70B9\u7684\u9009\u4E3E\u8FC7\u7A0B\u5728 controller \u8282\u70B9\u6062\u590D\u5230\u65B0\u7684 broker \u4E4B\u524D\u4E0D\u4F1A\u542F\u52A8\u3002controller \u8282\u70B9\u7684\u9519\u8BEF\u6062\u590D\u5C06\u4F1A\u81EA\u52A8\u5730\u8FDB\u884C\uFF0C\u4F46\u662F\u65B0\u7684 controller \u8282\u70B9\u9700\u8981\u4ECE zookeeper \u4E2D\u8BFB\u53D6\u6BCF\u4E00\u4E2A partition \u7684\u5143\u6570\u636E\u4FE1\u606F\u7528\u4E8E\u521D\u59CB\u5316\u6570\u636E\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u4E00\u4E2AKafka \u96C6\u7FA4\u5B58\u5728 10000\u4E2Apartition\uFF0C\u4ECE zookeeper \u4E2D\u6062\u590D\u5143\u6570\u636E\u65F6\u6BCF\u4E2A partition \u5927\u7EA6\u82B1\u8D39 2 ms\uFF0C\u5219 controller \u7684\u6062\u590D\u5C06\u4F1A\u589E\u52A0\u7EA6 20 \u79D2\u7684\u4E0D\u53EF\u7528\u65F6\u95F4\u7A97\u53E3\u3002</p><h3 id="_10-kafka-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" tabindex="-1"><a class="header-anchor" href="#_10-kafka-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" aria-hidden="true">#</a> 10. kafka \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB\uFF1F</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/660921f85642692c5f819c27474ebc68.png" alt="" loading="lazy"></p><ul><li><p>1.<strong>\u987A\u5E8F\u8BFB\u5199</strong>\u78C1\u76D8\u5206\u4E3A\u987A\u5E8F\u8BFB\u5199\u4E0E\u968F\u673A\u8BFB\u5199\uFF0C\u57FA\u4E8E\u78C1\u76D8\u7684\u968F\u673A\u8BFB\u5199\u786E\u5B9E\u5F88\u6162\uFF0C\u4F46\u78C1\u76D8\u7684\u987A\u5E8F\u8BFB\u5199\u6027\u80FD\u5374\u5F88\u9AD8\uFF0Ckafka \u8FD9\u91CC\u91C7\u7528\u7684\u5C31\u662F\u987A\u5E8F\u8BFB\u5199\u3002</p></li><li><p>2.<strong>Page Cache</strong>\u4E3A\u4E86\u4F18\u5316\u8BFB\u5199\u6027\u80FD\uFF0CKafka \u5229\u7528\u4E86<strong>\u64CD\u4F5C\u7CFB\u7EDF\u672C\u8EAB\u7684 Page Cache</strong>\uFF0C\u5C31\u662F\u5229\u7528\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u8EAB\u7684\u5185\u5B58\u800C\u4E0D\u662FJVM\u7A7A\u95F4\u5185\u5B58\u3002</p></li><li><p>3.<strong>\u96F6\u62F7\u8D1D</strong>Kafka\u4F7F\u7528\u4E86\u96F6\u62F7\u8D1D\u6280\u672F\uFF0C\u4E5F\u5C31\u662F<strong>\u76F4\u63A5\u5C06\u6570\u636E\u4ECE\u5185\u6838\u7A7A\u95F4\u7684\u8BFB\u7F13\u51B2\u533A\u76F4\u63A5\u62F7\u8D1D\u5230\u5185\u6838\u7A7A\u95F4\u7684 socket \u7F13\u51B2\u533A</strong>\uFF0C\u7136\u540E\u518D\u5199\u5165\u5230 NIC \u7F13\u51B2\u533A\uFF0C\u907F\u514D\u4E86\u5728\u5185\u6838\u7A7A\u95F4\u548C\u7528\u6237\u7A7A\u95F4\u4E4B\u95F4\u7A7F\u68AD\u3002</p></li><li><p>4.<strong>\u5206\u533A\u5206\u6BB5+\u7D22\u5F15</strong>Kafka \u7684 message \u662F\u6309 topic\u5206 \u7C7B\u5B58\u50A8\u7684\uFF0Ctopic \u4E2D\u7684\u6570\u636E\u53C8\u662F\u6309\u7167\u4E00\u4E2A\u4E00\u4E2A\u7684 partition \u5373\u5206\u533A\u5B58\u50A8\u5230\u4E0D\u540C broker \u8282\u70B9\u3002\u6BCF\u4E2A partition \u5BF9\u5E94\u4E86\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0Cpartition \u5B9E\u9645\u4E0A\u53C8\u662F\u6309\u7167segment\u5206\u6BB5\u5B58\u50A8\u7684\u3002\u901A\u8FC7\u8FD9\u79CD\u5206\u533A\u5206\u6BB5\u7684\u8BBE\u8BA1\uFF0CKafka \u7684 message \u6D88\u606F\u5B9E\u9645\u4E0A\u662F\u5206\u5E03\u5F0F\u5B58\u50A8\u5728\u4E00\u4E2A\u4E00\u4E2A\u5C0F\u7684 segment \u4E2D\u7684\uFF0C\u6BCF\u6B21\u6587\u4EF6\u64CD\u4F5C\u4E5F\u662F\u76F4\u63A5\u64CD\u4F5C\u7684 segment\u3002\u4E3A\u4E86\u8FDB\u4E00\u6B65\u7684\u67E5\u8BE2\u4F18\u5316\uFF0CKafka \u53C8\u9ED8\u8BA4\u4E3A\u5206\u6BB5\u540E\u7684\u6570\u636E\u6587\u4EF6\u5EFA\u7ACB\u4E86\u7D22\u5F15\u6587\u4EF6\uFF0C\u5C31\u662F\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u7684.index\u6587\u4EF6\u3002\u8FD9\u79CD\u5206\u533A\u5206\u6BB5+\u7D22\u5F15\u7684\u8BBE\u8BA1\uFF0C\u4E0D\u4EC5\u63D0\u5347\u4E86\u6570\u636E\u8BFB\u53D6\u7684\u6548\u7387\uFF0C\u540C\u65F6\u4E5F\u63D0\u9AD8\u4E86\u6570\u636E\u64CD\u4F5C\u7684\u5E76\u884C\u5EA6\u3002</p></li><li><p>5.<strong>\u6279\u91CF\u8BFB\u5199Kafka \u6570\u636E\u8BFB\u5199\u4E5F\u662F\u6279\u91CF\u7684\u800C\u4E0D\u662F\u5355\u6761\u7684</strong>,\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5728\u7F51\u7EDC\u4E0A\u9891\u7E41\u4F20\u8F93\u5355\u4E2A\u6D88\u606F\u5E26\u6765\u7684\u5EF6\u8FDF\u548C\u5E26\u5BBD\u5F00\u9500\u3002\u5047\u8BBE\u7F51\u7EDC\u5E26\u5BBD\u4E3A10MB/S\uFF0C\u4E00\u6B21\u6027\u4F20\u8F9310MB\u7684\u6D88\u606F\u6BD4\u4F20\u8F931KB\u7684\u6D88\u606F10000\u4E07\u6B21\u663E\u7136\u8981\u5FEB\u5F97\u591A\u3002</p></li><li><p>6.<strong>\u6279\u91CF\u538B\u7F29</strong>Kafka \u628A\u6240\u6709\u7684\u6D88\u606F\u90FD\u53D8\u6210\u4E00\u4E2A<strong>\u6279\u91CF\u7684\u6587\u4EF6</strong>\uFF0C\u5E76\u4E14\u8FDB\u884C\u5408\u7406\u7684<strong>\u6279\u91CF\u538B\u7F29</strong>\uFF0C\u51CF\u5C11\u7F51\u7EDC IO \u635F\u8017\uFF0C\u901A\u8FC7 mmap \u63D0\u9AD8 I/O \u901F\u5EA6\uFF0C\u5199\u5165\u6570\u636E\u7684\u65F6\u5019\u7531\u4E8E\u5355\u4E2APartion\u662F\u672B\u5C3E\u6DFB\u52A0\u6240\u4EE5\u901F\u5EA6\u6700\u4F18\uFF1B\u8BFB\u53D6\u6570\u636E\u7684\u65F6\u5019\u914D\u5408 sendfile \u8FDB\u884C\u76F4\u63A5\u8BFB\u53D6\u3002</p></li></ul><p>\u4F4E\u8C37\u84C4\u529B</p><h2 id="\u300A\u6700\u5C11\u5FC5\u8981\u9762\u8BD5\u9898\u300B" tabindex="-1"><a class="header-anchor" href="#\u300A\u6700\u5C11\u5FC5\u8981\u9762\u8BD5\u9898\u300B" aria-hidden="true">#</a> \u300A\u6700\u5C11\u5FC5\u8981\u9762\u8BD5\u9898\u300B</h2>`,99),c={href:"https://javapub.blog.csdn.net/article/details/122011870",target:"_blank",rel:"noopener noreferrer"},d=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Java\u57FA\u7840\u9762\u8BD5\u9898"),k={href:"https://javapub.blog.csdn.net/article/details/122159231",target:"_blank",rel:"noopener noreferrer"},h=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Java\u5E76\u53D1\u57FA\u7840\u9762\u8BD5\u9898"),f={href:"https://javapub.blog.csdn.net/article/details/124008535",target:"_blank",rel:"noopener noreferrer"},b=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684JVM\u9762\u8BD5\u9898"),m={href:"https://javapub.blog.csdn.net/article/details/122087243",target:"_blank",rel:"noopener noreferrer"},u=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684MySQL\u57FA\u7840\u9762\u8BD5\u9898"),_={href:"https://javapub.blog.csdn.net/article/details/123761794",target:"_blank",rel:"noopener noreferrer"},v=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684ElasticSearch\u9762\u8BD5\u9898"),R={href:"https://javapub.blog.csdn.net/category_11740063.html",target:"_blank",rel:"noopener noreferrer"},K=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Spring\u9762\u8BD5\u9898"),L={href:"https://javapub.blog.csdn.net/category_11740063.html",target:"_blank",rel:"noopener noreferrer"},S=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Redis\u9762\u8BD5\u9898"),x={href:"https://javapub.blog.csdn.net/category_11740063.html",target:"_blank",rel:"noopener noreferrer"},y=t("10\u9053\u4E0D\u5F97\u4E0D\u4F1A\u7684Kafka\u9762\u8BD5\u9898"),I=r("p",null,[r("img",{src:"https://tvax2.sinaimg.cn/large/007F3CC8ly1h3dml6lpcxj30hs0ht0tb.jpg",alt:"91ec3d2507612867d21de87e798cbaba",loading:"lazy"})],-1);function O(P,W){const a=n("ExternalLinkIcon");return s(),i("div",null,[g,r("p",null,[r("a",c,[d,e(a)])]),r("p",null,[r("a",k,[h,e(a)])]),r("p",null,[r("a",f,[b,e(a)])]),r("p",null,[r("a",m,[u,e(a)])]),r("p",null,[r("a",_,[v,e(a)])]),r("p",null,[r("a",R,[K,e(a)])]),r("p",null,[r("a",L,[S,e(a)])]),r("p",null,[r("a",x,[y,e(a)])]),I])}var B=o(p,[["render",O],["__file","kafka-interview-must.html.vue"]]);export{B as default};
