import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = (checked) => {
        setIsDarkMode(checked);
    };


    useEffect(() => {

        if (isDarkMode && localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } 
        else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);
        

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
        />
    );
};

export default ThemeToggle;