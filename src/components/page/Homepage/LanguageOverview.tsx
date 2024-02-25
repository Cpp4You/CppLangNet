import React from "react";

// Material UI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// Autocomplete
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

// Components
import CodeBlock from "@theme/CodeBlock";

// Styles
import "./LanguageOverview.scss";

// Examples
import Code_HelloWorld_Cpp23 from "!!raw-loader!./examples/hello-world-cpp23.cpp";
import Code_HelloWorld_Cpp11 from "!!raw-loader!./examples/hello-world-cpp11.cpp";
import Code_SortArray_Cpp20 from "!!raw-loader!./examples/sort-array-cpp20.cpp";
import Code_ReverseWordsInString_Cpp23 from "!!raw-loader!./examples/reverse-words-in-string-cpp23.cpp";
import Code_SimplePlayerStruct_Cpp20 from "!!raw-loader!./examples/simple-player-struct-cpp20.cpp";

type ExampleSelectionProps = {
  onChange?: (event: React.ChangeEvent<unknown>, newValue: Example) => void,
}

function ExampleSelection({ onChange }: ExampleSelectionProps) {

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: Example) => {
    if (typeof newValue !== "object") {
      return;
    }
    if (!newValue) {
      return;
    }

    onChange?.(event, newValue);
  };

  return (
    <Autocomplete
      id="example-selection"
      sx={{ width: 400, display: "block", margin: "0 auto" }}
      size="small"
      options={EXAMPLES}
      onChange={handleChange}
      defaultValue={EXAMPLES[0]}
      getOptionLabel={(option) => (typeof option === "string" ? option : option.title)}
      renderInput={(params) => (
        <TextField {...params} label="Choose example" margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {

        const matches = match(option.title, inputValue, { insideWords: true });
        const parts = parse(option.title, matches);

        const isRunnable = (typeof option === "object" && option.runUrl !== undefined);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
            <span style={{ marginLeft: "auto", color: isRunnable ? "green" : "gray" }}><PlayCircleOutlineIcon /></span>
          </li>
        );
      }}
    />
  );
}

const bjarne = "https://en.wikipedia.org/wiki/Bjarne_Stroustrup";

type Example = {
  title: string,
  code: string,
  codeTitle?: string,
  runUrl?: string,
}

const EXAMPLES: Example[] = [
  {
    title: "Hello, World (C++23)",
    code: Code_HelloWorld_Cpp23,
    codeTitle: "A classic \"Hello, World\" program (C++23)",
    // runUrl: "https://compiler-explorer.com/LINK_HERE", // TODO: Add link
  },
  {
    title: "Hello, World",
    code: Code_HelloWorld_Cpp11,
    codeTitle: "A classic \"Hello, World\" program (C++11)",
    runUrl: "https://compiler-explorer.com/z/WT8qMqM1K",
  },
  {
    title: "Sort array (C++20)",
    code: Code_SortArray_Cpp20,
    codeTitle: "Sort an array of integers (C++20)",
    runUrl: "https://compiler-explorer.com/z/TxP4W5ccs",
  },
  {
    title: "Reverse words in string (C++23)",
    code: Code_ReverseWordsInString_Cpp23,
    codeTitle: "Reverse words in string (C++23)",
    runUrl: "https://compiler-explorer.com/z/Pxbf86dM6",
  },
  {
    title: "Simple structure (C++20)",
    code: Code_SimplePlayerStruct_Cpp20,
    codeTitle: "A simple structure of a player (C++20)",
    runUrl: "https://compiler-explorer.com/z/EPcfEa4E6",
  },
];

type RunButtonProps = {
  runUrl?: string,
}

function RunButton({ runUrl }: RunButtonProps) {
  const isDisabled = runUrl === undefined;
  const text = "Run in Compiler Explorer";
  return (
    <div className={"homepage-code-run-button"} data-disabled={isDisabled ? "true" : "false"}>
      {isDisabled &&
        <span
          title="This example doesn't have a run link. This is most likely because none of the major compilers currently support this code.">
          {text}
        </span>
      }
      {!isDisabled &&
        <a href={runUrl} target="_blank" rel="noreferrer">
          {text}
        </a>
      }
    </div>
  );
}


export default function LanguageOverview() {
  const [currentExample, setCurrentExample] = React.useState<Example>(EXAMPLES[0]);

  const handleExampleChange = (_, newValue: Example) => {
    setCurrentExample(newValue);
  };

  return (
    <section className={"homepage-section homepage-browse-section"}>
      <header>
        <h2>Overview</h2>
        <p className={"homepage-section-subtitle"}>
          C++ is a general-purpose programming language that compiles to a native code, created by <a href={bjarne}>Bjarne Stroustrup</a>.
          Here are a few examples of code written in modern C++.
        </p>
      </header>
      <main>
        <ExampleSelection onChange={handleExampleChange} />
        <RunButton runUrl={currentExample.runUrl} />
        <CodeBlock language="cpp" title={currentExample.codeTitle}>
          {currentExample.code}
        </CodeBlock>
      </main>
    </section>
  );
}