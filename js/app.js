// ===== MINERVA THINKING HABITS DATABASE (with guide data) =====
const HABITS_DATA = [
  {
    category: 'critical', categoryName: '批判性思考', categoryNameEn: 'Critical Thinking',
    categoryDesc: '系統性地分析和評估資訊，排除偏誤，做出理性判斷',
    subcategories: [
      { name: '分析問題', habits: [
        { id: 'right_question', name: '問對問題', nameEn: 'Asking the Right Question', desc: '找出現況、目標、障礙與限制，精準定義真正需要解決的問題', keywords: ['問題','目標','困難','挑戰','方向','定義','為什麼','怎麼','卡關','不知道'],
          guide: { steps: ['列出你的現況：目前正在發生什麼事','定義你的目標：理想的結果是什麼','區分障礙（可改變）和限制（不可改變）','驗證：移除障礙後在限制內是否能達成目標'],
            questions: [{l:'你真正想要解決的問題是什麼？',p:'用一句話描述核心問題'},{l:'你以為的問題 vs 真正的問題，有差異嗎？',p:'例如：以為是技術問題，其實是溝通問題'},{l:'誰定義了這是個問題？',p:'是你自己、老闆、客戶、還是情境？'}]}},
        { id: 'decompose', name: '拆解問題', nameEn: 'Problem Decomposition', desc: '將複雜問題分解成可處理的小組成部分', keywords: ['複雜','分解','拆解','步驟','組成','部分','太大','龐大','頭緒'],
          guide: { steps: ['把問題寫下來，觀察它包含幾個面向','為每個面向列出獨立的子問題','排列子問題的優先順序和依賴關係','從最關鍵或最容易的子問題開始解決'],
            questions: [{l:'你的問題可以分成哪幾個面向？',p:'例如：技術面、人員面、資源面、時間面...'},{l:'哪個子問題解決後，其他問題會連帶緩解？',p:'找出關鍵瓶頸'},{l:'有沒有哪個子問題其實已經有現成解法？',p:'不需要從零開始的部分'}]}},
        { id: 'variable_analysis', name: '變量分析', nameEn: 'Variable Analysis', desc: '辨識問題中的關鍵變量與參數，理解它們之間的關係', keywords: ['變量','因素','影響','變數','參數','關鍵','因果','原因'],
          guide: { steps: ['列出所有可能影響結果的因素','區分哪些是你能控制的，哪些不能','找出變量之間的因果關係','聚焦在影響力最大的變量上'],
            questions: [{l:'有哪些因素會影響最終結果？',p:'盡量列出所有你想到的因素'},{l:'這些因素中，哪些是你能控制的？',p:'區分可控 vs 不可控'},{l:'改變哪一個因素，會對結果產生最大影響？',p:'找出槓桿點'}]}},
        { id: 'game_theory', name: '賽局理論', nameEn: 'Game Theory', desc: '分析多方利害關係人的策略互動與最佳回應', keywords: ['競爭','對手','策略','博弈','利害','雙方','多方','賽局','競爭者'],
          guide: { steps: ['辨識所有利害關係人（玩家）','分析每個玩家的目標和可能行動','預測對方的反應和回應策略','找出對所有人最有利（或最不壞）的方案'],
            questions: [{l:'這個問題涉及哪些利害關係人？',p:'列出所有會受影響或能影響結果的人'},{l:'每個人的核心利益和目標是什麼？',p:'他們各自想要什麼？'},{l:'如果你先行動，對方最可能怎麼反應？',p:'推演可能的回應'}]}}
      ]},
      { name: '分析決策', habits: [
        { id: 'understand_causes', name: '理解成因', nameEn: 'Understanding Causes', desc: '深入探究問題背後的根本原因，而非只看表面症狀', keywords: ['原因','為什麼','根本','成因','源頭','本質','深層','背後'],
          guide: { steps: ['描述你觀察到的表面症狀','連續問五次「為什麼」往深層挖掘','區分直接原因和根本原因','驗證你的根因假設是否正確'],
            questions: [{l:'你看到的表面症狀是什麼？',p:'描述具體的現象'},{l:'為什麼會出現這個症狀？（連問5次為什麼）',p:'第一層原因 → 第二層 → 第三層...'},{l:'這個問題是不是其他更大問題的症狀？',p:'退一步看全局'}]}},
        { id: 'purpose', name: '目的分析', nameEn: 'Purpose Analysis', desc: '釐清決策的真正目的，確保行動與目標一致', keywords: ['目的','目標','為了','意義','價值','方向','初衷'],
          guide: { steps: ['寫下你正在做的事情','問自己：這件事的真正目的是什麼','確認目的和行動是否一致','如果不一致，調整行動或重新定義目的'],
            questions: [{l:'你做這件事的真正目的是什麼？',p:'不是「怎麼做」，而是「為了什麼」'},{l:'你目前的行動是否真的在服務這個目的？',p:'有沒有偏離方向的地方？'},{l:'如果目的達成了，你會看到什麼具體的改變？',p:'描述成功的畫面'}]}},
        { id: 'utility', name: '效用分析', nameEn: 'Utility Analysis', desc: '評估各選項的成本效益，考慮所有利害關係人', keywords: ['效益','成本','價值','值得','划算','效用','投資','報酬','CP值'],
          guide: { steps: ['列出所有可行選項','為每個選項列出成本和效益','考慮所有受影響者的成本效益','選擇總效用最高的選項'],
            questions: [{l:'你有哪些選項？',p:'至少列出三個可行方案'},{l:'每個選項的成本（金錢/時間/精力）是什麼？',p:'量化或描述具體代價'},{l:'每個選項能帶來什麼效益？對誰有益？',p:'列出直接和間接的好處'}]}},
        { id: 'bias_detection', name: '偏誤檢驗', nameEn: 'Bias Detection', desc: '識別確認偏誤、可得性偏誤、注意力偏誤等認知陷阱', keywords: ['偏見','盲點','假設','以為','覺得','直覺','偏誤','主觀'],
          guide: { steps: ['列出你目前對這個問題的所有假設','檢查每個假設是否有充分證據支持','想像一個完全相反的觀點','找一個持不同意見的人來挑戰你的想法'],
            questions: [{l:'你在這個問題上有什麼「理所當然」的假設？',p:'把「我覺得」「大家都知道」的想法列出來'},{l:'你是否只看到支持你觀點的證據？',p:'有沒有故意或無意忽略反面證據？'},{l:'如果有人持完全相反的立場，他的理由會是什麼？',p:'站在對立面思考'}]}},
        { id: 'bias_mitigation', name: '偏誤減輕', nameEn: 'Bias Mitigation', desc: '採取具體方法來降低認知偏誤對決策的影響', keywords: ['客觀','中立','避免','修正','校正','減少偏見'],
          guide: { steps: ['辨識在這個決策中最可能出現的偏誤類型','為每個偏誤設計對應的防護機制','引入外部視角來交叉驗證','設定明確的決策標準，減少主觀判斷空間'],
            questions: [{l:'你在這個決策中最擔心哪種偏誤？',p:'例如：確認偏誤、沉沒成本、從眾效應...'},{l:'你可以找誰來提供不同的觀點？',p:'刻意找「會反對你」的人'},{l:'有沒有客觀的數據或標準可以取代主觀判斷？',p:'能量化的盡量量化'}]}},
        { id: 'decision_tree', name: '決策樹', nameEn: 'Decision Tree', desc: '用樹狀結構呈現決策路徑，評估各選項的後果與機率', keywords: ['選擇','選項','方案','路徑','如果','決策','A還是B','決定'],
          guide: { steps: ['列出你面臨的決策點','為每個選項列出可能的結果','估計每個結果的發生機率','計算每條路徑的期望值，選擇最佳路徑'],
            questions: [{l:'你面臨哪些選項？',p:'列出所有可行的選擇'},{l:'每個選項最好和最壞的結果分別是什麼？',p:'描述最樂觀和最悲觀的情境'},{l:'你認為每種結果發生的機率大約多少？',p:'不需精確，用高/中/低估計即可'}]}},
        { id: 'sunk_cost', name: '沉沒成本', nameEn: 'Sunk Cost Analysis', desc: '辨識已無法回收的投入，避免因沉沒成本而做出錯誤決策', keywords: ['已經投入','放棄','繼續','捨不得','沉沒','回不去','浪費'],
          guide: { steps: ['列出你在這個決策中已經投入的成本','問自己：如果從零開始，我還會做同樣的選擇嗎','只考慮未來的成本和效益來做決策','如果答案是「不會」，勇敢止損'],
            questions: [{l:'你已經在這件事上投入了多少（時間/金錢/精力）？',p:'具體列出已投入的資源'},{l:'如果從零開始，你還會做同樣的選擇嗎？',p:'忽略已投入的成本來思考'},{l:'繼續投入的預期收益，真的值得嗎？',p:'只看未來，不看過去'}]}},
        { id: 'risk_uncertainty', name: '風險與不確定性', nameEn: 'Risk & Uncertainty', desc: '區分可量化的風險與不可量化的不確定性，做出穩健決策', keywords: ['風險','不確定','可能','萬一','危險','安全','保險','穩定'],
          guide: { steps: ['列出所有可能出錯的情境','區分「風險」（可估算機率）和「不確定性」（無法估算）','為風險制定應對方案和保險機制','對不確定性保持靈活，設定監測指標'],
            questions: [{l:'最壞的情況是什麼？發生的機率有多高？',p:'描述最壞情境和你的估計'},{l:'你能承受的最大損失是什麼？',p:'定義你的底線'},{l:'有沒有辦法在小範圍先試驗，降低不確定性？',p:'先小規模測試再全面投入'}]}}
      ]},
      { name: '分析資料', habits: [
        { id: 'descriptive_stats', name: '描述統計', nameEn: 'Descriptive Statistics', desc: '使用平均數、中位數、標準差等方法摘要資料特徵', keywords: ['數據','資料','統計','平均','數字','量化','報表'],
          guide: { steps: ['收集與問題相關的數據','計算關鍵指標（平均值、中位數、極端值）','觀察數據的分散程度和趨勢','用數據說故事，而不是用直覺'],
            questions: [{l:'你有哪些與這個問題相關的數據？',p:'列出可取得的數據來源'},{l:'這些數據的平均值和極端值分別是什麼？',p:'了解整體趨勢和異常情況'},{l:'數據是否有隨時間變化的趨勢？',p:'觀察是上升、下降還是波動'}]}},
        { id: 'probability', name: '機率思維', nameEn: 'Probability', desc: '運用機率與條件機率來評估事件發生的可能性', keywords: ['機率','可能性','機會','概率','可能','百分比'],
          guide: { steps: ['辨識不確定的事件和可能的結果','估計每種結果的發生機率','考慮條件機率：在某前提下的機率變化','用機率而非「一定會/不會」來思考'],
            questions: [{l:'你認為成功的機率大約是多少？',p:'用百分比估計'},{l:'有什麼條件會改變這個機率？',p:'什麼因素會讓成功率提高或降低？'},{l:'你是否高估了某些事情發生的可能性？',p:'常見的偏誤：高估極端事件、低估日常風險'}]}},
        { id: 'distribution', name: '分布分析', nameEn: 'Distribution', desc: '理解資料的分布型態，辨識常態與異常模式', keywords: ['分布','趨勢','模式','分散','集中','型態'],
          guide: { steps: ['觀察數據的分布形狀','辨識是否有集中趨勢或極端值','判斷分布型態對決策的影響','注意平均值可能掩蓋的差異'],
            questions: [{l:'你的數據是集中在某個範圍，還是分散的？',p:'描述數據的分布情況'},{l:'有沒有特別突出的異常值？',p:'這些異常值代表什麼？'},{l:'平均值是否能代表典型情況？',p:'有時中位數比平均值更有意義'}]}},
        { id: 'confidence_interval', name: '信賴區間', nameEn: 'Confidence Interval', desc: '理解估計的精確度範圍，區分效應大小', keywords: ['區間','範圍','精確','誤差','信賴','估計'],
          guide: { steps: ['認識到任何估計都有不確定性','思考你的估計的可能誤差範圍','用區間而非單一數字來表達預期','考慮樣本大小對精確度的影響'],
            questions: [{l:'你的估計有多大的誤差範圍？',p:'例如：預估營收100萬，但可能在80-120萬之間'},{l:'你有多大的信心這個估計是對的？',p:'70%？90%？99%？'},{l:'如果實際結果落在最差端，你的計畫還可行嗎？',p:'測試計畫的穩健性'}]}},
        { id: 'correlation', name: '相關性分析', nameEn: 'Correlation Analysis', desc: '區分相關與因果，避免將共變當作因果關係', keywords: ['相關','因果','關聯','連動','影響','導致'],
          guide: { steps: ['觀察兩個變量是否同時變化','區分「相關」和「因果」','尋找可能的第三變量（混淆因子）','設計實驗或找反例來驗證因果'],
            questions: [{l:'你觀察到哪兩件事情經常一起發生？',p:'描述看起來相關的現象'},{l:'A真的導致了B嗎？還是只是碰巧一起出現？',p:'有沒有可能是巧合或第三因素'},{l:'有沒有反例：A發生但B沒發生？',p:'找出例外情況'}]}},
        { id: 'fallacy', name: '統計謬誤', nameEn: 'Statistical Fallacy', desc: '識別常見的統計錯誤解讀，如倖存者偏差、基率謬誤', keywords: ['錯誤','誤解','謬誤','陷阱','倖存','偏差'],
          guide: { steps: ['辨識數據來源是否有選擇偏差','檢查是否忽略了基率（基準機率）','注意倖存者偏差：你只看到成功的案例','質疑任何「驚人」的統計數字背後的方法'],
            questions: [{l:'你看到的數據是否只來自「成功者」？',p:'例如：只看到成功的創業者，忽略了失敗的99%'},{l:'這個結論有沒有忽略基率？',p:'在整體中，這個事件本來就多常發生？'},{l:'資料的收集方式有沒有可能造成偏差？',p:'誰被納入？誰被排除？'}]}},
        { id: 'significance', name: '統計顯著性', nameEn: 'Statistical Significance', desc: '判斷資料結果是否具有統計上的意義', keywords: ['顯著','有效','證明','驗證','實驗','測試'],
          guide: { steps: ['區分「統計顯著」和「實際重要」','考慮樣本大小對顯著性的影響','注意多重比較問題','用效果量來評估實際影響力'],
            questions: [{l:'你的觀察結果可能只是隨機波動嗎？',p:'如果重複做，結果會一致嗎？'},{l:'你的樣本夠大嗎？',p:'樣本太小容易產生假陽性'},{l:'統計上顯著的結果，在實際應用上重要嗎？',p:'差異可能很小但統計上顯著'}]}}
      ]},
      { name: '評估理由', habits: [
        { id: 'evidence_base', name: '證據基礎', nameEn: 'Evidence Base', desc: '確認主張是否有充分的證據支持', keywords: ['證據','根據','來源','依據','佐證','事實'],
          guide: { steps: ['列出支持你結論的所有證據','評估每條證據的品質和強度','找出缺乏證據的假設','確認證據是否足以支撐你的結論'],
            questions: [{l:'支持你這個結論的證據有哪些？',p:'列出具體的事實、數據、案例'},{l:'這些證據的品質如何？是一手資料還是二手轉述？',p:'評估證據的可靠度'},{l:'有沒有哪些關鍵假設缺乏證據支持？',p:'找出你「相信但無法證明」的部分'}]}},
        { id: 'source_quality', name: '來源品質', nameEn: 'Source Quality', desc: '評估資訊來源的可信度、權威性和潛在偏見', keywords: ['來源','可信','權威','專家','可靠','真假'],
          guide: { steps: ['確認資訊來源是誰','評估來源的專業性和可信度','檢查來源是否有利益衝突','交叉比對多個獨立來源'],
            questions: [{l:'這個資訊的來源是誰？',p:'作者/機構/媒體是誰？'},{l:'這個來源有沒有可能的利益衝突或偏見？',p:'他們有沒有立場或利益動機？'},{l:'有沒有其他獨立來源可以佐證？',p:'至少找一個不同管道驗證'}]}},
        { id: 'deduction', name: '演繹推理', nameEn: 'Deductive Reasoning', desc: '從普遍性前提推導出必然的特定結論', keywords: ['推理','邏輯','如果那麼','必然','前提','結論'],
          guide: { steps: ['列出你的前提假設','用「如果A則B」的結構寫出推理','檢查前提是否為真','檢查推理過程是否有邏輯漏洞'],
            questions: [{l:'你的結論建立在哪些前提之上？',p:'列出所有「如果...」'},{l:'這些前提是否都是真的？',p:'逐一檢驗每個前提'},{l:'從這些前提到結論的推理過程有沒有跳躍？',p:'每一步推理是否必然成立？'}]}},
        { id: 'induction', name: '歸納推理', nameEn: 'Inductive Reasoning', desc: '從特定觀察推導出普遍性的結論', keywords: ['觀察','規律','歸納','模式','趨勢','總結'],
          guide: { steps: ['收集多個特定的觀察或案例','尋找共同的模式或規律','將觀察歸納為一般性的結論','用新的案例來測試你的結論'],
            questions: [{l:'你觀察到了什麼重複出現的模式？',p:'描述你看到的規律'},{l:'這個模式是否在不同情境下都成立？',p:'列出支持和不支持的案例'},{l:'你的樣本是否足夠多且夠多元？',p:'避免以偏概全'}]}},
        { id: 'logical_fallacy', name: '邏輯謬誤識別', nameEn: 'Logical Fallacy Detection', desc: '識別稻草人、滑坡、循環論證等常見邏輯謬誤', keywords: ['邏輯','漏洞','矛盾','不合理','說不通','牽強'],
          guide: { steps: ['把論述拆解成前提和結論','檢查是否有常見的邏輯謬誤','辨別論述是否偷換概念或轉移話題','用反例來測試論述的有效性'],
            questions: [{l:'這個論述的邏輯是否有跳躍或漏洞？',p:'把論述寫出來，逐步檢查'},{l:'有沒有偷換概念、訴諸權威、或人身攻擊？',p:'常見謬誤：稻草人、滑坡、循環論證...'},{l:'能不能找到一個反例來推翻這個論述？',p:'如果找得到反例，論述就不成立'}]}},
        { id: 'reductio', name: '歸謬法', nameEn: 'Reductio ad Absurdum', desc: '將對方論點推到極端來檢驗其合理性', keywords: ['極端','假如','荒謬','反證','推翻','不成立'],
          guide: { steps: ['先接受這個主張為真','把這個主張推到邏輯上的極端','觀察是否導出荒謬或矛盾的結論','如果是，則原始主張有問題'],
            questions: [{l:'把這個主張推到極端會怎樣？',p:'如果100%按照這個邏輯走...'},{l:'這個推到極端的結論是否荒謬？',p:'有沒有產生明顯的矛盾？'},{l:'反過來，如果假設這個主張是錯的呢？',p:'從反面出發看看'}]}}
      ]},
      { name: '評估主張', habits: [
        { id: 'context', name: '脈絡理解', nameEn: 'Contextual Understanding', desc: '在歷史、文化、學科的脈絡中理解資訊的意義', keywords: ['背景','脈絡','情境','文化','歷史','環境','條件'],
          guide: { steps: ['了解這個問題所處的更大背景','考慮歷史、文化和產業脈絡','辨識脈絡如何影響問題的定義和解法','避免脫離脈絡地套用其他情境的解法'],
            questions: [{l:'這個問題是在什麼背景下產生的？',p:'產業/文化/組織/歷史背景'},{l:'這個情境和其他類似的情境有什麼不同？',p:'為什麼不能直接套用別人的做法？'},{l:'有沒有更大的趨勢正在影響這個問題？',p:'宏觀環境的變化'}]}},
        { id: 'critical_analysis', name: '批判分析', nameEn: 'Critical Analysis', desc: '主動質疑和檢驗主張，而非被動接受資訊', keywords: ['質疑','檢驗','批判','懷疑','真的嗎','確定嗎'],
          guide: { steps: ['對任何主張先問「真的嗎？」','找出主張背後的假設','尋找支持和反對的證據','形成你自己經過思考的判斷'],
            questions: [{l:'這個主張的核心假設是什麼？',p:'把隱藏的假設挖出來'},{l:'有什麼證據支持？有什麼證據反對？',p:'平衡地看正反兩面'},{l:'提出這個主張的人有什麼動機？',p:'理解為什麼他會這樣說'}]}},
        { id: 'reasonableness', name: '合理性評估', nameEn: 'Reasonableness Assessment', desc: '評估假設前提的可行性和主張的合理程度', keywords: ['合理','可行','實際','現實','說得通','有道理'],
          guide: { steps: ['把主張轉換成可驗證的具體陳述','評估每個假設的合理程度','用常識和經驗進行初步判斷','找出最薄弱的假設環節'],
            questions: [{l:'這個方案在實務上可行嗎？',p:'考慮資源、時間、能力的限制'},{l:'類似的做法過去有成功過嗎？',p:'有沒有前例可參考？'},{l:'你最大的擔心是什麼？',p:'直覺告訴你哪裡不對？'}]}},
        { id: 'testability', name: '可驗證性', nameEn: 'Testability', desc: '判斷假說是否可被驗證，區分科學與偽科學', keywords: ['驗證','測試','證明','實驗','可以驗證','證據'],
          guide: { steps: ['把你的假設轉換成可被驗證的預測','設計一個最簡單的驗證方法','執行測試並收集結果','根據結果修正或確認你的假設'],
            questions: [{l:'你的假設可以被證明是錯的嗎？',p:'如果不能被推翻，它可能不是好假設'},{l:'什麼樣的證據可以驗證或推翻這個假設？',p:'描述你需要看到什麼'},{l:'最快、最便宜的驗證方法是什麼？',p:'不需要完美，先快速測試'}]}},
        { id: 'estimation', name: '估計與近似', nameEn: 'Estimation', desc: '在資訊不完整時做出合理的量化估算', keywords: ['估計','大約','估算','粗估','量級','多少'],
          guide: { steps: ['把大問題拆解成小的可估計的部分','為每個部分做合理的估計','把小估計組合成整體估計','設定估計的信心區間'],
            questions: [{l:'你需要估計什麼？',p:'描述你想量化的東西'},{l:'可以把它拆解成哪些更容易估計的部分？',p:'例如：市場規模 = 用戶數 x 付費率 x 客單價'},{l:'你的估計的上下限分別是多少？',p:'最樂觀和最悲觀的情況'}]}}
      ]}
    ]
  },
  {
    category: 'creative', categoryName: '創意思考', categoryNameEn: 'Creative Thinking',
    categoryDesc: '運用創造性方法解決問題，發掘新可能，設計創新方案',
    subcategories: [
      { name: '問題解決', habits: [
        { id: 'analogy', name: '類比思考', nameEn: 'Analogical Thinking', desc: '從其他領域借用相似的解決模式來解決當前問題', keywords: ['類比','像是','類似','好比','其他領域','借鏡','參考'],
          guide: { steps: ['描述你的問題的核心結構','想想其他領域有沒有類似結構的問題','研究那個領域是怎麼解決的','把解決模式翻譯回你的領域'],
            questions: [{l:'你的問題的核心結構是什麼？',p:'抽象化：例如「資源分配」「優先排序」「平衡兩端」'},{l:'其他領域有沒有類似的問題？',p:'例如：生態系統、軍事、運動、醫療...'},{l:'那個領域的解法可以怎麼應用到你的情境？',p:'翻譯和調整'}]}},
        { id: 'constraint_satisfaction', name: '限制條件滿足', nameEn: 'Constraint Satisfaction', desc: '在既定的限制條件下找到最佳解決方案', keywords: ['限制','條件','範圍','框架','在...之內','有限'],
          guide: { steps: ['明確列出所有限制條件','區分硬限制（不可違反）和軟限制（可協商）','在限制範圍內尋找最大的創意空間','必要時重新談判軟限制'],
            questions: [{l:'你面臨哪些限制條件？',p:'時間、預算、人力、技術、法規...'},{l:'哪些限制是絕對不能違反的？哪些可以談判？',p:'區分硬限制和軟限制'},{l:'在這些限制內，你最大的自由度在哪裡？',p:'找到可以發揮創意的空間'}]}},
        { id: 'optimization', name: '最佳化', nameEn: 'Optimization', desc: '在多個變量中找到最佳平衡點', keywords: ['最佳','優化','平衡','最大化','效率','改善','提升'],
          guide: { steps: ['定義你要優化的目標函數','辨識所有影響目標的變量','找出變量之間的權衡關係','透過實驗或分析找到最佳平衡點'],
            questions: [{l:'你最想優化的指標是什麼？',p:'例如：速度、品質、成本、滿意度...'},{l:'優化這個指標會犧牲什麼？',p:'通常有取捨：快 vs 好、便宜 vs 好...'},{l:'目前的效率瓶頸在哪裡？',p:'哪個環節改善空間最大？'}]}},
        { id: 'reverse_thinking', name: '逆向思考', nameEn: 'Reverse Thinking', desc: '從結果反推過程，或用反面思考來發現新思路', keywords: ['反過來','如果不','逆向','反面','相反','換個角度'],
          guide: { steps: ['先想像理想的最終結果','從結果反推：要達到這個結果需要什麼','或者反過來問：如何確保失敗','避開所有會導致失敗的做法'],
            questions: [{l:'如果要「確保失敗」，你會怎麼做？',p:'列出所有會導致失敗的行為'},{l:'從理想結果反推，倒數第一步應該是什麼？',p:'反向拆解時間線'},{l:'如果把問題完全反過來看，會得到什麼洞察？',p:'例如：「如何留住員工」→「員工為什麼會離開」'}]}},
        { id: 'design_thinking', name: '設計思考', nameEn: 'Design Thinking', desc: '以使用者為中心，通過同理心、定義、構思、原型、測試來創新', keywords: ['設計','使用者','體驗','原型','測試','迭代','用戶','需求'],
          guide: { steps: ['同理心：深入理解使用者的真實需求和痛點','定義：精準定義要解決的問題','構思：產生大量創意解決方案','原型+測試：快速做出簡陋原型，收集回饋'],
            questions: [{l:'你的使用者/受眾真正的痛點是什麼？',p:'不是他們「說」要什麼，而是他們實際的困擾'},{l:'你能做出最簡單的原型來測試想法嗎？',p:'不需要完美，只需要能收集回饋'},{l:'從使用者的回饋中，你學到了什麼意外的事？',p:'哪些假設被推翻了？'}]}},
        { id: 'heuristic', name: '啟發式方法', nameEn: 'Heuristic Methods', desc: '使用經驗法則快速找到近似解，再逐步優化', keywords: ['經驗','捷徑','快速','近似','先試','直覺','嘗試'],
          guide: { steps: ['用經驗和直覺快速產生一個可行方案','評估這個方案的大致品質','識別最明顯的改進空間','逐步迭代優化'],
            questions: [{l:'你的直覺告訴你答案是什麼？',p:'先相信你的經驗'},{l:'有沒有類似的問題你之前解決過？',p:'過去的經驗能提供什麼捷徑？'},{l:'先試一個「夠好」的方案，最壞會怎樣？',p:'不追求完美，先求有再求好'}]}},
        { id: 'simulation', name: '模擬建模', nameEn: 'Simulation Modeling', desc: '建立簡化模型來模擬真實情境，預測可能結果', keywords: ['模擬','模型','預測','情境','沙盤','推演'],
          guide: { steps: ['辨識系統中的關鍵變量和關係','建立簡化的模型（心理模型或數學模型）','輸入不同的假設條件進行模擬','觀察結果，找出敏感變量'],
            questions: [{l:'如果用最簡單的方式描述這個系統，它長什麼樣？',p:'畫出或寫出核心元素和關係'},{l:'改變哪個變量對結果的影響最大？',p:'找出最敏感的槓桿點'},{l:'在最樂觀和最悲觀的假設下，結果分別是什麼？',p:'情境分析'}]}}
      ]},
      { name: '發掘與探索', habits: [
        { id: 'hypothesis', name: '建立假說', nameEn: 'Hypothesis Building', desc: '提出可被驗證的假設，引導系統性的探索', keywords: ['假設','假說','猜測','推測','如果','驗證','實驗'],
          guide: { steps: ['基於觀察提出一個可驗證的假設','設計最簡單的方法來驗證它','收集資料並分析結果','根據結果修正假設或提出新假設'],
            questions: [{l:'你的假設是什麼？（用「如果...那麼...」的格式）',p:'例如：如果我們縮短會議時間，那麼決策效率會提升'},{l:'什麼樣的結果可以證明你的假設是錯的？',p:'定義「失敗」的標準'},{l:'最快驗證這個假設的方法是什麼？',p:'最小可行實驗'}]}},
        { id: 'data_visualization', name: '資料視覺化', nameEn: 'Data Visualization', desc: '用圖表將複雜資料轉化為直觀的視覺呈現', keywords: ['圖表','視覺化','呈現','圖形','看得到','展示'],
          guide: { steps: ['確定你想透過視覺化傳達什麼訊息','選擇最適合的圖表類型','確保視覺化清晰、不誤導','讓不懂數據的人也能看懂'],
            questions: [{l:'你想讓觀眾從數據中看到什麼？',p:'一個核心訊息'},{l:'什麼類型的圖表最適合這種數據？',p:'趨勢用折線圖、比較用長條圖、比例用圓餅圖...'},{l:'有沒有可能被誤解的地方？',p:'檢查座標軸、比例、標籤'}]}},
        { id: 'modeling', name: '建模', nameEn: 'Modeling', desc: '建立概念或數學模型來解釋現象並產生預測', keywords: ['模型','建模','架構','框架','抽象','結構'],
          guide: { steps: ['辨識你要建模的現象或系統','選擇適當的簡化層次','定義模型中的關鍵要素和關係','用模型產生預測，再與現實對照'],
            questions: [{l:'你想建立什麼的模型？',p:'描述要模擬的系統或現象'},{l:'哪些要素是模型中必須包含的？',p:'最關鍵的變量和關係'},{l:'你的模型省略了什麼？這些省略合理嗎？',p:'所有模型都是簡化，關鍵是簡化得當'}]}}
      ]},
      { name: '應用研究方法', habits: [
        { id: 'sampling', name: '抽樣方法', nameEn: 'Sampling', desc: '設計合理的抽樣方式來收集具代表性的資料', keywords: ['抽樣','樣本','代表性','調查','取樣'],
          guide: { steps: ['定義你的目標群體','選擇適當的抽樣方法','確保樣本具有代表性','考慮樣本大小是否足夠'],
            questions: [{l:'你想了解的「整體」是什麼？',p:'你的目標群體是誰？'},{l:'你的樣本是否能代表整體？',p:'有沒有哪些群體被漏掉了？'},{l:'你的樣本大小夠嗎？',p:'太小的樣本容易產生偏差'}]}},
        { id: 'observational', name: '觀察性研究', nameEn: 'Observational Study', desc: '在不介入的情況下系統性觀察和記錄現象', keywords: ['觀察','記錄','調查','現象','發現','蒐集'],
          guide: { steps: ['定義你要觀察什麼','設計系統性的觀察方法和記錄方式','在自然環境下進行觀察','分析觀察結果，尋找模式'],
            questions: [{l:'你想觀察什麼現象？',p:'具體描述觀察目標'},{l:'你打算怎麼記錄觀察結果？',p:'定義記錄方式和格式'},{l:'你的觀察有沒有可能影響被觀察者的行為？',p:'霍桑效應：被觀察時行為會改變'}]}},
        { id: 'interventional', name: '介入性研究', nameEn: 'Interventional Study', desc: '通過控制變量的實驗來驗證因果關係', keywords: ['實驗','介入','控制','測試','A/B','對照'],
          guide: { steps: ['設計實驗：定義干預措施和對照組','控制其他變量，只改變你想測試的','收集數據並比較結果','根據結果判斷因果關係'],
            questions: [{l:'你想測試什麼因果關係？',p:'「改變X是否會導致Y變化？」'},{l:'你可以設計什麼樣的A/B測試？',p:'實驗組 vs 對照組'},{l:'有哪些混淆變量需要控制？',p:'除了你要測的，其他條件要一致'}]}},
        { id: 'case_study', name: '個案研究', nameEn: 'Case Study', desc: '深入分析特定案例來獲得洞察', keywords: ['案例','個案','深入','具體','實例','故事'],
          guide: { steps: ['選擇具代表性或啟發性的案例','收集案例的完整資訊','分析案例中的因果關係和關鍵決策','提煉可推廣的洞察和原則'],
            questions: [{l:'有哪些類似的成功或失敗案例可以研究？',p:'找最相關的前例'},{l:'這個案例成功/失敗的關鍵因素是什麼？',p:'深入分析原因'},{l:'這個案例的經驗可以怎麼應用到你的情境？',p:'哪些可以複製，哪些需要調整'}]}},
        { id: 'interview', name: '訪談式研究', nameEn: 'Interview Study', desc: '通過訪談收集質性資料', keywords: ['訪談','訪問','問卷','回饋','意見','了解'],
          guide: { steps: ['定義訪談目的和想了解的問題','設計開放式問題清單','進行訪談，保持好奇和開放','整理和分析訪談結果'],
            questions: [{l:'你最想從受訪者那裡了解什麼？',p:'核心問題是什麼？'},{l:'你應該訪問誰？',p:'列出最能提供洞察的人選'},{l:'你的問題是否足夠開放，不會引導答案？',p:'避免「你覺得...對嗎？」這類問法'}]}},
        { id: 'replicability', name: '研究可複製性', nameEn: 'Replicability', desc: '確保方法和結果可被重複驗證', keywords: ['複製','重複','驗證','再現','標準化'],
          guide: { steps: ['詳細記錄你的方法和步驟','確保其他人按照同樣步驟能得到類似結果','識別可能影響結果的環境因素','反覆測試以確認穩定性'],
            questions: [{l:'如果別人照你的方法做，能得到同樣結果嗎？',p:'你的方法是否足夠清楚和標準化？'},{l:'你的結果是否穩定？重複做會一樣嗎？',p:'一次成功可能是運氣'},{l:'有沒有隱藏的條件影響了結果？',p:'環境、時間、人員等因素'}]}},
        { id: 'control_group', name: '比較組設計', nameEn: 'Control Group', desc: '設計適當的對照組來隔離變量效應', keywords: ['對照','比較','基準','控制組','參照'],
          guide: { steps: ['定義你的實驗組和對照組','確保兩組除了你要測試的變量外其他條件一致','同時收集兩組的數據','比較差異並分析原因'],
            questions: [{l:'你的「基準」（不做改變）是什麼狀態？',p:'定義對照組'},{l:'你要改變的只有一個變量嗎？',p:'確保公平比較'},{l:'兩組之間有什麼其他差異可能影響結果？',p:'找出混淆因子'}]}}
      ]}
    ]
  },
  {
    category: 'communication', categoryName: '有效溝通', categoryNameEn: 'Effective Communication',
    categoryDesc: '清晰精準地傳達想法，讓訊息被正確理解和接受',
    subcategories: [
      { name: '語言溝通', habits: [
        { id: 'audience', name: '受眾分析', nameEn: 'Audience Analysis', desc: '根據聽眾的背景和需求調整溝通方式', keywords: ['受眾','對象','聽眾','給誰看','讀者','客戶','老闆','同事'],
          guide: { steps: ['確認你的受眾是誰','了解他們的知識水平和關注點','用他們能理解的語言和框架溝通','預測他們可能的反應和疑問'],
            questions: [{l:'你的溝通對象是誰？',p:'老闆、客戶、同事、公眾？'},{l:'他們最在意什麼？什麼會引起他們的注意？',p:'站在對方角度思考'},{l:'他們的知識背景是什麼？需要解釋專業術語嗎？',p:'調整語言的深度'}]}},
        { id: 'connotation', name: '意涵與語調', nameEn: 'Connotation & Tone', desc: '理解和運用詞語的隱含意義和情感色彩', keywords: ['語調','用詞','感覺','意思','暗示','語氣','口吻'],
          guide: { steps: ['意識到詞語除了字面意義還有隱含意義','選擇符合你意圖的語調和用詞','考慮文化脈絡對語調的影響','請別人閱讀並回饋他們的感受'],
            questions: [{l:'你想傳達什麼樣的語氣？',p:'正式/輕鬆/緊急/鼓勵/警告？'},{l:'你的用詞會不會被誤解？',p:'同一個詞在不同脈絡下意義不同'},{l:'對方讀完會有什麼感受？',p:'模擬對方的情緒反應'}]}},
        { id: 'structure', name: '內容構成', nameEn: 'Content Structure', desc: '有效組織論點和資訊的呈現順序', keywords: ['結構','組織','架構','順序','邏輯','鋪排','大綱'],
          guide: { steps: ['先確定你要傳達的核心訊息','設計論點的邏輯順序','使用清晰的結構（總分總、問題→解法→行動）','確保每個段落只談一個重點'],
            questions: [{l:'你最核心的一句話是什麼？',p:'如果對方只記得一件事...'},{l:'你的論點排列順序合理嗎？',p:'最重要的先說？還是先鋪墊？'},{l:'有沒有多餘的內容可以刪掉？',p:'少即是多'}]}},
        { id: 'precision', name: '細緻表達', nameEn: 'Precision', desc: '使用精確的語言避免模糊和歧義', keywords: ['精確','具體','明確','清楚','不含糊','精準'],
          guide: { steps: ['把模糊的詞彙替換為具體的描述','用數字取代「很多」「一些」等形容','確認每個句子只有一種理解方式','請別人重述你的意思來檢驗清晰度'],
            questions: [{l:'你的描述中有哪些模糊的詞？',p:'「很多」「盡快」「大約」→ 換成具體數字'},{l:'對方有可能用不同方式理解你的話嗎？',p:'檢查是否有歧義'},{l:'你能用一個具體案例來說明你的意思嗎？',p:'案例比抽象說明更清楚'}]}},
        { id: 'conciseness', name: '簡潔明瞭', nameEn: 'Conciseness', desc: '用最少的文字傳達最完整的意義', keywords: ['簡潔','精簡','簡短','太長','摘要','重點'],
          guide: { steps: ['先寫完整版，再刪除不必要的部分','每個句子問：刪掉後意思還完整嗎？','用主動語態取代被動語態','一個段落只談一個重點'],
            questions: [{l:'你能用三句話說完整件事嗎？',p:'練習精簡表達'},{l:'有哪些內容是「nice to have」但非必要的？',p:'刪掉它們'},{l:'你的讀者有多少時間看這份內容？',p:'根據對方的時間預算調整長度'}]}},
        { id: 'professionalism', name: '專業精神', nameEn: 'Professionalism', desc: '以專業的格式和態度進行溝通', keywords: ['專業','正式','格式','規範','標準','品質'],
          guide: { steps: ['使用適當的格式和排版','注意語法、標點和錯字','保持客觀和尊重的態度','交付前做最後一次檢查'],
            questions: [{l:'這份內容的格式是否專業？',p:'排版、字型、標題結構...'},{l:'有沒有錯字、語法錯誤或不一致的地方？',p:'交出去之前再看一遍'},{l:'如果這份內容被公開，你會感到自豪嗎？',p:'用最高標準要求自己'}]}}
      ]},
      { name: '非語言溝通', habits: [
        { id: 'comm_design', name: '溝通設計', nameEn: 'Communication Design', desc: '運用視覺和認知原則設計有效的簡報與文件', keywords: ['簡報','設計','排版','視覺','介面','呈現方式'],
          guide: { steps: ['確定視覺設計要支持的核心訊息','運用對比、對齊、重複、親近原則','減少視覺噪音，突出重點','測試：別人能在3秒內看到重點嗎？'],
            questions: [{l:'你想讓觀眾第一眼看到什麼？',p:'設計視覺層次'},{l:'有沒有多餘的視覺元素可以移除？',p:'Less is more'},{l:'色彩和字型的選擇是否一致？',p:'保持視覺一致性'}]}},
        { id: 'expression', name: '表達方式', nameEn: 'Expression', desc: '運用肢體語言、面部表情來增強溝通效果', keywords: ['表達','肢體','表情','演說','演講','報告'],
          guide: { steps: ['準備你的核心訊息和支持論點','練習語速、停頓和強調','注意肢體語言和眼神接觸','錄影回看自己的表現並改進'],
            questions: [{l:'你最想讓聽眾記住什麼？',p:'一個核心訊息'},{l:'你的表達方式是否匹配內容的情緒？',p:'嚴肅的內容不宜輕鬆表達，反之亦然'},{l:'你有沒有練習過你的表達？',p:'練習 → 回饋 → 改進'}]}},
        { id: 'medium', name: '媒介選擇', nameEn: 'Medium Selection', desc: '選擇最適合的溝通管道和媒介形式', keywords: ['管道','方式','媒介','工具','平台','用什麼'],
          guide: { steps: ['考慮訊息的性質（緊急？敏感？複雜？）','評估各種媒介的優缺點','選擇最適合受眾習慣的管道','考慮是否需要留下書面紀錄'],
            questions: [{l:'這個訊息應該用什麼方式傳達？',p:'面對面/電話/郵件/訊息/文件？'},{l:'受眾習慣用什麼管道接收資訊？',p:'配合對方的習慣'},{l:'需要留下書面紀錄嗎？',p:'重要決策最好有書面記錄'}]}},
        { id: 'multimedia', name: '多媒體應用', nameEn: 'Multimedia', desc: '整合文字、圖像、影音等多種媒體形式', keywords: ['多媒體','影片','圖片','影音','動畫','互動'],
          guide: { steps: ['判斷哪些內容適合用文字、圖像或影音','確保不同媒體形式互相補充而非重複','保持一致的風格和品質','測試多媒體在不同裝置上的呈現'],
            questions: [{l:'這個內容用什麼媒體形式最有效？',p:'文字、圖片、影片、動畫？'},{l:'圖片/影片是否真的增加了理解？',p:'不是為了好看，而是為了清楚'},{l:'不同媒體形式之間是否一致？',p:'風格和品質要統一'}]}}
      ]}
    ]
  },
  {
    category: 'interaction', categoryName: '有效互動', categoryNameEn: 'Effective Interaction',
    categoryDesc: '在複雜的人際和系統環境中有效地協作、談判和領導',
    subcategories: [
      { name: '解決道德問題', habits: [
        { id: 'moral_courage', name: '道德勇氣', nameEn: 'Moral Courage', desc: '在面對壓力時仍堅持做正確的事', keywords: ['道德','正確','勇氣','堅持','對的事','價值觀','良知'],
          guide: { steps: ['辨識這個情境中「對的事」是什麼','評估堅持正確做法的風險和代價','準備支持你立場的論據','找到盟友和支持系統'],
            questions: [{l:'在這個情境中，你內心認為「對的事」是什麼？',p:'不考慮壓力和後果'},{l:'做對的事需要付出什麼代價？',p:'風險、關係、利益...'},{l:'不做對的事，長期後果是什麼？',p:'短期容易但長期可能更痛苦'}]}},
        { id: 'ethical_consideration', name: '道德考量', nameEn: 'Ethical Consideration', desc: '在決策中考慮倫理層面的影響和責任', keywords: ['倫理','道德','責任','公平','正義','對錯'],
          guide: { steps: ['辨識這個決策中的倫理面向','考慮對所有利害關係人的影響','用不同的倫理框架來檢視','確保決策經得起公開檢驗'],
            questions: [{l:'這個決策有沒有倫理上的爭議？',p:'有沒有人會因此受到不公平對待？'},{l:'如果你的決策過程被完全公開，你會怎麼看？',p:'新聞標題測試'},{l:'你有沒有考慮到所有受影響的人？',p:'包括弱勢和無法為自己發聲的人'}]}},
        { id: 'moral_judgment', name: '道德判斷', nameEn: 'Moral Judgment', desc: '在複雜情境中做出符合倫理標準的判斷', keywords: ['判斷','抉擇','兩難','衝突','價值','底線'],
          guide: { steps: ['辨識衝突的價值觀和原則','用多種倫理框架分析（義務論、效益論、美德倫理）','在衝突的價值中找到優先順序','做出判斷並準備承擔責任'],
            questions: [{l:'這個情境中有哪些價值觀在衝突？',p:'例如：效率 vs 公平、個人 vs 集體'},{l:'如果你是受影響最大的那個人，你會希望怎麼決定？',p:'換位思考'},{l:'你的底線在哪裡？什麼是絕對不能妥協的？',p:'確立原則'}]}}
      ]},
      { name: '複雜系統分析', habits: [
        { id: 'system_dynamics', name: '系統動力', nameEn: 'System Dynamics', desc: '理解系統中的回饋迴路、延遲效應和非線性行為', keywords: ['系統','動態','循環','回饋','連鎖','環環相扣'],
          guide: { steps: ['辨識系統中的正回饋迴路（加速）和負回饋迴路（穩定）','找出系統中的延遲效應','預測非線性的轉折點','設計介入方案來改變系統行為'],
            questions: [{l:'這個系統中有什麼「越多越多」的正回饋循環？',p:'例如：口碑 → 用戶 → 更多口碑'},{l:'有什麼時間延遲會讓你誤判效果？',p:'做了改變但效果還沒出現'},{l:'系統有沒有可能突然「翻轉」？',p:'量變到質變的轉折點'}]}},
        { id: 'system_mapping', name: '系統描繪', nameEn: 'System Mapping', desc: '將系統中的變量和關係視覺化，找出最佳介入點', keywords: ['系統','地圖','描繪','關係圖','全局','視覺化'],
          guide: { steps: ['列出系統中所有關鍵的元素/變量','畫出它們之間的關係（正相關/負相關）','辨識關鍵節點和槓桿點','選擇最有效的介入位置'],
            questions: [{l:'這個系統中有哪些關鍵元素？',p:'列出所有重要的角色、資源、流程'},{l:'它們之間是怎麼互相影響的？',p:'A增加 → B增加 / A增加 → B減少'},{l:'如果只能在一個點介入，你會選哪裡？',p:'找到槓桿點'}]}},
        { id: 'multilevel', name: '多層次分析', nameEn: 'Multi-level Analysis', desc: '從不同層級分析問題', keywords: ['層次','層級','多面','角度','維度','上下','宏觀','微觀'],
          guide: { steps: ['定義問題涉及的不同層級','在每個層級分別分析問題','觀察不同層級之間的交互作用','找出跨層級的解決方案'],
            questions: [{l:'這個問題在個人層面是什麼樣的？團隊層面呢？組織層面呢？',p:'逐一分析不同層級'},{l:'不同層級的人對這個問題的看法是否不同？',p:'立場不同，感受不同'},{l:'解決方案需要在哪些層級同時介入？',p:'可能需要多層級配合'}]}},
        { id: 'emergence', name: '湧現特性', nameEn: 'Emergence', desc: '認識整體大於部分之和的現象', keywords: ['湧現','整體','突現','意想不到','浮現','出現'],
          guide: { steps: ['觀察系統整體是否展現出部分所沒有的特性','理解這些湧現特性是如何產生的','避免只看部分而忽略整體','預測系統可能產生的意外特性'],
            questions: [{l:'這個系統有什麼「整體大於部分之和」的特性？',p:'例如：團隊文化、市場泡沫、社群效應'},{l:'有沒有什麼意想不到的行為或結果？',p:'系統的意外副作用'},{l:'如果改變一個部分，整體會如何變化？',p:'不是簡單的加減，可能有非線性效果'}]}},
        { id: 'complex_causality', name: '複雜因果', nameEn: 'Complex Causality', desc: '識別多重原因如何交互作用產生複雜結果', keywords: ['複雜','因果','交互','多重','連動','影響','牽連'],
          guide: { steps: ['列出所有可能的原因','分析原因之間的交互作用','辨識哪些原因組合會產生特定結果','避免過度簡化為單一原因'],
            questions: [{l:'這個結果是由幾個原因共同造成的？',p:'通常不只一個原因'},{l:'這些原因之間有互相影響嗎？',p:'A + B 一起出現時效果更大？'},{l:'移除其中一個原因，結果會改變嗎？',p:'找出必要條件 vs 充分條件'}]}},
        { id: 'network_analysis', name: '網絡分析', nameEn: 'Network Analysis', desc: '分析網絡中的節點和連結，辨識關鍵影響路徑', keywords: ['網絡','關係','連結','節點','影響力','中心','傳播'],
          guide: { steps: ['畫出人際/資訊/資源的網絡圖','辨識中心節點和橋接節點','分析資訊或影響力的傳播路徑','找到最有效的網絡介入點'],
            questions: [{l:'在這個網絡中，誰的影響力最大？',p:'找出關鍵人物'},{l:'資訊或影響力是怎麼在網絡中傳播的？',p:'誰影響誰？路徑是什麼？'},{l:'有沒有被孤立或被忽略的節點？',p:'不在網絡中的人可能是盲點'}]}}
      ]},
      { name: '談判和說服', habits: [
        { id: 'assertiveness', name: '自信表達', nameEn: 'Assertiveness', desc: '清楚堅定地表達立場，同時尊重他人', keywords: ['自信','表達','立場','堅定','勇敢','發言'],
          guide: { steps: ['先釐清你自己的立場和底線','用「我」開頭表達感受和需求','保持尊重但不退讓核心立場','練習在安全環境中表達'],
            questions: [{l:'你的核心立場是什麼？',p:'用一句話清楚表達'},{l:'你害怕表達的原因是什麼？',p:'找出恐懼的來源'},{l:'你能用什麼方式表達既堅定又尊重？',p:'「我認為...因為...」'}]}},
        { id: 'negotiation', name: '談判技巧', nameEn: 'Negotiation', desc: '運用結構化方法進行協商，尋求雙贏', keywords: ['談判','協商','交涉','條件','讓步','雙贏','合作'],
          guide: { steps: ['準備你的BATNA（最佳替代方案）','了解對方的利益和需求','區分「立場」和「利益」','創造雙贏的選項'],
            questions: [{l:'如果談判破裂，你的替代方案是什麼？',p:'你的底牌'},{l:'對方真正在意的是什麼？（不是他說的立場，而是背後的利益）',p:'利益 vs 立場'},{l:'有沒有雙方都能接受的創意方案？',p:'把餅做大而不是分餅'}]}},
        { id: 'nudge', name: '助推', nameEn: 'Nudging', desc: '透過設計選擇架構來引導行為', keywords: ['引導','推動','影響','行為','改變','激勵','設計'],
          guide: { steps: ['理解你想引導的行為','設計選擇架構讓好的選擇更容易','利用默認值、社會認同等原則','測試效果並持續優化'],
            questions: [{l:'你想引導什麼行為？',p:'具體描述期望的行為改變'},{l:'如何讓「好的選擇」變成「容易的選擇」？',p:'降低阻力、增加動力'},{l:'什麼默認設定會引導人們做出更好的選擇？',p:'預設選項的力量很大'}]}},
        { id: 'carrot_stick', name: '胡蘿蔔和棒子', nameEn: 'Carrot and Stick', desc: '靈活運用獎勵和懲罰來塑造行為', keywords: ['獎勵','懲罰','激勵','誘因','後果','措施'],
          guide: { steps: ['定義你想強化或減少的行為','設計有效的獎勵（胡蘿蔔）和後果（棒子）','確保獎懲及時且與行為直接關聯','注意避免獎勵產生反效果'],
            questions: [{l:'什麼獎勵能有效激勵目標行為？',p:'不一定是金錢，認可和成長也是'},{l:'什麼後果能有效阻止不良行為？',p:'懲罰要合理且一致'},{l:'獎勵會不會反而降低內在動機？',p:'小心過度獎勵的反效果'}]}},
        { id: 'persuasion', name: '說服力', nameEn: 'Persuasion', desc: '運用邏輯、情感和信任來說服他人', keywords: ['說服','影響','游說','主張','提案','報告','爭取'],
          guide: { steps: ['建立你的可信度（Ethos）','用邏輯和證據支撐論點（Logos）','連結對方的情感和價值觀（Pathos）','提出明確的行動呼籲'],
            questions: [{l:'為什麼對方應該聽你的？',p:'你的可信度來源是什麼？'},{l:'你最強的論點和證據是什麼？',p:'準備三個最有力的理由'},{l:'這件事跟對方的利益有什麼關係？',p:'連結到他們在意的事情'}]}}
      ]},
      { name: '與他人合作', habits: [
        { id: 'accountability', name: '責任感', nameEn: 'Accountability', desc: '對自己的行動和承諾負責', keywords: ['責任','承擔','負責','當責','義務','承諾'],
          guide: { steps: ['明確定義你的責任範圍','對承諾設定具體的時間和標準','主動報告進度和問題','從錯誤中學習而非推卸'],
            questions: [{l:'你在這件事中的責任是什麼？',p:'明確你負責的部分'},{l:'你有沒有清楚地承諾了什麼？對誰？',p:'列出你的承諾清單'},{l:'出了問題時，你的第一反應是什麼？',p:'承擔 vs 推卸'}]}},
        { id: 'leadership', name: '領導原則', nameEn: 'Leadership Principles', desc: '運用適當的領導風格來引領團隊', keywords: ['領導','帶領','團隊','管理','主管','領袖','帶人'],
          guide: { steps: ['評估團隊的成熟度和需求','選擇適當的領導風格（指導/教練/支持/授權）','設定清晰的方向和期望','為團隊排除障礙和提供支持'],
            questions: [{l:'你的團隊現在需要什麼類型的領導？',p:'指導？支持？放手？'},{l:'團隊成員清楚知道方向和期望嗎？',p:'對齊目標'},{l:'你作為領導者最大的盲點是什麼？',p:'問團隊成員的回饋'}]}},
        { id: 'power_dynamics', name: '權力動態', nameEn: 'Power Dynamics', desc: '理解並運用組織中的權力結構和影響力', keywords: ['權力','政治','影響力','組織','職場','上下級','層級'],
          guide: { steps: ['畫出組織中的權力結構和影響力網絡','辨識正式權力和非正式影響力','了解決策是如何真正做出的','策略性地建立關係和影響力'],
            questions: [{l:'在這個組織中，誰真正有決策權？',p:'不一定是職稱最高的人'},{l:'非正式的影響力網絡長什麼樣？',p:'誰的意見會被聽進去？'},{l:'你需要誰的支持才能推動這件事？',p:'列出關鍵支持者'}]}},
        { id: 'strategy', name: '制訂策略', nameEn: 'Strategy Formulation', desc: '制定行動策略來達成目標', keywords: ['策略','戰略','規劃','計畫','方針','路線','佈局'],
          guide: { steps: ['定義清晰的戰略目標','分析外部環境和內部資源','制定具體的行動計劃和里程碑','建立監測和調整機制'],
            questions: [{l:'你的戰略目標是什麼？',p:'用一句話說清楚'},{l:'你的優勢和劣勢分別是什麼？',p:'內部資源盤點'},{l:'第一步你會做什麼？',p:'從戰略到執行的第一個行動'}]}},
        { id: 'individual_diff', name: '個體差異', nameEn: 'Individual Differences', desc: '認識並善用每個人不同的技能和動機', keywords: ['個人','差異','特質','能力','風格','多元','不同'],
          guide: { steps: ['觀察每個人的強項、弱項和工作風格','理解不同人的動機和需求','根據個人特質分配角色和任務','創造讓每個人都能發揮的環境'],
            questions: [{l:'團隊中每個人的強項是什麼？',p:'不只是技能，還有思考方式和性格'},{l:'什麼激勵不同的人？',p:'有人要認可、有人要挑戰、有人要穩定'},{l:'有沒有被忽視的才能？',p:'人們的能力往往超出他們的職位描述'}]}},
        { id: 'adaptability', name: '適性調整', nameEn: 'Adaptability', desc: '根據情境靈活調整方式和策略', keywords: ['調整','適應','靈活','彈性','變通','因應'],
          guide: { steps: ['監測環境的變化信號','評估現有策略是否仍然有效','在必要時果斷調整方向','保持核心目標不變，但手段靈活'],
            questions: [{l:'環境有什麼變化是你需要因應的？',p:'新資訊、新情況、新需求'},{l:'你現在的做法還有效嗎？',p:'定期檢視'},{l:'如果要調整，你願意放棄什麼？',p:'靈活意味著有所取捨'}]}},
        { id: 'self_awareness', name: '自我覺察', nameEn: 'Self-awareness', desc: '認識自己的優缺點、情緒模式和盲點（密涅瓦最後教的一課）', keywords: ['自己','自我','認識','反省','覺察','了解自己','盲點'],
          guide: { steps: ['定期反思自己的行為和決策模式','收集他人對你的回饋','辨識你的情緒觸發點和盲點','接受不完美，持續成長'],
            questions: [{l:'你最常在什麼情況下做出不好的決策？',p:'辨識你的弱點情境'},{l:'別人對你最常見的回饋是什麼？',p:'你的盲點可能藏在這裡'},{l:'你在壓力下會變成什麼樣？',p:'認識壓力下的自己'}]}},
        { id: 'eq', name: '情商', nameEn: 'Emotional Intelligence', desc: '理解和管理自己與他人的情緒', keywords: ['情緒','感受','情商','同理','理解','人際','關係','相處'],
          guide: { steps: ['覺察自己當下的情緒','理解情緒背後的需求和信號','同理他人的情緒和處境','用建設性的方式表達和管理情緒'],
            questions: [{l:'你現在的情緒是什麼？這個情緒在告訴你什麼？',p:'情緒是信號，不是噪音'},{l:'對方現在可能是什麼感受？',p:'練習同理心'},{l:'你通常怎麼處理負面情緒？有更好的方式嗎？',p:'覺察你的情緒管理模式'}]}}
      ]}
    ]
  }
];

