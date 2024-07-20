import { HeartPulse } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-zinc-900/30">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
        Made with
        <HeartPulse size={13} className="text-violet-500" />
        by
        <strong className="font-medium">Arthur Willame</strong>
      </span>
    </footer>
  )
}
