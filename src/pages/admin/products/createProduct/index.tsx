import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";
import { Layout } from "@/components/Layout/Layout";

export default function CreateProduct(): JSX.Element {
  return (
    <Layout.Root>
      <Layout.Body>
        <CreateProductForm />
      </Layout.Body>
    </Layout.Root>
  );
}
