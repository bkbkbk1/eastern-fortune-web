import { Composition, registerRoot } from 'remotion';
import { PromoVideo } from './PromoVideo';
import { PromoVideoMinimal } from './PromoVideoMinimal';
import { PromoVideo3D } from './PromoVideo3D';
import { PromoVideo3DPro } from './PromoVideo3DPro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PromoVideo"
        component={PromoVideo}
        durationInFrames={450} // 15초 (30fps)
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="PromoVideoMinimal"
        component={PromoVideoMinimal}
        durationInFrames={450} // 15초 (30fps)
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="PromoVideo3D"
        component={PromoVideo3D}
        durationInFrames={450} // 15초 (30fps)
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="PromoVideo3DPro"
        component={PromoVideo3DPro}
        durationInFrames={450} // 15초 (30fps)
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};

registerRoot(RemotionRoot);
