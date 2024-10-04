import React from "react";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pb-4 max-sm:w-full mx-auto min-h-screen justify-center rounded-2xl max-w-xl h-full flex flex-col gap-y-4 overflow-auto">
      <div className="px-4 lg:px-6 py-10 rounded-xl bg-card shadow-lg">{children}</div>
    </div>
  );
};
