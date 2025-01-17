import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-card shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-card-foreground">
          E-commerce Admin
        </h1>
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </header>
  );
}
