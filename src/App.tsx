import {
  Authenticated,
  GitHubBanner,
  Refine,
  WelcomePage,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

// import dataProvider, {
//   GraphQLClient,
//   liveProvider,
// } from "@refinedev/nestjs-query";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { dataProvider, liveProvider } from "./providers/data/index";
import { authProvider } from "./providers/auth";

// import { App as AntdApp } from "antd";
// import { createClient } from "graphql-ws";
// import { authProvider } from "./authProvider";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgotPassword";
import Layout from "./components/layout";

// import { ColorModeContextProvider } from "./contexts/color-mode";

// const API_URL = "https://api.nestjs-query.refine.dev/graphql";
// const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";

// const gqlClient = new GraphQLClient(API_URL);
// const wsClient = createClient({ url: WS_URL });

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        {/* <ColorModeContextProvider> */}
        {/* <AntdApp> */}
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider}
            liveProvider={liveProvider}
            notificationProvider={useNotificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
              projectId: "oLCRgI-y39HeW-WuCTNx",
              liveMode: "auto",
            }}>
            <Routes>
              {/* <Route index element={<WelcomePage />} /> */}
              <Route path="/login" index element={<Login />} />
              <Route path="/register" index element={<Register />} />
              <Route
                path="/forgot-password"
                index
                element={<ForgotPassword />}
              />
              <Route
                element={
                  <Authenticated
                    key="authenticated-layout"
                    fallback={<CatchAllNavigate to="/login" />}>
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }>
                <Route index element={<Home />} />
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
        {/* </AntdApp> */}
        {/* </ColorModeContextProvider> */}
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
