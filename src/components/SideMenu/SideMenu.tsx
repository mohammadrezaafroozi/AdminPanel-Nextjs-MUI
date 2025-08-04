import { CSSObject } from "@mui/system";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Settings } from "@mui/icons-material";
import NextLink from "next/link";
import scss from "./SideMenu.module.scss";
import HomeIcon from "@mui/icons-material/Home";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["", "data", "profile", "settings", ""];
const menuListTranslations = [
  "Home",
  "Data",
  "Profile",
  "Settings",
  "Sign Out",
];
const menuListIcons = [
  <HomeIcon />,
  <EqualizerIcon />,
  <Person2Icon />,
  <Settings />,
  <ExitToAppIcon />,
];

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className=""
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className="flex items-center justify-end py-0 px-4">
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Divider />


    <List>
      {menuListTranslations.map((text, index) => (
      <ListItem key={`menu-item-${index}`} disablePadding sx={{ display: "block" }}>
      <NextLink
        className={scss.link}
        href={`/dashboard/${menuRouteList[index]}`}
      >
        <ListItemButton
          key={`btn-${index}`}
          onClick={() => handleListItemButtonClick(text)}
          title={text}
          aria-label={text}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            key={`menu-icon-${index}`}
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {React.cloneElement(menuListIcons[index], { key: `icon-${index}` })}
          </ListItemIcon>
          <ListItemText
            key={`menu-text-${index}`}
            primary={text}
            sx={{
              color: theme.palette.text.primary,
              opacity: open ? 1 : 0,
            }}
          />
        </ListItemButton>
      </NextLink>
    </ListItem>
  ))}
</List>

    </Drawer>
  );
};

export default SideMenu;