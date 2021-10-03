import React from 'react';

import ProductCard		from './ProductCard';

import VSCodeIcon		from '@site/static/img/icons/products/vscode_1_35.svg';
import VS2019Icon		from '@site/static/img/icons/products/vs_2019.svg';
import CLionIcon		from '@site/static/img/icons/products/clion.svg';
import QtCreatorIcon	from '@site/static/img/icons/products/qtcreator.svg';
import CodeBlocksIcon	from '@site/static/img/icons/products/codeblocks.png';
import CppBuilderIcon	from '@site/static/img/icons/products/cppbuilder.png';
import DevCppIcon		from '@site/static/img/icons/products/devcpp.png';

import ReplitIcon		from '@site/static/img/icons/products/replit.svg';

import Translate		from '@docusaurus/Translate';

export const ToolSummaryInfo = {
	"vscode": {
		author:		"Microsoft",
		title:		"Visual Studio Code",
		icon:		VSCodeIcon,
		rating:		9,
		site:		"https://code.visualstudio.com/",
	},
	"vs2019": {
		author:		"Microsoft",
		title:		"Visual Studio",
		icon:		VS2019Icon,
		rating:		8,
		site:		"https://visualstudio.com/",
	},
	"clion": {
		author:		"Jetbrains",
		title:		"CLion",
		icon:		CLionIcon,
		rating:		8,
		site:		"https://www.jetbrains.com/clion/",
	},
	"qtcreator": {
		author:		"The Qt Company",
		title:		"QtCreator",
		icon:		QtCreatorIcon,
		rating:		7,
		site:		"https://www.qt.io/product/development-tools/",
	},
	"codeblocks": {
		author:		"The Code::Blocks team",
		title:		"Code Blocks",
		icon:		CodeBlocksIcon,
		rating:		5,
		site:		"https://www.codeblocks.org/",
	},
	"cppbuilder": {
		author:		"Embarcadero",
		title:		"C++ Builder",
		icon:		CppBuilderIcon,
		rating:		4,
		site:		"https://www.embarcadero.com/products/cbuilder",
	},
	"devcpp": {
		author:		"Bloodshed",
		title:		"Dev-C++",
		icon:		DevCppIcon,
		rating:		3,
		site:		"https://www.bloodshed.net/",
	},
	"replit": {
		author:		"The Replit Team",
		title:		"Repl.it",
		icon:		ReplitIcon,
		rating:		8,
		site:		"https://www.replit.com/",
	},
};

export default function ToolCard(props)
{
	const tool = ToolSummaryInfo[props.toolId];
	return (
		<ProductCard title={tool.title} img={tool.icon} author={tool.author} rating={tool.rating}>
			<ProductCard.Desc>
				{props.children}
			</ProductCard.Desc>
			<ProductCard.Actions>
				<ul style={ { listStyle: "none" } }>
					<li>
						<a href={tool.site} target="_blank">
							<Translate id="tool.projectWebsite">Project website</Translate>
						</a>
					</li>
					{props.setupLink && (<li><a href={props.setupLink}><Translate id="tool.howToUse">How to use</Translate></a></li>)}
					<li><a href="#"><Translate>Gallery</Translate></a></li>
				</ul>
			</ProductCard.Actions>
		</ProductCard>
	);
};
ToolCard.Details = ProductCard.Details;
ToolCard.isMDXComponent = true;