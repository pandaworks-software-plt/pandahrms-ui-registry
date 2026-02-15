import * as React from "react";
import { ChevronRight, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { AppShellProps, NavItem } from "@/components/ui/app-shell-types";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function NavItemFlat({ item }: { item: NavItem }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={item.active}
        tooltip={item.label}
      >
        <a href={item.href}>
          {item.icon && <item.icon />}
          <span>{item.label}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function NavItemCollapsible({ item }: { item: NavItem }) {
  const hasActiveChild = item.items?.some((sub) => sub.active);

  return (
    <Collapsible
      asChild
      defaultOpen={item.active || hasActiveChild}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            isActive={item.active}
            tooltip={item.label}
          >
            {item.icon && <item.icon />}
            <span>{item.label}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((sub) => (
              <SidebarMenuSubItem key={sub.href}>
                <SidebarMenuSubButton asChild isActive={sub.active}>
                  <a href={sub.href}>
                    {sub.icon && <sub.icon />}
                    <span>{sub.label}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function AppShell({ branding, navigation, user, header, children }: AppShellProps) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild tooltip={branding.name}>
                <a href={branding.href ?? "/"}>
                  {branding.logo ? (
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <img
                        src={branding.logo}
                        alt={branding.name}
                        className="size-4"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-sm font-semibold">
                      {branding.name.charAt(0)}
                    </div>
                  )}
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {branding.name}
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) =>
                  item.items && item.items.length > 0 ? (
                    <NavItemCollapsible key={item.href} item={item} />
                  ) : (
                    <NavItemFlat key={item.href} item={item} />
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {user && (
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      tooltip={user.name}
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="size-8 rounded-lg">
                        {user.avatar && (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        )}
                        <AvatarFallback className="rounded-lg">
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        {user.email && (
                          <span className="truncate text-xs">
                            {user.email}
                          </span>
                        )}
                      </div>
                      <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="size-8 rounded-lg">
                          {user.avatar && (
                            <AvatarImage
                              src={user.avatar}
                              alt={user.name}
                            />
                          )}
                          <AvatarFallback className="rounded-lg">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">
                            {user.name}
                          </span>
                          {user.email && (
                            <span className="truncate text-xs">
                              {user.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    {user.actions && user.actions.length > 0 && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          {user.actions.map((action) => (
                            <DropdownMenuItem
                              key={action.label}
                              className={cn(
                                action.variant === "destructive" &&
                                  "text-destructive focus:text-destructive"
                              )}
                              onClick={action.onClick}
                              asChild={!!action.href}
                            >
                              {action.href ? (
                                <a href={action.href}>
                                  {action.icon && <action.icon />}
                                  {action.label}
                                </a>
                              ) : (
                                <>
                                  {action.icon && <action.icon />}
                                  {action.label}
                                </>
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        )}

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {header && (
              <>
                <Separator orientation="vertical" className="mr-2 h-4" />
                {header}
              </>
            )}
          </div>
        </header>
        <div className="flex-1 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { AppShell };
export type { AppShellProps, NavItem, UserAction } from "@/components/ui/app-shell-types";
