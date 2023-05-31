import Img from '../images/img.png'
import './Imagem.css'

export default function Imagem(){
    return (
        <>
        <div className='container'>
            <img src={Img} alt="" className='img' />
        </div>
        </>
    )
}