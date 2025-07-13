import type { Product } from "../../data/affiliateProducts";

export default function AffiliateCard({ product }: { product: Product }) {
  const { title, imageUrl, customText, asin, affiliateTag } = product;
  const productUrl = `https://www.amazon.com.br/dp/${asin}?tag=${affiliateTag}`;

  return (
    <article className="w-full max-w-xs bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
      <a href={productUrl} target="_blank" rel="noopener noreferrer" className="block mb-3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-contain rounded"
          loading="lazy"
        />
      </a>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {customText && <p className="text-sm text-gray-600 mb-3">{customText}</p>}
      <a href={productUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full">
          Ver na Amazon
        </button>
      </a>
    </article>
  );
}
