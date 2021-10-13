import Login from "components/unrestricted/Login";
import SignUp from "components/unrestricted/SignUp";
import Welcome from "components/unrestricted/Welcome";
import { FC } from "react";

interface Route {
    path: string;
    component: FC
}

const unrestricted: Route[] = [
    { path: "/", component: Welcome },
    { path: "/login", component: Login },
    { path: "/signup", component: SignUp }
];

const restricted: Route[] = [];

export {restricted, unrestricted};