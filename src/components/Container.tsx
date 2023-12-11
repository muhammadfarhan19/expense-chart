import {ReactNode} from 'react';

const Container = ({children}: {
  children: ReactNode
}) => {
  return (
    <section className="w-full 2xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/3 h-3/4 flex flex-col gap-3 text-white">
      {children}
    </section>
  )
}

export default Container
