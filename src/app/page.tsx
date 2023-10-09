"use client";

import {
  Box,
  Container,
  Card,
  Group,
  Stack,
  Text,
  Title,
  TextInput,
} from "@mantine/core";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { useState } from "react";
import prettier from "prettier/standalone";
import { ColorSchemeToggle } from "./_components/themeToggle";

const highlight1 = `<Paper p={{ base: "md", md: "lg" }} shadow="md">
  <Text>This is a pure Mantine component</Text>
</Paper>`;

const highlight2 = `<Paper
  classNames={{
    root: "group bg-mtn-primary-light-color text-light-grape-filled px-mtn-md py-mtn-lg my-mtn-xl rounded-lg text-white italic shadow-sm hover:shadow-mtn-lg cursor-pointer transition duration-150 ease-in-out"
  }}
>
  <Text
    classNames={{
      root: "group-hover:underline",
    }}
  >
    This component is a mixin with tailwind class
  </Text>
</Paper>`;

const highlight3 = `<Paper
  p={{ base: "md", md: "lg" }}
  shadow="md"
>
  <p className="text-light-text text-sm font-semibold">
    This a Mantine Input component with floating label by Tailwind
  </p>
  <TextInput
    labelProps={{ "data-floating": floating }}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
    classNames={{
      root: "relative mt-[12px]",
      input: "border-b-1",
      label:
        "absolute z-10 pointer-events-none top-[7px] left-[12px] text-red-800 text-sm transition-all duration-100 ease-in data-[floating=true]:translate-y-[-20px] text-base data-[floating=true]:text-xs data-[floating=true]:text-mtn-primary-filled-hover bg-red-300 data-[floating=true]:bg-white dark:data-[floating=true]:bg-mtn-dark-6 px-0 data-[floating=true]:px-1 data-[floating=true]:left-[8px]",
    }}
    label="Floating label"
  />
</Paper>`;

export default function Home() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;
  return (
    <Box mih={"100vh"} miw={"100vw"} className="bg-gray-100 dark:bg-mtn-dark-8">
      <Container size="xs">
        <Stack py={"xl"}>
          <Group justify={"space-between"}>
            <Title order={2}>Hello to Mantine V7 with Tailwind!</Title>
            <ColorSchemeToggle />
          </Group>
          <Stack mt={"lg"}>
            <Card p={{ base: "md", md: "lg" }} shadow="md">
              <Text>This is a pure Mantine component</Text>
            </Card>

            <Card
              classNames={{
                root: "group bg-mtn-primary-light-color text-light-grape-filled px-mtn-md py-mtn-lg my-mtn-xl rounded-lg text-white italic shadow-sm hover:shadow-mtn-lg cursor-pointer transition duration-150 ease-in-out",
              }}
            >
              <Text
                classNames={{
                  root: "group-hover:underline",
                }}
              >
                This component is a mixin with tailwind class
              </Text>
            </Card>

            <Card p={{ base: "md", md: "lg" }} shadow="md">
              <Text className="text-light-text text-sm font-semibold">
                This a Mantine Input component with floating label by Tailwind
              </Text>
              <TextInput
                labelProps={{ "data-floating": floating }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                classNames={{
                  root: "relative mt-[12px]",
                  input: "border-b-1",
                  label:
                    "absolute z-10 pointer-events-none top-[7px] left-[12px] text-light-placeholder text-sm transition-all duration-100 ease-in data-[floating=true]:translate-y-[-20px] text-base data-[floating=true]:text-xs data-[floating=true]:text-mtn-primary-filled-hover bg-transparent dark:data-[floating=true]:bg-mtn-dark-6 data-[floating=true]:bg-white px-0 data-[floating=true]:px-1 data-[floating=true]:left-[8px]",
                }}
                label="Floating label"
              />
            </Card>

            {/* Code CodeHighlight */}
            <Card p={{ base: "md", md: "lg" }} shadow="md">
              <CodeHighlightTabs
                withExpandButton
                defaultExpanded={false}
                expandCodeLabel="Show full code"
                collapseCodeLabel="Show less"
                code={[
                  {
                    language: "tsx",
                    code: highlight1,
                    fileName: "pure-mantine",
                  },
                  {
                    language: "tsx",
                    code: highlight2,
                    fileName: "mixin-tailwind",
                  },
                  {
                    language: "tsx",
                    code: highlight3,
                    fileName: "input-floating",
                  },
                ]}
              />
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
