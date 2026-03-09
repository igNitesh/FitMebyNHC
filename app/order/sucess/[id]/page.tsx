"use client"

import { Check, Share2 } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { useToast } from "../../../hooks/use-toast"
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams()
  const orderId = params.id
  const { toast } = useToast()

  const [copied, setCopied] = useState(false)
  const [burst, setBurst] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setBurst(false), 1600)
    return () => clearTimeout(t)
  }, [])

  const colors = useMemo(
    () => ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6"],
    []
  )

  const handleCopy = async () => {
    if (!orderId) return
    try {
      const idString = Array.isArray(orderId) ? orderId[0] : orderId
      await navigator.clipboard.writeText(idString)
      setCopied(true)
      toast({ title: "Copied", description: "Order ID copied to clipboard." })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: "Copy failed",
        description: "Unable to copy order ID.",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-xl">
        <div className="bg-card border border-card-border rounded-xl shadow-lg p-6 sm:p-10 flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="relative">
            <div
              className={`rounded-full bg-primary/10 p-4 ${burst ? "animate-ping" : ""
                }`}
            >
              <Check className="w-8 h-8 text-primary" />
            </div>

            {burst && (
              <div className="pointer-events-none absolute inset-0">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      left: `${10 + (i * 5) % 80}%`,
                      top: `${20 + (i * 7) % 40}%`,
                      background: colors[i % colors.length],
                      animationDelay: `${i * 30}ms`,
                    }}
                    className="absolute w-2 h-2 rounded-full animate-fade-down"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Text */}
          <h1 className="mt-5 text-2xl sm:text-3xl font-semibold">
            Order Confirmed 🎉
          </h1>

          {orderId && (
            <p className="mt-2 text-sm text-muted-foreground break-all">
              Order ID:{" "}
              <span className="font-medium text-primary">{orderId}</span>
            </p>
          )}

          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            We’ve received your order. You’ll get updates via email.
            You can track your order or copy the order ID below.
          </p>

          {/* Actions */}
          <div className="mt-6 w-full flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => (location.href = "/#track")}
              className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-95"
            >
              Track Order
            </button>

            <button
              onClick={handleCopy}
              className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md border border-border bg-background text-sm font-medium"
            >
              <Share2 className="w-4 h-4 mr-2" />
              {copied ? "Copied" : "Copy Order ID"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeDown {
          0% { transform: translateY(-6px) scale(0.9); opacity: 1 }
          100% { transform: translateY(24px) scale(1); opacity: 0 }
        }
        .animate-fade-down {
          animation: fadeDown 900ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>
    </main>
  )
}
