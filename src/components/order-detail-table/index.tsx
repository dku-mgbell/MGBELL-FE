import { Skeleton } from '../ui/skeleton';
import { Table } from './_components';

export type OrderData = Record<string, string | number | undefined | null>;

export default function OrderDetailTable({ data }: { data?: OrderData }) {
  return (
    <Table.Body>
      {data
        ? Object.entries(data).map(([key, value]) => (
            <Table.Row key={key}>
              <Table.Key>{key}</Table.Key>
              <Table.Value>{value}</Table.Value>
            </Table.Row>
          ))
        : Array.from({ length: 7 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Table.Row key={`skeleton-${index}`}>
              <Table.Key>
                <Skeleton className="w-full h-[24px]" />
              </Table.Key>
              <Table.Value>
                <Skeleton className="w-full h-[24px]" />
              </Table.Value>
            </Table.Row>
          ))}
    </Table.Body>
  );
}
