import { getPaginatedProductWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";





export default async function Home() {

  const { products } = await getPaginatedProductWithImages()




  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"

      />

      <ProductGrid products={products} />
    </>
  );
}
