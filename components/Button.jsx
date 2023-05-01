

export default function Button({value,width,height}) {
  return (
    <button
    classNmae='text-lg px-4 py-2 ${width} ${height} font-semibold bg-blue-400 px-2 '>
        {value}
        
    </button>
  )
}
