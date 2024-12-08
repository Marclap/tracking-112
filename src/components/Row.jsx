const Row = ({ name, index, hits, sect, indexSections }) => {
  const getColumsVertical = (i) => {
    const data = {
      202: (
        <td className="p-3 whitespace-nowrap border" rowSpan={10}>
          <div className="flex flex-col columnVertical justify-center items-center w-full">
            Pantheon of the Master
          </div>
        </td>
      ),
      212: (
        <td className="p-3 whitespace-nowrap border" rowSpan={10}>
          <div className="flex flex-col columnVertical justify-center items-center w-full">
            Pantheon of the Artist
          </div>
        </td>
      ),
      222: (
        <td className="p-3 whitespace-nowrap border" rowSpan={10}>
          <div className="flex flex-col columnVertical justify-center items-center w-full">
            Pantheon of the Sage
          </div>
        </td>
      ),
      232: (
        <td className="p-3 whitespace-nowrap border" rowSpan={10}>
          <div className="flex flex-col columnVertical justify-center items-center w-full">
            Pantheon of the Knight
          </div>
        </td>
      ),
      242: (
        <td className="p-3 whitespace-nowrap border" rowSpan={42}>
          <div className="flex flex-col columnVertical justify-center items-center w-full">
            Pantheon of Hallownest
          </div>
        </td>
      ),
    }
    return data[i]
  }

  const getDataSection = (i, hits, indexSections) => {
    let r = indexSections[i],
      l = i - 1 < 0 ? 0 : indexSections[i - 1]
    let data = hits[r] - hits[l]
    return (
      <td
        className={`p-3 whitespace-nowrap border text-white ${
          data === 0 ? 'bg-green-700' : 'bg-red-900'
        }`}
        key={name}
      >
        {data}
      </td>
    )
  }

  const getNamesILs = (name) => {
    const names = {
      'Oro & Mato': 'Pantheon of the Master',
      Sheo: 'Pantheon of the Artist',
      Sly: 'Pantheon of the Sage',
      'Pure Vessel': 'Pantheon of the Knight',
      'Absolute Radiance': 'Pantheon of Hallownest',
    }
    return names[name] || name
  }

  const getNamesSegment = (name) => {
    const names = {
      'Trail of the fool': 'Coliseums',
      'Pantheon of Hallownest': 'Godhome',
    }
    return names[name] || name
  }

  return (
    <>
      {sect === 'splits' && (
        <tr>
          {getColumsVertical(index)}
          <td
            className="p-3 whitespace-nowrap border"
            colSpan={index < 202 ? 2 : 1}
          >
            {name}
          </td>
          {hits.map((data, i) => (
            <td
              className={`p-3 whitespace-nowrap border text-white ${
                data[index] === 0 ? 'bg-green-700' : 'bg-red-900'
              }`}
              key={name + index + i}
            >
              {data[index]}
            </td>
          ))}
        </tr>
      )}
      {sect === 'ILs' && (
        <tr>
          <td className="p-3 whitespace-nowrap border">{getNamesILs(name)}</td>
          {hits.map((data, i) => (
            <>{getDataSection(index, data, indexSections)}</>
          ))}
        </tr>
      )}
      {sect === 'segments' && (
        <tr>
          <td className="p-3 whitespace-nowrap border">
            {getNamesSegment(name)}
          </td>
          {hits.map((data, i) => (
            <>{getDataSection(index, data, indexSections)}</>
          ))}
        </tr>
      )}
    </>
  )
}

export default Row
