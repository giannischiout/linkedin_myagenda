
import Link from "next/link";
import { ImGithub } from "react-icons/im";

export default function GitHub() {
    return (
        <Link href="#" className="github">  
            <ImGithub />
            <span>
            source code 
            </span>
        </Link>
    );
}
