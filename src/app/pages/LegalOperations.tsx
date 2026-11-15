import { EditorialServiceDetail } from "../components/ServiceDetailEditorial";
import { detailedServiceContent } from "../content/serviceRedesignContent";
import servicesBackground from "../../imports/services baground for all.png";

const legalOperationsContent = detailedServiceContent.legalOperations;

export function LegalOperations() {
  return (
    <EditorialServiceDetail
      data={legalOperationsContent}
      backgroundImage={servicesBackground}
      backgroundType="global"
      valueHeading={legalOperationsContent.valueHeading}
      valueItems={legalOperationsContent.valueItems}
      marketHeading={legalOperationsContent.marketHeading}
      markets={legalOperationsContent.markets}
      faqVariant="services"
    />
  );
}
