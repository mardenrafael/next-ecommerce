import ScrumbSeparator from "../ScrumbSeparator/ScrumbSeparator";
import Scrumbs, { ScrumbsProps } from "../Scrumbs/Scrumbs";

export interface BreadScrumbsProps {
  scrumbs: ScrumbsProps[];
}

export default function BreadScrumbs({
  scrumbs,
}: BreadScrumbsProps): JSX.Element {
  return (
    <nav className="flex p-2">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {scrumbs.map((scrumbProps, idx) => {
          if (scrumbs[idx + 1] == undefined) {
            return (
              <Scrumbs title={scrumbProps.title} icon={scrumbProps.icon} />
            );
          }

          return (
            <>
              <Scrumbs title={scrumbProps.title} icon={scrumbProps.icon} />
              <ScrumbSeparator />
            </>
          );
        })}
      </ol>
    </nav>
  );
}
