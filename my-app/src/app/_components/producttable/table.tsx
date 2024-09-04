// components/ProductTable.tsx
import React from "react";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const handleDelete = async (id: string) => {
    await fetch(`/api/product/${id}`, { method: "DELETE" });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <Link href={`/product/edit?id=${product._id}`}>Edit</Link>
              {/* <button onClick={() => handleDelete(product.id)}>Delete</button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
