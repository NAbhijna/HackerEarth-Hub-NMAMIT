import { Logos } from "../constants";

const LogosBanner = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center text-n-1/50">
        With due support of Hackerearth India, <br />
        we host several weekly as well as monthly contests
        <br /> and hence keep up with a healthy competitive environment
        <br /> when it comes to 'CP'.
      </h5>
      <ul className="flex flex-col lg:flex-row">
        {Logos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] mb-8 lg:mb-0"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogosBanner;
