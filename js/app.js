// ===== MINERVA THINKING HABITS DATABASE =====
const HABITS_DATA = [
  {
    category: 'critical',
    categoryName: '批判性思考',
    categoryNameEn: 'Critical Thinking',
    categoryDesc: '系統性地分析和評估資訊，排除偏誤，做出理性判斷',
    subcategories: [
      {
        name: '分析問題',
        habits: [
          { id: 'right_question', name: '問對問題', nameEn: 'Asking the Right Question', desc: '找出現況、目標、障礙與限制，精準定義真正需要解決的問題', keywords: ['問題','目標','困難','挑戰','方向','定義','為什麼','怎麼','卡關','不知道'] },
          { id: 'decompose', name: '拆解問題', nameEn: 'Problem Decomposition', desc: '將複雜問題分解成可處理的小組成部分', keywords: ['複雜','分解','拆解','步驟','組成','部分','太大','龐大','頭緒'] },
          { id: 'variable_analysis', name: '變量分析', nameEn: 'Variable Analysis', desc: '辨識問題中的關鍵變量與參數，理解它們之間的關係', keywords: ['變量','因素','影響','變數','參數','關鍵','因果','原因'] },
          { id: 'game_theory', name: '賽局理論', nameEn: 'Game Theory', desc: '分析多方利害關係人的策略互動與最佳回應', keywords: ['競爭','對手','策略','博弈','利害','雙方','多方','賽局','競爭者'] }
        ]
      },
      {
        name: '分析決策',
        habits: [
          { id: 'understand_causes', name: '理解成因', nameEn: 'Understanding Causes', desc: '深入探究問題背後的根本原因，而非只看表面症狀', keywords: ['原因','為什麼','根本','成因','源頭','本質','深層','背後'] },
          { id: 'purpose', name: '目的分析', nameEn: 'Purpose Analysis', desc: '釐清決策的真正目的，確保行動與目標一致', keywords: ['目的','目標','為了','意義','價值','方向','初衷'] },
          { id: 'utility', name: '效用分析', nameEn: 'Utility Analysis', desc: '評估各選項的成本效益，考慮所有利害關係人', keywords: ['效益','成本','價值','值得','划算','效用','投資','報酬','CP值'] },
          { id: 'bias_detection', name: '偏誤檢驗', nameEn: 'Bias Detection', desc: '識別確認偏誤、可得性偏誤、注意力偏誤等認知陷阱', keywords: ['偏見','盲點','假設','以為','覺得','直覺','偏誤','主觀'] },
          { id: 'bias_mitigation', name: '偏誤減輕', nameEn: 'Bias Mitigation', desc: '採取具體方法來降低認知偏誤對決策的影響', keywords: ['客觀','中立','避免','修正','校正','減少偏見'] },
          { id: 'decision_tree', name: '決策樹', nameEn: 'Decision Tree', desc: '用樹狀結構呈現決策路徑，評估各選項的後果與機率', keywords: ['選擇','選項','方案','路徑','如果','決策','A還是B','決定'] },
          { id: 'sunk_cost', name: '沉沒成本', nameEn: 'Sunk Cost Analysis', desc: '辨識已無法回收的投入，避免因沉沒成本而做出錯誤決策', keywords: ['已經投入','放棄','繼續','捨不得','沉沒','回不去','浪費'] },
          { id: 'risk_uncertainty', name: '風險與不確定性', nameEn: 'Risk & Uncertainty', desc: '區分可量化的風險與不可量化的不確定性，做出穩健決策', keywords: ['風險','不確定','可能','萬一','危險','安全','保險','穩定'] }
        ]
      },
      {
        name: '分析資料',
        habits: [
          { id: 'descriptive_stats', name: '描述統計', nameEn: 'Descriptive Statistics', desc: '使用平均數、中位數、標準差等方法摘要資料特徵', keywords: ['數據','資料','統計','平均','數字','量化','報表'] },
          { id: 'probability', name: '機率思維', nameEn: 'Probability', desc: '運用機率與條件機率來評估事件發生的可能性', keywords: ['機率','可能性','機會','概率','可能','百分比'] },
          { id: 'distribution', name: '分布分析', nameEn: 'Distribution', desc: '理解資料的分布型態，辨識常態與異常模式', keywords: ['分布','趨勢','模式','分散','集中','型態'] },
          { id: 'confidence_interval', name: '信賴區間', nameEn: 'Confidence Interval', desc: '理解估計的精確度範圍，區分效應大小', keywords: ['區間','範圍','精確','誤差','信賴','估計'] },
          { id: 'correlation', name: '相關性分析', nameEn: 'Correlation Analysis', desc: '區分相關與因果，避免將共變當作因果關係', keywords: ['相關','因果','關聯','連動','影響','導致'] },
          { id: 'fallacy', name: '統計謬誤', nameEn: 'Statistical Fallacy', desc: '識別常見的統計錯誤解讀，如倖存者偏差、基率謬誤', keywords: ['錯誤','誤解','謬誤','陷阱','倖存','偏差'] },
          { id: 'significance', name: '統計顯著性', nameEn: 'Statistical Significance', desc: '判斷資料結果是否具有統計上的意義', keywords: ['顯著','有效','證明','驗證','實驗','測試'] }
        ]
      },
      {
        name: '評估理由',
        habits: [
          { id: 'evidence_base', name: '證據基礎', nameEn: 'Evidence Base', desc: '確認主張是否有充分的證據支持', keywords: ['證據','根據','來源','依據','佐證','事實'] },
          { id: 'source_quality', name: '來源品質', nameEn: 'Source Quality', desc: '評估資訊來源的可信度、權威性和潛在偏見', keywords: ['來源','可信','權威','專家','可靠','真假'] },
          { id: 'deduction', name: '演繹推理', nameEn: 'Deductive Reasoning', desc: '從普遍性前提推導出必然的特定結論', keywords: ['推理','邏輯','如果那麼','必然','前提','結論'] },
          { id: 'induction', name: '歸納推理', nameEn: 'Inductive Reasoning', desc: '從特定觀察推導出普遍性的結論', keywords: ['觀察','規律','歸納','模式','趨勢','總結'] },
          { id: 'logical_fallacy', name: '邏輯謬誤識別', nameEn: 'Logical Fallacy Detection', desc: '識別稻草人、滑坡、循環論證等常見邏輯謬誤', keywords: ['邏輯','漏洞','矛盾','不合理','說不通','牽強'] },
          { id: 'reductio', name: '歸謬法', nameEn: 'Reductio ad Absurdum', desc: '將對方論點推到極端來檢驗其合理性', keywords: ['極端','假如','荒謬','反證','推翻','不成立'] }
        ]
      },
      {
        name: '評估主張',
        habits: [
          { id: 'context', name: '脈絡理解', nameEn: 'Contextual Understanding', desc: '在歷史、文化、學科的脈絡中理解資訊的意義', keywords: ['背景','脈絡','情境','文化','歷史','環境','條件'] },
          { id: 'critical_analysis', name: '批判分析', nameEn: 'Critical Analysis', desc: '主動質疑和檢驗主張，而非被動接受資訊', keywords: ['質疑','檢驗','批判','懷疑','真的嗎','確定嗎'] },
          { id: 'reasonableness', name: '合理性評估', nameEn: 'Reasonableness Assessment', desc: '評估假設前提的可行性和主張的合理程度', keywords: ['合理','可行','實際','現實','說得通','有道理'] },
          { id: 'testability', name: '可驗證性', nameEn: 'Testability', desc: '判斷假說是否可被驗證，區分科學與偽科學', keywords: ['驗證','測試','證明','實驗','可以驗證','證據'] },
          { id: 'estimation', name: '估計與近似', nameEn: 'Estimation', desc: '在資訊不完整時做出合理的量化估算', keywords: ['估計','大約','估算','粗估','量級','多少'] }
        ]
      }
    ]
  },
  {
    category: 'creative',
    categoryName: '創意思考',
    categoryNameEn: 'Creative Thinking',
    categoryDesc: '運用創造性方法解決問題，發掘新可能，設計創新方案',
    subcategories: [
      {
        name: '問題解決',
        habits: [
          { id: 'analogy', name: '類比思考', nameEn: 'Analogical Thinking', desc: '從其他領域借用相似的解決模式來解決當前問題', keywords: ['類比','像是','類似','好比','其他領域','借鏡','參考'] },
          { id: 'constraint_satisfaction', name: '限制條件滿足', nameEn: 'Constraint Satisfaction', desc: '在既定的限制條件下找到最佳解決方案', keywords: ['限制','條件','範圍','框架','在...之內','有限'] },
          { id: 'optimization', name: '最佳化', nameEn: 'Optimization', desc: '在多個變量中找到最佳平衡點，而非追求單一指標最大化', keywords: ['最佳','優化','平衡','最大化','效率','改善','提升'] },
          { id: 'reverse_thinking', name: '逆向思考', nameEn: 'Reverse Thinking', desc: '從結果反推過程，或用反面思考來發現新思路', keywords: ['反過來','如果不','逆向','反面','相反','換個角度'] },
          { id: 'design_thinking', name: '設計思考', nameEn: 'Design Thinking', desc: '以使用者為中心，通過同理心、定義、構思、原型、測試來創新', keywords: ['設計','使用者','體驗','原型','測試','迭代','用戶','需求'] },
          { id: 'heuristic', name: '啟發式方法', nameEn: 'Heuristic Methods', desc: '使用經驗法則快速找到近似解，再逐步優化', keywords: ['經驗','捷徑','快速','近似','先試','直覺','嘗試'] },
          { id: 'simulation', name: '模擬建模', nameEn: 'Simulation Modeling', desc: '建立簡化模型來模擬真實情境，預測可能結果', keywords: ['模擬','模型','預測','情境','模擬','沙盤','推演'] }
        ]
      },
      {
        name: '發掘與探索',
        habits: [
          { id: 'hypothesis', name: '建立假說', nameEn: 'Hypothesis Building', desc: '提出可被驗證的假設，引導系統性的探索與實驗', keywords: ['假設','假說','猜測','推測','如果','驗證','實驗'] },
          { id: 'data_visualization', name: '資料視覺化', nameEn: 'Data Visualization', desc: '用圖表將複雜資料轉化為直觀的視覺呈現', keywords: ['圖表','視覺化','呈現','圖形','看得到','展示'] },
          { id: 'modeling', name: '建模', nameEn: 'Modeling', desc: '建立概念或數學模型來解釋現象並產生預測', keywords: ['模型','建模','架構','框架','抽象','結構'] }
        ]
      },
      {
        name: '應用研究方法',
        habits: [
          { id: 'sampling', name: '抽樣方法', nameEn: 'Sampling', desc: '設計合理的抽樣方式來收集具代表性的資料', keywords: ['抽樣','樣本','代表性','調查','取樣'] },
          { id: 'observational', name: '觀察性研究', nameEn: 'Observational Study', desc: '在不介入的情況下系統性觀察和記錄現象', keywords: ['觀察','記錄','調查','現象','發現','蒐集'] },
          { id: 'interventional', name: '介入性研究', nameEn: 'Interventional Study', desc: '通過控制變量的實驗來驗證因果關係', keywords: ['實驗','介入','控制','測試','A/B','對照'] },
          { id: 'case_study', name: '個案研究', nameEn: 'Case Study', desc: '深入分析特定案例來獲得洞察，再推導至一般情境', keywords: ['案例','個案','深入','具體','實例','故事'] },
          { id: 'interview', name: '訪談式研究', nameEn: 'Interview Study', desc: '通過結構化或半結構化訪談收集質性資料', keywords: ['訪談','訪問','問卷','回饋','意見','了解'] },
          { id: 'replicability', name: '研究可複製性', nameEn: 'Replicability', desc: '確保研究方法和結果可被他人重複驗證', keywords: ['複製','重複','驗證','再現','標準化'] },
          { id: 'control_group', name: '比較組設計', nameEn: 'Control Group', desc: '設計適當的對照組來隔離變量效應', keywords: ['對照','比較','基準','控制組','參照'] }
        ]
      }
    ]
  },
  {
    category: 'communication',
    categoryName: '有效溝通',
    categoryNameEn: 'Effective Communication',
    categoryDesc: '清晰精準地傳達想法，讓訊息被正確理解和接受',
    subcategories: [
      {
        name: '語言溝通',
        habits: [
          { id: 'audience', name: '受眾分析', nameEn: 'Audience Analysis', desc: '根據聽眾的背景、知識和需求來調整溝通方式', keywords: ['受眾','對象','聽眾','給誰看','讀者','客戶','老闆','同事'] },
          { id: 'connotation', name: '意涵與語調', nameEn: 'Connotation & Tone', desc: '理解和運用詞語的隱含意義和情感色彩', keywords: ['語調','用詞','感覺','意思','暗示','語氣','口吻'] },
          { id: 'structure', name: '內容構成', nameEn: 'Content Structure', desc: '有效組織論點和資訊的呈現順序與結構', keywords: ['結構','組織','架構','順序','邏輯','鋪排','大綱'] },
          { id: 'precision', name: '細緻表達', nameEn: 'Precision', desc: '使用精確的語言避免模糊和歧義', keywords: ['精確','具體','明確','清楚','不含糊','精準'] },
          { id: 'conciseness', name: '簡潔明瞭', nameEn: 'Conciseness', desc: '用最少的文字傳達最完整的意義', keywords: ['簡潔','精簡','簡短','太長','摘要','重點'] },
          { id: 'professionalism', name: '專業精神', nameEn: 'Professionalism', desc: '以專業的格式和態度進行溝通', keywords: ['專業','正式','格式','規範','標準','品質'] }
        ]
      },
      {
        name: '非語言溝通',
        habits: [
          { id: 'comm_design', name: '溝通設計', nameEn: 'Communication Design', desc: '運用視覺和認知原則設計有效的簡報與文件', keywords: ['簡報','設計','排版','視覺','介面','呈現方式'] },
          { id: 'expression', name: '表達方式', nameEn: 'Expression', desc: '運用肢體語言、面部表情來增強溝通效果', keywords: ['表達','肢體','表情','演說','演講','報告'] },
          { id: 'medium', name: '媒介選擇', nameEn: 'Medium Selection', desc: '選擇最適合的溝通管道和媒介形式', keywords: ['管道','方式','媒介','工具','平台','用什麼'] },
          { id: 'multimedia', name: '多媒體應用', nameEn: 'Multimedia', desc: '整合文字、圖像、影音等多種媒體形式來傳達訊息', keywords: ['多媒體','影片','圖片','影音','動畫','互動'] }
        ]
      }
    ]
  },
  {
    category: 'interaction',
    categoryName: '有效互動',
    categoryNameEn: 'Effective Interaction',
    categoryDesc: '在複雜的人際和系統環境中有效地協作、談判和領導',
    subcategories: [
      {
        name: '解決道德問題',
        habits: [
          { id: 'moral_courage', name: '道德勇氣', nameEn: 'Moral Courage', desc: '在面對壓力時仍堅持做正確的事', keywords: ['道德','正確','勇氣','堅持','對的事','價值觀','良知'] },
          { id: 'ethical_consideration', name: '道德考量', nameEn: 'Ethical Consideration', desc: '在決策中考慮倫理層面的影響和責任', keywords: ['倫理','道德','責任','公平','正義','對錯'] },
          { id: 'moral_judgment', name: '道德判斷', nameEn: 'Moral Judgment', desc: '在複雜情境中做出符合倫理標準的判斷', keywords: ['判斷','抉擇','兩難','衝突','價值','底線'] }
        ]
      },
      {
        name: '複雜系統分析',
        habits: [
          { id: 'system_dynamics', name: '系統動力', nameEn: 'System Dynamics', desc: '理解系統中的回饋迴路、延遲效應和非線性行為', keywords: ['系統','動態','循環','回饋','連鎖','環環相扣'] },
          { id: 'system_mapping', name: '系統描繪', nameEn: 'System Mapping', desc: '將系統中的變量和關係視覺化，找出最佳介入點', keywords: ['系統','地圖','描繪','關係圖','全局','視覺化'] },
          { id: 'multilevel', name: '多層次分析', nameEn: 'Multi-level Analysis', desc: '從不同層級（個人、團隊、組織、產業）分析問題', keywords: ['層次','層級','多面','角度','維度','上下','宏觀','微觀'] },
          { id: 'emergence', name: '湧現特性', nameEn: 'Emergence', desc: '認識整體大於部分之和的現象，辨識系統的突現行為', keywords: ['湧現','整體','突現','意想不到','浮現','出現'] },
          { id: 'complex_causality', name: '複雜因果', nameEn: 'Complex Causality', desc: '識別多重原因如何交互作用產生複雜結果', keywords: ['複雜','因果','交互','多重','連動','影響','牽連'] },
          { id: 'network_analysis', name: '網絡分析', nameEn: 'Network Analysis', desc: '分析網絡中的節點和連結，辨識關鍵影響路徑', keywords: ['網絡','關係','連結','節點','影響力','中心','傳播'] }
        ]
      },
      {
        name: '談判和說服',
        habits: [
          { id: 'assertiveness', name: '自信表達', nameEn: 'Assertiveness', desc: '清楚堅定地表達自己的立場，同時尊重他人', keywords: ['自信','表達','立場','堅定','勇敢','發言'] },
          { id: 'negotiation', name: '談判技巧', nameEn: 'Negotiation', desc: '運用結構化方法進行協商，尋求雙贏結果', keywords: ['談判','協商','交涉','條件','讓步','雙贏','合作'] },
          { id: 'nudge', name: '助推', nameEn: 'Nudging', desc: '透過設計選擇架構來引導行為，而非強制命令', keywords: ['引導','推動','影響','行為','改變','激勵','設計'] },
          { id: 'carrot_stick', name: '胡蘿蔔和棒子', nameEn: 'Carrot and Stick', desc: '靈活運用獎勵和懲罰來塑造期望的行為', keywords: ['獎勵','懲罰','激勵','誘因','後果','措施'] },
          { id: 'persuasion', name: '說服力', nameEn: 'Persuasion', desc: '運用邏輯、情感和信任來有效說服他人', keywords: ['說服','影響','游說','主張','提案','報告','爭取'] }
        ]
      },
      {
        name: '與他人合作',
        habits: [
          { id: 'accountability', name: '責任感', nameEn: 'Accountability', desc: '對自己的行動和承諾負責，主動承擔義務', keywords: ['責任','承擔','負責','當責','義務','承諾'] },
          { id: 'leadership', name: '領導原則', nameEn: 'Leadership Principles', desc: '運用適當的領導風格來引領團隊達成目標', keywords: ['領導','帶領','團隊','管理','主管','領袖','帶人'] },
          { id: 'power_dynamics', name: '權力動態', nameEn: 'Power Dynamics', desc: '理解並運用組織中的權力結構和影響力網絡', keywords: ['權力','政治','影響力','組織','職場','上下級','層級'] },
          { id: 'strategy', name: '制訂策略', nameEn: 'Strategy Formulation', desc: '制定長期和短期的行動策略來達成組織目標', keywords: ['策略','戰略','規劃','計畫','方針','路線','佈局'] },
          { id: 'individual_diff', name: '個體差異', nameEn: 'Individual Differences', desc: '認識並善用每個人不同的技能、特質和動機', keywords: ['個人','差異','特質','能力','風格','多元','不同'] },
          { id: 'adaptability', name: '適性調整', nameEn: 'Adaptability', desc: '根據情境和對象靈活調整自己的方式和策略', keywords: ['調整','適應','靈活','彈性','變通','因應'] },
          { id: 'self_awareness', name: '自我覺察', nameEn: 'Self-awareness', desc: '認識自己的優缺點、情緒模式和思考盲點（密涅瓦最後教的一課）', keywords: ['自己','自我','認識','反省','覺察','了解自己','盲點'] },
          { id: 'eq', name: '情商', nameEn: 'Emotional Intelligence', desc: '理解和管理自己與他人的情緒，建立良好人際關係', keywords: ['情緒','感受','情商','同理','理解','人際','關係','相處'] }
        ]
      }
    ]
  }
];