// ===== STATE =====
let currentStep = 0;
const totalSteps = 5;
let selectedHabits = new Set();

// ===== NAVIGATION =====
function showSection(id) {
  document.querySelectorAll('main > section').forEach(s => s.style.display = 'none');
  const t = document.getElementById(id);
  if (t) { t.style.display = 'block'; window.scrollTo({top:0,behavior:'smooth'}); }
  if (id === 'reference') renderReference();
}

function startAnalysis() { showSection('app'); currentStep = 0; updateStep(); }

function goToStep(step) { if (step <= currentStep + 1) { currentStep = step; updateStep(); } }

function nextStep() {
  if (currentStep === 0 && !document.getElementById('problemInput').value.trim()) {
    const el = document.getElementById('problemInput');
    el.focus(); el.style.borderColor = 'var(--danger)';
    setTimeout(() => el.style.borderColor = '', 2000);
    return;
  }
  if (currentStep < totalSteps - 1) { currentStep++; updateStep(); window.scrollTo({top:0,behavior:'smooth'}); }
}

function prevStep() { if (currentStep > 0) { currentStep--; updateStep(); window.scrollTo({top:0,behavior:'smooth'}); } }

function updateStep() {
  document.querySelectorAll('.step-content').forEach((el,i) => el.classList.toggle('active', i === currentStep));
  document.querySelectorAll('.stepper-steps .step').forEach((el,i) => {
    el.classList.remove('active','completed');
    if (i === currentStep) el.classList.add('active');
    if (i < currentStep) el.classList.add('completed');
  });
  const p = document.getElementById('stepperProgress');
  if (p) p.style.width = (currentStep / (totalSteps - 1) * 100) + '%';
  if (currentStep === 2) generateRecommendations();
  if (currentStep === 3) generateSpec();
  if (currentStep === 4) generatePrompt();
}

