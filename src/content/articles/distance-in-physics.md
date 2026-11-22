---
title: "Distance in Physics: From Euclid to Curved Spacetime  物理学における距離 — ユークリッドから曲がった時空へ"
created: 2026-11-22
updated: 2026-11-22
topics: ["physics", "distance", "relativity", "cosmology"]
---

For most of history, physical distance was assumed to be Euclidean: space was a fixed stage, and the distance between two places was the same for everyone. Relativity changed this. Bernhard Riemann's lecture of 1854 had already shown how to build geometries in which distance is defined point by point and space can curve. In 1908 Hermann Minkowski recast Einstein's special relativity as a geometry of four-dimensional spacetime, in which the basic measure between two events is the "interval". Unlike ordinary distance, the interval can be zero between distinct events joined by a light ray, and its sign tells whether one event can influence the other. In general relativity (1915), gravity *is* the geometry: the metric that gives distances and times varies from place to place with matter and energy. Distance then depends on who measures it and how. Near a black hole, the coordinate picture and the distance a ruler would measure disagree, and in an expanding universe astronomers use several different distances — comoving, luminosity, angular-diameter — that give different numbers for the same galaxy. None of them is the "true" distance; each answers a different question.

<!-- -->

歴史の大半を通じて、物理的な距離はユークリッド的なものだと考えられてきました。空間は固定された舞台で、二つの場所のあいだの距離は誰にとっても同じでした。これを変えたのが相対性理論です。ベルンハルト・リーマンは1854年の講演で、距離が一点ごとに定められ、空間が曲がりうる幾何学を組み立てる方法をすでに示していました。1908年、ヘルマン・ミンコフスキーは、アインシュタインの特殊相対性理論を四次元の時空の幾何学として描き直します。そこで二つの出来事のあいだの基本的な尺度となるのが「間隔」です。間隔はふつうの距離と違い、光線で結ばれた異なる出来事のあいだではゼロになり、その符号によって、一方の出来事が他方に影響を及ぼしうるかどうかがわかります。一般相対性理論（1915年）では、重力*そのもの*が幾何学です。距離と時間を与える計量は、物質とエネルギーに応じて場所ごとに変わります。そうなると距離は、誰がどう測るかによって変わってきます。ブラックホールの近くでは、座標で描いた像と、物差しで測ったときの距離が食い違います。膨張する宇宙では、天文学者は共動距離、光度距離、角径距離といういくつもの距離を使い分けますが、同じ銀河でもそれぞれ違う数字になります。どれかが「本当の」距離というわけではありません。それぞれが別の問いに答えています。

---

## Driving forces and connections
## 推進力とつながり

Two developments in the nineteenth century prepared the change. Non-Euclidean geometries, built by Lobachevsky, Bolyai and others, showed that Euclid's axioms are not logically necessary, and Riemann generalised geometry to spaces of any dimension with a variable measure of length. Meanwhile, electromagnetism implied that light always travels at the same speed, which clashed with Newton's absolute space and time. Einstein's special relativity (1905) resolved the clash by letting lengths and durations depend on the observer's motion, and Minkowski showed that a combined quantity stays the same for everyone. General relativity then used Riemann's mathematics to describe gravity. These ideas connect to the mathematical notion of [what a distance is](/ai-discussions/articles/what-is-a-distance/), though the spacetime interval breaks several of its rules, and to [abstraction in mathematics](/ai-discussions/articles/abstraction-in-mathematics/), where Riemannian geometry is a classic example of a theory built without physics in mind that later fitted nature.

<!-- -->

十九世紀の二つの展開が、この変化の下地をつくりました。一つは、ロバチェフスキーやボーヤイらが築いた非ユークリッド幾何学です。エウクレイデスの公理が論理的に必然ではないことが示され、リーマンは幾何学を、長さの尺度が場所ごとに変わる、任意の次元の空間へと一般化しました。もう一つは電磁気学です。光はつねに同じ速さで進むことになり、これはニュートンの絶対空間・絶対時間とぶつかりました。アインシュタインの特殊相対性理論（1905年）は、長さや時間の長さを観測者の運動によって変わるものとすることで、この衝突を解きます。ミンコフスキーは、それらを組み合わせた量が誰にとっても変わらないことを示しました。一般相対性理論は、リーマンの数学を使って重力を記述しています。こうした考えは、[距離とは何か](/ai-discussions/articles/what-is-a-distance/)という数学の考えにつながっていますが、時空の間隔はその規則のいくつかを破っています。また、物理学を念頭に置かずにつくられ、のちに自然に当てはまった理論の典型として、[数学における抽象](/ai-discussions/articles/abstraction-in-mathematics/)とも結びついています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/1904.01845">From Euclid to Riemann and Beyond (arXiv)</a> — Historical survey of how ideas of geometry and space changed.<span class="ja">幾何学と空間の考えがどう変わってきたかを概観する歴史的な論文。</span></li>
</ul>
</aside>

