

export default function ModalDetailProduct({product}) {
  
  return (
    <div className="flex flex-col bg-[#715EEA] text rounded-3xl px-5 py-5 gap-3 justify-start overflow-y-auto max-h-[60vw] max-w-[70vw]">
      <h1 className="text-lg font-win text-white">Detail Produk</h1>
      <div className="flex flex-wrap-reverse items-end gap-2">
        <div className="flex flex-col gap-2 w-52">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Nama Produk</h1>
            <p className="text-[10px] font-win font-light text-white">
              {product.productName}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Harga Produk</h1>
            <p className="text-[10px] font-win font-light text-white">{product.price}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Stok Produk</h1>
            <p className="text-[10px] font-win font-light text-white">{product.stok}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Deskripsi Produk</h1>
            <p className="text-[10px] font-win font-light text-white">
             {product.description}
            </p>
          </div>
        </div>
        <div className=" w-full h-full md:w-32 md:h-44 rounded-xl ">
          <img src={product.image} alt="" />
        </div>
      </div>
    </div>
  );
}
