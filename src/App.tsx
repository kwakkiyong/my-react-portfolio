import Header from '@components/header/Header.tsx';
import Main from '@pages/Main.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header />
      <Main />
    </div>
  );
}

export default App;
