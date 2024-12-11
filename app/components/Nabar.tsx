const Navbar = () => {
  return (
    <div className="flex justify-between   items-center ">
      <img
        src="https://static.wixstatic.com/media/22791e_043cdd660d5f451a80750e04f8da012e~mv2.png/v1/fill/w_294,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-19%20234401.png"
        alt="logoImg"
      />
      <ul className="flex gap-4 pr-36 text-blue-600 text-xs items-center ">
        <li>Newsletter</li>
        <li>Services</li>
        <li>Contact</li>
        <li className="border border-blue-600 px-2 py-2">Book a Session</li>
      </ul>
    </div>
  );
};

export default Navbar;
