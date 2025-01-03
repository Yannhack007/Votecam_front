'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { sideBarData } from '@/components/Sidebar/SidebarData';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import NotFoundPage from './not-found';
export const AppSidebar = ({ role }: { role: string }) => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton className="hover:bg-transparent" asChild>
          <a>
            <Image
              src="/votecamLogo.svg"
              alt="Votecam Logo"
              width={36}
              height={36}
            />
            <span className="logoText text-customBlack-500">VoteCam</span>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarData({ role }).filter((item) => item.role.includes(role))
                .length === 0 ? (
                // Show Not Found page or return null if no valid items exist
                <NotFoundPage />
              ) : (
                sideBarData({ role }).map((item, index) => {
                  if (item.role.includes(role)) {
                    return (
                      <Collapsible
                        key={index}
                        defaultOpen={false}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem>
                          {item.subnav.length > 0 ? (
                            <>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton
                                  isActive={pathname === item.url}
                                >
                                  <item.icon color={'#00B88C'} />
                                  <span className="flex justify-between w-full items-center">
                                    {item.title}
                                    <ChevronDown
                                      size={20}
                                      color="hsl(var(--sidebar-foreground))"
                                    />
                                  </span>
                                </SidebarMenuButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {item.subnav.map((subItem, subIndex) => (
                                    <SidebarMenuSubItem key={subIndex}>
                                      <SidebarMenuButton
                                        asChild
                                        isActive={pathname === subItem.url}
                                      >
                                        <a href={subItem.url}>
                                          <span>{subItem.title}</span>
                                        </a>
                                      </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </>
                          ) : (
                            <SidebarMenuButton
                              asChild
                              isActive={pathname === item.url}
                            >
                              <a href={item.url}>
                                <item.icon color={'#00B88C'} />
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          )}
                        </SidebarMenuItem>
                      </Collapsible>
                    );
                  }
                  return null; // Ensures map returns nothing for invalid roles
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
