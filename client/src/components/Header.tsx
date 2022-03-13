import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export function Header(): JSX.Element {
  return (
    <div className="flex items-center w-full h-20">
      <div className="mr-auto text-3xl font-bold text-primary">RiptideBET</div>
      <WalletMultiButton />
    </div>
  );
}
