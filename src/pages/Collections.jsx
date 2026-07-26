import Card from "../components/Card";
import PropTypes from 'prop-types'
import './Collections.css'


export default function Collections (props){


    return(

        <div className="collections">
            <img src='./assets/collections-fg.png' alt="collection foreground" className="collections__foreground-img" />
            <img src='./assets/collections-bg.png' alt="collection background" className="collections__background-img" />
            <Card clickCart={props.clickCart} clickHeart={props.clickHeart} saveModalData={props.saveModalData} searchTerm={props.searchTerm} />
        </div>

    )
}

Collections.propTypes = {
    clickCart: PropTypes.func,
    clickHeart: PropTypes.func,
    saveModalData: PropTypes.func,
    searchTerm: PropTypes.string,
}