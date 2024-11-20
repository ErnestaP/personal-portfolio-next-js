"use client";

import React from "react";
import "./Slider.module.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Image } from "@chakra-ui/react";
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

export default function Hobbies() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );

  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: '100%' }}>
      <div className="keen-slider__slide number-slide1">labas
        {/* <Image asChild>
          <NextImage
            quality={100}
            width={1000}
            height={1000}
            src={"/heart_woman.png"}
            alt="Picture of the author"
          />
        </Image> */}
      </div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}

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
