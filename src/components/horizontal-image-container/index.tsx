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
            <div className="overflow-hidden rounded-[10px] w-[140px] h-[140px]">
              <Image
                src={image}
                alt={`review image ${image}`}
                className="aspect-[1/1] h-fit w-fit object-cover"
                width={500}
                height={500}
                onClick={() => {
                  window.open(image, '_blank');
                }}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
