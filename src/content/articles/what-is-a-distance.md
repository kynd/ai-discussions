---
title: "What Is a Distance?  距離とは何か"
created: 2026-11-22
updated: 2026-11-22
topics: ["mathematics", "distance", "abstraction", "geometry"]
---

In everyday life, distance is the length of a straight line between two points. Mathematics keeps only a few properties of that idea and lets anything that has them count as a distance. Since Maurice Fréchet's thesis of 1906, and Felix Hausdorff's name "metric space" in 1914, a distance (a *metric*) is any rule that assigns a number to each pair of objects so that it is never negative, is zero only between an object and itself, is the same in both directions, and obeys the triangle inequality: a detour through a third point is never shorter. Many measures satisfy these rules. Distance on a city grid counts blocks rather than straight lines. The distance between two words counts the edits needed to turn one into the other. The "p-adic" distance makes numbers close when their difference is divisible by a high power of a prime. There are even distances between shapes, sets, probability distributions, and whole spaces. Some useful measures break the rules on purpose. A one-way street makes distance asymmetric, and the Kullback–Leibler "divergence" used in statistics and AI is not symmetric either. Choosing a distance is choosing what counts as similar.

<!-- -->

日常生活で距離といえば、二点を結ぶ直線の長さのことです。数学はこの考えからわずかな性質だけを残し、それをもつものなら何でも距離として認めます。モーリス・フレシェの1906年の学位論文と、フェリックス・ハウスドルフが1914年に与えた「距離空間」という名前以来、距離（メトリック）とは、二つの対象の組に一つの数を割り当てる規則のうち、次の条件を満たすもののことです。負にならないこと。ゼロになるのは同じ対象どうしのときだけであること。どちら向きに測っても同じであること。そして三角不等式、つまり第三の点を経由する回り道は決して近道にならないこと。この規則を満たす尺度はたくさんあります。碁盤の目のような街での距離は、直線ではなく区画の数で測ります。二つの単語の距離は、一方を他方に変えるのに必要な編集の回数で数えます。「p進」距離では、差がある素数の高いべきで割り切れる数どうしが近くなります。図形や集合、確率分布、さらには空間そのもののあいだにさえ距離があります。役に立つ尺度のなかには、わざと規則を破るものもあります。一方通行の道があれば距離は非対称になりますし、統計学やAIで使われるカルバック・ライブラー「ダイバージェンス」も対称ではありません。どの距離を選ぶかは、何を似ているとみなすかを選ぶことです。

---

## Driving forces and connections
## 推進力とつながり

The abstract idea of distance grew out of a practical need. Around 1900, mathematicians studying functions wanted to say when one function was "close to" another, so that they could talk about limits and convergence in spaces whose points are curves rather than locations. Fréchet saw that only a few properties of ordinary distance were needed for this, and Hausdorff's influential book made them standard. The same move later served computing, coding theory, biology and statistics, each of which needed its own notion of nearness. The story is a good example of [abstraction in mathematics](/ai-discussions/articles/abstraction-in-mathematics/): keep only what matters, and one definition covers many cases. It also connects to [distance in physics](/ai-discussions/articles/distance-in-physics/), where relativity changed what distance between events means, and to [distance in AI](/ai-discussions/articles/distance-in-ai-embeddings/), where meaning itself is measured as nearness in a space of numbers.

<!-- -->

