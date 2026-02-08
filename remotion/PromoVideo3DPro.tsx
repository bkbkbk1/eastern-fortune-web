import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Audio, staticFile, Easing } from 'remotion';

// ============================================
// TIMING CONFIGURATION - 모든 타이밍을 여기서 관리
// ============================================
const SCENE_1_START = 0;
const SCENE_1_DURATION = 90;
const SCENE_1_END = SCENE_1_START + SCENE_1_DURATION;

const SCENE_2_START = SCENE_1_END;
const SCENE_2_DURATION = 90;
const SCENE_2_END = SCENE_2_START + SCENE_2_DURATION;

const SCENE_3_START = SCENE_2_END;
const SCENE_3_DURATION = 90;
const SCENE_3_END = SCENE_3_START + SCENE_3_DURATION;

const SCENE_4_START = SCENE_3_END;
const SCENE_4_DURATION = 90;
const SCENE_4_END = SCENE_4_START + SCENE_4_DURATION;

const SCENE_5_START = SCENE_4_END;
const SCENE_5_DURATION = 90;
const SCENE_5_END = SCENE_5_START + SCENE_5_DURATION;

const TOTAL_DURATION = SCENE_5_END;

// ============================================
// REUSABLE COMPONENTS
// ============================================

// 3D 텍스트 글자 - 재사용 가능한 컴포넌트
const Char3D = ({
  char,
  delay,
  sceneStart,
  sceneDuration,
  color = '#ffffff',
  frame
}: {
  char: string;
  delay: number;
  sceneStart: number;
  sceneDuration: number;
  color?: string;
  frame: number;
}) => {
  const localFrame = frame - sceneStart;
  const charStart = delay;
  const charEnd = charStart + 20;

  const progress = interpolate(
    localFrame,
    [charStart, charEnd],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const rotateX = interpolate(
    progress,
    [0, 1],
    [90, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const rotateY = interpolate(
    progress,
    [0, 1],
    [180, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const translateZ = interpolate(
    progress,
    [0, 0.5, 1],
    [200, -50, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const blur = interpolate(
    progress,
    [0, 1],
    [10, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 120,
        fontWeight: 900,
        color,
        transform: `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateZ(${translateZ}px)
        `,
        textShadow: `
          0 0 40px rgba(147,51,234,0.8),
          0 0 80px rgba(236,72,153,0.5),
          ${translateZ * 0.5}px ${translateZ * 0.5}px ${Math.abs(translateZ)}px rgba(0,0,0,0.3)
        `,
        filter: `blur(${blur}px)`,
        opacity: progress,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

// 3D 텍스트 전체 - 단어를 글자로 분해
const Text3D = ({
  text,
  startDelay,
  sceneStart,
  sceneDuration,
  color,
  frame
}: {
  text: string;
  startDelay: number;
  sceneStart: number;
  sceneDuration: number;
  color?: string;
  frame: number;
}) => {
  const chars = text.split('');
  const CHAR_DELAY = 3; // 글자 간 간격

  return (
    <div style={{ display: 'flex', gap: 15 }}>
      {chars.map((char, i) => (
        <Char3D
          key={i}
          char={char}
          delay={startDelay + i * CHAR_DELAY}
          sceneStart={sceneStart}
          sceneDuration={sceneDuration}
          color={color}
          frame={frame}
        />
      ))}
    </div>
  );
};

// 3D 이모지 - 재사용 가능
const Emoji3D = ({
  emoji,
  text,
  delay,
  sceneStart,
  frame
}: {
  emoji: string;
  text: string;
  delay: number;
  sceneStart: number;
  frame: number;
}) => {
  const localFrame = frame - sceneStart;
  const START = delay;
  const END = delay + 20;

  const progress = interpolate(
    localFrame,
    [START, END],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const rotateY = interpolate(
    progress,
    [0, 1],
    [360, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const translateZ = interpolate(
    progress,
    [0, 0.5, 1],
    [300, -80, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        textAlign: 'center',
        transform: `
          perspective(1000px)
          rotateY(${rotateY}deg)
          translateZ(${translateZ}px)
        `,
        opacity: progress,
      }}
    >
      <div style={{ fontSize: 140, marginBottom: 20 }}>{emoji}</div>
      <div style={{ fontSize: 50, color: '#ffffff', fontWeight: 900 }}>
        {text}
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
export const PromoVideo3DPro: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase 추적
  const isScene1 = frame >= SCENE_1_START && frame < SCENE_1_END;
  const isScene2 = frame >= SCENE_2_START && frame < SCENE_2_END;
  const isScene3 = frame >= SCENE_3_START && frame < SCENE_3_END;
  const isScene4 = frame >= SCENE_4_START && frame < SCENE_4_END;
  const isScene5 = frame >= SCENE_5_START && frame < SCENE_5_END;

  // 배경 회전
  const bgRotation = interpolate(
    frame,
    [0, TOTAL_DURATION],
    [0, 360],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* 배경음악 */}
      <Audio src={staticFile('background-music.mp3')} volume={0.3} />

      {/* 회전 배경 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${bgRotation}deg, #1a0033 0%, #330066 25%, #4a0080 50%, #6b21a8 75%, #1a0033 100%)`,
          opacity: 0.7,
        }}
      />

      {/* 장면 1: 2026년 / 당신의 운세는? */}
      {isScene1 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D
            text="2026년"
            startDelay={0}
            sceneStart={SCENE_1_START}
            sceneDuration={SCENE_1_DURATION}
            color="#fbbf24"
            frame={frame}
          />
          <Text3D
            text="당신의"
            startDelay={20}
            sceneStart={SCENE_1_START}
            sceneDuration={SCENE_1_DURATION}
            color="#ffffff"
            frame={frame}
          />
          <Text3D
            text="운세는?"
            startDelay={35}
            sceneStart={SCENE_1_START}
            sceneDuration={SCENE_1_DURATION}
            color="#ec4899"
            frame={frame}
          />
        </AbsoluteFill>
      )}

      {/* 장면 2: 생년월일만 / 입력하면 */}
      {isScene2 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D
            text="생년월일만"
            startDelay={0}
            sceneStart={SCENE_2_START}
            sceneDuration={SCENE_2_DURATION}
            color="#60a5fa"
            frame={frame}
          />
          <Text3D
            text="입력하면"
            startDelay={25}
            sceneStart={SCENE_2_START}
            sceneDuration={SCENE_2_DURATION}
            color="#ffffff"
            frame={frame}
          />
          <div style={{ marginTop: 40 }}>
            <Text3D
              text="19900101"
              startDelay={45}
              sceneStart={SCENE_2_START}
              sceneDuration={SCENE_2_DURATION}
              color="#fbbf24"
              frame={frame}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 3: AI가 / 분석하는 / 맞춤 운세 */}
      {isScene3 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D
            text="AI가"
            startDelay={0}
            sceneStart={SCENE_3_START}
            sceneDuration={SCENE_3_DURATION}
            color="#a78bfa"
            frame={frame}
          />
          <Text3D
            text="분석하는"
            startDelay={15}
            sceneStart={SCENE_3_START}
            sceneDuration={SCENE_3_DURATION}
            color="#ffffff"
            frame={frame}
          />
          <Text3D
            text="맞춤 운세"
            startDelay={35}
            sceneStart={SCENE_3_START}
            sceneDuration={SCENE_3_DURATION}
            color="#ec4899"
            frame={frame}
          />
        </AbsoluteFill>
      )}

      {/* 장면 4: 이모지들 */}
      {isScene4 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>
            <Emoji3D emoji="💰" text="재물운" delay={0} sceneStart={SCENE_4_START} frame={frame} />
            <Emoji3D emoji="💕" text="애정운" delay={10} sceneStart={SCENE_4_START} frame={frame} />
            <Emoji3D emoji="💚" text="건강운" delay={20} sceneStart={SCENE_4_START} frame={frame} />
            <Emoji3D emoji="💼" text="직장운" delay={30} sceneStart={SCENE_4_START} frame={frame} />
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 5: CTA */}
      {isScene5 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 60,
          }}
        >
          <Text3D
            text="지금 바로"
            startDelay={0}
            sceneStart={SCENE_5_START}
            sceneDuration={SCENE_5_DURATION}
            color="#ffffff"
            frame={frame}
          />
          <Text3D
            text="무료로!"
            startDelay={20}
            sceneStart={SCENE_5_START}
            sceneDuration={SCENE_5_DURATION}
            color="#fbbf24"
            frame={frame}
          />

          {/* URL */}
          <div style={{ marginTop: 40 }}>
            <Text3D
              text="saju2026.com"
              startDelay={40}
              sceneStart={SCENE_5_START}
              sceneDuration={SCENE_5_DURATION}
              color="#fbbf24"
              frame={frame}
            />
          </div>

          {/* 서브텍스트 */}
          <div
            style={{
              fontSize: 40,
              color: '#ffffff',
              fontWeight: 600,
              marginTop: 20,
              opacity: interpolate(
                frame - SCENE_5_START,
                [60, 80],
                [0, 1],
                {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: Easing.out(Easing.cubic),
                }
              ),
            }}
          >
            🎁 2026년 신년운세 + 오늘의 운세
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
