import { ReactNode } from "react"

const Container: React.FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {

  return (
    <div className={`flex max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>

  )
}

export default Container
