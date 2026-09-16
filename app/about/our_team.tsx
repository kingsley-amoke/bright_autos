"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Medal } from "lucide-react";
import { TeamMember } from "../types/team_member";

export default function OurTeam({
  members = [],
  categories,
  showAllTab = true,
}: {
  members: Array<TeamMember>;
  categories: Array<String>;
  showAllTab?: boolean;
}) {
  const derivedCategories = useMemo(() => {
    if (categories?.length) return categories;
    const seen: Array<string> = [];
    for (const m of members) {
      if (m.category && !seen.includes(m.category)) seen.push(m.category);
    }
    return seen;
  }, [categories, members]);

  const tabs = showAllTab ? ["All", ...derivedCategories] : derivedCategories;
  const [activeTab, setActiveTab] = useState(tabs[0] ?? "All");

  const visibleMembers = useMemo(() => {
    if (activeTab === "All") return members;
    return members.filter((m) => m.category === activeTab);
  }, [members, activeTab]);

  return (
    <section className="w-full bg-slate-50 px-6 py-16">
      {tabs.length > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab, i) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleMembers.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-300">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 45vw, 220px"
            className="object-cover"
          />
        )}
      </div>

      <div className="border-t border-slate-100 px-1 pt-3">
        <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>

        <p className="mt-0.5 text-xs font-semibold text-orange-500">
          {member.role}
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <Medal className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} />
          <span>{member.experience}</span>
        </div>
      </div>
    </div>
  );
}
