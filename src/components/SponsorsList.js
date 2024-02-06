import SponsorItem from "./SponsorItem";

const SponsorsList = ({ sponsors }) => {
  const sponsorsToRender = sponsors.map((sponsor, index) => {
    return <SponsorItem sponsor={sponsor} key={index} />;
  });

  return <div className="grid grid-cols-6 gap-4">{sponsorsToRender}</div>;
};

export default SponsorsList;
