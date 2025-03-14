"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (sortOption: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOption);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="sort-dropdown">
      <select
        onChange={(e) => handleSort(e.target.value)}
        defaultValue={searchParams.get("sort") || "$createdAt-desc"}
        className="sort-select"
      >
        <option value="$createdAt-desc">Newest</option>
        <option value="$createdAt-asc">Oldest</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="size-desc">Size (Large-Small)</option>
        <option value="size-asc">Size (Small-Large)</option>
      </select>
    </div>
  );
};

export default Sort;
