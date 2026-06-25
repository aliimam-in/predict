import { ScrollStory } from "@/components/scroll-video-background";
import { ScrollTextOverlay } from "@/components/scroll-text";
import { LogoShine } from "@/components/logo";

export default function Page() {
  return (
    <div className="bg-black">

      {/* VIDEO SCROLL SECTION */}
      <ScrollStory />

      {/* LOGO + COMING SOON — video ke baad */}
      <section className="flex min-h-screen items-center justify-center">
        <LogoShine />
      </section>

    </div>
  );
}