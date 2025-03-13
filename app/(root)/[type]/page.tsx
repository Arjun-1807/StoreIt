import React from "react";
import Sort from "@/components/sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Card from "@/components/Card";
const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  const files = await getFiles();

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span>o MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 text-light-200 hidden sm:block">Sort by:</p>

            <Sort />
          </div>
        </div>
      </section>

      {/* render the files */}

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p>No files uploaded</p>
      )}
    </div>
  );
};

export default page;
