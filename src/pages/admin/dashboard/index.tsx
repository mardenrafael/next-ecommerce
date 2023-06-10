import { Layout } from "@/components/Layout/Layout";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard(): JSX.Element {
  return (
    <Layout.Root
      scrumbs={[
        {
          title: "Dashboard",
          icon: faChartLine,
        },
      ]}
    >
      <Layout.Body></Layout.Body>
    </Layout.Root>
  );
}
