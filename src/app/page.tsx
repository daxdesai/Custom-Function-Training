import { Audience } from "@/components/Audience";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InterviewPreparation } from "@/components/InterviewPreparation";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { LeadPrompt } from "@/components/LeadPrompt";
import { LeadProvider } from "@/components/LeadProvider";
import { LearningJourney } from "@/components/LearningJourney";
import { LearningRoadmap } from "@/components/LearningRoadmap";
import { Navbar } from "@/components/Navbar";
import { PracticalAssignments } from "@/components/PracticalAssignments";
import { Testimonials } from "@/components/Testimonials";
import { TrainingProcess } from "@/components/TrainingProcess";
import { TrustBar } from "@/components/TrustBar";
import { WhyLearn } from "@/components/WhyLearn";

export default function HomePage() {
  return (
    <LeadProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Benefits />
        <LearningRoadmap />
        <LearningJourney />
        <PracticalAssignments />
        <InterviewPreparation />
        <Audience />
        <WhyLearn />
        <TrainingProcess />
        <Testimonials />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <LeadPrompt />
      <JsonLd />
    </LeadProvider>
  );
}
