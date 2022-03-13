import { Footer } from './Footer';
import { Header } from './Header';

interface ContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: ContainerProps): JSX.Element {
  return (
    <div className="flex flex-col items-center px-5">
      <Header />
      <main className="flex flex-col items-center w-full max-w-4xl px-5 min-h-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
