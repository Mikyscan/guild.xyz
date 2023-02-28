import { Tag, TagLeftIcon, TagProps, Tooltip } from "@chakra-ui/react"
import { Visibility as VisibilityType } from "types"
import { visibilityData } from "./SetVisibility"

type Props = { entityVisibility: VisibilityType } & TagProps

const Visibility = ({ entityVisibility, ...tagProps }: Props) => {
  const VisibilityIcon = visibilityData[entityVisibility].Icon

  return (
    <Tooltip
      label={`${visibilityData[entityVisibility].title}: ${visibilityData[entityVisibility].description}`}
    >
      <Tag bg="unset" color="gray" {...tagProps}>
        <TagLeftIcon as={VisibilityIcon} boxSize={"16px"} />
      </Tag>
    </Tooltip>
  )
}

export default Visibility
