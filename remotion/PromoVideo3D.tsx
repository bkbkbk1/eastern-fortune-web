import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Audio, staticFile } from 'remotion';

export const PromoVideo3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 장면 타이밍
  const scene1Duration = 90; // 3초
  const scene2Duration = 90; // 3초
  const scene3Duration = 90; // 3초
  const scene4Duration = 90; // 3초
  const scene5Duration = 90; // 3초

  const currentScene =
    frame < scene1Duration ? 1 :
    frame < scene1Duration + scene2Duration ? 2 :
    frame < scene1Duration + scene2Duration + scene3Duration ? 3 :
    frame < scene1Duration + scene2Duration + scene3Duration + scene4Duration ? 4 : 5;

  // 3D 글자 애니메이션
  const Text3D = ({
    text,
    delay,
    sceneProgress,
    color = '#ffffff'
  }: {
    text: string;
    delay: number;
    sceneProgress: number;
    color?: string;
  }) => {
    return (
      <div style={{ display: 'flex', gap: 15 }}>
        {text.split('').map((char, i) => {
          const charDelay = delay + i * 3;
          const charProgress = Math.max(0, (sceneProgress * 90 - charDelay) / 20);

          const scale = spring({
            frame: sceneProgress * 90 - charDelay,
            fps,
            config: { damping: 15, mass: 0.5 },
          });

          const rotateX = interpolate(charProgress, [0, 1], [90, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          const rotateY = interpolate(charProgress, [0, 1], [180, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          const translateZ = interpolate(charProgress, [0, 0.5, 1], [200, -50, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <span
              key={i}
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
                  scale(${scale})
                `,
                textShadow: `
                  0 0 40px rgba(147,51,234,0.8),
                  0 0 80px rgba(236,72,153,0.5),
                  ${translateZ * 0.5}px ${translateZ * 0.5}px ${Math.abs(translateZ)}px rgba(0,0,0,0.3)
                `,
                filter: `blur(${Math.max(0, (1 - charProgress) * 10)}px)`,
                opacity: charProgress,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    );
  };

  // 장면별 progress
  const scene1Progress = Math.min(frame / scene1Duration, 1);
  const scene2Progress = Math.max(0, Math.min((frame - scene1Duration) / scene2Duration, 1));
  const scene3Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration) / scene3Duration, 1));
  const scene4Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration - scene3Duration) / scene4Duration, 1));
  const scene5Progress = Math.max(0, Math.min((frame - scene1Duration - scene2Duration - scene3Duration - scene4Duration) / scene5Duration, 1));

  // 배경 회전
  const bgRotation = interpolate(frame, [0, 450], [0, 360]);

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
      {currentScene === 1 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D text="2026년" delay={0} sceneProgress={scene1Progress} color="#fbbf24" />
          <Text3D text="당신의" delay={20} sceneProgress={scene1Progress} color="#ffffff" />
          <Text3D text="운세는?" delay={35} sceneProgress={scene1Progress} color="#ec4899" />
        </AbsoluteFill>
      )}

      {/* 장면 2: 생년월일만 / 입력하면 */}
      {currentScene === 2 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D text="생년월일만" delay={0} sceneProgress={scene2Progress} color="#60a5fa" />
          <Text3D text="입력하면" delay={25} sceneProgress={scene2Progress} color="#ffffff" />

          {/* 숫자 예시도 3D로 */}
          <div style={{ marginTop: 40 }}>
            <Text3D text="19900101" delay={45} sceneProgress={scene2Progress} color="#fbbf24" />
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 3: AI가 / 분석하는 / 맞춤 운세 */}
      {currentScene === 3 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <Text3D text="AI가" delay={0} sceneProgress={scene3Progress} color="#a78bfa" />
          <Text3D text="분석하는" delay={15} sceneProgress={scene3Progress} color="#ffffff" />
          <Text3D text="맞춤 운세" delay={35} sceneProgress={scene3Progress} color="#ec4899" />
        </AbsoluteFill>
      )}

      {/* 장면 4: 이모지들이 3D로 */}
      {currentScene === 4 && (
        <AbsoluteFill
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>
            {[
              { emoji: '💰', text: '재물운', delay: 0 },
              { emoji: '💕', text: '애정운', delay: 10 },
              { emoji: '💚', text: '건강운', delay: 20 },
              { emoji: '💼', text: '직장운', delay: 30 },
            ].map((item, i) => {
              const itemProgress = Math.max(0, (scene4Progress * 90 - item.delay) / 20);
              const scale = spring({
                frame: scene4Progress * 90 - item.delay,
                fps,
                config: { damping: 12 },
              });

              const rotateY = interpolate(itemProgress, [0, 1], [360, 0], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              const translateZ = interpolate(itemProgress, [0, 0.5, 1], [300, -80, 0], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    transform: `
                      perspective(1000px)
                      rotateY(${rotateY}deg)
                      translateZ(${translateZ}px)
                      scale(${scale})
                    `,
                    opacity: itemProgress,
                  }}
                >
                  <div style={{ fontSize: 140, marginBottom: 20 }}>{item.emoji}</div>
                  <div style={{ fontSize: 50, color: '#ffffff', fontWeight: 900 }}>
                    {item.text}
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
            gap: 60,
          }}
        >
          <Text3D text="지금 바로" delay={0} sceneProgress={scene5Progress} color="#ffffff" />
          <Text3D text="무료로!" delay={20} sceneProgress={scene5Progress} color="#fbbf24" />

          {/* URL도 3D로 */}
          <div style={{ marginTop: 40 }}>
            {(() => {
              const urlText = "saju2026.com";
              const urlDelay = 40;
              return (
                <div style={{ display: 'flex', gap: 8 }}>
                  {urlText.split('').map((char, i) => {
                    const charDelay = urlDelay + i * 2;
                    const charProgress = Math.max(0, (scene5Progress * 90 - charDelay) / 15);

                    const scale = spring({
                      frame: scene5Progress * 90 - charDelay,
                      fps,
                      config: { damping: 10 },
                    });

                    const rotateX = interpolate(charProgress, [0, 1], [-90, 0], {
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp',
                    });

                    const translateZ = interpolate(charProgress, [0, 1], [150, 0], {
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp',
                    });

                    return (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          fontSize: 90,
                          fontWeight: 900,
                          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ec4899 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          transform: `
                            perspective(800px)
                            rotateX(${rotateX}deg)
                            translateZ(${translateZ}px)
                            scale(${scale})
                          `,
                          textShadow: `0 0 60px rgba(251,191,36,0.8)`,
                          filter: `blur(${Math.max(0, (1 - charProgress) * 8)}px)`,
                          opacity: charProgress,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
              );
            })()}
          </div>

          {/* 서브텍스트 */}
          <div
            style={{
              fontSize: 40,
              color: '#ffffff',
              fontWeight: 600,
              marginTop: 20,
              opacity: interpolate(scene5Progress, [0.6, 1], [0, 1]),
            }}
          >
            🎁 2026년 신년운세 + 오늘의 운세
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
