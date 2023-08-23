import HeroCard from "./heroCard";
import Footer from "./Footer";

export default function SearchDisplay({ listing, id }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroCard />
      </div>
      <Footer />
    </div>
  );
}
