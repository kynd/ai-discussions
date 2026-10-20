---
title: "Key Theories of Complex Systems  複雑系の主な理論"
created: 2026-10-20
updated: 2026-10-20
topics: ["complex-systems", "mathematics", "networks", "chaos"]
---

Complexity science draws on several distinct theories, each built around a different question. Chaos theory asks why simple deterministic rules can produce behaviour that is effectively unpredictable. Theories of emergence and self-organization ask how order arises without a designer, from patterns on animal skins to flocks of birds. Synchronization theory explains how many oscillators fall into step. Network science studies the patterns of connection that link people, cells, and computers. Theories of criticality and power laws explain why some systems produce rare, enormous events. Complex adaptive systems and agent-based models study populations of agents that learn and adapt, and information theory and computation give ways to measure complexity itself. Theories of resilience and tipping points ask when a system recovers from shocks and when it flips into a new state. These ideas share a vocabulary but rest on different mathematics, and their reach varies a great deal.

<!-- -->

複雑系科学は、いくつかの異なる理論に拠っており、それぞれが違う問いを軸に組み立てられています。カオス理論は、単純で決定論的な規則が、なぜ事実上予測できない振る舞いを生みうるのかを問います。創発と自己組織化の理論は、動物の皮膚の模様から鳥の群れまで、設計者なしに秩序がどう生じるのかを問います。同期の理論は、多くの振動子がどう足並みをそろえるのかを説明します。ネットワーク科学は、人々や細胞、コンピュータを結ぶつながりのパターンを研究します。臨界性とべき乗則の理論は、なぜ一部のシステムがまれで巨大な出来事を生むのかを説明します。複雑適応系とエージェント・ベース・モデルは、学び適応する主体の集団を研究し、情報理論と計算の理論は、複雑さそのものを測る方法を与えます。レジリエンスと転換点の理論は、システムがいつ衝撃から立ち直り、いつ新しい状態へと反転するのかを問います。これらの考えは語彙を共有していますが、異なる数学に基づいており、その及ぶ範囲も大きく異なります。

---

## Driving forces and connections
## 推進力とつながり

Most of these theories began in one field and were then generalised. Chaos came from celestial mechanics and weather; self-organization from chemistry and developmental biology; network science from mathematics and sociology; criticality from the physics of phase transitions; adaptive systems from computer science and evolutionary biology. What links them is a shift in focus from the properties of individual parts to the pattern of interactions among them, and a reliance on computers to explore what equations cannot solve. Many important results are therefore about *classes* of systems — any system with a certain structure will show a certain kind of behaviour — which is what allows a single model to apply, at least loosely, to very different things.

<!-- -->

これらの理論の大半は、ある分野で始まり、その後に一般化されました。カオスは天体力学と気象から、自己組織化は化学と発生生物学から、ネットワーク科学は数学と社会学から、臨界性は相転移の物理学から、適応系は計算機科学と進化生物学から生まれました。それらを結んでいるのは、個々の部分の性質から、部分どうしの相互作用のパターンへと焦点が移ったことと、方程式では解けないものをコンピュータで探ることへの依存です。そのため重要な成果の多くは、システムの*類*についてのものです。ある構造をもつシステムならどれも、ある種類の振る舞いを示す、という形です。だからこそ一つのモデルが、少なくともおおまかには、まったく異なるものに当てはまりえます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.complexityexplorer.org/">Complexity Explorer</a> — Free Santa Fe Institute courses covering chaos, networks, scaling, and agent-based models.<span class="ja">カオス、ネットワーク、スケーリング、エージェントモデルを扱うサンタフェ研究所の無料講座です。</span></li>
<li><a href="https://plato.stanford.edu/entries/simulations-science/">Computer Simulations in Science (SEP)</a> — How computer simulation became a way of exploring what equations cannot solve.<span class="ja">方程式で解けないものを探る方法としての計算機シミュレーションの解説です。</span></li>
</ul>
</aside>

---

## Chaos and nonlinear dynamics
## カオスと非線形力学

