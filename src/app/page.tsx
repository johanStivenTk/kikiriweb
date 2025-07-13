import FooterHeader from "./components/FooterHeader";
import PageBody from "./components/PageBody";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <PageBody />
      <FooterHeader />
    </div>
  );
}