// ===== RECOMMENDATION ENGINE =====
function generateRecommendations() {
  const texts = ['problemInput','frameSituation','frameGoal','frameObstacles','frameConstraints','problemContext'].map(id => {
    const el = document.getElementById(id); return el ? el.value : '';
  });
  const typeEl = document.getElementById('problemType');
  const fullText = texts.join(' ') + ' ' + (typeEl ? typeEl.value : '');

  const scored = [];
  HABITS_DATA.forEach(cat => cat.subcategories.forEach(sub => sub.habits.forEach(h => {
    let score = 0;
    h.keywords.forEach(kw => { if (fullText.includes(kw)) score += 2; });
    if (score > 0) scored.push({...h, score, category: cat.categoryName, subcategory: sub.name});
  })));
  scored.sort((a,b) => b.score - a.score);

  if (!scored.find(h => h.id === 'right_question')) {
    scored.unshift({...HABITS_DATA[0].subcategories[0].habits[0], score:100, category:'批判性思考', subcategory:'分析問題'});
  }

  const recommended = scored.slice(0, 8);
  selectedHabits.clear();
  recommended.forEach(h => selectedHabits.add(h.id));
  if (recommended.length < 4) {
    ['right_question','decompose','utility','multilevel'].forEach(id => {
      if (!selectedHabits.has(id)) { selectedHabits.add(id); const h = findHabitById(id); if (h) recommended.push(h); }
    });
  }
  renderHabitsUI(recommended);
}

