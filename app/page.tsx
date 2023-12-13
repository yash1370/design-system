import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <h1 className="text-3xl font-semibold">Learn Know More About Storybook</h1>
        <Link href="https://designsystem-v2.vercel.app" target="_blank">
          <p className="pt-6 text-xl font-medium underline flex items-center justify-center">
            Please follow this Link
            <span className="newWindow6 underline mt-[2px] ms-2"></span>
          </p>
        </Link>
      </div>
    </div>
  );
}
