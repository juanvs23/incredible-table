import Image from "next/image";
import React from "react";

function FailComponent({ message }: { message: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <Image
        src="/work.svg"
        alt="fail icon"
        width={300}
        height={300}
        className="max-w-full"
      />
      <h2 className="text-center text-xl font-bold md:text-2xl">
        Upps... Something went wrong
      </h2>
      <h3 className="text-center text-base md:text-xl">{message}</h3>
    </div>
  );
}

export default FailComponent;