距離の抽象的な考えは、実際的な必要から生まれました。1900年ごろ、関数を研究していた数学者たちは、ある関数が別の関数に「近い」とはどういうことかを言い表したいと考えていました。点が場所ではなく曲線であるような空間で、極限や収束を語るためです。フレシェは、そのためにはふつうの距離のごくわずかな性質だけで足りることに気づき、ハウスドルフの影響力のある本がそれを標準にしました。同じ発想はのちに、計算機、符号理論、生物学、統計学にも役立ちます。どの分野も、それぞれに固有の近さの考えを必要としていたからです。この歩みは、大切なものだけを残し、一つの定義で多くの場合を覆うという[数学における抽象](/ai-discussions/articles/abstraction-in-mathematics/)のよい例です。また、相対性理論が出来事のあいだの距離の意味を変えた[物理学における距離](/ai-discussions/articles/distance-in-physics/)や、意味そのものが数の空間での近さとして測られる[AIにおける距離](/ai-discussions/articles/distance-in-ai-embeddings/)にもつながっています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://mathshistory.st-andrews.ac.uk/Biographies/Frechet/">René Maurice Fréchet (MacTutor)</a> — Biography of the mathematician who introduced abstract distance.<span class="ja">抽象的な距離を導入した数学者の伝記。</span></li>
<li><a href="https://www.ebsco.com/research-starters/history/frechet-introduces-concept-abstract-space">Fréchet Introduces the Concept of Abstract Space (EBSCO)</a> — Short history of the 1906 thesis and its reception.<span class="ja">1906年の学位論文とその受容についての短い歴史。</span></li>
</ul>
</aside>

---

## The four rules
## 四つの規則

A metric *d* on a set of objects must satisfy four conditions for any objects *x*, *y*, *z*. First, *d*(*x*, *y*) is never negative. Second, *d*(*x*, *y*) = 0 exactly when *x* and *y* are the same. Third, symmetry: *d*(*x*, *y*) = *d*(*y*, *x*). Fourth, the triangle inequality: *d*(*x*, *z*) ≤ *d*(*x*, *y*) + *d*(*y*, *z*). Fréchet introduced the idea in his thesis, submitted in April 1906, where he called the distance function an *écart*; Hausdorff's *Grundzüge der Mengenlehre* (1914) gave the modern presentation and the name ["metric space"](https://mathshistory.st-andrews.ac.uk/Biographies/Frechet/). The rules say nothing about straight lines, angles or coordinates, so the objects can be anything: points, words, functions, genomes. With a metric in hand, one can define what it means for a sequence to converge, for a set to be bounded, or for a function to be continuous, all without pictures. In Japanese, the word 距離 (*kyori*) covers both the everyday and the mathematical sense, and a metric space is a 距離空間.

<!-- -->

