// src/charts/Charts.tsx
import { useState } from "react";

// src/icons/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Icon({
  size = 16,
  label,
  strokeWidth = 2,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    focusable: "false",
    ...rest,
    children: [
      label ? /* @__PURE__ */ jsx("title", {
        children: label
      }) : null,
      children
    ]
  });
}
function PlusIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M12 5v14M5 12h14"
    })
  });
}
function MinusIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M5 12h14"
    })
  });
}
function SearchIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "m20 20-3.5-3.5"
      })
    ]
  });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M6 6l12 12M18 6 6 18"
    })
  });
}
function ChevronLeftIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "m15 6-6 6 6 6"
    })
  });
}
function ChevronRightIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "m9 6 6 6-6 6"
    })
  });
}
function ChevronDownIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "m6 9 6 6 6-6"
    })
  });
}
function MoreIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "5",
        cy: "12",
        r: "1.2",
        fill: "currentColor"
      }),
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1.2",
        fill: "currentColor"
      }),
      /* @__PURE__ */ jsx("circle", {
        cx: "19",
        cy: "12",
        r: "1.2",
        fill: "currentColor"
      })
    ]
  });
}
function InfoIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M12 11v5M12 8v.01"
      })
    ]
  });
}
function AlertCircleIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M12 8v5M12 16.5v.01"
      })
    ]
  });
}
function AlertTriangleIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", {
        d: "M12 3 2 20h20z"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M12 10v4M12 17v.01"
      })
    ]
  });
}
function CheckCircleIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "m8 12 3 3 5-6"
      })
    ]
  });
}
function CheckIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M5 12.5l4.5 4.5L19 7.5"
    })
  });
}
function EyeIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", {
        d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
      }),
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2.5"
      })
    ]
  });
}
function FlameIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"
    })
  });
}
function CommentIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 5h16v11H9l-5 4z"
    })
  });
}
function UserIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"
      })
    ]
  });
}
function BellIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"
    })
  });
}
function PinIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M9 4h6l-1 6 4 3v2H6v-2l4-3zM12 15v6"
    })
  });
}
function SendIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })
  });
}
function BoldIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z"
    })
  });
}
function CodeIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "m8 7-5 5 5 5M16 7l5 5-5 5"
    })
  });
}
function LinkIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"
    })
  });
}
function PaperclipIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "m20 11-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"
    })
  });
}
function AtIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
      })
    ]
  });
}
function ArrowUpIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "M12 19V5M6 11l6-6 6 6"
    })
  });
}
function ArrowDownIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "M12 5v14M6 13l6 6 6-6"
    })
  });
}
function BuildingIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 21V5l8-3v19M12 9h8v12M8 8v.01M8 12v.01M8 16v.01M16 13v.01M16 17v.01M2 21h20"
    })
  });
}
function FitIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
    })
  });
}
function TableIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "2"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M3 10h18M9 10v10"
      })
    ]
  });
}
function EditIcon(props) {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", {
        d: "M12 20h9"
      }),
      /* @__PURE__ */ jsx("path", {
        d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"
      })
    ]
  });
}
function HomeIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M3 11 12 4l9 7v9h-6v-6H9v6H3z"
    })
  });
}
function ListIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 6h16M4 12h16M4 18h10"
    })
  });
}
function BoardIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 4h5v16H4zM10 4h5v10h-5zM16 4h4v13h-4z"
    })
  });
}
function ChartIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M4 20V10M10 20V4M16 20v-7M22 20H2"
    })
  });
}
function MapIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"
    })
  });
}
function SpinnerIcon(props) {
  return /* @__PURE__ */ jsx(Icon, {
    ...props,
    strokeWidth: 2.5,
    children: /* @__PURE__ */ jsx("path", {
      d: "M21 12a9 9 0 1 1-9-9"
    })
  });
}
var ArrowRightIcon = SendIcon;

// src/theme/tokens.ts
var palette = {
  dark: {
    background: "#000000",
    surface: "#161616",
    surfaceRaised: "#1e1e1e",
    surfaceVariant: "#262626",
    surfaceHover: "#303030",
    surfaceSelected: "#383838",
    border: "#555555",
    foreground: "#e8e8e8",
    muted: "#8a8a8a",
    suggestion: "#9a9a9a",
    accent: "#9482ad",
    onAccent: "#000000",
    success: "#80977d",
    warning: "#b59c6c",
    error: "#b96f7d",
    info: "#71979a",
    terminalAmber: "#e8a064",
    terminalGreen: "#98c379",
    terminalRed: "#e06c75",
    series: ["#9372c8", "#bb731b", "#0098b7", "#58994a"]
  },
  light: {
    background: "#f4f5f7",
    surface: "#fafbfc",
    surfaceRaised: "#ffffff",
    surfaceVariant: "#eceef2",
    surfaceHover: "#e3e6eb",
    surfaceSelected: "#dbe5f7",
    border: "#868e9c",
    foreground: "#16181d",
    muted: "#545c69",
    suggestion: "#5f6673",
    accent: "#1f5fcc",
    onAccent: "#ffffff",
    success: "#17703a",
    warning: "#8a5300",
    error: "#b4233c",
    info: "#0b6875",
    terminalAmber: "#9a4b13",
    terminalGreen: "#28732d",
    terminalRed: "#b3261e",
    series: ["#2a6fb8", "#b0652a", "#7a3fc0", "#3f8a46"]
  }
};
var cssVar = {
  background: "var(--pui-bg)",
  surface: "var(--pui-surface)",
  surfaceRaised: "var(--pui-surface-raised)",
  surfaceVariant: "var(--pui-surface-variant)",
  surfaceHover: "var(--pui-surface-hover)",
  surfaceSelected: "var(--pui-surface-selected)",
  border: "var(--pui-border)",
  line: "var(--pui-line)",
  foreground: "var(--pui-fg)",
  muted: "var(--pui-muted)",
  suggestion: "var(--pui-suggestion)",
  accent: "var(--pui-accent)",
  onAccent: "var(--pui-on-accent)",
  success: "var(--pui-success)",
  warning: "var(--pui-warning)",
  error: "var(--pui-error)",
  info: "var(--pui-info)",
  series: [
    "var(--pui-series-1)",
    "var(--pui-series-2)",
    "var(--pui-series-3)",
    "var(--pui-series-4)"
  ]
};

