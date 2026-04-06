import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type BoxLoaderProps = {
  className?: string
  /** Visible caption under the animation */
  label?: ReactNode
  /** Accessible name when label is not plain text */
  'aria-label'?: string
}

/**
 * Isometric sliding box loader. Styles: `.box-loader-ui` in `index.css`.
 */
export function BoxLoader({
  className,
  label = 'Portfolio Loading',
  'aria-label': ariaLabel,
}: BoxLoaderProps) {
  const a11yLabel =
    ariaLabel ?? (typeof label === 'string' ? `${label}` : 'Portfolio loading')

  return (
    <div
      className={cn('box-loader-ui flex flex-col items-center gap-5', className)}
      role="status"
      aria-live="polite"
      aria-label={a11yLabel}
    >
      <div className="relative">
        <div className="boxes">
          <div className="box box-1">
            <div className="face face-front" />
            <div className="face face-right" />
            <div className="face face-top" />
            <div className="face face-back" />
          </div>
          <div className="box box-2">
            <div className="face face-front" />
            <div className="face face-right" />
            <div className="face face-top" />
            <div className="face face-back" />
          </div>
          <div className="box box-3">
            <div className="face face-front" />
            <div className="face face-right" />
            <div className="face face-top" />
            <div className="face face-back" />
          </div>
          <div className="box box-4">
            <div className="face face-front" />
            <div className="face face-right" />
            <div className="face face-top" />
            <div className="face face-back" />
          </div>
        </div>
      </div>
      {label != null && label !== false ? (
        <p className="font-clash text-base tracking-wider text-secondary-white/85">{label}</p>
      ) : null}
    </div>
  )
}

export default BoxLoader
