// for loop does not work in react we have to use map
function ListGroup() {
  let group = ["tokyo", "new york", " Osaka", "konami", "FUji", "kaku"];
  group = [];
  //   to use loop we must use map
  //   if (group.length === 0) {
  //     return (
  //       <>
  //         <h1>List item</h1>
  //         <p>There is no Item here </p>
  //       </>
  //     );
  //   }

  // there is the dublication in the code that's why its not a good code
  return (
    <>
      <h1>ListGoup</h1>
      {/* // cant be here */}
      {group.length === 0 ? <p>NOt item here</p> : null}
      <ul className="list-group">
        {group.map((item, index) => {
          return (
            <h6 key={index}>
              {index} {item}
            </h6>
          );
        })}
      </ul>
    </>
  );
}
export default ListGroup;
