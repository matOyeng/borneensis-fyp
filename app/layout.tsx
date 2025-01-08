import './globals.css';
import SideNav from '../components/ui/sidenav';
import Footer from '../components/footer/footer';
import { ThemeProvider } from '../context/themeProvider';
import { FontProvider } from '@/context/fontContext';

export const metadata = {
  title: 'Borneensis+',
  description: 'An application consists of interactive digital museum, entomology mapping tools, three-dimension insect and photo blog.',
};

export const experimental_ppr = true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Changed from "light" to "system"
          enableSystem
          disableTransitionOnChange
          storageKey="borneensis-theme" // Add a unique storage key
        >
          <FontProvider>
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow flex flex-col md:overflow-y-auto">
              <div className="flex-grow p-6 md:p-12">{children}</div>
              <Footer />
            </div>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}