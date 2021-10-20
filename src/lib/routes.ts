import Profile from "components/restricted/Profile";
import QuakDetails from "components/restricted/QuakDetails";
import Quaks from "components/restricted/Quaks";
import Search from "components/restricted/Search";
import Timeline from "components/restricted/Timeline";
import ForgotPassword from "components/unrestricted/ForgotPassword";
import Login from "components/unrestricted/Login";
import SignUp from "components/unrestricted/SignUp";
import Welcome from "components/unrestricted/Welcome";
import { FC } from "react";

interface Route {
  path: string;
  component: FC;
}

interface DummyRoute {
  path: string;
  name: string;
}

const unrestricted: Route[] = [
  { path: "/", component: Welcome },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/forgot-password", component: ForgotPassword },
];

const restricted: Route[] = [
  { path: "/profile", component: Profile },
  { path: "/", component: Quaks },
  { path: "/timeline/:username", component: Timeline },
  { path: "/search", component: Search },
  { path: "/quak/:id", component: QuakDetails },
];

const dummy: DummyRoute[] = [
  { path: "/explore", name: "Explore" },
  { path: "/messages", name: "Messages" },
  { path: "/notifications", name: "Notifications" },
  { path: "/bookmarks", name: "Bookmarks" },
  { path: "/lists", name: "List" },
  { path: "/more", name: "More" },
];

export { restricted, unrestricted, dummy };
