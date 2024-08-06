// import Header from "./components/Header";


export default function Home() {
  return (
    <div className="relative">
      <img src="hero-image.png" className="w-screen"/>
      <div className="absolute top-20 left-10">
        <div className="text-6xl font-black uppercase">
          <h1>Find Clothes</h1>
          <h1>That Matches</h1>
          <h1>your style</h1>
        </div>
        <div className="p-3">
          <p>Browse through our diverse range of meticulously crafted garments, designed <br/>
            to bring out your individuality and cater to your sense of style.</p>
        </div>
        <button className="bg-black text-white rounded-full px-14 py-5 my-5">Shop Now</button>
        <div className="flex gap-10 mt-3 p-3">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">200+</h1>
            <p>International Brands</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">20,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
     
     
    </div>
  );
}
