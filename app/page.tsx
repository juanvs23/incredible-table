import { Footer, Header, Modal, Table } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="md:pt-15  py-10  dark:bg-gray-800 xl:pt-20 xl:pb-20"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <h1 className="text-center text-3xl font-bold text-neutral-900 dark:text-neutral-50 md:text-6xl lg:text-7xl ">
          Incredible Rooms
        </h1>
        <Table classProps="min-h-[60vh]" />
      </main>
      <div className="px-2 pb-2 dark:bg-gray-800">
        <Footer />
      </div>
      <Modal />
    </>
  );
}
