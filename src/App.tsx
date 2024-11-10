import "./App.css";
import {
  ActivityLayout,
  Header,
  HotelLayout,
  ItineraryLayout,
  Sidebar,
  TripDetailsLayout,
} from "@/components";
import { AppProvider } from "@/context";

function App() {
  return (
    <AppProvider>
      <section>
        <Header />
        <section className="p-10 flex w-full gap-16">
          <Sidebar />
          <main className="bg-white grow px-8 flex flex-col gap-4 rounded pt-8">
            <TripDetailsLayout />
            <ItineraryLayout />
            <HotelLayout />
            <ActivityLayout />
          </main>
        </section>
      </section>
    </AppProvider>
  );
}

export default App;
