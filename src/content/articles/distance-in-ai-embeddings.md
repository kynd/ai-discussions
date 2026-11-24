---
title: "Distance in AI: Embeddings and the Geometry of Meaning  AIにおける距離 — 埋め込みと意味の幾何学"
created: 2026-11-22
updated: 2026-11-22
topics: ["artificial-intelligence", "distance", "embeddings", "language"]
---

Modern AI systems represent words, sentences, images and documents as "embeddings": lists of hundreds or thousands of numbers, which can be treated as points in a high-dimensional space. They are trained so that things with similar meanings end up close together, which turns questions about meaning into questions about distance. In 2013 Tomáš Mikolov and colleagues showed that word vectors learned from text support striking arithmetic: the vector for "king", minus "man", plus "woman", lands near "queen". Search engines, recommendation systems and retrieval for chatbots now work by finding the nearest neighbours of a query in such a space, usually measured by the cosine of the angle between vectors rather than straight-line distance. This site's own search works this way. Distance in these spaces behaves differently from everyday distance: in very high dimensions, the nearest and farthest points can be almost equally far away, and the geometry inherits the biases of the text it learned from. Embeddings rest on an old idea from linguistics, that words are known by the company they keep, and they raise a question philosophers have asked about all such models: whether closeness in a space of numbers captures meaning or only patterns of use.

<!-- -->

現代のAIシステムは、単語や文、画像、文書を「埋め込み（エンベディング）」として表します。数百から数千の数のリストで、高次元の空間のなかの点として扱うことができます。埋め込みは、意味の似たものどうしが近くに来るように訓練されるため、意味についての問いが距離についての問いに置き換わります。2013年、トマーシュ・ミコロフらは、文章から学んだ単語ベクトルが驚くような計算を許すことを示しました。「王」のベクトルから「男」を引き、「女」を足すと、「女王」の近くに着きます。検索エンジンや推薦システム、チャットボットのための情報検索は、いまでは、こうした空間のなかで問い合わせのいちばん近い点を探すことで動いています。近さはたいてい、直線の距離ではなく、ベクトルどうしの角度のコサインで測ります。このサイトの検索も、同じ仕組みです。こうした空間の距離は、日常の距離とは違うふるまいをします。非常に高い次元では、いちばん近い点といちばん遠い点がほとんど同じくらい離れていることがあり、その幾何学は、学習した文章の偏りを受け継ぎます。埋め込みは、言葉はどんな言葉と一緒に現れるかで知られる、という言語学の古い考えに支えられています。そして、こうしたモデルのすべてについて哲学者が問うてきたこと、つまり数の空間での近さは意味をとらえているのか、それとも使われ方のパターンをとらえているだけなのか、という問いを投げかけています。

---

## Why embeddings became central
## 埋め込みが中心になった理由

Three things made embeddings central to AI. Computers needed a way to represent words that captured similarity, which earlier methods of treating each word as an unrelated symbol could not do. Huge collections of digital text made it possible to learn such representations from patterns of use. And fast hardware made nearest-neighbour search over millions of vectors practical. The mathematics behind them is the general idea of [a distance](/articles/what-is-a-distance/): once objects are points in a space with a metric or similarity measure, "similar" becomes "nearby". This is a striking case of [abstraction](/articles/what-is-abstraction/), in which meaning is reduced to position. It also connects to debates about whether AI systems that work this way [understand anything](/articles/ai-desire-and-consciousness/), and to [complex systems](/articles/complex-systems-models-and-reality/) questions about what a model leaves out.

<!-- -->

埋め込みがAIの中心になった理由は三つあります。一つ目に、計算機は、似ていることをとらえられる単語の表し方を必要としていました。それぞれの単語を互いに無関係な記号として扱う以前のやり方では、それができませんでした。二つ目に、膨大なデジタルの文章が集まったことで、使われ方のパターンからそうした表現を学べるようになりました。三つ目に、高速なハードウェアによって、何百万ものベクトルから最も近いものを探すことが実用的になりました。その背後にある数学は、[距離](/articles/what-is-a-distance/)という一般的な考えです。対象が、距離や類似度の尺度をもつ空間のなかの点になれば、「似ている」は「近い」に置き換わります。これは、意味が位置に還元されるという、[抽象](/articles/what-is-abstraction/)の際立った例です。さらに、このように働くAIシステムが[何かを理解しているのか](/articles/ai-desire-and-consciousness/)という議論や、モデルが何を取りこぼすのかという[複雑系](/articles/complex-systems-models-and-reality/)の問いにもつながっています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://blog.acolyer.org/2016/04/21/the-amazing-power-of-word-vectors/">The amazing power of word vectors (The Morning Paper)</a> — Readable introduction to word2vec and what word vectors can do.<span class="ja">word2vecと単語ベクトルにできることを読みやすく紹介する記事。</span></li>
</ul>
</aside>

