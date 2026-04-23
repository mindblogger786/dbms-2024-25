import React from "react";
import type { Visual, FlowchartStep } from "../data/questions";

interface VisualBlockProps {
  visual: Visual;
}

const shapeStyles: Record<FlowchartStep["shape"], string> = {
  oval: "rounded-full px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg",
  rect: "rounded-xl px-6 py-3 bg-slate-700 border border-slate-600 text-slate-100 text-sm shadow-md",
  diamond: "rotate-0 px-5 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-amber-200 text-sm font-semibold rounded-xl",
  parallelogram: "px-6 py-2.5 bg-green-500/20 border border-green-500/50 text-green-300 text-sm rounded-xl",
};

export const VisualBlock: React.FC<VisualBlockProps> = ({ visual }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden my-6">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-slate-700">
        <span className="text-lg">
          {visual.type === "table" ? "📊" : visual.type === "flowchart" ? "🔄" : "🗂️"}
        </span>
        <span className="text-slate-200 font-semibold text-sm">{visual.title}</span>
        <span className="ml-auto text-xs text-slate-500 capitalize px-2 py-0.5 rounded bg-slate-700 border border-slate-600">
          {visual.type === "code-diagram" ? "diagram" : visual.type}
        </span>
      </div>

      <div className="p-5">
        {/* TABLE */}
        {visual.type === "table" && visual.tableData && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700">
                  {visual.tableData.headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-left text-blue-300 font-semibold text-xs uppercase tracking-wider border-b border-slate-600 first:rounded-tl-lg last:rounded-tr-lg"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visual.tableData.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-b border-slate-700/50 ${ri % 2 === 0 ? "bg-slate-800/40" : "bg-slate-800/20"} hover:bg-slate-700/30 transition-colors`}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-3 text-slate-300 text-xs leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* DIAGRAM */}
        {visual.type === "diagram" && visual.diagramLines && (
          <div className="overflow-x-auto">
            <pre className="font-mono text-xs text-green-300 leading-6 bg-slate-900 rounded-xl p-4 border border-slate-700 min-w-max">
              {visual.diagramLines.join("\n")}
            </pre>
          </div>
        )}

        {/* FLOWCHART */}
        {visual.type === "flowchart" && visual.flowchartSteps && (
          <div className="flex flex-col items-center gap-0">
            {visual.flowchartSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center">
                  <div className={`${shapeStyles[step.shape]} text-center max-w-xs`}>
                    <div>{step.label}</div>
                    {step.sublabel && (
                      <div className="text-[11px] opacity-75 mt-0.5">{step.sublabel}</div>
                    )}
                    {step.shape === "diamond" && (
                      <div className="flex justify-center gap-6 mt-1 text-[10px]">
                        <span className="text-green-400">✓ Yes</span>
                        <span className="text-red-400">✗ No</span>
                      </div>
                    )}
                  </div>
                </div>
                {idx < visual.flowchartSteps!.length - 1 && (
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-slate-600"></div>
                    <div className="text-blue-400 text-xs">▼</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {visual.description && (
          <p className="mt-4 text-slate-400 text-xs leading-relaxed italic">{visual.description}</p>
        )}
      </div>
    </div>
  );
};
