import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learning Management System',
  description: 'Generated with BLACKBOX AI Builder',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* floating ambient cinematic particles */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
          <div className="absolute w-[3px] h-[3px] bg-white animate-float left-[10%] top-[35%] rounded-full"></div>
          <div className="absolute w-[3px] h-[3px] bg-white animate-float delay-2000 left-[50%] top-[60%] rounded-full"></div>
          <div className="absolute w-[3px] h-[3px] bg-white animate-float delay-4000 left-[80%] top-[20%] rounded-full"></div>
        </div>

        {children}
      </body>
    </html>
  )
}

