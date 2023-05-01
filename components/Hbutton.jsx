export default function Hbutton({value,width,height}) {
    return (
      <button 
      className={"text-lg bg-sky-600 text-white px-4 py-2 rounded-lg ${width} ${height} font-semibold"}>
          {value}
      </button>
    )
    
  }