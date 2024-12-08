import Row from '../components/Row'
import {
  dataHits,
  nameLabelsSegments,
  dataHitsAccumulate,
  segmentsLabelsIndex,
} from '../data/info'

const Segments = () => {
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
        {nameLabelsSegments().map((name, i) => (
          <Row
            name={name}
            index={i}
            key={name + i}
            hits={dataHitsAccumulate()}
            sect={'segments'}
            indexSections={segmentsLabelsIndex}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Segments
