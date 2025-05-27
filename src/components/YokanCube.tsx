'use client';

/**
 * @file YokanCube.tsx
 * @description 直方体の羊羹（ようかん）を表示するReactコンポーネント (CSSアニメーションとuseEffect制御)
 *
 * ## 概要
 * CSSの@keyframesアニメーションを、ReactのuseEffectフックでトリガーして直方体が登場するアニメーションを描画します。
 * ホバーした面に合わせてキューブが回転します。
 *
 * ## 主な仕様
 * - 直方体は6つの面で構成されます。
 * - 登場時に拡大・透明状態から通常状態にアニメーションします（CSSアニメーション）。
 * - 登場アニメーションと同時に集中線が表示・消滅するアニメーションを実行します（CSSアニメーション）。
 * - コンポーネントマウント時にアニメーションを開始します。
 * - ホバーした面に合わせてキューブが回転し、その面が見やすくなるようにします。
 *
 * ## 制限事項
 * - CSSによる3D表現は、ブラウザの互換性やパフォーマンスに影響を与える可能性があります。
 * - 現時点では、直方体のサイズや色は固定です。
 * - ホバー時の回転角度は固定値です。より滑らかなインタラクションにはJavaScriptアニメーションライブラリが適している場合があります。
 */
import React, { useEffect, useState } from 'react';
import './YokanCube.css';

/**
 * YokanCubeコンポーネント
 * @returns {React.ReactElement} 直方体のJSX要素
 */
const YokanCube: React.FC = () => {
  const [is_animated, setIsAnimated] = useState(false);
  const [hovered_face, setHoveredFace] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const container_classes = `yokan_scene ${is_animated ? 'is_animated' : ''}`;
  const cube_classes = `yokan_cube ${is_animated ? 'is_animated' : ''} ${hovered_face ? `hover_${hovered_face}` : ''}`;
  const focus_lines_classes = `focus_lines_container ${is_animated ? 'is_animated' : ''}`;

  return (
    <div className={container_classes}>
      <div className={focus_lines_classes}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`focus_line ${is_animated ? 'is_animated' : ''}`}
            style={{ transform: `translate(-50%, 0) rotate(${i * 45}deg)` }}
          />
        ))}
      </div>
      <div className={cube_classes}>
        <div
          className="yokan_face yokan_face--front"
          onMouseEnter={() => setHoveredFace('front')}
          onMouseLeave={() => setHoveredFace(null)}
        >前面</div>
        <div
          className="yokan_face yokan_face--back"
          onMouseEnter={() => setHoveredFace('back')}
          onMouseLeave={() => setHoveredFace(null)}
        >背面</div>
        <div
          className="yokan_face yokan_face--right"
          onMouseEnter={() => setHoveredFace('right')}
          onMouseLeave={() => setHoveredFace(null)}
        >右面</div>
        <div
          className="yokan_face yokan_face--top"
          onMouseEnter={() => setHoveredFace('top')}
          onMouseLeave={() => setHoveredFace(null)}
        >上面</div>
      </div>
    </div>
  );
};

export default YokanCube; 