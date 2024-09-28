/*Note :- React does not render `false`,`null`,`undefined`, or `NaN`
in the DOM. These values, when used in JSX, will result in nothing being displayed

Note:- However `0` and empty string (`""`) are exceptions
Ex:- solution (4) me
*/
import seriseData from "../api/seriseData.json";

const Cards = () => {
  //Note :- JSX value Pass
  //const Address = "Patna Bihar"; // Dynamic JSX value and Print value

  // Function
  /*const CallFunctionInJSX = () => {
    const MyName = "Ram Kumar";
    return MyName;
  };*/

  // Note :- Conditional rendering in JSX
  //(1) First Way :- Code repeat

  /* let Age = 18;
  if (Age < 20) {
    return (
      <>
        <div className="text-center relative h-[200px] w-[250px] rounded-md mt-2 ">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white"></h1>
            <p className="mt-2 text-sm text-gray-300">
              <h2 className="bg-black">
                {Address} & Call function in JSX se {CallFunctionInJSX()}
              </h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button className="bg-black text-white">Not Avaliable</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-center relative h-[200px] w-[250px] rounded-md mt-2 ">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white"></h1>
          <p className="mt-2 text-sm text-gray-300">
            <h2 className="bg-black">
              {Address} & Call function in JSX se {CallFunctionInJSX()}
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="bg-black text-white">Watch Now</button>
        </div>
      </div>
    </>
  );
*/

  //(2) Second Way :- Do not repeat yourself

  /* Note :- JS Me same Achive 
 const Elm = document.getElementById("btn")
 if(Age>=18){
    Elm.textContent = "Watch";
 }else{
    Elm.textContent = "Not Available"
 }*/

  /* let Age = 20;
  return (
    <>
      <div className="text-center relative h-[200px] w-[250px] rounded-md mt-2 ">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white"></h1>
          <p className="mt-2 text-sm text-gray-300">
            <h2 className="bg-black">
              {Address} & Call function in JSX se {CallFunctionInJSX()}
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="bg-black text-white">
            {Age >= 18 ? "Watch Now" : "Not Available"}
          </button> 
        </div>
      </div>
    </>
  );
  */

  // (3) Three Way
  /*let Age = 16;
  let PlzWatch = "Not Available";
  if (Age >= 18) {
    PlzWatch = "Watch Now";
  }

  return (
    <>
      <div className="text-center relative h-[200px] w-[250px] rounded-md mt-2 ">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white"></h1>
          <p className="mt-2 text-sm text-gray-300">
            <h2 className="bg-black">
              {Address} & Call function in JSX se {CallFunctionInJSX()}
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="bg-black text-white">{PlzWatch}</button>
        </div>
      </div>
    </>
  );*/

  // (4) Four Way :- Solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function
  /*const Age = 18;
  const CanWatch = () => {
    if (Age >= 16) return "Watch Now";
    return "Not Available";
  };

  // const Student = [];
  const Student = [1, 4];
*/
  // return (
  //   <>
  //     <div className="text-center relative h-[200px] w-[250px] rounded-md mt-2 ">
  //       <img
  //         src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  //         alt="AirMax Pro"
  //         className="z-0 h-full w-full rounded-md object-cover"
  //       />
  //       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  //       <div className="absolute bottom-4 left-4 text-left">
  //         <h1 className="text-lg font-semibold text-white">
  //           {/* {Student.length && "Not student Found"} or Student Length =
  //           {Student.length} */}
  //           {/*(1) Solution first
  //           {Student.length === 0 && "Not Student Found"} Student Length :
  //           {Student.length}
  //           */}
  //           {/*(2) Solution second */}
  //           {!Student.length && "Not Student Found"} Student Length :
  //           {Student.length}
  //         </h1>
  //         <p className="mt-2 text-sm text-gray-300">
  //           <h2 className="bg-black">
  //             {Address} & Call function in JSX se {CallFunctionInJSX()}
  //           </h2>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
  //           debitis?
  //         </p>
  //         <button className="bg-black text-white">{CanWatch()}</button>
  //       </div>
  //     </div>
  //   </>
  // );

  //(5) Fift Way :- Looping in JSX
  return (
    <>
      <ul>
        {seriseData.map((curElem) => {
          return (
            <li key={curElem.id}>
              <div>
                <img
                  src={curElem.img_url}
                  alt="sg.webp"
                  width="20%"
                  height="20%"
                />
              </div>

              <h2>Name : {curElem.name}</h2>
              <h3>Rating : {curElem.rating}</h3>
              <p>Description : {curElem.description}</p>
              <p>Cast : {curElem.cast}</p>
              <a href={curElem.watch_url} target="_blank">
                <button className="bg-blue-600">Watch Now</button>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cards;
