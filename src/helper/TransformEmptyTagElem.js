// Required when desc is passed within an empty tag (for grouping).
// Example:
// desc={<>
// 	Hello, world, <code>some code</code>
// </>}
export default function transformEmptyTagElem(elem)
{
	if (typeof elem === "object" && !Array.isArray(elem) && elem.type === undefined)
		return elem.props.children;
	return elem;
}