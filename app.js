const posts=[
 {id:'start',title:'从零开始，先把一小段代码弄懂',category:'学习计划',date:'2026-10-15',time:'3 分钟',tags:['Python','学习方法'],summary:'给自己定一个起点：概念学一点，代码跑一点，结果想一想。先让每次学习都留下可以解释的东西。',label:'起步计划 · 整理稿',body:`
<div class="callout">这是一份根据当前学习目标整理的起步计划，供修改使用；不代表已经完成这些学习任务。</div>
<h2>为什么开始记录</h2><p>组会之后，一个明确的学习目标是：理解概念的同时，用代码验证自己的理解。现在 Python 基础为零，所以先从小实验开始，把每一步写清楚。</p>
<h2>先走通一个小循环</h2><ol><li>用自己的话解释一个概念。</li><li>读懂并运行一个最小例子。</li><li>只改一个变量，先预测结果。</li><li>比较预测与实际输出，写下原因。</li><li>记录还没有弄懂的问题。</li></ol>
<h2>第一阶段学什么</h2><p>先认识变量、列表、索引、循环和函数。接着学习数组的形状、简单的矩阵运算，再进入模型预测、损失和梯度下降。数学知识跟着例子同步补。</p>
<h2>接上深度学习清单</h2><p>线性模型之后，逐步学习 Logistic 回归、Softmax、激活函数、前向与反向传播。然后通过简单分类任务学习过拟合、正则化和卷积。注意力、Transformer、生成模型等主题放在基础实验之后逐步推进。</p>
<h2>给下次组会准备什么</h2><ul><li>一个可以运行并解释的代码例子。</li><li>一张结果图，或一组修改前后的输出。</li><li>一个明确的问题，以及下一步验证思路。</li></ul><p>每次记录不必长。把“我改了什么、结果如何、为什么”写清楚，就有价值。</p>`},
 {id:'loss',title:'一个参数，怎样影响预测和损失？',category:'代码实验',date:'2026-10-15',time:'4 分钟',tags:['线性模型','Loss','Python'],summary:'从 ŷ = w × x 出发，手算三个结果，再用 Python 验证。用最少的代码认识模型参数和平方损失。',label:'教学示例 · 待亲自运行',body:`
<div class="callout">教学示例：下面的输出根据公式计算，待你在自己的 Python 环境中运行验证。这里没有记录尚未进行的训练结果。</div>
<h2>这个实验想回答什么</h2><p>如果模型只有一个参数 <code>w</code>，修改它之后，预测会发生什么变化？怎样衡量预测与真实答案的差距？</p>
<h2>先看最小代码</h2><pre><code>x = 2\ny = 5\nw = 1\n\nprediction = w * x\nloss = (prediction - y) ** 2\n\nprint(prediction)\nprint(loss)</code></pre>
<h2>每个符号是什么意思</h2><ul><li><code>x</code>：输入，这里是 2。</li><li><code>y</code>：真实答案，这里是 5。</li><li><code>w</code>：模型参数，决定怎样把输入变成预测。</li><li><code>*</code>：乘法；<code>** 2</code>：平方。</li><li><code>prediction</code>：模型预测值。</li><li><code>loss</code>：预测值与真实值之差的平方。</li></ul>
<h2>运行之前，先自己算</h2><pre><code>w = 1 → prediction = 2 → loss = 9\nw = 2 → prediction = 4 → loss = 1\nw = 3 → prediction = 6 → loss = 1</code></pre><p>在这个单样本例子中，<code>w = 2.5</code> 时预测是 5，损失为 0。它说明这个样本可以被精确拟合，还不能说明模型在其他数据上表现如何。</p>
<h2>留一个自己的实验</h2><ol><li>依次把 <code>w</code> 改成 1、2、3，验证上面的输出。</li><li>把 <code>w</code> 改成 2.4，先算出损失，再运行。</li><li>把真实答案 <code>y</code> 改成 8，找出让损失最小的参数。</li></ol>
<h2>下一步的问题</h2><p>现在我们手动调整参数。接下来要学习：程序怎样利用梯度，自动调整参数，让损失变小？</p>`},
 {id:'template',title:'一次学习，只记清楚这五件事',category:'记录模板',date:'2026-10-15',time:'2 分钟',tags:['实验记录','组会'],summary:'问题、理解、代码、结果、疑问。把学习过程变成可以回看、复现和讨论的笔记。',label:'可复用模板',body:`
<h2>01 / 今天想弄懂什么</h2><p>只写一个具体问题。例如：“学习率变大，损失一定下降得更快吗？”</p>
<h2>02 / 我现在怎样理解</h2><p>先用自己的话解释，再补公式。哪些地方确定，哪些地方只是猜测，分开写。</p>
<h2>03 / 我运行了什么代码</h2><p>保存最小可运行代码。涉及外部库时记录版本；涉及数据时记录来源和划分。对照实验尽量只改一个因素，使用随机过程时记录随机种子。</p>
<h2>04 / 结果是什么</h2><p>写明修改前后的数值，或放一张图。区分运行观察与自己的解释。还没有运行的内容，标成“待验证”。</p>
<h2>05 / 我还没懂什么</h2><p>把疑问写成能继续验证的问题，再列一个下一步行动。</p>
<div class="callout">按这五项记录自己的学习过程，短一点也没关系。把代码与实际结果留下来，方便以后回看。</div>`}
];

