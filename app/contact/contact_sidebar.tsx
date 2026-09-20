import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { OpeningHour } from "../types/opening_hour";

export default function ContactSidebar({
  phone,
  email,
  schedule,
  className = "",
}: {
  phone: string;
  email: string;
  schedule: Array<OpeningHour>;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <HotlineCard phone={phone} email={email} />
      <HoursCard schedule={schedule} />
      <GuaranteeCard />
    </div>
  );
}

function HotlineCard({ phone, email }: { phone: string; email: string }) {
  return (
    <div className="rounded-2xl bg-[#111827] p-5 text-white">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20">
          <Phone className="h-4 w-4 text-orange-400" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="font-semibold">Direct Sales Hotline</p>

          <p className="mt-0.5 text-slate-400">
            Speak directly with our sales team
          </p>
        </div>
      </div>

      {phone && (
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="mt-4 block text-xl font-bold text-orange-400 hover:text-orange-300"
        >
          {phone}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="mt-1 flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-300"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={2} />
          <span className="break-all">{email}</span>
        </a>
      )}
    </div>
  );
}

function HoursCard({ schedule = [] }: { schedule: Array<OpeningHour> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-slate-400" strokeWidth={2} />

        <p className="font-semibold text-xl text-slate-900">Dealership Hours</p>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {schedule.map((row, i) => {
          const isClosed = row.status === "closed";
          return (
            <div
              key={row.days ?? i}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-slate-500">{row.days}</span>
              <span
                className={`font-medium ${
                  isClosed ? "text-red-500" : "text-slate-700"
                }`}
              >
                {row.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GuaranteeCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-orange-500" strokeWidth={2} />

        <p className="font-semibold text-slate-900">
          Rapid Response Guarantee"
        </p>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        If a specific vehicle isn't listed through this form, one of our
        specialists will respond within one business day.
      </p>
    </div>
  );
}
