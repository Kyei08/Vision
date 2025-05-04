export default function Footer() {
  return (
    <footer className="w-full py-4 text-center">
      <p className="text-gray-100 font-semibold">
        &copy; {new Date().getFullYear()} Vision. All rights reserved.
      </p>
    </footer>
  );
}