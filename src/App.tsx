import QuizCard from "./components/QuizCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <QuizCard />
      <div className="absolute bottom-2 right-2 inline-flex gap-1">
        <Button size={"sm"}>
          <ChevronUp />
        </Button>
        <Button size={"sm"}>
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}
