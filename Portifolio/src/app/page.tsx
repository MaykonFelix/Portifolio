import { IntroVideo } from "@/components/intro-video";
import { ScrollProgress } from "@/components/scroll-progress";
import {
    Career,
    Contact,
    Hero,
    Pipeline,
    Projects,
    Stack,
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <SiteHeader />
            <main>
                <Hero />
                <IntroVideo />
                <Pipeline />
                <Stack />
                <Career />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
