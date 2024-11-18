"use client";

import React from "react";

import { useRecipe, IconButton } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

import { iconRecipe } from "@/recipes/icon.recipe";

export default function Icons() {
  const recipe = useRecipe({ recipe: iconRecipe });
  const styles = recipe({ size: "lg" });
  return (
    <>
      <IconButton
        css={styles}
        variant="ghost"
        onClick={() => window.open("https://github.com/ErnestaP", "_blank")}
      >
        <FaGithub />
      </IconButton>
      <IconButton
        css={styles}
        variant="ghost"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/ernesta-petraityt%C4%97-09642b169/",
            "_blank"
          )
        }
      >
        <FaLinkedin />
      </IconButton>
      <IconButton
        css={styles}
        variant="ghost"
        onClick={() =>
          window.open(
            "mailto:ernesta.petraityte@yahoo.com?subject=Subject&body=Body%20goes%20here",
            "_blank"
          )
        }
      >
        <TfiEmail />
      </IconButton>
    </>
  );
}
