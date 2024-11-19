import clsx from "clsx"
import { PropsWithChildren } from "react"

interface ICard extends PropsWithChildren {
    className?: string
    style?: string
}

export const Card = ({ children, style }: ICard) => {
    return (
        <div className={clsx('block p-2 rounded-2xl drop-shadow-xl', style)}>
            {children}
        </div>
    )
}