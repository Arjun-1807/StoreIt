"use client";

import { Button } from "@/components/ui/button";
import { cn, convertFileToUrl } from "@/lib/utils";
import React, { MouseEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getFileType } from "@/lib/utils";
import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import remove from "@/public/assets/icons/remove.svg";
import { uploadFile } from "@/lib/actions/file.actions";
import { MAX_FILE_SIZE } from "@/constants";
import { toast } from "sonner";

// Image imports
import upload from "@/public/assets/icons/upload.svg";
import fileLoaderGif from "@/public/assets/icons/file-loader.gif";
import { usePathname } from "next/navigation";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
  const pathname = usePathname();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);

      const uploadPromises = acceptedFiles.map(async (file) => {
        if (file.size > MAX_FILE_SIZE) {
          setFiles((prev) => prev.filter((f) => f.name !== file.name));
          toast.error(
            <p className="body-2 text-white">
              <span className="font-semibold">{file.name}</span> is too large.
              Max file size is 50MB.
            </p>,
            {
              className: "error-toast",
            }
          );
        }

        return uploadFile({
          file: file,
          ownerId: ownerId,
          accountId: accountId,
          path: pathname,
        }).then((uploadedFile) => {
          if (uploadedFile)
            setFiles((prev) => prev.filter((f) => f.name !== file.name));
        });
      });

      await Promise.all(uploadPromises);
    },
    [ownerId, accountId, pathname]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    fileName: string
  ) => {
    e.stopPropagation();
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button type="button" className={cn("uploader-button")}>
        <Image src={upload} alt="upload" width={24} height={24} />
        <p>Upload</p>
      </Button>

      {files.length > 0 && (
        <ul className="uploader-preview-list">
          <h4 className="h4 text-light-100">Uploading</h4>

          {files.map((file, index) => {
            const { type, extension } = getFileType(file.name);
            return (
              <li
                key={`${file.name}-${index}`}
                className="uploader-preview-item"
              >
                <div className="flex items-center gap-3">
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}
                  />

                  <div className="preview-item-name">
                    {file.name}
                    <Image
                      src={fileLoaderGif}
                      alt="Loader"
                      width={80}
                      height={26}
                    />
                  </div>
                </div>

                <Image
                  src={remove}
                  alt="Remove"
                  width={24}
                  height={24}
                  onClick={(e) => handleRemoveFile(e, file.name)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
