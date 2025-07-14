import Image from 'next/image';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export default function HorizontalImageContainer({
  images,
}: {
  images: string[];
}) {
  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex w-max space-x-[10px]">
        {images.map((image) => (
          <figure key={image} className="shrink-0">
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt={`review image ${image}`}
                className="aspect-[1/1] h-fit w-fit object-cover"
                width={140}
                height={140}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