---

## You shall know a word by the company it keeps
## 言葉は仲間によって知られる

Embeddings rest on the "distributional hypothesis" of mid-twentieth-century linguistics. Zellig Harris argued in the 1950s that words with similar meanings tend to occur in similar contexts, and J. R. Firth put it memorably in 1957: "You shall know a word by the company it keeps." If "coffee" and "tea" both appear near "cup", "drink" and "morning", a system that tracks these contexts will place them close together, without ever being told what either word means. Early computational versions, from the 1990s, built large tables of word co-occurrence counts and compressed them. In 2013, Mikolov and colleagues at Google introduced word2vec, which trained a small neural network to predict words from their neighbours and produced vectors of a few hundred dimensions from billions of words of text ([Mikolov et al.](https://arxiv.org/pdf/1301.3781.pdf)). Its speed and the quality of its vectors made embeddings a standard tool.

<!-- -->

埋め込みは、二十世紀半ばの言語学の「分布仮説」に支えられています。ゼリグ・ハリスは1950年代、意味の似た単語は似た文脈に現れやすいと論じ、J・R・ファースは1957年、それを「言葉はその仲間によって知られる」という印象的な言葉で言い表しました。「コーヒー」と「紅茶」がどちらも「カップ」「飲む」「朝」の近くに現れるなら、こうした文脈を追いかけるシステムは、どちらの言葉の意味も教わらないまま、二つを近くに置くことになります。1990年代の初期の計算的な手法は、単語がいっしょに現れる回数の大きな表をつくり、それを圧縮していました。2013年、グーグルのミコロフらはword2vecを発表します。小さなニューラルネットワークに、周りの単語から単語を予測するよう訓練させ、何十億語もの文章から、数百次元のベクトルをつくり出す手法です（[ミコロフら](https://arxiv.org/pdf/1301.3781.pdf)）。その速さとベクトルの質によって、埋め込みは標準的な道具になりました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://ar5iv.labs.arxiv.org/html/1301.3781">Efficient Estimation of Word Representations in Vector Space (readable HTML)</a> — The 2013 word2vec paper.<span class="ja">2013年のword2vecの論文。</span></li>
<li><a href="https://arxiv.org/pdf/2407.11766">Vectoring Languages (arXiv)</a> — Essay on what vector representations of language do and do not capture.<span class="ja">言語のベクトル表現が何をとらえ、何をとらえないかを論じる論考。</span></li>
</ul>
</aside>

---

## Directions that carry meaning
## 意味をもつ方向

The most famous result was not about distance alone but about direction. In a 2013 paper, Mikolov, Wen-tau Yih and Geoffrey Zweig reported that the difference between vectors captured relationships: ["King − Man + Woman" results in a vector very close to "Queen"](https://aclanthology.org/N13-1090.pdf). Similar offsets linked countries to capitals and verbs to their past tenses. The analogy is solved by computing the target vector and returning the word with the highest cosine similarity to it. The examples caught the public imagination, but later research tempered them. The standard method excludes the input words from the answers, which hides cases where "king" itself is the nearest word, and the regularities work well for some relationships and poorly for others. The geometry is real but rougher than the famous examples suggest. Embeddings learned from human text also absorb human stereotypes. In 2016 Tolga Bolukbasi and colleagues showed that the same arithmetic produced "man is to computer programmer as woman is to homemaker", and proposed ways to reduce such associations.

<!-- -->

もっとも有名な結果は、距離だけでなく方向にかかわるものでした。2013年の論文で、ミコロフ、ウェンタウ・イー、ジェフリー・ツヴァイクは、ベクトルの差が関係をとらえていると報告しています。[「王 − 男 + 女」は「女王」にとても近いベクトルになる](https://aclanthology.org/N13-1090.pdf)、というものです。同じような差は、国と首都、動詞とその過去形も結びつけていました。類推は、目標のベクトルを計算し、それとのコサイン類似度がいちばん高い単語を返すことで解かれます。こうした例は人々の想像力をとらえましたが、のちの研究はそれを割り引いて見るようになります。標準的な手法は答えから入力の単語を除いているため、「王」そのものがいちばん近い単語になる場合が隠れてしまいます。また、この規則性は関係によってうまく働くこともあれば、働かないこともあります。幾何学は本物ですが、有名な例が示すよりも粗いものです。人間の文章から学んだ埋め込みは、人間のステレオタイプも吸収します。2016年、トルガ・ボルクバシらは、同じ計算から「男性にとってのコンピュータ・プログラマーは、女性にとっての主婦」という結果が出ることを示し、そうした連想を弱める方法を提案しました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.microsoft.com/en-us/research/publication/linguistic-regularities-in-continuous-space-word-representations/">Linguistic Regularities in Continuous Space Word Representations (Microsoft Research)</a> — Publication page for the 2013 analogy paper.<span class="ja">2013年の類推の論文の紹介ページ。</span></li>
</ul>
</aside>

---

## Cosine similarity and the shape of the space
## コサイン類似度と空間の形

Embedding systems usually measure closeness by cosine similarity, the cosine of the angle between two vectors, rather than Euclidean distance. Cosine similarity ignores length and looks only at direction: two vectors pointing the same way score 1, perpendicular ones score 0. This suits text, where a vector's length often reflects things like word frequency or document length rather than meaning. When vectors are normalised to length 1, as many models do, ranking by cosine similarity and ranking by Euclidean distance give the same order, and the cosine is simply the dot product. Cosine similarity is a similarity, not a distance: larger means closer, and "1 minus cosine" does not satisfy the triangle inequality, although the angle itself does. Large-scale systems also rarely search exactly. With billions of vectors they use approximate nearest-neighbour methods that trade a little accuracy for speed, which is why a search may occasionally miss the true nearest match.

<!-- -->

埋め込みのシステムはたいてい、ユークリッド距離ではなく、二つのベクトルのなす角のコサイン、つまりコサイン類似度で近さを測ります。コサイン類似度は長さを無視し、方向だけを見ます。同じ向きの二つのベクトルは 1、直交するベクトルは 0 になります。これは文章に向いています。ベクトルの長さは、意味よりも、単語の頻度や文書の長さを反映していることが多いからです。多くのモデルのようにベクトルを長さ 1 にそろえておくと、コサイン類似度で並べても、ユークリッド距離で並べても同じ順番になり、コサインはただの内積になります。コサイン類似度は距離ではなく類似度で、大きいほど近いことを表します。「1 − コサイン」は三角不等式を満たしませんが、角度そのものは満たします。大規模なシステムは、厳密に探すこともめったにありません。何十億ものベクトルがあると、少しの正確さと引き換えに速さを得る近似最近傍探索の手法を使います。検索がときおり本当にいちばん近いものを見逃すのは、そのためです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.ibm.com/think/topics/distance-metrics">What are distance metrics? (IBM)</a> — Overview of cosine, Euclidean and other measures used in machine learning.<span class="ja">機械学習で使われるコサイン、ユークリッドなどの尺度の概説。</span></li>
</ul>
</aside>

---

## The curse of dimensionality
## 次元の呪い

High-dimensional spaces are strange. In a cube with hundreds of dimensions, almost all the volume lies near the surface, and randomly scattered points are nearly all at about the same distance from one another. Kevin Beyer and colleagues showed in 1999 that, under broad conditions, as the number of dimensions grows [the distance to the nearest neighbour approaches the distance to the farthest](https://minds.wisc.edu/items/4c666f43-b2e4-40d1-bba3-e34072be1576), so that "nearest" stops meaning much. They also noted that real data often escape this fate, because they are not scattered at random but lie near lower-dimensional structures. Embeddings work for this reason: although a model may use hundreds of dimensions, meaningful data occupy a much smaller, structured region, and distances within it remain informative. The phrase "curse of dimensionality", coined by the mathematician Richard Bellman in the 1950s, is a reminder that intuitions from two or three dimensions can mislead badly in the spaces where AI operates.

<!-- -->

高次元の空間は奇妙です。何百次元もある立方体では、体積のほとんどが表面の近くにあり、でたらめにばらまいた点はほぼすべて、互いにだいたい同じ距離にあります。ケヴィン・ベイヤーらは1999年、幅広い条件のもとで、次元が増えるにつれて[いちばん近い点までの距離が、いちばん遠い点までの距離に近づいていく](https://minds.wisc.edu/items/4c666f43-b2e4-40d1-bba3-e34072be1576)ことを示しました。そうなると「いちばん近い」はあまり意味をもたなくなります。同時に、現実のデータはでたらめにばらまかれているのではなく、より低い次元の構造の近くにあるため、この運命を免れることが多い、とも指摘しています。埋め込みが働くのはそのためです。モデルが何百もの次元を使っていても、意味のあるデータが占めるのはずっと小さく、構造をもった領域であり、そのなかの距離は情報を保っています。数学者リチャード・ベルマンが1950年代につくった「次元の呪い」という言葉は、二次元や三次元から得た直観が、AIのはたらく空間ではひどく人を誤らせうることを思い出させてくれます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://link.springer.com/chapter/10.1007%2F3-540-49257-7_15">Beyer et al., When Is "Nearest Neighbor" Meaningful? (Springer)</a> — The 1999 paper on distance concentration.<span class="ja">距離の集中を論じた1999年の論文。</span></li>
<li><a href="https://www.cs.umd.edu/users/hjs/mkbook/chapter4.pdf">Samet, High-dimensional data (chapter, PDF)</a> — Textbook chapter on searching in high-dimensional spaces.<span class="ja">高次元空間での探索を扱う教科書の章。</span></li>
</ul>
</aside>

---

## Sentence embeddings and how this site searches
## 文の埋め込みと、このサイトの検索

Later models embed whole sentences and passages, not just words, using transformer networks trained so that texts with related meanings land close together. The model [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), for example, maps a sentence or paragraph to a point in a 384-dimensional space. It was fine-tuned on about a billion pairs of related sentences with a contrastive objective: the model learns to pick out the true partner of a sentence from many decoys, which pulls related texts together and pushes unrelated ones apart. This site uses that model for its search. When the site is built, each essay is embedded once. When a reader types a query, the browser embeds it with the same model and computes the cosine similarity between the query and every essay. Because embeddings can miss exact names, the score adds half the weight of a plain word match, so that a person or a year named anywhere in an essay is always found. The "related essays" at the foot of each page are simply each essay's nearest neighbours in the same space.

<!-- -->

のちのモデルは、単語だけでなく文や段落全体を埋め込みます。トランスフォーマーと呼ばれるネットワークを使い、意味の関連する文章どうしが近くに来るように訓練されています。たとえば[all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)というモデルは、文や段落を384次元の空間のなかの一点に写します。このモデルは、関連する文の組およそ十億組で、対照的な目的関数を使って微調整されました。ある文の本当の相方を、たくさんのおとりのなかから選び出すことを学ぶので、関連する文章は引き寄せられ、無関係な文章は遠ざけられます。このサイトの検索は、このモデルを使っています。サイトをビルドするとき、それぞれのエッセイが一度だけ埋め込まれます。読者が問い合わせを打ちこむと、ブラウザが同じモデルでそれを埋め込み、問い合わせとすべてのエッセイのあいだのコサイン類似度を計算します。埋め込みは正確な名前を取りこぼすことがあるので、スコアにはふつうの語の一致を半分の重みで加えています。そのため、エッセイのどこかに出てくる人名や年は、かならず見つかります。各ページの下に並ぶ「関連するエッセイ」は、同じ空間のなかで、それぞれのエッセイにいちばん近いエッセイにすぎません。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">all-MiniLM-L6-v2 model card (Hugging Face)</a> — Details of the model this site uses, its training and its limits.<span class="ja">このサイトが使っているモデルの訓練と限界についての詳細。</span></li>
</ul>
</aside>

---

## Distances between distributions in AI
## AIにおける分布のあいだの距離

AI also measures distance between whole probability distributions. Training a language model means making its predicted distribution over the next word close to the distribution in real text, and the measure usually minimised, cross-entropy, is equivalent to minimising the Kullback–Leibler divergence, which is [not a true distance](https://www.johndcook.com/blog/2017/11/08/why-is-kullback-leibler-divergence-not-a-distance/) because it is asymmetric. Generative image models are often compared using the Fréchet Inception Distance (FID), which embeds real and generated images and measures how far apart the two clouds of points are; it descends from a distance between probability laws studied by Maurice Fréchet ([history](https://arxiv.org/pdf/2604.21745)). The Wasserstein or "earth mover's" distance, which measures the cost of moving one distribution into another, was used in 2017 to stabilise the training of generative adversarial networks. In each case, the choice of distance shapes what the model learns to care about, a point familiar from [the mathematics of distance](/articles/what-is-a-distance/).

<!-- -->

AIは、確率分布全体のあいだの距離も測ります。言語モデルを訓練するとは、次の単語についてモデルが予測する分布を、現実の文章での分布に近づけることです。ふつう最小化される尺度である交差エントロピーは、カルバック・ライブラー・ダイバージェンスを最小化することと同じですが、これは非対称なので[本物の距離ではありません](https://www.johndcook.com/blog/2017/11/08/why-is-kullback-leibler-divergence-not-a-distance/)。画像を生成するモデルは、しばしばフレシェ・インセプション距離（FID）で比べられます。本物の画像と生成された画像を埋め込み、二つの点の雲がどれだけ離れているかを測るもので、モーリス・フレシェが研究した確率法則のあいだの距離に由来しています（[歴史](https://arxiv.org/pdf/2604.21745)）。ある分布を別の分布に移すコストを測るワッサースタイン距離、つまり「土砂運搬距離」は、2017年、敵対的生成ネットワークの訓練を安定させるために使われました。どの場合も、どの距離を選ぶかが、モデルが何を大切にするよう学ぶかを左右します。これは[距離の数学](/articles/what-is-a-distance/)でおなじみの論点です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/1908.09211">Relation between the Kantorovich–Wasserstein metric and the Kullback–Leibler divergence (arXiv)</a> — How the two measures of difference between distributions compare.<span class="ja">分布の違いを測る二つの尺度がどう比べられるかを論じる論文。</span></li>
</ul>
</aside>

---

## Does closeness capture meaning?
## 近さは意味をとらえているのか

The success of embeddings has revived an old philosophical question. On one view, associated with the later Wittgenstein's idea that meaning is use, a system that maps words by their patterns of use has captured something real about meaning. On another, closeness in an embedding space reflects only statistical association: "hot" and "cold" are near each other because they appear in similar contexts, even though they mean opposites, and the space does not connect words to the things they refer to. Researchers have also found that some celebrated geometric regularities partly reflect how results were reported. In practice, embeddings work well enough to run search engines, including this site's, while still failing in ways that show their limits. They are a vivid example of [abstraction](/articles/abstract-and-concrete/): meaning turned into position, useful precisely because so much is left out.

<!-- -->

埋め込みの成功は、古い哲学の問いをよみがえらせました。一つの見方は、意味とは使用であるという後期ウィトゲンシュタインの考えに結びつくもので、言葉を使われ方のパターンによって配置するシステムは、意味について何か本当のものをとらえている、と考えます。もう一つの見方では、埋め込み空間での近さは統計的な結びつきを映しているにすぎません。「熱い」と「冷たい」は意味が反対なのに、似た文脈に現れるので近くに置かれます。しかもこの空間は、言葉を、それが指す物とは結びつけていません。研究者たちは、有名な幾何学的規則性の一部が、結果の報告の仕方を部分的に反映していたことも見いだしています。実際には、埋め込みはこのサイトを含む検索エンジンを動かせるほどうまく働きながら、その限界を示すような失敗もします。それは、意味を位置に変え、多くを省くからこそ役に立つという、[抽象](/articles/abstract-and-concrete/)の生き生きとした例です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.ccs.neu.edu/home/vip/teach/DMcourse/4_TF_supervised/notes_slides/NIPS-DeepLearningWorkshop-NNforText.pdf">Mikolov, Neural networks for text (slides, PDF)</a> — Workshop slides on how word vectors are learned and used.<span class="ja">単語ベクトルがどう学ばれ、使われるかを解説するワークショップのスライド。</span></li>
</ul>
</aside>