// src/utils.ts
function cx(...names) {
  return names.filter(Boolean).join(" ");
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function initialsOf(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase() || "?";
}

// src/charts/Charts.tsx
import { jsx as jsx2, jsxs as jsxs2, Fragment } from "react/jsx-runtime";
function seriesColor(index) {
  return cssVar.series[index % cssVar.series.length] ?? cssVar.accent;
}
function niceTicks(max, count = 4) {
  if (max <= 0)
    return [0];
  const rough = max / count;
  const power = 10 ** Math.floor(Math.log10(rough));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * power).find((s) => s >= rough) ?? 10 * power;
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = 0;v <= top + step / 2; v += step)
    ticks.push(+v.toFixed(6));
  return ticks;
}
function Legend({ items }) {
  return /* @__PURE__ */ jsx2("div", {
    className: "pui-legend",
    children: items.map((item) => /* @__PURE__ */ jsxs2("span", {
      className: "pui-legend__item",
      children: [
        item.kind === "line" || item.kind === "dashed" ? /* @__PURE__ */ jsx2("span", {
          className: cx("pui-legend__line", item.kind === "dashed" && "pui-legend__line--dashed"),
          style: { color: item.color }
        }) : /* @__PURE__ */ jsx2("span", {
          className: "pui-swatch",
          style: {
            background: item.color,
            width: 10,
            height: 10,
            borderRadius: 3
          }
        }),
        item.name
      ]
    }, item.name))
  });
}
function ChartCard({
  title,
  legend,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs2("section", {
    className: cx("pui-panel", "pui-chart", className),
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "pui-chart__head",
        children: [
          /* @__PURE__ */ jsx2("h2", {
            className: "pui-chart__title",
            children: title
          }),
          legend
        ]
      }),
      children
    ]
  });
}
function DataTable({ caption, columns, rows }) {
  return /* @__PURE__ */ jsxs2("table", {
    className: "pui-table",
    children: [
      /* @__PURE__ */ jsx2("caption", {
        className: "pui-sr-only",
        children: caption
      }),
      /* @__PURE__ */ jsx2("thead", {
        children: /* @__PURE__ */ jsx2("tr", {
          children: columns.map((column) => /* @__PURE__ */ jsx2("th", {
            scope: "col",
            children: column
          }, column))
        })
      }),
      /* @__PURE__ */ jsx2("tbody", {
        children: rows.map((row, r) => /* @__PURE__ */ jsx2("tr", {
          children: row.map((cell, c) => /* @__PURE__ */ jsx2("td", {
            children: cell
          }, c))
        }, r))
      })
    ]
  });
}
function Sparkline({
  values,
  width = 96,
  height = 32,
  color = seriesColor(0)
}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = values.length > 1 ? (width - 8) / (values.length - 1) : 0;
  const points = values.map((v, i) => `${(4 + i * step).toFixed(1)},${(height - 4 - (v - min) / span * (height - 8)).toFixed(1)}`).join(" ");
  return /* @__PURE__ */ jsx2("svg", {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx2("polyline", {
      points,
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinejoin: "round",
      strokeLinecap: "round"
    })
  });
}
function StatTile({
  label,
  value,
  unit,
  delta,
  trend,
  comparison,
  spark,
  className
}) {
  return /* @__PURE__ */ jsxs2("div", {
    className: cx("pui-panel", "pui-stat", className),
    children: [
      /* @__PURE__ */ jsx2("span", {
        className: "pui-stat__label",
        children: label
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "pui-stat__row",
        children: [
          /* @__PURE__ */ jsxs2("span", {
            className: "pui-stat__value",
            children: [
              value,
              unit ? /* @__PURE__ */ jsx2("span", {
                className: "pui-stat__unit",
                children: unit
              }) : null
            ]
          }),
          spark && spark.length > 1 ? /* @__PURE__ */ jsx2(Sparkline, {
            values: spark
          }) : null
        ]
      }),
      delta ? /* @__PURE__ */ jsxs2("span", {
        className: "pui-stat__delta",
        children: [
          trend === "up" ? /* @__PURE__ */ jsx2(ArrowUpIcon, {
            size: 12
          }) : null,
          trend === "down" ? /* @__PURE__ */ jsx2(ArrowDownIcon, {
            size: 12
          }) : null,
          /* @__PURE__ */ jsx2("strong", {
            children: delta
          }),
          comparison
        ]
      }) : null
    ]
  });
}
function LineChart({
  label,
  labels,
  series,
  tickLabels,
  max,
  height = 240,
  marker,
  showTable = false,
  formatValue = String
}) {
  const [hover, setHover] = useState(null);
  const count = labels.length;
  const dataMax = Math.max(0, ...series.flatMap((s) => s.values.filter((v) => v !== null)));
  const ticks = niceTicks(max ?? dataMax);
  const top = ticks[ticks.length - 1] ?? 1;
  const xPct = (i) => count > 1 ? i / (count - 1) * 100 : 50;
  const yPx = (v) => height * (1 - v / top);
  const colorOf = (s, i) => s.color ?? seriesColor(i);
  const segments = (s) => {
    const runs = [];
    let run = [];
    s.values.forEach((v, i) => {
      if (v === null) {
        if (run.length)
          runs.push(run.join(" "));
        run = [];
      } else
        run.push(`${(xPct(i) * 10).toFixed(1)},${yPx(v).toFixed(1)}`);
    });
    if (run.length)
      runs.push(run.join(" "));
    return runs;
  };
  const tipLeft = hover !== null && xPct(hover) > 60;
  return /* @__PURE__ */ jsxs2("div", {
    style: { display: "flex", flexDirection: "column", gap: 14 },
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "pui-chart__frame",
        children: [
          /* @__PURE__ */ jsx2("div", {
            className: "pui-chart__y",
            style: { height },
            "aria-hidden": "true",
            children: ticks.map((t) => /* @__PURE__ */ jsx2("span", {
              className: "pui-chart__tick",
              style: { top: yPx(t) },
              children: formatValue(t)
            }, t))
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "pui-chart__body",
            children: [
              /* @__PURE__ */ jsxs2("figure", {
                "aria-label": label,
                className: "pui-chart__plot",
                style: { height },
                children: [
                  ticks.map((t) => /* @__PURE__ */ jsx2("div", {
                    className: "pui-chart__grid",
                    style: { top: yPx(t) }
                  }, t)),
                  marker ? /* @__PURE__ */ jsxs2(Fragment, {
                    children: [
                      /* @__PURE__ */ jsx2("div", {
                        className: "pui-chart__marker-line",
                        style: { left: `${xPct(marker.index)}%` }
                      }),
                      /* @__PURE__ */ jsx2("span", {
                        className: "pui-chart__marker-label",
                        style: { left: `${xPct(marker.index)}%` },
                        children: marker.label
                      })
                    ]
                  }) : null,
                  /* @__PURE__ */ jsx2("svg", {
                    className: "pui-chart__svg",
                    viewBox: `0 0 1000 ${height}`,
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: series.map((s, i) => segments(s).map((points) => /* @__PURE__ */ jsx2("polyline", {
                      points,
                      fill: "none",
                      stroke: colorOf(s, i),
                      strokeWidth: "2",
                      strokeLinejoin: "round",
                      strokeDasharray: s.dashed ? "6 6" : undefined,
                      vectorEffect: "non-scaling-stroke"
                    }, `${s.id}-${points.slice(0, 12)}`)))
                  }),
                  hover !== null ? /* @__PURE__ */ jsxs2(Fragment, {
                    children: [
                      /* @__PURE__ */ jsx2("div", {
                        className: "pui-chart__crosshair",
                        style: { left: `${xPct(hover)}%` }
                      }),
                      series.map((s, i) => {
                        const v = s.values[hover];
                        if (v === null || v === undefined || s.dashed)
                          return null;
                        return /* @__PURE__ */ jsx2("div", {
                          className: "pui-chart__dot",
                          style: {
                            left: `${xPct(hover)}%`,
                            top: yPx(v),
                            background: colorOf(s, i)
                          }
                        }, s.id);
                      }),
                      /* @__PURE__ */ jsxs2("div", {
                        className: "pui-chart__tooltip",
                        "aria-hidden": "true",
                        style: {
                          top: 12,
                          left: `${xPct(hover)}%`,
                          transform: tipLeft ? "translateX(calc(-100% - 12px))" : "translateX(12px)"
                        },
                        children: [
                          /* @__PURE__ */ jsx2("span", {
                            className: "pui-chart__tooltip-title",
                            children: labels[hover]
                          }),
                          series.map((s, i) => {
                            const v = s.values[hover];
                            return /* @__PURE__ */ jsxs2("span", {
                              className: "pui-chart__tooltip-row",
                              children: [
                                /* @__PURE__ */ jsxs2("span", {
                                  style: {
                                    display: "inline-flex",
                                    gap: 6,
                                    alignItems: "center"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx2("span", {
                                      style: {
                                        width: 8,
                                        height: 2,
                                        background: colorOf(s, i)
                                      }
                                    }),
                                    s.name
                                  ]
                                }),
                                /* @__PURE__ */ jsx2("span", {
                                  children: v === null || v === undefined ? "—" : formatValue(v)
                                })
                              ]
                            }, s.id);
                          })
                        ]
                      })
                    ]
                  }) : null,
                  labels.map((l, i) => /* @__PURE__ */ jsx2("button", {
                    type: "button",
                    className: "pui-chart__hit",
                    "aria-label": `${l}: ${series.map((s) => {
                      const v = s.values[i];
                      return `${s.name} ${v === null || v === undefined ? "no value" : formatValue(v)}`;
                    }).join(", ")}`,
                    style: {
                      left: `${Math.max(0, xPct(i) - 50 / Math.max(1, count - 1))}%`,
                      width: `${100 / Math.max(1, count - 1)}%`
                    },
                    onMouseEnter: () => setHover(i),
                    onFocus: () => setHover(i),
                    onMouseLeave: () => setHover(null),
                    onBlur: () => setHover(null)
                  }, l))
                ]
              }),
              /* @__PURE__ */ jsx2("div", {
                className: "pui-chart__x",
                "aria-hidden": "true",
                children: (tickLabels ?? labels).map((t, i) => t ? /* @__PURE__ */ jsx2("span", {
                  className: "pui-chart__tick",
                  style: { left: `${xPct(i)}%` },
                  children: t
                }, i) : null)
              })
            ]
          })
        ]
      }),
      showTable ? /* @__PURE__ */ jsx2(DataTable, {
        caption: label,
        columns: ["", ...series.map((s) => s.name)],
        rows: labels.map((l, i) => [
          l,
          ...series.map((s) => {
            const v = s.values[i];
            return v === null || v === undefined ? "—" : formatValue(v);
          })
        ])
      }) : null
    ]
  });
}
function BarChart({
  label,
  categories,
  tickLabels,
  series,
  max,
  height = 200,
  showTable = false,
  footer,
  formatValue = String
}) {
  const [hover, setHover] = useState(null);
  const dataMax = Math.max(0, ...series.flatMap((s) => s.values));
  const ticks = niceTicks(max ?? dataMax);
  const top = ticks[ticks.length - 1] ?? 1;
  const h = (v) => Math.round(v / top * height);
  return /* @__PURE__ */ jsxs2("div", {
    style: { display: "flex", flexDirection: "column", gap: 14 },
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "pui-chart__frame",
        children: [
          /* @__PURE__ */ jsx2("div", {
            className: "pui-chart__y",
            style: { height },
            "aria-hidden": "true",
            children: ticks.map((t) => /* @__PURE__ */ jsx2("span", {
              className: "pui-chart__tick",
              style: { top: height - h(t) },
              children: formatValue(t)
            }, t))
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "pui-chart__body",
            children: [
              /* @__PURE__ */ jsxs2("figure", {
                "aria-label": label,
                className: "pui-chart__plot pui-bars",
                style: { height },
                children: [
                  ticks.map((t) => /* @__PURE__ */ jsx2("div", {
                    className: "pui-chart__grid",
                    style: { top: height - h(t) }
                  }, t)),
                  categories.map((category, i) => {
                    const tallest = Math.max(...series.map((s) => s.values[i] ?? 0));
                    return /* @__PURE__ */ jsxs2("button", {
                      type: "button",
                      className: "pui-bars__group",
                      "data-active": hover === i || undefined,
                      "aria-label": `${category}: ${series.map((s) => `${s.name} ${formatValue(s.values[i] ?? 0)}`).join(", ")}`,
                      onMouseEnter: () => setHover(i),
                      onFocus: () => setHover(i),
                      onMouseLeave: () => setHover(null),
                      onBlur: () => setHover(null),
                      children: [
                        series.map((s, si) => /* @__PURE__ */ jsx2("span", {
                          className: "pui-bars__bar",
                          style: {
                            height: h(s.values[i] ?? 0),
                            background: s.color ?? seriesColor(si)
                          }
                        }, s.id)),
                        hover === i ? /* @__PURE__ */ jsxs2("span", {
                          className: "pui-chart__tooltip",
                          "aria-hidden": "true",
                          style: {
                            bottom: h(tallest) + 10,
                            left: "50%",
                            transform: "translateX(-50%)"
                          },
                          children: [
                            /* @__PURE__ */ jsx2("span", {
                              className: "pui-chart__tooltip-title",
                              children: category
                            }),
                            series.map((s) => /* @__PURE__ */ jsxs2("span", {
                              className: "pui-chart__tooltip-row",
                              children: [
                                /* @__PURE__ */ jsx2("span", {
                                  children: s.name
                                }),
                                /* @__PURE__ */ jsx2("span", {
                                  children: formatValue(s.values[i] ?? 0)
                                })
                              ]
                            }, s.id)),
                            footer ? /* @__PURE__ */ jsx2("span", {
                              style: { color: "var(--pui-muted)" },
                              children: footer(i)
                            }) : null
                          ]
                        }) : null
                      ]
                    }, category);
                  })
                ]
              }),
              /* @__PURE__ */ jsx2("div", {
                className: "pui-bars__labels",
                "aria-hidden": "true",
                children: (tickLabels ?? categories).map((t, i) => /* @__PURE__ */ jsx2("span", {
                  children: t
                }, i))
              })
            ]
          })
        ]
      }),
      showTable ? /* @__PURE__ */ jsx2(DataTable, {
        caption: label,
        columns: ["", ...series.map((s) => s.name)],
        rows: categories.map((c, i) => [
          c,
          ...series.map((s) => formatValue(s.values[i] ?? 0))
        ])
      }) : null
    ]
  });
}
function StackedBar({
  label,
  segments
}) {
  const [hover, setHover] = useState(null);
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  const colorOf = (s, i) => s.color ?? seriesColor(i);
  return /* @__PURE__ */ jsxs2("div", {
    style: { display: "flex", flexDirection: "column", gap: 16 },
    children: [
      /* @__PURE__ */ jsx2("figure", {
        "aria-label": label,
        className: "pui-stacked",
        children: segments.map((s, i) => /* @__PURE__ */ jsx2("button", {
          type: "button",
          className: "pui-stacked__seg",
          "aria-label": `${s.name}: ${s.value} (${Math.round(s.value / total * 100)}%)`,
          style: {
            flex: `${s.value} 1 0`,
            background: colorOf(s, i),
            opacity: hover === null || hover === i ? 1 : 0.35
          },
          onMouseEnter: () => setHover(i),
          onFocus: () => setHover(i),
          onMouseLeave: () => setHover(null),
          onBlur: () => setHover(null)
        }, s.id))
      }),
      /* @__PURE__ */ jsx2("div", {
        children: segments.map((s, i) => /* @__PURE__ */ jsxs2("div", {
          className: "pui-stacked__row",
          "data-active": hover === i || undefined,
          children: [
            /* @__PURE__ */ jsx2("span", {
              className: "pui-swatch",
              style: {
                width: 10,
                height: 10,
                borderRadius: 3,
                background: colorOf(s, i)
              }
            }),
            /* @__PURE__ */ jsx2("span", {
              style: { flex: 1 },
              children: s.name
            }),
            /* @__PURE__ */ jsxs2("span", {
              className: "pui-mono",
              style: { color: "var(--pui-muted)", fontSize: 12 },
              children: [
                Math.round(s.value / total * 100),
                "%"
              ]
            }),
            /* @__PURE__ */ jsx2("span", {
              className: "pui-mono",
              style: { width: 28, textAlign: "right", fontWeight: 500 },
              children: s.value
            })
          ]
        }, s.id))
      })
    ]
  });
}
var heatSteps = [12, 30, 50, 72, 100];
function Heatmap({
  label,
  rows,
  columns,
  values,
  thresholds = [1, 3, 4, 5],
  unit = ""
}) {
  const [hover, setHover] = useState(null);
  const ramp = heatSteps.map((p) => `color-mix(in srgb, var(--pui-series-1) ${p}%, var(--pui-surface))`);
  const stepOf = (v) => {
    const index = thresholds.findIndex((t) => v <= t);
    return index === -1 ? 4 : index;
  };
  const readout = hover ? `${rows[hover[0]]} · ${columns[hover[1]]}: ${values[hover[0]]?.[hover[1]] ?? 0}${unit ? ` ${unit}` : ""}` : "Hover or focus a cell for details";
  return /* @__PURE__ */ jsxs2("div", {
    style: { display: "flex", flexDirection: "column", gap: 14 },
    children: [
      /* @__PURE__ */ jsxs2("figure", {
        "aria-label": label,
        className: "pui-heatmap",
        style: {
          gridTemplateColumns: `88px repeat(${columns.length}, minmax(0, 1fr))`
        },
        children: [
          /* @__PURE__ */ jsx2("span", {}),
          columns.map((c) => /* @__PURE__ */ jsx2("span", {
            className: "pui-heatmap__head",
            "aria-hidden": "true",
            children: c
          }, c)),
          rows.map((r, ri) => /* @__PURE__ */ jsxs2("div", {
            style: { display: "contents" },
            children: [
              /* @__PURE__ */ jsx2("span", {
                style: { fontSize: 12 },
                "aria-hidden": "true",
                children: r
              }),
              columns.map((c, ci) => {
                const v = values[ri]?.[ci] ?? 0;
                const step = stepOf(v);
                const on = hover?.[0] === ri && hover?.[1] === ci;
                return /* @__PURE__ */ jsx2("button", {
                  type: "button",
                  className: "pui-heatmap__cell",
                  "aria-label": `${r}, ${c}: ${v}${unit ? ` ${unit}` : ""}`,
                  style: {
                    background: ramp[step],
                    color: step >= 3 ? "var(--pui-on-accent)" : "var(--pui-fg)",
                    boxShadow: on ? "0 0 0 2px var(--pui-fg)" : undefined
                  },
                  onMouseEnter: () => setHover([ri, ci]),
                  onFocus: () => setHover([ri, ci]),
                  onMouseLeave: () => setHover(null),
                  onBlur: () => setHover(null),
                  children: v
                }, c);
              })
            ]
          }, r))
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "pui-heatmap__legend",
        children: [
          /* @__PURE__ */ jsx2("span", {
            children: "Low"
          }),
          ramp.map((color) => /* @__PURE__ */ jsx2("span", {
            className: "pui-heatmap__legend-step",
            style: { background: color }
          }, color)),
          /* @__PURE__ */ jsx2("span", {
            children: "High"
          }),
          /* @__PURE__ */ jsx2("span", {
            style: { flex: 1 }
          }),
          /* @__PURE__ */ jsx2("span", {
            "aria-hidden": "true",
            style: { color: "var(--pui-fg)", fontSize: 12 },
            children: readout
          })
        ]
      })
    ]
  });
}
// src/chat/Chat.tsx
import { useId as useId2 } from "react";

// src/core/Avatar.tsx
import { jsx as jsx3, jsxs as jsxs3, Fragment as Fragment2 } from "react/jsx-runtime";
var presenceLabel = {
  online: "Online",
  away: "Away",
  dnd: "Do not disturb",
  offline: "Offline"
};
function PresenceDot({
  status,
  size = 12,
  ring
}) {
  return /* @__PURE__ */ jsxs3("svg", {
    width: size,
    height: size,
    viewBox: "0 0 12 12",
    role: "img",
    style: { flex: "none" },
    children: [
      /* @__PURE__ */ jsx3("title", {
        children: presenceLabel[status]
      }),
      ring ? /* @__PURE__ */ jsx3("circle", {
        cx: "6",
        cy: "6",
        r: "6",
        fill: ring
      }) : null,
      status === "online" ? /* @__PURE__ */ jsx3("circle", {
        cx: "6",
        cy: "6",
        r: "4.5",
        fill: "var(--pui-success)"
      }) : null,
      status === "away" ? /* @__PURE__ */ jsxs3(Fragment2, {
        children: [
          /* @__PURE__ */ jsx3("circle", {
            cx: "6",
            cy: "6",
            r: "3.75",
            fill: "none",
            stroke: "var(--pui-warning)",
            strokeWidth: "1.5"
          }),
          /* @__PURE__ */ jsx3("path", {
            d: "M6 2.25a3.75 3.75 0 0 1 0 7.5z",
            fill: "var(--pui-warning)"
          })
        ]
      }) : null,
      status === "dnd" ? /* @__PURE__ */ jsxs3(Fragment2, {
        children: [
          /* @__PURE__ */ jsx3("circle", {
            cx: "6",
            cy: "6",
            r: "4.5",
            fill: "var(--pui-error)"
          }),
          /* @__PURE__ */ jsx3("path", {
            d: "M3.75 6h4.5",
            stroke: "var(--pui-bg)",
            strokeWidth: "1.6",
            strokeLinecap: "round"
          })
        ]
      }) : null,
      status === "offline" ? /* @__PURE__ */ jsx3("circle", {
        cx: "6",
        cy: "6",
        r: "3.75",
        fill: "none",
        stroke: "var(--pui-muted)",
        strokeWidth: "1.5"
      }) : null
    ]
  });
}
function PresenceLabel({ status }) {
  return /* @__PURE__ */ jsxs3("span", {
    className: "pui-presence-label",
    children: [
      /* @__PURE__ */ jsx3(PresenceDot, {
        status
      }),
      presenceLabel[status]
    ]
  });
}
function Avatar({
  name,
  src,
  size = 28,
  tint,
  presence,
  presenceRing = "var(--pui-surface)",
  decorative = false,
  className
}) {
  const label = name ?? "Unassigned";
  const style = {
    width: size,
    height: size,
    fontSize: Math.max(8, Math.round(size * 0.38)),
    "--pui-avatar-tint": tint
  };
  return /* @__PURE__ */ jsxs3("span", {
    role: "img",
    "aria-label": decorative ? undefined : label,
    "aria-hidden": decorative || undefined,
    title: label,
    className: cx("pui-avatar", !name && "pui-avatar--empty", className),
    style,
    children: [
      src ? /* @__PURE__ */ jsx3("img", {
        src,
        alt: ""
      }) : /* @__PURE__ */ jsx3("span", {
        "aria-hidden": "true",
        children: name ? initialsOf(name) : "?"
      }),
      presence ? /* @__PURE__ */ jsx3("span", {
        className: "pui-avatar__presence",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx3(PresenceDot, {
          status: presence,
          size: Math.max(8, Math.round(size * 0.36)),
          ring: presenceRing
        })
      }) : null
    ]
  });
}
function AvatarStack({
  people,
  max = 3,
  size = 28,
  ring
}) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  const names = people.map((p) => p.name);
  const label = rest > 0 ? `${shown.map((p) => p.name).join(", ")} and ${rest} others` : names.join(", ");
  return /* @__PURE__ */ jsxs3("span", {
    role: "img",
    "aria-label": label,
    className: "pui-avatar-stack",
    style: ring ? { "--pui-stack-ring": ring } : undefined,
    children: [
      shown.map((person) => /* @__PURE__ */ jsx3(Avatar, {
        ...person,
        size,
        decorative: true
      }, person.name)),
      rest > 0 ? /* @__PURE__ */ jsxs3("span", {
        "aria-hidden": "true",
        className: "pui-avatar pui-avatar-stack__more",
        style: {
          width: size,
          height: size,
          fontSize: Math.round(size * 0.38)
        },
        children: [
          "+",
          rest
        ]
      }) : null
    ]
  });
}

