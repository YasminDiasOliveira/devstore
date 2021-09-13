import { Turma } from "../components/turma";
import { Cabecalho } from "../components/cabecalho";
import { Borda } from "../components/borda";
import { Novo } from "../components/novo";
import { Botao } from "../components/botao";
import { Titulo } from "../components/titulo";
import { Input } from "../components/input";
import { Cab } from "../components/cab";
import { Tabela } from "../components/tabela";
import { Tabela1 } from "../components/tabela1";
import { Fonte_Bold } from "../components/fonte-bold";
import { Borda_Ciano } from "../components/borda-ciano";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import { useState, useEffect, useRef, ReactDOM } from "react";

import LoadingBar from 'react-top-loading-bar';

import Api from '../service/api';
const api = new Api();

export default function Turma3() {

  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco_de, setPreco_de] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco_por, setPreco_por] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [estoque, setEstoque] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idAlterando, setIdAlterando] = useState('');

  const loading = useRef(null);

  const atualizar = async() => {
    loading.current.continuousStart();

    const produtos = await api.listar(1);
    setProdutos(produtos)

    loading.current.complete();
  }

  async function listar() {
    let r = await api.listar();
    setProdutos(r);
  }

  async function inserir() {

      if ( nome === '' )
        return toast.error( "O campo Nome precisa ser preenchido" );

      if ( preco_de === '' )
        return toast.error( "O campo Preço De precisa ser preenchido" );

      if ( categoria === '' )
        return toast.error( "O campo Categoria precisa ser preenchido" );
      
      if ( preco_por === '' )
        return toast.error( "O campo Preço Por precisa ser preenchido" );
      
      if ( avaliacao === '' )
        return toast.error( "O campo Avaliação precisa ser preenchido" );
      
      if ( estoque === '' )
        return toast.error( "O campo Estoque precisa ser preenchido" );

      if ( imagem === '' )
        return toast.error( "O campo de Imagem precisa ser preenchido" );

      if ( descricao === '' )
        return toast.error( "O campo de Descrição precisa ser preenchido" );

    if( idAlterando == '' ) {
      let r = await api.inserir(nome, preco_de, categoria, preco_por, avaliacao, estoque, imagem, descricao);

      if (r.erro) 
          toast.error(r.erro);
      else 
          toast.dark('Produto Cadastrado!');
    } else {
      let r = await api.alterar(idAlterando, nome, preco_de, categoria, preco_por, avaliacao, estoque, imagem, descricao);
      
      if (r.erro) 
          toast.error(r.erro);
      else 
          toast.dark('Produto Alterado!');
    }

    limparCampos();
    listar();
    await atualizar();
  }

  function limparCampos() {
    setNome('');
    setPreco_de('');
    setCategoria('');
    setPreco_por('');
    setAvaliacao('');
    setEstoque('');
    setImagem('');
    setDescricao('');
    setIdAlterando(0);
  }

    function remover(id) {
        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async() => {
                    let r = await api.remover(id);
                    if (r.erro) 
                        toast.error(`${r.erro}`);
                    else {
                        toast.dark('Produto removido!');
                        listar();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
          });   
      }

  async function editar(item) {
    setNome(item.nm_produto);
    setPreco_de(item.vl_preco_de);
    setCategoria(item.ds_categoria);
    setPreco_por(item.vl_preco_por);
    setAvaliacao(item.vl_avaliacao);
    setEstoque(item.qtd_estoque);
    setImagem(item.img_produto);
    setDescricao(item.ds_produto);
    setIdAlterando(item.id_produto);
  }

  useEffect(() => {
 
    listar();
  }, [])

  return (
    <Turma>
      <ToastContainer />
      <LoadingBar color="#10eaea" ref={loading} />
      <Cabecalho>
        <div className="usuario">
          <img src="/imgs/usu.png" alt="" />
          Olá,<Fonte_Bold>Yasmin Dias de Oliveira</Fonte_Bold>
        </div>

        <div className="botoes">
          <button className="fundo">
            <img src="/imgs/atualizar.svg" alt="" />
          </button>
          <button className="fundo">
            <img src="/imgs/sair.svg" alt="" />
          </button>
        </div>
      </Cabecalho>

      <Borda />

      <Novo>
        <Titulo>
          {" "}
          <Borda_Ciano />  {idAlterando == 0 ? "Novo Produto" : "Alterando Produto" + idAlterando }  {" "}
        </Titulo>

        <div className="alinhar">
          <Input>
            <div className="input1">
              <div className="box">
                <label for="nome">Nome:</label>
                <div className="text-input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>
              </div>

              <div className="box">
                <label for="nome">Preço DE:</label>
                <div className="text-input">   <input type="text" value={preco_de} onChange={e => setPreco_de(e.target.value)} /> </div>
              </div>
            </div>

            <div className="input2">
              <div className="box">
                <label for="nome">Categoria:</label>
                <div className="text-input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div>
              </div>

              <div className="box">
                <label for="nome">Preço POR:</label>
                <div className="text-input"> <input type="text" value={preco_por} onChange={e => setPreco_por(e.target.value)} /> </div>
              </div>
            </div>

            <div className="input3">
              <div className="box">
                <label for="nome">Avaliação:</label>
                <div className="text-input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>
              </div>

              <div className="box">
                <label for="nome">Estoque:</label>
                <div className="text-input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div>
              </div>
            </div>

            <div className="input4">
              <div className="box2">
                <label for="nome">Link Imagem:</label>
                <div className="link-input"> <input type="text" value={imagem} onChange={e => setImagem(e.target.value)} /> </div>
              </div>

              <div className="box2">
                <label for="nome">Descrição:</label>
                <div className="area-input">
                  <textarea
                    id="nome"
                    name="nome"
                    rows="5"
                    cols="33"
                    className="area-input"
                    value={descricao} onChange={e => setDescricao(e.target.value)}
                  > </textarea>
                </div>
              </div>
            </div>
          </Input>

          <Botao>
            <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar" } </button>
          </Botao>
        </div>
      </Novo>

      <Novo>
        <div className="row-bar">
          <div className="bar-new-student"></div>
          <Titulo>
            {" "}
            <Borda_Ciano /> Produtos Cadastrados{" "}
          </Titulo>
        </div>

        <Tabela>
          <thead>
            <Cab>
              <th></th>
              <th>ID</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th></th>
              <th></th>

            </Cab>
          </thead>

          <tbody>

            {produtos.map((item, i ) =>
              <Tabela1>
                  <tr className={i % 2 == 0 ? "linha-alternada" : "linha-alternada2"}>
                  <td>
                    {" "}
                    <img src={item.img_produto} style={{width: '40px', height:'40px' }} />{" "}
                  </td>
                  <td> {item.id_produto} </td>
                  <td title={item.nm_produto}> 
                      {item.nm_produto != null && item.nm_produto.length >= 12
                      ? item.nm_produto.substr(0, 12) + '...' 
                      : item.nm_produto} 
                  </td>
                  <td> {item.ds_categoria} </td>
                  <td> {item.vl_preco_por} </td>
                  <td> {item.qtd_estoque} </td>
                  <td className="coluna-acao"> <button onClick={() => editar(item)}> <img src="/imgs/editar.svg" alt="" /> </button> </td>
                  <td className="coluna-acao"> <button onClick={() => remover(item.id_produto)} > <img src="/imgs/lixeira.svg" alt="" /> </button> </td>
                </tr>
              </Tabela1>
            )}
          </tbody>
        </Tabela>
      </Novo>
    </Turma>
  );
}
