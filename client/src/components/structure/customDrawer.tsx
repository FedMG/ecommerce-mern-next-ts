import Link from "next/link";

import { Drawer, Group, ScrollArea, UnstyledButton } from "@mantine/core";
import { Box, Center, Collapse, Divider } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

import { CustomDrawerProps } from "additional";
import { useHeaderStyles } from "@/styles/matine";

export const CustomDrawer: React.FC<CustomDrawerProps> = ({ drawer, collapse, links }) => {
  const { classes, theme } = useHeaderStyles();

  return (
    <Drawer
        opened={drawer[0]}
        onClose={drawer[1]}
        size="100%"
        padding="sm"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          {links.map(({ path, label, links }) => {
            const menuItems = links?.map(({ path, label }) => (
              <Link key={path} href={path} className={classes.link}>
                {label}
              </Link>
            ));

            if (menuItems) {
              return (
                <div key={path}>
                  <UnstyledButton
                    onClick={collapse[1]}
                    className={classes.link}
                  >
                    <Center inline>
                      <Box component="span" ml={5}>
                        {label}
                      </Box>
                      <IconChevronDown
                        size={16}
                        stroke={1.5}
                      />
                    </Center>
                  </UnstyledButton>
                  <Collapse in={collapse[0]} pr={15}>{menuItems}</Collapse>
                </div>
              );
            }
            
            return (
              <Link key={path} href={path} className={classes.link} onClick={drawer[1]}>
                {label}
              </Link>
            );
          })}
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group position="center" grow pb="md" px="md">
            <Link href='/user/login' className={classes.buttonLinks}>Sign In </Link>
            <Link href='/user/register' className={classes.buttonLinks}>Sign Up </Link>
          </Group>
        </ScrollArea>
      </Drawer>
  )
}
