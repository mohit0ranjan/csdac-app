import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspace Activation — CSDAC Internship Program",
  description:
    "Complete your workspace activation to provision your dedicated cloud environment for the CSDAC Internship Program.",
};

export default function ActivationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full overflow-hidden bg-white">{children}</div>
  );
}
