import Header from "@/components/shared/header";

const layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
};

export default layout;
