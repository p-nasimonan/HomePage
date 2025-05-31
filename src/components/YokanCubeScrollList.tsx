'use client';

import React, { useRef, useEffect, useState } from 'react';
import YokanCube from './YokanCube';
import { css, cx } from '../../styled-system/css';

// リストコンテナのスタイル
const listContainerStyles = css({
  width: '100%',
  height: '500px', // コンテナの高さを固定
  overflowY: 'scroll', // 縦スクロールを有効にする
  scrollSnapType: 'y mandatory', // Y軸方向にスクロールを強制的にスナップ
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // キューブを中央に配置
  padding: '10px 0', // 固定値の余白 (必要に応じて調整)
});

// 各キューブのラッパーのスタイル（領域確保とスナップ用）
const cubeWrapperStyles = css({
  height: '150px', // 各要素の領域を確保（キューブのサイズに合わせて調整）
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollSnapAlign: 'center', // 要素がスクロールコンテナの中央にスナップ
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out', // 透明度とtransformにトランジションを追加
  // 子要素（YokanCube）の transform は YokanCube 自身が管理 (preserve-3d など)
  // スクロールアニメーション用の transform はこのラッパーに適用
  transformStyle: 'preserve-3d', // ラッパー自体も3D変換が必要な場合に備える
});

// スクロールリストコンポーネント
const YokanCubeScrollList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0); // コンテナの実際の高さを取得

  // スクロールイベントハンドラ
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollY(containerRef.current.scrollTop);
    }
  };

  // コンテナの高さ取得とイベントリスナー設定
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setContainerHeight(container.offsetHeight); // コンテナの高さ取得
      container.addEventListener('scroll', handleScroll);
      // コンポーネントがアンマウントされるときにイベントリスナーを削除
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // 空の依存配列でマウント時とアンマウント時のみ実行

  // キューブの数
  const numberOfCubes = 15; // 数を増やしてスクロール感を出す (任意)
  const cubes = Array.from({ length: numberOfCubes });
  const itemHeight = 150; // cubeWrapperStyles の height と合わせる

  // アニメーション設定
  const maxRotationX = 360; // 端での最大X軸回転角度 (deg)
  const maxRotationY = 100; // 端での最大Y軸回転角度 (deg)
  const maxScale = 2; // 中央での最大拡大率
  const minScale = 0.5; // 端での最小拡大率
  // アニメーションさせる範囲 (ビューポートの中央からこの距離まで)
  const animationRange = containerHeight / 2 + itemHeight / 2;


  return (
    <div ref={containerRef} className={listContainerStyles}>
      {cubes.map((_, index) => {
        // 各要素の中心の、ビューポート中央からの距離
        const elementCenterAbsolute = index * itemHeight + itemHeight / 2;
        const elementCenterRelativeToViewport = elementCenterAbsolute - scrollY;
        const viewportCenter = containerHeight / 2;
        const distanceToViewportCenter = elementCenterRelativeToViewport - viewportCenter;
        const absDistance = Math.abs(distanceToViewportCenter); // 距離の絶対値

        let currentRotateX = maxRotationX; // デフォルトは端での回転
        let currentRotateY = maxRotationY; // デフォルトは端での回転
        let currentScale = minScale; // デフォルトは端でのスケール
        let currentOpacity = 0; // デフォルトは非表示

        // 要素の中心がアニメーション範囲内にある場合
        if (absDistance < animationRange) {
           // 距離に基づいて線形補間率を計算 (中央で 0, 端で 1)
           const ratio = absDistance / animationRange;

           // 中央で回転最小 (0deg), 端で最大 (maxRotationX/Y)
           currentRotateX = maxRotationX * ratio;
           currentRotateY = maxRotationY * ratio;

           // 中央で拡大最大 (maxScale), 端で最小 (minScale)
           currentScale = maxScale - (maxScale - minScale) * ratio;

           // 中央で不透明 (1), 端で透明 (0)
           currentOpacity = 1 - ratio;
        }

        // 計算した transform と opacity スタイルを適用
        const dynamicTransformStyles = css({
          transform: `scale(${currentScale}) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`,
          opacity: currentOpacity,
        });

        return (
          // ラッパー div に cubeWrapperStyles と dynamicTransformStyles を適用
          <div key={index} className={cx(cubeWrapperStyles, dynamicTransformStyles)}>
            {/* YokanCube に計算したスタイルをプロップスとして渡す */}
            <YokanCube
              scale={currentScale}
              rotateX={currentRotateX}
              rotateY={currentRotateY}
              opacity={currentOpacity}
            />
          </div>
        );
      })}
    </div>
  );
};

export default YokanCubeScrollList;