ある対象の集まりの上の距離 *d* は、どの対象 *x*、*y*、*z* についても四つの条件を満たさなければなりません。一つ目、*d*(*x*, *y*) は決して負にならない。二つ目、*d*(*x*, *y*) = 0 となるのは *x* と *y* が同じときだけ。三つ目は対称性で、*d*(*x*, *y*) = *d*(*y*, *x*)。四つ目は三角不等式で、*d*(*x*, *z*) ≤ *d*(*x*, *y*) + *d*(*y*, *z*) です。フレシェは1906年4月に提出した学位論文でこの考えを導入し、距離の関数を「エカール（へだたり）」と呼びました。現代的な示し方と[「距離空間」という名前](https://mathshistory.st-andrews.ac.uk/Biographies/Frechet/)を与えたのは、ハウスドルフの『集合論の基礎』（1914年）です。規則は直線や角度や座標について何も言っていないので、対象は点でも、単語でも、関数でも、ゲノムでもかまいません。距離さえあれば、列が収束するとは、集合が有界であるとは、関数が連続であるとはどういうことかを、図に頼らずに定義できます。日本語の「距離」は日常の意味と数学の意味の両方を覆っており、距離空間はメトリック・スペースの訳語です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://mathshistory.st-andrews.ac.uk/SH/frechet_sh.pdf">Fréchet (MacTutor, PDF)</a> — Extended historical essay on Fréchet's work.<span class="ja">フレシェの仕事についてのくわしい歴史的論考。</span></li>
<li><a href="https://arxiv.org/pdf/2501.00416">Metric-like spaces as enriched categories (arXiv)</a> — Advanced paper showing how the axioms can be relaxed and generalised.<span class="ja">距離の公理をどうゆるめ、一般化できるかを示す専門的な論文。</span></li>
</ul>
</aside>

---

## Many ways to measure the plane
## 平面の測り方はいくつもある

Even in the ordinary plane, straight-line (Euclidean) distance is only one choice. On a grid of streets, the shortest walk between two corners is the sum of the horizontal and vertical blocks, the "taxicab" or Manhattan distance. If a king in chess can move one square in any direction, the number of moves between two squares is the larger of the horizontal and vertical gaps, the Chebyshev distance. These are members of one family, the "p-norms" studied by Hermann Minkowski, in which the Euclidean case is just p = 2. Each gives a different shape to the set of points at distance 1 from a centre: a circle for Euclid, a diamond for the taxicab, a square for the king. At the other extreme, the "discrete metric" sets the distance between any two different points to 1. It satisfies all four rules, which shows how little they demand. On a network of friends, cities or web pages, the natural distance is the number of steps along the shortest path; the mathematician Paul Erdős's collaborators measure their "Erdős number" this way.

<!-- -->

ふつうの平面でさえ、直線（ユークリッド）距離は一つの選択肢にすぎません。碁盤の目の道では、二つの角のあいだの最短の歩き方は、横と縦の区画の数の和になります。これが「タクシー」距離、またはマンハッタン距離です。チェスのキングのように一歩でどの方向にも一マス動けるなら、二つのマスのあいだの手数は、横と縦の差のうち大きいほうになります。これをチェビシェフ距離といいます。これらはヘルマン・ミンコフスキーが研究した「p ノルム」という一つの族に属し、ユークリッドの場合は p = 2 にすぎません。中心から距離 1 の点の集まりの形は、それぞれ違います。ユークリッドでは円、タクシーではひし形、キングでは正方形です。反対の極端には「離散距離」があり、異なる二点のあいだの距離をすべて 1 とします。それでも四つの規則をすべて満たしていて、規則がいかにわずかしか求めていないかがわかります。友人や都市、ウェブページのネットワークでは、最短経路に沿った歩数が自然な距離になります。数学者ポール・エルデシュの共同研究者たちが「エルデシュ数」を測るのも、このやり方です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.ibm.com/think/topics/distance-metrics">What are distance metrics? (IBM)</a> — Plain overview of Euclidean, Manhattan, Chebyshev and other metrics used in data science.<span class="ja">データ科学で使われるユークリッド距離、マンハッタン距離、チェビシェフ距離などの平易な概説。</span></li>
</ul>
</aside>

---

## Distances between words and codes
## 単語と符号のあいだの距離

Some distances count changes rather than lengths. In 1950 Richard Hamming, working on error-correcting codes at Bell Labs, defined the distance between two strings of equal length as the number of positions in which they differ. A code whose valid words are far apart in this sense can detect and correct errors, because a few flipped bits still leave the received message closer to the intended word than to any other. In 1965 the Soviet mathematician Vladimir Levenshtein studied a related measure, now called the [Levenshtein or edit distance](https://www.wikipedia.org/wiki/Levenshtein_distance): the minimum number of single-character insertions, deletions or substitutions needed to turn one string into another. "Kitten" and "sitting" are three edits apart. Edit distances underlie spell-checkers, the comparison of DNA and protein sequences, and the alignment of texts. Biologists also use "genetic distances" between populations or species, and the choice among them builds assumptions about how mutations happen into the result.

<!-- -->

長さではなく、変化の数を数える距離もあります。1950年、ベル研究所で誤り訂正符号を研究していたリチャード・ハミングは、同じ長さの二つの文字列のあいだの距離を、文字の異なる位置の数として定義しました。正しい語どうしがこの意味で遠く離れている符号なら、誤りを検出し、訂正することができます。いくつかのビットが反転しても、受け取ったメッセージはなお、ほかのどの語よりも本来の語に近いからです。1965年には、ソ連の数学者ウラジーミル・レーベンシュテインが、いまでは[レーベンシュテイン距離、あるいは編集距離](https://www.wikipedia.org/wiki/Levenshtein_distance)と呼ばれる関連の尺度を研究しました。一方の文字列を他方に変えるのに必要な、一文字の挿入・削除・置換の最小回数です。「kitten」と「sitting」は三回の編集で移り合います。編集距離は、スペルチェッカーや、DNAやタンパク質の配列の比較、文章の対応づけを支えています。生物学者は集団や種のあいだの「遺伝的距離」も使いますが、どれを選ぶかによって、突然変異がどう起こるかについての仮定が結果に入りこみます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://en.wikipedia.com/wiki/Hamming_metric">Hamming distance (Wikipedia)</a> — Definition, history and use in error-correcting codes.<span class="ja">定義と歴史、誤り訂正符号での使われ方。</span></li>
<li><a href="https://arxiv.org/pdf/2002.07420">An Overview of Distance and Similarity Functions for Structured Data (arXiv)</a> — Survey of distances for strings, trees, graphs and other structures.<span class="ja">文字列、木、グラフなどの構造のための距離を概観する論文。</span></li>
</ul>
</aside>

---

## The p-adic distance: close by divisibility
## p進距離 — 割り切れることで近くなる

One of the least intuitive metrics comes from number theory. Fix a prime number *p*, say 3. The 3-adic distance between two whole numbers is small when their difference is divisible by a high power of 3: 1 and 82 differ by 81 = 3⁴, so they are very close, while 1 and 2 are as far apart as two integers can be. Kurt Hensel introduced the p-adic numbers in 1897, and they satisfy a stronger form of the triangle inequality, ["ultrametric"](https://math.uchicago.edu/~may/REU2020/REUPapers/Quick.pdf): the distance from *x* to *z* is no more than the *larger* of the two legs. In such a space every triangle is isosceles, and every point inside a ball is its centre. Alexander Ostrowski proved in 1916 that, up to equivalence, the ordinary absolute value and the p-adic ones are the [only ways to measure size](https://en.wikipedia.org/wiki/Ostrowski%27s_theorem) on the rational numbers. The p-adic numbers are now central to modern number theory, and ultrametrics also appear in the branching trees used to classify species and data.

<!-- -->

もっとも直観に反する距離の一つは、数論から生まれました。素数 *p* を一つ、たとえば 3 に決めます。二つの整数の 3 進距離は、その差が 3 の高いべきで割り切れるときに小さくなります。1 と 82 の差は 81 = 3⁴ なので、この二つはとても近く、1 と 2 は整数どうしとしてこれ以上ないほど遠いことになります。p 進数を導入したのはクルト・ヘンゼルで、1897年のことでした。p 進数は三角不等式のより強い形、つまり[「超距離（ウルトラメトリック）」](https://math.uchicago.edu/~may/REU2020/REUPapers/Quick.pdf)を満たします。*x* から *z* までの距離は、二つの辺のうち*大きいほう*を超えません。こうした空間では、どの三角形も二等辺三角形になり、球の内側のどの点もその球の中心になります。アレクサンドル・オストロフスキーは1916年、有理数の上で大きさを測るやり方は、同値なものを除けば、ふつうの絶対値と p 進の絶対値[しかない](https://en.wikipedia.org/wiki/Ostrowski%27s_theorem)ことを証明しました。p 進数はいまや現代の数論の中心にあり、超距離は、種やデータを分類する枝分かれの木にも現れます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.cs.mcgill.ca/~echern2/repo/padic.pdf">p-adic numbers (McGill notes, PDF)</a> — Introductory notes on the p-adic metric and its strange geometry.<span class="ja">p進距離とその奇妙な幾何学についての入門ノート。</span></li>
</ul>
</aside>

---

## Distances between sets, shapes and spaces
## 集合、図形、空間のあいだの距離

Distance can also compare whole collections. The Hausdorff distance between two sets, introduced in Hausdorff's 1914 book and anticipated by Dimitrie Pompeiu, asks how far you might have to go from a point of either set to reach the other set, taking the worst case. Two sets are close when [every point of each is near some point of the other](https://en.wikipedia.org/wiki/Hausdorff_distance). Under this distance, a fine grid of dots can be very close to a filled square, and shapes can converge to fractals. In 1981 Mikhail Gromov went one step further, defining a distance between two metric spaces that need not sit inside any common space: place them, without distortion, in some larger space, and take the smallest Hausdorff distance between the copies. A historical study by Alexey Tuzhilin notes that David Edwards had defined [the same idea in 1975](https://arxiv.org/abs/1612.00728). The Gromov–Hausdorff distance lets mathematicians say that a sequence of shapes "converges" to a limiting space, and it is now used to compare shapes in data analysis.

<!-- -->

距離は、まとまりどうしを比べることもできます。二つの集合のあいだのハウスドルフ距離は、ハウスドルフの1914年の本で導入され、ディミトリエ・ポンペイウが先取りしていました。どちらかの集合の点から、もう一方の集合にたどり着くまでにどれだけ行かなければならないかを、最悪の場合で測ります。二つの集合が近いのは、[どちらの点も、もう一方のどこかの点の近くにある](https://en.wikipedia.org/wiki/Hausdorff_distance)ときです。この距離では、細かい点の格子が塗りつぶされた正方形にとても近くなることもあり、図形がフラクタルへと収束することもあります。1981年、ミハイル・グロモフはさらに一歩進み、共通の空間に入っている必要のない二つの距離空間のあいだに距離を定義しました。両者をゆがめずに何か大きな空間に置き、その写しどうしのハウスドルフ距離の最小値をとる、というものです。アレクセイ・トゥジリンの歴史研究によれば、デイヴィッド・エドワーズが[1975年に同じ考えを定義していました](https://arxiv.org/abs/1612.00728)。グロモフ・ハウスドルフ距離のおかげで、数学者は図形の列がある極限の空間に「収束する」と言えるようになり、いまではデータ解析で形を比べるのにも使われています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/1912.13008">Approximating Gromov–Hausdorff Distance in Euclidean Space (arXiv)</a> — On computing the distance between shapes in practice.<span class="ja">図形どうしの距離を実際に計算する方法を扱う論文。</span></li>
</ul>
</aside>

---

## Distances between probability distributions
## 確率分布のあいだの距離

Statistics needs to say how different two distributions are, for example two models of the weather. In 1781 Gaspard Monge asked how to move a pile of earth into a hole of a given shape with the least total work. Leonid Kantorovich reformulated the problem in the 1940s, and the minimum cost of turning one distribution into another is now called the Wasserstein or "earth mover's" distance; it is a true metric. The Indian statistician P. C. Mahalanobis, in the 1930s, defined a distance that scales each direction by how much the data vary along it, so that a point is "far" from a cluster only relative to that cluster's spread. The Kullback–Leibler divergence (1951), central to information theory and to the training of AI models, measures how much information is lost when one distribution is used to approximate another. It is [not symmetric and does not obey the triangle inequality](https://www.johndcook.com/blog/2017/11/08/why-is-kullback-leibler-divergence-not-a-distance/), so it is a "divergence" rather than a distance. Its asymmetry is meaningful: approximating a broad distribution with a narrow one is a different mistake from the reverse.

<!-- -->

統計学では、たとえば二つの天気のモデルのように、二つの分布がどれほど違うかを言い表す必要があります。1781年、ガスパール・モンジュは、ひと山の土を、決まった形の穴へ最小の仕事量で運ぶにはどうすればよいかを問いました。1940年代にレオニード・カントロヴィチがこの問題を定式化し直し、一つの分布を別の分布に変えるための最小のコストは、いまではワッサースタイン距離、あるいは「土砂運搬距離（アース・ムーバーズ距離）」と呼ばれています。これは本物の距離です。インドの統計学者 P・C・マハラノビスは1930年代、データがそれぞれの方向にどれだけばらつくかに応じてその方向の尺度を調整する距離を定義しました。ある点が群れから「遠い」かどうかは、その群れの広がりに比べて決まるわけです。情報理論やAIモデルの訓練の中心にあるカルバック・ライブラー・ダイバージェンス（1951年）は、ある分布で別の分布を近似したときに失われる情報の量を測ります。これは[対称ではなく、三角不等式も満たさない](https://www.johndcook.com/blog/2017/11/08/why-is-kullback-leibler-divergence-not-a-distance/)ため、距離ではなく「ダイバージェンス」と呼ばれます。この非対称性には意味があります。幅の広い分布を狭い分布で近似する誤りと、その逆の誤りとは、別の種類の誤りだからです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://EN.wikipedia.com/wiki/Wasserstein_metric">Wasserstein metric (Wikipedia)</a> — Definition, history from Monge and Kantorovich, and the naming dispute.<span class="ja">定義と、モンジュとカントロヴィチからの歴史、名前をめぐる議論。</span></li>
<li><a href="https://arxiv.org/pdf/0707.0491">L. V. Kantorovich and Linear Programming (arXiv)</a> — Historical account of Kantorovich's work on optimal transport.<span class="ja">最適輸送をめぐるカントロヴィチの仕事の歴史的な解説。</span></li>
</ul>
</aside>

---

## Bending the rules
## 規則を曲げる

Mathematicians and scientists often drop one of the four rules on purpose, because real situations break them. A "pseudometric" allows distinct objects to be at distance zero, which happens when a measurement ignores some differences. A "quasimetric" drops symmetry: on a city map with one-way streets, or on a mountain where going up takes longer than coming down, the distance from A to B need not equal the distance from B to A. "Divergences" such as Kullback–Leibler keep only the first two rules. "Similarity" measures, such as the cosine similarity used with [AI embeddings](/ai-discussions/articles/distance-in-ai-embeddings/), run the other way, with larger values meaning closer. Each relaxation trades away some of the guarantees that the triangle inequality provides, such as efficient searching, in return for a better fit to the problem. The lesson is that "distance" is not one thing found in nature but a family of tools, and the right one depends on what kind of closeness matters.

<!-- -->

数学者や科学者は、現実の状況が規則を破るため、四つの規則のうち一つをわざと捨てることがよくあります。「擬距離」は、異なる対象どうしの距離がゼロになることを許します。測り方がある違いを無視するときに起こることです。「準距離」は対称性を捨てます。一方通行のある街の地図や、登りに下りより時間がかかる山では、A から B への距離は B から A への距離と等しいとはかぎりません。カルバック・ライブラーのような「ダイバージェンス」は、最初の二つの規則だけを残します。[AIの埋め込み](/ai-discussions/articles/distance-in-ai-embeddings/)で使われるコサイン類似度のような「類似度」は逆向きで、値が大きいほど近いことを意味します。どのゆるめ方も、三角不等式が保証してくれるもの、たとえば効率のよい検索を手放す代わりに、問題によりよく合うようにしています。ここから学べるのは、「距離」が自然のなかに見つかる一つのものではなく、道具の一族であり、どれが正しいかは、どんな近さが大切なのかによって決まる、ということです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://arxiv.org/pdf/2604.21745">A Brief History of Fréchet Distances (arXiv)</a> — From curves and probability laws to the FID score used to evaluate AI image models.<span class="ja">曲線や確率法則から、AI画像モデルの評価に使われるFIDまでをたどる歴史。</span></li>
</ul>
</aside>
