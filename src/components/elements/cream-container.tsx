import React from "react";

import { cn } from "@/lib/utils";

type CreamContainerProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

const CreamContainer = ({
  children,
  variant = "top",
  className,
}: CreamContainerProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4",
        variant === "top" &&
          "from-cream via-background to-background/80 bg-linear-to-b rounded-b-2xl rounded-t-[36px] via-20%",
        variant === "bottom" &&
          "from-background via-background to-cream bg-linear-to-b rounded-b-[36px] rounded-t-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CreamContainer;
