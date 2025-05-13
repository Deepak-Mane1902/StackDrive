import { P } from "@/components/ui/custom/p";
import { cn } from "@/lib/utils";
import { Children } from "@/props/types";




const Layout = ({ children }:Children) => {
  return <main className="flex item-center justify-center w-full h-screen">
     <div className="flex-1 w-full h-full bg-primary md:flex item-center justify-center p-6 hidden">
     <div className={cn("text-white p-[30%] tracking-wider")}>
          <h1 className="flex font-bold text-[5vw]">StackDrive</h1>
          <P className="text-white mt-0">
               The only solution you ever need for secure file storage.
          </P>
     </div>
     </div>
     <div className="bg-[#fff] flex-1 w-full h-full flex items-center justify-center p-4">
          {children}

     </div>
  </main>; 
};

export default Layout