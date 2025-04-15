interface Props {
  name: string,
  email: string,
  image: string
}
export default function UserCard(props: Props){  

  return(
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
      <img src={props.image} className="w-15 h-14 bg-red-400 rounded-full"></img>
      <div>
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-gray-500">{props.email}</p>
      </div>
    </div>
  )
}