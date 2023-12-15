import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Card>
        <CardHeader>
          <CardTitle>My card component</CardTitle>
          <CardDescription>Card component description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora
          dolore, maxime natus quod, iste repellat nihil ab dolorem itaque
          molestiae, a praesentium aut officiis corrupti id amet reiciendis?
          Labore!
        </CardContent>
        <CardFooter>
          <Button>Get started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