const app=document.querySelector('#app');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function markdown(text){let out='',code=false,buf=[];for(const line of text.replace(/\r/g,'').split('\n')){if(line.startsWith('```')){if(code){out+='<pre><code>'+esc(buf.join('\n'))+'</code></pre>';buf=[];code=false}else code=true;continue}if(code){buf.push(line);continue}const h=line.match(/^(#{1,3})\s+(.*)/);if(h){out+=`<h${h[1].length}>${esc(h[2])}</h${h[1].length}>`;continue}if(line.trim())out+='<p>'+esc(line).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')+'</p>'}if(code)out+='<pre><code>'+esc(buf.join('\n'))+'</code></pre>';return out}
const entries=[...personalNotes.map(n=>({...n,summary:n.body.replace(/[#`*]/g,'').replace(/\s+/g,' ').slice(0,100),tags:[n.category],time:'学习记录',render:()=>markdown(n.body)})),...posts.filter(p=>!personalNotes.some(n=>n.id==='copy-'+p.id)).map(p=>({...p,render:()=>p.body}))];
function meta(p){return `<div class="post-meta"><span class="category">${esc(p.category)}</span><time>${esc(p.date)}</time><span>${esc(p.time)}</span></div>`}
function card(p){return `<a class="post" href="#post/${encodeURIComponent(p.id)}">${meta(p)}<h3>${esc(p.title||'未命名笔记')}</h3><p>${esc(p.summary)}</p><div class="post-bottom"><span class="tags">${p.tags.map(t=>`# ${esc(t)}`).join(' · ')}</span><span class="arrow">↗</span></div></a>`}
function home(){app.innerHTML=`<section class="hero"><div><div class="eyebrow"><i class="dot"></i>LEARNING IN PUBLIC</div><h1>从零开始，<br><em>边学边记。</em></h1><p>记录深度学习的概念、代码与实验。<br>每次弄懂一点，就留下一点记录。</p><div class="hero-foot"><span class="pill">Python 零基础起步</span><span>学习进行中</span></div></div><div class="code-paper"><div class="code-top"><span>first_step.py</span><span>PYTHON / 001</span></div><pre># 从一个能看懂的例子开始\nx = 2\nw = 1\nprediction = w * x\nprint(prediction)</pre><div class="result">↳ 预期输出：2</div></div></section><div class="body-grid"><section><div class="section-label"><h2>学习笔记</h2><small>NOTES & EXPERIMENTS</small></div><div class="controls"><span class="fine">概念、代码，还有暂时的疑问。</span><input class="search" type="search" placeholder="搜索笔记…" aria-label="搜索笔记"></div><div id="post-list">${entries.map(card).join('')}</div></section><aside><div class="side-block"><div class="side-heading">关于这里</div><div class="about-avatar">初</div><h3>一个学习中的人。</h3><p>从 Python 零基础开始，<br>尝试用代码理解深度学习。</p></div><div class="quote">每次弄懂一点，<br>就留下一点记录。</div></aside></div>`;app.querySelector('input').oninput=e=>{const q=e.target.value.toLowerCase();const found=entries.filter(p=>[p.title,p.summary,p.category].join(' ').toLowerCase().includes(q));document.querySelector('#post-list').innerHTML=found.length?found.map(card).join(''):'<p class="empty">没有找到相关笔记。</p>'}}
function article(id){const p=entries.find(n=>n.id===id);if(!p){app.innerHTML='<p class="empty">这篇笔记不存在。<a href="#home">返回首页</a></p>';return}app.innerHTML=`<div class="page-top"><a href="#home">← 返回笔记</a></div><article class="article"><header class="article-header">${meta(p)}<h1>${esc(p.title||'未命名笔记')}</h1></header><div class="article-content">${p.render()}</div><div class="article-actions"><a class="btn" href="#home">返回首页</a></div></article>`;document.title=p.title+' · 学习笔记'}
function roadmap(){const stages=[['01','Python 与数组基础','变量、列表、索引、循环、函数；数组形状和矩阵运算。'],['02','线性模型与梯度下降','模型预测、损失、学习率；Logistic 回归与 Softmax。'],['03','神经网络与训练','张量、自动求导、激活函数、过拟合与正则化。'],['04','卷积与注意力','卷积、池化、基础网络、自注意力与 Transformer。']];app.innerHTML='<div class="page-top"><a href="#home">← 返回笔记</a></div><h1 class="page-title">一步一步，走通基础。</h1><p class="route-intro">建议学习路线，结合小实验逐步推进。</p><div class="route-grid">'+stages.map(s=>`<section class="route-card"><span class="route-num">${s[0]}</span><h2>${s[1]}</h2><p>${s[2]}</p></section>`).join('')+'</div>'}
function router(){document.title='学习笔记';const [page,id]=location.hash.slice(1).split('/');if(!page||page==='home')home();else if(page==='post')article(decodeURIComponent(id||''));else if(page==='roadmap')roadmap();else app.innerHTML='<p class="empty">页面不存在。<a href="#home">返回首页</a></p>';window.scrollTo(0,0)}window.addEventListener('hashchange',router);router();
