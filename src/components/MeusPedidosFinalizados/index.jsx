import estilo from "./styles.module.scss"
import Item from "../../components/Item"
import MinhasInformacoes from "../MinhasInformacoes"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
export default function MeusPedidosFinalizados() {
    const navigate = useNavigate()
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('pedidos')
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function inutil() {
            try {
                const data = await fetch('https://backend-dc-server.onrender.com/carrinho/pedidos', {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                }).then(res => res.json())
                if (Array.isArray(data)) {
                    setProdutos(data)
                } else {
                    navigate('/login')
                }
            } catch (err) {
                navigate('/login')
            }
        }
        inutil()
    }, [])
    return (
        <div className={estilo.meusPedidosFinalizadosContainer}>
            <div className={estilo.containermaster}>

                <div className={estilo.subgrup1}>

                    <div className={estilo.listgroup1}><p className={estilo.textgroup1}>Meu Perfil</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1} onClick={() => { setOpcaoSelecionada('pedidos') }}
                        style={opcaoSelecionada && opcaoSelecionada === 'pedidos' ? { color: '#C92071' } : {}}>Meu Pedidos</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1} onClick={() => { setOpcaoSelecionada('informacoes') }}
                        style={opcaoSelecionada && opcaoSelecionada === 'informacoes' ? { color: '#C92071' } : {}}>Minhas Informações</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1}>Métodos de Pagamentos</p></div>

                </div>
                {opcaoSelecionada === 'pedidos' &&
                    <div className={estilo.subgrup2}>
                        <div className={estilo.list1group2}><p className={estilo.textgroup1}>Meus Pedidos</p><p className={estilo.statuslist1}>STATUS</p></div>
                        {produtos.map((produto) => (
                            <>
                                <hr />
                                <Item key={produto.id} id={produto.id} categoria={produto.categoria} descricao={produto.descricao} valor={produto.valor} img={produto.img} quantidade={produto.quantidade} />
                            </>
                        ))}


                    </div>}
                {opcaoSelecionada === 'informacoes' &&
                    <MinhasInformacoes />}

            </div>
        </div>
    )
}