function findHabitById(id) {
  for (const cat of HABITS_DATA) for (const sub of cat.subcategories) for (const h of sub.habits)
    if (h.id === id) return {...h, category: cat.categoryName, subcategory: sub.name};
  return null;
}

function toggleHabit(id, e) {
  if (e) e.stopPropagation();
  selectedHabits.has(id) ? selectedHabits.delete(id) : selectedHabits.add(id);
  document.querySelectorAll(`.habit-chip[data-id="${id}"]`).forEach(el => el.classList.toggle('selected', selectedHabits.has(id)));
}

function renderHabitsUI(recommended) {
  const rec = document.getElementById('habitsRecommended');
  let rh = '<h3>系統推薦（根據問題自動匹配，點擊名稱可開啟工具）</h3><div class="habit-chips">';
  recommended.forEach(h => {
    rh += `<button class="habit-chip selected" data-id="${h.id}">
      <span class="chip-check" onclick="toggleHabit('${h.id}',event)">&#10003;</span>
      <span onclick="openModal('${h.id}')">${h.name}</span>
    </button>`;
  });
  rh += '</div>';
  rec.innerHTML = rh;

  const all = document.getElementById('habitsAll');
  let ah = '';
  HABITS_DATA.forEach(cat => {
    ah += `<div class="habit-category cat-${cat.category}"><div class="habit-category-header"><div class="habit-category-icon">${cat.categoryName[0]}</div><h4>${cat.categoryName}</h4></div>`;
    cat.subcategories.forEach(sub => {
      ah += `<div class="habit-subcategory"><h5>${sub.name}</h5><div class="habit-chips">`;
      sub.habits.forEach(h => {
        const sel = selectedHabits.has(h.id);
        ah += `<button class="habit-chip${sel?' selected':''}" data-id="${h.id}" title="${h.desc}">
          <span class="chip-check" onclick="toggleHabit('${h.id}',event)">&#10003;</span>
          <span onclick="openModal('${h.id}')">${h.name}</span>
        </button>`;
      });
      ah += '</div></div>';
    });
    ah += '</div>';
  });
  all.innerHTML = ah;
}

