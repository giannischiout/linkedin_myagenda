import Link from 'next/link';
import Image from 'next/image';
export default function Profile() {
    return (
        <Link href="#" className="profile_button">
            <div className="avatar">
                <Image src="/avatar.jpg" alt="avatar" fill />
            </div>
            who is?
        </Link>
    )
}