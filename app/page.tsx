import { ScrollStory } from "@/components/scroll-video-background";
import Logo from "../public/predict.svg";
import PredictLogo from "@/components/logo";
import FluidGradientLogo from "@/components/fluid-gradient-text";
import FluidGradient from "@/components/fluid-gradient-text";

export default function Page() {
  return (
    <div className="bg-black">

      {/* VIDEO SCROLL SECTION */}
      <ScrollStory />

      {/* LOGO + COMING SOON — video ke baad */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-6">
        <PredictLogo className="w-[600px]" />

        <p className="text-2xl font-medium pt-6 opacity-60 tracking-[0.3em] text-white uppercase">
          Coming Soon!
        </p>
      </section>

    </div>
  );
}