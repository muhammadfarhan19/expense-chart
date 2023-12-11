const Header = () => {
  return (
    <aside className="w-full h-1/5 p-3 flex justify-between bg-softRed rounded-2xl">
      <section className="w-auto h-full flex flex-col justify-center gap-2">
        <h1 className="text-xl">My Balance</h1>
        <h1 className="text-4xl font-bold">$921.48</h1>
      </section>
      <section className="w-auto h-full flex items-center">
        <div className="w-[70px] h-[70px] rounded-full bg-transparent border-4 translate-x-8 z-10"></div>
        <div className="w-[70px] h-[70px] rounded-full bg-black "></div>
      </section>
    </aside>
  )
}

export default Header