// src/core/Badge.tsx
import { jsx as jsx4, jsxs as jsxs4, Fragment as Fragment3 } from "react/jsx-runtime";
function Badge({
  tone = "neutral",
  size = "md",
  icon,
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsxs4("span", {
    "data-tone": tone === "neutral" ? undefined : tone,
    className: cx("pui-badge", size === "sm" && "pui-badge--sm", className),
    ...rest,
    children: [
      icon,
      children
    ]
  });
}
var statusMeta = {
  backlog: { label: "Backlog", tone: "neutral", color: "var(--pui-muted)" },
  todo: { label: "To do", tone: "neutral", color: "var(--pui-fg)" },
  "in-progress": {
    label: "In progress",
    tone: "info",
    color: "var(--pui-info)"
  },
  "in-review": {
    label: "In review",
    tone: "accent",
    color: "var(--pui-accent)"
  },
  done: { label: "Done", tone: "success", color: "var(--pui-success)" },
  blocked: { label: "Blocked", tone: "error", color: "var(--pui-error)" }
};
function StatusIcon({
  status,
  size = 12
}) {
  const color = statusMeta[status].color;
  return /* @__PURE__ */ jsx4("svg", {
    width: size,
    height: size,
    viewBox: "0 0 12 12",
    "aria-hidden": "true",
    style: { color, flex: "none" },
    children: status === "done" ? /* @__PURE__ */ jsxs4(Fragment3, {
      children: [
        /* @__PURE__ */ jsx4("circle", {
          cx: "6",
          cy: "6",
          r: "5",
          fill: "currentColor"
        }),
        /* @__PURE__ */ jsx4("path", {
          d: "m3.8 6.1 1.5 1.5 3-3",
          fill: "none",
          stroke: "var(--pui-bg)",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        })
      ]
    }) : /* @__PURE__ */ jsxs4(Fragment3, {
      children: [
        /* @__PURE__ */ jsx4("circle", {
          cx: "6",
          cy: "6",
          r: "4.5",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeDasharray: status === "backlog" ? "2 2" : undefined
        }),
        status === "in-progress" ? /* @__PURE__ */ jsx4("path", {
          d: "M6 1.5a4.5 4.5 0 0 1 0 9z",
          fill: "currentColor"
        }) : null,
        status === "in-review" ? /* @__PURE__ */ jsx4("path", {
          d: "M6 1.5a4.5 4.5 0 1 1-4.5 4.5H6z",
          fill: "currentColor"
        }) : null,
        status === "blocked" ? /* @__PURE__ */ jsx4("path", {
          d: "M3 9 9 3",
          stroke: "currentColor",
          strokeWidth: "1.5"
        }) : null
      ]
    })
  });
}
function StatusBadge({
  status,
  size = "md",
  className
}) {
  const meta = statusMeta[status];
  return /* @__PURE__ */ jsx4(Badge, {
    tone: meta.tone,
    size,
    className,
    icon: /* @__PURE__ */ jsx4(StatusIcon, {
      status
    }),
    children: meta.label
  });
}
function PriorityIcon({
  priority,
  size = 14
}) {
  const label = `Priority: ${priority}`;
  if (priority === "urgent") {
    return /* @__PURE__ */ jsxs4("svg", {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      role: "img",
      children: [
        /* @__PURE__ */ jsx4("title", {
          children: label
        }),
        /* @__PURE__ */ jsx4("rect", {
          x: "1",
          y: "1",
          width: "12",
          height: "12",
          rx: "3",
          fill: "var(--pui-error)"
        }),
        /* @__PURE__ */ jsx4("path", {
          d: "M7 4v4M7 10v.01",
          stroke: "var(--pui-bg)",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        })
      ]
    });
  }
  const level = { low: 1, medium: 2, high: 3 }[priority];
  const fill = (n) => level >= n ? "var(--pui-fg)" : "var(--pui-surface-selected)";
  return /* @__PURE__ */ jsxs4("svg", {
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    role: "img",
    children: [
      /* @__PURE__ */ jsx4("title", {
        children: label
      }),
      /* @__PURE__ */ jsx4("rect", {
        x: "1",
        y: "8",
        width: "3",
        height: "5",
        rx: "1",
        fill: fill(1)
      }),
      /* @__PURE__ */ jsx4("rect", {
        x: "5.5",
        y: "5",
        width: "3",
        height: "8",
        rx: "1",
        fill: fill(2)
      }),
      /* @__PURE__ */ jsx4("rect", {
        x: "10",
        y: "2",
        width: "3",
        height: "11",
        rx: "1",
        fill: fill(3)
      })
    ]
  });
}
function IssueTypeIcon({
  type,
  size = 14
}) {
  const name = { story: "Story", bug: "Bug", task: "Task" }[type];
  return /* @__PURE__ */ jsxs4("svg", {
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    role: "img",
    children: [
      /* @__PURE__ */ jsx4("title", {
        children: name
      }),
      type === "story" ? /* @__PURE__ */ jsx4("path", {
        d: "M3 1.5h8v11L7 10l-4 2.5z",
        fill: "none",
        stroke: "var(--pui-accent)",
        strokeWidth: "1.5",
        strokeLinejoin: "round"
      }) : null,
      type === "bug" ? /* @__PURE__ */ jsxs4(Fragment3, {
        children: [
          /* @__PURE__ */ jsx4("rect", {
            x: "1",
            y: "1",
            width: "12",
            height: "12",
            rx: "3",
            fill: "none",
            stroke: "var(--pui-error)",
            strokeWidth: "1.5"
          }),
          /* @__PURE__ */ jsx4("circle", {
            cx: "7",
            cy: "7",
            r: "2.2",
            fill: "var(--pui-error)"
          })
        ]
      }) : null,
      type === "task" ? /* @__PURE__ */ jsxs4(Fragment3, {
        children: [
          /* @__PURE__ */ jsx4("rect", {
            x: "1",
            y: "1",
            width: "12",
            height: "12",
            rx: "3",
            fill: "none",
            stroke: "var(--pui-info)",
            strokeWidth: "1.5"
          }),
          /* @__PURE__ */ jsx4("path", {
            d: "m4.3 7.2 1.8 1.8 3.6-4",
            fill: "none",
            stroke: "var(--pui-info)",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        ]
      }) : null
    ]
  });
}
function Tag({
  color,
  size = "md",
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsxs4("span", {
    className: cx("pui-tag", size === "sm" && "pui-tag--sm", className),
    ...rest,
    children: [
      color ? /* @__PURE__ */ jsx4("span", {
        className: "pui-swatch",
        style: { background: color }
      }) : null,
      children
    ]
  });
}
function Kbd({ children }) {
  return /* @__PURE__ */ jsx4("kbd", {
    className: "pui-kbd",
    children
  });
}
function Counter({
  tone = "neutral",
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx4("span", {
    className: cx("pui-counter", tone !== "neutral" && `pui-counter--${tone}`, className),
    ...rest,
    children
  });
}

// src/core/Button.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function Button({
  variant = "secondary",
  size = "md",
  icon,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}) {
  return /* @__PURE__ */ jsxs5("button", {
    type,
    className: cx("pui-btn", `pui-btn--${variant}`, size !== "md" && `pui-btn--${size}`, className),
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    ...rest,
    children: [
      loading ? /* @__PURE__ */ jsx5(SpinnerIcon, {
        className: "pui-spinner",
        size: 14
      }) : icon,
      children
    ]
  });
}
function IconButton({
  label,
  size = "md",
  outlined = false,
  className,
  children,
  type = "button",
  ...rest
}) {
  return /* @__PURE__ */ jsx5("button", {
    type,
    "aria-label": label,
    title: label,
    className: cx("pui-icon-btn", size === "sm" && "pui-icon-btn--sm", outlined && "pui-icon-btn--outlined", className),
    ...rest,
    children
  });
}

// src/core/Selection.tsx
import {
  useId,
  useRef,
  useState as useState2
} from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function useControllable(value, defaultValue, onChange) {
  const [inner, setInner] = useState2(defaultValue);
  const current = value === undefined ? inner : value;
  const set = (next) => {
    if (value === undefined)
      setInner(next);
    onChange?.(next);
  };
  return [current, set];
}
function Switch({
  label,
  description,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  size = "md",
  className
}) {
  const [on, setOn] = useControllable(checked, defaultChecked, onCheckedChange);
  return /* @__PURE__ */ jsxs6("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled,
    onClick: () => setOn(!on),
    className: cx("pui-switch", size === "sm" && "pui-switch--sm", className),
    children: [
      /* @__PURE__ */ jsxs6("span", {
        className: "pui-switch__text",
        children: [
          label,
          description ? /* @__PURE__ */ jsx6("span", {
            className: "pui-switch__desc",
            children: description
          }) : null
        ]
      }),
      /* @__PURE__ */ jsx6("span", {
        className: "pui-switch__track",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx6("span", {
          className: "pui-switch__knob"
        })
      })
    ]
  });
}
function Checkbox({ label, className, ...input }) {
  return /* @__PURE__ */ jsxs6("label", {
    className: cx("pui-check", className),
    children: [
      /* @__PURE__ */ jsx6("input", {
        type: "checkbox",
        ...input
      }),
      label
    ]
  });
}
function Radio({ label, className, ...input }) {
  return /* @__PURE__ */ jsxs6("label", {
    className: cx("pui-check", className),
    children: [
      /* @__PURE__ */ jsx6("input", {
        type: "radio",
        ...input
      }),
      label
    ]
  });
}
function SegmentedControl({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  className
}) {
  const first = options[0]?.value;
  const [current, setCurrent] = useControllable(value, defaultValue ?? first, onValueChange);
  const refs = useRef([]);
  const onKeyDown = (event) => {
    const index = options.findIndex((o) => o.value === current);
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta)
      return;
    event.preventDefault();
    const next = (index + delta + options.length) % options.length;
    const option = options[next];
    if (!option)
      return;
    setCurrent(option.value);
    refs.current[next]?.focus();
  };
  return /* @__PURE__ */ jsx6("div", {
    role: "radiogroup",
    "aria-label": label,
    className: cx("pui-segmented", className),
    onKeyDown,
    children: options.map((option, index) => {
      const selected = option.value === current;
      return /* @__PURE__ */ jsx6("button", {
        ref: (node) => {
          refs.current[index] = node;
        },
        type: "button",
        role: "radio",
        "aria-checked": selected,
        tabIndex: selected ? 0 : -1,
        className: "pui-segmented__item",
        onClick: () => setCurrent(option.value),
        children: option.label
      }, option.value);
    })
  });
}
function Tabs({
  label,
  items,
  value,
  defaultValue,
  onValueChange,
  className
}) {
  const baseId = useId();
  const [current, setCurrent] = useControllable(value, defaultValue ?? items[0]?.id ?? "", onValueChange);
  const refs = useRef([]);
  const active = items.find((item) => item.id === current) ?? items[0];
  const onKeyDown = (event) => {
    const index = items.findIndex((item) => item.id === current);
    let next = index;
    if (event.key === "ArrowRight")
      next = (index + 1) % items.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home")
      next = 0;
    else if (event.key === "End")
      next = items.length - 1;
    else
      return;
    event.preventDefault();
    const item = items[next];
    if (!item)
      return;
    setCurrent(item.id);
    refs.current[next]?.focus();
  };
  return /* @__PURE__ */ jsxs6("div", {
    className: cx("pui-tabs", className),
    children: [
      /* @__PURE__ */ jsx6("div", {
        role: "tablist",
        "aria-label": label,
        className: "pui-tabs__list",
        onKeyDown,
        children: items.map((item, index) => {
          const selected = item.id === active?.id;
          return /* @__PURE__ */ jsxs6("button", {
            ref: (node) => {
              refs.current[index] = node;
            },
            type: "button",
            role: "tab",
            id: `${baseId}-tab-${item.id}`,
            "aria-selected": selected,
            "aria-controls": `${baseId}-panel-${item.id}`,
            tabIndex: selected ? 0 : -1,
            className: "pui-tab",
            onClick: () => setCurrent(item.id),
            children: [
              item.label,
              item.count !== undefined ? /* @__PURE__ */ jsx6("span", {
                className: "pui-tab__count",
                children: item.count
              }) : null
            ]
          }, item.id);
        })
      }),
      active ? /* @__PURE__ */ jsx6("div", {
        role: "tabpanel",
        id: `${baseId}-panel-${active.id}`,
        "aria-labelledby": `${baseId}-tab-${active.id}`,
        className: "pui-tabs__panel",
        children: active.content
      }) : null
    ]
  });
}

// src/chat/Chat.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function ChannelList({
  heading,
  channels,
  currentId,
  onSelect
}) {
  const headingId = useId2();
  return /* @__PURE__ */ jsxs7("div", {
    className: "pui-chat-nav",
    children: [
      /* @__PURE__ */ jsx7("span", {
        id: headingId,
        className: "pui-overline pui-chat-nav__heading",
        children: heading
      }),
      /* @__PURE__ */ jsx7("ul", {
        "aria-labelledby": headingId,
        className: "pui-chat-nav__list",
        children: channels.map((channel) => {
          const current = channel.id === currentId;
          return /* @__PURE__ */ jsx7("li", {
            children: /* @__PURE__ */ jsxs7("button", {
              type: "button",
              className: "pui-channel",
              "aria-current": current ? "page" : undefined,
              "data-unread": channel.unread || channel.mentions ? true : undefined,
              onClick: () => onSelect?.(channel.id),
              children: [
                /* @__PURE__ */ jsx7("span", {
                  className: "pui-channel__hash",
                  "aria-hidden": "true",
                  children: "#"
                }),
                /* @__PURE__ */ jsx7("span", {
                  className: "pui-channel__name",
                  children: channel.name
                }),
                channel.mentions && !current ? /* @__PURE__ */ jsx7(Counter, {
                  tone: "accent",
                  "aria-label": `${channel.mentions} mentions`,
                  children: channel.mentions
                }) : null
              ]
            })
          }, channel.id);
        })
      })
    ]
  });
}
function PeopleList({
  heading,
  people,
  currentId,
  onSelect
}) {
  const headingId = useId2();
  return /* @__PURE__ */ jsxs7("div", {
    className: "pui-chat-nav",
    children: [
      /* @__PURE__ */ jsx7("span", {
        id: headingId,
        className: "pui-overline pui-chat-nav__heading",
        children: heading
      }),
      /* @__PURE__ */ jsx7("ul", {
        "aria-labelledby": headingId,
        className: "pui-chat-nav__list",
        children: people.map((person) => /* @__PURE__ */ jsx7("li", {
          children: /* @__PURE__ */ jsxs7("button", {
            type: "button",
            className: "pui-channel",
            "aria-current": person.id === currentId ? "page" : undefined,
            style: { color: "var(--pui-fg)" },
            onClick: () => onSelect?.(person.id),
            children: [
              /* @__PURE__ */ jsx7(Avatar, {
                name: person.name,
                src: person.src,
                tint: person.tint,
                size: 20,
                presence: person.presence,
                decorative: true
              }),
              /* @__PURE__ */ jsx7("span", {
                className: "pui-channel__name",
                children: person.name
              }),
              person.note ? /* @__PURE__ */ jsx7("span", {
                style: { fontSize: 11, color: "var(--pui-muted)" },
                children: person.note
              }) : null
            ]
          })
        }, person.id))
      })
    ]
  });
}
function MessageList({
  label,
  children,
  className
}) {
  return /* @__PURE__ */ jsx7("div", {
    role: "log",
    "aria-label": label,
    className: cx("pui-message-list", className),
    children
  });
}
function ChatDivider({
  label,
  variant = "day"
}) {
  return /* @__PURE__ */ jsx7("div", {
    className: cx("pui-divider", variant === "new" && "pui-divider--new"),
    children: /* @__PURE__ */ jsx7("span", {
      className: "pui-divider__label",
      children: label
    })
  });
}
function ChatEvent({
  children,
  time
}) {
  return /* @__PURE__ */ jsxs7("div", {
    className: "pui-event",
    children: [
      /* @__PURE__ */ jsx7(ArrowRightIcon, {
        size: 14
      }),
      /* @__PURE__ */ jsx7("span", {
        children
      }),
      time ? /* @__PURE__ */ jsx7("span", {
        className: "pui-mono",
        children: time
      }) : null
    ]
  });
}
function Message({
  author,
  time,
  children,
  continued = false,
  highlighted = false,
  attachment,
  reactions,
  onToggleReaction,
  thread,
  onOpenThread
}) {
  return /* @__PURE__ */ jsxs7("article", {
    className: cx("pui-message", continued && "pui-message--continued"),
    "data-highlighted": highlighted || undefined,
    "aria-label": continued ? undefined : `${author.name}, ${time}`,
    children: [
      /* @__PURE__ */ jsx7("div", {
        className: "pui-message__gutter",
        children: continued ? null : /* @__PURE__ */ jsx7(Avatar, {
          name: author.name,
          src: author.src,
          tint: author.tint,
          size: 36,
          decorative: true
        })
      }),
      /* @__PURE__ */ jsxs7("div", {
        className: "pui-message__body",
        children: [
          continued ? null : /* @__PURE__ */ jsxs7("div", {
            className: "pui-message__head",
            children: [
              /* @__PURE__ */ jsx7("span", {
                className: "pui-message__author",
                children: author.name
              }),
              /* @__PURE__ */ jsx7("time", {
                className: "pui-message__time",
                children: time
              })
            ]
          }),
          /* @__PURE__ */ jsx7("p", {
            className: "pui-message__text",
            children
          }),
          attachment,
          reactions && reactions.length > 0 ? /* @__PURE__ */ jsx7("div", {
            className: "pui-message__reactions",
            children: reactions.map((reaction) => /* @__PURE__ */ jsxs7("button", {
              type: "button",
              className: "pui-reaction",
              "aria-pressed": Boolean(reaction.mine),
              "aria-label": `${reaction.label}, ${reaction.count}`,
              onClick: () => onToggleReaction?.(reaction.id),
              children: [
                reaction.icon,
                /* @__PURE__ */ jsx7("span", {
                  className: "pui-mono",
                  children: reaction.count
                })
              ]
            }, reaction.id))
          }) : null,
          thread && thread.count > 0 ? /* @__PURE__ */ jsxs7("button", {
            type: "button",
            className: "pui-thread-link",
            onClick: onOpenThread,
            children: [
              thread.participants?.[0] ? /* @__PURE__ */ jsx7(Avatar, {
                name: thread.participants[0].name,
                tint: thread.participants[0].tint,
                size: 18,
                decorative: true
              }) : null,
              /* @__PURE__ */ jsxs7("span", {
                className: "pui-thread-link__count",
                children: [
                  thread.count,
                  " ",
                  thread.count === 1 ? "reply" : "replies"
                ]
              }),
              thread.lastReply ? /* @__PURE__ */ jsxs7("span", {
                className: "pui-thread-link__meta",
                children: [
                  "Last reply ",
                  thread.lastReply
                ]
              }) : null
            ]
          }) : null
        ]
      })
    ]
  });
}
function Composer({
  channelName,
  value,
  defaultValue = "",
  onValueChange,
  onSend,
  status,
  onAttach,
  onMention,
  onLinkIssue,
  disabled = false
}) {
  const id = useId2();
  const [draft, setDraft] = useControllable(value, defaultValue, onValueChange);
  const empty = draft.trim().length === 0;
  const submit = (event) => {
    event.preventDefault();
    if (empty || disabled)
      return;
    onSend(draft.trim());
    setDraft("");
  };
  return /* @__PURE__ */ jsxs7("form", {
    onSubmit: submit,
    style: { display: "flex", flexDirection: "column", gap: 6 },
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: "pui-composer",
        children: [
          /* @__PURE__ */ jsxs7("label", {
            htmlFor: id,
            className: "pui-sr-only",
            children: [
              "Message #",
              channelName
            ]
          }),
          /* @__PURE__ */ jsx7("input", {
            id,
            className: "pui-composer__input",
            placeholder: `Message #${channelName}`,
            value: draft,
            disabled,
            autoComplete: "off",
            onChange: (event) => setDraft(event.target.value)
          }),
          /* @__PURE__ */ jsxs7("div", {
            className: "pui-composer__toolbar",
            children: [
              onLinkIssue ? /* @__PURE__ */ jsx7(IconButton, {
                size: "sm",
                label: "Link an issue",
                onClick: onLinkIssue,
                children: /* @__PURE__ */ jsx7(LinkIcon, {
                  size: 14
                })
              }) : null,
              onAttach ? /* @__PURE__ */ jsx7(IconButton, {
                size: "sm",
                label: "Attach file",
                onClick: onAttach,
                children: /* @__PURE__ */ jsx7(PaperclipIcon, {
                  size: 14
                })
              }) : null,
              onMention ? /* @__PURE__ */ jsx7(IconButton, {
                size: "sm",
                label: "Mention someone",
                onClick: onMention,
                children: /* @__PURE__ */ jsx7(AtIcon, {
                  size: 14
                })
              }) : null,
              /* @__PURE__ */ jsx7("span", {
                style: { flex: 1 }
              }),
              /* @__PURE__ */ jsxs7(Button, {
                type: "submit",
                size: "sm",
                variant: empty ? "secondary" : "primary",
                disabled: empty || disabled,
                children: [
                  "Send",
                  /* @__PURE__ */ jsx7(ArrowRightIcon, {
                    size: 12
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx7("span", {
        "aria-live": "polite",
        className: "pui-composer__status",
        children: status
      })
    ]
  });
}
// src/core/Feedback.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var toneIcon = {
  info: /* @__PURE__ */ jsx8(InfoIcon, {
    size: 18,
    style: { color: "var(--pui-info)" }
  }),
  success: /* @__PURE__ */ jsx8(CheckCircleIcon, {
    size: 18,
    style: { color: "var(--pui-success)" }
  }),
  warning: /* @__PURE__ */ jsx8(AlertTriangleIcon, {
    size: 18,
    style: { color: "var(--pui-warning)" }
  }),
  error: /* @__PURE__ */ jsx8(AlertCircleIcon, {
    size: 18,
    style: { color: "var(--pui-error)" }
  })
};
function Alert({
  tone = "info",
  title,
  action,
  className,
  children,
  ...rest
}) {
  const urgent = tone === "error" || tone === "warning";
  return /* @__PURE__ */ jsxs8("div", {
    role: urgent ? "alert" : "status",
    "data-tone": tone,
    className: cx("pui-alert", className),
    ...rest,
    children: [
      toneIcon[tone],
      /* @__PURE__ */ jsxs8("div", {
        className: "pui-alert__body",
        children: [
          title ? /* @__PURE__ */ jsxs8("span", {
            className: "pui-alert__title",
            children: [
              title,
              " "
            ]
          }) : null,
          children ? /* @__PURE__ */ jsx8("span", {
            className: "pui-alert__text",
            children
          }) : null
        ]
      }),
      action
    ]
  });
}
function Toast({ tone = "success", children, action }) {
  return /* @__PURE__ */ jsxs8("div", {
    className: "pui-toast",
    children: [
      toneIcon[tone],
      /* @__PURE__ */ jsx8("span", {
        className: "pui-toast__text",
        children
      }),
      action
    ]
  });
}
function ToastRegion({ children }) {
  return /* @__PURE__ */ jsx8("section", {
    "aria-live": "polite",
    "aria-label": "Notifications",
    className: "pui-toast-region",
    children
  });
}
function Progress({
  label,
  value,
  valueText,
  showLabel = true,
  thin = false
}) {
  const pct = clamp(value, 0, 100);
  return /* @__PURE__ */ jsxs8("div", {
    className: "pui-progress",
    children: [
      showLabel ? /* @__PURE__ */ jsxs8("div", {
        className: "pui-progress__head",
        children: [
          /* @__PURE__ */ jsx8("span", {
            children: label
          }),
          valueText ? /* @__PURE__ */ jsx8("span", {
            className: "pui-mono",
            style: { color: "var(--pui-muted)" },
            children: valueText
          }) : null
        ]
      }) : null,
      /* @__PURE__ */ jsx8("div", {
        role: "progressbar",
        "aria-label": label,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(pct),
        "aria-valuetext": valueText,
        className: cx("pui-progress__track", thin && "pui-progress__track--thin"),
        children: /* @__PURE__ */ jsx8("div", {
          className: "pui-progress__bar",
          style: { width: `${pct}%` }
        })
      })
    ]
  });
}
function Skeleton({
  width = "100%",
  height = 10,
  radius
}) {
  return /* @__PURE__ */ jsx8("span", {
    "aria-hidden": "true",
    className: "pui-skeleton",
    style: { width, height, borderRadius: radius }
  });
}
function EmptyState({
  title,
  children,
  action,
  icon,
  centered = false
}) {
  return /* @__PURE__ */ jsxs8("div", {
    className: cx("pui-empty", centered && "pui-empty--center"),
    children: [
      icon,
      /* @__PURE__ */ jsx8("span", {
        className: "pui-empty__title",
        children: title
      }),
      children ? /* @__PURE__ */ jsx8("span", {
        className: "pui-empty__text",
        children
      }) : null,
      action
    ]
  });
}
// src/core/Field.tsx
import {
  useId as useId3
} from "react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function Field({
  label,
  hint,
  error,
  hideLabel,
  className,
  children
}) {
  const id = useId3();
  const messageId = `${id}-message`;
  const message = error ?? hint;
  return /* @__PURE__ */ jsxs9("div", {
    className: cx("pui-field", className),
    children: [
      /* @__PURE__ */ jsx9("label", {
        htmlFor: id,
        className: cx("pui-label", hideLabel && "pui-sr-only"),
        children: label
      }),
      children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": message ? messageId : undefined
      }),
      error ? /* @__PURE__ */ jsxs9("span", {
        id: messageId,
        className: "pui-error-text",
        children: [
          /* @__PURE__ */ jsx9(AlertCircleIcon, {
            size: 14
          }),
          error
        ]
      }) : hint ? /* @__PURE__ */ jsx9("span", {
        id: messageId,
        className: "pui-hint",
        children: hint
      }) : null
    ]
  });
}
function TextField({
  label,
  hint,
  error,
  hideLabel,
  className,
  ...input
}) {
  return /* @__PURE__ */ jsx9(Field, {
    label,
    hint,
    error,
    hideLabel,
    className,
    children: (control) => /* @__PURE__ */ jsx9("input", {
      className: "pui-input",
      ...control,
      ...input
    })
  });
}
function TextAreaField({
  label,
  hint,
  error,
  className,
  rows = 3,
  ...textarea
}) {
  return /* @__PURE__ */ jsx9(Field, {
    label,
    hint,
    error,
    className,
    children: (control) => /* @__PURE__ */ jsx9("textarea", {
      className: "pui-textarea",
      rows,
      ...control,
      ...textarea
    })
  });
}
function SelectField({
  label,
  hint,
  error,
  options,
  className,
  ...select
}) {
  return /* @__PURE__ */ jsx9(Field, {
    label,
    hint,
    error,
    className,
    children: (control) => /* @__PURE__ */ jsx9("select", {
      className: "pui-select",
      ...control,
      ...select,
      children: options.map((option) => /* @__PURE__ */ jsx9("option", {
        value: option.value,
        children: option.label
      }, option.value))
    })
  });
}
function SearchInput({
  label,
  shortcut,
  className,
  style,
  ...input
}) {
  return /* @__PURE__ */ jsxs9("div", {
    className: cx("pui-input-wrap", "pui-input-wrap--icon", shortcut && "pui-input-wrap--end", className),
    style,
    children: [
      /* @__PURE__ */ jsx9(SearchIcon, {
        className: "pui-input-wrap__icon"
      }),
      /* @__PURE__ */ jsx9("input", {
        type: "search",
        "aria-label": label,
        className: "pui-input",
        ...input
      }),
      shortcut ? /* @__PURE__ */ jsx9("kbd", {
        className: "pui-kbd pui-input-wrap__end",
        children: shortcut
      }) : null
    ]
  });
}
// src/core/Menu.tsx
import {
  useId as useId4,
  useRef as useRef2,
  useState as useState3
} from "react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function Menu({ label, children, className }) {
  const ref = useRef2(null);
  const onKeyDown = (event) => {
    const items = Array.from(ref.current?.querySelectorAll('[role="menuitem"]:not(:disabled)') ?? []);
    if (items.length === 0)
      return;
    const index = items.indexOf(document.activeElement);
    let next;
    if (event.key === "ArrowDown")
      next = (index + 1) % items.length;
    else if (event.key === "ArrowUp")
      next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home")
      next = 0;
    else if (event.key === "End")
      next = items.length - 1;
    else
      return;
    event.preventDefault();
    items[next]?.focus();
  };
  return /* @__PURE__ */ jsx10("div", {
    ref,
    role: "menu",
    "aria-label": label,
    tabIndex: -1,
    className: cx("pui-menu", className),
    onKeyDown,
    children
  });
}
function MenuItem({
  shortcut,
  danger = false,
  className,
  children,
  type = "button",
  ...rest
}) {
  return /* @__PURE__ */ jsxs10("button", {
    type,
    role: "menuitem",
    className: cx("pui-menu__item", danger && "pui-menu__item--danger", className),
    ...rest,
    children: [
      /* @__PURE__ */ jsx10("span", {
        children
      }),
      shortcut ? /* @__PURE__ */ jsx10("span", {
        className: "pui-menu__shortcut",
        children: shortcut
      }) : null
    ]
  });
}
function MenuSeparator() {
  return /* @__PURE__ */ jsx10("hr", {
    className: "pui-menu__separator"
  });
}
function Tooltip({
  content,
  shortcut,
  placement = "top",
  children
}) {
  const id = useId4();
  const [open, setOpen] = useState3(false);
  return /* @__PURE__ */ jsxs10("span", {
    className: "pui-tooltip-anchor",
    children: [
      children({
        "aria-describedby": id,
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        onKeyDown: (event) => {
          if (event.key === "Escape")
            setOpen(false);
        }
      }),
      /* @__PURE__ */ jsxs10("span", {
        id,
        role: "tooltip",
        hidden: !open,
        className: cx("pui-tooltip", placement === "bottom" && "pui-tooltip--bottom"),
        children: [
          content,
          shortcut ? /* @__PURE__ */ jsx10("kbd", {
            className: "pui-kbd",
            children: shortcut
          }) : null
        ]
      })
    ]
  });
}
// src/kanban/Kanban.tsx
import {
  useState as useState4
} from "react";
import { jsx as jsx11, jsxs as jsxs11, Fragment as Fragment4 } from "react/jsx-runtime";
function IssueCard({
  issue,
  selected = false,
  done = false,
  onSelect,
  actions,
  draggable,
  onDragStart,
  onDragEnd,
  dragging = false
}) {
  const sub = issue.subtasks;
  return /* @__PURE__ */ jsxs11("article", {
    className: "pui-issue",
    "data-selected": selected || undefined,
    "data-done": done || undefined,
    "data-dragging": dragging || undefined,
    draggable,
    onDragStart,
    onDragEnd,
    children: [
      /* @__PURE__ */ jsxs11("div", {
        className: "pui-issue__row",
        children: [
          issue.type ? /* @__PURE__ */ jsx11(IssueTypeIcon, {
            type: issue.type
          }) : null,
          /* @__PURE__ */ jsx11("span", {
            className: "pui-issue__key",
            children: issue.key
          }),
          /* @__PURE__ */ jsx11("span", {
            style: { flex: 1 }
          }),
          issue.priority ? /* @__PURE__ */ jsx11(PriorityIcon, {
            priority: issue.priority
          }) : null
        ]
      }),
      /* @__PURE__ */ jsx11("button", {
        type: "button",
        className: "pui-issue__title",
        "aria-pressed": onSelect ? selected : undefined,
        onClick: onSelect,
        children: issue.title
      }),
      issue.labels && issue.labels.length > 0 ? /* @__PURE__ */ jsx11("div", {
        className: "pui-issue__labels",
        children: issue.labels.map((label) => /* @__PURE__ */ jsx11(Tag, {
          size: "sm",
          color: label.color,
          children: label.name
        }, label.name))
      }) : null,
      sub && sub.total > 0 ? /* @__PURE__ */ jsxs11("div", {
        className: "pui-issue__row",
        style: { gap: 8 },
        children: [
          /* @__PURE__ */ jsx11("div", {
            role: "progressbar",
            "aria-label": "Subtasks done",
            "aria-valuemin": 0,
            "aria-valuemax": sub.total,
            "aria-valuenow": sub.done,
            className: "pui-progress__track pui-progress__track--thin",
            style: { flex: 1 },
            children: /* @__PURE__ */ jsx11("div", {
              className: "pui-progress__bar",
              style: { width: `${sub.done / sub.total * 100}%` }
            })
          }),
          /* @__PURE__ */ jsxs11("span", {
            className: "pui-issue__key",
            children: [
              sub.done,
              "/",
              sub.total
            ]
          })
        ]
      }) : null,
      /* @__PURE__ */ jsxs11("div", {
        className: "pui-issue__meta",
        children: [
          issue.points !== undefined ? /* @__PURE__ */ jsx11(Counter, {
            title: "Story points",
            style: { color: "var(--pui-fg)" },
            children: issue.points
          }) : null,
          issue.comments ? /* @__PURE__ */ jsxs11("span", {
            className: "pui-issue__meta-item",
            children: [
              /* @__PURE__ */ jsx11(CommentIcon, {
                size: 12
              }),
              /* @__PURE__ */ jsxs11("span", {
                children: [
                  issue.comments,
                  /* @__PURE__ */ jsx11("span", {
                    className: "pui-sr-only",
                    children: " comments"
                  })
                ]
              })
            ]
          }) : null,
          /* @__PURE__ */ jsx11("span", {
            style: { flex: 1 }
          }),
          /* @__PURE__ */ jsx11(Avatar, {
            name: issue.assignee?.name,
            src: issue.assignee?.src,
            tint: issue.assignee?.tint,
            size: 22
          })
        ]
      }),
      selected && actions ? /* @__PURE__ */ jsx11("div", {
        className: "pui-issue__actions",
        children: actions
      }) : null
    ]
  });
}
function KanbanBoard({
  columns,
  issues,
  onMoveIssue,
  selectedId,
  defaultSelectedId = null,
  onSelectIssue,
  onAddIssue,
  emptyText = "No matching issues",
  columnMinHeight,
  doneColumnId
}) {
  const [selected, setSelected] = useControllable(selectedId, defaultSelectedId, onSelectIssue);
  const [dragId, setDragId] = useState4(null);
  const [dropColumn, setDropColumn] = useState4(null);
  const doneId = doneColumnId ?? columns.find((column) => column.status === "done")?.id;
  const style = {
    "--pui-board-columns": columns.length,
    "--pui-column-min-height": columnMinHeight !== undefined ? `${columnMinHeight}px` : undefined
  };
  return /* @__PURE__ */ jsx11("div", {
    className: "pui-board",
    style,
    children: columns.map((column, columnIndex) => {
      const columnIssues = issues.filter((issue) => issue.columnId === column.id);
      const over = column.wipLimit !== undefined && columnIssues.length > column.wipLimit;
      const previous = columns[columnIndex - 1];
      const next = columns[columnIndex + 1];
      const headingId = `pui-column-${column.id}`;
      const onDragOver = (event) => {
        if (!dragId)
          return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        if (dropColumn !== column.id)
          setDropColumn(column.id);
      };
      const onDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("text/plain") || dragId;
        setDragId(null);
        setDropColumn(null);
        if (id)
          onMoveIssue?.(id, column.id);
      };
      return /* @__PURE__ */ jsxs11("section", {
        "aria-labelledby": headingId,
        className: "pui-column",
        "data-drop-target": dropColumn === column.id || undefined,
        onDragOver,
        onDragLeave: () => setDropColumn(null),
        onDrop,
        children: [
          /* @__PURE__ */ jsxs11("div", {
            className: "pui-column__header",
            children: [
              column.status ? /* @__PURE__ */ jsx11(StatusIcon, {
                status: column.status,
                size: 14
              }) : null,
              /* @__PURE__ */ jsx11("h2", {
                id: headingId,
                className: "pui-column__title",
                children: column.title
              }),
              /* @__PURE__ */ jsx11(Counter, {
                tone: over ? "warning" : "neutral",
                "aria-label": column.wipLimit !== undefined ? `${columnIssues.length} of ${column.wipLimit} work-in-progress limit` : `${columnIssues.length} issues`,
                children: column.wipLimit !== undefined ? `${columnIssues.length} / ${column.wipLimit}` : columnIssues.length
              }),
              /* @__PURE__ */ jsx11("span", {
                className: "pui-column__spacer"
              }),
              onAddIssue ? /* @__PURE__ */ jsx11(IconButton, {
                size: "sm",
                label: `Add issue to ${column.title}`,
                onClick: () => onAddIssue(column.id),
                style: { color: "var(--pui-muted)" },
                children: /* @__PURE__ */ jsx11(PlusIcon, {
                  size: 14
                })
              }) : null
            ]
          }),
          over ? /* @__PURE__ */ jsxs11("div", {
            role: "status",
            className: "pui-badge pui-badge--sm",
            "data-tone": "warning",
            style: { height: "auto", padding: "6px 8px" },
            children: [
              /* @__PURE__ */ jsx11(AlertTriangleIcon, {
                size: 12
              }),
              "Over WIP limit"
            ]
          }) : null,
          columnIssues.map((issue) => {
            const isSelected = selected === issue.id;
            return /* @__PURE__ */ jsx11(IssueCard, {
              issue,
              selected: isSelected,
              done: column.id === doneId,
              onSelect: () => setSelected(isSelected ? null : issue.id),
              draggable: Boolean(onMoveIssue),
              dragging: dragId === issue.id,
              onDragStart: (event) => {
                event.dataTransfer.setData("text/plain", issue.id);
                event.dataTransfer.effectAllowed = "move";
                setDragId(issue.id);
              },
              onDragEnd: () => {
                setDragId(null);
                setDropColumn(null);
              },
              actions: onMoveIssue ? /* @__PURE__ */ jsxs11(Fragment4, {
                children: [
                  /* @__PURE__ */ jsx11(Button, {
                    size: "sm",
                    disabled: !previous,
                    icon: /* @__PURE__ */ jsx11(ChevronLeftIcon, {
                      size: 12
                    }),
                    "aria-label": previous ? `Move ${issue.key} to ${previous.title}` : undefined,
                    onClick: () => previous && onMoveIssue(issue.id, previous.id),
                    children: previous?.title ?? "Start"
                  }),
                  /* @__PURE__ */ jsxs11(Button, {
                    size: "sm",
                    variant: "primary",
                    disabled: !next,
                    "aria-label": next ? `Move ${issue.key} to ${next.title}` : undefined,
                    onClick: () => next && onMoveIssue(issue.id, next.id),
                    children: [
                      next?.title ?? "End",
                      /* @__PURE__ */ jsx11(ChevronRightIcon, {
                        size: 12
                      })
                    ]
                  })
                ]
              }) : null
            }, issue.id);
          }),
          columnIssues.length === 0 ? /* @__PURE__ */ jsx11("div", {
            className: "pui-empty pui-empty--center",
            style: { padding: "20px 12px" },
            children: /* @__PURE__ */ jsx11("span", {
              className: "pui-empty__text",
              children: emptyText
            })
          }) : null,
          onAddIssue ? /* @__PURE__ */ jsxs11("button", {
            type: "button",
            className: "pui-column__add",
            onClick: () => onAddIssue(column.id),
            children: [
              /* @__PURE__ */ jsx11(PlusIcon, {
                size: 12
              }),
              "Add issue"
            ]
          }) : null
        ]
      }, column.id);
    })
  });
}
// src/map/Map.tsx
import { jsx as jsx12, jsxs as jsxs12, Fragment as Fragment5 } from "react/jsx-runtime";
var kindLabel = {
  office: "Office",
  people: "Teammates",
  incident: "Incident"
};
var glyphPath = {
  office: "M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z",
  people: "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z",
  incident: "M8 1.5 15 14.5H1z"
};
function markerColor(kind, tone) {
  if (kind === "office")
    return "var(--pui-accent)";
  if (kind === "people")
    return "var(--pui-series-3)";
  return tone === "warning" ? "var(--pui-warning)" : "var(--pui-error)";
}
function MarkerGlyph({
  kind,
  tone,
  size = 16
}) {
  return /* @__PURE__ */ jsx12("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    style: { flex: "none" },
    children: /* @__PURE__ */ jsx12("path", {
      d: glyphPath[kind],
      fill: markerColor(kind, tone)
    })
  });
}
function MarkerPin({ place }) {
  if (place.kind === "office") {
    return /* @__PURE__ */ jsx12("span", {
      className: "pui-map__pin pui-map__pin--office",
      children: /* @__PURE__ */ jsx12(BuildingIcon, {
        size: 16
      })
    });
  }
  if (place.kind === "people") {
    const size = (place.count ?? 0) > 12 ? 40 : 32;
    return /* @__PURE__ */ jsx12("span", {
      className: "pui-map__pin pui-map__pin--people",
      style: { width: size, height: size },
      children: place.count ?? ""
    });
  }
  return /* @__PURE__ */ jsxs12("svg", {
    className: "pui-map__pin pui-map__pin--incident",
    viewBox: "0 0 34 30",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx12("path", {
        d: "M17 2 32 28H2Z",
        fill: markerColor("incident", place.tone),
        stroke: "var(--pui-bg)",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }),
      /* @__PURE__ */ jsx12("path", {
        d: "M17 11v7M17 22v.01",
        stroke: "var(--pui-bg)",
        strokeWidth: "2.6",
        strokeLinecap: "round"
      })
    ]
  });
}
function MapView({
  label,
  places,
  selectedId = null,
  onSelect,
  renderPopover,
  children,
  controls,
  attribution,
  height = 560,
  className
}) {
  const selected = places.find((p) => p.id === selectedId);
  const below = selected ? selected.y < 0.32 : false;
  return /* @__PURE__ */ jsxs12("section", {
    "aria-label": label,
    className: cx("pui-map", className),
    style: { height },
    children: [
      children,
      places.map((place) => {
        const on = place.id === selectedId;
        return /* @__PURE__ */ jsxs12("button", {
          type: "button",
          className: "pui-map__marker",
          "aria-pressed": on,
          "aria-label": `${kindLabel[place.kind]}: ${place.name}`,
          style: { left: `${place.x * 100}%`, top: `${place.y * 100}%` },
          onClick: () => onSelect?.(on ? null : place.id),
          children: [
            /* @__PURE__ */ jsx12(MarkerPin, {
              place
            }),
            place.short ? /* @__PURE__ */ jsx12("span", {
              className: "pui-map__label",
              children: place.short
            }) : null
          ]
        }, place.id);
      }),
      selected && renderPopover ? /* @__PURE__ */ jsx12("div", {
        role: "dialog",
        "aria-label": selected.name,
        className: "pui-map__popover",
        style: {
          left: `${clamp(selected.x * 100, 16, 84)}%`,
          top: `${selected.y * 100}%`,
          transform: below ? "translate(-50%, 44px)" : "translate(-50%, calc(-100% - 40px))"
        },
        children: renderPopover(selected)
      }) : null,
      controls,
      attribution ? /* @__PURE__ */ jsx12("div", {
        className: "pui-map__attribution",
        children: attribution
      }) : null
    ]
  });
}
function MapPopoverCard({
  place,
  stats,
  actions,
  onClose
}) {
  return /* @__PURE__ */ jsxs12(Fragment5, {
    children: [
      /* @__PURE__ */ jsxs12("div", {
        style: { display: "flex", alignItems: "flex-start", gap: 10 },
        children: [
          /* @__PURE__ */ jsx12("span", {
            style: { marginTop: 2 },
            children: /* @__PURE__ */ jsx12(MarkerGlyph, {
              kind: place.kind,
              tone: place.tone
            })
          }),
          /* @__PURE__ */ jsxs12("div", {
            style: { flex: 1, display: "flex", flexDirection: "column", gap: 2 },
            children: [
              /* @__PURE__ */ jsx12("span", {
                style: { fontSize: 14, fontWeight: 600 },
                children: place.name
              }),
              place.subtitle ? /* @__PURE__ */ jsx12("span", {
                style: { fontSize: 12, color: "var(--pui-muted)" },
                children: place.subtitle
              }) : null
            ]
          }),
          onClose ? /* @__PURE__ */ jsx12(IconButton, {
            size: "sm",
            label: "Close details",
            onClick: onClose,
            children: /* @__PURE__ */ jsx12(CloseIcon, {
              size: 14
            })
          }) : null
        ]
      }),
      stats && stats.length > 0 ? /* @__PURE__ */ jsx12("dl", {
        style: {
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 8
        },
        children: stats.map((stat) => /* @__PURE__ */ jsxs12("div", {
          style: {
            padding: "8px 10px",
            borderRadius: 8,
            background: "var(--pui-surface)",
            display: "flex",
            flexDirection: "column-reverse",
            gap: 2
          },
          children: [
            /* @__PURE__ */ jsx12("dd", {
              className: "pui-mono",
              style: { margin: 0, fontSize: 15, fontWeight: 600 },
              children: stat.value
            }),
            /* @__PURE__ */ jsx12("dt", {
              style: { fontSize: 11, color: "var(--pui-muted)" },
              children: stat.label
            })
          ]
        }, stat.label))
      }) : null,
      actions ? /* @__PURE__ */ jsx12("div", {
        style: { display: "flex", gap: 8 },
        children: actions
      }) : null
    ]
  });
}
function MapControls({
  onZoomIn,
  onZoomOut,
  onFit
}) {
  return /* @__PURE__ */ jsxs12("div", {
    className: "pui-map__controls",
    children: [
      /* @__PURE__ */ jsx12(IconButton, {
        label: "Zoom in",
        onClick: onZoomIn,
        children: /* @__PURE__ */ jsx12(PlusIcon, {})
      }),
      /* @__PURE__ */ jsx12(IconButton, {
        label: "Zoom out",
        onClick: onZoomOut,
        children: /* @__PURE__ */ jsx12(MinusIcon, {})
      }),
      /* @__PURE__ */ jsx12(IconButton, {
        label: "Fit all places",
        onClick: onFit,
        children: /* @__PURE__ */ jsx12(FitIcon, {})
      })
    ]
  });
}
function MapScale({
  label,
  width = 80
}) {
  return /* @__PURE__ */ jsxs12("span", {
    className: "pui-map__scale",
    children: [
      /* @__PURE__ */ jsx12("span", {
        className: "pui-map__scale-bar",
        style: { width }
      }),
      /* @__PURE__ */ jsx12("span", {
        children: label
      })
    ]
  });
}
function PlaceList({
  places,
  selectedId = null,
  onSelect,
  meta
}) {
  return /* @__PURE__ */ jsx12("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    },
    children: places.map((place) => {
      const on = place.id === selectedId;
      return /* @__PURE__ */ jsx12("li", {
        children: /* @__PURE__ */ jsxs12("button", {
          type: "button",
          className: "pui-place",
          "aria-pressed": on,
          onClick: () => onSelect?.(on ? null : place.id),
          children: [
            /* @__PURE__ */ jsx12(MarkerGlyph, {
              kind: place.kind,
              tone: place.tone
            }),
            /* @__PURE__ */ jsxs12("span", {
              className: "pui-place__text",
              children: [
                /* @__PURE__ */ jsx12("span", {
                  className: "pui-place__name",
                  children: place.name
                }),
                place.subtitle ? /* @__PURE__ */ jsx12("span", {
                  className: "pui-place__sub",
                  children: place.subtitle
                }) : null
              ]
            }),
            meta ? /* @__PURE__ */ jsx12("span", {
              className: "pui-mono",
              style: { fontSize: 11, color: "var(--pui-muted)" },
              children: meta(place)
            }) : null
          ]
        })
      }, place.id);
    })
  });
}
function PlaceholderBasemap() {
  return /* @__PURE__ */ jsxs12("svg", {
    className: "pui-map__base",
    viewBox: "0 0 1000 880",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx12("path", {
        d: "M0 0H1000V560C920 600 860 640 760 700C700 740 660 800 640 880H0Z",
        fill: "var(--pui-map-land)"
      }),
      /* @__PURE__ */ jsx12("path", {
        d: "M0 300C200 260 300 430 480 400S760 330 1000 470",
        fill: "none",
        stroke: "var(--pui-map-water)",
        strokeWidth: "34",
        strokeLinecap: "round"
      }),
      /* @__PURE__ */ jsx12("rect", {
        x: "560",
        y: "120",
        width: "140",
        height: "90",
        rx: "18",
        fill: "var(--pui-map-park)"
      }),
      /* @__PURE__ */ jsx12("rect", {
        x: "120",
        y: "520",
        width: "110",
        height: "140",
        rx: "18",
        fill: "var(--pui-map-park)"
      }),
      /* @__PURE__ */ jsx12("rect", {
        x: "380",
        y: "560",
        width: "90",
        height: "70",
        rx: "14",
        fill: "var(--pui-map-park)"
      }),
      /* @__PURE__ */ jsxs12("g", {
        fill: "none",
        stroke: "var(--pui-map-road)",
        strokeLinecap: "round",
        children: [
          /* @__PURE__ */ jsx12("path", {
            d: "M0 480H640L760 700",
            strokeWidth: "8"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M460 0V880",
            strokeWidth: "8"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M0 160C300 140 600 100 1000 200",
            strokeWidth: "6"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M260 0 220 880",
            strokeWidth: "4"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M700 0 760 560",
            strokeWidth: "4"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M0 740H560",
            strokeWidth: "4"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M840 220 900 560",
            strokeWidth: "3"
          })
        ]
      }),
      /* @__PURE__ */ jsxs12("g", {
        stroke: "var(--pui-map-road)",
        strokeWidth: "1.5",
        opacity: "0.8",
        children: [
          /* @__PURE__ */ jsx12("path", {
            d: "M360 440V720M400 440V720M520 440V720M560 440V720M300 520H620M300 600H620M300 660H620"
          }),
          /* @__PURE__ */ jsx12("path", {
            d: "M80 40V240M140 40V240M200 40V250M320 40V280M380 40V300M40 90H440M40 220H440"
          })
        ]
      })
    ]
  });
}
// src/shell/Shell.tsx
import {
  Children,
  useId as useId5
} from "react";
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
function AppShell({
  topbar,
  sidebar,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs13("div", {
    className: cx("pui-shell", className),
    children: [
      topbar,
      /* @__PURE__ */ jsxs13("div", {
        className: "pui-shell__body",
        children: [
          sidebar,
          /* @__PURE__ */ jsx13("main", {
            className: "pui-main",
            children
          })
        ]
      })
    ]
  });
}
function TopBar({ children }) {
  return /* @__PURE__ */ jsx13("header", {
    className: "pui-topbar",
    children
  });
}
function Sidebar({
  label,
  children
}) {
  return /* @__PURE__ */ jsx13("nav", {
    "aria-label": label,
    className: "pui-sidebar",
    children
  });
}
function NavSection({
  heading,
  children
}) {
  const id = useId5();
  return /* @__PURE__ */ jsxs13("div", {
    style: { display: "flex", flexDirection: "column", gap: 2 },
    children: [
      heading ? /* @__PURE__ */ jsx13("span", {
        id,
        className: "pui-overline",
        style: { padding: "4px 10px" },
        children: heading
      }) : null,
      /* @__PURE__ */ jsx13("ul", {
        className: "pui-nav-list",
        "aria-labelledby": heading ? id : undefined,
        children: Children.map(children, (child) => child ? /* @__PURE__ */ jsx13("li", {
          children: child
        }) : null)
      })
    ]
  });
}
function NavItem({
  icon,
  current = false,
  badge,
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsxs13("a", {
    "aria-current": current ? "page" : undefined,
    className: cx("pui-nav-item", className),
    ...rest,
    children: [
      icon,
      /* @__PURE__ */ jsx13("span", {
        className: "pui-nav-item__label",
        children
      }),
      badge !== undefined ? /* @__PURE__ */ jsx13("span", {
        className: "pui-mono",
        style: { fontSize: 11, color: "var(--pui-muted)" },
        children: badge
      }) : null
    ]
  });
}
// src/theme/ThemeProvider.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState as useState5
} from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var ThemeContext = createContext({
  mode: "dark",
  preference: "dark"
});
function systemMode() {
  if (typeof window === "undefined" || !window.matchMedia)
    return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function PortableProvider({
  mode = "dark",
  className,
  children,
  ...rest
}) {
  const [system, setSystem] = useState5(systemMode);
  useEffect(() => {
    if (mode !== "system" || !window.matchMedia)
      return;
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const update = () => setSystem(query.matches ? "light" : "dark");
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [mode]);
  const resolved = mode === "system" ? system : mode;
  return /* @__PURE__ */ jsx14(ThemeContext.Provider, {
    value: { mode: resolved, preference: mode },
    children: /* @__PURE__ */ jsx14("div", {
      "data-pui-theme": resolved,
      className: cx("pui-root", className),
      ...rest,
      children
    })
  });
}
function useTheme() {
  return useContext(ThemeContext);
}
export {
  Alert,
  AlertCircleIcon,
  AlertTriangleIcon,
  AppShell,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AtIcon,
  Avatar,
  AvatarStack,
  Badge,
  BarChart,
  BellIcon,
  BoardIcon,
  BoldIcon,
  BuildingIcon,
  Button,
  ChannelList,
  ChartCard,
  ChartIcon,
  ChatDivider,
  ChatEvent,
  CheckCircleIcon,
  CheckIcon,
  Checkbox,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CodeIcon,
  CommentIcon,
  Composer,
  Counter,
  DataTable,
  EditIcon,
  EmptyState,
  EyeIcon,
  Field,
  FitIcon,
  FlameIcon,
  Heatmap,
  HomeIcon,
  Icon,
  IconButton,
  InfoIcon,
  IssueCard,
  IssueTypeIcon,
  KanbanBoard,
  Kbd,
  Legend,
  LineChart,
  LinkIcon,
  ListIcon,
  MapControls,
  MapIcon,
  MapPopoverCard,
  MapScale,
  MapView,
  MarkerGlyph,
  Menu,
  MenuItem,
  MenuSeparator,
  Message,
  MessageList,
  MinusIcon,
  MoreIcon,
  NavItem,
  NavSection,
  PaperclipIcon,
  PeopleList,
  PinIcon,
  PlaceList,
  PlaceholderBasemap,
  PlusIcon,
  PortableProvider,
  PresenceDot,
  PresenceLabel,
  PriorityIcon,
  Progress,
  Radio,
  SearchIcon,
  SearchInput,
  SegmentedControl,
  SelectField,
  SendIcon,
  Sidebar,
  Skeleton,
  Sparkline,
  SpinnerIcon,
  StackedBar,
  StatTile,
  StatusBadge,
  StatusIcon,
  Switch,
  TableIcon,
  Tabs,
  Tag,
  TextAreaField,
  TextField,
  Toast,
  ToastRegion,
  Tooltip,
  TopBar,
  UserIcon,
  cssVar,
  cx,
  initialsOf,
  markerColor,
  niceTicks,
  palette,
  seriesColor,
  statusMeta,
  useControllable,
  useTheme
};

//# debugId=2024DD18FABF496564756E2164756E21
//# sourceMappingURL=index.js.map
