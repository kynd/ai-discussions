---
title: "Abstraction in Mathematics  数学における抽象"
created: 2026-11-02
updated: 2026-11-02
topics: ["abstraction", "mathematics", "philosophy-of-mathematics", "history-of-science"]
---

In mathematics, abstraction usually means keeping only the features that matter for a question and treating everything that shares them as the same. Fractions that look different but have equal value become one number; all the systems that combine elements in a certain way become examples of one "group". The history of mathematics can be read as a series of such steps: from general methods for solving problems, to symbols that stand for any number, to axioms that can be varied, to whole "structures", and finally to category theory, which studies the patterns shared by structures themselves. Abstraction makes mathematics more precise, not vaguer, and lets one result apply to many cases, including physical ones no one expected. It also has costs. Constructivist mathematicians questioned proofs that lose touch with computation, the "New Math" reforms of the 1960s and 1970s in the United States and Japan showed that teaching abstraction first can backfire, and philosophers still debate whether mathematical objects exist or where abstract thinking comes from.

<!-- -->

数学でいう抽象とは、ふつう、ある問いにとって大切な特徴だけを残し、その特徴を共有するものをすべて同じものとして扱うことです。見た目は違っても値の等しい分数は一つの数になり、決まった仕方で要素を組み合わせるシステムは、どれも一つの「群」の例になります。数学の歴史は、こうした歩みの積み重ねとして読めます。問題を解くための一般的な方法から、どんな数でも表せる記号へ。さらに、取り替えのきく公理へ、「構造」の全体へと進み、最後には、構造どうしが共有するパターンそのものを研究する圏論に行き着きます。抽象は数学を曖昧にするどころか、より精密にします。一つの結果を多くの場合に当てはめられるようにし、ときには誰も予想しなかった物理現象にまで届かせます。ただし代償もあります。構成的な立場の数学者たちは、計算とのつながりを失った証明に疑問を投げかけました。1960〜70年代のアメリカと日本の「数学教育の現代化」からは、抽象を先に教えると逆効果になりうることがわかりました。哲学者たちは、数学的な対象は存在するのか、抽象的な思考はどこから来るのかを、いまも議論しています。

---

## Driving forces and connections
## 推進力とつながり

Each wave of abstraction answered a practical problem inside mathematics. When too many separate cases had to be solved one by one, mathematicians looked for what they shared. When intuition about space proved unreliable, as with non-Euclidean geometry, they turned to axioms. When different fields turned out to use the same arguments, they named the common structure. Institutions mattered too: the German research universities around Göttingen in the early twentieth century, the French Bourbaki group from 1935, and postwar American mathematics spread the structural style. A recurring tension runs through the story — between mathematicians who prize generality and those who prize concrete computation and examples.

<!-- -->

抽象の波は、どれも数学の内部で起きた実際的な問題への答えでした。別々の場合をあまりに多く、一つずつ解かなければならなくなると、数学者たちはそれらに共通するものを探しました。非ユークリッド幾何学のように、空間についての直観が当てにならないとわかると、公理に目を向けています。異なる分野で同じ議論が使われているとわかれば、その共通の構造に名前をつけました。制度の影響も見逃せません。二十世紀前半のゲッティンゲンを中心とするドイツの研究大学、1935年からのフランスのブルバキ・グループ、そして戦後のアメリカの数学が、構造的なスタイルを広めていきました。この歴史には、一般性を重んじる数学者と、具体的な計算や例を重んじる数学者とのせめぎ合いが、くり返し見られます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://mathshistory.st-andrews.ac.uk/HistTopics/Abstract_groups/">The abstract group concept (MacTutor)</a> — Step-by-step history of how the idea of a group became abstract.<span class="ja">群という考えが、どのように抽象的になっていったかをたどる歴史。</span></li>
</ul>
</aside>

---

## Keeping only what matters
## 大切なものだけを残す