// ===== STATE =====
let currentStep = 0;
const totalSteps = 5;
let selectedHabits = new Set();

// ===== NAVIGATION =====
function showSection(sectionId) {
  document.querySelectorAll('main > section').forEach(s => s.style.display = 'none');
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (sectionId === 'reference') renderReference();
}

function startAnalysis() {
  showSection('app');
  currentStep = 0;
  updateStep();
}

function goToStep(step) {
  if (step > currentStep + 1) return;
  currentStep = step;
  updateStep();
}

function nextStep() {
  if (currentStep === 0 && !document.getElementById('problemInput').value.trim()) {
    document.getElementById('problemInput').focus();
    document.getElementById('problemInput').style.borderColor = 'var(--danger)';
    setTimeout(() => { document.getElementById('problemInput').style.borderColor = ''; }, 2000);
    return;
  }
  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateStep() {
  document.querySelectorAll('.step-content').forEach((el, i) => {
    el.classList.toggle('active', i === currentStep);
  });

  document.querySelectorAll('.stepper-steps .step').forEach((el, i) => {
    el.classList.remove('active', 'completed');
    if (i === currentStep) el.classList.add('active');
    if (i < currentStep) el.classList.add('completed');
  });

  const progress = document.getElementById('stepperProgress');
  if (progress) {
    progress.style.width = (currentStep / (totalSteps - 1) * 100) + '%';
  }

  if (currentStep === 2) generateRecommendations();
  if (currentStep === 3) generateSpec();
  if (currentStep === 4) generatePrompt();
}

// ===== RECOMMENDATION ENGINE =====
function generateRecommendations() {
  const problemText = document.getElementById('problemInput').value;
  const situation = document.getElementById('frameSituation').value;
  const goal = document.getElementById('frameGoal').value;
  const obstacles = document.getElementById('frameObstacles').value;
  const constraints = document.getElementById('frameConstraints').value;

  const fullText = [problemText, situation, goal, obstacles, constraints].join(' ');

  const scored = [];
  HABITS_DATA.forEach(cat => {
    cat.subcategories.forEach(sub => {
      sub.habits.forEach(habit => {
        let score = 0;
        habit.keywords.forEach(kw => {
          if (fullText.includes(kw)) score += 2;
        });
        if (score > 0) {
          scored.push({ ...habit, score, category: cat.categoryName, subcategory: sub.name });
        }
      });
    });
  });

  scored.sort((a, b) => b.score - a.score);

  // Always include '問對問題' as first recommendation
  const rightQ = scored.find(h => h.id === 'right_question');
  if (!rightQ) {
    const rqHabit = HABITS_DATA[0].subcategories[0].habits[0];
    scored.unshift({ ...rqHabit, score: 100, category: '批判性思考', subcategory: '分析問題' });
  }

  const recommended = scored.slice(0, 8);

  // Auto-select recommended habits
  selectedHabits.clear();
  recommended.forEach(h => selectedHabits.add(h.id));

  // If too few matches, add defaults
  if (recommended.length < 4) {
    const defaults = ['right_question', 'decompose', 'utility', 'multilevel'];
    defaults.forEach(id => {
      if (!selectedHabits.has(id)) {
        selectedHabits.add(id);
        const habit = findHabitById(id);
        if (habit) recommended.push(habit);
      }
    });
  }

  renderHabitsUI(recommended);
}

function findHabitById(id) {
  for (const cat of HABITS_DATA) {
    for (const sub of cat.subcategories) {
      for (const h of sub.habits) {
        if (h.id === id) return { ...h, category: cat.categoryName, subcategory: sub.name };
      }
    }
  }
  return null;
}

function toggleHabit(id) {
  if (selectedHabits.has(id)) {
    selectedHabits.delete(id);
  } else {
    selectedHabits.add(id);
  }
  document.querySelectorAll(`.habit-chip[data-id="${id}"]`).forEach(el => {
    el.classList.toggle('selected', selectedHabits.has(id));
  });
}

function renderHabitsUI(recommended) {
  const recContainer = document.getElementById('habitsRecommended');
  let recHtml = '<h3>系統推薦（根據你的問題自動匹配）</h3><div class="habit-chips">';
  recommended.forEach(h => {
    recHtml += `<button class="habit-chip selected" data-id="${h.id}" onclick="toggleHabit('${h.id}')">
      <span class="chip-check">&#10003;</span>
      <span>${h.name}</span>
    </button>`;
  });
  recHtml += '</div>';
  recContainer.innerHTML = recHtml;

  const allContainer = document.getElementById('habitsAll');
  let allHtml = '';
  HABITS_DATA.forEach(cat => {
    allHtml += `<div class="habit-category cat-${cat.category}">
      <div class="habit-category-header">
        <div class="habit-category-icon">${cat.categoryName[0]}</div>
        <h4>${cat.categoryName}</h4>
      </div>`;
    cat.subcategories.forEach(sub => {
      allHtml += `<div class="habit-subcategory"><h5>${sub.name}</h5><div class="habit-chips">`;
      sub.habits.forEach(h => {
        const isSelected = selectedHabits.has(h.id);
        allHtml += `<button class="habit-chip${isSelected ? ' selected' : ''}" data-id="${h.id}" onclick="toggleHabit('${h.id}')" title="${h.desc}">
          <span class="chip-check">&#10003;</span>
          <span>${h.name}</span>
        </button>`;
      });
      allHtml += '</div></div>';
    });
    allHtml += '</div>';
  });
  allContainer.innerHTML = allHtml;
}

// ===== PROBLEM SPECIFICATION =====
function generateSpec() {
  const problem = document.getElementById('problemInput').value.trim();
  const situation = document.getElementById('frameSituation').value.trim();
  const goal = document.getElementById('frameGoal').value.trim();
  const obstacles = document.getElementById('frameObstacles').value.trim();
  const constraints = document.getElementById('frameConstraints').value.trim();
  const validated = document.getElementById('validationCheck').checked;

  const habits = getSelectedHabitsInfo();

  let spec = `========================================
          問 題 規 格 書
========================================

【問題描述】
${problem || '（未填寫）'}

----------------------------------------
問對問題框架
----------------------------------------

[現況] ${situation || '（未填寫）'}

[目標] ${goal || '（未填寫）'}

[障礙] ${obstacles || '（未填寫）'}
（可改變的阻礙因素）

[限制] ${constraints || '（未填寫）'}
（不可改變的條件）

[框架驗證] ${validated ? '通過 - 移除障礙後在限制內可達成目標' : '未驗證 - 建議回到上一步重新檢視'}

----------------------------------------
選用的思考習慣（${habits.length} 個）
----------------------------------------
`;

  habits.forEach((h, i) => {
    spec += `${i + 1}. ${h.name}（${h.nameEn}）\n   ${h.desc}\n\n`;
  });

  spec += `----------------------------------------
成功標準
----------------------------------------
> 在限制條件內，障礙被有效移除
> 目標可被明確衡量達成與否
> 分析過程可被檢驗、複製、優化

========================================`;

  document.getElementById('specOutput').textContent = spec;
}

function getSelectedHabitsInfo() {
  const result = [];
  HABITS_DATA.forEach(cat => {
    cat.subcategories.forEach(sub => {
      sub.habits.forEach(h => {
        if (selectedHabits.has(h.id)) {
          result.push({ ...h, category: cat.categoryName });
        }
      });
    });
  });
  return result;
}

// ===== AI PROMPT GENERATION =====
function generatePrompt() {
  const problem = document.getElementById('problemInput').value.trim();
  const situation = document.getElementById('frameSituation').value.trim();
  const goal = document.getElementById('frameGoal').value.trim();
  const obstacles = document.getElementById('frameObstacles').value.trim();
  const constraints = document.getElementById('frameConstraints').value.trim();
  const habits = getSelectedHabitsInfo();

  let habitsSection = '';
  habits.forEach((h, i) => {
    habitsSection += `${i + 1}. **${h.name}**（${h.nameEn}）：${h.desc}\n`;
  });

  const prompt = `你是一位精通密涅瓦大學（Minerva University）決策科學的思考教練。你熟悉密涅瓦大學從過去200年人類決策智慧中萃取的76個底層思考習慣，涵蓋批判性思考、創意思考、有效溝通、有效互動四大領域。

請根據以下「問題規格書」，運用指定的思考習慣來深度分析和拆解問題。

---

## 問題描述
${problem || '（使用者未提供詳細描述）'}

## 問對問題框架

**現況（Current Situation）：**
${situation || '（未填寫）'}

**目標（Goal）：**
${goal || '（未填寫）'}

**障礙（Obstacles - 可改變的）：**
${obstacles || '（未填寫）'}

**限制（Constraints - 不可改變的）：**
${constraints || '（未填寫）'}

## 指定使用的思考習慣
${habitsSection || '（未選擇，請自動推薦適合的思考習慣）'}

---

## 請按照以下步驟進行分析：

### 第一步：驗證問題框架
檢驗「問對問題」框架是否完整：
- 現況描述是否足夠清楚？
- 目標是否明確可衡量？
- 障礙和限制的區分是否正確？（障礙 = 可改變的；限制 = 不可改變的）
- 是否有遺漏的障礙或限制？
- 如果移除障礙、尊重限制，是否確實能達成目標？
如有建議修改，請提出。

### 第二步：逐一應用思考習慣
針對每個指定的思考習慣：
- 說明這個思考習慣如何適用於這個問題
- 透過該思考習慣的視角，提出具體的洞察和分析
- 給出這個角度下的具體建議

### 第三步：交叉分析
將多個思考習慣的分析結果進行交叉比對：
- 不同思考習慣的分析是否有衝突？
- 是否有某些思考習慣互相加強的洞察？
- 綜合所有角度，最關鍵的發現是什麼？

### 第四步：提出行動方案
基於以上分析：
- 提出 3-5 個具體可執行的行動建議
- 每個建議標明優先順序（高/中/低）
- 說明每個建議對應哪個障礙
- 預估執行難度和所需資源

### 第五步：風險評估與盲點檢查
- 這個分析可能遺漏了什麼？
- 有哪些假設需要被驗證？
- 最大的風險是什麼？如何防範？
- 如果分析錯了，最壞的後果是什麼？

---

請用清晰的結構化格式回答，使用標題和要點。語言要具體、可操作，避免空泛的建議。`;

  document.getElementById('promptOutput').textContent = prompt;
}

// ===== COPY & EXPORT =====
function copyPrompt() {
  const text = document.getElementById('promptOutput').textContent;
  copyToClipboard(text);
}

function copySpec() {
  const text = document.getElementById('specOutput').textContent;
  copyToClipboard(text);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById('copyToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function downloadPrompt() {
  const text = document.getElementById('promptOutput').textContent;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'minerva-prompt.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ===== RESET =====
function resetApp() {
  document.getElementById('problemInput').value = '';
  document.getElementById('frameSituation').value = '';
  document.getElementById('frameGoal').value = '';
  document.getElementById('frameObstacles').value = '';
  document.getElementById('frameConstraints').value = '';
  document.getElementById('validationCheck').checked = false;
  selectedHabits.clear();
  currentStep = 0;
  updateStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== REFERENCE =====
function renderReference() {
  const container = document.getElementById('referenceCategories');
  if (container.children.length > 0) return;

  const icons = ['C', 'I', 'E', 'A'];
  let html = '';

  HABITS_DATA.forEach((cat, ci) => {
    let habitCount = 0;
    cat.subcategories.forEach(sub => habitCount += sub.habits.length);

    html += `<div class="ref-category ref-cat-${ci}">
      <div class="ref-category-header" onclick="this.parentElement.classList.toggle('open')">
        <div class="ref-category-icon">${icons[ci]}</div>
        <h3>${cat.categoryName} ${cat.categoryNameEn}</h3>
        <span class="ref-count">${habitCount} 個習慣</span>
      </div>
      <div class="ref-category-body">`;

    cat.subcategories.forEach(sub => {
      html += `<div class="ref-subcategory"><h4>${sub.name}</h4>`;
      sub.habits.forEach(h => {
        html += `<div class="ref-habit">
          <span class="ref-habit-name">${h.name}</span>
          <span class="ref-habit-desc">${h.desc}</span>
        </div>`;
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
