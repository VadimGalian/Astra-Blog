import { Flex, IFlexProps } from "../Flex/Flex"

type IVStackProps = Omit<IFlexProps, "direction">

export function VStack(props: IVStackProps) {
    const { align = "start" } = props

    return <Flex direction="column" align={align} {...props} />
}
