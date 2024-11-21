"use client";
//TODO: ts errors
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const WheelControls = (slider) => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
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

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
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

const Hobbies = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );

  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIndicator(false), 10000); // Hide after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const photos = [
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/dubai-2.JPG"],
    },
    {
      flexDirection: "row",
      photoLinks: ["/hobbies/drive-in.JPG", "/hobbies/japan-2.JPG"],
    },
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/sri-lanka.JPG"],
    },
    {
      flexDirection: "row",
      photoLinks: ["/hobbies/hike-2.jpeg", "/hobbies/bulbs.jpeg"],
    },
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/building.JPG"],
    },
    {
      flexDirection: "row",
      photoLinks: ["/hobbies/hike-3.jpeg", "/hobbies/us.jpeg"],
    },
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/shadow-1.JPG"],
    },
    {
      flexDirection: "row",
      photoLinks: ["/hobbies/sunset.jpeg", "/hobbies/lights.JPG"],
    },
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/driving-1.JPG"],
    },
    {
      flexDirection: "row",
      photoLinks: ["/hobbies/elnias.jpeg", "/hobbies/japan.JPG"],
    },
    {
      flexDirection: "column",
      photoLinks: ["/hobbies/lake.JPG"],
    },
  ];

  return (
    <Flex direction={"row"} gap={3}>
      <Box flex={1} fontSize={"16px"} textAlign={"justify"} p={3}>
        I absolutely love being outdoors and exploring new places! Whether it’s
        hiking, traveling, snowboarding, or just snapping photos of everything
        around me with my camera or phone, I’m always up for an adventure. Here
        are a few of my favorite shots :)
      </Box>

      <Flex
        flex={3}
        w={600}
        direction={"column"}
        overflow={"hidden"}
        position="relative"
      >
        <style>
          {`
            @keyframes moveUpDown {
              0% {
                transform: translate(-50%, -50%);
              }
              50% {
                transform: translate(-50%, -55%);
              }
              100% {
                transform: translate(-50%, -50%);
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
          `}
        </style>

        {/* Scroll Indicator */}
        {showIndicator && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={10}
            textAlign="center"
            animation="moveUpDown 2s infinite"
          >
            <Box mb={2}>
              <Text fontSize="sm" color="gray.700">
                Scroll to explore
              </Text>
            </Box>
            <Box>
              <Box as="span" fontSize="24px" color="gray.700">
                ↓
              </Box>
            </Box>
          </Box>
        )}

        <Box>
          <div ref={sliderRef} className="keen-slider" style={{ height: 800 }}>
            {photos.map((photo) => (
              <div className="keen-slider__slide number-slide1">
                <Flex direction={photo.flexDirection}>
                  {photo.photoLinks.map((photoLink) => (
                    <Box flex={1} height={"auto"}>
                      <Image asChild>
                        <NextImage
                          quality={100}
                          width={600}
                          height={800}
                          src={photoLink}
                          style={{
                            objectFit: "cover",
                            alignItems: "center",
                            height: "auto",
                            width: "100%",
                          }}
                          alt="Picture of the author"
                        />
                      </Image>
                    </Box>
                  ))}
                </Flex>
              </div>
            ))}
          </div>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hobbies;