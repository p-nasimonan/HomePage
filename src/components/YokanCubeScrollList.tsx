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
  padding: '100px 0', // 固定値の余白 (必要に応じて調整)
});

// 各キューブのラッパーのスタイル（スクロールアニメーション用）
const cubeWrapperStyles = css({
  height: '150px', // 各要素の領域を確保（キューブのサイズに合わせて調整）
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollSnapAlign: 'center', // 要素がスクロールコンテナの中央にスナップ
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out', // 透明度と回転にもトランジションを追加
  // 子要素（YokanCube）の transform は YokanCube 自身が管理
  // スクロールアニメーション用の transform はこのラッパーに適用
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
  const numberOfCubes = 20; // 数を増やしてスクロール感を出す (任意)
  const cubes = Array.from({ length: numberOfCubes });
  const itemHeight = 150; // cubeWrapperStyles の height と合わせる

  return (
    <div ref={containerRef} className={listContainerStyles}>
      {cubes.map((_, index) => {
        // 各要素の上端の初期位置
        const elementTop = index * itemHeight;
        // 要素の中心の、コンテナ内での絶対位置
        const elementCenterAbsolute = elementTop + itemHeight / 2;
        // 要素の中心の、ビューポート上端からの相対位置
        const elementCenterRelativeToViewport = elementCenterAbsolute - scrollY;
        // ビューポート中央の、ビューポート上端からの位置
        const viewportCenter = containerHeight / 2;
        // 要素の中心からビューポート中央までの距離
        const distanceToViewportCenter = elementCenterRelativeToViewport - viewportCenter;

        // 距離に応じた X軸回転角度と透明度の計算
        const maxRotationX = 90; // 最大回転角度 (deg)
        // 透明度と回転をアニメーションさせる範囲 (例: ビューポートの高さの半分)
        const animationRange = containerHeight / 2; // ビューポートの中央からこの距離まで

        let rotateX = maxRotationX; // デフォルトは最大回転
        let opacity = 0; // デフォルトは非表示

        // 要素の中心がアニメーション範囲内にあるか判定
        if (Math.abs(distanceToViewportCenter) < animationRange) {
           // 距離に基づいて線形補間
           // 中央 (distanceToViewportCenter = 0) で回転最小 (0deg) と透明度最大 (1)
           // 端 (distanceToViewportCenter = +-animationRange) で回転最大 (maxRotationX) と透明度最小 (0)
           const ratio = Math.abs(distanceToViewportCenter) / animationRange; // 中央で 0, 端で 1
           rotateX = maxRotationX * ratio; // 距離が離れるほど回転
           opacity = 1 - ratio; // 距離が離れるほど透明に
        }


        // 計算した transform と opacity スタイルを適用
        const dynamicTransformStyles = css({
          transform: `rotateX(${rotateX}deg)`,
          opacity: opacity, // 透明度を適用
          // 立体的な効果を出すため、perspective を親要素（listContainerStyles）または YokanCube 自身で設定する必要がある
        });


        return (
          // ラッパー div にスクロールアニメーション用のスタイルを適用
          <div key={index} className={cx(cubeWrapperStyles, dynamicTransformStyles)}>
            {/* 立体的なスタイルは YokanCube コンポーネント自身が持つ */}
            {/* YokanCube 自身の登場アニメーションは、必要であれば YokanCube 内で制御 */}
            {/* 可視性が opacity: 0 の場合でも要素自体は存在 */}
            <YokanCube />
          </div>
        );
      })}
    </div>
  );
};

export default YokanCubeScrollList;
