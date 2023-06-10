import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";
import { Layout } from "@/components/Layout/Layout";
import { faBoxesStacked, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateProduct(): JSX.Element {
  return (
    <Layout.Root
      scrumbs={[
        {
          title: "Produtos",
          icon: faBoxesStacked,
        },
        {
          title: "Criar produtos",
          icon: faPlus,
        },
      ]}
    >
      <Layout.Body>
        <CreateProductForm />
      </Layout.Body>
    </Layout.Root>
  );
}
