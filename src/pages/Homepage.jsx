import React from 'react'
import Topbar from '../common/Topbar'
import imagemDireita from '../assets/imgs/imagem_direita.png'
import img1 from '../assets/imgs/img 1.png'
import img2 from '../assets/imgs/img 2.png'
import img3 from '../assets/imgs/img 3.png'
import artist1 from '../assets/imgs/artistsm.png'
import artist2 from '../assets/imgs/artist2sm.png'
import artist3 from '../assets/imgs/artist3sm.png'
import Button from '../common/Button'

export default function Homepage() {
  return (
    <div >
        <Topbar/>
        <section className='flex justify-between mb-20'>
            <div className=' flex flex-col sm:gap-16 gap-8'>
                <div>
                    <h2 className='font-semibold sm:text-5xl text-4xl mb-4'>
                    Descubra novos artistas<br className='hidden sm:block'/> e suas obras
                    </h2>
                    <p className='text-gray sm:text-xl'>
                    Uma nova geração de jovens artistas surgem
                    </p>
                </div>
                <Button title={"Explorar"}/>
                <ul className='flex gap-8 justify-center sm:justify-start'>
                    <li>
                        <h3 className='font-bold text-2xl'>+2 mil</h3>
                        <p className='text-center'>Artistas</p>
                    </li>
                    <li>
                        <h3 className='font-bold text-2xl'>+16 mil</h3>
                        <p className='text-center'>Avaliações</p>
                    </li>
                    <li>
                        <h3 className='font-bold text-2xl'>+7 mil</h3>
                        <p className='text-center'>Vendas</p>
                    </li>
                
                </ul>
            </div>
            <img src={imagemDireita} className="w-[35%] hidden sm:block"/>

        </section>

        <section className=' flex sm:my-16 sm:flex-row flex-col'>
            <div className='flex gap-10  sm:flex-row flex-col'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
            </div>
            <div className='sm:mx-auto my-16 sm:my-0'>
                <h3 className='font-semibold text-4xl mb-4 text-center sm:text-start  '>Confira as<br className='sm:block hidden'/> últimas coleções</h3>
                <Button title="VER MAIS"/>
            </div>

        </section>

        <section>
        <h3 className='font-semibold text-4xl mb-8 '>Artistas</h3>
        <ul className='flex gap-8 sm:flex-row flex-col '>
            <li className="relative">
                <div className='absolute text-white p-4'>
                    <h4 className='font-semibold text-xl'>Sabine Lowe</h4>
                    <span className='text-xs'>Design e Fotógrafa</span>
                </div>
                <img src={artist1} className="w-full"/>
            </li>
            <li className="relative">
                <div className='absolute text-white p-4'>
                    <h4 className='font-semibold text-xl'>Eleanor Pena</h4>
                    <span className='text-xs'>Escritora e Design</span>
                </div>
                <img src={artist2} className="w-full"/>
            </li>
            <li className="relative">
                <div className='absolute text-white p-4'>
                    <h4 className='font-semibold text-xl'>Leslie Alexander</h4>
                    <span className='text-xs'>Diretora de arte</span>
                </div>
                <img src={artist3} className="w-full"/>
            </li>
        </ul>
        </section>

        <footer className='flex justify-between py-8 sm:flex-row flex-col'>
            <h1 className='font-semibold text-2xl text-center my-2'>Art.</h1>
            <ul className='flex justify-between sm:gap-16'>
                <li>
                    <span className='font-medium'>INÍCIO</span>
                </li>
                <li>
                    <span className='font-medium'>BUSCAR</span>
                </li>
                <li>
                    <span className='font-medium'>EXPLORAR</span>
                </li>
                <li>
                    <span className='font-medium'>SOBRE NÓS</span>
                </li>
            </ul>
        </footer>
    </div>
  )
}
