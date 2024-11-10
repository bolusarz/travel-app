import React, { useState } from "react";
import {
  ActivityItem,
  EmptySection,
  ExpressIcon,
  LayoutContainer,
  Modal,
  ActivityForm,
} from "@/components";
import { useAppContext } from "@/hooks";

type Prop = object;

const ActivityLayout: React.FC<Prop> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { attractions, removeAttraction, addAttraction } = useAppContext();
  return (
    <LayoutContainer
      btnText="Add Activities"
      iconElement={<ExpressIcon size={24} color="#fff" />}
      title="Activities"
      titleClass="text-white"
      className="bg-[#0054E4]"
      showBtn={!!attractions?.length}
      btnClass="text-[#0D6EFD] bg-white"
    >
      {!attractions?.length ? (
        <EmptySection
          btnText="Add attraction"
          onClick={() => setIsVisible(true)}
          iconElement={<ExpressIcon size={80} className="text-black/50" />}
        />
      ) : (
        <div className="flex flex-col gap-6">
          {attractions.map((attraction) => (
            <ActivityItem
              key={attraction}
              slug={attraction}
              onRemove={() => removeAttraction(attraction)}
            />
          ))}
        </div>
      )}
      <Modal
        open={isVisible}
        titleContent={
          <h3 className="text-xl font-semibold px-6">Add Activities</h3>
        }
        onClose={() => setIsVisible(false)}
        className="!max-w-2xl !px-0"
      >
        <ActivityForm
          addActivity={(slug) => {
            addAttraction(slug);
            setIsVisible(false);
          }}
        />
      </Modal>
    </LayoutContainer>
  );
};

export default ActivityLayout;
