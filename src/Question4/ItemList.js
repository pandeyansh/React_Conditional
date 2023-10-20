function ItemList({ items }) {
return (
    <div className="item-list">
    {items.length === 0 ? (
        <p>No items found</p>
    ) : (
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    )}
    </div>
);
}
export default ItemList;