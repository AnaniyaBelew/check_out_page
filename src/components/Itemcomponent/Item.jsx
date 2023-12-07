import '../Itemcomponent/item.component.css'
const Item_card=()=>{
return(
    <div className="Item_info_holder">
    <h4>Your order</h4>
    <div className='image_container'>
    </div>
    <div className='product_description'>
        Product Description <br/><br/>
       <div className='item_detail'>
       <h5>QTY : </h5>
       <h5>SizeQTY : </h5>
       <h5>Color : </h5>
        </div> 
    </div>
    </div>
)
}
export default Item_card;