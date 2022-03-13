import { GITHUB_URL } from '@/constants';

export function Footer(): JSX.Element {
  return (
    <footer className="flex items-center justify-center w-full h-12 max-w-6xl gap-1 px-5">
      <p className="text-secondary">Go to :</p>
      <a
        className="text-violet-500 hover:text-violet-600"
        aria-label="go to Github's repo"
        title="go to Github's repo"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer">
        Github
      </a>
    </footer>
  );
}
