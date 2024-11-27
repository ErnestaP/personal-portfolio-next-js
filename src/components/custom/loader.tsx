import { Box, Flex } from "@chakra-ui/react";

const SpiralSpinner = () => {
  const letters = "Loading";
  const points = "...";

  return (
     <Flex
      align="center"
      justify="start"
      height="400px"
      width="50vw"
      direction="column"
    >
      <Flex
        align="center"
        justify="center"
        position="relative"
        width="300px"
        height="300px"
        alignContent={"center"}
        css={{
          animation: "spin 3.5s linear infinite",
        }}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <Box
            key={index}
            position="fixed"
            width="0px"
            height="5px"
            bg="red.400"
            transform={`rotate(${index * 15}deg) translate(60px)`}
            css={{
              animation:
                "grow 3s ease-in-out infinite, colorChange 5s linear infinite",
            }}
          />
        ))}
      </Flex>

      <Flex position="relative" mt={8} >
        {letters.split("").map((char, charIndex) => (
          <Box
            key={charIndex}
            fontSize="xl"
            fontWeight="bold"
            color="gray.400"
            mx={1}
          >
            {char}
          </Box>
        ))}
        {points.split("").map((char, charIndex) => (
          <Box
            key={charIndex}
            fontSize="xl"
            fontWeight="bold"
            color="gray.400"
            mx={1}
            css={{
              animation: `fadeInOut 3s ease-in-out ${
                charIndex * 0.3
              }s infinite`,
            }}
          >
            {char}
          </Box>
        ))}
      </Flex>

      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes grow {
          0%,
          100% {
            width: 0px;
          }
          50% {
            width: 200px;
          }
        }
        @keyframes colorChange {
          0% {
            background-color: red;
          }
          25% {
            background-color: yellow;
          }
          50% {
            background-color: green;
          }
          75% {
            background-color: blue;
          }
          100% {
            background-color: red;
          }
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </Flex>
  );
};

export default SpiralSpinner;
