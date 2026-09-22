import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import RoomsDesign from "./RoomsDesign";

export default function Main() {
    return (
        <main className="mt-8 w-full">
            <Hero />
            <div className="bg-gray-50">
                <HowItWorks />
                <RoomsDesign />
            </div>
        </main>
    );
}
