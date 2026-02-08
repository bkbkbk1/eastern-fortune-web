import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Audio, staticFile } from 'remotion';

export const PromoVideoMinimal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 장면 타이밍 (30fps 기준) - 총 15초
  const scene1Duration = 90; // 3초
  const scene2Duration = 90; // 3초
  const scene3Duration = 90; // 3초
  const scene4Duration = 90; // 3초
  const scene5Duration = 90; // 3초

  // 현재 장면
  const currentScene =
    frame < scene1Duration ? 1 :
    frame < scene1Duration + scene2Duration ? 2 :
    frame < scene1Duration + scene2Duration + scene3Duration ? 3 :
    frame < scene1Duration + scene2Duration + scene3Duration + scene4Duration ? 4 : 5;

  // 장면별 progress
  const getProgress = (sceneStart: number, duration: number) => {
    const localFrame = frame - sceneStart;
    return Math.max(0, Math.min(localFrame / duration, 1));
  };

  const scene1Progress = getProgress(0, scene1Duration);
  const scene2Progress = getProgress(scene1Duration, scene2Duration);
  const scene3Progress = getProgress(scene1Duration + scene2Duration, scene3Duration);
  const scene4Progress = getProgress(scene1Duration + scene2Duration + scene3Duration, scene4Duration);
  const scene5Progress = getProgress(scene1Duration + scene2Duration + scene3Duration + scene4Duration, scene5Duration);

  // 부드러운 페이드인 애니메이션
  const fadeIn = (progress: number, delay: number = 0) => {
    return spring({
      frame: (progress * fps * 3) - delay,
      fps,
      config: { damping: 30 },
    });
  };

  // 녹색 원형 애니메이션
  const FloatingCircle = ({ x, y, delay, size = 60 }: { x: number; y: number; delay: number; size?: number }) => {
    const opacity = fadeIn(currentScene === 1 ? scene1Progress : currentScene === 2 ? scene2Progress : currentScene === 3 ? scene3Progress : currentScene === 4 ? scene4Progress : scene5Progress, delay);
    const floatY = Math.sin((frame + delay) / 15) * 10;

    return (
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y + floatY,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'rgba(34, 197, 94, 0.2)',
          opacity: opacity * 0.6,
        }}
      />
    );
  };

  return (
    <AbsoluteFill style={{ backgroundColor: '#fafafa' }}>
      {/* 배경 음악 */}
      <Audio src={staticFile('background-music.mp3')} volume={0.2} />

      {/* 장면 1: 2026년 당신의 운세는? */}
      {currentScene === 1 && (
        <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FloatingCircle x={200} y={150} delay={0} size={80} />
          <FloatingCircle x={1600} y={800} delay={20} size={60} />
          <FloatingCircle x={300} y={700} delay={40} size={50} />

          <div style={{ textAlign: 'center', opacity: fadeIn(scene1Progress, 0) }}>
            <p style={{ fontSize: 32, color: '#9ca3af', fontWeight: 500, margin: 0, marginBottom: 20 }}>
              2026년
            </p>
            <h1 style={{ fontSize: 120, color: '#1f2937', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              당신의 운세는?
            </h1>

            {/* 녹색 밑줄 효과 */}
            <div
              style={{
                marginTop: 30,
                height: 8,
                background: 'rgba(34, 197, 94, 0.3)',
                width: `${interpolate(scene1Progress, [0.3, 0.8], [0, 400])}px`,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 4,
              }}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 2: 무료 / 빠른 결과 */}
      {currentScene === 2 && (
        <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FloatingCircle x={1500} y={200} delay={0} size={70} />
          <FloatingCircle x={400} y={850} delay={25} size={55} />

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 36, color: '#9ca3af', fontWeight: 500, margin: 0, marginBottom: 30, opacity: fadeIn(scene2Progress, 0) }}>
              생년월일만 입력
            </p>

            <div style={{ display: 'flex', gap: 100, justifyContent: 'center', marginTop: 60 }}>
              <div style={{ opacity: fadeIn(scene2Progress, 10) }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontSize: 80 }}>⚡</span>
                </div>
                <p style={{ fontSize: 48, color: '#1f2937', fontWeight: 700, margin: 0 }}>빠른</p>
                <p style={{ fontSize: 32, color: '#6b7280', fontWeight: 500, margin: 0 }}>결과</p>
              </div>

              <div style={{ opacity: fadeIn(scene2Progress, 20) }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontSize: 80 }}>🎁</span>
                </div>
                <p style={{ fontSize: 48, color: '#1f2937', fontWeight: 700, margin: 0 }}>100%</p>
                <p style={{ fontSize: 32, color: '#6b7280', fontWeight: 500, margin: 0 }}>무료</p>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 3: AI 분석 */}
      {currentScene === 3 && (
        <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FloatingCircle x={250} y={250} delay={0} size={90} />
          <FloatingCircle x={1650} y={700} delay={15} size={65} />

          <div style={{ textAlign: 'center', opacity: fadeIn(scene3Progress, 0) }}>
            <p style={{ fontSize: 36, color: '#9ca3af', fontWeight: 500, margin: 0, marginBottom: 40 }}>
              AI가 분석하는
            </p>
            <h1 style={{ fontSize: 110, color: '#1f2937', fontWeight: 700, margin: 0 }}>
              맞춤 운세
            </h1>

            {/* 녹색 화살표 */}
            <div style={{ marginTop: 50, opacity: fadeIn(scene3Progress, 20) }}>
              <svg width="300" height="20" style={{ overflow: 'visible' }}>
                <path
                  d={`M 0 10 L ${interpolate(scene3Progress, [0.3, 0.8], [0, 250])} 10`}
                  stroke="rgba(34, 197, 94, 0.5)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                {scene3Progress > 0.6 && (
                  <>
                    <path
                      d={`M ${interpolate(scene3Progress, [0.6, 0.9], [230, 250])} 10 L 240 5`}
                      stroke="rgba(34, 197, 94, 0.5)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M ${interpolate(scene3Progress, [0.6, 0.9], [230, 250])} 10 L 240 15`}
                      stroke="rgba(34, 197, 94, 0.5)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 4: 4가지 운세 */}
      {currentScene === 4 && (
        <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FloatingCircle x={1700} y={150} delay={0} size={75} />
          <FloatingCircle x={200} y={800} delay={30} size={60} />

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 42, color: '#9ca3af', fontWeight: 600, margin: 0, marginBottom: 60, opacity: fadeIn(scene4Progress, 0) }}>
              한눈에 보는
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 900 }}>
              {[
                { emoji: '💰', label: '재물운', delay: 10 },
                { emoji: '💕', label: '애정운', delay: 20 },
                { emoji: '💚', label: '건강운', delay: 30 },
                { emoji: '💼', label: '직장운', delay: 40 },
              ].map((item, i) => (
                <div key={i} style={{ opacity: fadeIn(scene4Progress, item.delay) }}>
                  <div
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      background: 'rgba(34, 197, 94, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    <span style={{ fontSize: 90 }}>{item.emoji}</span>
                  </div>
                  <p style={{ fontSize: 40, color: '#1f2937', fontWeight: 700, margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* 장면 5: CTA */}
      {currentScene === 5 && (
        <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FloatingCircle x={300} y={200} delay={0} size={100} />
          <FloatingCircle x={1550} y={750} delay={20} size={80} />
          <FloatingCircle x={800} y={100} delay={40} size={60} />

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 40, color: '#9ca3af', fontWeight: 500, margin: 0, marginBottom: 40, opacity: fadeIn(scene5Progress, 0) }}>
              지금 바로 확인하세요
            </p>

            <div
              style={{
                fontSize: 100,
                color: '#1f2937',
                fontWeight: 700,
                background: 'rgba(34, 197, 94, 0.15)',
                padding: '40px 80px',
                borderRadius: 30,
                opacity: fadeIn(scene5Progress, 15),
                display: 'inline-block',
              }}
            >
              saju2026.com
            </div>

            <p style={{ fontSize: 36, color: '#6b7280', fontWeight: 600, marginTop: 60, opacity: fadeIn(scene5Progress, 30) }}>
              🎁 2026년 신년운세 + 오늘의 운세
            </p>

            {/* 녹색 밑줄 */}
            <div
              style={{
                marginTop: 30,
                height: 6,
                background: 'rgba(34, 197, 94, 0.4)',
                width: `${interpolate(scene5Progress, [0.5, 1], [0, 500])}px`,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 3,
              }}
            />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
