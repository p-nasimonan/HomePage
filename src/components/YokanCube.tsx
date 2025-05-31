'use client';
import { css, cva, cx } from '../../styled-system/css';

// YokanCube が受け取るプロップスの型定義
interface YokanCubeProps {
  scale?: number;
  rotateX?: number;
  rotateY?: number;
  opacity?: number;
  // 必要に応じて他のプロップスを追加
}

// キューブ全体のコンテナのスタイルレシピ (Perspective を含む)
export const yokanSceneStyles = cva({
  base: {
    width: '100%',
    height: '100%',
    perspective: '600px', // 3D表示に必須
    position: 'relative',
    display: 'flex', // キューブを中央に配置するために追加
    justifyContent: 'center', // 中央配置
    alignItems: 'center', // 中央配置
  },
});

// キューブ本体のスタイルレシピ (transform-style を含む)
export const yokanCubeStyles = cva({
  base: {
    width: '200px', // キューブ本体のサイズ (面のサイズに合わせて調整)
    height: '200px', // 幅に合わせて修正しました
    position: 'relative',
    transformStyle: 'preserve-3d', // 3D表示に必須
    transition: 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out', // ホバーアニメーション用 + 透明度
  }
});

// キューブの面のスタイルレシピ
export const yokanFaceStyles = cva({
  base: {
    position: 'absolute',
    backgroundColor: '#D2B48C', // 羊羹の色
    border: '1px solid #A0522D', // 枠線
    color: 'white',
    fontSize: '16px',
    textAlign: 'center',
    backfaceVisibility: 'hidden', // 裏面を非表示
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
   variants: {
    face: {
      front: {
        width: '200px', height: '100px', transform: 'translateZ(50px)',
      },
      back: {
        width: '200px', height: '100px', transform: 'rotateY(180deg) translateZ(50px)',
      },
      right: {
        width: '100px', height: '100px', transform: 'rotateY(90deg) translateZ(150px)',
      },
      left: { // 左面を追加
        width: '100px', height: '100px', transform: 'rotateY(-90deg) translateZ(50px)',
      },
      top: {
        width: '200px', height: '100px', transform: 'rotateX(90deg) translateZ(50px)',
      },
      bottom: { // 底面を追加
         width: '200px', height: '100px', transform: 'rotateX(-90deg) translateZ(50px)',
      },
    },
  },
  defaultVariants: {
    face: 'front',
  },
});


// 立方体コンポーネント
export default function YokanCube({ scale = 1, rotateX = 0, rotateY = 0, opacity = 1 }: YokanCubeProps) {

  // プロップスで渡されたスタイルを動的に適用
  const dynamicPropsStyles = css({
      // デフォルトの transform は `rotateX(-30deg) rotateY(-45deg)` としました（Animated: true 時の以前の値）
      // プロップスが渡されない場合はこのデフォルトが適用されます
      transform: `scale(${scale}) rotateX(${rotateX === 0 && rotateY === 0 && scale === 1 ? -30 : rotateX}deg) rotateY(${rotateX === 0 && rotateY === 0 && scale === 1 ? -45 : rotateY}deg)`,
      opacity: opacity,
  });


  return (
    // YokanScene コンテナ
    // YokanCubeScrollList 側で perspective を管理する場合、このコンテナは不要になる可能性あり
    <div className={yokanSceneStyles()}> {/* または YokanCubeScrollList 側で perspective を持つラッパーを使用 */}
      {/* YokanCube 本体 */}
      {/* animated バリアントと動的プロップススタイルを結合 */}
      {/* animated: false の animation プロパティとプロップスによるスタイルが同時に適用されるが、
          animation は transform/opacity をアニメーションさせ、プロップスは最終的な値を決定する
          keyframes の end 状態 (100%) をanimated: true のプロップス適用時のデフォルトと合わせることでスムーズに移行
      */}
      <div className={cx(yokanCubeStyles(), dynamicPropsStyles)}> {/* is_animated が false の時に animated: false バリアントを適用 */}
        {/* 各面 */}
        {/* 面のスタイルは YokanCube 自身が管理 */}
        <div className={yokanFaceStyles({ face: "front" })}>前面</div>
        <div className={yokanFaceStyles({ face: "back" })}>背面</div>
        <div className={yokanFaceStyles({ face: "right" })}>右面</div>
        <div className={yokanFaceStyles({ face: "left" })}>左面</div> {/* 左面を追加 */}
        <div className={yokanFaceStyles({ face: "top" })}>上面</div>
        <div className={yokanFaceStyles({ face: "bottom" })}>底面</div> {/* 底面を追加 */}
      </div>
    </div>
  );
} 