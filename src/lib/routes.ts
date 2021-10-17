import Profile from "components/restricted/Profile";
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
    { path: "/profile", component: Profile }
];

const dummy: DummyRoute[] = [
    { path: "/explore", name: "Explore" },
    { path: "/messages", name: "Messages" },
    { path: "/notifications", name: "Notifications" },
    { path: "/bookmarks", name: "Bookmarks" },
    { path: "/lists", name: "List" },
    { path: "/more", name: "More" },
];

export {restricted, unrestricted, dummy};