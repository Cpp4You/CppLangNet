import React, { useState, useEffect, ReactElement } from "react";
import ReactLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Slide = {
  src: string;
  alt?: string;
};

type TriggerProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type TriggerRenderer = (props: TriggerProps) => ReactElement;

interface LightboxProps {
  images: string[];
  renderTrigger: TriggerRenderer;
}

function setWindowScrollEnabled(enabled: boolean): void {
  document.body.style.overflow = enabled ? "auto" : "hidden";
}

export default function Lightbox({ images, renderTrigger }: LightboxProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const slides: Slide[] = images.map((image, index) => ({
    src: image,
    alt: `Image ${index + 1}`,
  }));

  const handleOpen = () => {
    setOpen(true);
    setWindowScrollEnabled(false);
  };

  function handleClose(): void {
    setOpen(false);
    setPhotoIndex(0);
    setWindowScrollEnabled(true);
  }

  useEffect(() => {
    return () => {
      if (open) {
        setWindowScrollEnabled(true);
      }
    };
  }, []);

  const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <>
      {renderTrigger({ onClick: handleTriggerClick })}
      <ReactLightbox
        open={open}
        close={handleClose}
        slides={slides}
        index={photoIndex}
        noScroll={{ disabled: true }}
      />
    </>
  );
}

Lightbox.isMDXComponent = true;