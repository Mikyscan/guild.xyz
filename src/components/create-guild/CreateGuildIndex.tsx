import { Checkbox, HStack, Text } from "@chakra-ui/react"
import ClientOnly from "components/common/ClientOnly"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { GuildFormType } from "types"
import { useCreateGuildContext } from "./CreateGuildContext"
import CreateGuildPlatform from "./CreateGuildPlatform"
import GuildCreationProgress from "./GuildCreationProgress"
import MultiPlatformsGrid from "./MultiPlatformGrid"

const CreateGuildIndex = (): JSX.Element => {
  const { setPlatform, nextStep } = useCreateGuildContext()
  const [whitoutPlatform, setWhitoutPlatform] = useState(false)
  const { getValues } = useFormContext<GuildFormType>()

  return (
    <ClientOnly>
      <MultiPlatformsGrid
        onSelection={(platformName) => {
          setPlatform(platformName)
          setWhitoutPlatform(false)
        }}
      />

      <HStack w="full" justifyContent={"left"} pt={{ base: 4, md: 6 }}>
        <Text fontWeight="medium" colorScheme="gray" opacity=".7">
          or
        </Text>
        <Checkbox
          isChecked={whitoutPlatform}
          isDisabled={!!getValues("guildPlatforms").length}
          onChange={(e) => {
            if (getValues("guildPlatforms").length === 0) {
              setPlatform("DEFAULT")
              setWhitoutPlatform(e?.target?.checked)
            }
          }}
        />
        <Text fontWeight="medium" colorScheme="gray" opacity=".7">
          continue without platform
        </Text>
      </HStack>
      <GuildCreationProgress
        next={nextStep}
        progress={0}
        isDisabled={getValues("guildPlatforms").length === 0 && !whitoutPlatform}
      />
      <CreateGuildPlatform />
    </ClientOnly>
  )
}

export default CreateGuildIndex
