import { IconType } from "react-icons";
import FlashCards from "./flashcards";

import {
    RiCheckboxLine,
    RiMarkdownLine,
    RiPagesLine,
    RiQuestionLine,
    RiSettings2Line,
    RiStackLine,
    RiYoutubeLine,
} from "react-icons/ri";
import Routine from "./routine";
import Settings from "./settings";
import Notes from "./notes";
import PlaylistDuration from "./playlist-duration";
import Miscellaneous from "./miscellaneous";
import Resources from "./resources";

export interface DrawerNavbarLayoutData{
    sideBarMenuIcon:JSX.Element,
    component:JSX.Element,
    title:string
}

// export const navListData = [
//     { icon: <RiPagesLine />, label: "Resources" },
//     { icon: <RiStackLine />, label: "Flashcards" },
//     { icon: <RiMarkdownLine />, label: "Notes" },
//     { icon: <RiCheckboxLine />, label: "Routine" },
//     { icon: <RiYoutubeLine />, label: "Playlist-Duration" },
//     { icon: <RiQuestionLine />, label: "Miscellaneous" },
//     { icon: <RiSettings2Line />, label: "Settings" },
// ];


//index is important
export const drawerNavbarLayoutData:DrawerNavbarLayoutData[]=[
    // {title:"Resources",sideBarMenuIcon:<RiPagesLine />,component:<Resources/>},
    {title:"Flashcards",sideBarMenuIcon:<RiStackLine />,component:<FlashCards/>},
    {title:"Notes",sideBarMenuIcon:<RiMarkdownLine />,component:<Notes/>},
    {title:"Routine",sideBarMenuIcon:<RiCheckboxLine/>,component:<Routine/>},
    // {title:"Playlist-Duration",sideBarMenuIcon:<RiYoutubeLine />,component:<PlaylistDuration/>},
    {title:"Miscellaneous",sideBarMenuIcon:<RiQuestionLine />,component:<Miscellaneous/>},
    {title:"Settings",sideBarMenuIcon:<RiSettings2Line/>,component:<Settings/>},
]