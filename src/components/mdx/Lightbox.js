import React, { Component } from 'react';
import ReactLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class Lightbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen:		false,
		};

		this.setScrollEnabled = (enabled) => {
			document.body.style.overflow = enabled ? 'unset' : 'hidden';
		}

		this.handleOpen = () => {
			this.setState({ isOpen: true });
			this.setScrollEnabled(false);
		}
		this.handleClose = () => {
			this.setState({ isOpen: false });
			this.setScrollEnabled(true);
		}

		this.trigger = React.cloneElement(this.props.trigger,
			{
				onClick: (e) => {
					e.preventDefault();
					this.handleOpen()
				}
			});
	}

	componentDidMount() {
		if (this.state.isOpen)
			this.setScrollEnabled(false);
	}

	componentWillUnmount() {
		this.setScrollEnabled(true);
	}

	render() {
		const { photoIndex, isOpen } = this.state;

		return (
			<div>
				{this.trigger}

				{isOpen && (
					<ReactLightbox
						imagePadding={100}
						mainSrc={this.props.images[photoIndex]}
						nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
						prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
						onCloseRequest={() => this.handleClose()}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % this.props.images.length,
							})
						}
					/>
				)}
			</div>
		);
	}
}

Lightbox.isMDXComponent = true;