Aristotle called abstraction *aphairesis*, "taking away". The geometer, he wrote in the *Metaphysics*, studies physical things but not *as* physical — a bronze sphere considered only as a sphere. In modern practice, the basic move is to group objects by an equivalence: two fractions are the same number if they reduce to the same form, and two lines have the same direction if they are parallel. Gottlob Frege used the directions example in *The Foundations of Arithmetic* (1884) and proposed defining numbers the same way: the number of Fs equals the number of Gs if the Fs and Gs can be paired off one to one, a rule now called [Hume's Principle](https://en.wikipedia.org/wiki/Hume%27s_principle). Philosophers call such rules "abstraction principles". Some of them turned out to be inconsistent, as Bertrand Russell showed for one of Frege's in 1902. Since the 1980s, neo-logicists such as Crispin Wright and Bob Hale have argued that well-chosen abstraction principles can still found arithmetic, a minority but active position.

<!-- -->

アリストテレスは抽象を「アファイレシス」、つまり「取り去ること」と呼びました。『形而上学』によれば、幾何学者は物理的なものを研究しますが、それを物理的なもの*として*扱うわけではありません。青銅の球を、ただ球としてだけ考えるようなものです。現代の数学では、ある同値関係によって対象をまとめることが基本の一歩になります。二つの分数は、約分して同じ形になるなら同じ数です。二本の直線は、平行なら同じ方向をもちます。ゴットロープ・フレーゲは『算術の基礎』（1884年）でこの方向の例を使い、数も同じやり方で定義しようと提案しました。FとGを一対一に組み合わせられるとき、Fの数とGの数は等しい、という規則です。いまでは[ヒュームの原理](https://en.wikipedia.org/wiki/Hume%27s_principle)と呼ばれています。こうした規則を、哲学者は「抽象原理」と呼びます。なかには矛盾を含むとわかったものもあり、1902年にはバートランド・ラッセルが、フレーゲの抽象原理の一つについてそれを示しました。1980年代以降、クリスピン・ライトやボブ・ヘイルらの新論理主義者は、うまく選んだ抽象原理なら算術の基礎になりうると論じています。少数派ながら、活発な立場です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://iep.utm.edu/abstractionism/">Abstractionism in Mathematics (Internet Encyclopedia of Philosophy)</a> — Survey of abstraction principles, Frege, and the problems they face.<span class="ja">抽象原理とフレーゲ、そしてそれらが抱える問題を概観する項目。</span></li>
<li><a href="https://crispinjwright.com/wp-content/uploads/2019/04/wright-2005-logicism-in-the-21st-century.pdf">Wright, Logicism in the 21st Century (PDF)</a> — A leading neo-logicist's statement of the programme.<span class="ja">新論理主義を代表する哲学者による綱領的な論文。</span></li>
</ul>
</aside>

---

## From methods to symbols
## 方法から記号へ

Abstraction of method came before abstraction of notation. Muhammad ibn Musa al-Khwarizmi's book on *al-jabr* (around 820–830) sorted problems into six standard forms with general rules for each, yet it was written entirely in words; the unknown was simply *shay'*, "thing". The Chinese *Nine Chapters on the Mathematical Art* (compiled over several centuries before the common era) gave a general elimination method for systems of linear equations, using red and black counting rods for positive and negative quantities. Brahmagupta (628 CE) treated zero and negative numbers as numbers with their own arithmetic. In Europe, François Viète (1591) used letters for known quantities as well as unknowns, so one formula could stand for a whole family of problems, and René Descartes (1637) fixed the convention of *a, b, c* for knowns and *x, y, z* for unknowns. In Japan, Seki Takakazu (1683) developed a written algebra and arranged coefficients in grids that anticipated determinants. The common idea that non-Western mathematics was merely practical is misleading: these traditions abstracted procedures and number concepts, even when they did not use Greek-style axiomatic proof.

<!-- -->

方法の抽象は、記法の抽象より先に生まれました。ムハンマド・イブン・ムーサー・アル＝フワーリズミーの「アル＝ジャブル」の書（820〜830年ごろ）は、問題を六つの標準形に分け、それぞれに一般的な規則を与えています。ただし全編が言葉で書かれ、未知数はただ「シャイ」、つまり「もの」と呼ばれていました。中国の『九章算術』（紀元前の数世紀にわたって編まれたもの）は、連立一次方程式を解く一般的な消去法を示し、正と負の量を赤と黒の算木で表しました。ブラーマグプタ（628年）は、ゼロと負の数を、独自の算術をもつ数として扱っています。ヨーロッパでは、フランソワ・ヴィエト（1591年）が未知数だけでなく既知の量にも文字を使いました。これで、一つの式が一群の問題全体を表せるようになりました。ルネ・デカルト（1637年）が定めたのは、既知数に*a, b, c*、未知数に*x, y, z*を使う約束です。日本では関孝和（1683年）が筆算による代数を発展させ、係数を格子状に並べるやり方で行列式を先取りしています。西洋以外の数学はただ実用的なものだった、という通念は誤解を招きます。これらの伝統は、ギリシア流の公理的な証明は使わなくても、手続きや数の概念を抽象化していました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://mathshistory.st-andrews.ac.uk/HistTopics/Nine_chapters">The Nine Chapters (MacTutor)</a> — History of the Chinese classic and its general methods.<span class="ja">『九章算術』の成り立ちと一般的な解法の歴史。</span></li>
<li><a href="https://mathshistory.st-andrews.ac.uk/Biographies/Seki/">Seki Takakazu (MacTutor)</a> — Life and work of Japan's leading wasan mathematician.<span class="ja">和算を代表する数学者、関孝和の生涯と業績。</span></li>
<li><a href="https://www.nippon.com/en/japan-topics/c12801/">Japan's wasan tradition (Nippon.com)</a> — Readable overview of wasan, Seki, and sangaku.<span class="ja">和算と関孝和、算額をわかりやすく紹介する記事。</span></li>
</ul>
</aside>

---

## Axioms that can be changed
## 変えることのできる公理

For two thousand years Euclid's axioms were treated as self-evident truths about space. In 1829–32 Nikolai Lobachevsky and János Bolyai independently built consistent geometries in which Euclid's parallel postulate fails, and by 1868–71 Eugenio Beltrami and Felix Klein had shown models of them inside ordinary geometry. Axioms came to be seen as assumptions one could vary, not facts one had to accept. David Hilbert's *Foundations of Geometry* (1899) drew the conclusion: the axioms themselves define what "point" and "line" mean. Hilbert is reported to have said that one must always be able to say "tables, chairs, and beer mugs" instead of points, lines, and planes. The remark is not in his book; it comes from a memoir by his student Otto Blumenthal (1935), so it is best treated as [reported rather than certain](https://cs.nyu.edu/pipermail/fom/2005-May/008933.html). The idea it expresses — that only the relations between objects matter, not what they are — became central to modern mathematics.

<!-- -->

エウクレイデスの公理は、二千年にわたって空間についての自明な真理とされてきました。1829〜32年、ニコライ・ロバチェフスキーとボーヤイ・ヤーノシュは、それぞれ独立に、エウクレイデスの平行線公準が成り立たない無矛盾な幾何学を築いています。1868〜71年までには、エウジェニオ・ベルトラーミとフェリックス・クラインが、ふつうの幾何学のなかにそのモデルを示しました。こうして公理は、受け入れるしかない事実ではなく、取り替えのきく仮定だと考えられるようになりました。ダフィット・ヒルベルトは『幾何学基礎論』（1899年）で、ここから一つの結論を引き出しています。「点」や「直線」の意味を定めるのは公理そのものだ、というものです。点・直線・平面の代わりに、いつでも「テーブル・椅子・ビールジョッキ」と言えなければならない—ヒルベルトはそう語ったと伝えられています。ただしこの言葉は本にはなく、弟子オットー・ブルーメンタールの回想（1935年）に由来するので、[確かな発言というより伝聞](https://cs.nyu.edu/pipermail/fom/2005-May/008933.html)として扱うのが妥当でしょう。それでも、この言葉が表す考え、つまり対象が何であるかではなく対象どうしの関係だけが重要だという考えは、現代数学の中心になりました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://mathshistory.st-andrews.ac.uk/Strick/Hilbert.pdf">Hilbert (MacTutor, PDF)</a> — Biographical essay on Hilbert and his axiomatic programme.<span class="ja">ヒルベルトとその公理主義の構想についての伝記的な論考。</span></li>
</ul>
</aside>

---

## Structures
## 構造

The nineteenth and early twentieth centuries turned particular calculations into general structures. Évariste Galois defined groups in 1832, but only as groups of permutations; Arthur Cayley attempted an [abstract definition](https://mathshistory.st-andrews.ac.uk/HistTopics/Abstract_groups/) in 1854, which took decades to catch on. Richard Dedekind called numbers "free creations of the human mind" (1888) and characterised them by the structure they share rather than by what they are made of. Emmy Noether, working in Göttingen in the 1920s, reasoned about ideals, modules, and chain conditions instead of particular calculations, and B. L. van der Waerden's *Moderne Algebra* (1930–31), based on lectures by Noether and Emil Artin, presented algebra as the study of structures. From 1935 the French collective "Nicolas Bourbaki" reorganised all of mathematics around three "mother structures" — algebraic, order, and topological. In Japan, Teiji Takagi, who had studied in Göttingen, completed class field theory (1920), one of the first major Japanese contributions to this abstract style.

<!-- -->

十九世紀から二十世紀前半にかけて、個別の計算は、一般的な構造としてとらえ直されていきました。エヴァリスト・ガロアは1832年に群を定義しましたが、それは置換の群に限られていました。アーサー・ケイリーは1854年に[抽象的な定義](https://mathshistory.st-andrews.ac.uk/HistTopics/Abstract_groups/)を試みましたが、受け入れられるまでには数十年かかっています。リヒャルト・デデキントは数を「人間精神の自由な創造物」と呼び（1888年）、何からできているかではなく、共有する構造によって数を特徴づけました。1920年代のゲッティンゲンでは、エミー・ネーターが、個々の計算ではなくイデアルや加群、鎖条件について推論していました。ネーターとエミール・アルティンの講義をもとにしたB・L・ファン・デル・ヴェルデンの『現代代数学』（1930〜31年）は、代数学を構造の研究として描いています。1935年からは、フランスの集団「ニコラ・ブルバキ」が、代数・順序・位相という三つの「母構造」を軸に、数学全体を組み立て直しました。日本では、ゲッティンゲンで学んだ高木貞治が類体論を完成させ（1920年）、これがこの抽象的なスタイルによる日本の最初の大きな貢献の一つになりました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://publish.uwo.ca/~jbell/refectionsbourbaki.pdf">Bell, Reflections on Bourbaki (PDF)</a> — Discussion of Bourbaki's structural programme and its mother structures.<span class="ja">ブルバキの構造主義と「母構造」を論じた文章。</span></li>
<li><a href="https://mathshistory.st-andrews.ac.uk/Biographies/Van_der_Waerden.html">Van der Waerden (MacTutor)</a> — Biography of the author of Moderne Algebra.<span class="ja">『現代代数学』の著者の伝記。</span></li>
<li><a href="https://www.mathsoc.jp/meeting/takagi50/shimin20100220/nozaki20100220.pdf">野崎昭弘「高木貞治と日本の数学」(日本数学会, PDF)</a> — Lecture slides on Takagi and modern Japanese mathematics.<span class="ja">高木貞治と近代日本の数学をたどる市民講演の資料。</span></li>
</ul>
</aside>

---

## The mathematics of mathematics
## 数学の数学

Category theory, introduced by Samuel Eilenberg and Saunders Mac Lane in a paper presented in 1942 and published in 1945, took abstraction one level higher: it studies the maps between structures and the patterns that recur across whole fields. Mac Lane later recalled that they feared it would be rejected as ["not really mathematics"](https://pmc.ncbi.nlm.nih.gov/articles/PMC33670). The topologist Norman Steenrod is believed to have nicknamed it "general abstract nonsense", affectionately, and the phrase is still used for routine categorical arguments. The mathematician Emily Riehl calls category theory "the mathematics of mathematics". Alexander Grothendieck, who rebuilt algebraic geometry in this spirit in the 1950s and 1960s, described two ways to open a hard nut: hammer and chisel, or soaking it until it opens by itself. His preferred method was the second, an image he called ["the rising sea"](https://ncatlab.org/nlab/show/The+Rising+Sea): build a theory general enough that the concrete problem dissolves.

<!-- -->

圏論は、サミュエル・アイレンバーグとソーンダース・マックレーンが1942年に発表し、1945年に出版した論文で導入されました。抽象をさらに一段引き上げ、構造どうしをつなぐ写像や、分野全体にくり返し現れるパターンを研究します。マックレーンはのちに、[「本当の数学ではない」](https://pmc.ncbi.nlm.nih.gov/articles/PMC33670)と退けられるのを恐れていたと回想しています。位相幾何学者ノーマン・スティーンロッドは、これを親しみをこめて「一般的抽象ナンセンス」と呼んだとされ、この言葉はいまも、決まりきった圏論的な議論を指して使われます。数学者エミリー・リールは、圏論を「数学の数学」と呼んでいます。1950〜60年代、アレクサンドル・グロタンディークはこの精神で代数幾何学を組み立て直しました。グロタンディークは、固い木の実を開ける二つのやり方を描いています。金槌とのみで割るか、ひとりでに開くまで水に浸しておくかです。好んだのは後者で、これを[「満ちてくる海」](https://ncatlab.org/nlab/show/The+Rising+Sea)と呼びました。具体的な問題が溶けてしまうほど一般的な理論を築く、という方法です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://williamstein.org/sga/circle/mclarty1.pdf">McLarty, The Rising Sea (PDF)</a> — Scholarly essay on Grothendieck's method of generality.<span class="ja">グロタンディークの一般化の方法を論じた研究論文。</span></li>
<li><a href="https://quantamagazine.org/emily-riehl-conducts-the-mathematical-orchestra-from-the-middle-20200902">Emily Riehl interview (Quanta)</a> — A category theorist on why studying patterns of patterns matters.<span class="ja">パターンのパターンを研究することがなぜ大切かを語る、圏論研究者へのインタビュー。</span></li>
<li><a href="https://en.wikipedia.org/wiki/Abstract_nonsense">Abstract nonsense (Wikipedia)</a> — Origin and use of the phrase.<span class="ja">この言葉の由来と使われ方。</span></li>
</ul>
</aside>

---

## Why abstraction works so well
## なぜ抽象はこれほどうまく働くのか

Abstraction makes mathematics more precise, not vaguer: by stating exactly which assumptions are used, a theorem about groups applies at once to crystal symmetries, permutations, and number systems. It also produces unexpected fits with the physical world. Riemannian geometry, developed without physics in mind, became the language of Einstein's general relativity; group theory became essential to particle physics. Eugene Wigner called this ["the unreasonable effectiveness of mathematics in the natural sciences"](https://fermatslibrary.com/s/the-unreasonable-effectiveness-of-mathematics-in-the-natural-sciences) (1960), something "bordering on the mysterious". The physicist Frank Wilczek replied (2006) that the mystery is partly selection: physicists choose the problems mathematics can handle. Either way, abstraction lets work done in one context be reused in others.

<!-- -->

抽象は数学を曖昧にするどころか、より精密にします。どの仮定を使っているかを正確に述べておけば、群についての一つの定理が、結晶の対称性にも置換にも数の体系にも、そのまま当てはまります。物理的な世界との思いがけない一致も生まれてきました。物理学を念頭に置かずに発展したリーマン幾何学は、アインシュタインの一般相対性理論を記述する言葉になり、群論は素粒子物理学に欠かせない道具になりました。ユージン・ウィグナーはこれを[「自然科学における数学の不合理なまでの有効性」](https://fermatslibrary.com/s/the-unreasonable-effectiveness-of-mathematics-in-the-natural-sciences)と呼び（1960年）、「神秘に近い」と述べています。物理学者フランク・ウィルチェックは（2006年）、その神秘の一部は選択の結果だと応じました。物理学者は、数学で扱える問題を選んでいるというわけです。いずれにしても、抽象のおかげで、ある文脈で行った仕事を別の文脈でも生かせます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://physicstoday.aip.org/opinion/reasonably-effective-i-deconstructing-a-miracle">Wilczek, Reasonably effective (Physics Today)</a> — A physicist's sceptical answer to Wigner's "miracle".<span class="ja">ウィグナーの「奇跡」に、物理学者が懐疑的な立場から応えた論考。</span></li>
</ul>
</aside>

---

## Limits and criticisms
## 限界と批判

Not all mathematicians welcomed the drift toward abstraction. Leopold Kronecker opposed Georg Cantor's set theory in the late nineteenth century, and from 1907 L. E. J. Brouwer's intuitionism rejected proofs that claim something exists without showing how to construct it; Errett Bishop later rebuilt much of analysis on constructive lines (1967). In education, the American "New Math" of the late 1950s and 1960s taught sets and abstract structure to young children and was widely judged a failure. Morris Kline's *Why Johnny Can't Add* (1973) argued that ["abstraction is not the first stage, but the last stage"](https://en.wikipedia.org/wiki/Why_Johnny_Can%27t_Add) of mathematical development, and the Bourbaki founder Jean Dieudonné reportedly disowned the reform. Japan's own "modernisation of mathematics education" (数学教育の現代化) brought sets into elementary schools in the early 1970s and was cut back in the 1977–78 revision of the curriculum. Current research favours ["concreteness fading"](https://www.learningscientists.org/blog/2018/2/1-1): starting with concrete examples and gradually moving to abstract ones.

<!-- -->

抽象への流れを、すべての数学者が歓迎したわけではありません。十九世紀後半、レオポルト・クロネッカーはゲオルク・カントールの集合論に反対しました。1907年からはL・E・J・ブラウワーの直観主義が、どう構成するかを示さずに何かの存在を主張する証明を退けています。のちにエレット・ビショップは、解析学の多くを構成的な方針で組み立て直しました（1967年）。教育の分野では、1950年代後半から60年代にかけてアメリカの「ニュー・マス」が幼い子どもに集合や抽象的な構造を教え、広く失敗とみなされました。モリス・クラインの『数学教育現代化の失敗』（原題 *Why Johnny Can't Add*、1973年）は、[「抽象は最初の段階ではなく、最後の段階だ」](https://en.wikipedia.org/wiki/Why_Johnny_Can%27t_Add)と論じています。ブルバキの創設者の一人ジャン・デュドネも、この改革を認めなかったと伝えられます。日本の「数学教育の現代化」も1970年代前半に小学校へ集合を持ち込みましたが、1977〜78年の学習指導要領改訂で縮小されました。現在の研究が支持しているのは[「具体性のフェーディング」](https://www.learningscientists.org/blog/2018/2/1-1)、つまり具体的な例から始めて、少しずつ抽象的なものへ移っていくやり方です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.cse.chalmers.se/~coquand/BONN/BridgesReeves.pdf">Bridges & Reeves on constructive mathematics (PDF)</a> — Survey of Bishop-style constructive mathematics.<span class="ja">ビショップ流の構成的数学を概観する論文。</span></li>
<li><a href="https://www.st.nanzan-u.ac.jp/info/ma-thesis/2016/ss/m15ss001.pdf">数学教育の現代化についての修士論文 (南山大学, PDF)</a> — Study of Japan's 1970s reform and its reversal, in Japanese.<span class="ja">1970年代の日本の改革とその見直しについての研究。</span></li>
</ul>
</aside>

---

## Where abstract thinking comes from
## 抽象的な思考はどこから来るのか

Psychologists and philosophers offer different accounts of how people reach mathematical abstractions. Jean Piaget distinguished abstraction from the properties of objects from "reflective abstraction" from one's own actions, such as noticing that counting gives the same answer whatever the order. George Lakoff and Rafael Núñez argued in *Where Mathematics Comes From* (2000) that mathematics is built from metaphors grounded in bodily experience, such as numbers as collections or as positions along a path; critics such as Ernest Davis and later Bodo Winter and Jeff Yoshimi (2020) found the empirical support thinner than claimed. Stanislas Dehaene's research on the ["number sense"](https://pmc.ncbi.nlm.nih.gov/articles/PMC2610411) shows that infants and many animals share an approximate sense of quantity, while exact large numbers depend on counting words and culture. These accounts explain how humans learn abstractions; whether they also explain why mathematics is true remains disputed.

<!-- -->

人がどのようにして数学的な抽象にたどり着くのかについて、心理学者や哲学者の説明はさまざまです。ジャン・ピアジェは、対象の性質から引き出す抽象と、自分自身の行為から引き出す「反省的抽象」を区別しました。後者の例は、数える順番を変えても答えが同じだと気づくことです。ジョージ・レイコフとラファエル・ヌニェスは『数学の認知科学』（2000年）で、数学は身体的な経験に根ざした比喩から組み立てられていると論じました。数を集まりとしてとらえたり、道筋に沿った位置としてとらえたりする比喩です。これに対し、アーネスト・デイヴィスや、のちのボド・ヴィンターとジェフ・ヨシミ（2020年）は、経験的な裏づけは主張されたほど厚くないと批判しています。スタニスラス・ドゥアンヌの[「数覚」](https://pmc.ncbi.nlm.nih.gov/articles/PMC2610411)の研究によれば、乳児や多くの動物は量のおおまかな感覚を共有しています。一方、大きな数を正確にとらえる力は、数を表す言葉と文化に左右されます。こうした説明は、人間が抽象をどう学ぶのかを明らかにします。しかし、数学がなぜ真なのかまで説明できるかどうかは、いまも意見が分かれています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7667247">Winter & Yoshimi on embodied mathematics (2020)</a> — Balanced critical assessment of Lakoff and Núñez.<span class="ja">レイコフとヌニェスの議論を、偏りなく批判的に検討した論文。</span></li>
<li><a href="https://www.college-de-france.fr/en/agenda/lecture/cognitive-foundations-of-school-learning/cognitive-foundations-of-mathematics-learning">Dehaene, cognitive foundations of mathematics (Collège de France)</a> — Lectures on how the brain learns mathematics.<span class="ja">脳がどのように数学を学ぶかについての講義。</span></li>
</ul>
</aside>

---

## Abstraction, idealisation, and abstract objects
## 抽象、理想化、抽象的対象

Two distinctions help avoid confusion. First, philosophers of science separate abstraction from idealisation. Abstraction omits details — a model of a pendulum that ignores its colour is still true, just partial. Idealisation distorts them — a frictionless pendulum is a deliberate falsehood. Nancy Cartwright (1989), Martin Jones (2005), and Peter Godfrey-Smith ([2009](https://petergodfreysmith.com/PGSAbstractnIdealizn06.pdf)) developed this distinction, though the boundary is blurry. Second, "abstraction" as a process of leaving out detail is different from "abstract objects" in metaphysics — things such as numbers and sets that, on some views, exist outside space and time. Platonists think mathematics is about such objects; nominalists deny they exist; structuralists, following Paul Benacerraf's "What Numbers Could Not Be" (1965), hold that a number is just a position in a structure. In Japanese, the pair 抽象 (*chūshō*, drawing out the shape) and 捨象 (*shashō*, discarding features) names the two sides of the same act: to abstract one thing is to set others aside.

<!-- -->

混乱を避けるには、二つの区別が役立ちます。第一に、科学哲学では抽象と理想化を分けます。抽象は細部を省くことです。色を無視した振り子のモデルは、部分的ではあっても、真であることに変わりはありません。理想化は細部をゆがめることです。摩擦のない振り子は、意図的な虚構にあたります。この区別は、ナンシー・カートライト（1989年）、マーティン・ジョーンズ（2005年）、ピーター・ゴドフリー＝スミス（[2009年](https://petergodfreysmith.com/PGSAbstractnIdealizn06.pdf)）によって練り上げられましたが、境界はあいまいです。第二に、細部を省く過程としての「抽象」と、形而上学でいう「抽象的対象」は別物です。抽象的対象とは、数や集合のように、ある見方では空間と時間の外に存在するとされるものを指します。プラトン主義者は、数学はそうした対象を扱うと考え、唯名論者はその存在を否定します。ポール・ベナセラフの「数がありえなかったもの」（1965年）以来の構造主義者によれば、数とは構造のなかの一つの位置にすぎません。日本語の「抽象」（形を抽き出すこと）と「捨象」（特徴を捨てること）という対は、同じ行為の表と裏を言い表しています。何かを抽き出すことは、ほかのものを脇に置くことでもあるからです。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://link.springer.com/article/10.1007/s11229-018-1721-z">Idealization and abstraction: refining the distinction (Synthese)</a> — Review and sharpening of the abstraction–idealisation distinction.<span class="ja">抽象と理想化の区別を見直し、より精密にした論文。</span></li>
<li><a href="https://plato.stanford.edu/archives/win2021/entries/structuralism-mathematics/">Structuralism in the Philosophy of Mathematics (SEP)</a> — Numbers as positions in structures.<span class="ja">数を構造のなかの位置とみる立場を解説する項目。</span></li>
</ul>
</aside>
