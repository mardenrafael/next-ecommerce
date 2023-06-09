import BreadScrum from "@/components/BreadScrum/BreadScrum";
import SideNav from "@/components/SideNav/SideNav";

export default function Dashboard(): JSX.Element {
  return (
    <main className="flex h-screen">
      <SideNav logoUrl="https://flowbite.com/docs/images/logo.svg" />

      <div className="h-fit ml-2">
        <BreadScrum />
      </div>
    </main>
  );
}
