import { useAppStore } from "@/utils/store";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import { type DataMenuType } from "./data";
import Tooltip from "@mui/material/Tooltip";
import { toTitleCase } from "@/utils/helpers";

interface ISidebarCollapse {
  openDrawer: boolean;
  item: DataMenuType;
}

const SidebarCollapse = ({ openDrawer, item }: ISidebarCollapse) => {
  const router = useRouter();
  const pathName = router.pathname;
  const { openMenu: open, setOpenMenu } = useAppStore();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (item.url !== "/" && pathName.includes(item.url)) {
      setOpenMenu(item.url, true);
    }
  }, [setOpenMenu, pathName, item]);

  if (domLoaded === false) {
    return null;
  }

  return (
    <>
      <Tooltip title={toTitleCase(item.label)} arrow placement="right">
        <ListItemButton
          sx={{ pl: openDrawer ? (item.depth + 1) * 2 : 2 }}
          onClick={() => setOpenMenu(item.url)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} className="capitalize" />
          {open[item.url] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Tooltip>
      <Collapse in={open[item.url]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.length > 0 &&
            item.children.map((child, index) =>
              child.children.length > 0 ? (
                <NavCollapse
                  key={`list-of-child-col-${index}`}
                  openDrawer={openDrawer}
                  item={child}
                />
              ) : (
                <SidebarItem
                  key={`list-of-child-item-${index}`}
                  openDrawer={openDrawer}
                  item={child}
                />
              ),
            )}
        </List>
      </Collapse>
    </>
  );
};

const NavCollapse = React.memo(SidebarCollapse);
SidebarCollapse.displayName = "SidebarCollapse";

export default SidebarCollapse;
