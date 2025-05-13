"use client"
import { useSidebar } from '@/components/ui/sidebar'
import { RiArrowRightFill, RiFileDownloadFill, RiLoader3Fill, RiSearch2Fill } from '@remixicon/react'
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
 
   } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { searchFiles } from '@/lib/fetch/files.fetch'
import { cn } from '@/lib/utils'
import { generateUrl } from '@/action/file.action'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { P } from '@/components/ui/custom/p'
import { IFile } from '@/lib/database/schema/file.model'
import { format, isValid, parseISO } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
   


const SearchBar = () => {
     const {state} = useSidebar()
     const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)

      function handleDialogOpen(){
          setIsSearchDialogOpen(true)
      }    

  return (
<>
{state === "expanded" && <div className="flex items-center justify-between w-full px-4 py-2 text-[#d6d6d6] bg-[#1d1d21] border border-[#383830] rounded-md hover:bg-[transparent] hover:border-[#d45710] hover:text-[#fff] transition-all ease-in-out duration-200 cursor-pointer" onClick={handleDialogOpen}>

     <div className="flex items-center justify-start gap-3">
     <RiSearch2Fill/>
     <span>
          Quick Search...
     </span>
     </div>
     <RiArrowRightFill/>
</div>}
{state === "collapsed" && <Button variant="ghost" size="icon" onClick={handleDialogOpen}>
     <RiSearch2Fill/>
     </Button>}

<SearchDialog isSearchDialogOpen={isSearchDialogOpen} setIsSearchDialogOpen={setIsSearchDialogOpen}/>
</>
  )

};

const SearchDisplayCard = ({ file }: { file: IFile }) => {
    const [isLinkInProgress, setIsLinkInProgress] = useState(false);
    const [formattedDate, setFormattedDate] = useState("Unknown date"); // State for formatted date

    const {
        name,
        category,
        createdAt,
        userInfo: { name: userName },
        cid,
    } = file;

    const requiredName = `${name.slice(0, 16)}... ${name.split(".")[1]}`;

    useEffect(() => {
        if (createdAt) {
            let parsedDate;
            if (typeof createdAt === "string") {
                parsedDate = parseISO(createdAt);
            } else if (typeof createdAt === "number") {
                parsedDate = new Date(createdAt);
            } else {
                parsedDate = new Date("");
            }

            if (isValid(parsedDate)) {
                setFormattedDate(format(parsedDate, "dd-MMMM-yyyy"));
            } else {
                setFormattedDate("Unknown date");
            }
        } else {
            setFormattedDate("Unknown date");
        }
    }, [createdAt]); // Run this effect whenever createdAt changes

    return (
        <Card className="shadow-none drop-shadow-xl bg-[#383838] border-[#ff6913]">
            <CardContent className="py-4">
                <div className="flex w-full h-fit gap-4 items-center justify-between">
                    <div className="flex w-full h-fit gap-4">
                        <Avatar className="size-12 rounded-none">
                            <AvatarImage src={`/${category}.png`} />
                            <AvatarFallback>{"CP"}</AvatarFallback>
                        </Avatar>

                        <div>
                            <P size="large" weight="bold" className='text-[#c2c2c2] py-1'>
                                {requiredName}
                            </P>

                            <div>
                                <P size="small" variant="muted" weight="light">
                                    {formattedDate} | Uploaded By: <b>{userName}</b>
                                </P>
                            </div>
                        </div>
                    </div>

<Button
className='bg-[#ff6913] hover:bg-[#d45710] text-[#fff] rounded-lg border-1 border-[#ff6913] hover:border-[#d45710] transition-all ease-in-out duration-200 cursor-pointer'
    variant="outline"
    size="icon"
    onClick={async () => {
        setIsLinkInProgress(true);
        try {
            const { data, status } = await generateUrl(cid);

            if (status !== 201) {
                toast(`${data}`, {
                    description: data as string,
                });
                setIsLinkInProgress(false);
                return;
            }

            // Fetch the image as a Blob
            const response = await fetch(data as string);
            const blob = await response.blob();

            // Create a temporary URL for the Blob
            const url = window.URL.createObjectURL(blob);

            // Create a temporary download link
            const link = document.createElement('a');
            link.href = url;
            link.download = file.name;

            // Programmatically click the link
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Release the Blob URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading image:", error);
            toast("Error", { description: "Failed to download the image." });
        } finally {
            setIsLinkInProgress(false);
        }
    }}
>
    {!isLinkInProgress ? (
        <RiFileDownloadFill />
    ) : (
        <RiLoader3Fill className="animate-spin" />
    )}
</Button>
                </div>
            </CardContent>
        </Card>
    );
};



const SearchDialog = ({
    isSearchDialogOpen,
    setIsSearchDialogOpen,
}: {
    isSearchDialogOpen: boolean;
    setIsSearchDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const { data: searchResults, isLoading, refetch } = useQuery({
        queryKey: ["search", searchTerm],
        queryFn: () => searchFiles(searchTerm),
        enabled: !!searchTerm,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (searchTerm) {
            setIsSearching(true);
            const handler = setTimeout(() => {
                refetch().finally(() => setIsSearching(false));
            }, 300);

            return () => clearTimeout(handler);
        } else {
            setIsSearching(false);
        }
    }, [searchTerm, refetch]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
<DialogContent className='bg-[#1d1d21] text-white border-[#ff6913] max-h-[70vh] overflow-y-scroll pr-4'> {/* Added pr-2 */}
    <DialogHeader className="hidden">
        <DialogTitle>title</DialogTitle>
        <DialogDescription>des</DialogDescription>
    </DialogHeader>
    <div>
        <div className="flex items-center justify-start gap-3">
            <RiSearch2Fill />
            <Input
                className="input w-[28vw] "
                placeholder="Search here..."
                onChange={handleChange}
                value={searchTerm} // Add value to control the input
            />
            {isSearching && <RiLoader3Fill className="animate-spin" />} {/* Use isSearching here */}
        </div>

        <div className={cn("space-y-3", searchResults && searchResults.length > 0 && "mt-4")}>
            {searchResults && searchResults.length > 0 ? (
                searchResults.map((file: IFile) => (
                    <SearchDisplayCard file={file} key={file._id} />
                ))
            ) : searchTerm && !isLoading ? (
                <P variant="muted" className='mt-2 flex align-items-center justify-center text-semibold text-black' >No files found matching {searchTerm}</P>
            ) : null}
        </div>
    </div>
  </DialogContent>
        </Dialog>
    );
};


export  {SearchBar,SearchDisplayCard,SearchDialog}