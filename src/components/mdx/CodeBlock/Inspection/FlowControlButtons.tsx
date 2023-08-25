import React from "react";

// MUI Components
// import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

// MUI Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SettingsIcon from "@mui/icons-material/Settings";

// Styles
import "./FlowControlButtons.scss";

type FlowControlButtonsProps = {
  running?: boolean;
  currentStep?: number;
  totalSteps?: number;

  onStepForward?: () => void;
  onStepBackward?: () => void;
  onResume?: () => void;
  onPause?: () => void;
  // onJumpToStep?: (step: number) => void;
}

/**
 * Displays buttons to control the flow of an inspection.
 * (e.g. play, pause, step forward, step backward, etc.)
 */
export default function FlowControlButtons(props: FlowControlButtonsProps) {
  return (
    <div className="insp-flow-control-buttons">
      {props.running &&
        <IconButton title="Pause" color="success" onClick={props.onPause}>
          <PauseIcon />
        </IconButton>
      }
      {!props.running &&
        <>
          (paused)&nbsp;
          <IconButton title="Resume" color="success" onClick={props.onResume}>
            <PlayArrowIcon />
          </IconButton>
        </>
      }
      <IconButton title="Step Backward" color="info" onClick={props.onStepBackward}>
        <FastRewindIcon />
      </IconButton>
      <IconButton title="Step Forward" color="info" onClick={props.onStepForward}>
        <FastForwardIcon />
      </IconButton>
      <IconButton title="Settings" color="inherit">
        <SettingsIcon />
      </IconButton>
      {/* TODO: uncomment it once we figure out how to properly jump between stages. */}
      {/* <TextField
        id="standard-basic"
        label="Step"
        size="small"
        variant="outlined"
        value={props.currentStep || 1}
        sx={{ maxWidth: 60, marginLeft: 2 }}
      /> */}
      <span style={{ marginLeft: 5 }}>Step</span>
      <span style={{ minWidth: 30, textAlign: "right" }}>
        {props.currentStep || 1}
      </span>
      &nbsp;of {props.totalSteps || 1}
    </div>
  );
}