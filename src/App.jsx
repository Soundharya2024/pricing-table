const App = () => {
  return (
    <div
      className="main-container flex flex-col justify-center items-center max-w-screen max-h-screen h-screen pb-4 bg-gradient-to-b from-cyan-500 to-blue-500"
      style={{ fontFamily: "Montserrat" }}
    >
      <h5 className="header-text text-center text-white text-lg font-bold uppercase tracking-wider mt-6 mb-4 mx-5">
        Choose a plan that suits your needs
      </h5>
      <div className="plans-container grid grid-flow-col auto-cols-max gap-5 h-max" style={{"scrollbar-width": "none", "-ms-overflow-style": "none"}}>
        <div className="plan flex flex-col gap-8 h-max items-center rounded-lg bg-white my-6 hover:scale-110 transition-all">
          <div className="plan-name uppercase font-bold text-slate-400 bg-zinc-100 w-full text-center py-5 rounded-t-lg">
            Standard
          </div>
          <div className="flex price-container rounded-3xl bg-sky-400/100 text-white h-20 w-20 items-center justify-center text-lg font-bold">
            <p style={{ fontFamily: "Inter" }}>
              <sup>&#8377;</sup>
              <span className="ps-px">0</span>
            </p>
          </div>
          <div className="plan-details mx-10 text-xs font-medium">
            <ul>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-400"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle text-sky-400"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle text-sky-400"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="uppercase font-bold rounded-full bg-slate-400 text-white px-6 py-2 hover:bg-sky-400 transition-colors duration-500 mb-7"
          >
            Start Now
          </button>
        </div>
        <div className="plan flex flex-col gap-8 h-max items-center rounded-lg bg-white my-6 hover:scale-110 transition-all">
          <div className="plan-name uppercase font-bold text-slate-400 bg-zinc-100 w-full text-center py-5 rounded-t-lg">
            Platinum
          </div>
          <div className="flex price-container rounded-3xl bg-sky-600/100 text-white h-20 w-20 items-center justify-center text-lg font-bold">
            <p style={{ fontFamily: "Inter" }}>
              <sup>&#8377;</sup>
              <span className="ps-px">1500</span>
            </p>
          </div>
          <div className="plan-details mx-10 text-xs font-medium">
            <ul>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-600"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-600"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-600"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="uppercase font-bold rounded-full bg-slate-400 text-white px-6 py-2 hover:bg-sky-600 transition-colors duration-500  mb-7"
          >
            Start Now
          </button>
        </div>
        <div className="plan flex flex-col gap-8 h-max items-center rounded-lg bg-white my-6 hover:scale-110 transition-all">
          <div className="plan-name uppercase font-bold bg-silver-200 text-slate-400 bg-zinc-100 w-full text-center py-5 rounded-t-lg">
            Silver
          </div>
          <div className="flex price-container rounded-3xl bg-sky-500/100 text-white h-20 w-20 items-center justify-center text-lg font-bold">
            <p style={{ fontFamily: "Inter" }}>
              <sup>&#8377;</sup>
              <span className="ps-px">499</span>
            </p>
          </div>
          <div className="plan-details mx-10 text-xs font-medium">
            <ul>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-500"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle-fill text-sky-500"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
              <li className="uppercase text-gray-400 my-2">
                <i className="bi bi-circle text-sky-500"></i>
                <span className="ms-2">Your Text Here</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="uppercase font-bold rounded-full bg-slate-400 text-white px-6 py-2 hover:bg-sky-500 transition-colors duration-500  mb-7"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
