import Row from '../components/Row'
import {
  dataHits,
  nameLabelsILs,
  dataHitsAccumulate,
  ilLabelsIndex,
} from '../data/info'

const ILs = () => {
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
        {nameLabelsILs().map((name, i) => (
          <Row
            name={name}
            index={i}
            key={name + i}
            hits={dataHitsAccumulate()}
            sect={'ILs'}
            indexSections={ilLabelsIndex}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ILs
