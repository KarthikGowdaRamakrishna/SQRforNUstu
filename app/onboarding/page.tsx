import { OnboardingTabs } from "@/components/onboarding-tabs"

export default function OnboardingPage() {
  return (
    <div className="container mx-auto p-20">
      <h1 className="text-2xl font-bold mb-4">Welcome! Choose your role:</h1>
      <OnboardingTabs />
    </div>
  )
}