import Row from '../components/Row'
import {
  dataHits,
  nameLabelsSegments,
  dataHitsAccumulate,
  segmentsLabelsIndex,
  dataHitsTotal,
} from '../data/info'

const Segments = () => {
  const accumulatedHits = dataHitsAccumulate()
  const totalHits = dataHitsTotal()
  const names = nameLabelsSegments()

  return (
    <table className="table-auto w-full text-center">
      <thead className="font-bold uppercase text-white bg-gray-900 text-center">
        <tr>
          <th className="p-3 whitespace-nowrap border">
            <div className="font-bold">Name</div>
          </th>
          {dataHits.map((_, i) => (
            <th key={i} className="p-3 whitespace-nowrap w-5 border">
              <div className="font-bold">{i + 1}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {names.map((name, i) => (
          <Row
            name={name}
            index={i}
            key={name + i}
            hits={accumulatedHits}
            sect="segments"
            indexSections={segmentsLabelsIndex}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="p-3 whitespace-nowrap border">
            <div className="font-bold text-white">TOTAL:</div>
          </td>
          {totalHits.map((data, i) => (
            <td className="p-3 whitespace-nowrap border" key={i}>
              <div className="font-bold text-white">{data}</div>
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  )
}

export default Segments
