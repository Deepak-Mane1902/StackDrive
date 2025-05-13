// "use client";

// import { useEffect, useState } from "react";
// import {
//   SidebarMenuButton,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { RiDatabase2Fill } from "@remixicon/react";



// export function StorageDisplay() {
//       const {state} = useSidebar()
//   const [availableStorage, setAvailableStorage] = useState("...");
//   const [totalStorage, setTotalStorage] = useState("...");

//   useEffect(() => {
//     // Simulate fetching storage data (replace with your actual API call)
//     const fetchStorage = async () => {
//       // Delay to simulate network request
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const availableMB = 11.99;
//       const totalGB = 15.00;
//       setAvailableStorage(availableMB.toFixed(2) + " MB");
//       setTotalStorage(totalGB.toFixed(2) + " GB");
//     };

//     fetchStorage();

//     // Optionally, you can set up an interval to update the storage periodically
//     // const intervalId = setInterval(fetchStorage, 5000); // Update every 5 seconds
//     // return () => clearInterval(intervalId); // Cleanup on unmount
//   }, []);

//   const progress =
//     totalStorage !== "..." && availableStorage !== "..."
//       ? (parseFloat(availableStorage) / (parseFloat(totalStorage) * 1024)) * 100
//       : 0;

//   return (
// <>
// {state === "expanded" &&  <SidebarMenuButton id="storage" className="bg-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-[#ff6913] active:text-[#ff6913] active:bg-[1d1d1d] h-fit mt-5 border-1 border-[#ff6913] flex flex-col items-start p-4 mt-0.8 rounded-lg">
//       <div className="flex items-center gap-2 mb-2 ">
//         <RiDatabase2Fill className="text-xl text-[#ff6913]" />
//         <span className="text-sm font-medium">Storage</span>
//       </div>
//       <div className="text-xs text-gray-400">
//         Available Storage <span className="font-semibold text-white">{availableStorage}</span> / {totalStorage}
//       </div>
//       <div className="w-full bg-[#333] rounded-full h-2 mt-1 overflow-hidden">
//         <div
//           className="bg-[#ff6913] h-full rounded-full"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//     </SidebarMenuButton>}


// </>
//   );
// }