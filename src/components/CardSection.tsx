export const CardSection = ({ children }) => (
  <div className='card text-left relative p-20 max-w-3xl min-h-[calc(var(--section-height) - 10rem * 2)] mx-auto my-40 overflow-hidden shadow-xl'>
    {children}
  </div>
)
