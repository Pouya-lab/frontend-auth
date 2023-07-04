import { ReactDOM } from "react-dom"
import Loder from '../../assets/loader.gif'
import Image from "next/image"

import '../../styles/vendor/loader.scss'

function Loader() {
  return ReactDOM.createPortal(
    <div className="wrapper">
        <div className="loader">
            <Image src={Loader} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader