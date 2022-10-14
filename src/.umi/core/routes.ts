// @ts-nocheck
import React from "react";
import { ApplyPluginsType } from "/Users/jianghuayu/jhy/easyDaily/node_modules/umi/node_modules/@umijs/runtime";
import * as umiExports from "./umiExports";
import { plugin } from "./plugin";

export function getRoutes() {
  const routes = [
    {
      path: "/Calendar/pages",
      exact: true,
      component: require("@/pages/Calendar/pages/index.tsx").default,
    },
    {
      path: "/",
      exact: true,
      component: require("@/pages/index.tsx").default,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: "patchRoutes",
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
