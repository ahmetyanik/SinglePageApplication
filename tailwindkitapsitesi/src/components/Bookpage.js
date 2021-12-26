import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'

function Bookpage({books}) {



    const params = useParams()

    const [kitap, setKitap] = useState({})

    console.log(params);




    useEffect(()=>{

        books.forEach(kitap=>{

            console.log(kitap);
    
            console.log(params.bookname, kitap.kitapismi);
    
            if(params.bookname === kitap.kitapismi){
    
    
                return setKitap(kitap);
                
            }
            
        })
    },[])

   

    return (
        <div>
            <Navbar/>

            <div className='container p-5 columns-2'>

                <div className='flex justify-end'>
                    <img className='w-80' src={kitap.resimlinki} alt=''/>
                </div>
                <div>
                    <div className='text-lg font-semibold'>{kitap.kitapismi}</div>
                    <div className='text-lg font-'>{kitap.yazar}</div>
                    <div className='text-lg font-'>{kitap.yayinevi}</div>
                    <div className='text-lg font-'>{kitap.aciklama}</div>
                </div>

            </div>

        </div>
    )
}

export default Bookpage
