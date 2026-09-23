import Add from "./ADD";
import DesignProject from "./DesignProject";
import Faq from "./FAQ";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";
import OurStyles from "./OurStyles";
import Planning from "./Planning";
import RoomsDesign from "./RoomsDesign";
import Test from "./Test";

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
