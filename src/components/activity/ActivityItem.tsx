import React from "react";
import {
  ActionBtn,
  Card,
  CaretCircleDownIcon,
  CaretCircleUpIcon,
  ClockIcon,
  MapPinIcon,
  NairaIcon,
  Slider,
  StarIcon,
  TextWithIcon,
} from "@/components";
import { useFetchAttraction } from "@/hooks";
import { Attraction } from "@/services";

type Prop = {
  slug: string;
  onRemove: () => void;
};

const ActivityItem: React.FC<Prop> = ({ slug, onRemove }) => {
  const { attraction, isLoading } = useFetchAttraction(slug);

  return (
    <Card onClick={onRemove}>
      <div className="p-6 pr-0 bg-white flex grow">
        {isLoading ? "Fetching...." : null}
        {attraction ? (
          <>
            <Slider
              images={attraction?.photos.map((photo) => photo.small) || []}
              className="shrink-0 w-[232px] h-full rounded overflow-clip"
            />
            <div className="flex items-center grow">
              <div className="grow flex flex-col gap-4">
                <ActivityInfo attraction={attraction} className="pl-4 pr-10" />
                <ExtraActivityInfo className="py-3.5 pl-4 pr-10" />
                <ActivityActions className="pl-4 pr-10" />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default ActivityItem;

const ActivityActions: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex gap-8`}>
      <ActionBtn>Activity Details</ActionBtn>
      <ActionBtn>Price Details</ActionBtn>
      <ActionBtn className="ml-auto">Edit Details</ActionBtn>
    </div>
  );
};

const ActivityInfo: React.FC<{
  className?: string;
  attraction: Attraction;
}> = ({ className, attraction }) => {
  return (
    <div className={`${className} flex justify-between`}>
      <div>
        <h6 className="font-semibold text-xl tracking-tight mb-0.5">
          {attraction.name}
        </h6>
        <p className="font-medium text-[#1D2433] max-w-[47ch] mb-2 tracking-tight">
          {attraction.shortDescription}
        </p>
        <div className="font-medium text-[#676E7E] flex gap-3.5 items-center tracking-tight">
          <TextWithIcon
            className="text-[#0D6EFD]"
            iconElement={<MapPinIcon color="#0D6EFD" size={18} />}
          >
            Directions
          </TextWithIcon>
          <TextWithIcon iconElement={<StarIcon color="#F4B93E" size={18} />}>
            {attraction.reviewsStats?.combinedNumericStats.average} (
            {attraction.reviewsStats?.allReviewsCount})
          </TextWithIcon>
          <TextWithIcon iconElement={<ClockIcon color="#344054" size={18} />}>
            1 Hour
          </TextWithIcon>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <TextWithIcon
          iconElement={<NairaIcon size={28} color="#344054" />}
          className="text-[#1D2433] !text-[28px] text-3xl font-semibold tracking-tight"
        >
          123,450.00
        </TextWithIcon>
        <p className="font-medium text-[#1D2433] tracking-tight">
          10:30 AM on Mar 19
        </p>
      </div>
    </div>
  );
};

const ExtraActivityInfo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} border-y border-[#E4E7EC] text-[#647995] text-lg flex items-center gap-3 font-medium tracking-tight`}
    >
      <p>What's Included:</p>
      <p>Admission to the Empire State Building</p>
      <button className="border-0 text-[#0D6EFD] text-lg font-medium tracking-tight">
        See more
      </button>
      <span className="ml-auto tracking-tighter px-2 py-1 rounded bg-[#0A369D] text-sm leading-[22px] font-medium text-white">
        Day 1 - (2)
      </span>
      <span className="flex flex-col gap-0.5">
        <CaretCircleUpIcon size={20} color="#98A2B3" />
        <CaretCircleDownIcon size={20} color="#98A2B3" />
      </span>
    </div>
  );
};
