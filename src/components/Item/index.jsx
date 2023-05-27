import estilo from "./styles.module.scss"
import tenis from "../../assets/images/tenis-prod-adic.png"

export default function Item(props) {
    return (
        <div className={estilo.list2group2}>
            <div className={estilo.itemsellgroup1}>
                <div className={estilo.itemimglist}><img src={props.img} className={estilo.itemimg} /></div>
                <div>
                    <p className={estilo.itemsubtitle}>Categoria: {props.categoria}</p>
                    <p className={estilo.itemtitle}>Descricao: {props.descricao}</p>
                </div>

            </div>
            <div className={estilo.statuslist2}>
                <p className={estilo.statusdinamic}>STATUS</p>
                <p >Qtd: {props.quantidade}</p></div>

        </div>
    )
}