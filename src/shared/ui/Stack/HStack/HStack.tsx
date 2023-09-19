import { classNames } from "shared/lib/classNames/classNames"
import cls from "./HStack.module.scss"
import { Flex, IFlexProps } from "../Flex/Flex"

type HStackProps = Omit<IFlexProps, "direction">

export function HStack(props: HStackProps) {
    return <Flex direction="row" {...props} />
}
