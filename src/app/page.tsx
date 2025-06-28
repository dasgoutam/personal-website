import Image from 'next/image';

export default function Home() {
    return <div>
      <div>
      <Image
                src="/images/profile_picture.png"
                alt="profile_picture"
                width={180}
                height={180}
                className="rounded-full bg-blue-200"
            />
      </div>
      <p>This is my new home</p>
    </div>;
}
