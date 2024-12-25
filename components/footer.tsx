import { APP_NAME } from "@/lib/constants";

export default function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="wrapper">
        <p className="text-center p-5">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
