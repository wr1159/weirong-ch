import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center">
      <Sheet>
        <SheetTrigger asChild >
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <div className="flex items-center">
              <a href="#" className="mr-6">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Chu Wei Rong</span>
              </a>
              <ModeToggle />
            </div>
            <div className="grid gap-2 py-6">
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                About
              </a>
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Resume
              </a>
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Contact
              </a>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <a href="#" className="mr-6 hidden sm:flex">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Chu Wei Rong</span>
      </a>
      <nav className="ml-auto hidden sm:flex gap-4">
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium"
        >
          About
        </a>
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium" 
        >
          Resume
        </a>
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium"
        >
          Contact
        </a>
        <ModeToggle />
      </nav>
    </header>
  );
}

function MenuIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
