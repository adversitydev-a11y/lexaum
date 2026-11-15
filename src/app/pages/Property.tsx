import { EditorialServiceDetail } from "../components/ServiceDetailEditorial";
import { detailedServiceContent } from "../content/serviceRedesignContent";
import servicesBackground from "../../imports/services baground for all.png";

const propertyContent = detailedServiceContent.property;

export function Property() {
  return (
    <EditorialServiceDetail
      data={propertyContent}
      backgroundImage={servicesBackground}
      backgroundType="property"
      valueHeading={propertyContent.valueHeading}
      valueItems={propertyContent.valueItems}
      processHeading={propertyContent.processHeading}
      process={propertyContent.process}
      faqVariant="property"
    />
  );
}
