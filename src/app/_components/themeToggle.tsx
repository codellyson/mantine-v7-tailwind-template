"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleToggleScheme = () => {
    if (colorScheme === "dark") return setColorScheme("light");

    return setColorScheme("dark");
  };

  return (
    <ActionIcon variant={"outline"} onClick={handleToggleScheme}>
      {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );
}
