import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-screen-2xl px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl pb-2 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Automated Crypto Portfolio Rebalancing
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Set your target allocations and let AutoBalance handle the rest.
              Keep your portfolio optimized without the hassle of manual
              rebalancing.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base px-8">
              <Link href="/auth/sign-up">Get Started Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8"
            >
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free plan available
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container max-w-screen-2xl px-4 py-24 bg-muted/50"
      >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Everything you need to keep your crypto portfolio balanced and
              optimized.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle>Automated Rebalancing</CardTitle>
                <CardDescription>
                  Set your target allocations and let our platform automatically
                  rebalance your portfolio on your schedule.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <CardTitle>Secure & Safe</CardTitle>
                <CardDescription>
                  Powered by Coinbase Developer Platform. Your funds stay in
                  your wallet - we never take custody.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Choose daily, weekly, or custom schedules. Rebalance when it
                  makes sense for your strategy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle>Performance Tracking</CardTitle>
                <CardDescription>
                  Track your rebalances, fees, and portfolio performance over
                  time with detailed analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>
                  Get notified when rebalances complete, with detailed summaries
                  sent straight to your inbox.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Crypto & Fiat Payments</CardTitle>
                <CardDescription>
                  Pay with Stripe or Coinbase Pay. Accept both fiat and crypto
                  for subscriptions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="container max-w-screen-2xl px-4 py-24"
      >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Get started with AutoBalance in three simple steps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold">Connect Your Wallet</h3>
              <p className="text-muted-foreground">
                Securely connect your Coinbase wallet using OAuth. Your funds
                stay in your control.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold">Set Your Targets</h3>
              <p className="text-muted-foreground">
                Define your desired portfolio allocation percentages for each
                token.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold">Automate & Relax</h3>
              <p className="text-muted-foreground">
                Let AutoBalance rebalance your portfolio automatically on your
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="container max-w-screen-2xl px-4 py-24 bg-muted/50"
      >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Choose the plan that works for you. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Free Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Manual rebalancing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    1 portfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Basic analytics
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For serious investors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <strong>Automated rebalancing</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Weekly schedules
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Email alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    3 portfolios
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>For power users</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$30</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <strong>Custom schedules</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited portfolios
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Multi-wallet support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Performance tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-screen-2xl px-4 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-12 text-center text-white">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Optimise Your Portfolio?
            </h2>
            <p className="text-lg text-white/90">
              Join hundreds of investors who trust AutoBalance to keep their
              portfolios balanced.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="text-base px-8 bg-white text-purple-600 hover:bg-white/90"
              >
                <Link href="/auth/sign-up">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
