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
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { sideBarData } from '@/components/Sidebar/SidebarData';
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
              {sideBarData({ role }).map((item, index) => {
                if (item.role.includes(role)) {
                  return (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                      >
                        <a href={item.url}>
                          <item.icon color={'#00B88C'} />
                          <span
                          // className={`${
                          //   pathname === item.url && 'text-primaryGreen-500'
                          // } `}
                          >
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                } else {
                  return null;
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
