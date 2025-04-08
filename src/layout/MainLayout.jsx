import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-zinc-900 overflow-y-scroll no-scrollbar no-select">
      <Outlet />
    </div>
  );
};

export default MainLayout;
