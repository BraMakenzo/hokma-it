import Link from "next/link";


export default function Button({
  text,
  href="/",
}: {
  text:string;
  href?:string;
}) {

return (

<Link
href={href}
className="
px-6
py-3
rounded-full
bg-blue-600
text-white
font-semibold
hover:bg-blue-700
transition
"
>

{text}

</Link>

);

}