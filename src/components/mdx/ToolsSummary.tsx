import React from "react";

import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ProductCard from "./ProductCard";
import Lightbox from "./Lightbox";

// Styles
import thumbnailStyles from "./ToolsSummary.module.scss";

type ToolDesc = {
  author: string;
  title: string;
  iconUrl: string;
  site: string;

  galleryThumbnail?: string;
  gallery?: string[];
}

export const ToolSummaryInfo: Record<string, ToolDesc> = {
  "vscode": {
    author: "Microsoft",
    title: "Visual Studio Code",
    iconUrl: getIconUrl("vscode_1_35.svg"),
    site: "https://code.visualstudio.com/",

    galleryThumbnail: getGalleryUrl("vscode-thumbnail.png"),
    gallery: galleryUrls([
      "vscode-2-hd.png",
      "vscode-1-hd.png",
      "vscode-3-hd.png",
      "vscode-4-hd.png",
    ]),
  },
  "vs2022": {
    author: "Microsoft",
    title: "Visual Studio",
    iconUrl: getIconUrl("vs_2019.svg"),
    site: "https://visualstudio.com/",

    galleryThumbnail: getGalleryUrl("vs2022-thumbnail.png"),
    gallery: galleryUrls([
      "vs2022-4-hd.png",
      "vs2022-2-hd.png",
      "vs2022-1-hd.png",
      "vs2022-3-hd.png",
    ]),
  },
  "clion": {
    author: "Jetbrains",
    title: "CLion",
    iconUrl: getIconUrl("clion.svg"),
    site: "https://www.jetbrains.com/clion/",

    galleryThumbnail: getGalleryUrl("clion-thumbnail.png"),
    gallery: galleryUrls([
      "clion-1-hd.png",
      "clion-2-hd.png",
      "clion-3-hd.png",
      "clion-4-hd.png",
      "clion-5-hd.png",
    ]),
  },
  "qtcreator": {
    author: "The Qt Company",
    title: "QtCreator",
    iconUrl: getIconUrl("qtcreator.svg"),
    site: "https://www.qt.io/product/development-tools/",

    galleryThumbnail: getGalleryUrl("qtcreator-thumbnail.png"),
    gallery: galleryUrls([
      "qtcreator-1-hd.png",
      "qtcreator-2-hd.png",
      "qtcreator-3-hd.png",
      "qtcreator-4-hd.png",
      "qtcreator-5-hd.png",
    ]),
  },
  "codeblocks": {
    author: "The Code::Blocks team",
    title: "Code Blocks",
    iconUrl: getIconUrl("codeblocks.png"),
    site: "https://www.codeblocks.org/",

    galleryThumbnail: getGalleryUrl("codeblocks-thumbnail.png"),
    gallery: galleryUrls([
      "codeblocks-1-hd.png",
      "codeblocks-2-hd.png",
      "codeblocks-3-hd.png",
    ]),
  },
  "cppbuilder": {
    author: "Embarcadero",
    title: "C++ Builder",
    iconUrl: getIconUrl("cppbuilder.png"),
    site: "https://www.embarcadero.com/products/cbuilder",
  },
  "devcpp": {
    author: "Bloodshed",
    title: "Dev-C++",
    iconUrl: getIconUrl("devcpp.png"),
    site: "https://www.bloodshed.net/",
  },
  "replit": {
    author: "The Replit Team",
    title: "Repl.it",
    iconUrl: getIconUrl("replit.svg"),
    site: "https://www.replit.com/",

    galleryThumbnail: getGalleryUrl("replit-thumbnail.png"),
    gallery: galleryUrls([
      "replit-3-hd.png",
      "replit-2-hd.png",
      "replit-4-hd.png",
      "replit-1-hd.png",
    ]),
  },

  ////////////////////////////////////
  // Compilers
  ////////////////////////////////////
  "msvc": {
    author: "Microsoft",
    title: "Visual Studio Compiler",
    iconUrl: getIconUrl("vs_2019.svg"),
    site: "https://visualstudio.com/",
  },
  "gcc": {
    author: "The GNU Project",
    title: "GCC (GNU Compiler Collection)",
    iconUrl: getIconUrl("gcc.svg"),
    site: "https://gcc.gnu.org/",
  },
  "clang": {
    author: "LLVM Developer Group",
    title: "Clang",
    iconUrl: getIconUrl("llvm.png"),
    site: "https://clang.llvm.org/",
  },
  "apple-clang": {
    author: "Apple & LLVM Authors",
    title: "Apple Clang",
    iconUrl: getIconUrl("llvm.png"),
    site: "https://github.com/apple/llvm-project",
  },
};

type ToolCardProps = {
  toolId: keyof typeof ToolSummaryInfo;
  setupLink?: string;
  children?: React.ReactNode;
}

export default function ToolCard(props: ToolCardProps) {
  const tool = ToolSummaryInfo[props.toolId];
  return (
    <ProductCard title={tool.title} img={tool.iconUrl} author={tool.author} >
      <ProductCard.Desc>
        {props.children}
      </ProductCard.Desc>
      <ProductCard.Actions>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <a href={tool.site} target="_blank" rel="noreferrer">
              <Translate id="tool.projectWebsite">🌐 Project website</Translate>
            </a>
          </li>
          {props.setupLink && (
            <li>
              <a href={props.setupLink}><Translate id="tool.howToUse">🚀 How to use</Translate></a>
            </li>
          )}
          {tool.gallery &&
            <li>
              <Gallery thumbnail={tool.galleryThumbnail} images={tool.gallery} />
            </li>
          }
        </ul>
      </ProductCard.Actions>
    </ProductCard>
  );
};
ToolCard.Details = ProductCard.Details;
ToolCard.isMDXComponent = true;


type GalleryProps = {
  thumbnail: string;
  images: string[];
}

function Gallery(props: GalleryProps) {
  return (
    <Lightbox
      renderTrigger={({ onClick }) => (
        props.thumbnail
          ?
          <GalleryThumbnail onClick={onClick} src={useBaseUrl(props.thumbnail)} />
          :
          <a href="#"><Translate>🖼 Gallery</Translate></a>
      )}
      images={props.images.map(l => useBaseUrl(l))}
    />
  );
}

type GalleryThumbnailProps = {
  src: string;
  onClick: (e: React.MouseEvent) => void;
};

function GalleryThumbnail(props: GalleryThumbnailProps) {
  return (
    <>
      <div className={thumbnailStyles.Thumbnail} onClick={props.onClick}>
        <img src={props.src} alt="Gallery" />
        <p className={thumbnailStyles.ThumbnailIcon}>🔎</p>
      </div>
    </>
  );
}

function getIconUrl(iconName: string): string {
  return `/img/icons/products/${iconName}`;
}

function getGalleryUrl(imageFileName: string): string {
  return `/img/tutorials/tools/${imageFileName}`;
}

function galleryUrls(images: string[]): string[] {
  return images.map(getGalleryUrl);
}