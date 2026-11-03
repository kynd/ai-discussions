---
title: "What Is Abstraction?  抽象とは何か"
created: 2026-11-02
updated: 2026-11-02
topics: ["abstraction", "philosophy", "cognitive-science", "computing"]
---

To abstract is, literally, to draw something away: to attend to some features of things and leave the rest aside. The word comes from Latin *abstrahere*, "to pull away", which translated Aristotle's Greek *aphairesis*, "taking away"; the Japanese 抽象 (*chūshō*, "drawing out the shape") is a close equivalent, and its partner 捨象 (*shashō*) names the discarding that goes with it. Philosophers have argued for over two thousand years about how the mind does this and whether its products are real. Aristotle and Aquinas described abstraction as the way the intellect grasps general forms; Locke, Berkeley and Hume quarrelled over whether "abstract ideas" exist at all; Buddhist philosophers held that concepts are mental constructions while only particulars are real. Today, psychologists study abstraction as categorisation and the grasp of abstract words, computer scientists use it to hide detail behind interfaces, and machine-learning researchers ask whether neural networks form genuine abstractions. Two points hold across these fields: abstraction is not vagueness but a way to gain precision about what matters, and it becomes an error only when the abstraction is mistaken for the whole of reality.

<!-- -->

抽象するとは、文字どおりには何かを引き離すことです。ものごとのある特徴に注意を向け、残りを脇に置くことをいいます。この語はラテン語の *abstrahere*（「引き離す」）に由来し、*abstrahere* はアリストテレスのギリシア語「アファイレシス」（「取り去ること」）の訳語でした。日本語の「抽象」（形を抽き出すこと）はこれにごく近い言葉で、対になる「捨象」は、抽象にともなって捨てるほうの働きを指しています。心はどのように抽象を行うのか、そしてその産物は実在するのか。哲学者たちはこの問いを二千年以上論じてきました。アリストテレスとトマス・アクィナスは、抽象を、知性が一般的な形相をとらえるやり方として説明しています。ロック、バークリー、ヒュームは、「抽象観念」がそもそも存在するのかをめぐって争いました。仏教の哲学者たちは、概念は心がつくり上げたもので、実在するのは個々のものだけだと考えました。今日では、心理学者が抽象をカテゴリー化や抽象語の理解として研究し、計算機科学者は細部をインターフェースの奥に隠すために抽象を使っています。機械学習の研究者は、ニューラルネットワークが本物の抽象を形づくっているのかを問うています。どの分野にも共通する点が二つあります。抽象は曖昧さではなく、大切なことについて精密になるための方法だということ。そして抽象が誤りになるのは、抽象を現実の全体ととり違えたときだけだということです。

---

## Driving forces and connections
## 推進力とつながり

Abstraction is needed wherever many particular things must be handled with limited attention. Language itself abstracts: the word "dog" covers countless different animals. [Mathematics](/ai-discussions/articles/abstraction-in-mathematics/) developed abstraction most systematically. Science abstracts in its [models](/ai-discussions/articles/complex-systems-models-and-reality/), leaving out features judged irrelevant. [Visual art](/ai-discussions/articles/abstraction-in-visual-art/) uses the word for painting that does not depict objects, and [music](/ai-discussions/articles/music-and-abstraction/) for sound that refers to nothing. Engineering, and especially computing, turned abstraction into a design discipline in the 1970s. Across these fields, the words "abstract" and "concrete" keep [trading places](/ai-discussions/articles/abstract-and-concrete/).

<!-- -->

多くの個別のものを限られた注意で扱わなければならない場面では、どこでも抽象が必要になります。言語そのものが抽象の働きをもっています。「犬」という一語が、数えきれないほど違う動物をまとめて指すからです。抽象を最も体系的に発展させたのは[数学](/ai-discussions/articles/abstraction-in-mathematics/)でした。科学は[モデル](/ai-discussions/articles/complex-systems-models-and-reality/)をつくるときに抽象し、関係がないと判断した特徴を省きます。[視覚芸術](/ai-discussions/articles/abstraction-in-visual-art/)では事物を描かない絵画を、[音楽](/ai-discussions/articles/music-and-abstraction/)では何も指し示さない音を、この言葉で呼びます。工学、とくに計算機の分野は、1970年代に抽象を設計の方法論に変えました。こうした分野をまたいで、「抽象」と「具体」という言葉は[たえず入れ替わっています](/ai-discussions/articles/abstract-and-concrete/)。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://plato.stanford.edu/archives/spr2006/entries/abstract-objects">Abstract Objects (Stanford Encyclopedia of Philosophy, archived)</a> — Survey of the modern abstract/concrete distinction and its history.<span class="ja">現代の「抽象／具体」の区別と、その歴史を概観する百科事典項目。</span></li>
</ul>
</aside>

