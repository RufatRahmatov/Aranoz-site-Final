// _components/productform/form.tsx
import React, { useState } from "react";

interface Product {
  _id?: string;
  title: string;
  price: number;
  description: string;
}

interface ProductFormProps {
  product?: Product;
  onSubmit: (data: Product) => Promise<void>;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {
  const [formState, setFormState] = useState<Product>({
    _id: product?._id || "",
    title: product?.title || "",
    price: product?.price || 0,
    description: product?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formState.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        {product ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;
