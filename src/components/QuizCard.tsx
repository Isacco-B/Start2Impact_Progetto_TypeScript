import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";


interface IQuizCardProps {
  title: string;
  quizlist: string[];
}

export default function QuizCard() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <div className="inline-flex gap-2">
          <span className="inline-flex text-2xl items-center">
            1 <ArrowRight />
          </span>
          <CardTitle>Cos'è React Native?Questo campo è obbligatorio*</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="bg-gray-100 p-2 rounded-lg cursor-pointer group hover:bg-gray-200">
          <span className="font-bold bg-gray-200 py-1 px-2 rounded-md group-hover:bg-gray-300">
            A
          </span>{" "}
          Un linguaggio di programmazione
        </div>
        <div className="bg-gray-100 p-2 rounded-lg cursor-pointer group hover:bg-gray-200">
          <span className="font-bold bg-gray-200 py-1 px-2 rounded-md group-hover:bg-gray-300">
            B
          </span>{" "}
          Un Database
        </div>
        <div className="bg-gray-100 p-2 rounded-lg cursor-pointer group hover:bg-gray-200">
          <span className="font-bold bg-gray-200 py-1 px-2 rounded-md group-hover:bg-gray-300">
            C
          </span>{" "}
          Un framework
        </div>
      </CardContent>
      <CardFooter>
        <Button>OK</Button>
      </CardFooter>
    </Card>
  );
}
