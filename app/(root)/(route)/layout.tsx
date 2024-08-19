import Header from "@/components/shared/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
};

export default layout;
