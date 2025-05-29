import YokanCube from '@/components/YokanCube';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center">
        <div className="flex gap-10 items-center">
          <YokanCube translateX={-300} rotateY={10} />
          <YokanCube translateX={-100} rotateZ={-10} />
          <YokanCube translateX={100} rotateY={-20} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
