"use client";

import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center">
      <PuffLoader color="#5D5FEF" size={100} />
    </div>
  );
}
