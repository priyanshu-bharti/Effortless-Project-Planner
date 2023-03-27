import React, { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ToggleTheme = () => {
    const { isDarkMode, toggle, enable, disable } = useDarkMode();

    useEffect(() => {
        const html = document.querySelector("html");
        html!.dataset.theme = isDarkMode ? "dark" : "light";
    }, [isDarkMode]);

    return (

            <label className="btn btn-square btn-ghost swap swap-rotate mr-2">
                {/* <!-- this hidden checkbox controls the state --> */}
                <input
                    type="checkbox"
                    className="invisible"
                    onChange={toggle}
                />

                {/* <!-- sun icon --> */}
                <RiSunLine className="swap-on text-xl" />

                {/* <!-- moon icon --> */}
                <RiMoonLine className="swap-off text-xl" />
            </label>
    );
};

export default ToggleTheme;
