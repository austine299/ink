type Benefits_cardCardProps = {
  title: string;
  description: string;
  image: string;
};

const Benefits_card: React.FC<Benefits_cardCardProps>=({ title, description, image })=> {
  return (
    <div className="border relative border-gray-400 w-[350px] h-[350px] rounded-3xl flex flex-col items-center justify-center gap-9">
      <img src={image}  className="w-[227px] h-[161px]"/>
      <div className="flex flex-col gap-3">
        <h3 className="text-white font-bold text-[21px]  font-[Montserrat Subrayada]">
          {title}
        </h3>
        <p className="text-[16px] w-[293px] text-center text-[#ACC3D5] font-[Montserrat]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Benefits_card;
