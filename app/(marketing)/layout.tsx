import Navbar from "@/components/marketing/navbar"
import { ReactNode } from "react"


const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
        <Navbar />
        <main className="h-full pt-40">
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout