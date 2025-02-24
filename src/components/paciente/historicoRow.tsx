import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HistoricChart } from "./historicoChart";

type HistoricRowProps = {
  text: string;
  value: number;
  chartData?: { data: string; value: number }[];
};

export function HistoricRow({ text, value, chartData }: HistoricRowProps) {

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className=" flex gap-1">
            <p className=" font-semibold">{text}:</p>
            <p className="font-normal">{value}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <HistoricChart label={text} chartData={chartData} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
