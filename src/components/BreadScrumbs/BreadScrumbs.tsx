import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import ScrumbSeparator from "../ScrumbSeparator/ScrumbSeparator";
import Scrumbs from "../Scrumbs/Scrumbs";

export default function BreadScrumbs(): JSX.Element {
  return (
    <nav className="flex p-2">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <Scrumbs title="Dashboard " icon={faChartLine} />
        <ScrumbSeparator />
      </ol>
    </nav>
  );
}
