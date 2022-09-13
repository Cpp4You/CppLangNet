import React from 'react';

import {
	Menu,
	Checkbox,
	MenuItem,
	IconButton,
	Slider
} from '@mui/material';

import { getCookie } from '../helper/Cookies';

import TuneIcon from '@mui/icons-material/Tune';

import styles from './DocSettings.module.scss';

interface DocSettingsProps {
	onTextSizeChanged?: (size: number) => void
}

export const DocSettings = ({onTextSizeChanged}: DocSettingsProps) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [textSize, setTextSize] = React.useState( Number.parseInt(getCookie('sizeMode') || "") || 3 );
	return (
		<div>
			<IconButton
				id="basic-button"
				color="inherit"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				className={styles.menuButton}
			>
				<TuneIcon />
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
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

export default DocSettings;