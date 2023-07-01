import React, { useEffect } from "react";

import {
    Menu,
    MenuItem,
    Snackbar,
    Tooltip,
    IconButton,
    Slider,
} from "@mui/material";

import { getCookie } from "../helper/Cookies";

import SettingsIcon from "@mui/icons-material/Tune";
import ViewOverloadsIcon from "@mui/icons-material/ViewStream";

import styles from "./DocSettings.module.scss";

interface DocSettingsProps {
    onTextSizeChanged?: (size: number) => void
    arrowJumping?: string;
}

export const DocSettings = ({ onTextSizeChanged, arrowJumping }: DocSettingsProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [textSize, setTextSize] = React.useState(5);
    React.useEffect(() => {
        setTextSize(Number.parseInt(getCookie("sizeMode") || "5"));
    }, []);

    return (
        <div className={styles.menuButtonsContainer}>
            {typeof arrowJumping === "string" && <OverloadViewMode query={arrowJumping} />}
            <Tooltip title="Page view settings" placement='bottom' arrow>
                <IconButton
                    id="btn-open-doc-settings"
                    color="inherit"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className={styles.menuButton}
                >
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={open}
                onWheel={handleClose}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
                PaperProps={{
                    className: styles.menu
                }}
            >
                <MenuItem>
                    <span>Text size</span>
                    <Slider value={textSize}
                        step={1} min={1} max={5}
                        marks
                        size="small"
                        onChange={(e, newValue) => {
                            setTextSize(newValue as number);
                            onTextSizeChanged?.(newValue as number);
                        }}
                        style={{
                            width: 80
                        }}
                    />
                </MenuItem>
                {/* <MenuItem>
					<span>View only declarations</span>
					<Checkbox />
				</MenuItem> */}
            </Menu>

        </div>
    );
};

interface DocSettingsProps {
    query: string;
}

function useDidUpdateEffect(fn, inputs) {
    const didMountRef = React.useRef(false);

    React.useEffect(() => {
        if (didMountRef.current) {
            return fn();
        }
        didMountRef.current = true;
    }, inputs);
}

function scrollDistanceTo(elem: Element): number {
    return elem.getBoundingClientRect().top;
}

function findPrevHeading(query: string) {
    const all = document.querySelectorAll(query);
    for (let idx = all.length - 1; idx >= 0; --idx) {
        if (scrollDistanceTo(all[idx]) < 50) {
            return all[idx];
        }
    }
    return document.body;
}
function findNextHeading(query: string) {
    const all = document.querySelectorAll(query);
    for (const e of all) {
        if (scrollDistanceTo(e) >= 70)
            return e;
    }
    return all[all.length - 1];
}

const ScrollUpButtons = ["ArrowUp", "w"];
const ScrollDownButtons = ["ArrowDown", "s"];
const DisableButtons = ["Escape"];

export function OverloadViewMode({ query }: DocSettingsProps) {
    const [enabled, setEnabled] = React.useState(false);
    const [enabledInfoShown, setEnabledInfoShown] = React.useState(false);
    const [disabledInfoShown, setDisabledInfoShown] = React.useState(false);



    const handleKeyUp = React.useCallback((e: KeyboardEvent) => {
        console.log(e.key);
        if (ScrollUpButtons.indexOf(e.key) !== -1) {
            findPrevHeading(query)?.scrollIntoView();
        }
        else if (ScrollDownButtons.indexOf(e.key) !== -1) {
            findNextHeading(query)?.scrollIntoView();
        }
        else if (DisableButtons.indexOf(e.key) !== -1) {
            setEnabled(false);
        }
        else
            return; // skip preventing

        e.preventDefault();
    }, []);

    const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
        if (ScrollUpButtons.indexOf(e.key) !== -1 ||
            ScrollDownButtons.indexOf(e.key) !== -1) {
            e.preventDefault();
        }
    }, []);


    const bindKeyPressEvent = () => {
        if (window !== undefined) {
            window.addEventListener("keyup", handleKeyUp);
            window.addEventListener("keydown", handleKeyDown);
        }
    };

    const unbindKeyEvents = () => {
        window.removeEventListener("keyup", handleKeyUp);
        window.removeEventListener("keydown", handleKeyDown);
    };

    useDidUpdateEffect(() => {
        if (enabled) {
            bindKeyPressEvent();
            setEnabledInfoShown(true);
            setDisabledInfoShown(false);
        }
        else {
            unbindKeyEvents();
            setEnabledInfoShown(false);
            setDisabledInfoShown(true);
        }
    }, [enabled]);

    const handleClick = () => setEnabled(!enabled);

    const toggleShortcut = React.useCallback((e: KeyboardEvent) => {
        if (e.key === "N" && e.shiftKey) {
            setEnabled(!enabled);
        }
    }, [enabled]);
    const disableShortcut = () => (window && window.removeEventListener("keyup", toggleShortcut));

    React.useEffect(() => {
        if (window !== undefined)
            window.addEventListener("keyup", toggleShortcut);
        return disableShortcut;
    }, [enabled]);

    React.useEffect(() => {
        return () => {
            unbindKeyEvents(); // on unmount
            if (window)
                disableShortcut();
        };
    }, []);

    return (
        <React.Fragment>
            <Tooltip title="Toggle better arrow navigation (Shift+N)" placement='bottom' arrow>
                <IconButton
                    id="btn-overload-view"
                    color="inherit"
                    onClick={handleClick}
                    className={styles.menuButton + (enabled ? " " + styles.enabled : "")}
                >
                    <ViewOverloadsIcon />
                </IconButton>
            </Tooltip>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                autoHideDuration={3000}
                open={enabledInfoShown}
                onClose={(_, reason) => reason === "timeout" && setEnabledInfoShown(false)}
                message={<>Press ⬆ and ⬇ buttons to navigate. <b>Escape</b> to turn off.</>}
            />
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                autoHideDuration={2000}
                open={disabledInfoShown}
                onClose={(_, reason) => reason === "timeout" && setDisabledInfoShown(false)}
                message={<>Special arrow navigation disabled <small>(Shift+N to enable)</small>.</>}
            />
        </React.Fragment>
    );
}

export default DocSettings;