import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
            <span className="text-lg font-bold text-white">AB</span>
          </div>
          <span className="text-xl font-bold">AutoBalance</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pricing
          </Link>
          <Link
            href="#how-it-works"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            How It Works
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Dashboard
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
