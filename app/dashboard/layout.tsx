import SideNav from '@/app/ui/dashboard/sidenav'; //import sidenave component; any components imported will be part of the layout
 
export default function Layout({ children }: { children: React.ReactNode }) { //receives a children prop ; child can either be a page or another layout 
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}