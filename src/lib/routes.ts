import Welcome from "components/unrestricted/Welcome";
import { FC } from "react";

interface Route {
    path: string;
    component: FC
}

const unrestricted: Route[] = [
    { path: "/", component: Welcome }
];

const restricted: Route[] = [];

export {restricted, unrestricted};