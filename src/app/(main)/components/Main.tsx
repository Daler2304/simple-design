import Add from "@/components/ADD";
import DesignProject from "@/components/DesignProject";
import Faq from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurServices from "@/components/OurServices";
import OurStyles from "@/components/OurStyles";
import Planning from "@/components/Planning";
import RoomsDesign from "@/components/RoomsDesign";
import Test from "@/components/Test";

export default function Main() {
    return (
        <main className="sm:mt-8 w-full">
            <Hero />
            <div className="bg-gray-50">
                <HowItWorks />
                {/* Large screen */}
                <div className="hidden md:block">
                    <RoomsDesign />
                </div>
                {/* Mobile */}
                <div className="md:hidden">
                    <OurServices />
                    <Planning />
                    <DesignProject />
                    <Add />
                    <OurStyles />
                    <Test />
                    <Faq />
                </div>
            </div>
        </main>
    );
}
