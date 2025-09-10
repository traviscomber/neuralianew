"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthButton } from "@/components/auth/auth-button"
import {
  Menu,
  Home,
  Settings,
  BarChart3,
  Bell,
  Target,
  Monitor,
  Shield,
  Users,
  Activity,
  Clock,
  TrendingUp,
  Database,
  Cpu,
  Globe,
  Smartphone,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    description: "Return to the main landing page",
  },
  {
    title: "Monitoring",
    icon: Monitor,
    description: "Performance monitoring and analytics",
    items: [
      {
        title: "Performance Dashboard",
        href: "/logo-performance-monitor",
        icon: Activity,
        description: "Real-time logo performance monitoring",
        badge: "Live",
      },
      {
        title: "Alert Management",
        href: "/performance-alerts",
        icon: Bell,
        description: "Configure and manage performance alerts",
        badge: "New",
      },
      {
        title: "Custom Thresholds",
        href: "/custom-thresholds",
        icon: Target,
        description: "Create custom alert thresholds with guided wizard",
        badge: "Smart",
      },
      {
        title: "Advanced Metrics",
        href: "/advanced-metrics",
        icon: BarChart3,
        description: "Detailed performance analytics and insights",
      },
    ],
  },
  {
    title: "Testing",
    icon: Shield,
    description: "Quality assurance and testing tools",
    items: [
      {
        title: "Site Verification",
        href: "/site-verification",
        icon: Shield,
        description: "Comprehensive site health verification",
      },
      {
        title: "Accessibility Test",
        href: "/accessibility-test",
        icon: Users,
        description: "WCAG compliance and accessibility testing",
      },
      {
        title: "Mobile Testing",
        href: "/mobile-responsiveness-test",
        icon: Smartphone,
        description: "Mobile responsiveness and touch testing",
      },
      {
        title: "Performance Audit",
        href: "/lighthouse-audit",
        icon: TrendingUp,
        description: "Lighthouse performance auditing",
      },
    ],
  },
  {
    title: "System",
    icon: Settings,
    description: "System administration and configuration",
    items: [
      {
        title: "System Health",
        href: "/system-check",
        icon: Cpu,
        description: "System health monitoring and diagnostics",
      },
      {
        title: "Database Monitor",
        href: "/admin",
        icon: Database,
        description: "Database performance and health monitoring",
        requiresAuth: true,
      },
      {
        title: "Deployment Status",
        href: "/deployment-monitor",
        icon: Globe,
        description: "Monitor deployment status and health",
      },
      {
        title: "Timezone Config",
        href: "/timezone-verification",
        icon: Clock,
        description: "Timezone configuration and verification",
      },
    ],
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-black/95 dark:bg-black/95 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-black/80 dark:bg-black/80 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N3</span>
            </div>
            <span className="font-bold text-xl text-white">N3uralia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "h-9 px-3 text-sm font-medium transition-colors text-white",
                            "hover:bg-slate-800 hover:text-white",
                            "focus:bg-slate-800 focus:text-white",
                            "data-[active]:bg-slate-800 data-[active]:text-white",
                            "data-[state=open]:bg-slate-800 data-[state=open]:text-white",
                          )}
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <div className="row-span-3">
                              <NavigationMenuLink asChild>
                                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 p-6 no-underline outline-none focus:shadow-md">
                                  <item.icon className="h-6 w-6 text-slate-600" />
                                  <div className="mb-2 mt-4 text-lg font-medium text-slate-900">{item.title}</div>
                                  <p className="text-sm leading-tight text-slate-600">{item.description}</p>
                                </div>
                              </NavigationMenuLink>
                            </div>
                            <div className="grid gap-2">
                              {item.items.map((subItem) => (
                                <NavigationMenuLink key={subItem.title} asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white",
                                      "hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white",
                                      isActive(subItem.href) && "bg-slate-800 text-white",
                                    )}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-2">
                                        <subItem.icon className="w-4 h-4" />
                                        <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                      </div>
                                      {subItem.badge && (
                                        <Badge
                                          variant={
                                            subItem.badge === "Live"
                                              ? "default"
                                              : subItem.badge === "New"
                                                ? "destructive"
                                                : subItem.badge === "Smart"
                                                  ? "secondary"
                                                  : "outline"
                                          }
                                          className="text-xs"
                                        >
                                          {subItem.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="line-clamp-2 text-xs leading-snug text-slate-600">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors text-white",
                            "hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white",
                            "disabled:pointer-events-none disabled:opacity-50",
                            isActive(item.href) && "bg-slate-800 text-white",
                          )}
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <AuthButton />

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xs">N3</span>
                    </div>
                    <span className="text-white">N3uralia Navigation</span>
                  </SheetTitle>
                  <SheetDescription className="text-white">Access all monitoring and testing tools</SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      {item.items ? (
                        <div>
                          <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white">
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "flex items-center justify-between space-x-2 px-3 py-2 text-sm rounded-md transition-colors text-white",
                                  "hover:bg-slate-800 hover:text-white",
                                  isActive(subItem.href) && "bg-slate-800 text-white",
                                )}
                              >
                                <div className="flex items-center space-x-2">
                                  <subItem.icon className="w-4 h-4" />
                                  <span>{subItem.title}</span>
                                </div>
                                {subItem.badge && (
                                  <Badge
                                    variant={
                                      subItem.badge === "Live"
                                        ? "default"
                                        : subItem.badge === "New"
                                          ? "destructive"
                                          : subItem.badge === "Smart"
                                            ? "secondary"
                                            : "outline"
                                    }
                                    className="text-xs"
                                  >
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center space-x-2 px-3 py-2 text-sm rounded-md transition-colors text-white",
                            "hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white",
                            "disabled:pointer-events-none disabled:opacity-50",
                            isActive(item.href) && "bg-slate-800 text-white",
                          )}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