// ===== MODAL (Habit Tool) =====
function openModal(habitId) {
  const h = findHabitById(habitId);
  if (!h || !h.guide) return;

  const catColors = {critical:'var(--info)',creative:'var(--success)',communication:'var(--warning)',interaction:'var(--primary)'};
  let catKey = 'critical';
  for (const cat of HABITS_DATA) { for (const sub of cat.subcategories) for (const hab of sub.habits) if (hab.id === habitId) { catKey = cat.category; break; } }

  const header = document.getElementById('modalHeader');
  header.innerHTML = `<span class="modal-badge" style="background:${catColors[catKey]}20;color:${catColors[catKey]}">${h.category}</span>
    <h2>${h.name}</h2><div class="modal-name-en">${h.nameEn}</div><p class="modal-desc">${h.desc}</p>`;

  const body = document.getElementById('modalBody');
  let bh = `<div class="modal-section"><h3>使用步驟</h3><ol class="modal-steps">`;
  h.guide.steps.forEach(s => bh += `<li>${s}</li>`);
  bh += '</ol></div>';

  bh += '<div class="modal-section"><h3>引導問題</h3>';
  h.guide.questions.forEach((q, i) => {
    bh += `<div class="modal-question"><label>${q.l}</label><textarea class="input-textarea" id="mq_${habitId}_${i}" rows="2" placeholder="${q.p}"></textarea></div>`;
  });
  bh += '</div>';
  bh += `<div class="modal-section"><div class="modal-output" id="modalOutput"></div></div>`;
  body.innerHTML = bh;

  const footer = document.getElementById('modalFooter');
  footer.innerHTML = `<button class="btn btn-primary" onclick="generateModalPrompt('${habitId}')">生成此思考習慣的 AI 提示詞</button>
    <button class="btn btn-outline btn-sm" onclick="copyModalPrompt()">複製提示詞</button>`;

  document.getElementById('habitModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('habitModal').classList.remove('open');
  document.body.style.overflow = '';
}

function generateModalPrompt(habitId) {
  const h = findHabitById(habitId);
  if (!h) return;

  const answers = h.guide.questions.map((q, i) => {
    const el = document.getElementById(`mq_${habitId}_${i}`);
    return {question: q.l, answer: el ? el.value.trim() : ''};
  });

  let answersText = '';
  answers.forEach(a => {
    if (a.answer) answersText += `- ${a.question}\n  ${a.answer}\n`;
  });

  const prompt = `你是一位精通密涅瓦大學決策科學的思考教練。請使用「${h.name}」（${h.nameEn}）這個思考習慣來分析以下問題。

## 思考習慣說明
**${h.name}**：${h.desc}

## 使用者的回答
${answersText || '（使用者未提供具體回答，請引導他們思考）'}

## 分析要求
請按照以下步驟進行分析：

1. **理解問題**：根據使用者的回答，先釐清問題的核心
2. **應用「${h.name}」**：
${h.guide.steps.map((s,i) => `   ${i+1}. ${s}`).join('\n')}
3. **深度洞察**：透過這個思考習慣的視角，提出使用者可能沒想到的觀點
4. **具體建議**：給出 3-5 個可立即執行的行動建議
5. **延伸思考**：建議搭配哪些其他思考習慣可以讓分析更完整

請用清晰的結構化格式回答，語言要具體、可操作。`;

  const output = document.getElementById('modalOutput');
  output.textContent = prompt;
  output.classList.add('visible');
  output.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function copyModalPrompt() {
  const output = document.getElementById('modalOutput');
  if (output && output.textContent) copyToClipboard(output.textContent);
}

// Close modal on overlay click or Escape
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== SPEC GENERATION =====
function generateSpec() {
  const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const problem = v('problemInput'), situation = v('frameSituation'), goal = v('frameGoal');
  const obstacles = v('frameObstacles'), constraints = v('frameConstraints');
  const pType = v('problemType'), pUrgency = v('problemUrgency'), pContext = v('problemContext');
  const who = v('situationWho'), impact = v('situationImpact');
  const metric = v('goalMetric'), timeline = v('goalTimeline');
  const tried = v('obstaclesTried'), biggest = v('obstaclesBiggest');
  const budget = v('constraintBudget'), time = v('constraintTime'), other = v('constraintOther');
  const validated = document.getElementById('validationCheck').checked;
  const habits = getSelectedHabitsInfo();

  const typeMap = {decision:'決策選擇',conflict:'衝突協調',strategy:'策略規劃',execution:'執行卡關',innovation:'創新探索',optimization:'效率優化',communication:'溝通說服',personal:'個人成長'};
  const urgMap = {urgent:'急迫（一週內）',soon:'短期（一個月內）',medium:'中期（一季內）',long:'長期（規劃性質）'};

  let spec = `============================================
            問 題 規 格 書
============================================

【問題描述】
${problem || '（未填寫）'}
${pType ? '\n問題類型：' + (typeMap[pType]||pType) : ''}${pUrgency ? '  |  緊急程度：' + (urgMap[pUrgency]||pUrgency) : ''}
${pContext ? '\n補充背景：' + pContext : ''}

--------------------------------------------
問對問題框架
--------------------------------------------

[現況] ${situation || '（未填寫）'}${who ? '\n  > 受影響者：' + who : ''}${impact ? '\n  > 持續時間/影響：' + impact : ''}

[目標] ${goal || '（未填寫）'}${metric ? '\n  > 成功衡量標準：' + metric : ''}${timeline ? '\n  > 時間框架：' + timeline : ''}

[障礙（可改變的）] ${obstacles || '（未填寫）'}${tried ? '\n  > 已嘗試的解法：' + tried : ''}${biggest ? '\n  > 最大單一障礙：' + biggest : ''}

[限制（不可改變的）] ${constraints || '（未填寫）'}${budget ? '\n  > 預算/資源：' + budget : ''}${time ? '\n  > 時間限制：' + time : ''}${other ? '\n  > 其他條件：' + other : ''}

[框架驗證] ${validated ? '通過 - 移除障礙後在限制內可達成目標' : '未驗證'}

--------------------------------------------
選用的思考習慣（${habits.length} 個）
--------------------------------------------
`;
  habits.forEach((h,i) => spec += `${i+1}. ${h.name}（${h.nameEn}）\n   ${h.desc}\n\n`);
  spec += `--------------------------------------------
成功標準
--------------------------------------------
> 在限制條件內，障礙被有效移除
> 目標可被明確衡量達成與否
> 分析過程可被檢驗、複製、優化
============================================`;

  document.getElementById('specOutput').textContent = spec;
}

function getSelectedHabitsInfo() {
  const r = [];
  HABITS_DATA.forEach(cat => cat.subcategories.forEach(sub => sub.habits.forEach(h => {
    if (selectedHabits.has(h.id)) r.push({...h, category: cat.categoryName});
  })));
  return r;
}

// ===== AI PROMPT GENERATION =====
function generatePrompt() {
  const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const problem = v('problemInput'), situation = v('frameSituation'), goal = v('frameGoal');
  const obstacles = v('frameObstacles'), constraints = v('frameConstraints'), pContext = v('problemContext');
  const who = v('situationWho'), impact = v('situationImpact');
  const metric = v('goalMetric'), timeline = v('goalTimeline');
  const tried = v('obstaclesTried'), biggest = v('obstaclesBiggest');
  const budget = v('constraintBudget'), time = v('constraintTime'), other = v('constraintOther');
  const habits = getSelectedHabitsInfo();

  let hs = '';
  habits.forEach((h,i) => {
    hs += `${i+1}. **${h.name}**（${h.nameEn}）：${h.desc}\n`;
    if (h.guide) hs += `   使用步驟：${h.guide.steps.join(' → ')}\n`;
  });

  const prompt = `你是一位精通密涅瓦大學（Minerva University）決策科學的思考教練。你熟悉密涅瓦大學從過去200年人類決策智慧中萃取的76個底層思考習慣，涵蓋批判性思考、創意思考、有效溝通、有效互動四大領域。

請根據以下「問題規格書」，運用指定的思考習慣來深度分析和拆解問題。

---

## 問題描述
${problem || '（使用者未提供詳細描述）'}
${pContext ? '\n補充背景：' + pContext : ''}

## 問對問題框架

**現況（Current Situation）：**
${situation || '（未填寫）'}${who ? '\n受影響者：' + who : ''}${impact ? '\n持續時間與影響：' + impact : ''}

**目標（Goal）：**
${goal || '（未填寫）'}${metric ? '\n成功衡量標準：' + metric : ''}${timeline ? '\n期望時間框架：' + timeline : ''}

**障礙（Obstacles - 可改變的）：**
${obstacles || '（未填寫）'}${tried ? '\n已嘗試的解法：' + tried : ''}${biggest ? '\n最大障礙：' + biggest : ''}

**限制（Constraints - 不可改變的）：**
${constraints || '（未填寫）'}${budget ? '\n預算/資源限制：' + budget : ''}${time ? '\n時間限制：' + time : ''}${other ? '\n其他限制：' + other : ''}

## 指定使用的思考習慣（${habits.length} 個）
${hs || '（未選擇，請自動推薦適合的思考習慣）'}

---

## 請按照以下步驟進行深度分析：

### 第一步：驗證問題框架
- 現況描述是否足夠清楚？有沒有遺漏的重要事實？
- 目標是否明確可衡量？是否SMART（具體、可衡量、可達成、相關、有時限）？
- 障礙和限制的區分是否正確？（有些「限制」可能其實是「障礙」）
- 移除障礙、尊重限制後，是否確實能達成目標？
- 如有建議修改，請直接提出改進版的框架。

### 第二步：逐一應用思考習慣（這是核心分析）
針對每個指定的思考習慣：
1. 說明為什麼這個思考習慣適用於這個問題
2. 透過該思考習慣的視角進行深度分析
3. 提出這個角度下的具體洞察
4. 列出引發的新問題或需要進一步探索的方向

### 第三步：交叉分析與衝突檢測
- 不同思考習慣的分析結果是否有衝突或張力？
- 哪些洞察互相加強？哪些互相矛盾？
- 綜合所有角度，最關鍵的 2-3 個發現是什麼？

### 第四步：提出行動方案
基於以上分析，提出 3-5 個具體行動建議：
- 標明優先順序（P0/P1/P2）
- 說明對應哪個障礙
- 預估執行難度（低/中/高）
- 第一步具體怎麼做

### 第五步：風險評估與盲點檢查
- 這個分析最大的假設是什麼？如果假設錯了會怎樣？
- 有沒有被忽略的利害關係人？
- 最大的風險是什麼？建議什麼防範措施？
- 什麼信號出現時，代表需要調整方向？

### 第六步：學習收穫
- 這次分析中，哪個思考習慣帶來了最意想不到的洞察？
- 使用者可以從這次分析中帶走什麼可複用的思考框架？

---

請用清晰的結構化格式回答，使用標題和要點。語言要具體、可操作，避免空泛的建議。每個建議都要能直接轉化為行動。`;

  document.getElementById('promptOutput').textContent = prompt;
}

// ===== COPY & EXPORT =====
function copyPrompt() { copyToClipboard(document.getElementById('promptOutput').textContent); }
function copySpec() { copyToClipboard(document.getElementById('specOutput').textContent); }

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(showToast).catch(() => {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast();
  });
}

function showToast() {
  const t = document.getElementById('copyToast');
  t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000);
}

