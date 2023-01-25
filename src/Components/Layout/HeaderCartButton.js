import { Fragment, useContext} from "react";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx=useContext(cartContext);
    const cartItemCounter=cartCtx.items.lenhth>0;
    return (
        <Fragment>
            <button className="btn btn-outline-primary" onClick={props.onShow}>
                Cart
            <sup style={{color: 'white'}}>{cartItemCounter}</sup>
            </button>
        </Fragment>
    );
}

export default HeaderCartButton;