import type { SidebarItemConfig } from "../../types";

import {
  docsClassCat,
} from "../../common";

const sidebar: SidebarItemConfig = {
  type: "category",
  label: "Math",
  items: [
    {
      type: "category",
      label: "Mathematical Functions",
      link: { type: "doc", id: "std/math/mathematical_functions/index" },
      items: [
        {
          type: "category",
          label: "Basic Operations",
          items: [
            docsClassCat("abs", "std/math/mathematical_functions/abs", "", []),
            docsClassCat("div", "std/math/mathematical_functions/div", "", []),
            docsClassCat("fmod", "std/math/mathematical_functions/fmod", "", [],),

            docsClassCat("remainder", "std/math/mathematical_functions/remainder", "", [],),
            docsClassCat("remquo", "std/math/mathematical_functions/remquo", "", [],),
            docsClassCat("fma", "std/math/mathematical_functions/fma", "", [],),
            docsClassCat("fmax", "std/math/mathematical_functions/fmax", "", [],),
            docsClassCat("fmin", "std/math/mathematical_functions/fmin", "", [],),
            docsClassCat("fdim", "std/math/mathematical_functions/fdim", "", [],),
            docsClassCat("nan", "std/math/mathematical_functions/nanf", "", [],),
          ]
        },
        {
          type: "category",
          label: "Exponential Functions",
          items: [
            docsClassCat("exp", "std/math/mathematical_functions/exp", "", [],),
            docsClassCat("exp2", "std/math/mathematical_functions/exp2", "", [],),
            docsClassCat("expm1", "std/math/mathematical_functions/expm1", "", [],),
            docsClassCat("log", "std/math/mathematical_functions/log", "", [],),
            docsClassCat("log10", "std/math/mathematical_functions/log10", "", [],),
            docsClassCat("log2", "std/math/mathematical_functions/log2", "", [],),
            docsClassCat("log1p", "std/math/mathematical_functions/log1p", "", [],),
          ]
        },
        {
          type: "category",
          label: "Power Functions",
          items: [
            docsClassCat("pow", "std/math/mathematical_functions/pow", "", [],),
            docsClassCat("sqrt", "std/math/mathematical_functions/sqrt", "", [],),
            docsClassCat("cbrt", "std/math/mathematical_functions/cbrt", "", [],),
            docsClassCat("hypot", "std/math/mathematical_functions/hypot", "", [],),
          ]
        },
        {
          type: "category",
          label: "Trigonometric Functions",
          items: [
            docsClassCat("sin", "std/math/mathematical_functions/sin", "", [],),
            docsClassCat("cos", "std/math/mathematical_functions/cos", "", [],),
            docsClassCat("tan", "std/math/mathematical_functions/tan", "", [],),
            docsClassCat("asin", "std/math/mathematical_functions/asin", "", [],),
            docsClassCat("acos", "std/math/mathematical_functions/acos", "", [],),
            docsClassCat("atan", "std/math/mathematical_functions/atan", "", [],),
            docsClassCat("atan2", "std/math/mathematical_functions/atan2", "", [],),
          ]
        },
        {
          type: "category",
          label: "Hyperbolic Functions",
          items: [
            docsClassCat("sinh", "std/math/mathematical_functions/sinh", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("cosh", "std/math/mathematical_functions/cosh", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("tanh", "std/math/mathematical_functions/tanh", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("asinh", "std/math/mathematical_functions/asinh", "", [],),
            docsClassCat("acosh", "std/math/mathematical_functions/acosh", "", [],),
            docsClassCat("atanh", "std/math/mathematical_functions/atanh", "", [],),
          ]
        },
        {
          type: "category",
          label: "Error and Gamma Functions",
          items: [
            docsClassCat("erf", "std/math/mathematical_functions/erf", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("erfc", "std/math/mathematical_functions/erfc", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("tgamma", "std/math/mathematical_functions/tgamma", "", [],),   // KaTeX needed to doccumment the return values
            docsClassCat("lgamma", "std/math/mathematical_functions/lgamma", "", [],),   // KaTeX needed to doccumment the return values
          ]
        },
        {
          type: "category",
          label: "Nearest integer floating point operations",
          items: [
            docsClassCat("ciel", "std/math/mathematical_functions/ciel", "", [],),
            docsClassCat("floor", "std/math/mathematical_functions/floor", "", [],),
            docsClassCat("trunc", "std/math/mathematical_functions/trunc", "", [],),
            docsClassCat("round", "std/math/mathematical_functions/round", "", [],),
            docsClassCat("nearbyint", "std/math/mathematical_functions/nearbyint", "", [],),
            docsClassCat("rint", "std/math/mathematical_functions/rint", "", [],),
          ]
        },
        {
          type: "category",
          label: "Floating point manipulation functions",
          items: [
            docsClassCat("ldexp", "std/math/mathematical_functions/ldexp", "", [],),
            docsClassCat("scalbn", "std/math/mathematical_functions/scalbn", "", [],),
            docsClassCat("ilogb", "std/math/mathematical_functions/ilogb", "", [],),
            docsClassCat("logb", "std/math/mathematical_functions/logb", "", [],),
            docsClassCat("frexp", "std/math/mathematical_functions/frexp", "", [],),
            docsClassCat("modf", "std/math/mathematical_functions/modf", "", [],),
            docsClassCat("nextafter", "std/math/mathematical_functions/nextafter", "", [],),
            docsClassCat("copysign", "std/math/mathematical_functions/copysign", "", [],),
          ]
        },
        {
          type: "category",
          label: "Classification and comparison",
          items: [
            docsClassCat("fpclassify", "std/math/mathematical_functions/fpclassify", "", [],),
            docsClassCat("isfinite", "std/math/mathematical_functions/isfinite", "", [],),
            docsClassCat("isinf", "std/math/mathematical_functions/isinf", "", [],),
            docsClassCat("isnan", "std/math/mathematical_functions/isnan", "", [],),
            docsClassCat("isnormal", "std/math/mathematical_functions/isnormal", "", [],),
            docsClassCat("signbit", "std/math/mathematical_functions/signbit", "", [],),
            docsClassCat("isgreater", "std/math/mathematical_functions/isgreater", "", [],),
            docsClassCat("isgreaterequal", "std/math/mathematical_functions/isgreaterequal", "", [],),
            docsClassCat("isless", "std/math/mathematical_functions/isless", "", [],),
            docsClassCat("islessequal", "std/math/mathematical_functions/islessequal", "", [],),
            docsClassCat("islessgreater", "std/math/mathematical_functions/islessgreater", "", [],),
            docsClassCat("isunordered", "std/math/mathematical_functions/isunordered", "", [],),
          ]
        },
        {
          type: "category",
          label: "Types",
          items: [
            docsClassCat("div_t", "std/math/mathematical_functions/div_t", "", [],),
            docsClassCat("ldiv_t", "std/math/mathematical_functions/ldiv_t", "", [],),
            docsClassCat("lldiv_t", "std/math/mathematical_functions/lldiv_t", "", [],),
            docsClassCat("imaxdiv_t", "std/math/mathematical_functions/imaxdiv_t", "", [],),
            docsClassCat("float_t", "std/math/mathematical_functions/float_t", "", [],),
            docsClassCat("double_t", "std/math/mathematical_functions/float_t", "", [],),

          ]
        },
        {
          type: "category",
          label: "Macro Constants",
          items: [
            docsClassCat("HUGE_VALF", "std/math/mathematical_functions/huge_valf", "", [],),
            docsClassCat("INFINITY", "std/math/mathematical_functions/infinity", "", [],),
            docsClassCat("NAN", "std/math/mathematical_functions/nan", "", [],),
            docsClassCat("MATH_ERRNO", "std/math/mathematical_functions/errno", "", [],),

          ]
        },
        docsClassCat("FP_ Categories", "std/math/mathematical_functions/fp_category", "", [],),
      ],
    },
    "std/math/mathematical_special_functions",
    "std/math/numeric_algorithms",
  ]
};

export default sidebar;