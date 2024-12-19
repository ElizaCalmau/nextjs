import { openSans } from "@/app/ui/fonts";

export default function IdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`bg-slate-200 ${openSans.className} antialiased`}>
      {children}
    </div>
  );
}
