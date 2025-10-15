import React from 'react';

type ServiceCardProps = {
  title: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  list1,
  list2,
  list3,
  list4,
  image
}) => {
  return (
    <div className="border relative border-gray-400 w-full h-[656px] rounded-3xl flex items-center gap-32 justify-between p-13">
      
      <div className="flex flex-col gap-10">
        <h3 className="font-[Montserrat Subrayada] text-white text-center font-bold text-[21px] w-[284px]">
          {title}
        </h3>

        <ul className="text-[#ACC3D5] flex flex-col gap-8">
          <li className="w-[350px] flex gap-3 items-center">
            <img src="/images/icons/un-ordered.png" className="w-9" alt="icon" />
            {list1}
          </li>
          <li className="w-[350px] flex gap-3 items-center">
            <img src="/images/icons/un-ordered.png" className="w-9" alt="icon" />
            {list2}
          </li>
          <li className="w-[350px] flex gap-3 items-center">
            <img src="/images/icons/un-ordered.png" className="w-9" alt="icon" />
            {list3}
          </li>
          <li className="w-[350px] flex gap-3 items-center">
            <img src="/images/icons/un-ordered.png" className="w-9" alt="icon" />
            {list4}
          </li>
        </ul>

        <button className="w-[110px] h-[45px] bg-[#193248] hover:bg-[#27445e] text-white rounded-2xl shadow shadow-gray-300">
          LEARN MORE
        </button>
      </div>

      <img src={image} alt="Service" className="w-[544px] h-[472px]" />
    </div>
  );
};

export default ServiceCard;
