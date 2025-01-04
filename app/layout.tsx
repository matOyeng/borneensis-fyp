import './globals.css';
import SideNav from '@/app/components/sidenav';
import Footer from './components/footer';

export const metadata = {
  title: 'My Application',
  description: 'An example Next.js application',
};

export const experimental_ppr = true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        {/* Sidebar */}
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:overflow-y-auto">
          <div className="flex-grow p-6 md:p-12">
            {children}
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
