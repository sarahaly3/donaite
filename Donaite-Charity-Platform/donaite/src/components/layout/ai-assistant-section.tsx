"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, Search, Lightbulb, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AIAssistantSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI-Powered Recommendations</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Find Your Perfect Cause Match
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[600px]">
                Our AI assistant analyzes global needs and your interests to connect you with the most meaningful giving opportunities.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1.5">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium">Personalized Quiz</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Answer a few questions about your interests and values to find your perfect charity match.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1.5">
                    <Search className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium">Smart Filters</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our AI filters help you navigate thousands of charities to find those most aligned with your values.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1.5">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium">Urgent Need Alerts</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stay informed about emerging crises and urgent causes that need immediate support.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1.5">
                    <BrainCircuit className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium">Impact Analysis</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get AI-generated reports on how your donations make a difference and where they could help most.
                </p>
              </div>
            </div>

            <div>
              <Button asChild>
                <Link href="/ai-assistant">
                  Get AI Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
              <CardContent className="p-0">
                <div className="bg-muted p-3 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">Donaite AI Assistant</span>
                  </div>
                  <div className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary font-medium">Active</div>
                </div>

                <div className="p-4 space-y-4 min-h-[350px] bg-card">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 bg-muted p-3 rounded-lg rounded-tl-none">
                      <p className="text-sm">Hello! I'm your Donaite AI Assistant. I can help you find charities that match your values and interests. What causes are you passionate about?</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                      <p className="text-sm">I care about education and climate change, especially initiatives that help vulnerable communities.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 bg-muted p-3 rounded-lg rounded-tl-none">
                      <p className="text-sm">Great choices! Based on your interests, I'd recommend these organizations:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Global Education Initiative (92% match)</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Climate Resilience Fund (89% match)</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Educational Climate Alliance (87% match)</span>
                        </li>
                      </ul>
                      <p className="mt-2 text-sm">Would you like to learn more about any of these?</p>
                    </div>
                  </div>

                  <div className="border-t pt-3 mt-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Tell me more about your interests..."
                        className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none"
                        disabled
                      />
                      <Button size="sm" disabled>
                        <Sparkles className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
