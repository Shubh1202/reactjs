function myFunction(item){
    return <li><a href={item}>{item}</a></li>;
}
const MenuList = () => {
    const list = ["Home", "Category", "About Us", "Contact Us", "Sign In", "Sign Up"];
    const numbers = [4, 9, 16, 25];
    // const newArr = numbers.map(myFunction)

    const MenuList = list.map(myFunction);
    const itemList = list.map(y => <li>{y}</li>);
    return (
        <div>
            <h1><u>The map() function:</u> This function creates an another array.</h1>
            <ul>{MenuList} <ul>{itemList}</ul></ul>;            
        </div>
    )
}

export default MenuList;
