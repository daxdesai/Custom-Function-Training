import type { IconName } from "@/lib/content";
import {
  BookOpen,
  Braces,
  Bug,
  Check,
  ClipboardList,
  Code2,
  Compass,
  Database,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  TestTubeDiagonal,
  Users,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<IconName, LucideIcon> = {
  video: Video,
  code: Code2,
  clipboard: ClipboardList,
  workflow: Workflow,
  bug: Bug,
  review: ScanSearch,
  message: MessageCircle,
  interview: MessagesSquare,
  compass: Compass,
  book: BookOpen,
  braces: Braces,
  database: Database,
  heart: HeartPulse,
  users: Users,
  graduate: GraduationCap,
  shield: ShieldCheck,
  test: TestTubeDiagonal,
  check: Check,
};

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = icons[name];
  return <Glyph className={className} aria-hidden="true" strokeWidth={1.75} />;
}
