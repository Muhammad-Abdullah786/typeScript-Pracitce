import { MouseEvent } from "react";

// for loop does not work in react we have to use map
function ListGroup() {
  let group = ["tokyo", "new york", " Osaka", "konami", "FUji", "kaku"];

  const handler = (e: MouseEvent) => {
    console.log(e.);
  };
  // group = [];
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
      {/* {group.length === 0 ? <p>NOt item here</p> : null} */}
      {/* // ther is another way */}
      {group.length === 0 && <p>NOt item here</p>}
      <ul className="list-group">
        {group.map((item, index) => {
          return (
            <h6
              className="list-group-item"
              key={index}
              onClick={(e) => {
                // onClick e is called
                console.log(e);
              }}
            >
              {index} {item}
            </h6>
          );
        })}
      </ul>
    </>
  );
}
export default ListGroup;