---

## Riemann: distance defined point by point
## リーマン — 一点ごとに定められる距離

On 10 June 1854, Bernhard Riemann gave his habilitation lecture at Göttingen, ["On the Hypotheses which lie at the Foundations of Geometry"](https://emis.univie.ac.at/classics/Riemann/Geom.pdf), on a topic chosen by Gauss. He proposed that a space of any number of dimensions could carry its own rule for measuring tiny lengths, written today as a "line element" *ds*² built from a table of coefficients, the metric tensor, that may change from point to point. Distances along a curve are then found by adding up these tiny lengths, and the shortest paths, called geodesics, need not be straight lines. On the surface of the Earth, for example, the shortest route between two cities is an arc of a great circle, which is why flights from Tokyo to New York curve far to the north, over Alaska and Canada. Riemann also suggested that whether physical space is curved is a question for experiment, not for pure reason. Because the lecture was given to a general faculty audience, it contained almost no formulas, and the explicit mathematics was developed by later geometers.

<!-- -->

1854年6月10日、ベルンハルト・リーマンはゲッティンゲンで、ガウスが選んだ主題による教授資格講演[「幾何学の基礎にある仮説について」](https://emis.univie.ac.at/classics/Riemann/Geom.pdf)を行いました。どんな次元の空間にも、ごく小さな長さを測る独自の規則をもたせることができる、という提案です。今日の書き方では、それは係数の表、つまり計量テンソルからつくられる「線素」*ds*² で表され、その係数は点ごとに変わってかまいません。曲線に沿った距離は、この小さな長さを足し合わせて求めます。最短の道筋は測地線と呼ばれ、まっすぐな線とはかぎりません。たとえば地球の表面では、二つの都市を結ぶ最短の道は大円の弧になります。東京からニューヨークへの便が、アラスカやカナダの上空まで大きく北に弧を描くのはそのためです。リーマンはまた、物理的な空間が曲がっているかどうかは、純粋な理性ではなく実験によって決まる問いだと示唆しています。講演は幅広い学部の聴衆に向けたものだったため、数式はほとんど含まれておらず、具体的な数学はのちの幾何学者たちが展開しました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://sidoli.w.waseda.jp:443/Gray_2010_Worlds_18_Riemann.pdf">Gray, Riemann (Worlds Out of Nothing, PDF)</a> — Chapter on Riemann's lecture and its context.<span class="ja">リーマンの講演とその背景を扱った章。</span></li>
<li><a href="https://arxiv.org/pdf/1711.01755">Physics in Riemann's mathematical papers (arXiv)</a> — How physical ideas shaped Riemann's geometry.<span class="ja">物理学の考えがリーマンの幾何学をどう形づくったかを論じる論文。</span></li>
</ul>
</aside>

---

## Minkowski: the spacetime interval
## ミンコフスキー — 時空の間隔

In special relativity, observers moving relative to one another disagree about lengths and about how much time passes between two events. Hermann Minkowski showed in 1908, in a lecture later published as "Space and Time", that they all agree on one combination: the spacetime interval, roughly the square of the time separation (multiplied by the speed of light) minus the square of the space separation. He declared that space by itself and time by itself were "doomed to fade away into mere shadows". The interval behaves very differently from a distance. It can be positive (timelike: one event can cause the other), negative (spacelike: no signal can connect them), or [zero between two different events](https://en.wikipedia.org/wiki/Minkowski_space) joined by a light ray. The set of events at zero interval from a given event forms its light cone, which separates its possible past and future from the rest. Along the path of a moving clock, the interval measures "proper time", the time the clock itself records. Because of the minus sign, the straight path between two events is the *longest* in proper time, which is why the twin who travels and returns ages less.

<!-- -->

特殊相対性理論では、互いに動いている観測者たちは、長さについても、二つの出来事のあいだにどれだけ時間がたつかについても意見が一致しません。ヘルマン・ミンコフスキーは1908年、のちに「空間と時間」として出版された講演で、それでも全員が一致する組み合わせが一つあることを示しました。時空の間隔です。おおまかに言えば、時間の隔たり（光速をかけたもの）の二乗から空間の隔たりの二乗を引いた量です。ミンコフスキーは、空間そのものと時間そのものは「ただの影へと消えていく運命にある」と宣言しました。間隔は、距離とはまるで違うふるまいをします。正（時間的：一方の出来事が他方の原因になりうる）にも、負（空間的：どんな信号も両者を結べない）にもなり、光線で結ばれた[二つの異なる出来事のあいだではゼロ](https://en.wikipedia.org/wiki/Minkowski_space)になります。ある出来事から間隔ゼロにある出来事の集まりがその光円錐で、ありうる過去と未来を、それ以外の部分から切り分けます。動く時計の道筋に沿って測った間隔は「固有時」、つまり時計そのものが刻む時間になります。マイナス符号があるため、二つの出来事を結ぶまっすぐな道筋は、固有時で測ると*いちばん長く*なります。旅に出て戻ってきた双子のほうが若いのは、このためです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://de.wikisource.org/wiki/Raum_und_Zeit_(Minkowski)">Minkowski, Raum und Zeit (Wikisource)</a> — Original German text of the 1908 lecture.<span class="ja">1908年の講演のドイツ語原文。</span></li>
<li><a href="https://arxiv.org/pdf/1210.6929">Born, Einstein and Minkowski's space-time formalism (arXiv)</a> — History of how Minkowski's geometry was received.<span class="ja">ミンコフスキーの幾何学がどう受け入れられたかの歴史。</span></li>
<li><a href="https://encyclopediaofmath.org/wiki/Minkowski_space">Minkowski space (Encyclopedia of Mathematics)</a> — Definitions of timelike, spacelike and null vectors.<span class="ja">時間的・空間的・ヌルのベクトルの定義。</span></li>
</ul>
</aside>

---

## General relativity: geometry is gravity
## 一般相対性理論 — 幾何学が重力である

In general relativity, completed by Einstein in 1915, the spacetime metric is no longer fixed. Matter and energy determine how it curves, and free-falling bodies follow its geodesics: the Earth orbits the Sun not because a force pulls it sideways but because it follows the straightest possible path through curved spacetime. Distance then becomes something one has to define carefully. Coordinates are labels and need not measure anything directly. Near a non-rotating black hole, for instance, the usual Schwarzschild coordinates make it look as though an infalling object never reaches the horizon, because the coordinate time diverges; yet the object crosses it in a finite time by its own clock, and the distance a chain of rulers would measure from outside to the horizon is [finite](https://arxiv.org/pdf/1708.00748). Different methods — rulers laid end to end, the travel time of light signals (radar distance), the apparent size or brightness of an object — need not agree in curved spacetime, because each uses a different combination of space and time.

<!-- -->

アインシュタインが1915年に完成させた一般相対性理論では、時空の計量はもはや固定されていません。物質とエネルギーが計量の曲がり方を決め、自由落下する物体はその測地線に沿って進みます。地球が太陽のまわりを回るのは、力に横向きに引かれるからではなく、曲がった時空のなかで、できるかぎりまっすぐな道をたどっているからです。そうなると、距離は注意深く定義しなければならないものになります。座標はただの名札で、何かを直接測っているとはかぎりません。たとえば回転していないブラックホールの近くでは、ふつうのシュヴァルツシルト座標を使うと、落ちていく物体はいつまでも地平面に届かないように見えます。座標時間が無限大に発散するからです。ところが物体自身の時計では、有限の時間で地平面を越えます。外側から地平面まで、物差しをつないで測った距離も[有限](https://arxiv.org/pdf/1708.00748)です。物差しを端から端へ並べる方法、光の信号が往復する時間で測る方法（レーダー距離）、物体の見かけの大きさや明るさから測る方法は、曲がった時空ではかならずしも一致しません。それぞれが、空間と時間の異なる組み合わせを使っているからです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/gr-qc/9704043">Gravitational Waves and Black Holes: an Introduction to General Relativity (arXiv)</a> — Lecture notes introducing the metric and black holes.<span class="ja">計量とブラックホールを紹介する講義ノート。</span></li>
<li><a href="https://en.wikipedia.org/wiki/Eddington%E2%80%93Finkelstein_coordinates">Eddington–Finkelstein coordinates (Wikipedia)</a> — Coordinates that remove the apparent singularity at the horizon.<span class="ja">地平面での見かけの特異点を取り除く座標の解説。</span></li>
</ul>
</aside>

---

## Distances in an expanding universe
## 膨張する宇宙での距離

Cosmology makes the problem sharper. Because space expands while light travels, "how far away is that galaxy?" has several answers. The comoving distance is measured on a grid that expands with the universe, so it stays fixed for galaxies carried along by the expansion. The luminosity distance is the distance at which an object of known brightness would appear as faint as it does; the angular-diameter distance is the distance at which an object of known size would appear as small as it does. In an expanding universe these differ by factors of (1 + *z*), where *z* is the redshift, and at large redshifts the angular-diameter distance even decreases again, so very distant galaxies can look larger than somewhat nearer ones. David Hogg's widely used note ["Distance measures in cosmology"](https://arxiv.org/abs/astro-ph/9905116) (1999) gives the formulas and tries to tidy up the inconsistent terminology. One consequence is often misunderstood: the most distant light we see left its source about 13.8 billion years ago, but the regions that emitted it are now much farther than 13.8 billion light-years away, because space has expanded in the meantime.

<!-- -->

宇宙論では、この問題がさらに鋭くなります。光が進むあいだにも空間が膨張するため、「あの銀河はどれくらい遠いのか」という問いには答えがいくつもあります。共動距離は、宇宙とともに膨張する格子の上で測る距離で、膨張に運ばれていく銀河については変わりません。光度距離は、明るさのわかっている物体が、いま見えているほど暗く見えるのはどれだけ離れたときか、という距離です。角径距離は、大きさのわかっている物体が、いま見えているほど小さく見えるのはどれだけ離れたときか、という距離です。膨張する宇宙では、これらは赤方偏移を *z* として (1 + *z*) の因数だけ食い違い、赤方偏移が大きくなると角径距離はふたたび小さくなっていきます。そのため、とても遠い銀河のほうが、それより近い銀河より大きく見えることがあります。デイヴィッド・ホッグの広く使われている覚え書き[「宇宙論における距離の尺度」](https://arxiv.org/abs/astro-ph/9905116)（1999年）は、その公式をまとめ、ばらばらだった用語を整理しようとしています。よく誤解される帰結が一つあります。私たちに見えるいちばん遠い光は、約138億年前に光源を出ました。けれども、その光を出した領域は、そのあいだに空間が膨張したため、いまでは138億光年よりはるかに遠くにあります。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://ar5iv.labs.arxiv.org/html/astro-ph/9905116">Hogg, Distance measures in cosmology (readable HTML)</a> — The same note in an easier-to-read format.<span class="ja">同じ覚え書きを読みやすい形式にしたもの。</span></li>
<li><a href="https://en.wikipedia.org/wiki/Distance_measure">Distance measure (Wikipedia)</a> — Overview of cosmological distance measures and their relations.<span class="ja">宇宙論での距離の尺度とその関係の概説。</span></li>
</ul>
</aside>

---

## What physical distance is
## 物理的な距離とは何か

Relativity did not abolish distance; it made it relative to a procedure. In ordinary life, rulers, light signals and apparent sizes agree so closely that we treat distance as a single property of the world. In strong gravity or over cosmic scales they come apart, and physicists choose the measure that fits the question: proper distance for what a ruler would read at one moment, light-travel time for what a signal can reach, luminosity distance for how bright a supernova should look. What all observers share is not a distance but the spacetime interval and the causal order it encodes — which events can affect which. This is a physical version of a lesson from mathematics, where the [many kinds of distance](/ai-discussions/articles/what-is-a-distance/) are tools chosen for a purpose. Riemann's suggestion that the geometry of space is a matter for experiment turned out to be right, and the experiments showed that the geometry belongs to spacetime, not to space alone.

<!-- -->

相対性理論は距離を廃止したのではなく、距離を測り方に相対的なものにしました。日常生活では、物差しも、光の信号も、見かけの大きさもほとんどぴったり一致するため、私たちは距離を世界のただ一つの性質として扱っています。強い重力のもとや宇宙規模の尺度では、それらがばらばらになり、物理学者は問いに合った尺度を選びます。ある瞬間に物差しが示す値なら固有距離、信号が届く範囲なら光の到達時間、超新星がどれほど明るく見えるはずかなら光度距離、というように。すべての観測者が共有しているのは、距離ではなく時空の間隔と、それが表す因果の順序—どの出来事がどの出来事に影響しうるか—です。これは、[さまざまな距離](/ai-discussions/articles/what-is-a-distance/)が目的に応じて選ばれる道具だという、数学から得られる教訓の物理学版といえるでしょう。空間の幾何学は実験で決まるというリーマンの示唆は正しかったことがわかり、実験は、その幾何学が空間だけでなく時空のものであることを示しました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/2604.17441">A short course in general relativity (arXiv)</a> — Recent lecture notes covering proper distance and black holes.<span class="ja">固有距離やブラックホールを扱う最近の講義ノート。</span></li>
</ul>
</aside>
