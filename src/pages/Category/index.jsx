import React from 'react'

import { ChevronDownIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";


function Products() {
  const categories = [
    { name: "Nike", count: 26, selected: true },
    { name: "Adidas", count: 26 },
    { name: "Airmax", count: 26 },
    { name: "Vans", count: 26 },
    { name: "All stars", count: 26 },
    { name: "Airmax", count: 26 },
    { name: "Adidas", count: 26, color: "text-color-2" },
  ];

  // Brand data
  const brands = [
    { name: "Chocatella", count: 26, selected: true },
    { name: "Pankie", count: 26 },
    { name: "Nestle", count: 26 },
    { name: "N'medov", count: 26 },
    { name: "Okeyk", count: 26 },
  ];
  const products = Array(30).fill({
    name: "Snickers mini",
    price: "155 369 UZS",
    image: "https://media.istockphoto.com/id/509009097/photo/delicious-homemade-cherry-pie.jpg?s=612x612&w=0&k=20&c=L9uB0hcTHuZ-fI5GXldYzLgpk_IumkC_Qzi4zOU4BvQ=",
  });
  return (
    <div className='container max-w-[1260px] w-full mx-auto'>

      {/* Main  */}
      <main className="">
        {/* div */}
        <div className="h-[51px]">
          <div className="relative w-[184px] h-[23px] top-3.5 left-[10px] flex gap-4 items-center">
            <div>
              <div
                href="#"
                className="font-normal text-[#33a0ff] text-lg"
              >
                Главная
              </div>
            </div>
            <div className="font-normal text-[#c1c8ce] text-sm">
              /
            </div>
            <div>
              <div
                href="#"
                className="font-normal text-neutral-800 text-lg"
              >
                Продукты
              </div>
            </div>
          </div>
        </div>

        <div className="flex ">

          {/* Sidebar */}
          <aside className="w-[300px] sticky top-0 left-0">
            {/* Categories */}
            <div className=" bg-[#e5e5ff] rounded-[10px]">
              <div className="p-5">
                <h2 className="font-semibold text-app-primary text-xl mb-6">
                  Kategoriya
                </h2>
                <ul className="space-y-4">
                  {categories.map((category, index) => (
                    <li
                      key={`category-${index}`}
                      className="flex justify-between"
                    >
                      <span
                        className={`${category.selected ? "font-semibold text-app-primary" : "font-normal text-[#0d0d2d]"} ${category.color || ""} text-lg`}
                      >
                        {category.name}
                      </span>
                      <span
                        className={`${category.selected ? "font-semibold text-app-primary" : "font-normal text-[#0d0d2d]"} ${category.color || ""} text-lg text-right`}
                      >
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Brands */}
            <div className="mt-5 bg-[#e5e5ff] rounded-[10px]">
              <div className="p-5">
                <h2 className="font-semibold text-app-primary text-xl mb-6">
                  Brand
                </h2>
                <ul className="space-y-4">
                  {brands.map((brand, index) => (
                    <li
                      key={`brand-${index}`}
                      className="flex justify-between"
                    >
                      <span
                        className={`${brand.selected ? "font-semibold text-app-primary" : "font-normal text-[#0d0d2d]"} text-lg`}
                      >
                        {brand.name}
                      </span>
                      <span
                        className={`${brand.selected ? "font-semibold text-app-primary" : "font-normal text-[#0d0d2d]"} text-lg text-right`}
                      >
                        {brand.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6 pl-5 ">
            {products.map((product, index) => (
              <div
                key={`product-${index}`}
                className="w-full h-full"
              >
                <div
                  className="relative w-full h-[80%] bg-cover bg-center rounded-[10px] overflow-hidden"
                >
                  <button
                    className="absolute top-[12px] right-[12px] bg-white rounded-full p-2.5"
                  >
                    <HeartIcon size={20} />
                  </button>
                  <div className='w-full h-full object-cover'>
                  <img src={product.image} alt="" className='w-full h-full object-cover' />

                  </div>
                </div>
                <h3
                  className={`w-[252px] font-semibold ${index === 0 ? "text-app-primary" : "text-[#283645]"} text-xl mt-1`}
                >
                  {product.name}
                </h3>
                <p
                  className={`w-[252px] h-6 font-semibold text-base ${index === 0 ? "text-[#0d0d2d]" : "text-[#61778d]"}`}
                >
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>

  )
}

export default Products