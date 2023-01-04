const KeyAttribute = () => {
    const person = ["Amit", "Sumit", "Sam", "Amita", "Sumita", "Sanajay Singhaniya"];
    const personList = person.map(
        (data, index) => <li key={'person_'+index}>{data}</li>
    );

    return <ul>{personList}</ul>;

}

export default KeyAttribute;