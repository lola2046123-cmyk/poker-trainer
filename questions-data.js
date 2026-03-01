// 题库：由 data.json 扁平化生成，供 index.html 随机抽题
const allQuestions = [
  {
    "level_id": 101,
    "title": "比大小：单身狗 vs 双胞胎",
    "scenario": "【牌力测试 1/3】纯靠直觉，左边是一对 A，右边是一张 A 和一张 K 的散牌，谁大？",
    "hand": [
      "As",
      "Ah"
    ],
    "board": [
      "Ad",
      "Kc"
    ],
    "options": [
      {
        "action": "一对 A 大",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "laugh",
        "sharky_feedback": "废话！成双成对永远比单身狗强。只要成了一对，就碾压所有没凑对的散牌！"
      },
      {
        "action": "AK 散牌大",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "你是不是觉得 K 很大？记住，在德扑里，没凑成对子的牌，再大也是个弟弟。"
      }
    ]
  },
  {
    "level_id": 102,
    "title": "比大小：双胞胎 vs 三胞胎",
    "scenario": "【牌力测试 2/3】你手里是一对 A（双胞胎），老王手里是三个 2（三胞胎）。谁赢？",
    "hand": [
      "As",
      "Ah"
    ],
    "board": [
      "2c",
      "2d",
      "2h"
    ],
    "options": [
      {
        "action": "我的 AA 大，A 最大！",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "angry",
        "sharky_feedback": "大错特错！再小的三胞胎，也打得过双胞胎！这就叫【三条 (Set)】，记住：数量碾压质量！"
      },
      {
        "action": "老王的三个 2 大",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "聪明！不管多小的数字，凑齐三个就叫【三条 (Set)】，直接把你的 AA 按在地上摩擦！"
      }
    ]
  },
  {
    "level_id": 103,
    "title": "比大小：顺子 vs 同花",
    "scenario": "【牌力测试 3/3】左边是 5 张连着的牌（顺子），右边是 5 张全都是红桃但没连着的牌（同花）。",
    "hand": [
      "5h",
      "6h",
      "7h",
      "8h",
      "9s"
    ],
    "board": [
      "2h",
      "5h",
      "9h",
      "Jh",
      "Kh"
    ],
    "options": [
      {
        "action": "顺子大 (Straight)",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "这是新手最容易死的地方！记住：颜色统一才是王道，【同花】永远比【顺子】大！"
      },
      {
        "action": "同花大 (Flush)",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "满分！【同花 (Flush)】比顺子大，你已经越过了新手最容易破产的第一个天坑。"
      }
    ]
  },
  {
    "level_id": 104,
    "title": "黑帮聚餐：话事人是谁？",
    "scenario": "【位置规矩 1/3】黑帮开会，谁拥有最大的特权？",
    "hand": [],
    "board": [],
    "options": [
      {
        "action": "第一个发言的人",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "第一个发言那叫'探雷的炮灰'！在德扑里，别人底牌都亮了你再说话，才是真正的掌控者。"
      },
      {
        "action": "最后一个发言的人",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "laugh",
        "sharky_feedback": "透彻！这就叫【庄家位 (Dealer/BTN)】。坐在这个位置，你就是全场看戏的话事人！"
      }
    ]
  },
  {
    "level_id": 105,
    "title": "黑帮聚餐：倒霉的盲注",
    "scenario": "【位置规矩 2/3】庄家左边有两个倒霉蛋，牌还没发就被逼着交了'茶位费'（盲注），为什么？",
    "hand": [],
    "board": [],
    "options": [
      {
        "action": "为了让底池有钱，逼大家抢",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "没错！不放点肉，狼怎么会咬起来？交得少的叫【小盲 (SB)】，交得多的叫【大盲 (BB)】，别同情他们。"
      },
      {
        "action": "因为他们长得丑，被针对了",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "laugh",
        "sharky_feedback": "哈哈虽然很好笑，但不对！强制交钱是为了制造抢夺的欲望，这就是【盲注 (Blinds)】的由来。"
      }
    ]
  },
  {
    "level_id": 106,
    "title": "黑帮聚餐：危险的枪口",
    "scenario": "【位置规矩 3/3】大盲注左边的人，叫【枪口位 (UTG)】，因为他是全桌第一个必须说话的人。这位置好吗？",
    "hand": [],
    "board": [],
    "options": [
      {
        "action": "好！先发制人！",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "angry",
        "sharky_feedback": "顶着枪口探路，你不是炮灰谁是？后面还有好几个人没表态呢，随时可能跳出个大 Boss！"
      },
      {
        "action": "差！容易被后面的人埋伏",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "悟性极高！在这个位置，没有极品好牌千万别轻举妄动，这就是德扑的生存法则。"
      }
    ]
  },
  {
    "level_id": 107,
    "title": "黑话翻译机：打不过怎么办？",
    "scenario": "【行动暗号】老王加注了！你手里牌烂得没眼看，你应该大喊一句什么？",
    "hand": [],
    "board": [],
    "options": [
      {
        "action": "Call (跟着交钱)",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "angry",
        "sharky_feedback": "牌烂你还 Call？你是不是老王派来的卧底？"
      },
      {
        "action": "Raise (加倍干他)",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "拿烂牌去吓唬人叫【偷鸡 (Bluff)】，但小白不建议随便用，容易骨折！"
      },
      {
        "action": "Fold (认怂弃牌)",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "laugh",
        "sharky_feedback": "完美！打不过就跑，这叫【Fold】。恭喜你，你已经正式从'纯小白'进化成'懂规矩的鱼'了！"
      }
    ]
  },
  {
    "level_id": 1,
    "title": "初见屠龙刀",
    "scenario": "你在庄家位（最后行动）。前面一直弃牌，轮到老王，他突然加注 3 个大盲注。",
    "hand": [
      "As",
      "Ah"
    ],
    "board": [],
    "options": [
      {
        "action": "弃牌 (Fold)",
        "is_correct": false,
        "hp_change": -30,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "兄弟，AA 你都扔？你是菩萨转世来发筹码的吗？这可是德扑的屠龙宝刀！"
      },
      {
        "action": "平跟 (Call)",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "angry",
        "sharky_feedback": "慢打 AA 就是给老王送命题。万一翻牌出个乱七八糟的顺子面，你怎么哭的都不知道！"
      },
      {
        "action": "反加注 (3-Bet)",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "漂亮！拿着核武器就该重拳出击，让想收废品的人交足过路费！"
      }
    ]
  },
  {
    "level_id": 2,
    "title": "废品回收站",
    "scenario": "你在枪口位（第一个行动）。发牌员给你发了一手德扑里名声最臭的牌。",
    "hand": [
      "7d",
      "2c"
    ],
    "board": [],
    "options": [
      {
        "action": "全押 (All-in)",
        "is_correct": false,
        "hp_change": -50,
        "sharky_emotion": "angry",
        "sharky_feedback": "拿着 72o 梭哈？你是不是以为你在拍赌神电影？老王的法拉利就是这么赢来的！"
      },
      {
        "action": "平跟 (Call)",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "这牌连凑顺子和同花都没戏，花钱看翻牌等于把钱扔进太平洋。"
      },
      {
        "action": "弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "这就对了！德扑赢钱的秘诀第一条：管住手，不玩垃圾牌。你已经比 50% 的新手强了。"
      }
    ]
  },
  {
    "level_id": 3,
    "title": "位置的霸权",
    "scenario": "你在庄家位（BTN）。前面所有人都弃牌了，现在底池里只有盲注。你手里的牌很一般。",
    "hand": [
      "Kd",
      "8s"
    ],
    "board": [],
    "options": [
      {
        "action": "弃牌 (Fold)",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "太怂了！前面都没人要，你坐在最好的位置，这可是白捡盲注的黄金机会。"
      },
      {
        "action": "加注 (Raise)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "laugh",
        "sharky_feedback": "干得好！这就是'位置红利'。牌不够好没关系，咱们利用最后说话的权力偷走它！"
      }
    ]
  },
  {
    "level_id": 4,
    "title": "危险的诱惑",
    "scenario": "翻牌前，你在中间位置，拿到一手看起来很漂亮的同花连张，但老王在前面下了重注。",
    "hand": [
      "6h",
      "7h"
    ],
    "board": [],
    "options": [
      {
        "action": "跟注 (Call)",
        "is_correct": false,
        "hp_change": -15,
        "sharky_emotion": "angry",
        "sharky_feedback": "老王下重注说明牌力很强。你拿着小牌去硬刚，等同花凑出来的概率不到 1/3，赔率太不划算了！"
      },
      {
        "action": "弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "cool",
        "sharky_feedback": "纪律性极佳！同花连张虽好，但代价太高时必须学会果断放手。"
      }
    ]
  },
  {
    "level_id": 5,
    "title": "顶对不等于无敌",
    "scenario": "进入翻牌圈！你击中了顶对，正准备庆祝，但对面的紧凶玩家直接 All-in 全押了。",
    "hand": [
      "As",
      "9d"
    ],
    "board": [
      "Ah",
      "Kc",
      "Qd"
    ],
    "options": [
      {
        "action": "跟注接战 (Call)",
        "is_correct": false,
        "hp_change": -40,
        "sharky_emotion": "angry",
        "sharky_feedback": "你疯了吗？牌面 A-K-Q 这么危险，你的跟脚（Kicker）只有个 9。对面不是顺子就是两对，你死定了！"
      },
      {
        "action": "弃牌逃跑 (Fold)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "顶级嗅觉！能扔掉顶对的玩家才算真正入了门。留得青山在，不怕没柴烧。"
      }
    ]
  },
  {
    "level_id": 6,
    "title": "金刚石也怕暗箭",
    "scenario": "你拿了手大对子。但翻牌发出了三张连着的同花色。对面突然开始疯狂下注。",
    "hand": [
      "Qc",
      "Qs"
    ],
    "board": [
      "7h",
      "8h",
      "9h"
    ],
    "options": [
      {
        "action": "加注 (Raise)",
        "is_correct": false,
        "hp_change": -25,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "盘面这么湿（危险），你拿个没有红桃的 QQ 去装大款？对面如果是红桃同花，你已经在给人家打工了。"
      },
      {
        "action": "跟注 (Call) 或 弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 10,
        "sharky_emotion": "laugh",
        "sharky_feedback": "稳妥。控制底池，看清局势再行动，这牌面确实不值得拼命。"
      }
    ]
  },
  {
    "level_id": 7,
    "title": "老王的底裤",
    "scenario": "河牌圈（最后一张）。底池有 1000 分。老王极其犹豫地丢出了 100 分。你手里只有个第三大的对子。",
    "hand": [
      "Jd",
      "10c"
    ],
    "board": [
      "2s",
      "Kd",
      "Jh",
      "4c",
      "8s"
    ],
    "options": [
      {
        "action": "弃牌 (Fold)",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "这么好的赔率你跑什么？只要花 100 就能赢 1100。老王这种下注，大概率是在极其心虚地试探！"
      },
      {
        "action": "跟注 (Call)",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "抓得好！这就是'底池赔率'的魔力。这价格，就算十次输九次，只要赢一次也是回本的！"
      }
    ]
  },
  {
    "level_id": 8,
    "title": "同花听牌的算计",
    "scenario": "转牌圈。你差一张红桃就能凑成同花。底池 500，对手下注 500（满池）。",
    "hand": [
      "Ah",
      "4h"
    ],
    "board": [
      "Kh",
      "7c",
      "2h",
      "Qs"
    ],
    "options": [
      {
        "action": "跟注 (Call)",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "angry",
        "sharky_feedback": "别追了！你听花的概率只有 20% 左右，但他下了满池，赔率完全不支持你强行买牌。这叫白给！"
      },
      {
        "action": "弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "laugh",
        "sharky_feedback": "理智！德扑不是买彩票，算不赢的账咱们坚决不做。"
      }
    ]
  },
  {
    "level_id": 9,
    "title": "两把大刀的碰撞",
    "scenario": "你拿了 AK，德扑第二强起手牌。前面紧凶对手 3-Bet 加注，你该怎么办？",
    "hand": [
      "As",
      "Kd"
    ],
    "board": [],
    "options": [
      {
        "action": "弃牌 (Fold)",
        "is_correct": false,
        "hp_change": -15,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "AK 你都扔？太浪费天赋了！这牌至少有资格去看看翻牌。"
      },
      {
        "action": "4-Bet反加 / 平跟 (Raise/Call)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "霸气！AK 就要打出侵略性。就算没中牌，也能把一些弱牌吓跑。"
      }
    ]
  },
  {
    "level_id": 10,
    "title": "Boss战：教父的凝视",
    "scenario": "你手里是口袋 Q。翻牌发出一张 A。全场最强的对手突然全押。他的眼神像 AlphaX 一样冰冷。",
    "hand": [
      "Qh",
      "Qc"
    ],
    "board": [
      "As",
      "8d",
      "2c"
    ],
    "options": [
      {
        "action": "死磕到底 (Call)",
        "is_correct": false,
        "hp_change": -50,
        "sharky_emotion": "angry",
        "sharky_feedback": "GameOver。翻牌有 A，你的 QQ 已经变成废纸了。面对高手的强力下注，不信邪只有死路一条！"
      },
      {
        "action": "果断弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 30,
        "sharky_emotion": "laugh",
        "sharky_feedback": "恭喜通关！懂得敬畏 A，懂得在高压下放弃好牌，你已经具备了上桌收割老王的基本功！"
      }
    ]
  },
  {
    "level_id": 11,
    "title": "金玉其外，败絮其中",
    "scenario": "翻牌前。你是【枪口位 (UTG)】第一个行动。你低头一看，拿到了一把看起来很漂亮的牌：K♠ 和 J♦。此时底池只有盲注，没有人下注。",
    "hand": [
      "Ks",
      "Jd"
    ],
    "board": [],
    "options": [
      {
        "action": "果断加注 (Raise)！",
        "is_correct": false,
        "hp_change": -15,
        "sharky_emotion": "angry",
        "sharky_feedback": "KJo 在枪口位一加注，后面随便来个 3-Bet 你就得痛苦弃牌。位置越差，手牌要求必须越高！"
      },
      {
        "action": "悄悄跟注 (Call) 进去看看",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "跟注进去也是送钱。这牌在枪口位就是『破产提款机』，赶紧扔！"
      },
      {
        "action": "无情弃牌 (Fold)！",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "KJo 在枪口位简直就是『破产提款机』！虽然有两张花牌，但在你身后还有 7-8 个人没表态。你一旦加注，稍微遇到个懂哥 3-Bet（反加）你，你只能痛苦弃牌。记住：位置越差，手牌要求必须越高！这牌赶紧扔！"
      }
    ]
  },
  {
    "level_id": 12,
    "title": "致命的『小踢脚』",
    "scenario": "翻牌前你拿着 A♣ 7♥ 平跟入局。翻牌发出：A♠ K♦ 4♣。你击中了顶对（一对 A）！老王突然往底池里下了一个重注（满池）。",
    "hand": [
      "Ac",
      "7h"
    ],
    "board": [
      "As",
      "Kd",
      "4c"
    ],
    "options": [
      {
        "action": "跟他干！跟注 (Call)",
        "is_correct": false,
        "hp_change": -25,
        "sharky_emotion": "angry",
        "sharky_feedback": "别看到一对 A 就走不动道了！老王敢在这个面下重注，极可能是 AK、AQ 甚至 AJ，你的 7 踢脚太小，被『主导』了。"
      },
      {
        "action": "老王肯定在偷鸡，全押 (All-in)！",
        "is_correct": false,
        "hp_change": -35,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "人家赢你一大截，你最多只能指望天上掉个 7。全押等于送钱！"
      },
      {
        "action": "认怂弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "别看到一对 A 就走不动道了！德扑比的是五张牌。老王敢在这个面下重注，他手里极大概率是 AK、AQ 甚至 AJ。你的『7』就是那个致命的弱点（踢脚太小）。这叫被『主导』了，人家赢你一大截，你最多只能指望天上掉个 7。快跑！"
      }
    ]
  },
  {
    "level_id": 13,
    "title": "慈善家的『买花』之路",
    "scenario": "翻牌前你拿了 8♥ 9♥。目前到了转牌圈，公共牌是 2♠ 5♥ K♦ J♥。你还差一张红桃就能做成同花！此时底池 100 块，对面老王直接下注 150 块（超池下注）。",
    "hand": [
      "8h",
      "9h"
    ],
    "board": [
      "2s",
      "5h",
      "Kd",
      "Jh"
    ],
    "options": [
      {
        "action": "必须买！跟注 (Call) 150",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "angry",
        "sharky_feedback": "你只有 9 张红桃能帮到你（赢率约 18%）。底池 100 他下 150，赔率根本不划算，这叫『给桌上发工资』。"
      },
      {
        "action": "不看了，弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "你数学是体育老师教的吗？你只有 9 张红桃能帮到你（赢率大约 18%）。底池 100，他下注 150，你要花 150 块去赢 250 块的底池，赔率根本不划算！这种为了梦想强行跟注的行为，我们统称为『给桌上发工资』。"
      },
      {
        "action": "反加他，吓跑他 (Raise)",
        "is_correct": false,
        "hp_change": -25,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "听牌反加在这种赔率下只会亏更多。弃牌才是正解。"
      }
    ]
  },
  {
    "level_id": 14,
    "title": "别做『被害妄想症』",
    "scenario": "河牌圈。公共牌是 5♠ 6♠ 7♠ 8♠ 2♦。桌面上已经有四张黑桃组成的同花面，而且还有顺子面。你手里只有一对 10（10♣ 10♦）。老王毫不犹豫地把全部筹码推入底池（All-in）。",
    "hand": [
      "10c",
      "10d"
    ],
    "board": [
      "5s",
      "6s",
      "7s",
      "8s",
      "2d"
    ],
    "options": [
      {
        "action": "抓他偷鸡！跟注 (Call)",
        "is_correct": false,
        "hp_change": -40,
        "sharky_emotion": "angry",
        "sharky_feedback": "这个牌面任何一张黑桃或 4、9 都能秒杀你的一对 10。老王在这里全押，极少是诈唬。别当『抓鸡大队长』！"
      },
      {
        "action": "惹不起，弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "永远不要高估你在河牌抓诈唬的能力！这个牌面太恐怖了，任何一张黑桃，或者一张 4、一张 9 都能秒杀你的一对 10。老王在这里全押，极少情况是在诈唬。留得青山在，不怕没柴烧，千万别上头当『抓鸡大队长』！"
      }
    ]
  },
  {
    "level_id": 201,
    "title": "转牌圈：突然掉落的炸弹",
    "scenario": "翻牌圈你和老王都过牌了。到了转牌（第四张），突然发出一张 A。老王原本很安静，现在突然下注了半个底池！",
    "hand": [
      "Ks",
      "Qd"
    ],
    "board": [
      "2c",
      "7h",
      "9s",
      "Ah"
    ],
    "options": [
      {
        "action": "跟注 (Call) 抓他偷鸡",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "angry",
        "sharky_feedback": "你手里连个对子都没有，就一个 K 高牌！别人看到 A 敢下注，大概率是击中 A 了。空城计不是这么唱的！"
      },
      {
        "action": "光速弃牌 (Fold)",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "反应够快！转牌出 A 是典型的'惊悚牌'。既然自己没中，绝不给对方送一分钱。"
      }
    ]
  },
  {
    "level_id": 202,
    "title": "河牌圈：价值下注的艺术",
    "scenario": "河牌（最后一张）发完了。你运气爆棚击中了【三条 8】。老王一路都在跟着你交钱。现在轮到你最后表态。",
    "hand": [
      "8s",
      "8h"
    ],
    "board": [
      "2d",
      "8c",
      "Kc",
      "Jd",
      "5s"
    ],
    "options": [
      {
        "action": "All-in (全押) 吓死他",
        "is_correct": false,
        "hp_change": -15,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "粗糙！太粗糙了！你突然 All-in，老王如果手里只有一对 K，他肯定会被吓跑。这就叫把客户全吓跑了！"
      },
      {
        "action": "下注 1/3 底池 (薄价值)",
        "is_correct": true,
        "hp_change": 25,
        "sharky_emotion": "laugh",
        "sharky_feedback": "高手风范！这就叫【拿价值】。下个小注，让老王觉得'哎呀好便宜，我抓他一次'，乖乖把钱送给你。"
      },
      {
        "action": "过牌 (Check) 假装没中",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "angry",
        "sharky_feedback": "已经是最后一张牌了！你过牌，老王也过牌，这局直接结束。你拿着大牌一分钱没多赢，简直是暴殄天物！"
      }
    ]
  },
  {
    "level_id": 203,
    "title": "买花破产的边缘",
    "scenario": "转牌圈。你手里两张黑桃，桌上两张黑桃。你差一张就能凑成【同花】。但老王下了一个比底池还大的超池下注（Overbet）！",
    "hand": [
      "As",
      "10s"
    ],
    "board": [
      "2s",
      "7d",
      "9s",
      "Kh"
    ],
    "options": [
      {
        "action": "跟注 (Call) 相信光！",
        "is_correct": false,
        "hp_change": -30,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "光会把你照得倾家荡产！买同花的概率只有 20%，老王下了超池注，你的【赔率】根本算不过来。这是数学题，别搞信仰！"
      },
      {
        "action": "弃牌 (Fold) 骂骂咧咧退出",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "完美规避致命伤！懂得在赔率不对时放弃听牌，你就已经领先 80% 的凭感觉打牌的韭菜了。"
      }
    ]
  },
  {
    "level_id": 301,
    "title": "持续下注 (C-Bet) 的威压",
    "scenario": "翻牌前你拿着 AK 加注，老王跟注。翻牌发出了 2、7、J，你完美避开了所有牌，连个对子都没中。老王过牌了，你怎么办？",
    "hand": [
      "As",
      "Kd"
    ],
    "board": [
      "2c",
      "7h",
      "Js"
    ],
    "options": [
      {
        "action": "过牌 (Check) 认怂",
        "is_correct": false,
        "hp_change": -15,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "你翻牌前那么凶，现在怂什么？这牌面这么干，你没中，老王大概率也没中。你一示弱，底池就白送他了！"
      },
      {
        "action": "下注 1/3 底池 (C-Bet)",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "漂亮！这就叫【持续下注】。你翻牌前是带头大哥，翻牌后只要牌面不危险，闭着眼睛也要打一枪，直接把他的烂牌打飞！"
      }
    ]
  },
  {
    "level_id": 302,
    "title": "高级魔法：半诈唬",
    "scenario": "转牌圈。你手里是两张红桃，桌上两张红桃。虽然你现在只是个高牌，但差一张就能成同花。此时大家都过牌，轮到你了。",
    "hand": [
      "Qh",
      "Jh"
    ],
    "board": [
      "2h",
      "8c",
      "5h",
      "Ks"
    ],
    "options": [
      {
        "action": "下大注 (Bet) 夺取主动权",
        "is_correct": true,
        "hp_change": 25,
        "sharky_emotion": "laugh",
        "sharky_feedback": "高级操作！这叫【半诈唬】。就算现在被抓了，河牌还有 20% 几率变成同花反杀。既能把人吓跑，又有备胎，赢两次的机会！"
      },
      {
        "action": "过牌 (Check) 免费看下一张",
        "is_correct": false,
        "hp_change": -10,
        "sharky_emotion": "angry",
        "sharky_feedback": "太被动了！虽然免费看牌很香，但你也失去了直接赢下底池的机会。买牌的人要掌握命运，不能当舔狗！"
      }
    ]
  },
  {
    "level_id": 303,
    "title": "抓鸡大队：识破老王的演技",
    "scenario": "河牌圈。桌上有三张黑桃，但你没有黑桃，你只有一个顶对（一对 A）。老王一路过牌，河牌突然全押 (All-in)！",
    "hand": [
      "Ah",
      "Qd"
    ],
    "board": [
      "As",
      "7s",
      "4c",
      "2s",
      "9d"
    ],
    "options": [
      {
        "action": "秒 Call (跟注) 抓他！",
        "is_correct": false,
        "hp_change": -30,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "送命题！老王一路过牌，河牌突然发疯，大概率是刚凑成黑桃同花！拿个破顶对去抓这种鸡，倾家荡产！"
      },
      {
        "action": "弃牌 (Fold) 欣赏他的表演",
        "is_correct": true,
        "hp_change": 15,
        "sharky_emotion": "cool",
        "sharky_feedback": "顶级纪律！他的故事讲得很圆满，这种时候坚决不当'好奇宝宝'。能扔掉顶对，你已经毕业了！"
      }
    ]
  },
  {
    "level_id": 401,
    "title": "老实人的愤怒",
    "scenario": "同桌有个大叔，整整两个小时没玩过一手牌。现在他突然加注，并且在你反加之后，他直接 All-in 全押了！你手里是 JJ。",
    "hand": [
      "Js",
      "Jc"
    ],
    "board": [],
    "options": [
      {
        "action": "接了！JJ 很大了！",
        "is_correct": false,
        "hp_change": -40,
        "sharky_emotion": "angry",
        "sharky_feedback": "你撞在钢板上了！【大紧人】两小时不玩，一玩就是命。他手里不是 AA 就是 KK，你的 JJ 过去就是送人头！"
      },
      {
        "action": "弃牌 (Fold) 惹不起躲得起",
        "is_correct": true,
        "hp_change": 20,
        "sharky_emotion": "cool",
        "sharky_feedback": "人间清醒！记住：当万年不玩牌的老实人突然发飙，无论你手里是什么牌，只要不是 AA，赶紧跑！"
      }
    ]
  },
  {
    "level_id": 402,
    "title": "短码的尊严",
    "scenario": "你的筹码快输光了，只剩下 10 个大盲注（极短码）。发牌给你发了 A-10。",
    "hand": [
      "Ah",
      "10c"
    ],
    "board": [],
    "options": [
      {
        "action": "平跟 (Call) 慢慢打",
        "is_correct": false,
        "hp_change": -20,
        "sharky_emotion": "facepalm",
        "sharky_feedback": "都要饿死了还慢慢吃？筹码越少，越没有资格看翻牌。平跟进去一旦没中，你连挣扎的筹码都没了！"
      },
      {
        "action": "直接全押 (All-in)",
        "is_correct": true,
        "hp_change": 25,
        "sharky_emotion": "laugh",
        "sharky_feedback": "这就是短码的浪漫！筹码少于 15 个大盲时，拿到好牌直接推，不给他们操作空间。生死看淡，不服就干！"
      }
    ]
  },
  {
    "level_id": 403,
    "title": "终极抉择：泡沫期的噩梦",
    "scenario": "锦标赛马上就要进圈拿奖金了（泡沫期）。你是中等筹码，你手里是 AK。全场筹码最多的土豪，无脑把你 All-in 了，逼你做决定。",
    "hand": [
      "Ad",
      "Ks"
    ],
    "board": [],
    "options": [
      {
        "action": "死磕到底 (Call) 我是 AK！",
        "is_correct": false,
        "hp_change": -50,
        "sharky_emotion": "angry",
        "sharky_feedback": "被土豪拿捏了！马上发奖金了，土豪就是利用你想苟活的心理压榨你。万一输了，你一分钱拿不到！这时候保命比赢牌重要！"
      },
      {
        "action": "忍痛弃牌 (Fold) 苟进奖励圈",
        "is_correct": true,
        "hp_change": 30,
        "sharky_emotion": "cool",
        "sharky_feedback": "大局观拉满！这叫【ICM 压力】。在这种关键节点，哪怕你是 AK，面对筹码王的碾压也要学会认怂，先拿保底奖金再说！"
      }
    ]
  },
  {
    "level_id": 501,
    "title": "庄位的『特权』",
    "scenario": "你在庄位 (BTN) 拿到 7♠ 8♠。前面所有人弃牌。小盲位是个很保守的老头，大盲位是个心不在焉的新手。",
    "hand": ["7s", "8s"],
    "board": [],
    "options": [
      { "action": "偷他！加注 (Raise) 到 3bb", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "在庄位，你的牌其实不重要，重要的是你的位置！面对保守或业余的盲注位，78s 这种有发育潜力的牌必须加注。就算他们跟注，翻牌后你依然有最后行动的巨大优势。" },
      { "action": "太小了，弃牌 (Fold)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "在庄位面对弱盲注，78s 正是偷盲的好牌，弃牌太浪费位置优势了。" }
    ]
  },
  {
    "level_id": 502,
    "title": "美丽的『自杀』",
    "scenario": "你在中间位置 (MP) 拿到 Q♥ J♥。前面有一个激进的玩家加注到 4bb，紧接着另一个玩家反加（3-Bet）到 12bb。",
    "hand": ["Qh", "Jh"],
    "board": [],
    "options": [
      { "action": "同花连张，跟注 (Call) 看看", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "QJs 在加注+反加的火力网下就是炮灰，极易被 AQ、KQ 主导，别在这里送 12bb。" },
      { "action": "神仙打架，弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "QJs 确实漂亮，但在『加注+反加』的火力网下，它就是炮灰。你现在的胜率极低，且极其容易被 AQ, KQ 这种牌主导。野生票友最爱在这里『看一看』，一看就看掉 12bb。" }
    ]
  },
  {
    "level_id": 503,
    "title": "大盲位的『尊严』",
    "scenario": "你在大盲位 (BB) 拿到 K♦ 5♦。庄位加注到 2.2bb，小盲弃牌。你需要补 1.2bb 就能看翻牌。",
    "hand": ["Kd", "5d"],
    "board": [],
    "options": [
      { "action": "赔率不错，跟注 (Call) 防守", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "在大盲位，你已经放了 1bb 进去了。现在的赔率非常诱人，Kxs 同花牌在防守范围内是标准的。虽然你位置不好，但这是为了防止庄位无底线地偷你盲注。" },
      { "action": "K5 太弱，弃牌 (Fold)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "大盲位补 1.2bb 看牌赔率很好，K5s 同花在防守范围内，弃牌等于白送盲注。" }
    ]
  },
  {
    "level_id": 504,
    "title": "别做『平跟侠』",
    "scenario": "你在中间位置拿到 A♠ 10♦。前面没有人行动。你觉得 A10 还行，但又不想打太大，打算平跟 (Limp) 1bb 进去。",
    "hand": ["As", "10d"],
    "board": [],
    "options": [
      { "action": "平跟 (Call) 1bb 进去", "is_correct": false, "hp_change": -15, "sharky_emotion": "angry", "sharky_feedback": "平跟会暴露你牌力中等，还给后面的人便宜入局收割你的机会。" },
      { "action": "要么加注 (Raise)，要么弃牌", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "『平跟』是弱者的标志！它会告诉全桌你有一张中等强度的牌，且给了后面的人超低代价入局收割你的机会。要么加注拿回主动权，要么弃牌，别在那儿猥琐发育。" }
    ]
  },
  {
    "level_id": 505,
    "title": "小对子的『冷箭』",
    "scenario": "你在按钮位 (BTN) 拿到 2♣ 2♦。前面有一个人加注到 3bb，此时你们的筹码都非常深（150bb）。",
    "hand": ["2c", "2d"],
    "board": [],
    "options": [
      { "action": "跟注 (Call) 进去中 Set", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "这叫『投机性跟注』。虽然 22 几乎赢不了任何摊牌，但只要翻牌出一个 2，你就能神不知鬼不觉地清空对手。深筹码是这种打法的唯一前提。" },
      { "action": "22 太小，弃牌 (Fold)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "深筹码时 22 跟注进去中 Set 是标准打法，弃牌浪费了投机机会。" }
    ]
  },
  {
    "level_id": 506,
    "title": "『废柴』A 牌",
    "scenario": "你在枪口位 (UTG) 第一行动。低头一看 A♣ 3♦。你觉得有个 A 就能玩，准备加注。",
    "hand": ["Ac", "3d"],
    "board": [],
    "options": [
      { "action": "加注 (Raise) 2.5bb", "is_correct": false, "hp_change": -15, "sharky_emotion": "angry", "sharky_feedback": "枪口位玩 A3o 等于送钱，后面随便一个 A4+ 就主导你。" },
      { "action": "无情弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "在枪口位玩 A3o 是嫌钱多。你后面有 8 个人，只要任何一个人有 A4+, 你就被主导了。这种牌在早位就是纯垃圾，扔了它，你的账户会感谢你。" }
    ]
  },
  {
    "level_id": 507,
    "title": "谁的『主场』？",
    "scenario": "你加注，老王在大盲跟注。翻牌：2♥ 3♦ 5♠。你手里是 A♣ K♠。你准备在这个干枯的小牌面上持续下注 (C-Bet)。",
    "hand": ["Ac", "Ks"],
    "board": ["2h", "3d", "5s"],
    "options": [
      { "action": "下注 (Bet) 1/3 底池", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "虽然你没中，但这个面对于加注者非常有利。老王手里很难有大对子，你的 AK 在这里依然有很强的胜率，且一个小下注通常就能让他的垃圾牌弃掉。" },
      { "action": "过牌 (Check) 放弃", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "干枯小牌面正是 C-Bet 的好时机，过牌等于把底池让给对手。" }
    ]
  },
  {
    "level_id": 508,
    "title": "半诈唬的艺术",
    "scenario": "翻牌圈。你手里是 J♦ Q♦，公共牌是 10♦ 2♦ 5♣。你击中了同花大抽牌。此时老王下注了半池。",
    "hand": ["Jd", "Qd"],
    "board": ["10d", "2d", "5c"],
    "options": [
      { "action": "跟注 (Call) 慢慢买", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "有强听牌时加注可以立刻赢底池或补成后拿更大价值，只跟注太被动。" },
      { "action": "加注 (Raise) 反击他", "is_correct": true, "hp_change": 20, "sharky_emotion": "laugh", "sharky_feedback": "这就是典型的『半诈唬』。你有很高的几率在转牌补成同花，通过加注你现在就能赢下底池，或者在下一张牌补成时拿更大的价值。别只学会被动跟注。" }
    ]
  },
  {
    "level_id": 509,
    "title": "转牌出的『惊悚牌』",
    "scenario": "翻牌：J♠ 10♠ 3♦。你手里是 J♦ Q♣（顶对）。你翻牌下注，老王跟注。转牌出一张 A♥。老王突然反客为主，直接下了一个 80% 底池的重注。",
    "hand": ["Jd", "Qc"],
    "board": ["Js", "10s", "3d", "Ah"],
    "options": [
      { "action": "怕什么，顶对不能怂。跟注 (Call)", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "转牌出 A 后顶对 J 极易被 AX 反超，老王敢重注多半已中牌，跟注等于送钱。" },
      { "action": "A 出来了，局势变了。弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "转牌的 A 是典型的『惊悚牌』。老王的跟注范围里有大量的 AX。他敢在 A 出来后主动重注，你的顶对 J 瞬间变成了废纸。这种时候强行跟注就是往火坑里跳。" }
    ]
  },
  {
    "level_id": 510,
    "title": "别让『超强牌』空过",
    "scenario": "河牌圈。公共牌：2♠ 7♦ 10♥ 5♣ K♠。你手里是 K♣ 10♣（两对）。底池 400。老王是个喜欢用弱对子跟注的『电话站』，他选择了过牌。",
    "hand": ["Kc", "10c"],
    "board": ["2s", "7d", "10h", "5c", "Ks"],
    "options": [
      { "action": "稳妥起见，跟着过牌 (Check)", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "两对在手、对手爱跟注，过牌等于白送价值，必须下注拿利润。" },
      { "action": "价值下注 (Bet) 260", "is_correct": true, "hp_change": 20, "sharky_emotion": "laugh", "sharky_feedback": "你拿到了两对，老王又是那种不舍得扔牌的人。如果你过牌，你就白白损失了 200 多块的利润。河牌拿到了绝对领先的牌，必须『张嘴要钱』，这是盈利的关键！" }
    ]
  },
  {
    "level_id": 511,
    "title": "昂贵的『买花』单",
    "scenario": "转牌圈。公共牌：A♠ 9♠ 2♦ J♣。你手里是 K♠ Q♠。你还差一张黑桃凑成同花。底池 300，老王直接全押了 600。",
    "hand": ["Ks", "Qs"],
    "board": ["As", "9s", "2d", "Jc"],
    "options": [
      { "action": "同花就在眼前！跟注 (Call)", "is_correct": false, "hp_change": -25, "sharky_emotion": "angry", "sharky_feedback": "花 600 赢 900，胜率不到 20%，赔率算不过来，跟注等于买彩票。" },
      { "action": "赔率算不过来，弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "算算账吧！你只有 9 张补牌，胜率不到 20%。老王让你花 600 赢 900，这买卖亏到姥姥家了。野生票友最爱在这里『赌命』，赌赢了爽一下，赌输了洗洗睡。咱们是来赢钱的，不是来买彩票的。" }
    ]
  },
  {
    "level_id": 512,
    "title": "识破『空气』偷鸡",
    "scenario": "河牌圈。公共牌：A♣ K♦ 2♠ 7♥ 3♣。你手里是 A♠ 5♠（顶对弱踢脚）。底池 200。老王在翻牌和转牌都过牌，河牌突然暴起下注 500（超池偷鸡感极强）。",
    "hand": ["As", "5s"],
    "board": ["Ac", "Kd", "2s", "7h", "3c"],
    "options": [
      { "action": "他肯定没牌，抓他！跟注 (Call)", "is_correct": true, "hp_change": 20, "sharky_emotion": "laugh", "sharky_feedback": "老王前两条街都表现得很弱，河牌突然重注，极大概率是在利用这张 A 偷鸡。你的顶对虽然踢脚弱，但在这个面足以抓掉绝大多数的诈唬。这时候怂了，你就成了他的『提款机』。" },
      { "action": "超池太吓人，弃牌 (Fold)", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "对手前两条街弱、河牌超池，多为诈唬，顶对 A 应抓鸡而非弃牌。" }
    ]
  },
  {
    "level_id": 513,
    "title": "『三条』的恐惧",
    "scenario": "转牌圈。公共牌：4♠ 4♦ 9♥ J♠。你手里是 4♣ 5♣（明三条）。你领先下注，老王突然加注到了 3 倍。这个老王平时非常保守。",
    "hand": ["4c", "5c"],
    "board": ["4s", "4d", "9h", "Js"],
    "options": [
      { "action": "我是三条我怕谁？反加 (Raise)", "is_correct": false, "hp_change": -25, "sharky_emotion": "angry", "sharky_feedback": "踢脚小的三条，面对保守玩家的加注，极可能撞上更大三条或葫芦，反加危险。" },
      { "action": "保守派加注必有妖。跟注 (Call) 观察", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "你虽然是三条，但踢脚极小。保守的老王敢在 4-4 这种面上加注，他手里极大概率是 A4, K4 甚至 99, JJ。这时候反加就是找死，先跟注看河牌，局势不对立马撤！" }
    ]
  },
  {
    "level_id": 514,
    "title": "薄价值的『艺术』",
    "scenario": "河牌圈。公共牌：Q♠ 8♦ 2♣ 5♥ J♠。你手里是 Q♦ 10♦。你一路领打，老王一路跟。河牌老王又过牌了。你觉得你领先，但怕被反抽。",
    "hand": ["Qd", "10d"],
    "board": ["Qs", "8d", "2c", "5h", "Js"],
    "options": [
      { "action": "稳一手，过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "领先时过牌等于放弃薄价值，小注 1/3 底池往往能多拿一档跟注。" },
      { "action": "小注 (Bet) 1/3 底池拿薄价值", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "这就是『薄价值 (Thin Value)』。老王手里可能有很多 8x 或者中对子。你下一小注，他大概率会因为『不贵』而跟注。积少成多，职业选手和票友的区别就在这 1/3 的注码里。" }
    ]
  },
  {
    "level_id": 515,
    "title": "同花面的『幻觉』",
    "scenario": "转牌圈。公共牌：2♥ 7♥ 9♥ K♦。你手里是 A♦ Q♥。你只有一张红桃 Q，指望河牌出红桃。老王直接下注了满池。",
    "hand": ["Ad", "Qh"],
    "board": ["2h", "7h", "9h", "Kd"],
    "options": [
      { "action": "还有一张 Q♥ 能追。跟注 (Call)", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "单张追花概率低，且可能被更大同花反杀，满池下注下跟注不划算。" },
      { "action": "单张追花，纯属败家。弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "单张红桃追花，中奖概率只有 20% 左右。更可怕的是，就算出了红桃，如果老王手里有红桃 A 或红桃 J，你还是输。这种『二手同花』千万别追，追到最后全是泪。" }
    ]
  },
  {
    "level_id": 516,
    "title": "被『公对』吓到了？",
    "scenario": "河牌圈。公共牌：A♠ A♦ 7♣ 2♥ 5♠。你手里是 K♠ K♥。你一路加注，老王一路跟。河牌老王过牌了。你怕他手里有那张 A。",
    "hand": ["Ks", "Kh"],
    "board": ["As", "Ad", "7c", "2h", "5s"],
    "options": [
      { "action": "万一他有 A 呢？过牌 (Check)", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "对手一路被动跟注更像 7x 或中对，KK 仍大概率领先，应下注拿价值。" },
      { "action": "大概率他只有 7x。下注 (Bet) 价值", "is_correct": true, "hp_change": 20, "sharky_emotion": "laugh", "sharky_feedback": "虽然公对 A 很吓人，但如果老王真有 A，他翻牌或转牌通常就会表现出强力。他一路被动跟注，手里更有可能是 7x 或中对子。不要被桌面上的牌吓住，相信你的 KK 依然是领先的，拿价值！" }
    ]
  },
  {
    "level_id": 517,
    "title": "两对的『陷阱』",
    "scenario": "转牌圈。公共牌：J♠ 9♦ 4♣ 10♥。你手里是 J♣ 9♣（两对）。看起来很强，但这张 10 让顺子面变得非常危险。老王直接推了全押。",
    "hand": ["Jc", "9c"],
    "board": ["Js", "9d", "4c", "10h"],
    "options": [
      { "action": "两对在手，天下我有。跟注 (Call)", "is_correct": false, "hp_change": -30, "sharky_emotion": "angry", "sharky_feedback": "10 成顺子面，KQ/Q8/87 等都能反超，两对在湿面上全押接注很危险。" },
      { "action": "顺子面成了，两对不保。弃牌 (Fold)", "is_correct": true, "hp_change": 20, "sharky_emotion": "cool", "sharky_feedback": "这张 10 极其致命！任何 KQ, Q8, 87 甚至单张 8 都能反超你。在这么湿滑的转牌面，老王敢全押，你的两对已经不再是领先牌了。学会放下『看起来很美』的手牌。" }
    ]
  },
  {
    "level_id": 518,
    "title": "河牌的『反带』",
    "scenario": "河牌圈。你一直处于被动，手里是 A♣ 2♣。公共牌：A♠ 10♦ 5♥ 2♦ Q♠。你中了 A2 两对。老王突然在第一位置下注了 1/4 底池。",
    "hand": ["Ac", "2c"],
    "board": ["As", "10d", "5h", "2d", "Qs"],
    "options": [
      { "action": "小注必有诈，跟注 (Call) 看看", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "两对足够强，对手 1/4 小注多为阻挡下注，应加注拿足价值。" },
      { "action": "两对足够强，加注 (Raise) 他", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "老王这种 1/4 的小注通常是『阻挡下注』，想便宜看摊牌。你的 A2 两对在这里是非常强的，必须通过加注来惩罚他的软弱，拿走你应该拿的价值。" }
    ]
  },
  {
    "level_id": 519,
    "title": "高牌不是对子",
    "scenario": "翻牌前。你在中间位置拿到 K♠ 9♦。前面没人加注。你会怎么行动？",
    "hand": ["Ks", "9d"],
    "board": [],
    "options": [
      { "action": "加注 (Raise) 抢底池", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "K9o 在中间位置很尴尬，加注容易被后位反加，不如弃牌或偶尔跟注。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "K9 不同花在多人局里容易被主导，位置一般时弃牌最稳。先学会少玩边缘牌。" }
    ]
  },
  {
    "level_id": 520,
    "title": "小对子看翻牌",
    "scenario": "你在后位拿到 5♥ 5♦。前面一人平跟 1bb。底池很小，你跟注进去看翻牌合理吗？",
    "hand": ["5h", "5d"],
    "board": [],
    "options": [
      { "action": "合理，跟注 (Call) 中 Set", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "小对子便宜看翻牌、中三条再打，是标准打法。代价低时跟注没问题。" },
      { "action": "55 太弱，弃牌 (Fold)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "只花 1bb 看翻牌，中三条回报很大，弃牌太保守了。" }
    ]
  },
  {
    "level_id": 521,
    "title": "大盲的免费牌",
    "scenario": "你在大盲位。前面所有人弃牌，只有庄位平跟。你拿到 6♣ 7♣，不用再补钱。你会？",
    "hand": ["6c", "7c"],
    "board": [],
    "options": [
      { "action": "过牌 (Check) 免费看翻牌", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "已经在大盲里了，不用再花钱，同花连张免费看翻牌很划算。" },
      { "action": "加注 (Raise) 抢主动权", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "免费看牌的机会不要浪费，加注会把底池搞大、位置还差，不划算。" }
    ]
  },
  {
    "level_id": 522,
    "title": "翻牌中顶对遇加注",
    "scenario": "翻牌 K♠ 8♦ 2♣。你手里 K♦ 9♣（顶对）。你下注，对手反加。他范围里有很多 Kx 比你大。",
    "hand": ["Kd", "9c"],
    "board": ["Ks", "8d", "2c"],
    "options": [
      { "action": "顶对不能弃，跟注 (Call)", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "踢脚 9 很弱，对手反加常是 AK/KQ，你跟注多半在送价值。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "顶对弱踢脚被反加时要舍得弃牌，否则容易变成『支付站』。" }
    ]
  },
  {
    "level_id": 523,
    "title": "转牌顺子听牌",
    "scenario": "转牌圈。公共牌 9♥ 10♦ 3♣ J♠。你手里 Q♣ K♣（两头顺听牌）。对手下注半池。底池赔率够跟注吗？",
    "hand": ["Qc", "Kc"],
    "board": ["9h", "10d", "3c", "Js"],
    "options": [
      { "action": "跟注 (Call)，赔率够", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "两头顺 8 张补牌，胜率约 32%，半池下注赔率通常够跟一枪。" },
      { "action": "弃牌 (Fold)，太危险", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "两头顺是强听牌，半池下注时跟注多数时候是正期望。" }
    ]
  },
  {
    "level_id": 524,
    "title": "河牌过牌后的价值",
    "scenario": "河牌圈。公共牌 A♦ 4♣ 7♠ 2♥ 9♣。你手里 A♠ 7♦（两对）。对手过牌。底池 200。",
    "hand": ["As", "7d"],
    "board": ["Ad", "4c", "7s", "2h", "9c"],
    "options": [
      { "action": "过牌 (Check) 摊牌", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "两对在河牌要下注拿价值，过牌等于白送可能拿到的筹码。" },
      { "action": "下注 (Bet) 约 2/3 底池", "is_correct": true, "hp_change": 18, "sharky_emotion": "laugh", "sharky_feedback": "两对是强牌，对手过牌给你机会，下注 120–140 让弱 A 或中对子跟注。" }
    ]
  },
  {
    "level_id": 525,
    "title": "转牌公对面",
    "scenario": "转牌圈。公共牌 Q♠ Q♦ 5♣ 2♥。你手里 A♣ Q♥（明三条）。你下注，对手加注。",
    "hand": ["Ac", "Qh"],
    "board": ["Qs", "Qd", "5c", "2h"],
    "options": [
      { "action": "反加 (Raise) 全押", "is_correct": false, "hp_change": -25, "sharky_emotion": "angry", "sharky_feedback": "公对 Q 面上对手加注，可能有 Q 或 22/55。反加会打跑弱牌、只留下比你大的。" },
      { "action": "跟注 (Call) 控池", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "有葫芦可能时先跟注，河牌再根据行动决定，避免把对手打跑或送大锅。" }
    ]
  },
  {
    "level_id": 526,
    "title": "河牌小注抓鸡",
    "scenario": "河牌圈。公共牌 3♠ 8♦ J♥ 2♣ 4♦。你手里 J♦ 10♦（顶对）。对手下注 1/4 底池。他翻牌转牌都过牌。",
    "hand": ["Jd", "10d"],
    "board": ["3s", "8d", "Jh", "2c", "4d"],
    "options": [
      { "action": "弃牌 (Fold)，怕他中顺", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "他前两条街都过牌，河牌小注多为试探或偷鸡，顶对应跟注抓鸡。" },
      { "action": "跟注 (Call) 抓鸡", "is_correct": true, "hp_change": 15, "sharky_emotion": "laugh", "sharky_feedback": "对手故事不连贯，河牌小注常是弱牌或诈唬，顶对跟注是合理的抓鸡。" }
    ]
  },
  {
    "level_id": 527,
    "title": "转牌过牌后的诈唬",
    "scenario": "转牌圈。公共牌 2♠ 6♥ 9♦ K♣。你手里 A♥ 3♥（A 高）。你和对手都过牌。河牌发出 4♠，对手过牌。你会？",
    "hand": ["Ah", "3h"],
    "board": ["2s", "6h", "9d", "Kc", "4s"],
    "options": [
      { "action": "过牌 (Check)，没中牌", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "对手两条街过牌示弱，你 A 高可以尝试小注诈唬偷池，过牌等于放弃。" },
      { "action": "下注 (Bet) 小注偷池", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "对手连续过牌，范围弱。河牌下一个小注，常能打跑弱对子或高牌，偷下底池。" }
    ]
  },
  {
    "level_id": 528,
    "title": "同花 vs 顺子谁大",
    "scenario": "【牌力】公共牌 2♥ 5♥ 9♥ J♥ K♦，对手亮出 A♥ 3♥（同花）。你手里 10♠ 9♦ 8♣ 7♦ 6♥（顺子）。谁赢？",
    "hand": ["10s", "9d", "8c", "7d", "6h"],
    "board": ["2h", "5h", "9h", "Jh", "Kd"],
    "options": [
      { "action": "我的顺子大", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "同花大于顺子！记住牌力顺序：同花 > 顺子 > 三条 > 两对。" },
      { "action": "对手的同花大", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "对！同花永远大于顺子，这是德扑牌力基础。" }
    ]
  },
  {
    "level_id": 529,
    "title": "枪口位该不该玩",
    "scenario": "你在枪口位 (UTG) 拿到 10♠ 10♦。后面还有 7 个人没行动。你会？",
    "hand": ["Ts", "Td"],
    "board": [],
    "options": [
      { "action": "加注 (Raise)，TT 够强", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "口袋 10 在枪口位可以加注建池，被 3-bet 再根据对手决定跟注或弃牌。" },
      { "action": "弃牌 (Fold)，位置太差", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "TT 在枪口位是值得玩的牌，直接弃牌太浪费了。" }
    ]
  },
  {
    "level_id": 530,
    "title": "盲注是什么",
    "scenario": "【规则】每局开始前，庄家左边两位玩家必须强制投入一定筹码，他们还没看牌。这两笔钱叫什么？",
    "hand": [],
    "board": [],
    "options": [
      { "action": "小盲 (SB) 和大盲 (BB)", "is_correct": true, "hp_change": 10, "sharky_emotion": "laugh", "sharky_feedback": "对！小盲、大盲强制放钱进池，制造底池让大家抢。" },
      { "action": "入场费", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "正式说法是盲注 (Blinds)，分小盲和大盲。" }
    ]
  },
  {
    "level_id": 531,
    "title": "翻牌 C-Bet 被跟注",
    "scenario": "翻牌前你加注，老王跟注。翻牌 4♣ 7♠ 10♦。你下注（C-Bet）半池，老王跟注。转牌 2♥。你会？",
    "hand": ["As", "Kd"],
    "board": ["4c", "7s", "10d", "2h"],
    "options": [
      { "action": "再下注 (Bet) 延续压力", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "转牌 2 是空白牌，继续下注可以打跑很多弱牌，或为河牌诈唬铺路。" },
      { "action": "过牌 (Check) 放弃", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "作为翻前加注者，转牌继续下注能保持主动权，过牌太被动。" }
    ]
  },
  {
    "level_id": 532,
    "title": "听同花遇重注",
    "scenario": "转牌圈。公共牌 A♠ 9♠ 2♦ 3♣。你手里 K♠ Q♠（听同花）。底池 100，对手下注 80。",
    "hand": ["Ks", "Qs"],
    "board": ["As", "9s", "2d", "3c"],
    "options": [
      { "action": "跟注 (Call) 80", "is_correct": false, "hp_change": -18, "sharky_emotion": "angry", "sharky_feedback": "花 80 赢 260，胜率约 18%，赔率不够。听同花要算清楚再跟。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "赔率不支持跟注时，果断弃牌才是正解。" }
    ]
  },
  {
    "level_id": 533,
    "title": "河牌对手 Donk 下注",
    "scenario": "河牌圈。公共牌 K♦ 8♣ 3♥ 5♠ 2♦。你手里 K♣ 9♣（顶对）。对手在河牌率先下注半池。他翻牌转牌都跟注。",
    "hand": ["Kc", "9c"],
    "board": ["Kd", "8c", "3h", "5s", "2d"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "顶对踢脚一般，对手河牌 Donk 可能是价值或诈唬，跟注比加注稳妥，避免被反加。" },
      { "action": "加注 (Raise) 榨价值", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "K9 踢脚弱，加注会打跑诈唬、只留下比你大的牌，跟注更安全。" }
    ]
  },
  {
    "level_id": 534,
    "title": "转牌顺子面全押",
    "scenario": "转牌圈。公共牌 9♠ 10♦ J♥ 4♣。你手里 K♦ Q♦（顶顺）。对手全押。他范围里有很多顺子、Set。",
    "hand": ["Kd", "Qd"],
    "board": ["9s", "10d", "Jh", "4c"],
    "options": [
      { "action": "跟注 (Call)，顶顺不能弃", "is_correct": true, "hp_change": 18, "sharky_emotion": "laugh", "sharky_feedback": "顶顺是超强牌，对手可能有次顺或 Set，多数时候你跟注是领先的。" },
      { "action": "弃牌 (Fold)，怕 Set", "is_correct": false, "hp_change": -20, "sharky_emotion": "facepalm", "sharky_feedback": "顶顺在这种面几乎不会落后，弃牌太保守了。" }
    ]
  },
  {
    "level_id": 535,
    "title": "河牌公对 A 上的价值",
    "scenario": "河牌圈。公共牌 A♠ A♦ 6♣ 4♥ 2♠。你手里 A♣ K♠（明三条 A）。对手过牌。底池 300。",
    "hand": ["Ac", "Ks"],
    "board": ["As", "Ad", "6c", "4h", "2s"],
    "options": [
      { "action": "下注 (Bet) 约 1/2 底池", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "顶葫芦要下注拿价值，1/2 底池让弱 A 或 6x 有机会跟注。" },
      { "action": "过牌 (Check) 控池", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "顶葫芦是怪兽牌，过牌等于放弃大量价值。" }
    ]
  },
  {
    "level_id": 536,
    "title": "河牌抓超池诈唬",
    "scenario": "河牌圈。公共牌 7♣ 8♣ 9♦ 2♥ 3♠。你手里 10♦ 10♠（中对）。对手下注 2 倍底池（超池）。他翻牌加注、转牌下注，故事很凶。",
    "hand": ["Td", "Ts"],
    "board": ["7c", "8c", "9d", "2h", "3s"],
    "options": [
      { "action": "跟注 (Call) 抓鸡", "is_correct": false, "hp_change": -25, "sharky_emotion": "angry", "sharky_feedback": "牌面 789 顺子面，你只有中对。对手超池常是顺子或 Set，跟注多半送钱。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 15, "sharky_emotion": "cool", "sharky_feedback": "危险面 + 超池下注，中对不足以抓鸡，弃牌是纪律。" }
    ]
  },
  {
    "level_id": 537,
    "title": "三条比两对大",
    "scenario": "【牌力】公共牌 8♦ 2♠ 3♣ K♥ A♦。你手里 8♠ 8♥（三条 8），对手亮出 A♠ K♣（两对 A 和 K）。谁赢？",
    "hand": ["8s", "8h"],
    "board": ["8d", "2s", "3c", "Kh", "Ad"],
    "options": [
      { "action": "我的三条 8 大", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "三条大于两对，这是牌力顺序基础。" },
      { "action": "对手两对大", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "三条永远大于两对，再大的两对也打不过三条。" }
    ]
  },
  {
    "level_id": 538,
    "title": "后位拿到 AJo",
    "scenario": "你在庄家位 (BTN) 拿到 A♠ J♦。前面两人弃牌，一人平跟。你会？",
    "hand": ["As", "Jd"],
    "board": [],
    "options": [
      { "action": "加注 (Raise) 隔离", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "庄位 AJo 可以加注，把平跟者打走或建池，位置好时要有侵略性。" },
      { "action": "平跟 (Call) 看翻牌", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "庄位拿 AJo 平跟太弱，加注才能利用位置优势。" }
    ]
  },
  {
    "level_id": 539,
    "title": "All-in 是什么意思",
    "scenario": "【术语】玩家把面前所有筹码一次性推进底池，这个动作叫什么？",
    "hand": [],
    "board": [],
    "options": [
      { "action": "All-in（全押）", "is_correct": true, "hp_change": 10, "sharky_emotion": "laugh", "sharky_feedback": "对！All-in 就是全押，把筹码推光。" },
      { "action": "加注 (Raise)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "全押有专门说法叫 All-in，和普通加注不同。" }
    ]
  },
  {
    "level_id": 540,
    "title": "翻牌中底对遇下注",
    "scenario": "翻牌 9♦ 4♣ 2♥。你手里 4♠ 4♥（底 Set）。你下注，对手反加。他可能有什么？",
    "hand": ["4s", "4h"],
    "board": ["9d", "4c", "2h"],
    "options": [
      { "action": "跟注 (Call)，Set 不怕", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "底 Set 很强，对手可能是 99、超对或听牌，跟注或反加都可以，别弃。" },
      { "action": "弃牌 (Fold)，怕 99", "is_correct": false, "hp_change": -18, "sharky_emotion": "facepalm", "sharky_feedback": "Set 是超强牌，弃牌太离谱，对手范围里很多你能赢的牌。" }
    ]
  },
  {
    "level_id": 541,
    "title": "转牌单张听花",
    "scenario": "转牌圈。公共牌 K♥ 7♥ 2♦ 3♣。你手里 A♥ 5♦（只听一张红桃）。对手下注满池。底池 150。",
    "hand": ["Ah", "5d"],
    "board": ["Kh", "7h", "2d", "3c"],
    "options": [
      { "action": "跟注 (Call) 追花", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "单张听花只有 9 张补牌，约 18% 胜率，满池下注赔率不够，别追。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "单张听花在满池下注时赔率通常不够，弃牌是正解。" }
    ]
  },
  {
    "level_id": 542,
    "title": "河牌过牌-过牌后的价值",
    "scenario": "河牌圈。公共牌 6♦ 9♣ J♥ 2♠ 5♦。你手里 J♦ 9♦（两对）。你和对手都过牌到河牌。对手再次过牌。",
    "hand": ["Jd", "9d"],
    "board": ["6d", "9c", "Jh", "2s", "5d"],
    "options": [
      { "action": "下注 (Bet) 约 1/2 底池", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "两对在河牌要下注拿价值，对手过牌给你机会，下注让弱牌跟注。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "拿两对在河牌过牌等于放弃价值，一定要下注。" }
    ]
  },
  {
    "level_id": 543,
    "title": "转牌对手 Check-raise",
    "scenario": "转牌圈。公共牌 A♣ K♦ 3♠ 7♥。你手里 A♠ 10♥（顶对弱踢）。你下注，对手加注。他平时很少诈唬。",
    "hand": ["As", "10h"],
    "board": ["Ac", "Kd", "3s", "7h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -22, "sharky_emotion": "angry", "sharky_feedback": "紧手 Check-raise 多半是 AK、A7 或 Set，你的 A10 踢脚弱，跟注容易送价值。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "顶对弱踢面对紧手加注，弃牌是纪律，避免支付大锅。" }
    ]
  },
  {
    "level_id": 544,
    "title": "河牌薄价值下注",
    "scenario": "河牌圈。公共牌 10♠ 6♦ 2♣ 8♥ 4♠。你手里 10♦ 9♦（顶对）。对手过牌。你觉得他可能有很多 8x 或 6x。",
    "hand": ["Td", "9d"],
    "board": ["10s", "6d", "2c", "8h", "4s"],
    "options": [
      { "action": "下注 (Bet) 1/3 底池", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "顶对在这里可以打薄价值，小注让弱对子跟注，这就是薄价值。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "对手范围里有很多你能赢的牌，小注能多拿价值，过牌太亏。" }
    ]
  },
  {
    "level_id": 545,
    "title": "河牌面对迷你下注",
    "scenario": "河牌圈。公共牌 Q♣ 7♠ 3♥ 2♦ 9♣。你手里 Q♥ J♥（顶对）。对手下注 1/5 底池（迷你注）。",
    "hand": ["Qh", "Jh"],
    "board": ["Qc", "7s", "3h", "2d", "9c"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "对手迷你注常是阻挡下注或弱牌，顶对应加注拿更多价值。" },
      { "action": "加注 (Raise) 拿价值", "is_correct": true, "hp_change": 15, "sharky_emotion": "laugh", "sharky_feedback": "迷你注时加注能让弱 Q 或 7x 跟注，顶对要榨取价值。" }
    ]
  },
  {
    "level_id": 546,
    "title": "枪口位小对子",
    "scenario": "你在枪口位（UTG）拿到 5♦ 5♣。后面还有 7 个人没行动。底池只有盲注。",
    "hand": ["5d", "5c"],
    "board": [],
    "options": [
      { "action": "加注 (Raise) 抢盲", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "枪口位小对子加注，后面随便一个 3-Bet 你就得弃牌，位置太差别浪。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "小对子在枪口位很难打，弃牌保平安，等好位置再玩。" }
    ]
  },
  {
    "level_id": 547,
    "title": "大盲位防守",
    "scenario": "你在大盲位。前面所有人都弃牌，庄家位（BTN）加注 2.5 个大盲。你手里 9♥ 8♥。",
    "hand": ["9h", "8h"],
    "board": [],
    "options": [
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "同花连张在大盲对单次加注，赔率合适时可以跟注防守，别白送盲注。" },
      { "action": "跟注 (Call) 看翻牌", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "单挑时 98s 有可玩性，跟注看翻牌是合理防守。" }
    ]
  },
  {
    "level_id": 548,
    "title": "翻牌中中对子",
    "scenario": "翻牌 K♦ 8♣ 2♥。你手里 8♠ 7♠（中对）。对手下注半池。",
    "hand": ["8s", "7s"],
    "board": ["Kd", "8c", "2h"],
    "options": [
      { "action": "加注 (Raise) 打价值", "is_correct": false, "hp_change": -15, "sharky_emotion": "angry", "sharky_feedback": "中对子 K 面加注，Kx 会跟注你，你基本在送钱，跟注或弃牌更稳。" },
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "中对子跟一枪看转牌是标准打法，别把底池搞大。" }
    ]
  },
  {
    "level_id": 549,
    "title": "转牌听顺弃牌",
    "scenario": "转牌圈。公共牌 6♥ 7♦ 9♣ 2♠。你手里 8♣ 5♣（两头顺听牌）。对手下注满池。底池 200。",
    "hand": ["8c", "5c"],
    "board": ["6h", "7d", "9c", "2s"],
    "options": [
      { "action": "跟注 (Call) 追顺子", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "两头顺 8 张补牌约 32%，满池跟注赔率刚好够，可以跟一枪。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "两头顺在转牌赔率通常够跟注一次，直接弃牌太保守。" }
    ]
  },
  {
    "level_id": 550,
    "title": "河牌顶对遇 All-in",
    "scenario": "河牌圈。公共牌 A♠ 9♥ 4♦ 2♣ 7♥。你手里 A♦ K♦（顶对顶踢）。对手突然全押。他之前很紧。",
    "hand": ["Ad", "Kd"],
    "board": ["As", "9h", "4d", "2c", "7h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 18, "sharky_emotion": "laugh", "sharky_feedback": "顶对顶踢在 A 面，紧手全押可能是两对或 Set，但 AK 仍值得跟注，赢面不差。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "AK 顶踢在这面弃牌太弱，紧手也会用 AQ、AJ 这样打，跟注是正解。" }
    ]
  },
  {
    "level_id": 551,
    "title": "翻牌前 ATo 在中间位",
    "scenario": "你在中间位置。前面两人弃牌。你拿到 A♠ 10♦。底池只有盲注。",
    "hand": ["As", "Td"],
    "board": [],
    "options": [
      { "action": "加注 (Raise)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "ATo 在中间位加注是标准开局，有位置时可以玩。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "AT 不适合平跟入池，要么加注要么弃牌，跟注容易多人进池被主导。" }
    ]
  },
  {
    "level_id": 552,
    "title": "同花面顶对",
    "scenario": "翻牌 K♥ 7♥ 2♥。你手里 K♦ 9♦（顶对无花）。对手下注 2/3 底池。",
    "hand": ["Kd", "9d"],
    "board": ["Kh", "7h", "2h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -18, "sharky_emotion": "angry", "sharky_feedback": "三张同花面，你没花，对手可能是同花或听花，顶对在这里很脆弱，弃牌更稳。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "同花面顶对无花要小心，对手范围里太多能杀你的牌，弃牌是纪律。" }
    ]
  },
  {
    "level_id": 553,
    "title": "庄家位偷盲",
    "scenario": "你在庄家位。前面全部弃牌，小盲大盲还没行动。你手里 J♦ 9♦。",
    "hand": ["Jd", "9d"],
    "board": [],
    "options": [
      { "action": "加注 (Raise)", "is_correct": true, "hp_change": 12, "sharky_emotion": "laugh", "sharky_feedback": "庄家位对两个盲注，J9s 足够宽开加注偷盲，这是位置红利。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "单挑盲注时 J9s 是标准加注牌，弃牌太浪费机会。" }
    ]
  },
  {
    "level_id": 554,
    "title": "转牌 Check-raise 诈唬",
    "scenario": "转牌圈。公共牌 3♣ 8♠ J♦ 4♥。你手里 A♥ K♥（A 高听后门花）。对手下注半池，你判断他多为顶对或听牌。",
    "hand": ["Ah", "Kh"],
    "board": ["3c", "8s", "Jd", "4h"],
    "options": [
      { "action": "加注 (Raise) 半诈唬", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "有后门听牌和 A 高，加注能打走弱 Jx 或听牌，半诈唬在这里有利可图。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "被动跟注放弃主动权，加注能夺池或逼对手弃牌，更优。" }
    ]
  },
  {
    "level_id": 555,
    "title": "河牌抓诈唬",
    "scenario": "河牌圈。公共牌 2♦ 6♣ 9♥ 3♠ 10♣。你手里 9♦ 9♣（中对 Set）。对手一路下注，河牌又下 2/3 底池。他爱偷鸡。",
    "hand": ["9d", "9c"],
    "board": ["2d", "6c", "9h", "3s", "Tc"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 20, "sharky_emotion": "laugh", "sharky_feedback": "Set 在干燥面跟注抓诈唬是标准打法，爱偷的人会送价值。" },
      { "action": "加注 (Raise) 榨价值", "is_correct": false, "hp_change": -12, "sharky_emotion": "angry", "sharky_feedback": "对手爱偷鸡，你加注他可能弃牌，跟注才能多拿一条街价值。" }
    ]
  },
  {
    "level_id": 556,
    "title": "翻牌两对遇加注",
    "scenario": "翻牌 A♣ K♦ 7♥。你手里 A♥ 7♦（两对）。你下注，对手反加。",
    "hand": ["Ah", "7d"],
    "board": ["Ac", "Kd", "7h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -20, "sharky_emotion": "facepalm", "sharky_feedback": "两对在 A-K 面反加，对手可能是 AK、AA、KK 或 Set，跟注容易送大锅。" },
      { "action": "全押 (All-in)", "is_correct": true, "hp_change": 18, "sharky_emotion": "cool", "sharky_feedback": "底池已经膨胀，两对值得全押，对手可能是 AK 或听牌，推了再说。" }
    ]
  },
  {
    "level_id": 557,
    "title": "短码推 All-in",
    "scenario": "你只剩 8 个大盲注。庄家位加注 2.5 倍。你在大盲拿到 K♥ Q♦。",
    "hand": ["Kh", "Qd"],
    "board": [],
    "options": [
      { "action": "全押 (All-in)", "is_correct": true, "hp_change": 15, "sharky_emotion": "laugh", "sharky_feedback": "短码 KQo 对庄家加注，全押是正解，不给他们操作空间。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -15, "sharky_emotion": "angry", "sharky_feedback": "短码跟注看翻牌一旦没中就废了，KQ 直接推是标准。" }
    ]
  },
  {
    "level_id": 558,
    "title": "河牌过牌-下注价值",
    "scenario": "河牌圈。公共牌 5♠ 8♦ J♥ 2♣ 4♦。你手里 J♦ J♣（Set）。对手过牌。",
    "hand": ["Jd", "Jc"],
    "board": ["5s", "8d", "Jh", "2c", "4d"],
    "options": [
      { "action": "下注 (Bet) 约 2/3 底池", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "Set 在河牌必须下注拿价值，对手可能有 8x、Jx 或两对会跟注。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "拿 Set 在河牌过牌等于白送价值，一定要下注。" }
    ]
  },
  {
    "level_id": 559,
    "title": "翻牌 C-Bet 被跟",
    "scenario": "翻牌 2♣ 7♥ 10♦。你翻牌前加注，对手跟注。你下注半池（C-Bet），对手跟注。转牌发 3♠。",
    "hand": ["As", "Kd"],
    "board": ["2c", "7h", "Td", "3s"],
    "options": [
      { "action": "继续下注 (Barrel)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "转牌 3 是空白牌，对手可能拿 7x、10x 或听牌，再打一枪能打走很多。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "你翻牌前是加注者，转牌放弃会让对手免费看河牌，继续施压更优。" }
    ]
  },
  {
    "level_id": 560,
    "title": "大盲 3-Bet 后",
    "scenario": "庄家位加注，你在小盲拿到 Q♥ Q♦，反加（3-Bet）。庄家跟注。翻牌 K♠ 9♦ 2♥。",
    "hand": ["Qh", "Qd"],
    "board": ["Ks", "9d", "2h"],
    "options": [
      { "action": "下注 (C-Bet) 半池", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "3-Bet 底池你要延续强势，K 面你可能有 K，下注能打走 99、AQ 等。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -12, "sharky_emotion": "angry", "sharky_feedback": "你 3-Bet 过，翻牌过牌太弱，对手会借 K 面偷你，下注才能控池。" }
    ]
  },
  {
    "level_id": 561,
    "title": "河牌阻挡下注",
    "scenario": "河牌圈。公共牌 A♥ K♣ 4♦ 8♠ 2♥。你手里 A♦ 3♦（顶对弱踢）。对手过牌。底池 300。",
    "hand": ["Ad", "3d"],
    "board": ["Ah", "Kc", "4d", "8s", "2h"],
    "options": [
      { "action": "下注 (Bet) 1/3 底池", "is_correct": true, "hp_change": 14, "sharky_emotion": "laugh", "sharky_feedback": "顶对弱踢下小注是阻挡下注，让更强的牌难以加注，也能从弱牌拿一点价值。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "过牌会错过弱 A、Kx 的跟注，小注能平衡风险和收益。" }
    ]
  },
  {
    "level_id": 562,
    "title": "转牌听顺听花",
    "scenario": "转牌圈。公共牌 6♥ 7♥ 9♦ 2♣。你手里 8♥ 5♥（顺子听牌+同花听牌）。对手下注满池。底池 180。",
    "hand": ["8h", "5h"],
    "board": ["6h", "7h", "9d", "2c"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "双听牌补牌多，赔率够跟注，有时还能反超。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -15, "sharky_emotion": "facepalm", "sharky_feedback": "双听牌弃牌太亏，跟注是正解。" }
    ]
  },
  {
    "level_id": 563,
    "title": "河牌对手迷你注",
    "scenario": "河牌圈。公共牌 J♦ 4♣ 8♥ 3♠ 6♦。你手里 J♥ 10♥（顶对）。对手下注 1/4 底池。",
    "hand": ["Jh", "Th"],
    "board": ["Jd", "4c", "8h", "3s", "6d"],
    "options": [
      { "action": "加注 (Raise) 2.5 倍", "is_correct": true, "hp_change": 16, "sharky_emotion": "laugh", "sharky_feedback": "对手迷你注多半是弱牌或阻挡，顶对加注能榨取更多价值。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "跟注太被动，加注才能把底池做大。" }
    ]
  },
  {
    "level_id": 564,
    "title": "泡沫期弃掉 JJ",
    "scenario": "锦标赛泡沫期。你是中等筹码。前面有人全押，你在后位拿到 J♠ J♥。全押者很紧，两小时只玩了 3 手。",
    "hand": ["Js", "Jh"],
    "board": [],
    "options": [
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 18, "sharky_emotion": "cool", "sharky_feedback": "紧手在泡沫期全押，范围极窄，JJ 撞 AA/KK 概率高，保命进圈更值。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -25, "sharky_emotion": "angry", "sharky_feedback": "泡沫期紧手全押，JJ 容易撞钢板，弃牌是 ICM 正确决策。" }
    ]
  },
  {
    "level_id": 565,
    "title": "河牌抓鸡",
    "scenario": "河牌圈。公共牌 3♦ 7♣ 10♥ K♠ 2♦。你手里 A♦ 10♦（顶对）。对手一路过牌-跟注，河牌突然下注 3/4 底池。",
    "hand": ["Ad", "Td"],
    "board": ["3d", "7c", "Th", "Ks", "2d"],
    "options": [
      { "action": "跟注 (Call) 抓诈唬", "is_correct": true, "hp_change": 16, "sharky_emotion": "laugh", "sharky_feedback": "对手被动后突然下注，可能是 Kx 价值或诈唬，顶对跟注抓鸡合理。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "顶对在这面弃牌太弱，对手范围里有很多你能赢的牌。" }
    ]
  },
  {
    "level_id": 566,
    "title": "转牌下注尺度",
    "scenario": "转牌圈。公共牌 A♣ K♦ 5♥ 2♠。你手里 A♠ A♥（Set 级顶两对）。对手跟注了翻牌。底池 120。",
    "hand": ["As", "Ah"],
    "board": ["Ac", "Kd", "5h", "2s"],
    "options": [
      { "action": "下注 (Bet) 2/3 底池", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "大牌下 2/3 能让 Kx、听牌跟注，又不会把弱牌全打跑。" },
      { "action": "下注 (Bet) 满池", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "满池容易只留下比你强的牌，2/3 更能拿价值。" }
    ]
  },
  {
    "level_id": 567,
    "title": "河牌诈唬弃牌",
    "scenario": "河牌圈。公共牌 9♥ 4♦ J♣ 8♠ 3♥。你手里 A♦ K♦（A 高，没中牌）。你翻牌转牌都下注了。对手跟注两街，河牌过牌。",
    "hand": ["Ad", "Kd"],
    "board": ["9h", "4d", "Jc", "8s", "3h"],
    "options": [
      { "action": "下注 (Bet) 诈唬", "is_correct": true, "hp_change": 14, "sharky_emotion": "laugh", "sharky_feedback": "你代表 Jx 或顺子，对手过牌示弱，下注能打走弱对子或抓鸡失败。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "你讲了两街故事，河牌过牌浪费了诈唬机会，下注才完整。" }
    ]
  },
  {
    "level_id": 568,
    "title": "多人池顶对",
    "scenario": "翻牌 A♦ 7♣ 2♥。三人底池。你手里 A♥ 9♥（顶对）。枪口位下注，中间位跟注。",
    "hand": ["Ah", "9h"],
    "board": ["Ad", "7c", "2h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "多人池顶对弱踢跟注控池是标准，加注容易只留下比你强的。" },
      { "action": "加注 (Raise)", "is_correct": false, "hp_change": -18, "sharky_emotion": "angry", "sharky_feedback": "多人池加注顶对弱踢，AQ、A7、Set 都会跟，你多半落后，跟注更稳。" }
    ]
  },
  {
    "level_id": 569,
    "title": "终局薄价值",
    "scenario": "河牌圈。公共牌 6♦ 9♣ J♥ 2♠ 4♦。你手里 J♦ 8♦（顶对）。对手是跟注站，过牌。底池 250。",
    "hand": ["Jd", "8d"],
    "board": ["6d", "9c", "Jh", "2s", "4d"],
    "options": [
      { "action": "下注 (Bet) 1/2 底池", "is_correct": true, "hp_change": 18, "sharky_emotion": "laugh", "sharky_feedback": "跟注站会拿 9x、6x、弱 J 跟注，半池能拿满价值。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "对跟注站不过牌，下注才能榨取价值。" }
    ]
  },
  {
    "level_id": 570,
    "title": "枪口位小口袋对",
    "scenario": "你在枪口位。拿到 3♦ 3♣。后面还有多人未行动。底池仅盲注。",
    "hand": ["3d", "3c"],
    "board": [],
    "options": [
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "枪口位小口袋对容易遭遇加注，弃牌最稳，等好位置再玩。" },
      { "action": "加注 (Raise)", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "小对子在枪口加注，后面 3-Bet 你就得弃，白送筹码。" }
    ]
  },
  {
    "level_id": 571,
    "title": "翻牌空气牌 C-Bet",
    "scenario": "翻牌 3♣ 6♥ 9♦。你翻牌前加注，对手跟注。你完全没中牌。对手过牌。",
    "hand": ["As", "Kc"],
    "board": ["3c", "6h", "9d"],
    "options": [
      { "action": "下注 (C-Bet) 约 1/3 底池", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "干燥面你没中对手也可能没中，C-Bet 能直接收池。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "你加注过，过牌太弱，对手会借机偷池，下注才能控场。" }
    ]
  },
  {
    "level_id": 572,
    "title": "大盲位 KJo",
    "scenario": "你在大盲。庄家加注 2.5 倍，其他人弃牌。你拿到 K♠ J♦。",
    "hand": ["Ks", "Jd"],
    "board": [],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "KJo 单挑大盲对庄家加注可以跟注，有位置优势时再操作。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "KJo 对单次加注值得防守，弃牌太保守。" }
    ]
  },
  {
    "level_id": 573,
    "title": "翻牌底对遇下注",
    "scenario": "翻牌 A♦ 8♣ 2♥。你手里 8♠ 7♦（底对）。对手下注半池。",
    "hand": ["8s", "7d"],
    "board": ["Ad", "8c", "2h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 10, "sharky_emotion": "cool", "sharky_feedback": "底对 A 面跟一枪看转牌是标准，别把底池做大。" },
      { "action": "加注 (Raise)", "is_correct": false, "hp_change": -15, "sharky_emotion": "angry", "sharky_feedback": "底对加注容易只留下 Ax 或 Set，跟注控池更稳。" }
    ]
  },
  {
    "level_id": 574,
    "title": "转牌听顺赔率",
    "scenario": "转牌圈。公共牌 5♥ 6♦ 9♣ 2♠。你手里 7♣ 8♣（两头顺）。对手下注 2/3 底池。底池 120。",
    "hand": ["7c", "8c"],
    "board": ["5h", "6d", "9c", "2s"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "两头顺约 32% 胜率，2/3 底池赔率够跟一枪。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "两头顺弃牌太亏，跟注是正解。" }
    ]
  },
  {
    "level_id": 575,
    "title": "河牌顶对遇 All-in",
    "scenario": "河牌圈。公共牌 K♠ 4♦ 9♥ 2♣ 7♦。你手里 K♥ Q♦（顶对顶踢）。对手全押。他之前偏松。",
    "hand": ["Kh", "Qd"],
    "board": ["Ks", "4d", "9h", "2c", "7d"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 16, "sharky_emotion": "laugh", "sharky_feedback": "顶对顶踢对松手全押，Kx、两对都可能，跟注抓价值合理。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "KQ 顶踢在这面弃牌太弱，松手范围里很多你能赢的。" }
    ]
  },
  {
    "level_id": 576,
    "title": "转牌过牌-加注",
    "scenario": "转牌圈。公共牌 A♣ 7♥ 2♦ 4♠。你手里 A♦ 9♦（顶对弱踢）。你下注，对手加注。",
    "hand": ["Ad", "9d"],
    "board": ["Ac", "7h", "2d", "4s"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -18, "sharky_emotion": "angry", "sharky_feedback": "顶对弱踢面对加注，对手可能是 A7、Set 或两对，跟注容易送价值。" },
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "顶对弱踢遇加注弃牌是纪律，避免大锅。" }
    ]
  },
  {
    "level_id": 577,
    "title": "同花面顶对无花",
    "scenario": "翻牌 Q♥ 6♥ 2♥。你手里 Q♦ 10♠（顶对无花）。对手下注满池。",
    "hand": ["Qd", "Ts"],
    "board": ["Qh", "6h", "2h"],
    "options": [
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 12, "sharky_emotion": "cool", "sharky_feedback": "三张同花面顶对无花很脆弱，对手可能同花或听花，弃牌更稳。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "同花面顶对无花跟注容易撞同花，弃牌是正解。" }
    ]
  },
  {
    "level_id": 578,
    "title": "庄家位 3-Bet 偷盲",
    "scenario": "你在庄家位。小盲大盲还没行动。前面全弃。你拿到 A♦ 5♦。",
    "hand": ["Ad", "5d"],
    "board": [],
    "options": [
      { "action": "加注 (Raise)", "is_correct": true, "hp_change": 12, "sharky_emotion": "laugh", "sharky_feedback": "庄家位 A5s 偷盲是标准，同花有可玩性。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -8, "sharky_emotion": "facepalm", "sharky_feedback": "单挑盲注 A5s 值得加注，弃牌浪费机会。" }
    ]
  },
  {
    "level_id": 579,
    "title": "河牌价值下注尺度",
    "scenario": "河牌圈。公共牌 9♦ 4♣ J♥ 3♠ 7♦。你手里 J♦ J♣（Set）。对手过牌。底池 200。",
    "hand": ["Jd", "Jc"],
    "board": ["9d", "4c", "Jh", "3s", "7d"],
    "options": [
      { "action": "下注 (Bet) 约 2/3 底池", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "Set 在河牌下 2/3 能让 9x、Jx、顺子跟注，拿满价值。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "拿 Set 河牌过牌等于放弃价值，一定要下注。" }
    ]
  },
  {
    "level_id": 580,
    "title": "翻牌两对遇反加",
    "scenario": "翻牌 A♠ K♥ 7♦。你手里 A♦ 7♥（两对）。你下注，对手反加。",
    "hand": ["Ad", "7h"],
    "board": ["As", "Kh", "7d"],
    "options": [
      { "action": "全押 (All-in)", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "两对在 A-K 面值得推，对手可能是 AK、Set，但两对仍有价值。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -18, "sharky_emotion": "facepalm", "sharky_feedback": "两对弃牌太弱，推了让对手做决定。" }
    ]
  },
  {
    "level_id": 581,
    "title": "短码 A9o",
    "scenario": "你只剩 6 个大盲。庄家加注。你在大盲拿到 A♥ 9♦。",
    "hand": ["Ah", "9d"],
    "board": [],
    "options": [
      { "action": "全押 (All-in)", "is_correct": true, "hp_change": 14, "sharky_emotion": "laugh", "sharky_feedback": "短码 A9o 对庄家加注推了是标准，不给他们操作空间。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -12, "sharky_emotion": "angry", "sharky_feedback": "短码跟注看翻牌一旦没中就废了，直接推是正解。" }
    ]
  },
  {
    "level_id": 582,
    "title": "转牌第二枪诈唬",
    "scenario": "转牌圈。公共牌 2♣ 8♠ J♦ 4♥。你手里 A♣ K♣（A 高）。你翻牌 C-Bet 被跟。对手过牌。",
    "hand": ["Ac", "Kc"],
    "board": ["2c", "8s", "Jd", "4h"],
    "options": [
      { "action": "下注 (Barrel)", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "转牌 4 是空白牌，再打一枪能打走 8x、Jx 或听牌。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "你翻牌打了，转牌过牌太弱，继续施压更优。" }
    ]
  },
  {
    "level_id": 583,
    "title": "河牌过牌-下注价值",
    "scenario": "河牌圈。公共牌 5♠ 8♦ J♥ 2♣ 4♦。你手里 J♦ J♣（Set）。对手过牌。",
    "hand": ["Jd", "Jc"],
    "board": ["5s", "8d", "Jh", "2c", "4d"],
    "options": [
      { "action": "下注 (Bet) 1/2 底池", "is_correct": true, "hp_change": 16, "sharky_emotion": "laugh", "sharky_feedback": "Set 河牌必须下注，半池能让 8x、5x、弱 J 跟注。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "拿 Set 过牌等于白送价值，一定要下注。" }
    ]
  },
  {
    "level_id": 584,
    "title": "泡沫期 AK 弃牌",
    "scenario": "锦标赛泡沫期。有人全押，你在后位拿到 A♠ K♥。全押者筹码最多且很紧。",
    "hand": ["As", "Kh"],
    "board": [],
    "options": [
      { "action": "弃牌 (Fold)", "is_correct": true, "hp_change": 18, "sharky_emotion": "cool", "sharky_feedback": "泡沫期紧手全押范围极窄，AK 撞 AA/KK 概率高，保命进圈更值。" },
      { "action": "跟注 (Call)", "is_correct": false, "hp_change": -28, "sharky_emotion": "angry", "sharky_feedback": "泡沫期 ICM 压力大，紧手全押多为怪兽牌，弃牌是正确决策。" }
    ]
  },
  {
    "level_id": 585,
    "title": "河牌抓诈唬",
    "scenario": "河牌圈。公共牌 3♦ 6♣ 10♥ K♠ 2♥。你手里 A♦ 10♦（顶对）。对手翻牌转牌都过牌-跟注，河牌下注 3/4 底池。",
    "hand": ["Ad", "Td"],
    "board": ["3d", "6c", "Th", "Ks", "2h"],
    "options": [
      { "action": "跟注 (Call)", "is_correct": true, "hp_change": 16, "sharky_emotion": "laugh", "sharky_feedback": "对手被动两街后河牌下注，可能是 Kx 或诈唬，顶对跟注抓鸡合理。" },
      { "action": "弃牌 (Fold)", "is_correct": false, "hp_change": -14, "sharky_emotion": "facepalm", "sharky_feedback": "顶对在这面弃牌太弱，跟注是正解。" }
    ]
  },
  {
    "level_id": 586,
    "title": "转牌薄价值",
    "scenario": "转牌圈。公共牌 A♣ K♦ 5♥ 2♠。你手里 A♥ 8♥（顶对弱踢）。对手跟注翻牌后过牌。底池 100。",
    "hand": ["Ah", "8h"],
    "board": ["Ac", "Kd", "5h", "2s"],
    "options": [
      { "action": "下注 (Bet) 约 1/2 底池", "is_correct": true, "hp_change": 14, "sharky_emotion": "cool", "sharky_feedback": "顶对弱踢下小注拿价值，让 Kx、5x 跟注，控池。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -10, "sharky_emotion": "facepalm", "sharky_feedback": "对手范围里有很多你能赢的牌，下注才能拿价值。" }
    ]
  },
  {
    "level_id": 587,
    "title": "终局跟注站价值",
    "scenario": "河牌圈。公共牌 7♦ 4♣ J♥ 8♠ 3♦。你手里 J♦ 7♣（两对）。对手是跟注站，过牌。底池 280。",
    "hand": ["Jd", "7c"],
    "board": ["7d", "4c", "Jh", "8s", "3d"],
    "options": [
      { "action": "下注 (Bet) 2/3 底池", "is_correct": true, "hp_change": 18, "sharky_emotion": "laugh", "sharky_feedback": "两对对跟注站下注能拿满价值，8x、7x、4x 都可能跟。" },
      { "action": "过牌 (Check)", "is_correct": false, "hp_change": -12, "sharky_emotion": "facepalm", "sharky_feedback": "对跟注站不过牌，下注才能榨取价值。" }
    ]
  },
  {
    "level_id": 588,
    "title": "河牌的『皇帝位』",
    "scenario": "河牌：A♠ K♠ Q♠ J♥ 5♦。你手里 10♣ J♦，刚好凑成顺子。你觉得这是『天顺』，直接推了全押。对方秒接，翻出了一张黑桃 2。",
    "hand": ["Tc", "Jd"],
    "board": ["As", "Ks", "Qs", "Jh", "5d"],
    "options": [
      { "action": "我是顺子我怕谁？(Raise/All-in)", "is_correct": false, "hp_change": -22, "sharky_emotion": "angry", "sharky_feedback": "四张同花面你还拿顺子推？任何一张黑桃都能秒杀你，你这叫给对手发年终奖。" },
      { "action": "四张同花面，我只是个弟弟。(Fold)", "is_correct": true, "hp_change": 18, "sharky_emotion": "cool", "sharky_feedback": "你的顺子在四张同花面前就像个透明人。任何一张黑桃都能把你送回老家。记住：在这种面全押，你不是在拿价值，你是在『发年终奖』。" }
    ]
  },
  {
    "level_id": 589,
    "title": "这就是『读牌』吗？",
    "scenario": "翻牌前你 3-Bet，对方秒跟。翻牌：2♥ 2♣ 7♦。你手里是 A♠ K♠。你觉得对方没中，直接下注了 1.5 倍底池想吓跑他。对方再次秒跟。",
    "hand": ["As", "Ks"],
    "board": ["2h", "2c", "7d"],
    "options": [
      { "action": "他肯定在偷鸡，转牌继续轰！(Raise)", "is_correct": false, "hp_change": -20, "sharky_emotion": "angry", "sharky_feedback": "秒跟你的大注还叫偷鸡？这种干面秒跟多半是 22、77 在等你送价值，别拿 AK 去撞墙。" },
      { "action": "秒跟必有妖，认怂过牌。(Check/Call)", "is_correct": true, "hp_change": 16, "sharky_emotion": "cool", "sharky_feedback": "这种干巴巴的公对子面，对方秒跟你的超额下注，手里大概率是拿着个小对子（22, 77, 88...）在等你上钩。别拿你的 AK 去撞南墙了，墙很硬，你会很疼。" }
    ]
  }
];

// 为每道题打上 chapter 字段（前 99 题按原规则；新增 18 题：99–104 纸面萌新，105–110 野生票友，111–116 资深懂哥；再增 2 题 117–118 资深懂哥）
allQuestions.forEach(function (q, i) {
  if (i < 16) q.chapter = '纸面萌新';
  else if (i < 32) q.chapter = '野生票友';
  else if (i < 48) q.chapter = '资深懂哥';
  else if (i < 51) q.chapter = '纸面萌新';
  else if (i < 54) q.chapter = '野生票友';
  else if (i < 57) q.chapter = '资深懂哥';
  else if (i < 60) q.chapter = '纸面萌新';
  else if (i < 63) q.chapter = '野生票友';
  else if (i < 66) q.chapter = '资深懂哥';
  else if (i < 69) q.chapter = '纸面萌新';
  else if (i < 72) q.chapter = '野生票友';
  else if (i < 75) q.chapter = '资深懂哥';
  else if (i < 83) q.chapter = '纸面萌新';
  else if (i < 91) q.chapter = '野生票友';
  else if (i < 99) q.chapter = '资深懂哥';
  else if (i < 105) q.chapter = '纸面萌新';
  else if (i < 111) q.chapter = '野生票友';
  else q.chapter = '资深懂哥';
});

// 固定关卡 + 随机抽题：difficulty → 关卡名与介绍文案
const CHAPTER_CONFIG = {
  beginner: {
    name: '纸面萌新',
    intro: '欢聚一堂，全靠运气。在这里，你会发现 A-K 竟然不是无敌的，位置比手牌更重要。别急着 All-in，先学会怎么保住你的底裤。'
  },
  casual: {
    name: '野生票友',
    intro: '你已经学会了看牌，但还没学会看人。这里全是「踢脚陷阱」和「昂贵的同花梦」。Sharky 会教你什么时候该收手，什么时候该亮剑。'
  },
  pro: {
    name: '资深懂哥',
    intro: '欢迎来到深水区。这里没有空气牌，只有心理博弈。学会「薄价值」和「诈唬识别」，否则你就是桌上那个最肥的提款机。'
  }
};
