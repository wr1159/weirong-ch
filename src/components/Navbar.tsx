import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { MenuIcon, MountainIcon } from "./Icons";

export default function Navbar() {
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
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:text-muted-foreground"
        >
          About
        </a>
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:text-muted-foreground" 
        >
          Resume
        </a>
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:text-muted-foreground"
        >
          Contact
        </a>
        <ModeToggle />
      </nav>
    </header>
  );
}