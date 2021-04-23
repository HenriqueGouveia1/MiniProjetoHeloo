import BarraPadrao from '../components/BarraPadrao'
import { Table } from 'reactstrap'

export default function Feed() {
  return (
    <div>
      <BarraPadrao />
      <div className="">
        <Table className="mt-sm-5" bordered>
          <thead>
            <th>Id</th>
            <th>Viabilidade</th>
            <th>Nome do Projeto</th>
            <th>Nome do Responsável</th>
            <th>Data de início prevista</th>
            <th>Data de término prevista</th>
            <th>Situação</th>
            <th>Valor de Execução</th>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Larry</td>
              <td>Larry</td>
              <td>Larry</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>

        </Table>

      </div>
    </div>
  );
}
