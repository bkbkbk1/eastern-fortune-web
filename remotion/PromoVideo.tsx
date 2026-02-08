import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Audio, staticFile } from 'remotion';

export const PromoVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 장면 타이밍 (30fps 기준)
  const scene1Duration = 90; // 3초
  const scene2Duration = 90; // 3초
  const scene3Duration = 90; // 3초
  const scene4Duration = 90; // 3초
  const scene5Duration = 90; // 3초

  // 배경 그라데이션 애니메이션
  const gradientRotation = interpolate(frame, [0, 450], [0, 360]);

  // 반짝이는 별 생성
  const stars = Array.from({ length: 30 }, (_, i) => {
    const delay = i * 3;
    const opacity = spring({
      frame: frame - delay,
      fps,
      config: { damping: 100 },
    });
    const scale = interpolate(
      (frame - delay) % 60,
      [0, 30, 60],
      [0, 1, 0],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
    return {
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      opacity,
      scale,
      size: Math.random() * 4 + 2,
    };
  });

  // 현재 장면 계산
  const currentScene =
    frame < scene1Duration ? 1 :
    frame < scene1Duration + scene2Duration ? 2 :
    frame < scene1Duration + scene2Duration + scene3Duration ? 3 :
    frame < scene1Duration + scene2Duration + scene3Duration + scene4Duration ? 4 : 5;

  // 장면별 애니메이션
  const scene1Progress = Math.min(frame / scene1Duration, 1);
  const scene2Progress = Math.max(0, Math.min((frame - scene1Duration) / scene2Duration, 1));
  const scene3Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration) / scene3Duration, 1));
  const scene4Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration - scene3Duration) / scene4Duration, 1));
  const scene5Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration - scene3Duration - scene4Duration) / scene5Duration, 1));

  // 강력한 스케일 애니메이션
  const explosiveScale = (progress: number) => {
    return interpolate(progress, [0, 0.3, 1], [0, 1.2, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  // 펄스 효과
  const pulse = (frameOffset: number) => {
    return 1 + Math.sin((frame - frameOffset) / 10) * 0.1;
  };

  // 텍스트 슬라이드 애니메이션 (화면 밖에서 날아옴)
  const slideFromLeft = (progress: number) => {
    return interpolate(progress, [0, 0.5], [-2000, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const slideFromRight = (progress: number) => {
    return interpolate(progress, [0, 0.5], [2000, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const slideFromTop = (progress: number) => {
    return interpolate(progress, [0, 0.5], [-1000, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const slideFromBottom = (progress: number) => {
    return interpolate(progress, [0, 0.5], [1000, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  // 회전 애니메이션
  const spinIn = (progress: number) => {
    return interpolate(progress, [0, 0.5], [720, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* 배경 음악 */}
      <Audio src={staticFile('background-music.mp3')} volume={0.3} />

      {/* 애니메이션 배경 그라데이션 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradientRotation}deg, #9333ea 0%, #ec4899 25%, #f59e0b 50%, #6366f1 75%, #9333ea 100%)`,
          opacity: 0.9,
        }}
      />

      {/* 오버레이 그라데이션 */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* 반짝이는 별들 */}
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: star.opacity * star.scale * 0.8,
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255,255,255,0.5)`,
            transform: `scale(${star.scale})`,
          }}
        />
      ))}

      {/* 장면 1: 2026년, 당신의 운세는? */}
      {currentScene === 1 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            opacity: interpolate(scene1Progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          }}
        >
          {/* 이모지 - 회전하며 등장 */}
          <div
            style={{
              fontSize: 200,
              transform: `scale(${explosiveScale(scene1Progress)}) rotate(${spinIn(scene1Progress)}deg)`,
              filter: 'drop-shadow(0 0 40px rgba(147,51,234,1))',
            }}
          >
            🔮
          </div>

          {/* 첫 번째 줄: 왼쪽에서 슝! */}
          <h1
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              textShadow: '0 0 60px rgba(147,51,234,1), 0 0 120px rgba(236,72,153,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromLeft(scene1Progress)}px) rotate(${spinIn(scene1Progress) / 4}deg)`,
              filter: `blur(${interpolate(scene1Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            2026년,
          </h1>

          {/* 두 번째 줄: 오른쪽에서 슝! */}
          <h1
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              marginTop: -30,
              textShadow: '0 0 60px rgba(147,51,234,1), 0 0 120px rgba(236,72,153,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromRight(scene1Progress)}px) rotate(${-spinIn(scene1Progress) / 4}deg)`,
              filter: `blur(${interpolate(scene1Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            당신의 운세는?
          </h1>

          {/* 펄스 링들 */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: 400 + i * 200,
                height: 400 + i * 200,
                border: '4px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                transform: `scale(${scene1Progress * (2 + i * 0.3)})`,
                opacity: (1 - scene1Progress) * (1 - i * 0.3),
              }}
            />
          ))}
        </AbsoluteFill>
      )}

      {/* 장면 2: 생년월일만 입력하면 */}
      {currentScene === 2 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
            opacity: interpolate(scene2Progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          }}
        >
          {/* 이모지 - 위에서 아래로 */}
          <div
            style={{
              fontSize: 180,
              transform: `translateY(${slideFromTop(scene2Progress)}px) scale(${explosiveScale(scene2Progress) * pulse(scene1Duration)}) rotate(${spinIn(scene2Progress)}deg)`,
              filter: 'drop-shadow(0 0 40px rgba(59,130,246,1))',
            }}
          >
            ⌨️
          </div>

          {/* 첫 번째 줄: 오른쪽에서 */}
          <h1
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              textShadow: '0 0 60px rgba(59,130,246,1), 0 0 120px rgba(147,51,234,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromRight(scene2Progress)}px) scale(${explosiveScale(scene2Progress)})`,
              filter: `blur(${interpolate(scene2Progress, [0, 0.3], [15, 0])}px)`,
            }}
          >
            생년월일만
          </h1>

          {/* 두 번째 줄: 왼쪽에서 */}
          <h1
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              marginTop: -40,
              textShadow: '0 0 60px rgba(59,130,246,1), 0 0 120px rgba(147,51,234,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromLeft(scene2Progress)}px) scale(${explosiveScale(scene2Progress)})`,
              filter: `blur(${interpolate(scene2Progress, [0, 0.3], [15, 0])}px)`,
            }}
          >
            입력하면
          </h1>

          {/* 생년월일 예시 - 아래에서 위로 */}
          <div
            style={{
              fontSize: 80,
              color: '#000',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              padding: '30px 80px',
              borderRadius: 30,
              transform: `translateY(${slideFromBottom(scene2Progress)}px) scale(${explosiveScale(scene2Progress) * pulse(scene1Duration)}) rotate(${spinIn(scene2Progress) / 2}deg)`,
              boxShadow: '0 0 80px rgba(251,191,36,1), 0 20px 60px rgba(0,0,0,0.3)',
              filter: `blur(${interpolate(scene2Progress, [0, 0.3], [10, 0])}px)`,
            }}
          >
            19900101
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 3: AI가 분석하는 맞춤 운세 */}
      {currentScene === 3 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
            opacity: interpolate(scene3Progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          }}
        >
          {/* AI 회로 배경 - 가로세로 움직임 */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: i % 2 === 0 ? '100%' : 4,
                height: i % 2 === 0 ? 4 : '100%',
                background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
                top: i % 2 === 0 ? `${10 + i * 15}%` : 0,
                left: i % 2 === 1 ? `${10 + i * 15}%` : 0,
                transform: i % 2 === 0
                  ? `translateX(${interpolate((frame - scene1Duration - scene2Duration + i * 10) % 60, [0, 60], [-1920, 1920])}px)`
                  : `translateY(${interpolate((frame - scene1Duration - scene2Duration + i * 10) % 60, [0, 60], [-1080, 1080])}px)`,
                opacity: 0.5,
              }}
            />
          ))}

          {/* 이모지 - 폭발적 등장 */}
          <div
            style={{
              fontSize: 200,
              transform: `scale(${explosiveScale(scene3Progress) * pulse(scene1Duration + scene2Duration)}) rotate(${spinIn(scene3Progress)}deg)`,
              filter: 'drop-shadow(0 0 60px rgba(99,102,241,1))',
            }}
          >
            🤖
          </div>

          {/* 첫 번째 줄: 위에서 */}
          <h1
            style={{
              fontSize: 110,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              textShadow: '0 0 80px rgba(99,102,241,1), 0 0 150px rgba(147,51,234,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateY(${slideFromTop(scene3Progress)}px) scale(${explosiveScale(scene3Progress)})`,
              filter: `blur(${interpolate(scene3Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            AI가 분석하는
          </h1>

          {/* 두 번째 줄: 아래에서 */}
          <h1
            style={{
              fontSize: 110,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              marginTop: -40,
              textShadow: '0 0 80px rgba(99,102,241,1), 0 0 150px rgba(147,51,234,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateY(${slideFromBottom(scene3Progress)}px) scale(${explosiveScale(scene3Progress)})`,
              filter: `blur(${interpolate(scene3Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            맞춤 운세
          </h1>
        </AbsoluteFill>
      )}

      {/* 장면 4: 재물/애정/건강/직장 */}
      {currentScene === 4 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 60,
            opacity: interpolate(scene4Progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          }}
        >
          {/* 제목 - 확대하며 회전 */}
          <h1
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              marginBottom: 20,
              textShadow: '0 0 60px rgba(236,72,153,1)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `scale(${explosiveScale(scene4Progress)}) rotate(${spinIn(scene4Progress) / 3}deg)`,
              filter: `blur(${interpolate(scene4Progress, [0, 0.3], [15, 0])}px)`,
            }}
          >
            4가지 운세 한눈에!
          </h1>

          <div
            style={{
              display: 'flex',
              gap: 60,
            }}
          >
            {[
              { icon: '💰', label: '재물운', delay: 0, color: '#fbbf24', direction: 'left' },
              { icon: '💕', label: '애정운', delay: 5, color: '#ec4899', direction: 'top' },
              { icon: '💚', label: '건강운', delay: 10, color: '#10b981', direction: 'bottom' },
              { icon: '💼', label: '직장운', delay: 15, color: '#6366f1', direction: 'right' },
            ].map((item, i) => {
              const itemProgress = Math.max(0, scene4Progress - item.delay / 90);
              const slideX = item.direction === 'left' ? slideFromLeft(itemProgress) :
                            item.direction === 'right' ? slideFromRight(itemProgress) : 0;
              const slideY = item.direction === 'top' ? slideFromTop(itemProgress) :
                            item.direction === 'bottom' ? slideFromBottom(itemProgress) : 0;

              return (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    transform: `translateX(${slideX}px) translateY(${slideY}px) scale(${explosiveScale(itemProgress)}) rotate(${spinIn(itemProgress) / 2}deg)`,
                    filter: `drop-shadow(0 0 40px ${item.color}) blur(${interpolate(itemProgress, [0, 0.3], [10, 0])}px)`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 140,
                      transform: `scale(${pulse(scene1Duration + scene2Duration + scene3Duration + item.delay)})`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 50,
                      color: 'white',
                      fontWeight: 'bold',
                      marginTop: 10,
                      textShadow: `0 0 30px ${item.color}`,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 5: CTA */}
      {currentScene === 5 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
            opacity: interpolate(scene5Progress, [0, 0.1], [0, 1]),
          }}
        >
          {/* 폭죽 효과 */}
          {[...Array(40)].map((_, i) => {
            const angle = (i / 40) * Math.PI * 2;
            const distance = interpolate(scene5Progress, [0, 0.5, 1], [0, 500, 600]);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  background: `hsl(${i * 9}, 100%, 60%)`,
                  transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(${1 - scene5Progress})`,
                  opacity: 1 - scene5Progress,
                  boxShadow: `0 0 30px hsl(${i * 9}, 100%, 50%)`,
                }}
              />
            );
          })}

          {/* 이모지 */}
          <div
            style={{
              fontSize: 180,
              transform: `scale(${explosiveScale(scene5Progress) * pulse(scene1Duration + scene2Duration + scene3Duration + scene4Duration)}) rotate(${spinIn(scene5Progress)}deg)`,
              filter: 'drop-shadow(0 0 80px rgba(251,191,36,1))',
            }}
          >
            ✨
          </div>

          {/* 첫 번째 줄: 왼쪽에서 */}
          <h1
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              textShadow: '0 0 80px rgba(251,191,36,1), 0 0 150px rgba(236,72,153,1)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromLeft(scene5Progress)}px) scale(${explosiveScale(scene5Progress)})`,
              filter: `blur(${interpolate(scene5Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            지금 바로
          </h1>

          {/* 두 번째 줄: 오른쪽에서 */}
          <h1
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              marginTop: -40,
              textShadow: '0 0 80px rgba(251,191,36,1), 0 0 150px rgba(236,72,153,1)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateX(${slideFromRight(scene5Progress)}px) scale(${explosiveScale(scene5Progress)})`,
              filter: `blur(${interpolate(scene5Progress, [0, 0.3], [20, 0])}px)`,
            }}
          >
            무료로 확인하세요!
          </h1>

          {/* URL - 아래에서 위로 폭발 */}
          <div
            style={{
              fontSize: 90,
              color: '#000',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ec4899 100%)',
              padding: '40px 100px',
              borderRadius: 40,
              transform: `translateY(${slideFromBottom(scene5Progress)}px) scale(${explosiveScale(scene5Progress) * pulse(scene1Duration + scene2Duration + scene3Duration + scene4Duration)}) rotate(${spinIn(scene5Progress) / 2}deg)`,
              boxShadow: '0 0 100px rgba(251,191,36,1), 0 30px 80px rgba(0,0,0,0.5)',
              border: '5px solid white',
              filter: `blur(${interpolate(scene5Progress, [0, 0.3], [15, 0])}px)`,
            }}
          >
            saju2026.com
          </div>

          {/* 서브텍스트 - 페이드인 */}
          <div
            style={{
              fontSize: 45,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 20,
              textShadow: '0 0 40px rgba(147,51,234,1)',
              transform: `scale(${explosiveScale(scene5Progress)})`,
              opacity: interpolate(scene5Progress, [0.3, 0.6], [0, 1]),
            }}
          >
            🎁 2026년 신년운세 + 오늘의 운세
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
