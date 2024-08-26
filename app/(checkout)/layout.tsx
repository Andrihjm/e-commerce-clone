import Header from "@/components/shared/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header hideSearch={true} />
      {children}
    </div>
  );
};

export default layout;
