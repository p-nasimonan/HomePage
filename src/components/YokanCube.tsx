'use client';

import React, { useEffect, useState } from 'react';
import { css, cva, cx } from '../../styled-system/css';

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
    height: '200px',
    position: 'relative',
    transformStyle: 'preserve-3d', // 3D表示に必須
    transition: 'transform 0.5s ease-in-out', // ホバーアニメーション用
  },
  variants: {
    // アニメーション制御用のバリアント
    animated: {
      true: {
        transform: 'rotateX(-30deg) rotateY(-45deg)',
        opacity: 1,

        // ホバー時のスタイル（キューブ全体を回転させて拡大）
        '&:hover': {
           transform: 'rotateX(0deg) rotateY(0deg) scale(1.2)', // 例: 少し回転させて拡大
        },
      },
      false: {
        // アニメーション開始時のスタイル
        transform: 'translateZ(-500px) rotateX(0deg) rotateY(0deg) scale(0.5)', // 例: 奥から小さく出現
        opacity: 0, // 最初は透明
        // yokanAppear アニメーションを適用
        animation: 'yokanAppear 1s ease-out forwards', // forwards でアニメーション終了時の状態を維持
      },
    },
  }, 
  defaultVariants: {
      animated: false,
  },
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
export default function YokanCube() {
   // 登場アニメーションの状態管理
   const [is_animated, setIsAnimated] = useState<boolean>(false);
   useEffect(() => {
     const timer = setTimeout(() => {
       setIsAnimated(true);
     }, 100);
     return () => clearTimeout(timer);
   }, []);

  // ホバーした面の状態管理（必要であれば再度組み込む）
  // const [hovered_face, setHoveredFace] = useState<string | undefined>(undefined);


  return (
    // YokanScene コンテナ
    <div className={yokanSceneStyles()}>
      {/* YokanCube 本体 */}
      {/* animated バリアントを適用 */}
      <div className={yokanCubeStyles({ animated: is_animated })}>
        {/* 各面 */}
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