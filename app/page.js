import '../styles/vendor/home.scss'
import Footer from "@/components/footer/page"
import Header from "@/components/header/page"
import Image from 'next/image'
import baymax from '../assets/baymax.jpg'
import Layout from '@/components/layout/page'


function Index() {
  return (
    <>
        <Layout>
          <section className="container hero" >

            <div className="hero-text">
              <h2>
                Ultimate MERN Stack Authentication App
              </h2>
              <p>
                First Full Stack application made from Scratch
              </p>
              <p>
                Using Node JS Next Js MongoDB Express JS
              </p>
              <div className="hero-buttons --flex-start">
                <button className="--btn --btn-danger">Register</button>
                <button className="--btn --btn-primary">Login</button>
              </div>
            </div>

            <div className="hero-image">
              <Image src={baymax} alt="Auth" />
            </div>

        </section>
        </Layout>
    </>
  )
}

export default Index