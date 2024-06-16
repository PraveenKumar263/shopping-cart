// display old price if available
// else check for old price then display it and the new price
export function Price({ price }) {
    return (
      <>
        {price.old_price ? <OldPrice old_price={price.old_price}/>: ""}
        {price.price_range ?  price.price_range: price.new_price}
      </>
    );
  }

// show old price in muted & striked out format if its a sale item.
function OldPrice({ old_price }) {
    return (
        <span className="text-muted text-decoration-line-through">{old_price}</span>
    );
}