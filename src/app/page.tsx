import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid h-80 grid-cols-5 gap-2  grid-rows-3">
        <div className="flex items-center col-span-2 row-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title 1</CardTitle>
              <CardDescription>Card Description 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content 1</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div className=" flex items-center col-span-3 row-span-1 bg-red-500">
          <Card>
            <CardHeader>
              <CardTitle>Card Title 2</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1 row-span-2 bg-yellow-500" />
        <div className="col-span-2 row-span-2 bg-green-500" />
        <div className="col-span-1 row-span-1 bg-cyan-500" />
        <div className="col-span-1 row-span-1 bg-purple-500" />
      </div>
    </main>
  );
}
