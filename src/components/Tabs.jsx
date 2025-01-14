import { useState } from 'react'

const Tabs = ({ Splits, ILs, Segments }) => {
  const [activeTab, setActiveTab] = useState(0)

  const page = [<Splits />, <ILs />, <Segments />]

  const listElement = [
    { name: 'SPLITS', val: 0 },
    { name: "IL's", val: 1 },
    { name: 'SEGMENTS', val: 2 },
  ]

  return (
    <div className="relative flex items-center justify-center flex-col w-full min-h-[calc(100vh-94px)] bg-gray-900 p-5 text-gray-950">
      <ul className="flex shadow-[0px_10px_20px_-3px_rgba(0,0,0,0.1)] bg-slate-800 relative rounded-[100px] justify-between top-0 left-0 text-white">
        {listElement.map((e) => (
          <li
            className={`flex items-center justify-center h-[54px] w-[150px] text-[1.25rem] font-[500] z-[2] cursor-pointer ${
              activeTab === 0 ? 'active' : ''
            }`}
            onClick={() => setActiveTab(e.val)}
            key={e.name}
          >
            {e.name}
          </li>
        ))}
        <span
          className="absolute flex h-[54px] w-[150px] bg-green-700 z-[1] rounded-[99px] shadow-[0px_10px_20px_-3px_rgb(21,128,61)]"
          style={{
            transition: `0.25s ease-out`,
            transform: `translateX(${activeTab}00%)`,
          }}
        ></span>
      </ul>
      <div className="w-full">
        <section className="flex flex-col justify-center antialiased text-gray-500 min-h-[calc(100vh-94px)] p-4 w-full">
          <div className="h-full">
            <div className="w-full max-w-full mx-auto bg-gray-000 shadow-lg rounded-sm ">
              <div className="p-3">
                <div className="overflow-x-auto">{page[activeTab]}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tabs
