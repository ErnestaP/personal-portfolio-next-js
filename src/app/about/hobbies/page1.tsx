"use client";

import React from "react";
import "./Slider.module.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

const photos = [
  {
    flexDirection: "",
    1: "/hobbies/palanga.JPG",
    2: "/hobbies/dubai-2.JPG",
    3: "/hobbies/drive-in.JPG",
    4: "/hobbies/japan-2.JPG",
  },
  {
    flexDirection: "row-reverse",
    1: "/hobbies/shadow-1.JPG",
    2: "/hobbies/building.JPG",
    3: "/hobbies/bulbs.jpeg",
    4: "/hobbies/lights.JPG",
  },
  {
    flexDirection: "",
    1: "/hobbies/driving-1.JPG",
    2: "/hobbies/hike-1.JPG",
    3: "/hobbies/hike-2.jpeg",
    4: "/hobbies/hike-3.jpeg",
  },
  {
    flexDirection: "row-reverse",
    1: "/hobbies/driving-2.JPG",
    2: "/hobbies/dubai-1.JPG",
    3: "/hobbies/sunset.jpeg",
    4: "/hobbies/us.jpeg",
  },
  {
    flexDirection: "row-reverse",
    1: "/hobbies/palanga-2.JPG",
    2: "/hobbies/lake.JPG",
    3: "/hobbies/snowboarding.jpeg",
    4: "/hobbies/elnias.jpeg",
  },
];

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );

  return (
    <>
      <HStack justify={"center"} align={"start"} padding={2}>
        <Box
          maxW={"120ch"}
          fontSize={{
            base: "16px",
            sm: "16px",
            md: "20",
            lg: "20",
            xl: "25px",
            "2xl": "25px",
          }}
        >
          I absolutely love being outdoors and exploring new places! Whether
          it’s hiking, traveling, snowboarding, or just snapping photos of
          everything around me with my camera or phone, I’m always up for an
          adventure. Here are a few of my favorite shots :)
        </Box>
      </HStack>
      <Flex overflow={"hidden"} position={"fixed"} direction={"column"} align={"end"}>
        <Flex height={"100vh"} ref={sliderRef} className="keen-slider">
          {photos.map((photoSrc, index) => (
            <div className="keen-slider__slide number-slide1">
              <HStack direction={photoSrc.flexDirection} objectFit={"cover"}>
                <Box>
                  <Image asChild h={"max-content"}>
                    <NextImage
                      quality={100}
                      width={600}
                      height={900}
                      src={photoSrc[4]}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "auto",
                      }}
                      alt="Picture of the author"
                    />
                  </Image>
                </Box>
                <VStack>
                  {/* {photoSrc.src.map((src) => ( */}
                  <Box>
                    <Image asChild>
                      <NextImage
                        quality={100}
                        width={600}
                        height={900}
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "auto",
                        }}
                        src={photoSrc[1]}
                        alt="Picture of the author"
                      />
                    </Image>
                  </Box>
                  <Box>
                    <Image asChild>
                      <NextImage
                        quality={100}
                        width={600}
                        height={900}
                        src={photoSrc[2]}
                        alt="Picture of the author"
                        style={{
                          objectFit: "cover",
                          height: "auto",
                          width: "auto",
                        }}
                      />
                    </Image>
                  </Box>
                </VStack>
                <Box>
                  <Image asChild>
                    <NextImage
                      quality={100}
                      width={600}
                      height={900}
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "auto",
                      }}
                      src={photoSrc[3]}
                      alt="Picture of the author"
                    />
                  </Image>
                </Box>
              </HStack>
            </div>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

//     <Flex justify="center" align="center" height="100vh">
// <CubicEyeLoader/>
//     </Flex>
//   )
// }

// export default function Hobbies() {
//   return (
//     <Flex justify="center" align="center">
//       <CubicEyeLoader />
//     </Flex>
//   );
// }

// export default function Experience() {
//   return (
//     <Flex justify="center" align="center">
//       <CubicEyeLoader />
//     </Flex>
//   );
// }
