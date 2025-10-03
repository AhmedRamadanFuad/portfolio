import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-none bg-[#393E46]/50 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 text-accent-foreground  flex field-sizing-content min-h-16 w-full md:rounded-[16px] rounded-[8px] border md:px-6 px-3 py-1.5 md:py-4 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-lg ",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
