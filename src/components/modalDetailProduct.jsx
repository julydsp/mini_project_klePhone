export default function ModalDetailProduct() {
  return (
    <div className="flex bg-[#715EEA] text rounded-3xl px-10 py-10 gap-3 flex-wrap-reverse items-center justify-between">
      <div className="flex flex-col gap-2 w-72">
        <h1 className="text-3xl font-win text-white">Detail Produk</h1>
        <div className="flex flex-col gap-3">
          <h1 className="text-md font-win text-white">Nama Produk</h1>
          <p className="text-sm font-win font-light text-white"> Iphone XR</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-md font-win text-white">Harga Produk</h1>
          <p className="text-sm font-win font-light text-white"> 99999</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-md font-win text-white">Deskripsi Produk</h1>
          <p className="text-sm font-win font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            officia voluptates. Quam itaque nulla quae nisi? Praesentium, ea.
            Facere exercitationem eveniet vero? Sed ducimus natus est,
            reprehenderit deleniti odio harum? Itaque ratione minima blanditiis
            numquam est fugit saepe! Recusandae ratione omnis dolores eligendi
            eius quas placeat? Quam, earum quo? Molestiae.
          </p>
        </div>
      </div>
      <div className="bg-black w-56 h-72 ">
        <img src="" alt="" />
      </div>
    </div>
  );
}
