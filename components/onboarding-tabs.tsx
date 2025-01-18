"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function OnboardingTabs() {
  return (
    <Tabs defaultValue="candidate" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="candidate">Candidate</TabsTrigger>
        <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
      </TabsList>
      <TabsContent value="candidate">
        <Card>
          <CardHeader>
            <CardTitle>Join as a Candidate</CardTitle>
            <CardDescription>
              Create your candidate profile to find job opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="candidate-name">Full Name</Label>
              <Input id="candidate-name" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="candidate-email">Email</Label>
              <Input id="candidate-email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="candidate-skills">Top Skills (comma-separated)</Label>
              <Input id="candidate-skills" placeholder="JavaScript, React, Node.js" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create Candidate Profile</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="recruiter">
        <Card>
          <CardHeader>
            <CardTitle>Join as a Recruiter</CardTitle>
            <CardDescription>
              Set up your recruiter account to find top talent.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="recruiter-name">Full Name</Label>
              <Input id="recruiter-name" placeholder="Jane Smith" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="recruiter-email">Email</Label>
              <Input id="recruiter-email" type="email" placeholder="jane@company.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="recruiter-company">Company Name</Label>
              <Input id="recruiter-company" placeholder="Acme Inc." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create Recruiter Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

