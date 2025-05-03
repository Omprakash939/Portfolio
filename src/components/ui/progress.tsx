import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
  animateOnView?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, animateOnView = false, ...props }, ref) => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    if (animateOnView) {
      // Start with 0 and animate to the actual value
      setProgress(0);
      const timer = setTimeout(() => setProgress(value || 0), 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(value || 0);
    }
  }, [value, animateOnView]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-transform duration-700",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  );
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