function downloadPrompt() {
  const blob = new Blob([document.getElementById('promptOutput').textContent], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'minerva-prompt.txt'; a.click(); URL.revokeObjectURL(a.href);
}

// ===== RESET =====
function resetApp() {
  ['problemInput','frameSituation','frameGoal','frameObstacles','frameConstraints','problemContext',
   'situationWho','situationImpact','goalMetric','goalTimeline','obstaclesTried','obstaclesBiggest',
   'constraintBudget','constraintTime','constraintOther'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const sel = document.getElementById('problemType'); if (sel) sel.selectedIndex = 0;
  const urg = document.getElementById('problemUrgency'); if (urg) urg.selectedIndex = 0;
  document.getElementById('validationCheck').checked = false;
  selectedHabits.clear(); currentStep = 0; updateStep(); window.scrollTo({top:0,behavior:'smooth'});
}

// ===== REFERENCE (clickable habits) =====
function renderReference() {
  const container = document.getElementById('referenceCategories');
  if (container.children.length > 0) return;

  const icons = ['C','I','E','A'];
  let html = '';
  HABITS_DATA.forEach((cat, ci) => {
    let count = 0; cat.subcategories.forEach(s => count += s.habits.length);
    html += `<div class="ref-category ref-cat-${ci}">
      <div class="ref-category-header" onclick="this.parentElement.classList.toggle('open')">
        <div class="ref-category-icon">${icons[ci]}</div><h3>${cat.categoryName} ${cat.categoryNameEn}</h3>
        <span class="ref-count">${count} 個習慣</span></div><div class="ref-category-body">`;
    cat.subcategories.forEach(sub => {
      html += `<div class="ref-subcategory"><h4>${sub.name}</h4>`;
      sub.habits.forEach(h => {
        html += `<div class="ref-habit" onclick="openModal('${h.id}')">
          <span class="ref-habit-name">${h.name}</span>
          <span class="ref-habit-desc">${h.desc}</span>
          <span class="ref-habit-arrow">&#8594;</span></div>`;
      });
      html += '</div>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header-brand').addEventListener('click', () => showSection('welcome'));
});
