import YokanCubeScrollList from '@/components/YokanCubeScrollList';

export default function Home() {
  return (
    <body>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Replace multiple YokanCube with the scroll list component */}
      <YokanCubeScrollList />
    </main>
    </body>
  );
}