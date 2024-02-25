const CodeElements = {
  Class: "sidebar-code sidebar-class-name",
  Func: "sidebar-code sidebar-function",
  Method: "sidebar-code sidebar-method",
  Operator: "sidebar-code sidebar-operator-function",
};

const parseFlags = (flags) => {
  if (typeof flags === "string")
    return " sidebar-flag-" + flags;
  else if (Array.isArray(flags))
    return " " + flags.map(e => "sidebar-flag-" + e).join(" ");
  return "";
};

const docsClass = (id, flags = []) => ({
  id,
  type: "doc",
  className: CodeElements.Class + parseFlags(flags)
});
const docsMethod = (id, flags = []) => ({
  id,
  type: "doc",
  className: CodeElements.Method + parseFlags(flags)
});
const docsFunction = (id, flags = []) => ({
  id,
  type: "doc",
  className: CodeElements.Func + parseFlags(flags)
});
const docsOperator = (id, flags = []) => ({
  id,
  type: "doc",
  className: CodeElements.Operator + parseFlags(flags)
});

const separatorBase = (content = "<span/>", classes = "sidebar-separator") => ({
  type: "html",
  value: content,
  className: classes,
  defaultStyle: true,
});

const sep = separatorBase();
const cat = (name) => separatorBase(`<span>${name}</span>`, "sidebar-separator sidebar-category");

const parseClassItemShorthand = (id, e, flags = []) => {
  if (typeof e !== "string") {
    if (Array.isArray(e))
      return parseClassItemShorthand(id, e[0], e[1]);
    else
      return e;
  }

  if (e.startsWith("f:")) // function
    return docsFunction(`${id}/${e.substr(2)}`, flags);
  else if (e.startsWith("m:")) // method
    return docsMethod(`${id}/${e.substr(2)}`, flags);
  else if (e.startsWith("op:")) // method
    return docsOperator(`${id}/${e.substr(3)}`, flags);
  else
    return `${id}/${e}`;
};

const docsClassCat = (label, id, flags, contents) => ({
  type: "category",
  className: CodeElements.Class + parseFlags(flags),
  label,
  link: { type: "doc", id: id },
  items: contents.map(e => parseClassItemShorthand(id, e))
});

module.exports = {
  CodeElements,
  parseFlags,
  docsClass,
  docsMethod,
  docsFunction,
  docsOperator,
  separatorBase,
  sep,
  cat,
  parseClassItemShorthand,
  docsClassCat,
};