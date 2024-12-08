interface ProductCardProps {
    image: string;
    title: string;
    price: number;
  }
  
  const ProductCard = ({ image, title, price }: ProductCardProps) => {
    return (
      <div className="flex flex-col gap-6">
        <div className="bg-[#F5F5F5] aspect-[4/5]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-normal text-[#2A254B]">{title}</h3>
          <p className="text-lg text-[#2A254B]">£{price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;