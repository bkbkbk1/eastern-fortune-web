export const translations = {
  ko: {
    home: {
      title: "🔮 2026년 병오년 운세",
      subtitle: "정통 사주명리로 보는 당신의 2026년",
      description: "생년월일시와 성별을 입력하면\nChatGPT가 2026년 병오년 운세를 해석해드립니다",
      sajuIntro: {
        title: "사주(四柱)란?",
        description: "사주명리학은 출생 연/월/일/시를 기반으로 천간과 지지를 분석하여 인생의 흐름과 운세를 파악하는 동양 전통 학문입니다.",
        pillars: [
          "년주(年柱) - 조상과 어린 시절의 운",
          "월주(月柱) - 부모와 청년기의 운",
          "일주(日柱) - 본인과 중년기의 운",
          "시주(時柱) - 자녀와 노년기의 운"
        ]
      },
      wealth: { title: "재물운", desc: "2026년 재테크 방향성" },
      career: { title: "직업운", desc: "커리어 전환 타이밍" },
      health: { title: "건강운", desc: "주의해야 할 건강 포인트" },
      cta: "지금 바로 운세를 확인하세요",
      button: "운세 보러 가기 →",
      daily: {
        title: "오늘의 운세",
        desc: "매일 바뀌는 나만의 일일 운세를 확인하세요!",
        button: "오늘의 운세 보기 →"
      }
    },
    fortune: {
      title: "🔮 2026년 운세",
      subtitle: "양력 생년월일을 입력하세요",
      birthDate: {
        label: "양력 생년월일",
        placeholder: "예: 19901225",
        helper: "양력 YYYYMMDD 형식 (8자리)"
      },
      birthTime: {
        title: "출생시간 입력",
        subtitle: "출생 시간을 입력해주세요",
        label: "출생시간",
        hour: "시",
        minute: "분",
        helper: "※ 정확한 시간을 모르시면 대략적인 시간을 선택하세요"
      },
      gender: {
        title: "성별 선택",
        subtitle: "대운 계산을 위해 필요합니다",
        male: "남성",
        female: "여성"
      },
      buttons: {
        next: "다음",
        prev: "이전",
        calculating: "계산 중...",
        calculate: "운세 보기",
        retry: "다시 보기"
      },
      loading: {
        title: "운세 분석 중",
        features: [
          "60년 경력 사주명리학 대가가 분석합니다",
          "13가지 상세 운세 카테고리",
          "취업/직장/이직/투자/창업/사업 전문 분석",
          "행운의 아이템 & 운세 개선 방법 포함"
        ],
        time: "⏱️ 보통 20-30초 정도 소요됩니다"
      },
      loadingMessages: [
        "🔮 사주팔자 계산 중...",
        "📊 음양오행 분석 중...",
        "✨ 2026년 병오년과의 상호작용 분석 중...",
        "💫 십신론 적용 중...",
        "🌟 용신 파악 중...",
        "💰 재물운과 투자운 분석 중...",
        "💼 직장운과 이직운 분석 중...",
        "💕 애정운과 결혼운 분석 중...",
        "🍀 행운의 아이템 찾는 중...",
        "📝 상세한 운세 작성 중...",
        "✅ 거의 완료되었습니다..."
      ],
      preview: {
        title: "🔮 운세 미리보기",
        readMore: "▼ 전체 운세를 보려면 결제하세요",
        locked: "13가지 상세 운세가 잠겨있습니다",
        lockedDesc: "결제 후 취업/직장/재물/애정/건강 등 상세 운세를 확인하세요",
        webFree: "웹 버전은 무료로 전체 운세를 확인할 수 있습니다",
        viewFull: "전체 운세 보기 →"
      },
      payment: {
        title: "🔮 운세 결과 보기",
        subtitle: "Solana 지갑으로 결제하고 상세 운세를 확인하세요",
        fortuneTitle: "2026년 병오년 운세",
        fortuneDesc: "사주팔자와 ChatGPT 상세 해석",
        priceNote: "약 $1.00 상당",
        includes: {
          pillars: "사주팔자 (년/월/일/시)",
          analysis: "2026년 상세 운세 해석",
          categories: "13가지 운세 카테고리 분석",
          advice: "AI 맞춤 조언 & 행운 아이템"
        },
        selectToken: "결제할 토큰을 선택하세요:",
        processing: "처리 중...",
        poopDesc: "Poop Dodge에서 획득!",
        poopPromo: {
          title: "💩 Poop Dodge - $POOP 토큰 획득 게임!",
          desc: "똥 피하기 게임을 플레이하고 $POOP 토큰을 모으세요. 모은 토큰으로 운세를 결제할 수 있습니다!",
          hint: "📲 Solana dApp Store에서 'Poop Dodge'를 검색하세요"
        }
      },
      result: {
        title: "🔮 2026년 병오년 운세",
        pillarsTitle: "사주팔자",
        year: "년주",
        month: "월주",
        day: "일주",
        hour: "시주",
        sections: {
          overall: "2026년 총운",
          employment: "취업운 풀이",
          workplace: "직장운 풀이",
          jobChange: "이직운 풀이",
          relationships: "대인관계운 풀이",
          health: "건강운 풀이",
          love: "애정운 풀이",
          marriage: "결혼운 풀이",
          wealth: "금전운 풀이",
          investment: "투자운/재테크운 풀이",
          startup: "창업운 풀이",
          business: "사업운 풀이",
          consumption: "소비운 풀이",
          academic: "학업운 풀이",
          luckyItems: "🍀 2026년 나에게 이로운 아이템",
          luckyColor: "행운의 색",
          luckyNumber: "행운의 숫자",
          luckyDirection: "행운의 방향",
          fortuneFlow: "⚡ 2026년의 극과 극",
          goodHabits: "✅ 운의 흐름이 좋아집니다",
          badHabits: "⚠️ 운의 흐름에 방해를 받습니다",
          advice: "2026년 최종 조언"
        }
      },
      errors: {
        birthDateInvalid: "생년월일을 8자리로 입력해주세요 (예: 19901225)",
        transactionFailed: "트랜잭션 실패: ",
        calculationError: "운세 계산 중 오류가 발생했습니다: ",
        noData: "운세 데이터가 없습니다. 다시 시도해주세요.",
        apiError: "오류: ",
        paymentFailed: "결제에 실패했습니다. 다시 시도해주세요."
      }
    },
    daily: {
      title: "오늘의 운세",
      description: "매일 바뀌는 나만의 운세를 확인하세요\n생년월일만 입력하면 OK!",
      birthDateLabel: "생년월일",
      birthDatePlaceholder: "19900101",
      birthDateHelper: "예: 1990년 1월 1일 → 19900101",
      viewButton: "오늘의 운세 보기",
      backToMain: "← 2026년 신년운세 보기",
      loading: "오늘의 운세 분석 중...",
      pleaseWait: "잠시만 기다려주세요",
      resultTitle: "오늘의 운세",
      tryAgain: "다시 보기",
      yearlyFortune: "2026년 신년운세 →",
      sections: {
        message: "오늘의 한마디",
        wealth: "재물운",
        love: "애정운",
        health: "건강운",
        work: "직장운",
        luckyItems: "🍀 오늘의 행운 아이템",
        luckyColor: "행운의 색",
        luckyNumber: "행운의 숫자",
        luckyTime: "행운의 시간",
        advice: "오늘의 조언"
      },
      errors: {
        birthDateInvalid: "생년월일 8자리를 입력해주세요",
        apiError: "오류: ",
        calculationError: "운세 계산 중 오류가 발생했습니다"
      }
    }
  },
  en: {
    home: {
      title: "🔮 Eastern Fortune 2026",
      subtitle: "Discover Your Destiny Through the Four Pillars",
      description: "Enter your birth date, time, and gender\nGet your 2026 Year of Fire Horse fortune analyzed by AI",
      sajuIntro: {
        title: "What is Saju (Four Pillars of Destiny)?",
        description: "Saju Myeongnihak (Four Pillars of Destiny) is an ancient East Asian astrology system that analyzes the Heavenly Stems and Earthly Branches of your birth year, month, day, and hour to reveal the flow of your life and fortune.",
        pillars: [
          "Year Pillar - Ancestors and childhood fortune",
          "Month Pillar - Parents and youth fortune",
          "Day Pillar - Self and middle-age fortune",
          "Hour Pillar - Children and later-life fortune"
        ]
      },
      wealth: { title: "Wealth Fortune", desc: "Financial direction for 2026" },
      career: { title: "Career Fortune", desc: "Career transition timing" },
      health: { title: "Health Fortune", desc: "Health points to watch" },
      cta: "Discover your fortune now",
      button: "Get My Fortune →",
      daily: {
        title: "Daily Fortune",
        desc: "Check your personal daily fortune, updated every day!",
        button: "View Daily Fortune →"
      }
    },
    fortune: {
      title: "🔮 2026 Fortune Reading",
      subtitle: "Enter your birth date (Solar calendar)",
      birthDate: {
        label: "Birth Date (Solar)",
        placeholder: "e.g., 19901225",
        helper: "Solar calendar YYYYMMDD format (8 digits)"
      },
      birthTime: {
        title: "Birth Time",
        subtitle: "Please enter your birth time",
        label: "Birth Time",
        hour: "Hour",
        minute: "Min",
        helper: "If you don't know the exact time, select an approximate time"
      },
      gender: {
        title: "Select Gender",
        subtitle: "Required for major fortune cycle calculation",
        male: "Male",
        female: "Female"
      },
      buttons: {
        next: "Next",
        prev: "Previous",
        calculating: "Calculating...",
        calculate: "Get Fortune",
        retry: "Try Again"
      },
      loading: {
        title: "Analyzing Your Fortune",
        features: [
          "Expert-level Saju analysis by AI master",
          "13 detailed fortune categories",
          "Employment, career, investment, and business analysis",
          "Lucky items & fortune improvement advice included"
        ],
        time: "⏱️ Usually takes 20-30 seconds"
      },
      loadingMessages: [
        "🔮 Calculating Four Pillars...",
        "📊 Analyzing Yin-Yang Five Elements...",
        "✨ Analyzing interaction with 2026 Fire Horse year...",
        "💫 Applying Ten Gods theory...",
        "🌟 Identifying favorable elements...",
        "💰 Analyzing wealth and investment fortune...",
        "💼 Analyzing career and job change fortune...",
        "💕 Analyzing love and marriage fortune...",
        "🍀 Finding your lucky items...",
        "📝 Writing detailed fortune reading...",
        "✅ Almost done..."
      ],
      preview: {
        title: "🔮 Fortune Preview",
        readMore: "▼ Pay to unlock the full detailed reading",
        locked: "13 detailed fortune categories are locked",
        lockedDesc: "Unlock career, wealth, love, health & more after payment",
        webFree: "Web version: view the full reading for free",
        viewFull: "View Full Fortune →"
      },
      payment: {
        title: "🔮 Unlock Your Fortune",
        subtitle: "Pay with your Solana wallet to view your detailed fortune reading",
        fortuneTitle: "2026 Year of Fire Horse Fortune",
        fortuneDesc: "Four Pillars Analysis & AI Interpretation",
        priceNote: "Approximately $1.00",
        includes: {
          pillars: "Four Pillars of Destiny (Year/Month/Day/Hour)",
          analysis: "Detailed 2026 fortune interpretation",
          categories: "13 fortune category analysis",
          advice: "AI personalized advice & lucky items"
        },
        selectToken: "Choose your payment token:",
        processing: "Processing...",
        poopDesc: "Earn in Poop Dodge!",
        poopPromo: {
          title: "💩 Poop Dodge - Earn $POOP tokens by playing!",
          desc: "Play the Poop Dodge game to collect $POOP tokens. Use them to pay for your fortune reading!",
          hint: "📲 Search 'Poop Dodge' on the Solana dApp Store"
        }
      },
      result: {
        title: "🔮 2026 Year of Fire Horse Fortune",
        pillarsTitle: "Four Pillars of Destiny",
        year: "Year",
        month: "Month",
        day: "Day",
        hour: "Hour",
        sections: {
          overall: "2026 Overall Fortune",
          employment: "Employment Fortune",
          workplace: "Workplace Fortune",
          jobChange: "Job Change Fortune",
          relationships: "Relationships Fortune",
          health: "Health Fortune",
          love: "Love Fortune",
          marriage: "Marriage Fortune",
          wealth: "Financial Fortune",
          investment: "Investment Fortune",
          startup: "Startup Fortune",
          business: "Business Fortune",
          consumption: "Spending Fortune",
          academic: "Academic Fortune",
          luckyItems: "🍀 Your Lucky Items for 2026",
          luckyColor: "Lucky Colors",
          luckyNumber: "Lucky Numbers",
          luckyDirection: "Lucky Directions",
          fortuneFlow: "⚡ Highs & Lows of 2026",
          goodHabits: "✅ Habits that improve your fortune",
          badHabits: "⚠️ Habits that hinder your fortune",
          advice: "Final Advice for 2026"
        }
      },
      errors: {
        birthDateInvalid: "Please enter your birth date in 8 digits (e.g., 19901225)",
        transactionFailed: "Transaction failed: ",
        calculationError: "Error calculating fortune: ",
        noData: "No fortune data available. Please try again.",
        apiError: "Error: ",
        paymentFailed: "Payment failed. Please try again."
      }
    },
    daily: {
      title: "Daily Fortune",
      description: "Check your personal daily fortune!\nJust enter your birth date.",
      birthDateLabel: "Birth Date",
      birthDatePlaceholder: "19900101",
      birthDateHelper: "e.g., January 1, 1990 → 19900101",
      viewButton: "View Daily Fortune",
      backToMain: "← Back to 2026 Fortune",
      loading: "Analyzing today's fortune...",
      pleaseWait: "Please wait a moment",
      resultTitle: "Today's Fortune",
      tryAgain: "Try Again",
      yearlyFortune: "2026 Yearly Fortune →",
      sections: {
        message: "Today's Message",
        wealth: "Wealth",
        love: "Love",
        health: "Health",
        work: "Career",
        luckyItems: "🍀 Today's Lucky Items",
        luckyColor: "Lucky Color",
        luckyNumber: "Lucky Number",
        luckyTime: "Lucky Time",
        advice: "Today's Advice"
      },
      errors: {
        birthDateInvalid: "Please enter your birth date in 8 digits",
        apiError: "Error: ",
        calculationError: "Error calculating fortune"
      }
    }
  }
};

export type Language = 'ko' | 'en';
export type TranslationKeys = typeof translations.ko;
