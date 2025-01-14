import { dataHits, labels, dataHitsTotal } from '../data/info'
import Row from '../components/Row'

const Splits = () => {
  const totalHits = dataHitsTotal()

  return (
    <table className="table-auto w-full text-center">
      <thead className="font-bold uppercase text-white bg-gray-900 text-center">
        <tr>
          <th className="p-3 whitespace-nowrap border" colSpan={2}>
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
        {labels.map((name, i) => (
          <Row
            name={name}
            index={i}
            key={name + i}
            hits={dataHits}
            sect="splits"
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="p-3 whitespace-nowrap border" colSpan={2}>
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

export default Splits
