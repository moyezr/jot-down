import { ReactNode } from "react"

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">{children}</div>
  )
}

export default PublicLayout