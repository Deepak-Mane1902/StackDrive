import { IFile } from "@/lib/database/schema/file.model";
import { cn, dynamicDownload, formatFileSize } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FileMenu from "./menu";
import { P } from "@/components/ui/custom/p";
import { format, parseISO, isValid } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";
import { generateUrl } from "@/action/file.action";

const FileCard = ({ file }: { file: IFile }) => {
  const [isLinkInProgress, setIsLinkInProgress] = useState(false);

  const { name, size, createdAt, userInfo, category, cid } = file;

  const requiredName = `${name.slice(0, 16)}... ${name.split(".")[1]}`;
  const formattedFileSize = formatFileSize(size);

  // ✅ Safe date formatting
  let formattedDate = "Unknown date";
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
      formattedDate = format(parsedDate, "dd-MMM-yyyy");
    }
  }

const handleAvatarClick = async () => {
    if (category === "image") {
      setIsLinkInProgress(true);
      try {
        const { data, status } = await generateUrl(cid);
        if (status !== 201) {
          toast("Error", {
            description: `${data}`,
          });
          return;
        }
        window.open(data as string, "_blank"); // Open in a new tab
      } catch (error) {
        console.error(error);
        toast("Error", {
          description: "Failed to open the image.",
        });
      } finally {
        setIsLinkInProgress(false);
      }
    }
  };

  return (
    <Card className="w-full max-h-62 border-[#383838] hover:border-[#ff6913] bg-[#383838] shadow-[#101010] drop-shadow-2xl">
      <CardHeader>
        <div className="flex items-start gap-4 justify-between">
          <Avatar
            className={cn("size-20 rounded-none", category === "image" && "cursor-pointer")}
            onClick={handleAvatarClick}
          >
            <AvatarImage src={`/${category}.png`} />
            <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-end gap-4 justify-between w-full">
            <FileMenu
              file={file}
              isLinkInProgress={isLinkInProgress}
              setIsLinkInProgress={setIsLinkInProgress}
            />

            <P className="text-[#c2c2c2]">{formattedFileSize}</P>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2  text-xl text-white ">
        <P
          size="large"
          weight="medium"
          variant="child"
          className={cn(category === "image" && "cursor-pointer")}
          onClick={async () => {
            if (category === "image") {
              setIsLinkInProgress(true);

              try {
                const { data, status } = await generateUrl(cid);
                if (status !== 201) {
                  toast("Error", {
                    description: `${data}`,
                  });
                  return;
                }

                dynamicDownload(data as string, file.name);
              } catch (error) {
                console.log(error);

                toast("Error", {
                  description: "Failed to download the file.",
                });
              } finally {
                setIsLinkInProgress(false);
              }
            }
          }}
        >
          {requiredName}
        </P>

        <P size="small" variant="muted" weight="light" className="text-[#c2c2c2]">
          {formattedDate}
        </P>

        <P size="small" variant="muted" weight="light" className="text-[#c2c2c2]">
          Uploaded By: <b className="text-[#ff6913]">{userInfo.name}</b>
        </P>
      </CardContent>
    </Card>
  );
};

export default FileCard;