---

## Drawing away: the words
## 引き離す — 言葉の成り立ち

The English adjective "abstract" dates from the fourteenth century, and its philosophical sense, "withdrawn or separated from material objects", from the mid-fifteenth ([Etymonline](https://www.etymonline.com/word/abstraction)). It comes from *abs-* "away" and *trahere* "to draw". "Concrete" comes from *concrescere*, "to grow together", so the two words carry opposite images: one pulled out, the other grown into a whole. The Latin *abstractio* rendered the Greek *aphairesis*; the late Roman philosopher Boethius was a key figure in this translation, contrasting it with *chorismos*, the "separation" of Plato's Forms. The Japanese 抽象 combines 抽, "to pull out" (as in 抽出, extraction), and 象, "shape" or "image". It was established as a translation of "abstract" in the Meiji period and appears in the philosophical glossary *Tetsugaku jii* (哲学字彙, 1881), compiled by Inoue Tetsujirō and others, which adopted much of Nishi Amane's vocabulary; who first coined it is not clearly documented. In Japanese, the opposite of 抽象 is either 具体 (*gutai*, concrete or specific) in everyday use, or 具象 (*gushō*, figurative) in art.

<!-- -->

英語の形容詞 abstract は十四世紀から使われており、「物質的な対象から引き離された、切り離された」という哲学的な意味は十五世紀半ばに現れました（[Etymonline](https://www.etymonline.com/word/abstraction)）。*abs-*（「離れて」）と *trahere*（「引く」）からなる語です。一方の concrete は *concrescere*（「ともに成長する」）から来ています。二つの言葉のイメージは正反対で、片方は引き抜かれたもの、もう片方は育ってひとつの全体になったものです。ラテン語の *abstractio* はギリシア語の「アファイレシス」の訳語で、この翻訳には古代ローマ末期の哲学者ボエティウスが大きくかかわりました。ボエティウスはこれを、プラトンのイデアの「分離」を指す「コーリスモス」と対比しています。日本語の「抽象」は、「抽」（抽出のように、引き出すこと）と「象」（形、すがた）を組み合わせた語です。明治期に abstract の訳語として定着し、『哲学字彙』（1881年）にも見えます。井上哲次郎らが編んだこの哲学用語集は、西周の語彙の多くを取り入れていました。ただ、誰が最初にこの語をつくったのかは、はっきりした記録がありません。日本語で「抽象」の反対にあたるのは、日常語では「具体」、美術では「具象」です。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://kotobank.jp/word/抽象">抽象 (コトバンク)</a> — Japanese dictionary entries on 抽象, including its attestation in 哲学字彙 (1881).<span class="ja">『哲学字彙』(1881)に見える用例を含む「抽象」の辞書項目。</span></li>
<li><a href="https://utcp.c.u-tokyo.ac.jp/publications/pdf/UTCPBooklet19_06_Takayanagi.pdf">Takayanagi on 哲学 as a translation term (UTCP, PDF)</a> — On Nishi Amane and the making of Japanese philosophical vocabulary.<span class="ja">西周と、日本語の哲学用語がつくられた経緯についての論考。</span></li>
</ul>
</aside>

---

## Aristotle and Aquinas
## アリストテレスとアクィナス

Aristotle (384–322 BCE) used abstraction to explain mathematics without Plato's separate realm of Forms. The mathematician, he wrote in the *Metaphysics*, studies physical things "qua" quantities or shapes, and so "posits as separate what is not separate". Shapes do not exist apart from bodies, but they can be considered apart. Some scholars argue that the familiar picture of the mind "stripping off" features came from later commentators rather than from Aristotle himself. Thomas Aquinas (1225–1274) developed the idea into a theory of knowledge. In the *Summa Theologiae* (I, q. 85), the intellect knows material things ["by abstracting from phantasms"](https://www.newadvent.org/summa/1085.htm), the images supplied by the senses: it grasps "man" apart from this flesh and these bones. Aquinas insisted that this is not falsification, because "the mode of understanding, in one who understands, is not the same as the mode of a thing in existing". Considering a shape without its matter does not claim that the shape exists without matter.

<!-- -->

アリストテレス（前384〜前322年）は、プラトンのような分離したイデアの世界をもち出さずに数学を説明するため、抽象という考えを使いました。『形而上学』によれば、数学者は物理的なものを量や形「として」研究し、そのため「分離していないものを分離したものとして置く」といいます。形は物体から離れて存在するわけではありませんが、離して考えることはできます。心が特徴を「はぎ取る」というおなじみの図式は、アリストテレス自身ではなく、のちの注釈者たちに由来すると論じる研究者もいます。トマス・アクィナス（1225〜1274年）は、この考えを知識の理論へと発展させました。『神学大全』（第1部第85問）によれば、知性は物質的なものを[「表象像から抽象することによって」](https://www.newadvent.org/summa/1085.htm)知ります。表象像とは、感覚が与える像のことです。知性は「人間」を、この肉やこの骨から離してとらえます。アクィナスは、これは偽りではないと強調しました。「理解する者における理解の仕方は、ものが存在する仕方と同じではない」からです。形を質料ぬきで考えたからといって、形が質料なしに存在すると主張していることにはなりません。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://www.medievalists.net/2010/11/aquinas’s-abstractionism/">Aquinas's Abstractionism (Medievalists.net)</a> — Accessible discussion of Aquinas's theory of abstraction.<span class="ja">トマス・アクィナスの抽象理論を平易に解説した記事。</span></li>
<li><a href="https://acikerisim.bartin.edu.tr/entities/publication/56ed6904-01f9-4d22-bd03-a2d4fd106616">Aristotle's Philosophy of Mathematics and Mathematical Abstraction</a> — Paper on aphairesis and the "qua" operation.<span class="ja">アリストテレスの「アファイレシス」と「〜として」の操作を論じた論文。</span></li>
</ul>
</aside>

---

## Do abstract ideas exist?
## 抽象観念は存在するのか

In the seventeenth and eighteenth centuries, British philosophers turned abstraction into a question about the mind. John Locke's *Essay Concerning Human Understanding* (1690) held that the mind forms general ideas by leaving out the particulars of time and place, and he described the general idea of a triangle as "neither oblique nor rectangle, neither equilateral, equicrural, nor scalenon, but all and none of these at once" — "something imperfect, that cannot exist". George Berkeley's *Principles of Human Knowledge* (1710) attacked this: he invited readers to look into their own minds and try to form such a triangle. For Berkeley there are only particular ideas, which become general by [standing for](https://www.earlymoderntexts.com/assets/pdfs/berkeley1710_1.pdf) all others of the same sort. David Hume's *Treatise of Human Nature* (1739) praised Berkeley's view as one of the most valuable discoveries of the age and explained general terms through custom: a word calls up a particular idea together with a readiness to recall resembling ones. Each step may rest partly on misreading; scholars argue that Locke's triangle meant selective attention rather than an impossible image.

<!-- -->

十七世紀から十八世紀にかけて、イギリスの哲学者たちは抽象を心についての問いに変えました。ジョン・ロックは『人間知性論』（1690年）で、心は時間や場所といった個別の事情を省いて一般観念をつくると考えました。三角形の一般観念については、「斜角でも直角でもなく、等辺でも二等辺でも不等辺でもなく、それらすべてであり、同時にどれでもない」もの、「存在しえない、不完全な何か」と述べています。ジョージ・バークリーは『人知原理論』（1710年）でこれを批判しました。自分の心をのぞいて、そんな三角形を思い浮かべられるか試してみてほしい、と読者に促しています。バークリーによれば存在するのは個別の観念だけで、個別の観念は同じ種類のほかのすべてを[代表する](https://www.earlymoderntexts.com/assets/pdfs/berkeley1710_1.pdf)ことで一般的になります。デイヴィッド・ヒュームは『人間本性論』（1739年）で、バークリーの見解を当代で最も価値ある発見のひとつとたたえ、一般名辞を習慣によって説明しました。言葉は個別の観念を呼び出し、それと同時に、似た観念を思い起こす準備も整える、という説明です。もっとも、どの段階にも誤読が混じっているのかもしれません。ロックの三角形は不可能な像ではなく、選択的な注意のことを言っていた、と論じる研究者もいます。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://faculty.fiu.edu/~hauptli/Berkeley'sPrinciples.html">Hauptli's Lecture Supplement on Berkeley's Principles</a> — Section-by-section teaching notes on Berkeley's argument.<span class="ja">バークリーの議論を節ごとに追う講義ノート。</span></li>
<li><a href="https://resolve.cambridge.org/core/journals/canadian-journal-of-philosophy/article/abs/lockes-triangles/21E3DFD72BED16DFD1C81C4D733DB04D">Locke's Triangles (Canadian Journal of Philosophy)</a> — Argues Locke's triangle passage has been widely misread.<span class="ja">ロックの三角形の一節は広く誤読されてきたと論じる論文。</span></li>
</ul>
</aside>

---

## Concepts without real universals
## 実在する普遍なしの概念

Other traditions reached sceptical views of abstraction independently. In China, Gongsun Long (c. 320–250 BCE) of the School of Names argued that ["a white horse is not a horse"](https://en.wikipedia.org/wiki/Gongsun_Long) (白馬非馬); readings differ on whether he was separating qualities like whiteness as universals, or exposing an ambiguity in the word "horse". In India, the Buddhist logicians Dignāga (c. 480–540) and Dharmakīrti (7th century) developed the [*apoha*](https://www.rep.routledge.com/articles/thematic/apoha/v-1) or "exclusion" theory: words and concepts do not track real universals, and "cow" is formed by excluding what is not a cow. Concepts are mental constructions, while only momentary particulars are real. They debated this with realist Hindu schools such as Nyāya. In twentieth-century Japan, Nishida Kitarō's *An Inquiry into the Good* (1911) treated "pure experience", before the split into subject and object, as the basic form of reality, and thinking and judgement as abstractions from it. These positions resemble Berkeley's in doubting general ideas, though they grew from different questions.

<!-- -->

ほかの伝統も、それぞれ独自に、抽象を疑う見方にたどり着いています。中国では、名家の公孫龍（前320〜前250年ごろ）が[「白馬は馬にあらず」](https://en.wikipedia.org/wiki/Gongsun_Long)（白馬非馬）と論じました。白さのような性質を普遍として切り離そうとしたのか、「馬」という言葉のあいまいさを突こうとしたのかについては、解釈が分かれています。インドでは、仏教の論理学者ディグナーガ（陳那、480〜540年ごろ）とダルマキールティ（法称、七世紀）が[「アポーハ」](https://www.rep.routledge.com/articles/thematic/apoha/v-1)、つまり「他の排除」の理論を発展させました。この理論によれば、言葉や概念は実在する普遍をとらえているわけではありません。「牛」という概念は、牛でないものを排除することで形づくられます。概念は心がつくり上げたもので、実在するのは刹那的な個物だけだとされます。仏教の論理学者たちは、ニヤーヤ学派のような実在論的なヒンドゥー教の学派とこの点を論じあいました。二十世紀の日本では、西田幾多郎が『善の研究』（1911年）で、主観と客観に分かれる前の「純粋経験」を実在の基本的な形とし、思考や判断をそこからの抽象とみなしました。どの立場も一般観念を疑う点ではバークリーに似ていますが、出発点となった問いは異なります。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://plato.stanford.edu/entries/nishida-kitaro/">Nishida Kitarō (Stanford Encyclopedia of Philosophy)</a> — Survey of Nishida's pure experience, universals and logic of place.<span class="ja">西田幾多郎の純粋経験、普遍の理論、場所の論理を概観する項目。</span></li>
<li><a href="https://en.wikipedia.org/wiki/Apoha">Apoha (Wikipedia)</a> — Overview of the Buddhist exclusion theory of meaning.<span class="ja">仏教の「アポーハ」論の概説。</span></li>
</ul>
</aside>

---

## Abstraction in the mind
## 心のなかの抽象

Cognitive science studies abstraction as categorisation and as the meaning of abstract words. Eleanor Rosch's research in the 1970s showed that categories have typical and less typical members, and that there is a privileged ["basic level"](https://www.cns.nyu.edu/~msl/courses/2223/Readings/Rosch-CogPsych1976.pdf) of abstraction: "chair" carries more useful information than the more abstract "furniture" or the more specific "kitchen chair". Allan Paivio's dual coding theory (1971) explained why concrete words are easier to remember than abstract ones: they can be stored both as words and as images. Large rating studies, such as one of about 40,000 English words by Marc Brysbaert and colleagues (2014), treat concreteness as a scale rather than a binary. George Lakoff and Mark Johnson's *Metaphors We Live By* (1980) argued that abstract ideas are understood through concrete bodily ones, as in "time is money". How abstract words such as "freedom" or "truth" are grounded remains [an open problem](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00430/pdf) for embodied theories; Anna Borghi and colleagues propose that such concepts rely more on language, social interaction and inner bodily experience.

<!-- -->

認知科学は、抽象をカテゴリー化として、また抽象語の意味として研究しています。1970年代のエレノア・ロッシュの研究によれば、カテゴリーには典型的な成員とそうでない成員があり、抽象には特別な[「基本レベル」](https://www.cns.nyu.edu/~msl/courses/2223/Readings/Rosch-CogPsych1976.pdf)があります。たとえば「椅子」は、より抽象的な「家具」や、より具体的な「台所の椅子」よりも、役に立つ情報を多く含んでいます。アラン・パイヴィオの二重符号化理論（1971年）は、具体語が抽象語より覚えやすい理由を、言葉としても像としても記憶できるからだと説明しました。マーク・ブリスベールらが約4万語の英単語を評定した研究（2014年）のように、大規模な調査では具体性を二分法ではなく尺度として扱います。ジョージ・レイコフとマーク・ジョンソンは『レトリックと人生』（1980年）で、「時は金なり」のように、抽象的な観念は具体的で身体的な観念を通して理解されると論じました。「自由」や「真理」のような抽象語が何に根ざしているのかは、身体化の理論にとっていまも[未解決の問題](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00430/pdf)です。アンナ・ボルギらは、こうした概念は言語や社会的なやりとり、身体の内側の感覚により多く頼っていると考えています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://synopsis.mcmaster.ca/?p=14454">Concreteness effect explainer (McMaster)</a> — Why concrete words are easier to remember.<span class="ja">具体語が抽象語より覚えやすい理由をわかりやすく説明した記事。</span></li>
<li><a href="https://norare.clld.org/sources/Brysbaert2014">Brysbaert et al. concreteness norms (NoRaRe)</a> — Concreteness ratings for about 40,000 English words.<span class="ja">英単語約4万語の具体性を評定したデータ。</span></li>
</ul>
</aside>

---

## Abstraction as engineering
## 工学としての抽象

Computing made abstraction a practical tool. In his 1972 Turing Award lecture, Edsger Dijkstra said that ["the purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise"](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD356.html). The same year David Parnas proposed ["information hiding"](https://blog.acolyer.org/2016/09/05/on-the-criteria-to-be-used-in-decomposing-systems-into-modules/): divide a program into modules around design decisions likely to change, and hide each decision behind an interface. Barbara Liskov and Stephen Zilles (1974) defined abstract data types, in which a type is known only through its operations. Harold Abelson and Gerald Sussman's textbook *Structure and Interpretation of Computer Programs* (1985) describes every programming language as offering primitives, means of combination, and "means of abstraction". Joel Spolsky's "Law of Leaky Abstractions" (2002) added a warning: ["all non-trivial abstractions, to some degree, are leaky"](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), so programmers still need to understand what lies underneath. In machine learning, Yoshua Bengio and colleagues described deep networks as learning layers of increasingly abstract representations, and François Chollet's Abstraction and Reasoning Corpus (2019) was designed to test whether AI systems can form new abstractions from a few examples rather than recall learned patterns.

<!-- -->

抽象を実用的な道具にしたのは計算機でした。エドガー・ダイクストラは1972年のチューリング賞講演で、[「抽象の目的は曖昧になることではなく、完全に精密になれる新しい意味のレベルをつくることだ」](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD356.html)と語っています。同じ年、デイヴィッド・パルナスは[「情報隠蔽」](https://blog.acolyer.org/2016/09/05/on-the-criteria-to-be-used-in-decomposing-systems-into-modules/)を提案しました。変わりそうな設計上の決定ごとにプログラムをモジュールに分け、それぞれの決定をインターフェースの奥に隠すやり方です。バーバラ・リスコフとスティーヴン・ジルズ（1974年）は抽象データ型を定義しました。型を、その操作を通してしか知ることのできないものとして扱う考え方です。ハロルド・アベルソンとジェラルド・サスマンの教科書『計算機プログラムの構造と解釈』（1985年）によれば、どのプログラミング言語も、基本要素、組み合わせの手段、そして「抽象の手段」を備えています。ジョエル・スポルスキーの「漏れのある抽象化の法則」（2002年）は、ここに注意を加えました。[「自明でない抽象化は、どれもある程度漏れる」](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)ので、プログラマーは結局その下にあるものも理解しておかなければならない、というものです。機械学習では、ヨシュア・ベンジオらが、深層ネットワークは層を重ねるごとに抽象度の高い表現を学ぶと述べました。フランソワ・ショレの「抽象と推論のコーパス」（ARC、2019年）は、AIシステムが学んだパターンを思い出すのではなく、わずかな例から新しい抽象をつくれるかを試すために設計されています。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://blog.acolyer.org/2016/10/20/programming-with-abstract-data-types/">Programming with Abstract Data Types (The Morning Paper)</a> — Summary of Liskov and Zilles's founding paper.<span class="ja">リスコフとジルズの基礎論文の要約。</span></li>
<li><a href="https://arxiv.org/pdf/1206.5538">Bengio, Courville & Vincent, Representation Learning (arXiv)</a> — Review of how deep networks learn layered representations.<span class="ja">深層ネットワークが層を重ねて表現を学ぶ仕組みについての総説。</span></li>
<li><a href="https://arxiv.org/abs/1911.01547v2">Chollet, On the Measure of Intelligence (arXiv)</a> — Defines intelligence as generalisation efficiency and introduces ARC.<span class="ja">知能を汎化の効率として定義し、ARCを提案した論文。</span></li>
</ul>
</aside>

---

## Common confusions
## よくある混同

Abstraction is easily confused with several neighbouring ideas. First, abstraction as a *process* of leaving out detail differs from abstract *objects*, such as numbers and sets, which some philosophers think exist outside space and time; the second idea became central only in twentieth-century philosophy. Second, abstraction differs from idealisation: leaving out a pendulum's colour is abstraction, while treating it as frictionless is idealisation, a deliberate distortion. Third, abstract does not mean vague; in mathematics and programming, abstraction usually increases precision. Fourth, abstraction is not falsification, as Aquinas argued, but forgetting that something is an abstraction can be. Alfred North Whitehead called this the ["fallacy of misplaced concreteness"](https://staticweb.hum.uu.nl/susanne.k.langer/griffinmatterconsciousness01.html) (1925): "mistaking the abstract for the concrete". Finally, "abstract art" is a specialised twentieth-century use for art that does not depict objects, and as the art and music pages show, its practitioners often insisted that their work was the most concrete of all.

<!-- -->

抽象については、よく見られる混同がいくつかあります。第一に、細部を省く*過程*としての抽象と、数や集合のような抽象的*対象*は別のものです。抽象的対象は空間と時間の外に存在すると考える哲学者もいますが、この考えが哲学の中心的な話題になったのは二十世紀になってからでした。第二に、抽象は理想化とは違います。振り子の色を省くのは抽象ですが、摩擦がないものとして扱うのは理想化、つまり意図的なゆがみです。第三に、抽象的だからといって曖昧なわけではありません。数学やプログラミングでは、抽象はたいてい精密さを高めます。第四に、アクィナスが論じたとおり抽象は偽りではありませんが、抽象であることを忘れると偽りになりえます。アルフレッド・ノース・ホワイトヘッドはこれを[「具体性置き違えの誤謬」](https://staticweb.hum.uu.nl/susanne.k.langer/griffinmatterconsciousness01.html)（1925年）、つまり「抽象を具体ととり違えること」と呼びました。最後に、「抽象芸術」は事物を描かない芸術を指す、二十世紀に生まれた特殊な用法です。美術や音楽のページで見るように、抽象芸術の作り手たちは、自分たちの作品こそ最も具体的だとしばしば主張していました。

<aside class="resources">
<p class="resources-label">Further resources · 関連資料</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Reification_(fallacy)">Reification (fallacy) (Wikipedia)</a> — Explains reification and its link to Whitehead's term.<span class="ja">物象化の誤謬とは何か、ホワイトヘッドの用語とどう関係するかの解説。</span></li>
<li><a href="https://link.springer.com/article/10.1007/s11229-018-1721-z">Idealization and abstraction: refining the distinction (Synthese)</a> — Sharpens the abstraction–idealisation distinction.<span class="ja">抽象と理想化の区別をより厳密にした論文。</span></li>
</ul>
</aside>
