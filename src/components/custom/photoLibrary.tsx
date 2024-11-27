'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex, Image, Skeleton, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { photos } from '@/utils/photos';

interface Position {
  x: number;
  y: number;
}

const WheelControls = (
  slider: KeenSliderInstance,
  setShowIndicator: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let touchTimeout: NodeJS.Timeout | undefined;
  let position: Position = { x: 0, y: 0 };
  let wheelActive = false;

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
    dispatch(e, 'ksDragStart');
  }

  function wheel(e: WheelEvent) {
    dispatch(e, 'ksDrag');
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, 'ksDragEnd');
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);

    setShowIndicator(false);

    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel as EventListener, {
      passive: false,
    });
  });
};

const PhotoLibrary: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');
  const [showIndicator, setShowIndicator] = useState<boolean>(false);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [(slider) => WheelControls(slider, setShowIndicator)]
  );

  useEffect(() => {
    if (loadedImages === photos.length - 3) {
      setShowIndicator(true);
      setVisibility('visible');
    } else if (loadedImages < photos.length - 3) {
      setVisibility('hidden');
    }
  }, [loadedImages]);

  useEffect(() => {
    setLoadedImages(0);
    setShowIndicator(true);
    setVisibility('visible');
  }, []);

  return (
    <Flex flex={3} direction={'column'} position="relative">
      <>
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
          `}
        </style>

        {/* Scroll Indicator */}
        {showIndicator && (
          <Box
            position="absolute"
            visibility={{
              base: 'hidden',
              sm: 'hidden',
              md: 'visible',
              lg: 'visible',
              xl: 'visible',
              '2xl': 'visible',
            }}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={10}
            textAlign="center"
            animation="moveUpDown 2s infinite"
          >
            <Box mb={2}>
              <Text fontSize="sm" color="yellow">
                Scroll to explore
              </Text>
            </Box>
            <Box>
              <Box as="span" fontSize="24px" color="yellow">
                ↓
              </Box>
            </Box>
          </Box>
        )}

        <Box>
          <Box
            ref={sliderRef}
            className="keen-slider"
            height={{
              base: 300,
              sm: 300,
              md: 300,
              lg: 500,
              xl: 500,
              '2xl': 950,
            }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <Flex direction={photo.flexDirection}>
                  {loadedImages < photos.length - 1 && (
                    <Skeleton
                      height={{
                        base: 300,
                        sm: 300,
                        md: 300,
                        lg: 500,
                        xl: 500,
                        '2xl': 950,
                      }}
                      width={'100%'}
                    />
                  )}

                  <Box flex={1} key={photo.photoLink} visibility={visibility}>
                    <Image asChild alt="Picture of the author">
                      <NextImage
                        quality={80}
                        fill={true}
                        priority
                        onLoad={handleImageLoad}
                        src={photo.photoLink}
                        alt="Picture of the author"
                      />
                    </Image>
                  </Box>
                </Flex>
              </div>
            ))}
          </Box>
        </Box>
      </>
    </Flex>
  );
};

export default PhotoLibrary;
