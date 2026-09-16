import { Check, Minus } from "lucide-react";
import { coverageComparisonData } from "../constants/warranty";

const CoverageSection = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Compare Coverage
        </h2>
        <p className="mt-2 text-xs font-medium text-slate-500">
          Find alternative tiers matched to customized journey configurations.
        </p>
      </div>

      <div className="hidden sm:block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold tracking-wider text-slate-700 uppercase">
              <th className="p-4 sm:p-5 w-2/5">COVERAGE</th>
              <th className="p-4 sm:p-5 text-center w-1/5">BASIC</th>
              <th className="p-4 sm:p-5 text-center w-1/5">STANDARD</th>
              <th className="p-4 sm:p-5 text-center w-1/5">PREMIUM</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {coverageComparisonData.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="p-4 sm:p-5 font-semibold text-slate-800">
                  {row.feature}
                </td>
                <td className="p-4 sm:p-5 text-center">
                  {row.basic ? (
                    <Check className="mx-auto h-4 w-4 text-orange-500 stroke-[3]" />
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-slate-300" />
                  )}
                </td>
                <td className="p-4 sm:p-5 text-center">
                  {row.standard ? (
                    <Check className="mx-auto h-4 w-4 text-orange-500 stroke-[3]" />
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-slate-300" />
                  )}
                </td>
                <td className="p-4 sm:p-5 text-center">
                  {row.premium ? (
                    <Check className="mx-auto h-4 w-4 text-orange-500 stroke-[3]" />
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-slate-300" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block sm:hidden space-y-4">
        {coverageComparisonData.map((row, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="border-b border-slate-100 pb-2 mb-3">
              <span className="text-sm font-bold text-slate-900">
                {row.feature}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
              <div
                className={`p-2 rounded-lg border ${row.basic ? "bg-orange-50/50 border-orange-100 text-orange-700" : "bg-slate-50 border-slate-100 text-slate-400"}`}
              >
                Basic
              </div>
              <div
                className={`p-2 rounded-lg border ${row.standard ? "bg-orange-50/50 border-orange-100 text-orange-700" : "bg-slate-50 border-slate-100 text-slate-400"}`}
              >
                Standard
              </div>
              <div
                className={`p-2 rounded-lg border ${row.premium ? "bg-orange-50/50 border-orange-100 text-orange-700" : "bg-slate-50 border-slate-100 text-slate-400"}`}
              >
                Premium
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageSection;
