// components/ui/CardContent.tsx

import React from "react";
import type { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

const CardContent = ({ children, className = "" }: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
