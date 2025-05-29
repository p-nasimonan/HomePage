'use client';

/**
 * @file YokanCube.tsx
 * @description 直方体の羊羹（ようかん）を表示するReactコンポーネント (CSSアニメーションとuseEffect制御)
 *
 * ## 概要
 * CSSの@keyframesアニメーションを、ReactのuseEffectフックでトリガーして直方体が登場するアニメーションを描画します。
 * ホバーした面に合わせてキューブが回転します。
 * 位置と初期回転をpropsとして外部から制御可能です。
 *
 * ## 主な仕様
 * - 直方体は6つの面で構成されます。
 * - 登場時に拡大・透明状態から通常状態にアニメーションします（CSSアニメーション）。
 * - 登場アニメーションと同時に集中線が表示・消滅するアニメーションを実行します（CSSアニメーション）。
 * - コンポーネントマウント時にアニメーションを開始します。
 * - ホバーした面に合わせてキューブが回転し、その面が見やすくなるようにします。
 * - translateX, translateY, translateZ propsで初期位置を調整可能です。
 * - rotateX, rotateY, rotateZ propsで初期回転を調整可能です。
 *
 * ## 制限事項
 * - CSSによる3D表現は、ブラウザの互換性やパフォーマンスに影響を与える可能性があります。
 * - 現時点では、直方体のサイズや色は固定です。
 * - ホバー時の回転角度は固定値です。より滑らかなインタラクションにはJavaScriptアニメーションライブラリが適している場合があります。
 * - propsで指定する回転とホバー時の回転が組み合わさる際の挙動は複雑になる場合があります。
 */
import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

// メインのコンテナ
export const YokanScene = styled.div<{ $isAnimated?: boolean }>`
  width: 100%;
  height: 100%;
  perspective: 600px;
  /* margin: auto; */ /* 中央寄せの margin を削除し、親要素のレイアウトに委ねる */
  position: relative;
  opacity: ${props => props.$isAnimated ? 1 : 0};
  transform: ${props => props.$isAnimated ? 'scale(1)' : 'scale(5)'};;
  animation: ${props => props.$isAnimated ? css`${yokanAppear} 0.8s ease-out forwards` : 'none'};;
`;

// キューブ本体
export const YokanCube = styled.div<{ $isAnimated?: boolean; $hoverFace?: string; $translateX?: number; $translateY?: number; $translateZ?: number; $rotateX?: number; $rotateY?: number; $rotateZ?: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
  transform: ${props => {
    let transform = '';
    if (props.$translateX) transform += `translateX(${props.$translateX}px) `;
    if (props.$translateY) transform += `translateY(${props.$translateY}px) `;
    if (props.$translateZ) transform += `translateZ(${props.$translateZ}px) `;

    if (props.$rotateX) transform += `rotateX(${props.$rotateX}deg) `;
    if (props.$rotateY) transform += `rotateY(${props.$rotateY}deg) `;
    if (props.$rotateZ) transform += `rotateZ(${props.$rotateZ}deg) `;

    if (!props.$isAnimated) return transform.trim() || 'none';

    if (props.$hoverFace === 'front') transform += 'rotateX(-15deg) rotateY(-45deg) translateZ(100px) translateX(100px)';
    if (props.$hoverFace === 'back') transform += 'rotateX(-30deg) rotateY(135deg)';
    if (props.$hoverFace === 'right') transform += 'rotateX(-10deg) rotateY(-80deg) translateZ(1px) translateX(100px)';
    if (props.$hoverFace === 'top') transform += 'rotateX(-45deg) rotateY(-45deg) translateZ(100px) translateX(100px) translateY(-100px)';
    
    if (!props.$hoverFace) transform += 'rotateX(-30deg) rotateY(-45deg)';

    return transform.trim() || 'none';
  }};
  transform-origin: center;
`;

// キューブの面
export const YokanFace = styled.div<{ $face: 'front' | 'back' | 'right' | 'top' }>`
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
    switch (props.$face) {
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

/**
 * YokanCubeコンポーネント
 * @param {YokanCubeProps} props コンポーネントのプロパティ
 * @returns {React.ReactElement} 直方体のJSX要素
 */
interface YokanCubeProps {
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
}

const YokanCubeComponent: React.FC<YokanCubeProps> = ({ className, translateX, translateY, translateZ, rotateX, rotateY, rotateZ }) => {
  const [is_animated, setIsAnimated] = useState<string | undefined>(undefined);
  const [hovered_face, setHoveredFace] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated('true');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <YokanScene $isAnimated={is_animated === 'true'} className={className}>
      <YokanCube
        $isAnimated={is_animated === 'true'}
        $hoverFace={hovered_face}
        $translateX={translateX}
        $translateY={translateY}
        $translateZ={translateZ}
        $rotateX={rotateX}
        $rotateY={rotateY}
        $rotateZ={rotateZ}
      >
        <YokanFace
          $face="front"
          onMouseEnter={() => setHoveredFace('front')}
          onMouseLeave={() => setHoveredFace(undefined)}
        >前面</YokanFace>
        <YokanFace
          $face="back"
          onMouseEnter={() => setHoveredFace('back')}
          onMouseLeave={() => setHoveredFace(undefined)}
        >背面</YokanFace>
        <YokanFace
          $face="right"
          onMouseEnter={() => setHoveredFace('right')}
          onMouseLeave={() => setHoveredFace(undefined)}
        >右面</YokanFace>
        <YokanFace
          $face="top"
          onMouseEnter={() => setHoveredFace('top')}
          onMouseLeave={() => setHoveredFace(undefined)}
        >上面</YokanFace>
      </YokanCube>
    </YokanScene>
  );
};

export default YokanCubeComponent; 