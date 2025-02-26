import './styles/common.css';
import AppHeader from "./components/header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
}