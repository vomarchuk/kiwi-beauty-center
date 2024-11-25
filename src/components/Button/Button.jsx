export const Button = ({ name, className, typeBtn, onClick }) => {
  return (
    <button
      className={`inline-block max-w-300 py-[12px] px-[30px] bg-accentColor rounded-[5px] text-[13px] font-bold uppercase tracking-[3px] text-textColor duration-500 hover:bg-opacity-50 active:bg-opacity-100 active:text-dark ${className}`}
      type={typeBtn}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
