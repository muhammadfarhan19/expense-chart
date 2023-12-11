import { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="w-full h-3/4 bg-white rounded-2xl p-4 md:px-8 md:py-4 flex flex-col justify-center gap-2">
      <section className="w-full h-auto">
        <h1 className="font-bold text-xl text-black">Spending - Last 7 Days</h1>
      </section>
      <section className="w-full border-b-2 h-2/3">{children}</section>
      <section className="w-full h-1/5 flex justify-between">
        <aside className="w-auto h-full flex flex-col items-start gap-1">
          <h1 className="lg:text-lg text-mediumBrown">Total this Month</h1>
          <h1 className="text-3xl md:text-4xl text-black font-bold">$478.33</h1>
        </aside>
        <aside className="w-auto h-full flex flex-col items-end justify-end gap-0">
          <h1 className="text-lg text-black font-bold">+2.4%</h1>
          <h1 className="text-mediumBrown">from last month</h1>
        </aside>
      </section>
    </aside>
  );
};

export default Content;
