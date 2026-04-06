import type React from "react"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/ui/dot-pattern-1"

export interface DotBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  patternWidth?: number
  patternHeight?: number
  patternOpacity?: number
  corners?: boolean
}

export function DotBox({
  className,
  children,
  patternWidth = 6,
  patternHeight = 6,
  patternOpacity = 0.6,
  corners = true,
  ...props
}: DotBoxProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-primary-white/20 bg-primary-white/[0.03] backdrop-blur-[1px] transition-colors duration-300 hover:border-primary-white/40 hover:bg-primary-white/[0.05]",
        className,
      )}
      {...props}
    >
      <DotPattern
        width={patternWidth}
        height={patternHeight}
        className="opacity-60"
        style={{ opacity: patternOpacity }}
      />

      {corners && (
        <>
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-primary-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-primary-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-primary-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-primary-white" />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default DotBox

