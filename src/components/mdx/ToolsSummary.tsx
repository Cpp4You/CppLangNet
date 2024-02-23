import React from "react";

import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ProductCard from "./ProductCard";
import Lightbox from "./Lightbox";

// Styles
import thumbnailStyles from "./ToolsSummary.module.scss";

// Icons
import VSCodeIcon from "@site/static/img/icons/products/vscode_1_35.svg";
import VS2022Icon from "@site/static/img/icons/products/vs_2019.svg";
import CLionIcon from "@site/static/img/icons/products/clion.svg";
import QtCreatorIcon from "@site/static/img/icons/products/qtcreator.svg";
import CodeBlocksIcon from "@site/static/img/icons/products/codeblocks.png";
import CppBuilderIcon from "@site/static/img/icons/products/cppbuilder.png";
import DevCppIcon from "@site/static/img/icons/products/devcpp.png";

import GCCIcon from "@site/static/img/icons/products/gcc.svg";
import LLVMIcon from "@site/static/img/icons/products/llvm.png";

import ReplitIcon from "@site/static/img/icons/products/replit.svg";

type SVGIconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type ToolDesc = {
  author: string;
  title: string;
  icon: SVGIconType;
  site: string;

  galleryThumbnail?: string;
  gallery?: string[];
}

type ToolDescMap = {
  [key: string]: ToolDesc;
}

export const ToolSummaryInfo: ToolDescMap = {
  "vscode": {
    author: "Microsoft",
    title: "Visual Studio Code",
    icon: VSCodeIcon,
    site: "https://code.visualstudio.com/",

    galleryThumbnail: "/img/tutorials/tools/vscode-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/vscode-2-hd.png",
      "/img/tutorials/tools/vscode-1-hd.png",
      "/img/tutorials/tools/vscode-3-hd.png",
      "/img/tutorials/tools/vscode-4-hd.png",
    ],
  },
  "vs2022": {
    author: "Microsoft",
    title: "Visual Studio",
    icon: VS2022Icon,
    site: "https://visualstudio.com/",

    galleryThumbnail: "/img/tutorials/tools/vs2022-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/vs2022-4-hd.png",
      "/img/tutorials/tools/vs2022-2-hd.png",
      "/img/tutorials/tools/vs2022-1-hd.png",
      "/img/tutorials/tools/vs2022-3-hd.png",
    ],
  },
  "clion": {
    author: "Jetbrains",
    title: "CLion",
    icon: CLionIcon,
    site: "https://www.jetbrains.com/clion/",

    galleryThumbnail: "/img/tutorials/tools/clion-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/clion-1-hd.png",
      "/img/tutorials/tools/clion-2-hd.png",
      "/img/tutorials/tools/clion-3-hd.png",
      "/img/tutorials/tools/clion-4-hd.png",
      "/img/tutorials/tools/clion-5-hd.png",
    ],
  },
  "qtcreator": {
    author: "The Qt Company",
    title: "QtCreator",
    icon: QtCreatorIcon,
    site: "https://www.qt.io/product/development-tools/",

    galleryThumbnail: "/img/tutorials/tools/qtcreator-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/qtcreator-1-hd.png",
      "/img/tutorials/tools/qtcreator-2-hd.png",
      "/img/tutorials/tools/qtcreator-3-hd.png",
      "/img/tutorials/tools/qtcreator-4-hd.png",
      "/img/tutorials/tools/qtcreator-5-hd.png",
    ],
  },
  "codeblocks": {
    author: "The Code::Blocks team",
    title: "Code Blocks",
    icon: CodeBlocksIcon,
    site: "https://www.codeblocks.org/",

    galleryThumbnail: "/img/tutorials/tools/codeblocks-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/codeblocks-1-hd.png",
      "/img/tutorials/tools/codeblocks-2-hd.png",
      "/img/tutorials/tools/codeblocks-3-hd.png",
    ],
  },
  "cppbuilder": {
    author: "Embarcadero",
    title: "C++ Builder",
    icon: CppBuilderIcon,
    site: "https://www.embarcadero.com/products/cbuilder",
  },
  "devcpp": {
    author: "Bloodshed",
    title: "Dev-C++",
    icon: DevCppIcon,
    site: "https://www.bloodshed.net/",
  },
  "replit": {
    author: "The Replit Team",
    title: "Repl.it",
    icon: ReplitIcon,
    site: "https://www.replit.com/",

    galleryThumbnail: "/img/tutorials/tools/replit-thumbnail.png",
    gallery: [
      "/img/tutorials/tools/replit-3-hd.png",
      "/img/tutorials/tools/replit-2-hd.png",
      "/img/tutorials/tools/replit-4-hd.png",
      "/img/tutorials/tools/replit-1-hd.png",
    ],
  },

  ////////////////////////////////////
  // Compilers
  ////////////////////////////////////
  "msvc": {
    author: "Microsoft",
    title: "Visual Studio Compiler",
    icon: VS2022Icon,
    site: "https://visualstudio.com/",
  },
  "gcc": {
    author: "The GNU Project",
    title: "GCC (GNU Compiler Collection)",
    icon: GCCIcon,
    site: "https://gcc.gnu.org/",
  },
  "clang": {
    author: "LLVM Developer Group",
    title: "Clang",
    icon: LLVMIcon,
    site: "https://clang.llvm.org/",
  },
  "apple-clang": {
    author: "Apple & LLVM Authors",
    title: "Apple Clang",
    icon: LLVMIcon,
    site: "https://github.com/apple/llvm-project",
  },
};

export default function ToolCard(props) {
  const tool = ToolSummaryInfo[props.toolId];
  return (
    <ProductCard title={tool.title} img={tool.icon} author={tool.author} >
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
