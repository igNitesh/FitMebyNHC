"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full"

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  size?: ModalSize
  className?: string
  /** Show order-success layout */
  success?: boolean
  /** Optional order id to display when `success` is true */
  orderId?: string
  /** Callback when user clicks Track Order */
  onTrack?: () => void
}

const sizeMap: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  full: "w-full h-full sm:mx-4 sm:my-6 sm:max-w-none sm:h-auto",
}

export function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
  success = false,
  orderId,
  onTrack,
}: ModalProps) {
  const contentClass = cn("w-full mx-4 sm:mx-auto", sizeMap[size], className)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : null}

      <DialogContent className={contentClass}>
        {success ? (
          <div className="w-full flex flex-col items-center text-center gap-4 p-4 sm:p-6">
            <div className="rounded-full bg-primary/10 p-3 sm:p-4">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <DialogTitle className="text-lg sm:text-xl font-semibold text-primary">
              {title ?? "Order Successful"}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground max-w-[32rem] break-words">
              {orderId
                ? `Your order has been placed successfully. Order ID: ${orderId}`
                : description}
            </DialogDescription>

            {children}

            <div className="w-full mt-2 flex flex-col sm:flex-row gap-2 sm:justify-end">
              <DialogClose asChild>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Close
                </Button>
              </DialogClose>
              <Button
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  onOpenChange?.(false)
                  onTrack?.()
                }}
              >
                Track Order
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              {title ? (
                <DialogTitle className="text-primary">{title}</DialogTitle>
              ) : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>

            <div className="mt-2">{children}</div>

            <DialogFooter>
              {footer ?? (
                <div className="flex gap-2 w-full justify-end">
                  <DialogClose asChild>
                    <Button variant="outline" size="sm">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button size="sm">Confirm</Button>
                  </DialogClose>
                </div>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
