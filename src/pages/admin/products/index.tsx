import { Layout } from "@/components/Layout/Layout";

export default function Products(): JSX.Element {
  return (
    <Layout.Root>
      <Layout.Body>
        <div className="flex justify-center">
          <button
            id="defaultModalButton"
            data-modal-toggle="defaultModal"
            className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Create product
          </button>
        </div>
      </Layout.Body>
    </Layout.Root>
  );
}
