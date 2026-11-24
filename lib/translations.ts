export const translations = {
  ko: {
    home: {
      title: "🔮 2027년 정미년 운세",
      subtitle: "정통 사주명리로 보는 당신의 2027년",
      description: "생년월일시와 성별을 입력하면\nChatGPT가 2027년 정미년 운세를 해석해드립니다",
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
      wealth: { title: "재물운", desc: "2027년 재테크 방향성" },
      career: { title: "직업운", desc: "커리어 전환 타이밍" },
      health: { title: "건강운", desc: "주의해야 할 건강 포인트" },
      cta: "지금 바로 운세를 확인하세요",
      button: "운세 보러 가기 →",
      ziwei: {
        title: "자미두수 (紫微斗數)",
        desc: "중국 전통 자미두수 명반으로 12궁의 성요 배치를 통해 운명을 분석합니다",
        button: "명반 보기"
      },
      guide: {
        title: "📚 사주·자미두수 가이드",
        desc: "정미년의 의미부터 사주팔자 기초, 자미두수 12궁까지 — 풀이를 스스로 읽기 위한 해설을 모았습니다.",
        button: "가이드 보기"
      },
    },
    footer: {
      privacy: "개인정보처리방침",
      terms: "이용약관",
      guide: "사주·자미두수 가이드",
      about: "사이트 소개",
      contactBefore: "문의: ",
      creditBefore: "사주·자미두수 계산 엔진: ",
      creditAfter: " © 2026 Jang-Ho Hwang · MIT License"
    },
    fortune: {
      title: "🔮 2027년 운세",
      subtitle: "양력 생년월일을 입력하세요",
      ziweiLink: "⭐ 자미두수 명반 보기",
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
        "✨ 2027년 정미년과의 상호작용 분석 중...",
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
        viewFull: "전체 운세 보기 →",
        webReadMore: "▼ 아래 버튼을 누르면 전체 운세를 무료로 확인할 수 있습니다",
        webLocked: "13가지 상세 운세가 준비되어 있습니다",
        webLockedDesc: "웹 버전에서는 무료로 전부 확인할 수 있습니다"
      },
      share: {
        button: "🔗 결과 공유하기",
        copy: "🔗 링크 복사",
        copied: "링크가 복사되었습니다!",
        title: "2027 정미년 AI 사주·자미두수 운세",
        text: "AI가 풀어주는 2027년 정미년 사주·자미두수 운세, 나도 확인해보세요! 👉 https://saju2026.com",
        manualCopy: "아래 링크를 복사해서 공유하세요:",
        shareResult: "📋 내 사주 결과 공유하기"
      },
      payment: {
        title: "🔮 운세 결과 보기",
        subtitle: "Solana 지갑으로 결제하고 상세 운세를 확인하세요",
        fortuneTitle: "2027년 정미년 운세",
        fortuneDesc: "사주팔자와 ChatGPT 상세 해석",
        priceNote: "약 $1.00 상당",
        includes: {
          pillars: "사주팔자 (년/월/일/시)",
          analysis: "2027년 상세 운세 해석",
          categories: "13가지 운세 카테고리 분석",
          advice: "AI 맞춤 조언 & 행운 아이템"
        },
        selectToken: "결제할 토큰을 선택하세요:",
        processing: "처리 중...",
      },
      result: {
        title: "🔮 2027년 정미년 운세",
        pillarsTitle: "사주팔자",
        year: "년주",
        month: "월주",
        day: "일주",
        hour: "시주",
        sections: {
          overall: "2027년 총운",
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
          luckyItems: "🍀 2027년 나에게 이로운 아이템",
          luckyColor: "행운의 색",
          luckyNumber: "행운의 숫자",
          luckyDirection: "행운의 방향",
          fortuneFlow: "⚡ 2027년의 극과 극",
          goodHabits: "✅ 운의 흐름이 좋아집니다",
          badHabits: "⚠️ 운의 흐름에 방해를 받습니다",
          advice: "2027년 최종 조언"
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
    ziwei: {
      labels: {
        title: "⭐ 자미두수 (紫微斗數)",
        subtitle: "중국 전통 자미두수 명반으로 12궁을 풀이합니다",
        birthDate: {
          label: "생년월일 (양력)",
          placeholder: "예: 19900115",
          helper: "양력 8자리를 입력해주세요"
        },
        birthTime: {
          label: "태어난 시간",
          hour: "시",
          minute: "분",
          helper: "모르시면 12시로 입력하세요"
        },
        gender: { title: "성별 선택", male: "남성", female: "여성" },
        buttons: {
          next: "다음",
          prev: "이전",
          calculate: "명반 보기",
          calculating: "계산 중...",
          retry: "다시 시작"
        },
        board: "자미두수 명반 (命盤)",
        daxian: "대한(大限) 운세",
        interpretation: "AI 명반 해석",
        current: "현재",
        loading: "자미두수 명반을 계산하고 있습니다...",
        brightness: "밝기 등급",
        table: { age: "나이", ganzhi: "간지", palace: "궁명", stars: "주요 성" },
        mingGong: "명궁(命宮)",
        wuXingJu: "오행국",
        backHome: "← 처음으로",
        sajuLink: "사주 운세도 보기 →",
        errors: {
          apiError: "오류: ",
          birthDateInvalid: "생년월일 8자리를 입력해주세요"
        }
      },
      preview: {
        title: "⭐ 자미두수 명반 미리보기",
        readMore: "▼ 전체 해석을 보려면 결제하세요",
        locked: "궁별 상세 해석이 잠겨있습니다",
        lockedDesc: "결제 후 12궁 상세 해석을 확인하세요",
        webFree: "웹 버전은 무료로 전체 해석을 확인할 수 있습니다",
        viewFull: "전체 해석 보기 →",
        summaryTitle: "총론",
      },
      payment: {
        selectToken: "결제할 토큰을 선택하세요:",
        processing: "처리 중...",
        priceNote: "약 $1.00 상당",
        paymentFailed: "결제에 실패했습니다. 다시 시도해주세요.",
      },
    }
  },
  en: {
    home: {
      title: "🔮 Eastern Fortune 2027",
      subtitle: "Discover Your 2027 Fire Sheep Fortune Through the Four Pillars",
      description: "Enter your birth date, time, and gender\nGet your 2027 Year of the Fire Sheep fortune analyzed by AI",
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
      wealth: { title: "Wealth Fortune", desc: "Financial direction for 2027" },
      career: { title: "Career Fortune", desc: "Career transition timing" },
      health: { title: "Health Fortune", desc: "Health points to watch" },
      cta: "Discover your fortune now",
      button: "Get My Fortune →",
      ziwei: {
        title: "Zi Wei Dou Shu",
        desc: "Chinese Purple Star Astrology — a comprehensive 12-palace star chart analysis",
        button: "View Star Chart"
      },
      guide: {
        title: "📚 Saju & Zi Wei Guides",
        desc: "From the meaning of the Jeongmi year to Saju basics and the 12 Zi Wei palaces — read your reading on your own terms.",
        button: "Read the guides"
      },
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      guide: "Saju & Zi Wei Guides",
      about: "About",
      contactBefore: "Contact: ",
      creditBefore: "Saju & Zi Wei calculation engine: ",
      creditAfter: " © 2026 Jang-Ho Hwang · MIT License"
    },
    fortune: {
      title: "🔮 2027 Fortune Reading",
      subtitle: "Enter your birth date (Solar calendar)",
      ziweiLink: "⭐ See the Zi Wei star chart",
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
        "✨ Analyzing interaction with the 2027 Fire Sheep year...",
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
        viewFull: "View Full Fortune →",
        webReadMore: "▼ Tap the button below to read the full fortune for free",
        webLocked: "13 detailed fortune readings are ready",
        webLockedDesc: "The web version is free to read in full"
      },
      share: {
        button: "🔗 Share result",
        copy: "🔗 Copy link",
        copied: "Link copied!",
        title: "2027 Fire Sheep AI Saju & Zi Wei Fortune",
        text: "Check out my 2027 Saju and Zi Wei Dou Shu reading 👉 https://saju2026.com",
        manualCopy: "Copy and share this link:",
        shareResult: "📋 Share my reading"
      },
      payment: {
        title: "🔮 Unlock Your Fortune",
        subtitle: "Pay with your Solana wallet to view your detailed fortune reading",
        fortuneTitle: "2027 Year of the Fire Sheep Fortune",
        fortuneDesc: "Four Pillars Analysis & AI Interpretation",
        priceNote: "Approximately $1.00",
        includes: {
          pillars: "Four Pillars of Destiny (Year/Month/Day/Hour)",
          analysis: "Detailed 2027 fortune interpretation",
          categories: "13 fortune category analysis",
          advice: "AI personalized advice & lucky items"
        },
        selectToken: "Choose your payment token:",
        processing: "Processing...",
      },
      result: {
        title: "🔮 2027 Year of the Fire Sheep Fortune",
        pillarsTitle: "Four Pillars of Destiny",
        year: "Year",
        month: "Month",
        day: "Day",
        hour: "Hour",
        sections: {
          overall: "2027 Overall Fortune",
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
          luckyItems: "🍀 Your Lucky Items for 2027",
          luckyColor: "Lucky Colors",
          luckyNumber: "Lucky Numbers",
          luckyDirection: "Lucky Directions",
          fortuneFlow: "⚡ Highs & Lows of 2027",
          goodHabits: "✅ Habits that improve your fortune",
          badHabits: "⚠️ Habits that hinder your fortune",
          advice: "Final Advice for 2027"
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
    ziwei: {
      labels: {
        title: "⭐ Zi Wei Dou Shu (紫微斗數)",
        subtitle: "Chinese Purple Star Astrology — a 12-palace star chart reading",
        birthDate: {
          label: "Birth Date (Solar)",
          placeholder: "e.g., 19900115",
          helper: "Enter your solar calendar date (8 digits)"
        },
        birthTime: {
          label: "Birth Time",
          hour: "Hr",
          minute: "Min",
          helper: "If unknown, enter 12:00"
        },
        gender: { title: "Select Gender", male: "Male", female: "Female" },
        buttons: {
          next: "Next",
          prev: "Previous",
          calculate: "View Star Chart",
          calculating: "Calculating...",
          retry: "Start Over"
        },
        board: "Zi Wei Star Chart (命盤)",
        daxian: "Major Periods (大限)",
        interpretation: "AI Star Chart Reading",
        current: "Current",
        loading: "Calculating your Zi Wei star chart...",
        brightness: "Brightness grades",
        table: { age: "Age", ganzhi: "Gan-Zhi", palace: "Palace", stars: "Main stars" },
        mingGong: "Life Palace (命宮)",
        wuXingJu: "Five Element Bureau",
        backHome: "← Home",
        sajuLink: "See the Saju reading →",
        errors: {
          apiError: "Error: ",
          birthDateInvalid: "Please enter birth date in 8 digits"
        }
      },
      preview: {
        title: "⭐ Zi Wei Dou Shu Preview",
        readMore: "▼ Pay to unlock the full interpretation",
        locked: "Detailed palace interpretations are locked",
        lockedDesc: "Unlock all 12 palace interpretations after payment",
        webFree: "Web version: view the full reading for free",
        viewFull: "View Full Reading →",
        summaryTitle: "Overview",
      },
      payment: {
        selectToken: "Choose your payment token:",
        processing: "Processing...",
        priceNote: "Approximately $1.00",
        paymentFailed: "Payment failed. Please try again.",
      },
    }
  }
};

export type Language = 'ko' | 'en';
export type TranslationKeys = typeof translations.ko;
