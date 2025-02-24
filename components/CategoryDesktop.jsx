import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryItems, exploreItems } from "../features/productSlice";
import ProductContainer from "./ProductContainer";

const CategoryDesktop = () => {
  const { products, selectedProducts } = useSelector(state => state.product);
  const [setItems] = useState(products);
  const dispatch = useDispatch();
  const handleCategories = category => {
    dispatch(categoryItems(category));
    // setItems(selectedProducts);
  };
  const handleItems = category => {
    dispatch(exploreItems(category));
    // setItems(selectedProducts);
  };
  return (
    <div className='hidden mt-8 sm:grid desktop'>
      {/* category */}
      <div className='flex bg-pale-orange rounded-tr-[16px] justify-center h-[50px] category'>
        <h1 className='flex items-center justify-center w-full gap-6 text-tertiary'>
          <Image width={30} height={40} src='/party.png' alt='category' />
          Category
        </h1>
        <button
          onClick={() => handleCategories("spirits")}
          className='flex items-center justify-center w-full gap-6'
        >
          <Image width={30} height={40} src='/spirits.png' alt='man' />
          Spirits
        </button>
        <button
          onClick={() => handleCategories("wine")}
          className='flex items-center justify-center w-full gap-6'
        >
          <Image width={30} height={40} src='/wine.png' alt='woman' />
          Wine
        </button>
      </div>
      {/* explore */}
      <aside className='font-[700] h-max rounded-tl-[16px] bg-pale-orange mr-3 pt-4  font-serif explore flex flex-col items-center'>
        <h1 className='flex items-center gap-3 my-10 text-tertiary'>
          <Image width={30} height={40} src='/explore.png' alt='explore' />
          Explore
        </h1>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("popular-picks")}
          className='flex items-center justify-center w-full gap-6 my-9 '
        >
          <Image width={30} height={40}
            className="object-cover h-10 w-10"
            src='/popular-picks.png' alt='explore' />
          Popular-picks
        </button>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("new-arrivals")}
          className='flex items-center justify-center w-full gap-6 my-9'
        >
          <Image width={30} height={40} className="object-cover h-10 w-10" src='/new-arrivals.png' alt='explore' />
          New Arrivals
        </button>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("premium-collection")}
          className='flex items-center justify-center w-full gap-6 my-9'
        >
          <Image width={30} height={40} src='/premium-collection.png' className="object-cover h-10 w-10" alt='explore' />
          Premium Collection
        </button>
      </aside>
      <div className='flex flex-wrap justify-center gap-x-3 last:justify-start products'>
        <ProductContainer />
      </div>
    </div>
  );
};

export default CategoryDesktop;
