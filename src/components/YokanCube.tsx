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
import styled, { keyframes } from 'styled-components';

// アニメーションの定義
const yokanAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(5);
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const focusLinesFadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  20%, 70% {
    opacity: 0.7;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
`;

const focusLineDraw = keyframes`
  0% {
    height: 80px;
    opacity: 0;
  }
  20% {
    height: 85px;
    opacity: 1;
  }
  80% {
    height: 100px;
    opacity: 1;
  }
  100% {
    height: 150px;
    opacity: 0;
  }
`;

// メインのコンテナ
export const YokanScene = styled.div<{ isAnimated?: boolean }>`
  width: 200px;
  height: 100px;
  perspective: 600px;
  margin: auto;
  position: relative;
  opacity: ${props => props.isAnimated ? 1 : 0};
  transform: ${props => props.isAnimated ? 'scale(1)' : 'scale(5)'};
  animation: ${props => props.isAnimated ? `${yokanAppear} 0.8s ease-out forwards` : 'none'};
`;

// キューブ本体
export const YokanCube = styled.div<{ isAnimated?: boolean; hoverFace?: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
  transform: ${props => {
    if (!props.isAnimated) return 'none';
    if (props.hoverFace === 'front') return 'rotateX(-15deg) rotateY(-45deg)';
    if (props.hoverFace === 'back') return 'rotateX(-30deg) rotateY(135deg)';
    if (props.hoverFace === 'right') return 'rotateX(-30deg) rotateY(-60deg)';
    if (props.hoverFace === 'top') return 'rotateX(-45deg) rotateY(-45deg)';
    return 'rotateX(-30deg) rotateY(-45deg)';
  }};
`;

// キューブの面
export const YokanFace = styled.div<{ face: 'front' | 'back' | 'right' | 'top' }>`
  position: absolute;
  background-color: #D2B48C;
  border: 1px solid #A0522D;
  color: white;
  font-size: 16px;
  text-align: center;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    border-color: #00BFFF;
    box-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF;
  }

  ${props => {
    switch (props.face) {
      case 'front':
        return `
          width: 200px;
          height: 100px;
          transform: translateZ(50px);
        `;
      case 'back':
        return `
          width: 200px;
          height: 100px;
          transform: rotateY(180deg) translateZ(50px);
        `;
      case 'right':
        return `
          width: 100px;
          height: 100px;
          transform: rotateY(90deg) translateZ(150px);
        `;
      case 'top':
        return `
          width: 200px;
          height: 100px;
          transform: rotateX(90deg) translateZ(50px);
        `;
    }
  }}
`;

// 集中線のコンテナ
export const FocusLinesContainer = styled.div<{ isAnimated?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 1px;
  pointer-events: none;
  z-index: -1;
  opacity: ${props => props.isAnimated ? 1 : 0};
  transform: ${props => props.isAnimated ? 'scale(1)' : 'scale(0.5)'};
  animation: ${props => props.isAnimated ? `${focusLinesFadeInOut} 0.8s ease-out forwards` : 'none'};
`;

// 集中線
export const FocusLine = styled.div<{ isAnimated?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #FFB6C1;
  transform-origin: bottom center;
  height: 0;
  opacity: 0;
  animation: ${props => props.isAnimated ? `${focusLineDraw} 0.8s ease-out forwards` : 'none'};
`;

/**
 * YokanCubeコンポーネント
 * @returns {React.ReactElement} 直方体のJSX要素
 */
const YokanCubeComponent: React.FC = () => {
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

export default YokanCubeComponent; 