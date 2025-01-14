import { Fragment } from 'react'

const Row = ({ name, index, hits, sect, indexSections }) => {
  const getColumsVertical = (i) => {
    const pantheons = {
      202: 'Pantheon of the Master',
      212: 'Pantheon of the Artist',
      222: 'Pantheon of the Sage',
      232: 'Pantheon of the Knight',
      242: 'Pantheon of Hallownest',
    }
    const rowSpan = i === 242 ? 42 : 10
    return pantheons[i] ? (
      <td className="p-3 whitespace-nowrap border" rowSpan={rowSpan}>
        <div className="flex flex-col columnVertical justify-center items-center w-full">
          {pantheons[i]}
        </div>
      </td>
    ) : null
  }

  const getDataSection = (i, hits, indexSections) => {
    const r = indexSections[i]
    const l = i - 1 < 0 ? 0 : indexSections[i - 1]
    const data = hits[r] - hits[l]
    return (
      <td
        className={`p-3 whitespace-nowrap border text-white ${
          data === 0 ? 'bg-green-700' : 'bg-red-900'
        }`}
        key={`${name}-${i}`}
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
      'Trail of the Fool': 'Coliseums',
      'Absolute Radiance': 'Godhome',
    }
    return names[name] || name
  }

  const renderHits = () => {
    return hits.map((data, i) => (
      <td
        className={`p-3 whitespace-nowrap border text-white ${
          data[index] === 0 ? 'bg-green-700' : 'bg-red-900'
        }`}
        key={`${name}-${index}-${i}`}
      >
        {data[index]}
      </td>
    ))
  }

  const renderSection = (getNamesFunction) => {
    return (
      <tr>
        <td className="p-3 whitespace-nowrap border">
          {getNamesFunction(name)}
        </td>
        {hits.map((data, i) => (
          <Fragment key={`${name}-${index}-${i}`}>
            {getDataSection(index, data, indexSections)}
          </Fragment>
        ))}
      </tr>
    )
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
          {renderHits()}
        </tr>
      )}
      {sect === 'ILs' && renderSection(getNamesILs)}
      {sect === 'segments' && renderSection(getNamesSegment)}
    </>
  )
}

export default Row
