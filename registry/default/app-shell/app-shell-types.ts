import type { LucideIcon } from "lucide-react";

export interface AppShellProps {
  branding: {
    name: string;
    logo?: string;
    href?: string;
  };
  navigation: NavItem[];
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    actions?: UserAction[];
  };
  header?: React.ReactNode;
  navbarActions?: React.ReactNode;
  children: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  active?: boolean;
  items?: NavItem[];
}

export interface UserAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: "default" | "destructive";
}
