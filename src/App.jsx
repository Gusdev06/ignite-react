import { useState } from 'react';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[70rem] mx-auto my-8 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main className="flex flex-col gap-8">
          <Post />

          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