A system is chaotic when it is deterministic — its future is fixed by its present — yet tiny differences in the starting state grow exponentially, so long-term prediction is impossible in practice. Edward Lorenz's 1963 weather model and Robert May's 1976 study of the [logistic map](https://en.wikipedia.org/wiki/Logistic_map), a one-line equation for population growth, are classic examples. Chaotic systems often settle onto "strange attractors" (a term coined by David Ruelle and Floris Takens in 1971), intricate shapes with a fractal structure. "Fractal" comes from Benoit Mandelbrot's geometry of rough shapes (*The Fractal Geometry of Nature*, 1982). In 1975–78 Mitchell Feigenbaum found that many different systems approach chaos through the same sequence of period-doublings, governed by the same numerical constants. This "universality" showed that chaos has a lawful structure, and it is one reason the theory travelled so widely.

<!-- -->

あるシステムがカオス的であるとは、それが決定論的—未来は現在によって決まっている—でありながら、初期状態のわずかな違いが指数関数的に大きくなり、そのため長期の予測が実際上不可能であることを言います。エドワード・ローレンツの1963年の気象モデルや、個体数の増え方を表す一行の方程式である[ロジスティック写像](https://en.wikipedia.org/wiki/Logistic_map)についてのロバート・メイの1976年の研究が、古典的な例です。カオス的なシステムはしばしば「ストレンジ・アトラクタ」（1971年にダヴィド・リュエルとフロリス・ターケンスがつくった言葉）、つまりフラクタルな構造をもつ入り組んだ形に落ち着きます。フラクタルはブノワ・マンデルブロの、ざらざらした形の幾何学（『フラクタル幾何学』1982年）から来た言葉です。1975〜78年、ミッチェル・ファイゲンバウムは、多くの異なるシステムが、同じ数値定数に支配された同じ周期倍分岐の列を通ってカオスに近づくことを見いだしました。この「普遍性」は、カオスに法則的な構造があることを示し、この理論が広く伝わった理由の一つになりました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://plato.stanford.edu/entries/chaos/">Chaos (SEP)</a> — Philosophical introduction to deterministic chaos and its limits on prediction.<span class="ja">決定論的カオスと予測の限界についての哲学的入門です。</span></li>
<li><a href="https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2">Lorenz, Deterministic Nonperiodic Flow (1963)</a> — The original 1963 paper that launched modern chaos theory.<span class="ja">現代のカオス理論の出発点となった1963年の原論文です。</span></li>
<li><a href="https://doi.org/10.1007/BF01020332">Feigenbaum, Quantitative Universality (1978)</a> — Feigenbaum&#x27;s paper on the universal constants of period-doubling.<span class="ja">周期倍分岐の普遍定数を示したファイゲンバウムの論文です。</span></li>
</ul>
</aside>

---

## Emergence and self-organization
## 創発と自己組織化

Emergence means that a whole shows properties its parts lack, and self-organization means that order arises from local interactions without central control. In 1952 Alan Turing proposed that two chemicals reacting and spreading at different rates could produce spots and stripes, a mechanism now supported for some animal markings. The Belousov–Zhabotinsky reaction, studied in the Soviet Union in the 1950s–60s, produces spontaneous waves and spirals. John Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) (1970) showed that a grid of cells following a few rules can produce moving and self-copying patterns, and Craig Reynolds's "boids" (1987) produced realistic flocking from three simple rules for each bird. Philosophers distinguish weak emergence, where the whole's behaviour follows from the parts but can in practice only be found by simulation, from strong emergence, where something genuinely new appears that could not even in principle be deduced. Most scientists accept the first; the second remains controversial.

<!-- -->

創発とは、全体が部分にはない性質を示すことを言い、自己組織化とは、中央の制御なしに局所的な相互作用から秩序が生じることを言います。1952年、アラン・チューリングは、異なる速さで反応し広がる二つの化学物質が、斑点や縞を生みうると提案しました。この仕組みは、いまでは一部の動物の模様について裏づけられています。1950〜60年代にソ連で研究されたベロウソフ・ジャボチンスキー反応は、自発的な波や渦巻きを生み出します。ジョン・コンウェイの[ライフゲーム](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)（1970年）は、少数の規則に従うセルの格子が、動き、自己複製するパターンを生みうることを示し、クレイグ・レイノルズの「ボイド」（1987年）は、一羽ごとの三つの単純な規則から本物らしい群れの動きを生み出しました。哲学者たちは、全体の振る舞いが部分から導かれはするものの実際にはシミュレーションでしか見いだせない弱い創発と、原理的にさえ演繹できない本当に新しいものが現れる強い創発を区別します。大半の科学者は前者を受け入れていますが、後者はいまも論争の的です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://plato.stanford.edu/entries/properties-emergent/">Emergent Properties (SEP)</a> — Survey of weak and strong emergence and the debates around them.<span class="ja">弱い創発と強い創発、およびそれをめぐる議論の概説です。</span></li>
<li><a href="https://doi.org/10.1098/rstb.1952.0012">Turing, The Chemical Basis of Morphogenesis (1952)</a> — Turing&#x27;s founding paper on reaction-diffusion patterns.<span class="ja">反応拡散によるパターン形成を提唱したチューリングの論文です。</span></li>
<li><a href="https://education.siggraph.org/static/HyperGraph/animation/art_life/flocks.htm">Flocks, Herds, and Schools (ACM SIGGRAPH)</a> — Explainer of Reynolds&#x27;s 1987 boids model and its three steering rules.<span class="ja">レイノルズの1987年のボイド・モデルと三つの操舵規則の解説です。</span></li>
</ul>
</aside>

---

## Synchronization
## 同期

Synchronization is the tendency of interacting rhythms to fall into step. Christiaan Huygens noticed in 1665 that two pendulum clocks hung on the same beam came to swing in opposite phase. Yoshiki Kuramoto's 1975 model treated many oscillators, each with its own natural frequency, coupled to one another, and showed that once the coupling passes a threshold, a group spontaneously locks together — a transition like water freezing. The model explains, at least in outline, why fireflies in Southeast Asia flash in unison, how pacemaker cells keep the heart beating, how audiences fall into rhythmic applause, and why power grids can suddenly lose stability. Steven Strogatz's popular book *Sync* (2003) brought these ideas to a wide audience.

<!-- -->

同期とは、相互作用するリズムが足並みをそろえていく傾向のことです。クリスティアーン・ホイヘンスは1665年、同じ梁に掛けた二つの振り子時計が、逆の位相で揺れるようになることに気づきました。1975年の蔵本由紀のモデルは、それぞれ固有の振動数をもつ多くの振動子が互いに結合している状況を扱い、結合がある閾値を超えると集団が自発的にそろうことを示しました。水が凍るのと似た転移です。このモデルは、少なくとも大筋では、東南アジアのホタルがいっせいに明滅する理由、ペースメーカー細胞が心臓の拍動を保つ仕組み、聴衆がリズミカルな拍手にそろっていく様子、そして電力網が突然安定を失う理由を説明します。スティーヴン・ストロガッツの一般向けの本『SYNC』（2003年）は、これらの考えを広い読者に伝えました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kuramoto_model">Kuramoto model (Wikipedia)</a> — Overview of the model, its assumptions, and the synchronization threshold.<span class="ja">モデルの概要、その仮定、同期が起こる閾値についての解説です。</span></li>
<li><a href="https://www.ted.com/talks/steven_strogatz_the_science_of_sync">Steven Strogatz: The science of sync (TED)</a> — Strogatz&#x27;s talk on fireflies, bridges, and spontaneous synchrony.<span class="ja">ホタルや橋に見られる自発的な同期についてのストロガッツの講演です。</span></li>
<li><a href="https://ccl.northwestern.edu/netlogo/models/Fireflies">NetLogo Fireflies model</a> — Interactive simulation of fireflies falling into synchronized flashing.<span class="ja">ホタルが同期して明滅するようすを試せるシミュレーションです。</span></li>
</ul>
</aside>

---

## Networks
## ネットワーク

Network science studies systems as nodes joined by links. The mathematicians Paul Erdős and Alfréd Rényi developed the theory of random graphs around 1959–60. Stanley Milgram's letter-passing experiment (1967) suggested that strangers in the United States are linked by surprisingly short chains of acquaintances, the origin of "six degrees of separation". In 1998 Duncan Watts and Steven Strogatz showed that a few long-range links turn a clustered network into a ["small world"](https://www.nature.com/articles/30918), and in 1999 Albert-László Barabási and Réka Albert proposed that growth with "preferential attachment" — new nodes linking to already popular ones — produces "scale-free" networks dominated by a few hubs. Network ideas now inform epidemiology, neuroscience, and the study of the internet. The scale-free claim, however, has been [challenged](https://pmc.ncbi.nlm.nih.gov/articles/PMC6399239): a 2019 study of nearly a thousand real networks found that strongly scale-free structure is rare.

<!-- -->

ネットワーク科学は、システムをリンクで結ばれたノードとして研究します。数学者ポール・エルデシュとアルフレッド・レーニは、1959〜60年ごろランダム・グラフの理論を発展させました。スタンリー・ミルグラムの手紙を回す実験（1967年）は、アメリカの見知らぬ人どうしが、驚くほど短い知人の連鎖で結ばれていることを示唆し、「六次の隔たり」の起源となりました。1998年、ダンカン・ワッツとスティーヴン・ストロガッツは、少数の遠距離のリンクが、まとまりの強いネットワークを[「スモールワールド」](https://www.nature.com/articles/30918)に変えることを示しました。1999年にはアルバート＝ラズロ・バラバシとレカ・アルバートが、「優先的選択」—新しいノードがすでに人気のあるノードにつながること—をともなう成長が、少数のハブに支配された「スケールフリー」ネットワークを生むと提案しました。ネットワークの考えは、いまや疫学、神経科学、インターネットの研究に生かされています。しかしスケールフリーという主張には[異論が出ています](https://pmc.ncbi.nlm.nih.gov/articles/PMC6399239)。2019年の研究は、千近い実在のネットワークを調べ、強い意味でスケールフリーな構造はまれだと結論しました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="http://networksciencebook.com/">Barabási, Network Science (online textbook)</a> — Free interactive textbook on random, small-world, and scale-free networks.<span class="ja">ランダム・スモールワールド・スケールフリーのネットワークを学べる無料の教科書です。</span></li>
<li><a href="https://ncase.me/crowds/">Nicky Case: The Wisdom and/or Madness of Crowds</a> — Playable explainer of how network structure shapes what spreads.<span class="ja">ネットワークの形が広がり方をどう左右するかを遊びながら学べる解説です。</span></li>
<li><a href="https://www.quantamagazine.org/scant-evidence-of-power-laws-found-in-real-world-networks-20180215/">Quanta: Scant Evidence of Power Laws in Real-World Networks</a> — Quanta report on the debate over how common scale-free networks are.<span class="ja">スケールフリー・ネットワークがどれほど一般的かをめぐる論争の記事です。</span></li>
</ul>
</aside>

---

## Criticality and power laws
## 臨界性とべき乗則

Many systems produce events of wildly different sizes — earthquakes, forest fires, stock-market crashes, city populations, word frequencies. When the frequency of events falls off as a power of their size, the distribution is a "power law", noted early by Vilfredo Pareto for incomes (1890s) and by George Zipf for words (1930s–40s). Power laws have no typical scale, so very large events are far more common than a bell curve would suggest. In 1987 Per Bak, Chao Tang, and Kurt Wiesenfeld proposed "self-organized criticality": using a model of a sandpile to which grains are added one by one, they argued that some systems drive themselves to a critical state where avalanches of every size occur. The idea was hugely influential, but later statisticians, notably [Aaron Clauset, Cosma Shalizi, and Mark Newman (2009)](https://arxiv.org/abs/0706.1062), showed that many claimed power laws in data fit other distributions just as well, and that the evidence needs careful testing.

<!-- -->

多くのシステムは、大きさのまったく異なる出来事を生みます。地震、森林火災、株価の暴落、都市の人口、単語の頻度です。出来事の頻度がその大きさのべき乗で減っていくとき、その分布は「べき乗則」と呼ばれ、早くはヴィルフレド・パレートが所得について（1890年代）、ジョージ・ジップが単語について（1930〜40年代）注目しました。べき乗則には典型的な大きさがないため、非常に大きな出来事が、釣鐘型の曲線が示すよりはるかに頻繁に起こります。1987年、ペル・バク、チャオ・タン、カート・ヴィーゼンフェルトは「自己組織化臨界」を提案しました。粒を一つずつ加えていく砂山のモデルを使い、一部のシステムは自らを臨界状態へと追いやり、そこではあらゆる大きさの雪崩が起こる、と論じました。この考えは大きな影響を与えましたが、のちに統計学者たち、とりわけ[アーロン・クローセット、コズマ・シャリーズィ、マーク・ニューマン（2009年）](https://arxiv.org/abs/0706.1062)は、データのなかで主張された多くのべき乗則が、他の分布にも同じくらいよく当てはまることを示し、その証拠は注意深く検証する必要があると指摘しました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://doi.org/10.1103/PhysRevLett.59.381">Bak, Tang &amp; Wiesenfeld (1987)</a> — The original sandpile paper proposing self-organized criticality.<span class="ja">自己組織化臨界を提唱した砂山モデルの原論文です。</span></li>
<li><a href="https://bactra.org/notebooks/power-laws.html">Cosma Shalizi: Power Law Distributions notebook</a> — A statistician&#x27;s annotated, sceptical guide to power-law claims.<span class="ja">べき乗則の主張を批判的に検討する統計学者の注釈付きガイドです。</span></li>
</ul>
</aside>

---

## Complex adaptive systems and agent-based models
## 複雑適応系とエージェント・ベース・モデル

A complex adaptive system is made of agents that change their behaviour in response to experience — organisms in an ecosystem, firms in a market, cells in an immune system. John Holland's genetic algorithms (1975) and *Hidden Order* (1995) treated adaptation as a kind of computation. Agent-based models simulate such agents directly. Thomas Schelling's segregation model (1971) showed that even a mild preference for similar neighbours can produce strongly segregated neighbourhoods, and Robert Axelrod's computer tournaments for the Prisoner's Dilemma (*The Evolution of Cooperation*, 1984) showed how cooperation can arise among self-interested players. W. Brian Arthur's work on increasing returns explained how one technology can win out through small early advantages rather than superior quality. Agent-based models are now used for traffic, epidemics, and financial markets. They are flexible, but because they have many adjustable assumptions, they can be hard to test against data.

<!-- -->

複雑適応系とは、経験に応じて振る舞いを変える主体からなるシステムのことです。生態系のなかの生物、市場のなかの企業、免疫系のなかの細胞がその例です。ジョン・ホランドの遺伝的アルゴリズム（1975年）と『隠れた秩序』（1995年）は、適応を一種の計算として扱いました。エージェント・ベース・モデルは、そうした主体を直接シミュレーションします。トマス・シェリングの分居モデル（1971年）は、似た隣人を好むほんのわずかな傾向でさえ、強く分断された住宅地を生みうることを示しました。ロバート・アクセルロッドによる囚人のジレンマのコンピュータ選手権（『つきあい方の科学』1984年）は、利己的な参加者のあいだでも協力がどう生まれうるかを示しました。W・ブライアン・アーサーの収穫逓増の研究は、ある技術が優れた品質ではなく、初期の小さな優位によって勝ち残る仕組みを説明しました。エージェント・ベース・モデルは、いまでは交通、感染症、金融市場に使われています。柔軟である反面、調整できる仮定が多いため、データに照らして検証するのが難しいこともあります。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://ncase.me/polygons/">Nicky Case: Parable of the Polygons</a> — Playable version of Schelling&#x27;s segregation model.<span class="ja">シェリングの分居モデルを実際に試せる対話型の解説です。</span></li>
<li><a href="https://ncase.me/trust/">Nicky Case: The Evolution of Trust</a> — Interactive guide to Axelrod-style Prisoner&#x27;s Dilemma tournaments.<span class="ja">アクセルロッド流の囚人のジレンマの対戦を体験できる解説です。</span></li>
<li><a href="https://ccl.northwestern.edu/netlogo/models/">NetLogo Models Library</a> — Hundreds of free agent-based models to run and modify.<span class="ja">実行して改造できる数百のエージェントベースモデル集です。</span></li>
</ul>
</aside>

---

## Information, computation, and measuring complexity
## 情報、計算、複雑さの測り方

How complex is something? Claude Shannon's information theory (1948) measured information as reduction of uncertainty, and Andrey Kolmogorov and others (1960s) defined the complexity of a string as the length of the shortest program that produces it. Neither captures the intuition that the most complex things lie between perfect order and pure randomness, so researchers have proposed many alternatives, such as Charles Bennett's "logical depth" and Murray Gell-Mann's "effective complexity". Christopher Langton argued (1990) that computation and life flourish at the "edge of chaos" between order and disorder, an evocative idea that later work found only partly supported. Stephen Wolfram's *A New Kind of Science* (2002) argued that simple programs such as cellular automata can explain much of nature; it was widely read but many scientists found its claims of novelty overstated.

<!-- -->

あるものはどれほど複雑なのでしょうか。クロード・シャノンの情報理論（1948年）は、情報を不確かさの減少として測り、アンドレイ・コルモゴロフらは（1960年代）、ある文字列の複雑さを、それを出力する最短のプログラムの長さとして定義しました。どちらも、最も複雑なものは完全な秩序と純粋なランダムさのあいだにある、という直観をとらえきれないため、研究者たちはチャールズ・ベネットの「論理深度」やマレー・ゲルマンの「有効複雑性」など、多くの代案を提案してきました。クリストファー・ラングトンは（1990年）、計算と生命は秩序と無秩序のあいだの「カオスの縁」で栄えると論じましたが、この喚起力のある考えは、のちの研究では部分的にしか裏づけられませんでした。スティーヴン・ウルフラムの『A New Kind of Science』（2002年）は、セル・オートマトンのような単純なプログラムが自然の多くを説明できると論じました。この本は広く読まれましたが、多くの科学者は、その新しさの主張は誇張されていると考えました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://doi.org/10.1002/j.1538-7305.1948.tb01338.x">Shannon, A Mathematical Theory of Communication (1948)</a> — Shannon&#x27;s founding paper of information theory.<span class="ja">情報理論を創始したシャノンの論文です。</span></li>
<li><a href="https://doi.org/10.1016/0167-2789(90)90064-V">Langton, Computation at the Edge of Chaos (1990)</a> — Langton&#x27;s paper proposing the &quot;edge of chaos&quot; idea.<span class="ja">「カオスの縁」の考えを提唱したラングトンの論文です。</span></li>
<li><a href="https://www.wolframscience.com/nks/">Wolfram, A New Kind of Science (online)</a> — The full text of Wolfram&#x27;s 2002 book, free to read online.<span class="ja">ウルフラムの2002年の著書の全文をオンラインで無料で読めます。</span></li>
</ul>
</aside>

---

## Resilience and tipping points
## レジリエンスと転換点

The ecologist C. S. Holling's paper "Resilience and Stability of Ecological Systems" (1973) distinguished between how quickly a system returns to balance after a disturbance and how large a disturbance it can absorb before shifting into a different state altogether, such as a clear lake turning murky with algae. Marten Scheffer developed this into a theory of "critical transitions" (*Critical Transitions in Nature and Society*, 2009, and a review with colleagues in *Nature* the same year), suggesting that systems approaching a tipping point often recover more slowly from small shocks, which might give early warning. These ideas now shape research on climate tipping elements such as ice sheets and the Amazon rainforest, and on financial crises. Detecting real early-warning signals in noisy data remains difficult, and researchers caution that not every gradual change has a tipping point behind it.

<!-- -->

生態学者C・S・ホリングの論文「生態系のレジリエンスと安定性」（1973年）は、かき乱された後にシステムがどれだけ速く均衡に戻るかと、まったく別の状態—たとえば澄んだ湖が藻で濁った湖に変わること—へ移る前に、どれだけ大きなかく乱を吸収できるかを区別しました。マーテン・シェファーはこれを「臨界転移」の理論へと発展させ（『Critical Transitions in Nature and Society』2009年、同年には共同研究者との総説を『ネイチャー』誌に発表）、転換点に近づいているシステムは、小さな衝撃からの回復がしばしば遅くなり、それが早期警報になりうると示唆しました。これらの考えは、いまでは氷床やアマゾンの熱帯雨林のような気候の転換要素や、金融危機の研究を形づくっています。ノイズの多いデータのなかに本物の早期警報のシグナルを見つけることは今も難しく、研究者たちは、ゆるやかな変化のすべての背後に転換点があるわけではないと注意を促しています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://doi.org/10.1146/annurev.es.04.110173.000245">Holling, Resilience and Stability of Ecological Systems (1973)</a> — Holling&#x27;s classic paper distinguishing resilience from stability.<span class="ja">レジリエンスと安定性を区別したホリングの古典論文です。</span></li>
<li><a href="https://doi.org/10.1038/nature08227">Scheffer et al., Early-warning signals for critical transitions (2009)</a> — Nature review of slowing recovery as a warning of tipping points.<span class="ja">回復の遅れを転換点の前兆とみる考えをまとめた総説です。</span></li>
<li><a href="https://doi.org/10.1073/pnas.0705414105">Lenton et al., Tipping elements in the Earth&#x27;s climate system (2008)</a> — Influential paper listing ice sheets, the Amazon, and other climate tipping elements.<span class="ja">氷床やアマゾンなど気候の転換要素を挙げた影響力のある論文です。</span></li>
</ul>
</aside>
