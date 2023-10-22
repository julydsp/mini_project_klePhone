export default function ModalDetailProduct() {
  return (
    <div className="flex flex-col bg-[#715EEA] text rounded-3xl px-5 py-5 gap-3 justify-start overflow-y-auto max-h-[60vw] max-w-[70vw]">
      <h1 className="text-lg font-win text-white">Detail Produk</h1>
      <div className="flex flex-wrap-reverse items-end gap-2">
        <div className="flex flex-col gap-2 w-52">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Nama Produk</h1>
            <p className="text-[10px] font-win font-light text-white">
              {" "}
              Iphone XR
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Harga Produk</h1>
            <p className="text-[10px] font-win font-light text-white"> 99999</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-win text-white">Deskripsi Produk</h1>
            <p className="text-[10px] font-win font-light text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              officia voluptates. Quam itaque nulla quae nisi? Praesentium, ea.
              Facere exercitationem eveniet vero? Sed ducimus natus est,
              reprehenderit deleniti odio harum? Itaque ratione minima
              blanditiis numquam est fugit saepe! Recusandae ratione omnis
              dolores eligendi eius quas placeat? Quam, earum quo? Molestiae.
            </p>
          </div>
        </div>
        <div className="bg-black w-full h-44 md:w-32 md:h-44 rounded-xl ">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
