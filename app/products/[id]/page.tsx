import { stripe } from "@/lib/stripe"
import { ProductDetail } from "@/components/product-detail";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}){
	const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />; //Not doing ui here as this is an async function (server) and we want to pass the data down as props into a client component
}