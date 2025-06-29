import LocationMarkerIcon from '@/assets/svg/LocationMarkerIcon';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { UserAddressState } from '@/types/address';

function Container({
  type,
  children,
  value,
  className,
}: {
  type: 'edit' | 'radio';
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const Component = type === 'radio' ? RadioGroupItem : 'div';

  return (
    <Component
      value={value}
      buttonPosition="right"
      className={cn('pb-[20px] border-gray7 border-b-[1px] flex-1', className)}
    >
      {children}
    </Component>
  );
}

function Content({ address }: { address: UserAddressState }) {
  return (
    <div className="flex flex-row gap-[12px] items-center">
      <LocationMarkerIcon color="black" />
      <div className="flex flex-col gap-[2px]">
        <p className="text-b1 font-bold">{address.addressName}</p>
        <p className="text-b2 text-gray4">{address.address}</p>
      </div>
    </div>
  );
}

export default function AddressRadioItem({
  address,
}: {
  address: UserAddressState;
}) {
  return (
    <Container type="radio" value={address.addressName!}>
      <Content address={address} />
    </Container>
  );
}

export const AddressItem = {
  Container,
  Content,
};
