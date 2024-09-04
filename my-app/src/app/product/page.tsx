"use client";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import Layouts from "../_layouts/layouts";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductPage() {
  const { data, error, mutate } = useSWR<Product[]>(
    "http://localhost:3001/products",
    fetcher
  );
  const [cart, setCart] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const deleteProduct = async (id: number) => {
    try {
      console.log(`Deleting product with ID: ${id}`);
      await axios.delete(`http://localhost:3001/products/${id}`);
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      mutate();
    } catch (error) {
      console.error(`Failed to delete product with ID: ${id}`, error);
      alert(
        "Failed to delete the product. Please check if the product exists and try again."
      );
    }
  };

  const editProduct = async (id: number, updatedProduct: Product) => {
    try {
      console.log(`Editing product with ID: ${id}`);
      await axios.put(`http://localhost:3001/products/${id}`, updatedProduct);
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? updatedProduct : item))
      );
      mutate();
    } catch (error) {
      console.error(`Failed to edit product with ID: ${id}`, error);
      alert(
        "Failed to edit the product. Please check if the product exists and try again."
      );
    }
  };

  const createProduct = async (newProduct: Product) => {
    try {
      await axios.post(`http://localhost:3001/products`, newProduct);
      mutate();
    } catch (error) {
      console.error("Failed to create product", error);
      alert("Failed to create the product. Please try again.");
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setOpenModal(true);
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingProduct) {
      const formData = new FormData(e.target as HTMLFormElement);
      const updatedProduct: Product = {
        ...editingProduct,
        name: formData.get("name") as string,
        price: parseFloat(formData.get("price") as string),
        description: formData.get("description") as string,
        image: formData.get("image") as string,
      };
      await editProduct(editingProduct.id, updatedProduct);
      setOpenModal(false);
    }
  };

  return (
    <Layouts>
      <main>
        {" "}
        <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
          <h2 className="text-4xl mb-5 font-bold">Admin Panel</h2>

          {/* product create button */}
          <button
            onClick={() => setOpenModal(true)}
            className="mb-5 p-2 px-6 bg-[#F13D80] text-white rounded-md hover:bg-[#FF0000] group-hover:opacity-100 transition duration-500"
          >
            Create New Product
          </button>

          {/* Modal - new product create or edit */}
          {openModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto bg-[#ECFDFF]">
              <div className="flex items-center justify-center min-h-screen px-4">
                <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                  <h2 className="text-lg font-medium">
                    {editingProduct ? "Edit Product" : "Create New Product"}
                  </h2>
                  <form
                    onSubmit={
                      editingProduct
                        ? handleEditSubmit
                        : (e) => {
                            e.preventDefault();
                            const formData = new FormData(
                              e.target as HTMLFormElement
                            );
                            const newProduct: Product = {
                              id: data.length + 1,
                              name: formData.get("name") as string,
                              price: parseFloat(
                                formData.get("price") as string
                              ),
                              description: formData.get(
                                "description"
                              ) as string,
                              image: formData.get("image") as string,
                            };
                            createProduct(newProduct);
                            setOpenModal(false);
                          }
                    }
                  >
                    <div className="mt-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={editingProduct?.name || ""}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        defaultValue={editingProduct?.price || ""}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        defaultValue={editingProduct?.description || ""}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        defaultValue={editingProduct?.image || ""}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => setOpenModal(false)}
                        className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        {editingProduct ? "Save Changes" : "Create"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Cədvəl */}
          <table className="min-w-full bg-white">
            <thead className="bg-[#ECFDFF] text-[#FF1252]">
              <tr>
                <th className="w-1/4 py-2">Product Image</th>
                <th className="w-1/4 py-2">Product Name</th>
                <th className="w-1/4 py-2">Price</th>
                <th className="w-1/4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr
                  key={product.id}
                  className="text-center border-b border-gray-200"
                >
                  <td className="py-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">${product.price}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 group-hover:opacity-100 transition duration-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => openEditModal(product)}
                      className="ml-2 p-2 px-6 bg-[#9ACBC6] text-white rounded-md hover:bg-[#498A82] group-hover:opacity-100 transition duration-500"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Kartlar bölümü */}
          <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start mt-10">
            {data.map((product) => (
              <section
                key={product.id}
                className="relative bg-white sm:w-[260px] h-[430px] group hover:shadow-lg transition-shadow duration-500 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full object-cover text-[#FFFAF9]"
                />
                <h1 className="text-xl font-bold mt-4 text-center">
                  {product.name}
                </h1>
                <p className="text-center p-2">${product.price}</p>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(product)}
                    className="relative text-[#FF4368] font-bold flex items-center gap-12 top-[170px] right-[20px]"
                  >
                    + ADD TO CART <FiHeart className="text-black" />
                  </button>
                </div>
              </section>
            ))}
          </section>
        </section>
      </main>
    </Layouts>
  );
}
