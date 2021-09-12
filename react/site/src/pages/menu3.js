import { Menu } from "../components/menu";
import { Faixa } from "../components/faixa";
import { Menu2 } from "../components/menu2";
import { Fonte_Ciano } from "../components/fonte-ciano";
import { Ciano } from "../components/ciano";

export default function Menu3() {
  return (
    <Menu>
      <div className="logo">
        <img src="/imgs/logo.png" alt="" />
        <Fonte_Ciano>Dev</Fonte_Ciano>Store
      </div>

      <Faixa />

      <div className="categorias">
        Gerenciamento <img src="/imgs/seta.png" alt="" />
      </div>

      <div className="categorias2">
        <Ciano />
        Produtos
      </div>

      <Menu2 />
    </Menu>
  );
}
