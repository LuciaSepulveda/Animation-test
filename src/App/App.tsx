import {
  Box,
  Button,
  Center,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import {MoonIcon, SunIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"
import * as React from "react"

interface Circle {
  id: number
  color: string
}

const App: React.FC = () => {
  const [array, setArray] = React.useState<Circle[]>([
    {id: 0, color: Math.floor(Math.random() * 16777215).toString(16)},
  ])
  const [size, setSize] = React.useState<string>("300px")
  const [rotate, setRotate] = React.useState<number>(0)
  const [glow, setGlow] = React.useState<number>(0)
  const [update, setUpdate] = React.useState<boolean>(false)
  const [direction, setDirection] = React.useState<string>("Y")
  const [background, setBackground] = React.useState<boolean>(false)
  const {colorMode, toggleColorMode} = useColorMode()
  const color = useColorModeValue("#242424", "#FBFBFB")
  const backgroundPage = useColorModeValue("#FAF3F3", "#222831")
  const bgButtons = useColorModeValue("#A7BBC7", "#393E46")

  const handleCircle = (e: string) => {
    if (e === "+")
      array.push({
        id: array.length + 1,
        color: Math.floor(Math.random() * 1677721).toString(16),
      })
    else if (array.length > 0) array.pop()

    setUpdate(true)
  }
  const handleGlow = (e: string) => {
    if (e === "+") setGlow(glow + 1)
    else if (glow > 0) setGlow(glow - 1)

    setUpdate(true)
  }

  const handleDirection = (e: string) => {
    if (e === "X" && direction !== "X") setDirection("X")
    if (e === "Y" && direction !== "Y") setDirection("Y")
    setUpdate(true)
  }

  const handleBackground = () => {
    setBackground(!background)
    setUpdate(true)
  }

  const handleSize = (value: number) => {
    setSize((value * 5).toString() + "px")
    setUpdate(true)
  }

  const handleRotate = (value: number) => {
    setRotate(value)
    setUpdate(true)
  }

  React.useEffect(() => {
    if (update) setUpdate(false)
  }, [update])

  return (
    <Center bg={backgroundPage} color={color} h="100vh" w="100%">
      <Box as="button" position="absolute" right="10px" top="10px" onClick={toggleColorMode}>
        {colorMode === "light" && <MoonIcon alt="Dark mode icon" />}
        {colorMode !== "light" && <SunIcon alt="Light mode icon" />}
      </Box>
      <VStack h="90%" position="relative" w="100%">
        {update && <Box color={color}>Loading</Box>}
        {!update &&
          array.map((elem) => {
            return (
              <>
                {direction === "X" && !background && (
                  <motion.div
                    key={elem.id}
                    animate={{
                      rotateX: 360 + elem.id * 3,
                      rotateY: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    initial={{
                      rotateX: 0 + elem.id * 3,
                      rotateY: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    style={{
                      border: `3px solid #${elem.color}`,
                      borderRadius: "50%",
                      boxShadow: `0 0 ${glow.toString()}px ${(glow * 0.5).toString()}px #${
                        elem.color
                      }`,
                      height: `${size}`,
                      margin: "0px",
                      position: "absolute",
                      top: "20px",
                      width: `${size}`,
                    }}
                    transition={{duration: 2, repeat: Infinity}}
                  />
                )}
                {direction === "X" && background && (
                  <motion.div
                    key={elem.id}
                    animate={{
                      rotateX: 360 + elem.id * 3,
                      rotateY: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    initial={{
                      rotateX: 0 + elem.id * 3,
                      rotateY: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    style={{
                      backgroundColor: `#${elem.color}`,
                      border: `3px solid #${elem.color}`,
                      borderRadius: "50%",
                      boxShadow: `0 0 ${glow.toString()}px ${(glow * 0.5).toString()}px #${
                        elem.color
                      }`,
                      height: `${size}`,
                      margin: "0px",
                      position: "absolute",
                      top: "20px",
                      width: `${size}`,
                    }}
                    transition={{duration: 2, repeat: Infinity}}
                  />
                )}
                {direction === "Y" && !background && (
                  <motion.div
                    key={elem.id}
                    animate={{
                      rotateY: 360 + elem.id * 3,
                      rotateX: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    initial={{
                      rotateY: 0 + elem.id * 3,
                      rotateX: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    style={{
                      border: `3px solid #${elem.color}`,
                      borderRadius: "50%",
                      boxShadow: `0 0 ${glow.toString()}px ${(glow * 0.5).toString()}px #${
                        elem.color
                      }`,
                      height: `${size}`,
                      margin: "0px",
                      position: "absolute",
                      top: "20px",
                      width: `${size}`,
                    }}
                    transition={{duration: 2, repeat: Infinity}}
                  />
                )}
                {direction === "Y" && background && (
                  <motion.div
                    key={elem.id}
                    animate={{
                      rotateY: 360 + elem.id * 3,
                      rotateX: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    initial={{
                      rotateY: 0 + elem.id * 3,
                      rotateX: elem.id !== 0 ? rotate * elem.id : rotate,
                    }}
                    style={{
                      backgroundColor: `#${elem.color}`,
                      border: `3px solid #${elem.color}`,
                      borderRadius: "50%",
                      boxShadow: `0 0 ${glow.toString()}px ${(glow * 0.5).toString()}px #${
                        elem.color
                      }`,
                      height: `${size}`,
                      margin: "0px",
                      position: "absolute",
                      top: "20px",
                      width: `${size}`,
                    }}
                    transition={{duration: 2, repeat: Infinity}}
                  />
                )}
              </>
            )
          })}
        <VStack
          bg={bgButtons}
          borderRadius="md"
          bottom="0px"
          color={color}
          p={4}
          position="absolute"
          w="400px"
        >
          <HStack w="100%">
            <Text>Circles: </Text>
            <Button onClick={() => handleCircle("+")}>+</Button>
            {array.length > 0 && <Button onClick={() => handleCircle("-")}>-</Button>}
          </HStack>
          <HStack w="100%">
            <Text>Direction: </Text>
            <Button disabled={direction === "X"} onClick={() => handleDirection("X")}>
              X
            </Button>
            <Button disabled={direction === "Y"} onClick={() => handleDirection("Y")}>
              Y
            </Button>
          </HStack>
          <HStack w="100%">
            <Text>Glow: </Text>
            <Button onClick={() => handleGlow("+")}>+</Button>
            {glow > 1 && <Button onClick={() => handleGlow("-")}>-</Button>}
          </HStack>
          <HStack w="100%">
            <Text>Background</Text>
            <Button onClick={() => handleBackground()}>Yes</Button>
          </HStack>
          <HStack w="100%">
            <Text>Size: </Text>
            <Slider
              colorScheme="teal"
              defaultValue={60}
              onChange={(value: number) => handleSize(value)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
          <HStack w="100%">
            <Text mr="4px">Rotate: </Text>
            <Slider
              colorScheme="teal"
              defaultValue={0}
              max={360}
              min={0}
              onChange={(value: number) => handleRotate(value)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  )
}

export default App
