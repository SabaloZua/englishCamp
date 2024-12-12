import Image from "next/image";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Script from "next/script";
import Sec_home from "../Components/Sec_home";
import Sec_Somo from "@/Components/Sec_Somo";
import Sec_Faca from "../Components/Sec_Faca"
import Sec_Contar from "@/Components/Sec_Contar";

import Footer from "@/Components/footer";
export default function Home() {
  return (
    <>
      <Head>
        
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
        <link href="https://cdn.tutorialjinni.com/aos/2.3.4/aos.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
        <title>English Camp</title>
      </Head>

        <div className="containe">
        <header>
                <Navbar/>
        </header>
         
          <main>
          
            <Sec_home/>
            
            <Sec_Somo/>

            <Sec_Faca/> 

          <Sec_Contar/>

      
          
          <Footer/>
          </main>

        </div>
      <Script src="/scripts/script.js"  strategy="beforeInteractive" />  
      <Script src="https://cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js" onReady={() =>{
        var scroll=new SmoothScroll('a[href*="#"]',{
          speed:600
        });
      }}/>  
     
    </>
  );
}
